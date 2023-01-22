<?php 

namespace EmailKit\Admin\metafield;

class StyleLoad {

	public function __construct()
	{
        add_action('init', function () {
            if (!is_user_logged_in() || !current_user_can('publish_posts')) {
                return;
            }
           // add_action('admin_enqueue_scripts', [$this, 'addEnqueue']);

            add_action('admin_print_scripts-post-new.php', [$this,'cpt_admin_script']);
            add_action('admin_print_scripts-post.php', [$this,'cpt_admin_script']);

        });

	}
   /*  public function addEnqueue()
    {
        
        $current_screen = get_current_screen();

        if(is_admin()){

            if($current_screen->id == 'email' 
                && $current_screen->base == 'post' 
                && $current_screen->post_type == 'email')
            {
                wp_enqueue_style( 'emaiilkit-editor-style-cpt', EMAILKIT_URL . 'assets/dist/admin/styles/test.css', [], EMAILKIT_VERSION );
                wp_enqueue_script( 'emailkit-metabox-scripts', EMAILKIT_URL . 'src/dest/merged.js', ['wp-plugins', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );
            }
        }
    } */

    function cpt_admin_script() {
       
        wp_enqueue_style( 'emaiilkit-editor-style-cpt', EMAILKIT_URL . 'assets/dist/admin/styles/test.css', [], EMAILKIT_VERSION );
        wp_enqueue_script( 'emailkit-loadBtn-cpt', EMAILKIT_URL . 'src/dest/merged.js', ['wp-plugins','wp-edit-post', 'wp-i18n', 'wp-element', 'wp-dom', 'wp-data'], EMAILKIT_VERSION, true );  
        
    } 
    

}