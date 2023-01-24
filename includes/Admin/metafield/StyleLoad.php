<?php 

namespace EmailKit\Admin\metafield;

class StyleLoad {

	public function __construct()
	{
        add_action('init', function () {
            if (!is_user_logged_in() || !current_user_can('publish_posts')) {
                return;
            }

            add_action('admin_print_scripts-post-new.php', [$this,'cpt_admin_script']);
            add_action('admin_print_scripts-post.php', [$this,'cpt_admin_script']);

        });

	}

    function cpt_admin_script() {
       
        wp_enqueue_style( 'emaiilkit-editor-style-cpt', EMAILKIT_URL . 'assets/dist/admin/styles/test.css', [], EMAILKIT_VERSION );
        wp_enqueue_script( 'emailkit-loadBtn-cpt', EMAILKIT_URL . 'src/dest/merged.js', ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );  
        
    } 
    

}