<?php 

namespace EmailKit\Admin\metafield;

class StyleLoad {

	public function __construct()
	{
        add_action('init', function () {
            if (!is_user_logged_in() || !current_user_can('publish_posts')) {
                return;
            }

			//add_action('enqueue_block_editor_assets', [$this, 'addEnqueue']);
            add_action('admin_enqueue_scripts', [$this, 'addEnqueue']);
        });

	}

	
    public function addEnqueue()
    {
        
        //$current_screen = get_current_screen();

        if(is_admin()){

			/* if(($current_screen->is_block_editor() || ( 
				$current_screen->id == 'post' 
				&& $current_screen->base == 'post' 
				&& $current_screen->post_type == 'post'
			)) */

			wp_enqueue_script( 'emailKit-admin-scripts', EMAILKIT_URL . 'assets/dist/admin/js/test.js', ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );
			wp_enqueue_style( 'emailKit-admin-style', EMAILKIT_URL . 'assets/dist/admin/styles/merged.css', [], EMAILKIT_VERSION );
		}
	}
}