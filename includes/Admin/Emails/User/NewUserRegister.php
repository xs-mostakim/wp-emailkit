<?php

namespace EmailKit\Admin\Emails\User;

use WP_Query;

defined('ABSPATH') || exit;


class NewUserRegister
{
    public function __construct()
    {
        add_filter('wp_new_user_notification_email',[$this,'newUserMail'],10,3);
    }


    public function newUserMail($new_user_notification_email, $user, $blogname)
    {
        $args = array(
            'post_type'  => 'email',
            'meta_query' => array(
                array(
                    'key'     => 'email-template-type',
                    'value'   => 'new_user_register',
                ),
                array(
                    'key'     => 'email-template-status',
                    'value'   => true,
                ),
            ),
        );
        $query = new WP_Query ($args);
        $key = get_password_reset_key($user);
        $details = [
            "{{app_name}}" => $blogname,
            "{{reset_url}}" => network_site_url("wp-login.php?action=rp&key=$key&login=" . rawurlencode($user->user_login), 'login'),
            "{{display_name}}" => $user->display_name,
            "{{user_url}}" => $user->user_url,
            "{{user_email}}" => $user->user_email,
        ];

        $new_user_notification_email['from'] = get_option('admin_email');
        if (isset($query->posts[0])) {
            $new_user_notification_email['message'] = str_replace(array_keys($details), array_values($details),  get_post_meta($query->posts[0]->ID, 'email-template-html')[0]);
        }

        $new_user_notification_email['subject'] =str_replace(array_keys($details), array_values($details),  get_post_meta($query->posts[0]->ID, 'email-template-subject')[0]);
        $new_user_notification_email['headers'] = [
            'From: MailKit <' . $new_user_notification_email['from'] . "> \r\n",
            'Reply-To: <' . $new_user_notification_email['from'],
            'Content-Type: text/html; charset=UTF-8'
        ];

        return $new_user_notification_email;
    }
}