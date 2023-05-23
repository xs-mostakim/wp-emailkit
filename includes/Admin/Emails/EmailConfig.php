<?php 
namespace EmailKit\Admin\Emails;

class EmailConfig {


	public function __construct()
	{
		add_action('phpmailer_init',[$this,'mailtrap']);

	}

    function mailtrap($phpmailer) {
        $phpmailer->isSMTP();
        $phpmailer->Host = 'sandbox.smtp.mailtrap.io';
        $phpmailer->SMTPAuth = true;
        $phpmailer->Port = 2525;
        $phpmailer->Username = 'e3f128bfc717ac';
        $phpmailer->Password = 'f8d6d1b6740696';
    }

    
}