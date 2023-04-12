<?php

namespace EmailKit\Admin;
use EmailKit\Admin\Emails\Helpers\Utils;

use WP_Query;

defined('ABSPATH') || exit;
/**
 * Add MetaBoxes
 */
class MetaBox
{
    /**
     * @var array
     */
    public $template_types = [];

    public function __construct()
    {
        $this->template_types = [
            "woocommerce_low_stock"                => "WC - Low Stock",
            "woocommerce_no_stock"                 => "WC - No Stock",
            "woocommerce_product_on_backorder"     => "WC - Product ON Back Order",
            "wc_admin_new_order"                   => "New Order",
            "wc_cancelled_order"                   => "Cancelled order",
            "wc_failed_order"                      => "Failed Order",
            "wc_order_on_hold"                     => "Order On Hold",
            "wc_processing_order"                  => "Processing Order",
            "wc_completed_order"                   => "Completed Order",
            "wc_refunded_order"                    => "Refunded Order",
            "wc_customer_invoice_or_order_details" => "Customer Invoice or Order Details",
            "wc_customer_note"                     => "Customer Note",
            "wc_reset_password"                    => "Reset Password",
            "wc_new_account"                       => "New Account",
            "new_user_register"                    => "New User Register",
        ];

        add_action('add_meta_boxes', [$this, 'add']);
        add_action('save_post', [$this, 'save']);
    }

    public function add()
    {

        add_meta_box("metaBox_id", "Email Details", [$this, 'emailTemplate'], ["email"], "advanced", "high", null);
    }

    /**
     * MetaBox Template
     */
    public function emailTemplate()
    {
    ?>
<iframe src="<?php echo EMAILKIT_URL . 'out/index.html' ?>" width="100%" height="800" frameborder="0"></iframe>
<?php
    }

    /**
     * Save metaBox values
     */
    public function save($post_id)
    {
        if (!is_user_logged_in() || !current_user_can('administrator')) {
            return $post_id;
        }

        // We have Verified The nonce
        if (!isset($_POST['meta-box-nonce']) || !wp_verify_nonce($_POST['meta-box-nonce'], basename(__FILE__))) {
            return ;
        }
        if (isset($_POST['email_template_subject'])) {
            update_post_meta($post_id,'email_template_subject', sanitize_text_field($_POST['email_template_subject']));
        }

        $email_template_type = sanitize_text_field($_POST['email_template_type']);
        if (isset($_POST['email_template_type']) && isset($this->template_types[$email_template_type])) {
    
            update_post_meta($post_id, 'email_template_type', $email_template_type);
        }

        if (isset($_POST['email_template_content_html'])) {
            $template_html = Utils::kses($_POST['email_template_content_html']);
            update_post_meta($post_id, 'email_template_content_html', $template_html);
        }

        if (isset($_POST['email_template_content_object'])) {
            $template_html = Utils::kses($_POST['email_template_content_object']);
            update_post_meta($post_id, 'email_template_content_object', $template_html);
        }
       

        if(isset($_POST["email_template_status"])){
            $type = $_POST["email_template_status"];
            $this->deactivateTemplateTypes($type);
            update_post_meta($post_id, 'email_template_status', true);
        } else {
            update_post_meta($post_id, 'email_template_status', false);
        }
    }
    public function deactivateTemplateTypes($type)
    {

        $query = array(
            'post_type' => 'email',
            'meta_query' => array(
                array(
                    'key' => 'email_template_type',
                    'value' => $type,
                    'compare' => '=',
                ),
                array(
                    'key' => 'email_template_status',
                    'value' => 1,
                    'compare' => '=',
                ),
                'relation' => 'AND',
                'fields' => 'ids'
            )
        );

        $data = new \WP_Query($query);
        if (isset($data)) {
            $postsIds = wp_list_pluck($data->posts, 'ID');
            foreach ($postsIds as $id) {
                update_post_meta($id, 'email_template_status', false);
            }
        }
    }
}



