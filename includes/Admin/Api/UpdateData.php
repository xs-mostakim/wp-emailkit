<?php 

namespace EmailKit\Admin\Api;

class UpdateData {

	public $prefix = '';
    public $param = '';
    public $request = null;


	public function __construct()
	{

		add_action('rest_api_init', function() {
			register_rest_route('emailkit/v1/update-data', '(?P<post_id>\d+)', array(
				'methods'  => \WP_REST_Server::ALLMETHODS,
				'callback' => [$this, 'update_action'],
				'permission_callback' => '__return_true',
			));
		});
		
	}

	public function update_action($request) {

		/* if ( !wp_verify_nonce( $request->get_header( 'X-WP-Nonce' ), 'wp_rest' ) ) {
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
		}  */

		$body = $request->get_body();
    	$req = json_decode($body);

    	$post_id = (int) $request->get_param('post_id');
    	if (!$post_id || !get_post($post_id) || get_post_type($post_id) !== 'email') {
        	return [
            	'status'    => 'fail',
            	'message'   => ['Invalid post ID.']
       		 ];
   		}

   		$data = array(
			'ID' => $post_id,
			'meta_input'  => array(
				'email_template_content_html'   => $req->html,
				'email_template_content_object' => $req->object,
			),
   		);
		error_log(print_r($data,true));
    	$post_id = wp_update_post($data);

		if(is_wp_error($post_id)) {
			return [
				"status"  => "failed",
				"message" => [
					"post Data not updated",
				],
			];
		}
		else {
			return [
				"status"    => "success",
				"updatedId" => $post_id,
				"message"   => [
					"post data updated successfully.",
				],
			];
		}
	}
	

}