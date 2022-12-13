<?php 

namespace EmailKit;

/**
 * The admin class
 */
class Admin {
   
	
    /**
     * Initialize the class
     */
    public function __construct() {
        new Admin\CPT();
		new Admin\MetaBox();
        new Admin\Emails\EmailConfig();
        new Admin\Emails\User\NewUserRegister();
        new Admin\Emails\Woocommerce\NewOrder();
        new Admin\Emails\Woocommerce\ProcessingOrder();
        new Admin\Emails\Woocommerce\CancelledOrder();
        new Admin\Emails\Woocommerce\FailedOrder();
        new Admin\Emails\Woocommerce\OrderOnHold();
        new Admin\Emails\Woocommerce\CompletedOrder();
        new Admin\Emails\Woocommerce\RefundOrder();
        new Admin\Emails\Woocommerce\CustomerNote();
        new Admin\Emails\Woocommerce\InvoiceOrder();
        new Admin\Emails\Woocommerce\ResetPassword();

    }
	

}