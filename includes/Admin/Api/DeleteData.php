<?php 

namespace EmailKit\Admin\Api;

class DeleteData {
	public $prefix = '';
    public $param = '';
    public $request = null;

	public function __construct()
	{
		add_action('rest_api_init', function() {
            register_rest_route('Emailkit/v1/delete-data', '(?P<post_id>\d+)', array(
                'methods'  => \WP_REST_Server::ALLMETHODS,
                'callback' => [$this, 'delete_action'],
                'permission_callback' => '__return_true',
            ));
        });
	}

	public function delete_action($request) {
		if ( !wp_verify_nonce( $request->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
			return [
				'status'    => 'fail',
				'message'   => ['Nonce mismatch.']
			];
		}
	
		if ( !is_user_logged_in() || !current_user_can('publish_posts')) {
			return [
				'status'    => 'fail',
				'message'   => ['Access denied.']
			];
		} 
	
		$post_id = $request->get_param('post_id');
	
		$deleted = wp_delete_post($post_id, true);
	
		if($deleted === false) {
			return [
				"status"  => "failed",
				"message" => [
					"post Data not deleted ",
				],
			];
		}
		else {
			return [
				"status"    => "success",
				"result"    => $post_id,
				"message"   => [
					"post data deleted successfully.",
				],
			];
		}
	}
}