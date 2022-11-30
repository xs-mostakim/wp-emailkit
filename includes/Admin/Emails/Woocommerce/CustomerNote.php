<?php 

namespace EmailKit\Admin\Emails\Woocommerce;

use WP_Query;

defined("ABSPATH") || exit;

class CustomerNote {

	public function __construct()
	{
		add_action('woocommerce_email', [$this,'remove_woocommerce_emails']);
		add_filter('woocommerce_new_customer_note_notification',[$this,'noteCustomer'],10,1);
	}

	public function remove_woocommerce_emails ($email_class) {
		

        remove_action( 'woocommerce_new_customer_note_notification', array( $email_class->emails['WC_Email_Customer_Note'], 'trigger' ) );


	}

	public function noteCustomer($order) {

		$args = array(
            'post_type'  => 'email',
            'meta_query' => array(
              array(
                'key'     => 'email-template-type',
                'value'   => 'wc_customer_note',
              ),
              array(
                'key'     => 'email-template-status',
                'value'   => true,
              ),
            ),
          );
          $query = new WP_Query($args);
          $email = get_option('admin_email');
		  if ( ! empty( $order ) ) {
			$defaults = array(
				'order_id'      => '',
				'customer_note' => '',
			);

			$order = wp_parse_args( $order, $defaults );

			$order_id      = $order['order_id'];
			$customer_note = $order['customer_note'];

			if ( $order_id ) {
				$this->object = wc_get_order( $order_id );

				if ( $this->object ) {
					$this->recipient                      = $this->object->get_billing_email();
					$this->customer_note                  = $customer_note;
				}
			}
			$html  = get_post_meta($query->posts[0]->ID, 'email-template-html')[0];

		    $details = [
			"{{order_id}}" => $order_id,
			"{{customer_note}}" =>$this->customer_note,
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