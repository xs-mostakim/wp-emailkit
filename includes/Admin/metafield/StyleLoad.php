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
		//$result = wp_json_file_decode(EMAILKIT_URL . 'src/.next/build-manifest.json');

		$json_data = file_get_contents(EMAILKIT_URL . 'src/.next/build-manifest.json');
		$json_data = json_decode($json_data, true);

		$scripts = $json_data["pages"]["/"];
		error_log(print_r($scripts, true));
		
		foreach ($scripts as $index => $script) {
			error_log(print_r($index, true));
			// check if it is css or js
			if(strpos($script, '.css') !== false)
				{
					wp_enqueue_style( "email-kit-css".$index, EMAILKIT_URL . 'src/.next/' . $script , [], EMAILKIT_VERSION );
				}
			else if(strpos($script, '.js') !== false)
			{
				error_log(print_r("email-kit-js".$index, true));
				wp_enqueue_script( "email-kit-js".$index, EMAILKIT_URL . 'src/.next/' . $script, ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );
			}
		}

        if(is_admin()){

			/* if(($current_screen->is_block_editor() || ( 
				$current_screen->id == 'post' 
				&& $current_screen->base == 'post' 
				&& $current_screen->post_type == 'post'
			)) */

			// wp_enqueue_script( 'emailKit-admin-scripts', EMAILKIT_URL . 'assets/dist/admin/js/test.js', ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );
			wp_enqueue_style( 'emailKit-admin-style', EMAILKIT_URL . 'assets/dist/admin/styles/merged.css', [], EMAILKIT_VERSION );
		}
	}
}