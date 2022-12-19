<?php 
namespace EmailKit\Admin\Emails\Woocommerce;

use WP_Query;

defined("ABSPATH") || exit;

class BackOrder {

	public function __construct()
	{
		add_action('woocommerce_email', [$this, 'remove_woocommerce_emails']);
		add_filter('woocommerce_product_on_backorder_notification', [$this, 'stockNotification'], 10, 1);
	}

	public function remove_woocommerce_emails ($email_class) {

		remove_action( 'woocommerce_product_on_backorder_notification', array( $email_class, 'backorder' ) );
	}

	public function stockNotification ($products) {

		$args = [
            'post_type'  => 'email',
            'meta_query' => [
                [
                    'key'   => 'email-template-type',
                    'value' => 'woocommerce_product_on_backorder'
                ],
                [
                    'key'   => 'email-template-status',
                    'value' => true
                ]
            ]
        ];
        $query = new WP_Query($args);
        $email = get_option('admin_email');
		if (isset($query->posts[0])) {
			$html  = get_post_meta($query->posts[0]->ID, 'email-template-html')[0];
			$tbody = substr($html, strpos($html, 'tbody'));
			$row = substr($tbody, strpos($tbody, '<tr'), strpos($tbody, '</tbody>')- strpos($tbody, '<tr>'));
			$rows = '';
            $html = str_replace($row, $rows, $html);

		 $details = [

			"{{name}}"          => $products->name,
			"{{stock_quantity}}" => $products->stock_quantity,
			"{{stock_status}}"   =>$products->stock_status,
			"{{product_id}}"     =>$products->id,
			"{{short_description}}" => $products->short_description,
			"{{product_price}}"     => $products->price,
			"{{manage_stock}}"      => $products->manage_stock,
			"{{sku}}"               => $products->sku,
			"{{backorders}}"        => $products->backorders,


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