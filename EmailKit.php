<?php

/**
 * Plugin Name: EmailKit
 * Plugin URI:  http://localhost/emailkit/wp-admin/
 * Description: EmailKit is the most-complete Email template builder for Elementor.
 * Author: XpeedStudio
 * Version:0.1.0
 * Text Domain: emailkit
 * Domain Path: /languages
 * License:  GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 */
if (!defined('ABSPATH')) {
    exit;
}

require_once __DIR__ . '/vendor/autoload.php';

/**
 * The main plugin class
 */
final class EmailKit
{

    /**
     * Plugin version
     *
     * @var string
     */

    /**
     * Class constructor
     */
    private function __construct()
    {
        $this->define_constants();
        register_activation_hook(__FILE__, [$this, 'activate']);

        add_action('plugins_loaded', [$this, 'init_plugin']);
        add_action('admin_head', [$this,'emailkit_header_script_data']);
        add_action( 'admin_init', [ $this, 'add_author_support' ], 10 );
        add_filter('manage_email_posts_columns', [$this,'set_columns']);
    }

    /**
     * Initializes a singleton instance
     *
     * @return \EmailKit
     */
    public static function init()
    {
        static $instance = false;

        if (!$instance) {
            $instance = new self();
        }

        return $instance;
    }


    /**
     * Define the required plugin constants
     *
     * @return void
     */
    public function define_constants()
    {
        define('EMAILKIT_VERSION', '1.0');
        define('EMAILKIT_FILE', __FILE__);
        define('EMAILKIT_PATH', __DIR__);
        define('EMAILKIT_URL', trailingslashit(plugin_dir_url(EMAILKIT_FILE)));
        define('EMAILKIT_ASSETS', EMAILKIT_URL . '/assets');
        define('EMAILKIT_DIR', trailingslashit(plugin_dir_path( __FILE__ )));
    }

    public function emailkit_header_script_data() {

        $_nonce = wp_create_nonce( 'wp_rest' );
        $config = [
            'version' => EMAILKIT_VERSION,
            'restNonce' => $_nonce,
            'siteUrl' => get_site_url(),
            'assetsUrl' => EMAILKIT_URL . 'assets/',
            'baseApi' => get_rest_url(null, 'emailkit/v1/'),
        ];

        ?>
	<script>
	    window.emailKit = window.emailKit ?? {};
	    window.emailKit.config = <?php echo json_encode($config); ?>;
        
	</script>
 <?php
    }

    public function add_author_support() {
        add_post_type_support( 'email', 'author' );
    }

    public function set_columns($columns) {

     $date_column = $columns['date'];
     $author_column = $columns['author'];

    unset( $columns['date'] );
    unset( $columns['author'] );
    
    $columns['shortcode'] = esc_html__( 'Shortcode', 'emailkit' );
    $columns['count'] = esc_html__( 'Entries', 'emailkit' );
    $columns['author']    = esc_html( $author_column );
    $columns['date']      = esc_html( $date_column );

    return $columns;

    }

    /**
     * Initialize the plugin
     *
     * @return void
     */
    public function init_plugin()
    {

        new EmailKit\Admin();
        
    }

    /**
     * Do stuff upon plugin activation
     */
    public function activate()
    {
        /**
         * Save plugin installation time.
         */

        $installed = get_option('mk_installed');
        if (!$installed) {
            update_option('mk_installed', time());
        }

        /**
         * Update plugin version.
         * 
         * @param string $option
         */
        update_option('emilkit_version', EMAILKIT_VERSION);
    }
}
    /**.
     * Initializes the main plugin
     *
     * @return \EmailKit
     */
    function emailKit()
    {
        return EmailKit::init();
    }


    // kick-off the plugin
    EmailKit();
