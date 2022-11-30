<?php 
namespace EmailKit\Admin\Emails;

class EmailConfig {


	public function __construct()
	{
		add_action('phpmailer_init',[$this,'mailtrap']);

	}

    function mailtrap($phpmailer) {
        $phpmailer->isSMTP();
        $phpmailer->Host = 'smtp.mailtrap.io';
        $phpmailer->SMTPAuth = true;
        $phpmailer->Port = 2525;
        $phpmailer->Username = '385fd4acab0c89';
        $phpmailer->Password = '6cf33716946c78';
    }

    
}