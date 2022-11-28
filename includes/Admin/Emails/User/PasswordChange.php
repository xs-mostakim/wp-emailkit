<?php 
namespace EmailKit\Admin\Emails\User;

use WP_Query;

defined("ABSPATH") || exit;

class PasswordChange {

	public function __construct()
	{
		//error_log("Hello");
		add_filter('wp_password_change_notification_email',[$this,'passwordChangedMail'],10,3);
	}

	public function passwordChangedMail($wp_password_change_notification_email, $user, $blogname) {

		$args = array(
            'post_type'  => 'email',
            'meta_query' => array(
                array(
                    'key'     => 'email-template-type',
                    'value'   => 'password_change',
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

        $wp_password_change_notification_email['from'] = get_option('admin_email');
        if (isset($query->posts[0])) {
            $wp_password_change_notification_email['message'] = str_replace(array_keys($details), array_values($details),  get_post_meta($query->posts[0]->ID, 'email-template-html')[0]);
        }

        wp_mail(
			$wp_password_change_notification_email['to'],
			wp_specialchars_decode( sprintf( $wp_password_change_notification_email['subject'], $blogname ) ),
			$wp_password_change_notification_email['message'],
			$wp_password_change_notification_email['headers']
		);
    }
}