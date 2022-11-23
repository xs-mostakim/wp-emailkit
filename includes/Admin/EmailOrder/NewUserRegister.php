<?php

namespace EmailKit\Admin\EmailOrder;

defined('ABSPATH') || exit;


class NewUserRegister
{
    public function __construct()
    {
        add_filter('wp_new_user_notification_email',[$this,'newUserMail'],10,3);
    }


    public function newUserMail($wp_new_user_notification_email, $user, $blogname)
    {
        $data = $this->getPostMeta();
        if ($data) {
            $postMeta = get_post_meta($data->post->ID,  "email-template-html", true);
            $subject = get_post_meta ($data->post->ID,"email-subject", true);
            $search = ["{{first_name}}", "{{email}}", "{{password}}"];
            $replace   = [$user->data->display_name, $user->data->user_email, $user->data->user_pass];
            $message = str_replace($search, $replace, $postMeta,$subject);

            $wp_new_user_notification_email['message'] = $message;
            $wp_new_user_notification_email['headers'] = array(
                'From: XpeedStudio<example@xpeedstudio.com>',
                'Content-Type: text/html; charset=UTF-8'
            );
        }

        return $wp_new_user_notification_email;
    }
    /**
     * @return object|null
     */
    public function getPostMeta()
    {
        $query = array(
            'post_type' => 'email',
            'posts_per_page' => 1,
            'meta_query' => array(
                array(
                    'key' => 'email-template-type',
                    'value' => 'new_user_register',
                    'compare' => '=',
                ),
                array(
                    'key' => 'email-template-status',
                    'value' => 1,
                    'compare' => '=',
                ),
                'relation' => 'AND'
            )
        );
        return new \WP_Query($query);
    }
}