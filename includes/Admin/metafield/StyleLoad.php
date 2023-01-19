<?php 

namespace EmailKit\Admin\metafield;

class StyleLoad {

	public function __construct()
	{
        add_action('init', function () {
            if (!is_user_logged_in() || !current_user_can('publish_posts')) {
                return;
            }

           // add_action('enqueue_block_editor_assets', [$this, 'addEnqueue']);
            add_action('admin_enqueue_scripts', [$this, 'addEnqueue']);

           // add_action('admin_enqueue_scripts', [$this, 'globalScripts']);
           // add_action('elementor/editor/after_enqueue_scripts', [$this, 'addEnqueue']);
           // add_action('elementor/editor/after_enqueue_scripts', [$this, 'elementorEditorStyle']);

            //add_action('admin_print_scripts-post-new.php', [$this,'cpt_admin_script']);
           // add_action('admin_print_scripts-post.php', [$this,'cpt_admin_script']);

        });

	}
    public function addEnqueue()
    {
        
       // $current_screen = get_current_screen();

        if(is_admin()){         
            wp_enqueue_script( 'emailkit-admin-scripts', EMAILKIT_URL . 'assets/dist/admin/js/test.js', ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );
            wp_enqueue_style( 'emailkit-fonts-style', EMAILKIT_URL . 'assets/dist/admin/styles/test.css', [], EMAILKIT_VERSION );

				
        }
    }
}