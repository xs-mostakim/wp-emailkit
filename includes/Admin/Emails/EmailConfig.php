<?php 
namespace EmailKit\Admin\Emails;

class EmailConfig {


	public function __construct()
	{
		add_action('phpmailer_init',[$this,'mailtrap']);

	}

    public function mailtrap($phpmailer) {
        $phpmailer->isSMTP();
        $phpmailer->Host = 'smtp.mailtrap.io';
        $phpmailer->SMTPAuth = true;
        $phpmailer->Port = 2525;
        $phpmailer->Username = 'a4f072b64a1b63';
        $phpmailer->Password = '97c22d3253f51e';
    }

    
}