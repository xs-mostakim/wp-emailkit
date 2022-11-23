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
        new Admin\EmailConfig();
        new Admin\EmailOrder\NewUserRegister();
        new Admin\EmailOrder\OrderProcess();

    }
	

}