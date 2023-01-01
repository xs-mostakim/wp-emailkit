<?php

namespace EmailKit\Admin;

defined('ABSPATH') || exit;

class CPT
{
    public function __construct()
    {
        add_action('init', [$this, 'postType']);
        add_action('init',[$this,'add_role']);
    }
    
    public function add_role(){
        $roles = array(get_role(('administrator')));
        foreach($roles as $role) {
       if($role) {
          $role->add_cap( 'edit_email' ); 
          $role->add_cap( 'edit_others_email' ); 
          $role->add_cap( 'publish_email' ); 
          $role->add_cap( 'read_email' ); 
          $role->add_cap( 'read_private_email' ); 
          $role->add_cap( 'delete_email' ); 
          $role->add_cap( 'edit_published_email' );
          $role->add_cap( 'delete_published_' );
       }
    }

    } 

    /**
     * Email Template CPT
     */
    function postType()
    {

        $labels = array(

            'name'                  => _x('Emails', 'Post type general name', 'emailkit'),
            'singular_name'         => _x('Email', 'Post type singular name', 'emailkit'),
            'menu_name'             => _x('Email Templates', 'Admin Menu text', 'emailkit'),
            'name_admin_bar'        => _x('Email', 'Add New on Toolbar', 'emailkit'),
            'add_new'               => __('Add New', 'emailkit'),
            'add_new_item'          => __('Add New Template', 'emailkit'),
            'new_item'              => __('New Email', 'emailkit'),
            'edit_item'             => __('Edit Email', 'emailkit'),
            'view_item'             => __('View Email', 'emailkit'),
            'all_items'             => __('All Email', 'emailkit'),
            'search_items'          => __('Search Emails', 'emailkit'),
            'parent_item_colon'     => __('Parent Emails:', 'emailkit'),
            'not_found'             => __('No email found.', 'emailkit'),
            'not_found_in_trash'    => __('No Email found in Trash.', 'emailkit'),
            'archives'              => _x('Email archives', '', 'emailkit'),
            'insert_into_item'      => _x('Insert into email', '', 'emailkit'),
            'uploaded_to_this_item' => _x('Uploaded to this email', '', 'emailkit'),
            'filter_items_list'     => _x('Filter emails list', '', 'emailkit'),
            'items_list_navigation' => _x('Emails list navigation', '', 'emailkit'),
            'items_list'            => _x('Emails list', '', 'emailkit'),

        );

        $args = array(

            'label'                 => __('Email Template', 'emailkit'),
            'description'           => __('Post Type Description', 'emailkit'),
            'labels'                => $labels,
            'supports'              => array('title'),
            'hierarchical'          => false,
            'public'                => true,
            'show_ui'               => true,
            'show_in_menu'          => true,
            'menu_icon'             => 'dashicons-email',
            'menu_position'         => 10,
            'show_in_admin_bar'     => true,
            'show_in_nav_menus'     => true,
            'can_export'            => true,
            'has_archive'           => true,
            'exclude_from_search'   => false,
            'publicly_queryable'    => false,
            'rewrite'               => false,
            'capability_type'       => 'page',
            'capabilities' => array(
                'publish_posts' => 'publish_email',
                'edit_posts' => 'edit_email',
                'delete_posts' => 'delete_email',
                'read_private_posts' => 'read_private_email',
                'edit_post' => 'edit_email',
                'delete_post' => 'delete_email',
                'read_post' => 'read_email',
            ),


        );

        register_post_type('email', $args);
    }
}
