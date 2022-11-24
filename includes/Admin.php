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
        new Admin\Emails\NewUserRegister();
        new Admin\Emails\Woocommerce\NewOrder();

    }
	

}