<?php 
namespace EmailKit\Admin\EmailOrder;

defined('ABSPATH') || exit;

class OrderProcess {

    public function __construct()
    {
       
       add_action('woocommerce_email', [$this,'remove_woocommerce_emails']);
       add_filter('woocommerce_order_status_pending_to_processing_notification',[$this,'newOrder'],10,2); 
    }


    public function newOrder($order_id, $order) {
        
        $data = $this->getPostMeta();
        error_log("Hello");
        if ($data) {
            $postMeta = get_post_meta($data->post->ID,  "email-template-html", true);
            $search = ["{{order_id}}", "{{order_date}}"];
            $replace   = [$order_id,$order->order_date];
            $message = str_replace($search, $replace, $postMeta);
            $sent = wp_mail("mostakim01786@gmail.com.com", "[Email Template Plugin]: New order #$order_id", $message, array(
                'From: XpeedStudio<example@xpeedstudio.com>',
                'Content-Type: text/html; charset=UTF-8'
            ));
        } 
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
                    'value' => 'wc_processing_order',
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

    public function remove_woocommerce_emails($email_class)
    {

        /**
		 * Hooks for sending emails during store events
		 **/
		//remove_action( 'woocommerce_low_stock_notification', array( $email_class, 'low_stock' ) );
		//remove_action( 'woocommerce_no_stock_notification', array( $email_class, 'no_stock' ) );
		//remove_action( 'woocommerce_product_on_backorder_notification', array( $email_class, 'backorder' ) );
		
		// New order emails
		remove_action( 'woocommerce_order_status_pending_to_processing_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
		remove_action( 'woocommerce_order_status_pending_to_completed_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
		remove_action( 'woocommerce_order_status_pending_to_on-hold_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
		remove_action( 'woocommerce_order_status_failed_to_processing_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
		remove_action( 'woocommerce_order_status_failed_to_completed_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
		remove_action( 'woocommerce_order_status_failed_to_on-hold_notification', array( $email_class->emails['WC_Email_New_Order'], 'trigger' ) );
		
		// Processing order emails
		remove_action( 'woocommerce_order_status_pending_to_processing_notification', array( $email_class->emails['WC_Email_Customer_Processing_Order'], 'trigger' ) );
		remove_action( 'woocommerce_order_status_pending_to_on-hold_notification', array( $email_class->emails['WC_Email_Customer_Processing_Order'], 'trigger' ) );
		
		// Completed order emails
		//remove_action( 'woocommerce_order_status_completed_notification', array( $email_class->emails['WC_Email_Customer_Completed_Order'], 'trigger' ) );
			
		// Note emails
		//remove_action( 'woocommerce_new_customer_note_notification', array( $email_class->emails['WC_Email_Customer_Note'], 'trigger' ) );
}


}

