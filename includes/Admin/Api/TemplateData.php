<?php

namespace EmailKit\Admin\Api;

class TemplateData {

	public $prefix = '';
    public $param = '';
    public $request = null;

	public function __construct()
	{
		add_action('rest_api_init', function() {
            register_rest_route('Emailkit/v1', 'template-data', array(
                'methods'  => \WP_REST_Server::ALLMETHODS,
                'callback' => [$this, 'action'],
                'permission_callback' => '__return_true',
            ));
        });
	}

	public function action($request) 
    {
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

		$body = $request->get_body();
		$req = json_decode($body);

		$data = array(
            'post_title'  =>$req->post_title . '-' . date('Y-m-d H:i:s'),
            'post_status' => 'publish',
            'post_type'   => 'email',
            'post_author' => get_current_user_id(),
            'meta_input'   => array(
                'email-template-html'        => $req->html,
                'email-template-subject'     => $req->subject,
                'object'                     => $req->object,
                'email-template-status'      => true,
            )
        );
        $post_id = wp_insert_post($data);

         return [
            "status"    => "success",
            "result"    => $post_id,
            "message"   => [
                "post data inserted successfully.",
            ],
        ];



	}
}