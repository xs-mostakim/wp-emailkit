<?php 

namespace EmailKit\Admin\metafield;

class StyleLoad {

	public function __construct()
	{
        add_action('admin_print_scripts-post-new.php', [$this,'cpt_admin_script']);
        add_action('admin_print_scripts-post.php', [$this,'cpt_admin_script']);

	}


    public function cpt_admin_script(){

    wp_enqueue_style( 'slider', EMAILKIT_URL . 'src/dest/merged.css', [], EMAILKIT_VERSION );
	// wp_enqueue_script( 'emailkit-loadBtn-cpt', EMAILKIT_URL . 'src/dest/merged.js', ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );
	wp_enqueue_script( 'emailkit-loadBtn-cpt', EMAILKIT_URL . 'assets/dist/admin/js/test.js', ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );
	//wp_enqueue_script( 'emailkit-loadBtn-cpt', EMAILKIT_URL . 'src/dest/myJs.js', ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );

   } 
}