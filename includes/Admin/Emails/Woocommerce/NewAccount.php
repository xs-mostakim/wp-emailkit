<?php 

namespace EmailKit\Admin\Emails\Woocommerce;

use WP_Query;
use WP_User;

defined('ABSPATH') || exit;

class NewAccount {

	public function __construct()
	{
		add_action('woocommerce_email',[$this,'remove_woocommerce_emails']);
		add_filter('woocommerce_email_enabled_customer_new_account',[$this,'newAccountMail'],10,3);
	}

	public function remove_woocommerce_emails($email_class) {

		remove_action('woocommerce_email_enabled_customer_new_account',array( $email_class->emails['WC_Email_Customer_New_Account'], 'trigger' ));
	}

	public function newAccountMail($user_id, $user, $password_generated = false) {

		$args = array(
            'post_type'  => 'email',
            'meta_query' => array(
                array(
                    'key'     => 'email-template-type',
                    'value'   => 'wc_new_account',
                ),
                array(
                    'key'     => 'email-template-status',
                    'value'   => true,
                ),
            ),
        );
        $query = new WP_Query ($args);
        $email = get_option('admin_email');

		if ( $user_id ) {
			$this->object = new WP_User( $user_id );
			$this->user_login         = stripslashes( $this->object->user_login );
			$this->user_email         = stripslashes( $this->object->user_email );
			$this->recipient          = $this->user_email;
			$this->password_generated = $password_generated;
			$this->set_password_url   = $this->generate_set_password_url();
		}
		if (isset($query->posts[0])) {
			$html  = get_post_meta($query->posts[0]->ID, 'email-template-html')[0];
			$tbody = substr($html, strpos($html, 'tbody'));
			$row = substr($tbody, strpos($tbody, '<tr'), strpos($tbody, '</tbody>')- strpos($tbody, '<tr>'));
			$rows = '';
            $html = str_replace($row, $rows, $html);
		

		 $details = [
			"{{user_login}}" => $user->user_login,
			"{{user_email}}"  => $user->user_email,
			"{{set_password_url}}" => $this->set_password_url,
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

	protected function generate_set_password_url() {
		// Generate a magic link so user can set initial password.
		$key = get_password_reset_key( $this->object );
		if ( ! is_wp_error( $key ) ) {
			$action                 = 'newaccount';
			return wc_get_account_endpoint_url( 'lost-password' ) . "?action=$action&key=$key&login=" . rawurlencode( $this->object->user_login );
		} else {
			// Something went wrong while getting the key for new password URL, send customer to the generic password reset.
			return wc_get_account_endpoint_url( 'lost-password' );
		}
	}

	
}