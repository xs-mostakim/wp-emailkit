<?php

/**
 * Plugin Name: EmailKit
 * Plugin URI:  http://localhost/emailkit/wp-admin/
 * Description: EmailKit is the most-complete Email template builder for Elementor.
 * Author: MIM
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

        add_action('plugins_loaded', [$this, 'init_plugin']);
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

        define('EMAILKIT_FILE', __FILE__);
        define('EMAILKIT_PATH', __DIR__);
        define('EMAILKIT_URL', plugins_url('', EMAILKIT_FILE));
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
