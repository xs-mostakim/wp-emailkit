<?php 

namespace EmailKit\Admin\Api;

use WP_Query;

class FetchData {

	public $prefix = '';
	public $param = '';
	public $request = null;


	public function __construct()
	{
		add_action('rest_api_init', function() {
            register_rest_route('Emailkit/v1', 'fetch-data', array(
                'methods'  => \WP_REST_Server::ALLMETHODS,
                'callback' => [$this, 'action'],
                'permission_callback' => '__return_true',
            ));
        });
	}

	public function action ($request) {

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

		$args = array (

			'post_type' => 'email',
			'author'    => get_current_user_id(),
			'post_status'    => 'publish',
			'orderby'    => 'date',
			'order'    => 'DESC',
            'posts_per_page' => 1,

		);
  

		$loop = new \WP_Query($args);

		$email_data = [];

		while ($loop->have_posts()) : $loop->the_post();

		$email_data [] = [
			"id"              => get_post_meta(get_the_ID(), 'id', true),
            "email_object"    => get_post_meta(get_the_ID(), 'email_template_content_object', true),
            "date"            => get_the_date('Y-m-d H:i:s'),
            "user"            => get_the_author(),

		];

	    endwhile;

		wp_reset_postdata();

		return [
            "status"    => "success",
            "data"      => [
                "history" => $email_data,
            ],
            "message"   => [
                "Email list has been fetched successfully.",
            ],
        ];
			

	}
}