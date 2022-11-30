<?php 

namespace EmailKit\Admin\Emails\Woocommerce;

use WP_Query;

defined("ABSPATH") || exit;

class ResetPassword {

	public function __construct()
	{
		add_action('woocommerce_email', [$this,'remove_woocommerce_emails']);
		add_filter('woocommerce_reset_password_notification',[$this,'passwordReset'],10,2);
	}

	public function remove_woocommerce_emails($email_class) {
		remove_action('woocommerce_reset_password_notification',array( $email_class->emails['WC_Email_Customer_Reset_Password'], 'trigger'));
	}

	public function passwordReset($user_login, $reset_key) {

		$args = array(
            'post_type'  => 'email',
            'meta_query' => array(
                array(
                    'key'     => 'email-template-type',
                    'value'   => 'wc_reset_password',
                ),
                array(
                    'key'     => 'email-template-status',
                    'value'   => true,
                ),
            ),
        );
        $query = new WP_Query ($args);
		$email = get_option('admin_email');

		if (isset($query->posts[0])) {
			$html  = get_post_meta($query->posts[0]->ID, 'email-template-html')[0];
			$tbody = substr($html, strpos($html, 'tbody'));
			$row = substr($tbody, strpos($tbody, '<tr'), strpos($tbody, '</tbody>')- strpos($tbody, '<tr>'));
			$rows = '';
            $html = str_replace($row, $rows, $html);
		

		 $details = [
			"{{user_login}}" => $user_login,
			"{{reset_key}}"  => $reset_key,
		];

		$message  = str_replace(array_keys($details), array_values($details), $html);
	    }
		$to =  get_option('admin_email');
		$subject =str_replace(array_keys($details), array_values($details),  get_post_meta($query->posts[0]->ID, 'email-template-subject')[0]);
		$headers = [
		'From: ' . $email . "\r\n",
		'Reply-To: ' . $email . "\r\n",
		'Content-Type: text/html; charset=UTF-8'
		];

		wp_mail($to, $subject, $message, $headers);



	}
}