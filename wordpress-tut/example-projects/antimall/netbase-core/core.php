<?php

define('Antimall_VER', '1.0.0');



class Antimall_Core
{
    /**
     * Class prefix for autoload
     *
     * @var string
     */
    protected static $prefix = 'Antimall_';

    /**
     * Variable hold the page options
     *
     * @var array
     */
    protected static $page_options = array();

    public static $plugins;

    public function __construct()
    {
        require_once get_template_directory() . '/netbase-core/vendor/tgmpa/class-tgm-plugin-activation.php';

        spl_autoload_register(array($this, 'autoload'));
        if ( ! function_exists( 'get_plugins' ) ) {
				   include_once ABSPATH . 'wp-admin/includes/plugin.php';
			  }

        new Antimall_Customize();

        Antimall_Helper::include_template_tags();

        if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
            Antimall_Extensions_Woocommerce::init();
        }

        //require_once get_template_directory() . '/netbase-core/extensions/extras.php';
        //add_action('wp', array(__CLASS__, 'get_options'));
        // add_action('customize_register', array('Antimall_Customize', 'register'));

        add_action('after_setup_theme', array($this, 'theme_setup'));
        add_action('widgets_init', array($this, 'default_sidebars'));
        //add_action('after_setup_theme', array($this, 'update_plugin_src'));


        add_action('admin_enqueue_scripts', array($this, 'admin_scripts_enqueue'));
        add_action('customize_controls_enqueue_scripts', array('Antimall_Customize', 'customize_control_js'));
        add_action('customize_preview_init', array('Antimall_Customize', 'customize_preview_js'));
        add_action('customize_controls_print_styles', array('Antimall_Customize', 'customize_style'));


        add_action('wp_enqueue_scripts', array($this, 'core_scripts_enqueue'), 9998);
        add_action('wp_enqueue_scripts', array($this, 'print_embed_style'), 9999);
        add_action('wp_enqueue_scripts', array($this, 'google_fonts_url'));

        add_filter('body_class', array('Antimall_Helper', 'nbcore_body_classes'));
        add_action('wp_head', array('Antimall_Helper', 'nbcore_pingback_header'));

        add_filter('show_recent_comments_widget_style', '__return_false');

        add_filter('upload_mimes', array($this, 'upload_mimes'));

        add_action('antimall_register', array($this, 'register_required_plugins'));

        add_filter( 'woocommerce_prevent_automatic_wizard_redirect', array($this, 'woo_prevent_automatic_wizard_redirect'));

        $content_width = 1170;


        if(empty(get_transient('current_load_css')) && $this->is_plugin_active_byme('nb-fw/nb-fw.php')) {
            set_transient('current_load_css', NBT_LOAD_CUSTOMIZE_FROM_HEAD, NBT_TIMEOUT_TRANSIENT_CUSTOMIZE);
        }

        //Exclude pages from WordPress Search
        if (!is_admin()) {
            function wpb_search_filter($query)
            {
                if ($query->is_search) {
                    $query->set('post_type', array('post', 'product'));
                }
                return $query;
            }

            add_filter('pre_get_posts', 'wpb_search_filter');
        }
        /*merlin*/
        add_action('admin_enqueue_scripts', array( __CLASS__, 'redirect_merlin') );
        add_action('after_switch_theme', array( __CLASS__, 'antimall_setup_del_options') );

        add_action('add_meta_boxes',array( __CLASS__, 'antimall_sidebar_meta') );
        add_action('save_post', array( __CLASS__, 'antimall_save_postdata'), 1, 2);

    }

    // since woo 3.6, need this function to activate plugin below Woo in Merlin Import
    public function woo_prevent_automatic_wizard_redirect() {
        return true;
    }

    
    /*page metabox*/
    public static function antimall_sidebar_box($post) {
        global $post;
        global $wp_registered_sidebars ;        
        $sidebar_option = get_post_meta($post->ID, 'sidebar_option', true);        
        $sidebar_values = array(   'sidebar-default'=>'Default', 
                                   'right-sidebar'=>'Right Sidebar',
                                   'left-sidebar'=>'Left Sidebar',
                                   'no-sidebar'=>'No Sidebar');
        
        $option         = '';
        foreach ($sidebar_values as $key=>$value) {
            $option.='<option value="' . $key . '"';
            if ($key == $sidebar_option) {
                $option.=' selected="selected"';
            }
            $option.='>' . $value . '</option>';
        }
        print '   
        <p class="meta-options"><label for="sidebar_option">'.__('Page Layout ( Set the page layout, inherit from Theme Option by default ) ','antimall').' </label><br />
            <select id="sidebar_option" name="sidebar_option" style="width: 200px;">
            ' . $option . '
            </select>
        </p>';
            
    }
    public static function antimall_sidebar_meta() {
        global $post;  
        // add_meta_box('wpestate-sidebar-post',  __('Sidebar Settings',  'antimall'), 'antimall_sidebar_box', 'post');
        add_meta_box('antimall-sidebar-page', __('Page Settings',  'antimall'), array( __CLASS__, 'antimall_sidebar_box') , 'page');
    }
    public static function antimall_save_postdata($post_id) {
        global $post;
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return $post_id;
        }
        ///////////////////////////////////// Check permissions   
        if(isset($_POST['post_type'])){       
                if ('page' == $_POST['post_type'] or 'post' == $_POST['post_type']) {
                    if (!current_user_can('edit_page', $post_id))
                        return;
                }
                else {
                    if (!current_user_can('edit_post', $post_id))
                        return;
                }
        }         
        $allowed_keys=array(
            'sidebar_option'        
        );       
        foreach ($_POST as $key => $value) {
            if( !is_array ($value) ){               
                if (in_array ($key, $allowed_keys)) {
                    $postmeta = wp_filter_kses( $value ); 
                    update_post_meta($post_id, sanitize_key($key), $postmeta );
                }
            }       
        }    
    }
    /*end page metabox*/

    /*merlin*/

    public static function antimall_setup_del_options() {
        delete_option( 'merlin_udetor_redirected' );
    }

    public static function redirect_merlin() {
        wp_register_script( 'redirect-page', get_template_directory_uri() . '/assets/netbase/js/admin/redirect-page.js', array('jquery'), time() );

        $translation_array = array(
            'import_merlin_url' => admin_url( 'themes.php?page=merlin' )
        );
        wp_localize_script( 'redirect-page', 'object_merlin', $translation_array );

        wp_enqueue_script( 'redirect-page' );
    }


    public static function autoload($class_name)
    {
        // Verify class prefix.
        if (0 !== strpos($class_name, self::$prefix)) {
            return false;
        }

        // Generate file path from class name.
        $base = get_template_directory() . '/netbase-core/';
        $path = strtolower(str_replace('_', '/', substr($class_name, strlen(self::$prefix))));

        // Check if class file exists.
        $standard = $path . '.php';
        $alternative = $path . '/' . current(array_slice(explode('/', str_replace('\\', '/', $path)), -1)) . '.php';

        while (true) {
            // Check if file exists in standard path.
            if (@is_file($base . $standard)) {
                $exists = $standard;

                break;
            }

            // Check if file exists in alternative path.
            if (@is_file($base . $alternative)) {
                $exists = $alternative;

                break;
            }

            // If there is no more alternative file, quit the loop.
            if (false === strrpos($standard, '/') || 0 === strrpos($standard, '/')) {
                break;
            }

            // Generate more alternative files.
            $standard = preg_replace('#/([^/]+)$#', '-\\1', $standard);
            $alternative = implode('/', array_slice(explode('/', str_replace('\\', '/', $standard)), 0, -1)) . '/' . substr(current(array_slice(explode('/', str_replace('\\', '/', $standard)), -1)), 0, -4) . '/' . current(array_slice(explode('/', str_replace('\\', '/', $standard)), -1));
        }

        // Include class declaration file if exists.
        if (isset($exists)) {
            return include_once $base . $exists;
        }

        return false;
    }

    public static function theme_setup()
    {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on antimall, use a find and replace
         * to change 'antimall' to the name of your theme in all the template files.
         */
        load_theme_textdomain('antimall', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');

        // A theme must have at least one navbar, right?
        register_nav_menus(array(
            'primary' => esc_html__('Primary', 'antimall'),
            'header-sub' => esc_html__('Header sub menu', 'antimall'),
        ));

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');


        add_image_size('nbcore-masonry', 450, 450, true);

        add_theme_support('woocommerce');

        add_theme_support('custom-header');

        add_theme_support('custom-background');

        add_editor_style(get_template_directory_uri() . '/assets/netbase/css/editor-style.css');
    }

    /**
     * Theme default sidebar.
     *
     * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
     */
    public static function default_sidebars()
    {
        register_sidebar(array(
            'name' => esc_html__('Default Sidebar', 'antimall'),
            'id' => 'default-sidebar',
            'description' => esc_html__('Add widgets here.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Shop Sidebar', 'antimall'),
            'id' => 'shop-sidebar',
            'description' => esc_html__('Add widgets for category page.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));
        register_sidebar(array(
            'name' => esc_html__('Language Sidebar', 'antimall'),
            'id' => 'language-sidebar',
            'description' => esc_html__('Add widgets for language top sidebar.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Currency Switcher Sidebar', 'antimall'),
            'id' => 'currency-switcher-sidebar',
            'description' => esc_html__('Add widgets for currency switcher sidebar.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Product Sidebar', 'antimall'),
            'id' => 'product-sidebar',
            'description' => esc_html__('Add widgets for product details page', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Footer Top #1', 'antimall'),
            'id' => 'footer-top-1',
            'description' => esc_html__('For best display, please assign only one widget in this section.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Footer Top #2', 'antimall'),
            'id' => 'footer-top-2',
            'description' => esc_html__('For best display, please assign only one widget in this section.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Footer Top #3', 'antimall'),
            'id' => 'footer-top-3',
            'description' => esc_html__('For best display, please assign only one widget in this section.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Footer Top #4', 'antimall'),
            'id' => 'footer-top-4',
            'description' => esc_html__('For best display, please assign only one widget in this section.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Footer Bottom #1', 'antimall'),
            'id' => 'footer-bot-1',
            'description' => esc_html__('For best display, please assign only one widget in this section.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Footer Bottom #2', 'antimall'),
            'id' => 'footer-bot-2',
            'description' => esc_html__('For best display, please assign only one widget in this section.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Footer Bottom #3', 'antimall'),
            'id' => 'footer-bot-3',
            'description' => esc_html__('For best display, please assign only one widget in this section.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));

        register_sidebar(array(
            'name' => esc_html__('Footer Bottom #4', 'antimall'),
            'id' => 'footer-bot-4',
            'description' => esc_html__('For best display, please assign only one widget in this section.', 'antimall'),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget' => '</div>',
            'before_title' => '<h3 class="widget-title">',
            'after_title' => '</h3>',
        ));
    }

    // Todo change to minified version and load conditional. Example: isotope is now always load
    public static function core_scripts_enqueue()
    {
        //TODO Remember this
        wp_enqueue_style('fontello', get_template_directory_uri() . '/assets/vendor/fontello/fontello.css', array(), Antimall_VER);

        wp_enqueue_style('nbcore_front_style', get_template_directory_uri() . '/assets/netbase/css/main.css', array(), Antimall_VER);

        wp_enqueue_script('isotope', get_template_directory_uri() . '/assets/vendor/isotope/isotope.pkdg.min.js', array('jquery'), '3.0.3', true);

        if (function_exists('is_product') && is_product() || function_exists('is_cart') && is_cart()) {
            wp_enqueue_style('magnific-popup', get_template_directory_uri() . '/assets/vendor/magnific-popup/magnific-popup.css', array(), '2.0.5');
            wp_enqueue_script('magnific-popup', get_template_directory_uri() . '/assets/vendor/magnific-popup/jquery.magnific-popup.min.js', array('jquery'), '2.0.5', true);
        }

        wp_enqueue_style('swiper', get_template_directory_uri() . '/assets/vendor/swiper/swiper.min.css', array(), '3.4.2');
        wp_enqueue_script('swiper', get_template_directory_uri() . '/assets/vendor/swiper/swiper.jquery.min.js', array('jquery'), '3.4.2', true);

        if (is_singular() && comments_open() && get_option('thread_comments')) {
            wp_enqueue_script('comment-reply');
        }

        if (function_exists('is_product') && is_product() && 'accordion-tabs' == antimall_get_options('nbcore_info_style')) {
            wp_enqueue_script('jquery-ui-accordion');
        }

        if (antimall_get_options('nbcore_header_fixed')) {
            wp_enqueue_script('waypoints', get_template_directory_uri() . '/assets/vendor/waypoints/jquery.waypoints.min.js', array('jquery'), '4.0.1', true);
        }

        if (antimall_get_options('nbcore_blog_sticky_sidebar') || antimall_get_options('shop_sticky_sidebar') || antimall_get_options('product_sticky_sidebar')) {
            wp_enqueue_script('sticky-kit', get_template_directory_uri() . '/assets/vendor/sticky-kit/jquery.sticky-kit.min.js', array('jquery'), '1.1.2', true);
        }

        wp_enqueue_script('nbcore_front_script', get_template_directory_uri() . '/assets/netbase/js/main.js', array('jquery'), Antimall_VER, true);

        $localize_array = array(
            'ajaxurl' => admin_url('admin-ajax.php', 'relative'),
            'upsells_columns' => antimall_get_options('nbcore_pd_upsells_columns'),
            'related_columns' => antimall_get_options('nbcore_pd_related_columns'),
            'cross_sells_columns' => antimall_get_options('nbcore_cross_sells_per_row'),
            'thumb_pos' => antimall_get_options('nbcore_pd_thumb_pos'),
            'menu_resp' => antimall_get_options('nbcore_menu_resp'),
        );

        if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
            $version = version_compare(preg_replace('/-beta-([0-9]+)/', '', WC()->version), '2.3.0', '<');
            $localize_array['is2_2'] = $version;
        }

        wp_localize_script('nbcore_front_script', 'nb', $localize_array);

        wp_dequeue_script('yith-wcqv-frontend');
        wp_dequeue_style('yith-quick-view');

    }

    public static function admin_scripts_enqueue()
    {
        wp_enqueue_style('fontello', get_template_directory_uri() . '/assets/vendor/fontello/fontello.css', array(), Antimall_VER);
    }

    public static function get_options()
    {
        static $prepared;

        if (!isset($prepared)) {
            // Get all customizer options
            $theme_mods = Antimall_Customize::get_options();

            if ($theme_mods && is_array($theme_mods)) {
                self::$page_options = array_merge(self::$page_options, $theme_mods);
            }

            if (function_exists('get_fields')) {
                $page_id = get_the_ID();

                if ($page_id) {
                    // Todo replace acf ?
                    $post_meta = get_fields();
                    if ($post_meta) {
                        foreach ($post_meta as $k => $v) {
                            self::$page_options[$k] = maybe_unserialize($v);
                        }
                    }
                }

                if (isset(self::$page_options)) {
                    // Merge with theme options with higher priority.
                    self::$page_options = array_merge(
                        $theme_mods,
                        self::$page_options
                    );
                }
            }

            $prepared = true;
        }

        if (!doing_action('wp')) {
            // Prepare options to return.
            if (isset($page_id) && isset(self::$page_options[$page_id])) {
                $options = self::$page_options[$page_id];
            }

            return self::$page_options;
        }

    }

    //TODO optimize this(grouping and bring to css if can)
    //TODO early esc_
    public static function get_embed_style()
    {


        $bg_color = antimall_get_options('nbcore_background_color');
        $inner_bg = antimall_get_options('nbcore_inner_background');

        $top_padding = antimall_get_options('nbcore_top_section_padding');
        $top_bg = antimall_get_options('nbcore_header_top_bg');
        $top_color = antimall_get_options('nbcore_header_top_color');
        $middle_padding = antimall_get_options('nbcore_middle_section_padding');
        $middle_bg = antimall_get_options('nbcore_header_middle_bg');
        $middle_color = antimall_get_options('nbcore_header_middle_color');
        $bot_padding = antimall_get_options('nbcore_bot_section_padding');
        $bot_bg = antimall_get_options('nbcore_header_bot_bg');
        $bot_color = antimall_get_options('nbcore_header_bot_color');
        $menu_bg = antimall_get_options('nbcore_header_mainmn_bg');
        $menu_color = antimall_get_options('nbcore_header_mainmn_color');
        $menu_bor = antimall_get_options('nbcore_header_mainmn_bor');
        $menu_bg2 = antimall_get_options('nbcore_header_mainmnhover_bg');
        $menu_color2 = antimall_get_options('nbcore_header_mainmnhover_color');
        $menu_bor2 = antimall_get_options('nbcore_header_mainmnhover_bor');

        $logo_area_width = antimall_get_options('nbcore_logo_width');
        $blog_width = antimall_get_options('nbcore_blog_width');
        $primary_color = antimall_get_options('nbcore_primary_color');
        $divider_color = antimall_get_options('nbcore_divider_color');

        $heading_font_array = explode(",", antimall_get_options('heading_font_family'));
        $heading_family = end($heading_font_array);
        $heading_font_style = explode(",", antimall_get_options('heading_font_style'));
        $heading_weight = end($heading_font_style);
        $heading_color = antimall_get_options('nbcore_heading_color');

        $heading_base_size = antimall_get_options('heading_base_size');

        $body_family_array = explode(",", antimall_get_options('body_font_family'));
        $body_family = end($body_family_array);
        $body_style_array = explode(",", antimall_get_options('body_font_style'));
        $body_weight = end($body_style_array);
        $body_color = antimall_get_options('nbcore_body_color');
        $body_size = antimall_get_options('body_font_size');

        $link_color = antimall_get_options('nbcore_link_color');
        $link_hover_color = antimall_get_options('nbcore_link_hover_color');

        $blog_sidebar = antimall_get_options('nbcore_blog_sidebar');
        $page_title_padding = antimall_get_options('nbcore_page_title_padding');
        $page_title_color = antimall_get_options('nbcore_page_title_color');

        $wc_content_width = antimall_get_options('nbcore_shop_content_width');
        $shop_sidebar = antimall_get_options('nbcore_shop_sidebar');
        $loop_columns = antimall_get_options('nbcore_loop_columns');
        $pd_details_sidebar = antimall_get_options('nbcore_pd_details_sidebar');
        $pd_details_width = antimall_get_options('nbcore_pd_details_width');
        $pd_images_width = antimall_get_options('nbcore_pd_images_width');

        $pb_bg = antimall_get_options('nbcore_pb_background');
        $pb_bg_hover = antimall_get_options('nbcore_pb_background_hover');
        $pb_text = antimall_get_options('nbcore_pb_text');
        $pb_text_hover = antimall_get_options('nbcore_pb_text_hover');
        $pb_border = antimall_get_options('nbcore_pb_border');
        $pb_border_hover = antimall_get_options('nbcore_pb_border_hover');
        $sb_bg = antimall_get_options('nbcore_sb_background');
        $sb_bg_hover = antimall_get_options('nbcore_sb_background_hover');
        $sb_text = antimall_get_options('nbcore_sb_text');
        $sb_text_hover = antimall_get_options('nbcore_sb_text_hover');
        $sb_border = antimall_get_options('nbcore_sb_border');
        $sb_border_hover = antimall_get_options('nbcore_sb_border_hover');
        $button_padding = antimall_get_options('nbcore_button_padding');
        $button_border_radius = antimall_get_options('nbcore_button_border_radius');
        $button_border_width = antimall_get_options('nbcore_button_border_width');

        $footer_top_heading = antimall_get_options('nbcore_footer_top_heading');
        $footer_top_color = antimall_get_options('nbcore_footer_top_color');
        $footer_top_bg = antimall_get_options('nbcore_footer_top_bg');

        $footer_top_padding_top = antimall_get_options('nbcore_footer_top_padding_top');
        $footer_top_padding_bottom = antimall_get_options('nbcore_footer_top_padding_bottom');
        $footer_top_border_bot_color = antimall_get_options('nbcore_footer_top_border_bot_color');

        $footer_bot_heading = antimall_get_options('nbcore_footer_bot_heading');
        $footer_bot_color = antimall_get_options('nbcore_footer_bot_color');
        $footer_bot_bg = antimall_get_options('nbcore_footer_bot_bg');

        $footer_bot_padding_top = antimall_get_options('nbcore_footer_bot_padding_top');
        $footer_bot_padding_bottom = antimall_get_options('nbcore_footer_bot_padding_bottom');
        $footer_bot_border_bot_color = antimall_get_options('nbcore_footer_bot_border_bot_color');

        $footer_abs_bg = antimall_get_options('nbcore_footer_abs_bg');
        $footer_abs_color = antimall_get_options('nbcore_footer_abs_color');

        $blog_title_size = antimall_get_options('nbcore_blog_single_title_size');
        $page_title_size = antimall_get_options('nbcore_page_title_size');

        $footer_abs_padding = antimall_get_options('nbcore_footer_abs_padding');
        $secondary_color = antimall_get_options('nbcore_secondary_color');
        $page_content_width = antimall_get_options('page_content_width');
        
        $custom_page_meta =  esc_html( get_post_meta(  get_the_ID(), 'sidebar_option', true) );
        if(isset($custom_page_meta) && $custom_page_meta =='left-sidebar' || $custom_page_meta =='right-sidebar' || $custom_page_meta =='no-sidebar'){
            $page_sidebar = $custom_page_meta ;
        }else{
            $pages_sidebar  = antimall_get_options('nbcore_pages_sidebar');
        }
        
        $page_bg = wp_get_attachment_image_src(get_post_meta(get_the_ID(), 'page_bg_image', true), 'full');
        $page_bg_color = get_post_meta(get_the_ID(), 'page_bg_color', true);
        $page_title_img = antimall_get_options('nbcore_page_title_image');
        if ($page_title_img != '') {
            $page_title_img = wp_get_attachment_image_src($page_title_img, 'full', false);
            $page_title_img = $page_title_img[0];
        }

        $css = "";

        if ($body_family_array[0] === 'custom') {
            $body_custom_font_url = array_slice($body_family_array, 1, -1);
            $css .= "
            @font-face {
                font-family: '" . end($body_family_array) . "';            
            ";

            foreach ($body_custom_font_url as $url) {
                $css .= "
                src: url('" . $url . "');
                ";
            }

            $css .= "
            }
            ";
        }
        if ($heading_font_array[0] === 'custom') {
            $heading_custom_font_url = array_slice($heading_font_array, 1, -1);
            $css .= "
            @font-face {
                font-family: '" . end($heading_font_array) . "';            
            ";

            foreach ($heading_custom_font_url as $url) {
                $css .= "
                src: url('" . $url . "');
                ";
            }

            $css .= "
            }
            ";
        }
        $css .= "
            #site-wrapper {
                background: " . esc_attr($bg_color) . ";
            }
            .nb-page-title-wrap,
            .single-blog .entry-author,
            .products .list-type-wrap,
            .shop-main.accordion-tabs .accordion-title-wrap,
            .woocommerce .woocommerce-message,
            .woocommerce .woocommerce-info,
            .woocommerce .woocommerce-error,
            .woocommerce-page .woocommerce-message,
            .woocommerce-page .woocommerce-info,
            .woocommerce-page .woocommerce-error,
            .cart-layout-2 .cart-totals-wrap,
            .blog.style-2 .post .entry-content,
            .nb-comment-form textarea,
            .comments-area,
            .blog .post .entry-cat a
            {
                background-color: " . esc_attr($inner_bg) . ";
            }
            .products.list-type .product .list-type-wrap .product-image:before {
                border-right-color: " . esc_attr($inner_bg) . ";
            }
            .main-logo {
                width: " . esc_attr($logo_area_width) . "px;
            }

            .footer-top-section a:hover,
            .footer-top-section .widget ul li a:hover,
            .footer-bot-section a:hover,
            .footer-bot-section .widget ul li a:hover{
                color: " . esc_attr($link_color) . ";
            }
            a:hover, a:focus, a:active{
                color: " . esc_attr($link_hover_color) . ";
            }
           .ult-team-member-wrap ult-team-member-position,.site-header.header-home-1 .middle-section-wrap .container .menu-left .icon-header-wrap > span,.site-header.header-home-2 .bottom-section-wrap .container .bot-right .icon-header-wrap > span{
             font-family: " . esc_attr($body_family) . ";
            }
            .error404 .site-main .home-link .icon-home{
            font-family: " . esc_attr($body_family) . " !important;
            }
            body,.mini-cart-section,.nb-cart-section > span,.icon-header-wrap > span {
                font-family: " . esc_attr($body_family) . "; 
                font-weight: " . esc_attr($body_weight) . ";
                font-size: " . esc_attr($body_size) . "px;
        ";
        if (in_array("italic", $body_style_array)) {
            $css .= "
                font-style: italic;
            ";
        }
        if (in_array("underline", $body_style_array)) {
            $css .= "
                text-decoration: underline;
            ";
        }
        if (in_array("uppercase", $body_style_array)) {
            $css .= "
                text-transform: uppercase;
            ";
        }
        $css .= "
            }
            .button, .nb-primary-button, .post-password-form input[type='submit'] {
                color: " . esc_attr($pb_text) . " !important;
                background-color: " . esc_attr($pb_bg) . ";
                border-color: " . esc_attr($pb_border) . ";
            }
            .button:hover, .nb-primary-button:hover, .button:focus, .nb-primary-button:focus {
                color: " . esc_attr($pb_text_hover) . ";
                background-color: " . esc_attr($pb_bg_hover) . ";
                border-color: " . esc_attr($pb_border_hover) . ";
            }
            .nb-secondary-button {
                color: " . esc_attr($sb_text) . ";
                background-color: " . esc_attr($sb_bg) . ";
                border-color: " . esc_attr($sb_border) . ";
            }
            .nb-secondary-button:hover, .nb-secondary-button:focus {
                color: " . esc_attr($sb_text_hover) . ";
                background-color: " . esc_attr($sb_bg_hover) . ";
                border-color: " . esc_attr($sb_border_hover) . ";
            }
            .list-type .add_to_cart_button, .nb-primary-button, .nb-secondary-button, .single_add_to_cart_button, .post-password-form input[type='submit']{
                padding-left: " . esc_attr($button_padding) . "px;
                padding-right: " . esc_attr($button_padding) . "px;
                border-width: " . esc_attr($button_border_width) . "px;
            ";
        if ($button_border_radius) {
            $css .= "
                border-radius: " . esc_attr($button_border_radius) . "px;
            ";
        } else {
            $css .= "
                border-radius: 0px;
            ";
        }
        $css .= "
            }
            body,.paging-navigation .page-numbers,
            .widget ul li a,
            .woocommerce-breadcrumb a,
            .nb-social-icons > a,
            .wc-tabs > li:not(.active) a,
            .shop-main.accordion-tabs .accordion-title-wrap:not(.ui-state-active) a,
            .nb-account-dropdown a,
            .header-account-wrap .not-logged-in,
            .mid-inline .nb-account-dropdown a, 
            .mid-inline .mini-cart-section span, 
            .mid-inline .mini-cart-section a, 
            .mid-inline .mini-cart-section strong,
            .entry-meta .byline a,
            .comments-link a{
                color: " . esc_attr($body_color) . ";
            }
            h1 {
                font-size: " . esc_attr(intval($heading_base_size * 1.602)) . "px;
            }
            h2 {
                font-size: " . esc_attr(intval($heading_base_size * 1.424)) . "px;
            }
            h3 {
                font-size: " . esc_attr(intval($heading_base_size * 1.266)) . "px;
            }
            h4 {
                font-size: " . esc_attr(intval($heading_base_size * 1.125)) . "px;
            }
            h5 {
                font-size: " . esc_attr(intval($heading_base_size * 1)) . "px;
            }
            h6 {
                font-size: " . esc_attr(intval($heading_base_size * 0.889)) . "px;
            }
            h1, h2, h3, h4, h5, h6,
            h1 > a, h2 > a, h3 > a, h4 > a, h5 > a, h6 > a,
            .entry-title > a,
            .woocommerce-Reviews .comment-reply-title {
                font-family: " . esc_attr($heading_family) . "; 
                font-weight: " . esc_attr($heading_weight) . ";
                color: " . esc_attr($heading_color) . ";
        ";
        if (in_array("italic", $heading_font_style)) {
            $css .= "
                font-style: italic;
            ";
        }
        if (in_array("underline", $heading_font_style)) {
            $css .= "
                text-decoration: underline;
            ";
        }
        if (in_array("uppercase", $heading_font_style)) {
            $css .= "
                text-transform: uppercase;
            ";
        }
        //TODO after make inline below woocommerce.css remove these !important
        //TODO postMessage font-size .header-top-bar a
        $css .= "
            }
            .site-header .top-section-wrap {
                padding: " . esc_attr($top_padding) . "px 0;
                background-color: " . esc_attr($top_bg) . ";
            }
            .top-section-wrap .nb-header-sub-menu a {
                color: " . esc_attr($top_color) . ";
            }
            .top-section-wrap .nb-header-sub-menu .sub-menu {
                background-color: " . esc_attr($top_bg) . ";
            }
            .site-header .middle-section-wrap {
                padding: " . esc_attr($middle_padding) . "px 0;
                background-color: " . esc_attr($middle_bg) . ";
            }
            .site-header:not(.mid-stack) .bot-section-wrap {
                padding: " . esc_attr($bot_padding) . "px 0;                
            }
            .site-header.mid-stack .nb-navbar > .menu-item > a {
                padding: " . esc_attr($bot_padding) . "px 20px;                
            }
            .site-header .bot-section-wrap {
                background-color: " . esc_attr($bot_bg) . ";           
            }
            .bot-section-wrap a, .bot-section-wrap span, .bot-section-wrap i, .bot-section-wrap div{
                color: " . esc_attr($bot_color) . ";
            }
            .middle-section-wrap a:hover, .middle-section-wrap span:hover, .middle-section-wrap i, .middle-section-wrap div{
                color: " . esc_attr($middle_color) . ";
            }
            .top-section-wrap a, .top-section-wrap span, .top-section-wrap i, .top-section-wrap div{
                color: " . esc_attr($top_color) . ";
            }
            .nb-navbar .menu-item-has-children > a span:after,
            .icon-header-section .nb-cart-section,

            .nb-navbar .sub-menu > .menu-item:not(:last-child),
            .nb-header-sub-menu .sub-menu > .menu-item:not(:last-child),
            .widget .widget-title,
            .blog .classic .post .entry-footer,
            .single-post .single-blog .entry-footer,
            .nb-social-icons > a,
            .single-blog .entry-author-wrap,
            .shop-main:not(.wide) .single-product-wrap .product_meta,
            .shop-main.accordion-tabs .accordion-item .accordion-title-wrap,
            .shop-main.horizontal-tabs .wc-tabs-wrapper,
            .shop_table thead th,
            .shop_table th,
            .shop_table td,
            .mini-cart-wrap .total,.widget.widget_nav_menu .menu-item .sub-menu,
            .icon-header-wrap .nb-account-dropdown ul li:not(:last-of-type) a,
            .widget tbody th, .widget tbody td,
            .widget ul > li:not(:last-of-type),
            .blog .post .entry-image .entry-cat,
            .comment-list .comment,
            .nb-comment-form textarea,
            .paging-navigation.pagination-style-1 .page-numbers.current,.page-links a,
            .woocommerce-pagination.pagination-style-1 .page-numbers.current{
                border-color: " . esc_attr($divider_color) . ";
            }
            @media (max-width: 767px) {
                .shop_table.cart {
                    border: 1px solid " . esc_attr($divider_color) . ";
                }
                .shop_table.cart td {
                    border-bottom: 1px solid " . esc_attr($divider_color) . ";
                }
            }
           #simplemodal-login-container-education form .submit input:hover,.faq-form input[type='submit']:hover,.woocommerce-Reviews .comment-form .form-submit .submit:hover,.vc_btn3-container.button_viewmore > a:hover, .vc_btn3-container.button_sellnow > a:hover,#wpcf7-f326-p120-o1 .wpcf7-form-control.wpcf7-submit:hover{
            background-color: " . esc_attr($pb_bg_hover) . " !important;
            }
            .post-password-form input[type='submit']:hover, .start_selling .wpb_wrapper .aio-icon-component .aio-icon.circle:hover,.home-page-2 .home2_sesson_3 .wpb_column .vc_column-inner .aio-icon-component .aio-icon.circle:hover,.cart-notice-wrap .cart-url:hover,.content_sesson_3 .aio-icon-img.uavc-circle:hover,.start_selling .aio-icon-component .aio-icon-left .aio-icon-img:hover{
             background-color: " . esc_attr($pb_bg_hover) . ";
             }
             .about_us .about-session-1 .about_sesson_1_left .about_sesson_1_left_bottom .wpb_column .vc_column-inner .aio-icon-component .aio-icon-left .aio-icon{
              border: 7px solid " . esc_attr($secondary_color) . ";
             }
             .about_us .about-session-1 .about_session_1_right .wpb_single_image > figure:before,.start_selling .wpb_single_image .vc_figure:before{
              border: 5px solid " . esc_attr($secondary_color) . ";
             }
             .nb-back-to-top-wrap a.light{
              background-color: " . esc_attr($secondary_color) . ";
             }
             .sticky
            {
                border-top: 1px solid " . esc_attr($primary_color) . ";
                box-shadow: 0px 0px 20px " . esc_attr($primary_color) . ";
            }
            .product .product-image .onsale,
            .wc-tabs > li.active,
            .product .onsale.sale-style-2 .percent,
            .wc-tabs-wrapper .woocommerce-Reviews #review_form_wrapper .comment-respond,
            .site-header.mid-stack .main-navigation .nb-navbar > .menu-item:hover,
            .shop-main.accordion-tabs .accordion-item .accordion-title-wrap.ui-accordion-header-active,
            .widget .tagcloud a,.single-product .single-product-wrap .entry-summary .yith-wcwl-add-to-wishlist,
            .footer-top-section .widget .tagcloud a,.cart-notice-wrap .cart-url,
            .footer-bot-section .widget .tagcloud a,.custom_blog .nb_layout_wp-img-topbot .nb-post-block .nb-post-content .nb-post-readmore > a,
            .loading.demo7 #loading-center #loading-center-absolute .object,
            .loading.demo3 #loading-center #loading-center-absolute .object,
            .cart-notice-wrap .cart-notice
            {
                border-color: " . esc_attr($primary_color) . ";
            }
            .loading.demo14 #loading-center #loading-center-absolute .object{
                border-left-color: " . esc_attr($primary_color) . ";
                border-right-color: " . esc_attr($primary_color) . ";
            }
            .loading.demo15 #loading-center #loading-center-absolute .object{
                border-left-color: " . esc_attr($primary_color) . ";
                border-top-color: " . esc_attr($primary_color) . ";
            }

            .faq-form input[type='submit'],.widget .widget-title:before,.home2_custom_blog .nb_wp_post .nb_wp_post-i .nb-post-block .nb-post-content .readmore:hover,.about_us .about-session-1 .about_sesson_1_left .about_sesson_1_left_bottom .vc_column-inner .aio-icon-component .aio-icon-left .aio-icon,
            .paging-navigation.pagination-style-2 .current,.custom_blog .nb_layout_wp-img-topbot .nb-post-block .nb-post-content .nb-post-readmore > a:hover,.content_sesson_3 .aio-icon-img.uavc-circle,
                .home-page-3 .become-a-seller .aio-icon.circle,.home-page-2 .home2_sesson_3 .wpb_column .vc_column-inner .aio-icon-component .aio-icon.circle,.start_selling .wpb_wrapper .aio-icon-component .aio-icon.circle,
            .product .onsale.sale-style-1,.site-header.header-home-1 .bot-section-wrap .bot-section .icon-menu,product .single-product-wrap .entry-summary .cart .single_add_to_cart_button:hover,
            .woocommerce-pagination.pagination-style-2 span.current,.sticky-sidebar .widget_price_filter .price_slider_amount > button:hover,.single-product .single-product-wrap .compare:hover,
            .shop-main.right-dots .flickity-page-dots .dot,.cart-notice-wrap .cart-url,.home-page-2 .nb-back-to-top-wrap a.light:hover,.single-product .single-product-wrap .entry-summary .yith-wcwl-add-to-wishlist:hover,
            .site-header.header-home-3 .bot-section-wrap .bot-section .icon-menu,.error404 main .home-link,.start_selling .aio-icon-component .aio-icon-left .aio-icon-img,
            .home3-product-cat a.vc_single_image-wrapper:hover span.img-cat-name,#loginform .footer__right > a:hover, #registerform .footer__right > a:hover,
            .wc-tabs-wrapper .form-submit input,.single-product-wrap .product_meta .availability_wrapper .in-stock,#mega-menu-wrap-primary #mega-menu-primary > li.mega-menu-item > a.mega-menu-link:hover,
            .nb-input-group .search-button button,#wpcf7-f326-p120-o1 .wpcf7-submit:hover,.woocommerce-Reviews .comment-form .form-submit .submit,#wpcf7-f326-p120-o1 .wpcf7-form-control.wpcf7-submit,.product .product-action .button:hover,.woocommerce .shop-main .woocommerce-pagination .page-numbers.current,.single-product .single-product-wrap .entry-summary .cart .single_add_to_cart_button:hover,
            .nb-back-to-top-wrap a:hover,.woocommerce .widget_price_filter .ui-slider .ui-slider-handle,.site-header.header-home-2 .mid-section-wrap, 
            #mega-menu-wrap-primary #mega-menu-primary > li.mega-menu-item > a.mega-menu-link:hover,
            #mega-menu-wrap-primary #mega-menu-primary > li.mega-menu-item.mega-toggle-on > a.mega-menu-link,
            .loading #loading-center #loading-center-absolute #object,
            .loading #loading-center #loading-center-absolute .object,
            .loading #loading-center .object-one,
            .loading #loading-center .object-two,
            .single-product-wrap .yith-wcwl-add-to-wishlist{
                background-color: " . esc_attr($primary_color) . ";
            }
           .widget .tagcloud a:hover,.mega-menu-wrap,.tab_product .vc_tta-tabs-list .vc_tta-tab.vc_active > a,.sesson_2 .vc_tta-container .vc_tta-panels-container .vc_tta-panel.vc_active .vc_tta-panel-heading,#simplemodal-login-container-education form .submit input, .header-home-3 .menu-main-menu-wrap{
            background-color: " . esc_attr($primary_color) . "!important;
            }
            .swiper-pagination .swiper-pagination-bullet-active{
             background: " . esc_attr($primary_color) . ";
            }

            .vc_btn3-container.button_viewmore > a,.vc_btn3-container.button_sellnow > a{
             background-color:" . esc_attr($primary_color) . " !important;
             color: #fff !important;
            }
           .home2_custom_blog .nb_wp_post .nb_wp_post-i .nb-post-block .nb-post-content .readmore,.sticky-sidebar .widget_price_filter .price_slider_amount > button,.single-product .single-product-wrap .compare:hover,.single-product .single-product-wrap .entry-summary .cart .single_add_to_cart_button,.single-product .single-product-wrap .yith-wcwl-add-to-wishlist,.single-product-wrap .product-image .thumb-gallery .swiper-slide.swiper-slide-active,.home2_custom_blog .nb_wp_post .nb_wp_post-i .nb-post-block .nb-post-content .readmore:hover{
            border: 1px solid " . esc_attr($primary_color) . ";
            }
            #simplemodal-login-form .simplemodal-login-fields p >input:focus,#simplemodal-login-form .simplemodal__footer .footer__right a,.single-product .single-product-wrap .compare{
             border: 1px solid " . esc_attr($primary_color) . "!important;
            }
            .woocommerce .woocommerce-message, .woocommerce-page .woocommerce-message{
                border-top: 3px solid " . esc_attr($primary_color) . ";
            }
             .site-header.header-home-1 .middle-section-wrap .container .menu-left .header-search-wrap .search-form.visible .nb-input-group .search-field:focus,

             .nb-input-group .search-field:focus,

             .site-header.header-home-2 .bottom-section-wrap .container .bot-right .header-search-wrap .search-form.visible .nb-input-group .search-field:focus,

             .site-header.header-home-3 .middle-section-wrap .container .bot-right .header-search-wrap .search-form.visible .nb-input-group .search-field:focus,

             .search .content-search .no-results .nb-input-group .search-field:focus,

             .widget_search .nb-input-group .search-field:focus {
             border: 2px solid " . esc_attr($primary_color) . ";
            }
           .paging-navigation .page-numbers:hover,a,.sticky .entry-content:before,.about_us .about-team .team_people .ult-team-member-wrap .ult-social-buttons > a:hover, .product .star-rating:before,.wishlist_table tr td.product-stock-status span.wishlist-in-stock,.customer_vender .customer_content .wpb_column .vc_column-inner .wpb_text_column:before,.single-product-wrap .yith-wcwl-add-to-wishlist i,.home2_custom_blog .nb_wp_post .nb_wp_post-i .nb-post-block .nb-post-content .readmore,
            .product .star-rating span,.widget ul li a:hover,.nb-page-title-wrap .entry-title > a:hover, .nb-page-title-wrap .entry-cat > a:hover,.site-header.header-home-1 .middle-section-wrap .container .menu-left .icon-header-wrap .nb-cart-section .icon-bag:hover,
            .single-product-wrap .price ins,.uavc-list-content .uavc-list-icon,.category .blog.meta-align-center .post .entry-title > a:hover,.single-product .single-product-wrap .entry-summary .yith-wcwl-add-to-wishlist .yith-wcwl-add-button.show .icon-heart-empty,
            .single-product-wrap .price > span.amount,.woocommerce-breadcrumb > a:hover,.woocommerce .woocommerce-message:before, .woocommerce-page .woocommerce-message:before,.site-header.header-home-2 .bottom-section-wrap .container .bot-right .header-search-wrap .search-form:hover,
            .wc-tabs > li.active a,.shop-main .woocommerce-Reviews #review_form_wrapper .stars:hover a::before,.site-header.header-home-2 .bottom-section-wrap .container .bot-section ul li a:hover,.custom_blog .nb_layout_wp-img-topbot .nb-post-block .nb-post-content .nb-post-readmore > a,.wc-tabs > li.active a:focus,.shop-main .woocommerce-Reviews #review_form_wrapper .stars.selected a.active::before,.site-header.header-home-2 .bottom-section-wrap .container .bot-right .icon-header-wrap .header-cart-wrap .nb-cart-section .icon-bag:hover,
            .wc-tabs .ui-accordion-header-active a,.sticky-sidebar .widget_product_categories .product-categories > li:hover > a,.single-product .single-product-wrap .entry-summary .yith-wcwl-add-to-wishlist:hover .yith-wcwl-wishlistexistsbrowse.show .icon-heart-empty,
            .wc-tabs .ui-accordion-header-active a:focus,.product .price,.product_list_widget .product-title:hover > a,.site-header.header-home-2 .bottom-section-wrap .container .bot-right .icon-header-wrap .header-cart-wrap .mini-cart-section .mini-cart-wrap .cart_list .minicart-pd-meta > a:hover,
            .wc-tabs .ui-accordion-header-active a:hover,.site-footer .footer-top-section .footer-social > a:hover > span,.category .blog.meta-align-center .post .entry-content .comments-link > a:hover,.blog .classic .post .entry-meta .byline .author > a:hover,
            .shop-main.accordion-tabs .ui-accordion-header-active:after,.products-column .product .price,.site-footer .footer-abs-section .row .footer-abs-left > a,.site-header.header-home-1 .bot-section-wrap .nb-navbar .sub-menu li a:hover > span,
            .shop_table .cart_item td .amount,.category .blog.meta-align-center .post .entry-content .entry-meta .author > a:hover,.testimorial_page .nb_testimonials .nb_testimonial-item .nb_testimonial-box2 .nb_testimonial-info .nb_testimonial-position,
            .cart_totals .order-total .amount,.logo_brand .wpb_column .aio-icon > i:hover,.site-footer .footer-abs-section .footer-abs-left > a:hover,.site-header .mega_menu_customer .mega-sub-menu .mega-menu-column:not(.img_right_mega) .mega-menu-item .menu > li > a:hover,
            .shop_table.woocommerce-checkout-review-order-table .order-total .amount,.search-results .content-search > article .entry-meta > span > span > a:hover,.nb-navbar .sub-menu > .menu-item > a:hover >span,.single-product .single-product-wrap .entry-summary .yith-wcwl-add-to-wishlist:hover .yith-wcwl-wishlistaddedbrowse.show .icon-heart-empty,
            .woocommerce-order .woocommerce-thankyou-order-received,.search-results .content-search > article .entry-title > a:hover,.single-product-wrap .yith-wcwl-add-to-wishlist:hover i,.error404 main .pnf-heading,.error404 main h1,
            .woocommerce-order .woocommerce-table--order-details .amount,.sesson_1 .wpb_column .vc_column-inner .wpb_text_column .wpb_wrapper > p > a,.bottom-section-wrap .container .bot-right .icon-header-wrap .header-cart-wrap .mini-cart-section .mini-cart-wrap .cart_list .mini_cart_item .remove:hover > i,
            .paging-navigation.pagination-style-1 .current,.woocommerce .woocommerce-info:before, .woocommerce-page .woocommerce-info:before,.testimorial_page .nb_testimonials .nb_testimonial-item .nb_testimonial-box2 .nb_testimonial-content:before,
            .home3_section_faq_testimonial .customer_vendor .customer_content .wpb_column .vc_column-inner > .wpb_wrapper .wpb_text_column:before,.blog .post .entry-cat a:hover,.blog .classic .post .entry-text .page-links a:hover,
            .home3_section_faq_testimonial .customer_vendor .customer_content .wpb_column .vc_column-inner > .wpb_wrapper .uvc-sub-heading,.text-logo > a:hover,.blog .classic .post .entry-title > a:hover,.comments-link a:hover,
            .woocommerce-pagination.pagination-style-1 .page-numbers.current,.galary_collection .uvc-main-heading > h2,.customer_vender .customer_content .wpb_column .testimorial_vendor .uvc-sub-heading,.error404 .site-main .home-link .icon-home:hover,
            .site-header .widget-woocommerce-currency-switcher .dd-container .dd-options .dd-option:hover
            {
                color: " . esc_attr($primary_color) . ";                
            }
           .site-header .menu-main-menu-wrap .mega-menu-wrap .mega-menu .mega-menu-grid.mega-toggle-on .mega-sub-menu .mega_menu_customer .mega-sub-menu > li .menu > li > a:hover,.site-header .menu-main-menu-wrap .mega-menu-wrap .mega-menu .mega-menu-item:not(.mega-menu-grid).mega-toggle-on .mega-sub-menu > li > a:hover,.site-header.header-home-1 .middle-section-wrap .container .menu-left .header-search-wrap .search-form.visible .nb-input-group .search-button:hover > button > i,.sticky-sidebar .widget_search .nb-input-group .search-button > button:hover .icon-search,.single-product .single-product-wrap .compare,

           .site-header.header-home-2 .bottom-section-wrap .container .bot-right .header-search-wrap .search-form.visible .nb-input-group .search-button:hover > button > i,

           .site-header.header-home-3 .middle-section-wrap .container .bot-right .header-search-wrap .search-form.visible .nb-input-group .search-button:hover > button > i,

           .search .content-search .no-results .nb-input-group .search-button:hover .icon-search,

           .sticky-sidebar .widget_price_filter .price_slider_amount > button,.widget_search .nb-input-group .search-button:hover .icon-search,.site-header.header-home-2 .mega-menu-wrap > ul > li > a:hover,.site-header .mega_menu_customer .mega-sub-menu .mega-menu-column .custom-html-widget > a:hover,.site-header .mega-menu-wrap .mega-menu .mega-menu-flyout .mega-sub-menu .mega-menu-item .mega-menu-link:hover,#simplemodal-login-form .simplemodal__footer .footer__right a,.single-product .single-product-wrap .entry-summary .cart .single_add_to_cart_button{
            color: " . esc_attr($primary_color) . " !important;
            }
            .nb-page-title-wrap {
                padding-top: " . esc_attr($page_title_padding) . "px;
                padding-bottom: " . esc_attr($page_title_padding) . "px;"
            . ($page_title_img != '' ? "background-image: url(" . esc_url($page_title_img) . ");
                background-size: cover;
                background-position: 50% 50%;" : "")
            . "
            }
            .nb-page-title .entry-meta,
            .nb-page-title-wrap a,
            .nb-page-title-wrap h1,
            .single-product .single-product-wrap .entry-summary .yith-wcwl-add-to-wishlist:hover a .feedback, 
            nb-page-title-wrap nav {
                color: " . esc_attr($page_title_color) . ";
            }            
            .nb-page-title-wrap h1 {
                font-size: " . esc_attr($page_title_size) . "px;
            }
            .woocommerce-page.wc-no-sidebar #primary {
                width: 100%;
            }
            .shop-main .products.grid-type .product:nth-child(" . esc_attr($loop_columns) . "n + 1) {
                clear: both;
            }                                   
        ";
        $css .= "
            .footer-top-section {                
                background-color: " . esc_attr($footer_top_bg) . ";
            }
            .footer-top-section h1,
            .footer-top-section h2,
            .footer-top-section h3,
            .footer-top-section h4,
            .footer-top-section h5,
            .footer-top-section h6,
            .footer-top-section .widget-title a{
                color: " . esc_attr($footer_top_heading) . ";
            }
            .footer-top-section,
            .footer-top-section a,
            .footer-top-section .widget ul li a{
                color: " . esc_attr($footer_top_color) . ";
            }
            .footer-top-section .widget .tagcloud a{
                border-color: " . esc_attr($footer_top_color) . ";
            }
            .footer-bot-section{
                background-color: " . esc_attr($footer_bot_bg) . ";
            }
            .woocommerce .woocommerce-info, .woocommerce-page .woocommerce-info{
            border-top: 3px solid " . esc_attr($primary_color) . ";
            }
            footer.site-footer .footer-top-section{
                padding-top:".esc_attr($footer_top_padding_top)."px;
                padding-bottom:".esc_attr($footer_top_padding_bottom)."px;
                border-bottom: 1px solid " . esc_attr($footer_top_border_bot_color) . ";
            }
            footer.site-footer .footer-bot-section{
                padding-top:".esc_attr($footer_bot_padding_top)."px;
                padding-bottom:".esc_attr($footer_bot_padding_bottom)."px;
                border-bottom: 1px solid " . esc_attr($footer_bot_border_bot_color) . ";
            }
            .footer-bot-section h1,
            .footer-bot-section h2,
            .footer-bot-section h3,
            .footer-bot-section h4,
            .footer-bot-section h5,
            .footer-bot-section h6,
            .footer-bot-section .widget-title a{
                color: " . esc_attr($footer_bot_heading) . ";
            }
            .footer-bot-section,
            .footer-bot-section a,
            .footer-bot-section .widget ul li a{
                color: " . esc_attr($footer_bot_color) . ";
            }
            .footer-bot-section .widget .tagcloud a{
                border-color: " . esc_attr($footer_bot_color) . ";
            }
            .footer-abs-section{
                color: " . esc_attr($footer_abs_color) . ";
                background-color: " . esc_attr($footer_abs_bg) . ";
                padding-top: " . esc_attr($footer_abs_padding) . "px;
                padding-bottom: " . esc_attr($footer_abs_padding) . "px;
            }
            .footer-abs-section a, .footer-abs-section p {
                color: " . esc_attr($footer_abs_color) . ";
            }
            .single-blog .nb-page-title .entry-title,
            .single-blog .entry-title{
                font-size: " . esc_attr($blog_title_size) . "px;
            }
            ";
        if ($page_bg_color) {
            $css .= "
                .page #site-wrapper {
                    background-color: " . esc_attr($page_bg_color) . ";
                }
                ";
        }
        if ($page_bg[0]) {
            $css .= "
                .page #site-wrapper {
                    background: url(" . esc_url($page_bg[0]) . ") repeat center center / cover; 
                }
            ";
        }
        $css .= "
            @media (min-width: 576px) {
                .shop-main:not(.wide) .single-product-wrap .product-image {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 " . esc_attr($pd_images_width) . "%;
                    flex: 0 0 " . esc_attr($pd_images_width) . "%;                   
                    max-width: " . esc_attr($pd_images_width) . "%;
                }
                .shop-main:not(.wide) .single-product-wrap .entry-summary {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 calc(100% - " . esc_attr($pd_images_width) . "%);
                    flex: 0 0 calc(100% - " . esc_attr($pd_images_width) . "%);                   
                    max-width: calc(100% - " . esc_attr($pd_images_width) . "%);
                }
            }
            @media (min-width: 992px) {
        ";

        if ('no-sidebar' !== $blog_sidebar) {
            $css .= "            
                .site-content .blog #primary,
                .site-content .single-blog #primary {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 " . esc_attr($blog_width) . "%;
                    flex: 0 0 " . esc_attr($blog_width) . "%;
                    max-width: " . esc_attr($blog_width) . "%;
                } 
                .site-content .blog #secondary,
                .site-content .single-blog #secondary {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 calc(100% - " . esc_attr($blog_width) . "%);
                    flex: 0 0 calc(100% - " . esc_attr($blog_width) . "%);
                    max-width: calc(100% - " . esc_attr($blog_width) . "%);
                }                                  
            ";
        }
        if ('left-sidebar' == $blog_sidebar) {
            $css .= "
                .single-blog #primary, .blog #primary {
                    order: 2;
                }
                .single-blog #secondary, .blog #secondary {
                    padding-right: 30px;
                }
            ";
        } elseif ('right-sidebar' == $blog_sidebar) {
            $css .= "
                .single-blog #secondary, .blog #secondary {
                    padding-left: 30px;
                }
            ";
        }
        if ('left-sidebar' == $shop_sidebar) {
            $css .= "
                .archive.woocommerce .shop-main {
                    order: 2;
                }
                .archive.woocommerce #secondary {
                    padding-right: 30px;
                    padding-left: 15px;
                }
            ";
        } elseif ('right-sidebar' == $shop_sidebar) {
            $css .= "
                .archive.woocommerce #secondary {
                    padding-left: 30px;
                    padding-right: 15px;
                }
            ";
        }

        if ('left-sidebar' == $pd_details_sidebar) {
            $css .= "
                .single-product .shop-main {
                    order: 2;
                }
                .single-product #secondary {
                    padding-right: 30px;
                }
            ";
        } elseif ('right-sidebar' == $shop_sidebar) {
            $css .= "
                .single-product #secondary {
                    padding-left: 30px;
                }
            ";
        }
        if ('no-sidebar' !== $pd_details_sidebar) {
            $css .= "
                .single-product.wc-pd-has-sidebar .shop-main {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 " . esc_attr($pd_details_width) . "%;
                    flex: 0 0 " . esc_attr($pd_details_width) . "%;
                    max-width: " . esc_attr($pd_details_width) . "%;
                }
                .single-product #secondary {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 calc(100% - " . esc_attr($pd_details_width) . "%);
                    flex: 0 0 calc(100% - " . esc_attr($pd_details_width) . "%);
                    max-width: calc(100% - " . esc_attr($pd_details_width) . "%);
                }
            ";
        }
        // TODO check this for tag ... ?
        if ('no-sidebar' !== $shop_sidebar) {
            $css .= "
            .archive.woocommerce.wc-left-sidebar .shop-main,
            .archive.woocommerce.wc-right-sidebar .shop-main,
                .archive.woocommerce.wc-has-sidebar .shop-main{
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 " . esc_attr($wc_content_width) . "%;
                    flex: 0 0 " . esc_attr($wc_content_width) . "%;
                    max-width: " . esc_attr($wc_content_width) . "%;
                }
                .archive.woocommerce.wc-left-sidebar #secondary,
            .archive.woocommerce.wc-right-sidebar #secondary,
                .archive.woocommerce.wc-has-sidebar #secondary{
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 calc(100% - " . esc_attr($wc_content_width) . "%);
                    flex: 0 0 calc(100% - " . esc_attr($wc_content_width) . "%);
                    max-width: calc(100% - " . esc_attr($wc_content_width) . "%);
                }
            ";
        } else {
            $css .= "
                .site-content .shop-main {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 100%;
                    flex: 0 0 100%;
                    max-width: 100%;
                }
            ";
        }
        /*Pages sidebar*/
        
        if ('no-sidebar' !== $pages_sidebar) {
            $css .= "            
                .page .site-content #primary
                {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 " . esc_attr($page_content_width) . "%;
                    flex: 0 0 " . esc_attr($page_content_width) . "%;                 
                    max-width: " . esc_attr($page_content_width) . "%;
                    
                } 
                .page .site-content #primary{width: 70%;}
                .page .site-content #secondary {
                    -webkit-box-flex: 0;
                    -ms-flex: 0 0 calc(100% - " . esc_attr($page_content_width) . "%);
                    flex: 0 0 calc(100% - " . esc_attr($page_content_width) . "%);              
                    max-width: calc(100% - " . esc_attr($page_content_width) . "%);

                }                                  
            ";
        }
        if ('left-sidebar' == $pages_sidebar) {
            $css .= "
                .page .site-content #primary {
                    order: 2;
                }
              
            ";
        } elseif('right-sidebar' == $pages_sidebar) {
            $css .= "
                .page .site-content #secondary {
                    order: 2;
                }
                
            ";
        }

        $css .= "
            }
        ";

        return $css;
    }

    public function print_embed_style()
    {
        if (class_exists( 'NetbaseCustomizeClass', false ) ) {
            if(!empty(get_transient('change_customize_css'))) {
                if(get_transient('change_customize_css')==1) {
                    set_transient('change_customize_css', 0, NBT_TIMEOUT_TRANSIENT_CUSTOMIZE);
                    $style = $this->get_embed_style();
                    $style = preg_replace('#/\*.*?\*/#s', '', $style);
                    $style = preg_replace('/\s*([{}|:;,])\s+/', '$1', $style);
                    $style = preg_replace('/\s\s+(.*)/', '$1', $style);
                    if(get_option('customize_save_css')==false) {
                        add_option( 'customize_save_css', $style, '', 'yes' );
                    } else {
                        update_option( 'customize_save_css', $style );
                    }
                    $cp = new NetbaseCustomizeClass();
                    $cp->save_css_customize();
                }
            }
        }
        $my_transient = get_transient('current_load_css');
        if(empty($my_transient) || !$this->is_plugin_active_byme('nb-fw/nb-fw.php')) {
            $this->print_style_head();
        } else {
            if($my_transient==NBT_LOAD_CUSTOMIZE_FROM_HEAD) {
                $this->print_style_head();
            } else {
                if($my_transient==NBT_LOAD_CUSTOMIZE_FROM_CSS_FILE && file_exists(NBT_REAL_PATH_TEMPLATE . NBT_CSS_CUSTOMIZE_PATH . NBT_CSS_CUSTOMIZE_NAME)) {
                    wp_enqueue_style('customize', get_template_directory_uri() . NBT_CSS_CUSTOMIZE_PATH . NBT_CSS_CUSTOMIZE_NAME, array(), Antimall_VER);
                } else {
                    set_transient('current_load_css', NBT_LOAD_CUSTOMIZE_FROM_HEAD, NBT_TIMEOUT_TRANSIENT_CUSTOMIZE);
                    $this->print_style_head();
                }
            }
        }
    }

    public function print_style_head() {
        $style = $this->get_embed_style();

        $style = preg_replace('#/\*.*?\*/#s', '', $style);
        $style = preg_replace('/\s*([{}|:;,])\s+/', '$1', $style);
        $style = preg_replace('/\s\s+(.*)/', '$1', $style);

        wp_add_inline_style('nbcore_front_style', $style);
    }

//    public static function print_embed_style()
//    {
//        $style = self::get_embed_style();
//
//        $style = preg_replace('#/\*.*?\*/#s', '', $style);
//        $style = preg_replace('/\s*([{}|:;,])\s+/', '$1', $style);
//        $style = preg_replace('/\s\s+(.*)/', '$1', $style);
//
//        wp_add_inline_style('nbcore_woo_style', $style);
//    }
    function is_plugin_active_byme( $plugin ) {
        return in_array( $plugin, (array) get_option( 'active_plugins', array() ) );
    }

    public static function filter_fonts($font)
    {
        $font_args = explode(",", antimall_get_options($font));
        if ($font_args[0] === 'google') {
            self::handle_google_font($font_args[1]);
        } elseif ($font_args[0] === 'custom') {
            self::handle_custom_font($font_args[1]);
        } elseif ($font_args[0] === 'standard') {
            self::handle_standard_font($font_args[1]);
        }
    }

    public static function handle_google_font($font_name)
    {
        $font_subset = 'latin,latin-ext';
        $font_families = array();
        $google_fonts = Antimall_Helper::google_fonts();
        $font_parse = array();


        $font_weight = $google_fonts[$font_name];
        $font_families[$font_name] = isset($font_families[$font_name]) ? array_unique(array_merge($font_families[$font_name], $font_weight)) : $font_weight;

        foreach ($font_families as $font => $font_weight) {
            $font_parse[] = $font . ':' . implode(',', $font_weight);
        }

        if (antimall_get_options('subset_cyrillic')) {
            $font_subset .= ',cyrillic,cyrillic-ext';
        }
        if (antimall_get_options('subset_greek')) {
            $font_subset .= ',greek,greek-ext';
        }
        if (antimall_get_options('subset_vietnamese')) {
            $font_subset .= ',vietnamese';
        }

        $query_args = array(
            'family' => urldecode(implode('|', $font_parse)),
            'subset' => urldecode($font_subset),
        );

        $font_url = add_query_arg($query_args, 'https://fonts.googleapis.com/css');

        $enqueue = esc_url_raw($font_url);

        wp_enqueue_style('nb-google-fonts', $enqueue);
    }

    public static function google_fonts_url()
    {
        $gg_font_arr = array();
        $gg_font_parse = array();
        $google_fonts = Antimall_Helper::google_fonts();
        $gg_subset = 'latin,latin-ext';

        $body_font = explode(',', antimall_get_options('body_font_family'));
        $heading_font = explode(',', antimall_get_options('heading_font_family'));

        if ($body_font[0] === 'google') {
            $body_name = $body_font[1];
            $body_weight = $google_fonts[$body_name];
            $gg_font_arr[$body_name] = isset($gg_font_arr[$body_name]) ? array_unique(array_merge($gg_font_arr[$body_name], $body_weight)) : $body_weight;
        }

        if ($heading_font[0] === 'google') {
            $heading_name = $heading_font[1];
            $heading_weight = $google_fonts[$heading_name];
            $gg_font_arr[$heading_name] = isset($gg_font_arr[$heading_name]) ? array_unique(array_merge($gg_font_arr[$heading_name], $heading_weight)) : $heading_weight;
        }

        if (!empty($gg_font_arr)) {
            foreach ($gg_font_arr as $gg_font_name => $gg_font_weight) {
                $gg_font_parse[] = $gg_font_name . ':' . implode(',', $gg_font_weight);
            }

            if (antimall_get_options('subset_cyrillic')) {
                $gg_subset .= ',cyrillic,cyrillic-ext';
            }
            if (antimall_get_options('subset_greek')) {
                $gg_subset .= ',greek,greek-ext';
            }
            if (antimall_get_options('subset_vietnamese')) {
                $gg_subset .= ',vietnamese';
            }

            $query_args = array(
                'family' => urldecode(implode('|', $gg_font_parse)),
                'subset' => urldecode($gg_subset),
            );

            $font_url = add_query_arg($query_args, 'https://fonts.googleapis.com/css');

            $enqueue = esc_url_raw($font_url);

            wp_enqueue_style('nb-google-fonts', $enqueue);
        }
    }

    public static function upload_mimes($t)
    {
        // Add supported font extensions and MIME types.
        $t['eot'] = 'application/vnd.ms-fontobject';
        $t['otf'] = 'application/x-font-opentype';
        $t['ttf'] = 'application/x-font-ttf';
        $t['woff'] = 'application/font-woff';
        $t['woff2'] = 'application/font-woff2';

        return $t;
    }

    public static function register_required_plugins()
    {
        if (!isset(self::$plugins)) {
            self::$plugins = array(
                array(
                    'name' => 'Netbase Framework',
                    'slug' => 'nb-fw',
                    'required' => true,
                    'version' => '1.4.1',
                    'source' => esc_url('http://demo9.cmsmart.net/plugins/antimall/nb-fw.zip'),
                ),
            );
        }


        $config = array(
            'id' => 'antimall',                 // Unique ID for hashing notices for multiple instances of TGMPA.
            'default_path' => '',                      // Default absolute path to bundled plugins.
            'menu' => 'antimall-install-plugins', // Menu slug.
            'has_notices' => true,                    // Show admin notices or not.
            'dismissable' => true,                    // If false, a user cannot dismiss the nag message.
            'dismiss_msg' => '',                      // If 'dismissable' is false, this message will be output at top of nag.
            'is_automatic' => false,                   // Automatically activate plugins after installation or not.
            'message' => '',                      // Message to output right before the plugins table.
        );


        antimall(self::$plugins, $config);
    }
}

new Antimall_Core();


