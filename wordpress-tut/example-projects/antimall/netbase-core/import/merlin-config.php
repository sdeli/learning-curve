<?php
if ( ! class_exists( 'Merlin' ) ) {
	return;
}

global $antimall_font_icon_setting;
global $ico_about_path;
global $ico_content_path;
global $ico_brand_path;
global $ico_df_path;

$antimall_font_icon_setting 	= trailingslashit( get_template_directory() ) . 'import-files/ocdi/icons/font_icon_settings.txt';;

$ico_about_path				= get_template_directory() . '/import-files/ocdi/icons/about_icon.zip';
$ico_content_path			= get_template_directory() . '/import-files/ocdi/icons/font-content.zip';
$ico_brand_path				= get_template_directory() . '/import-files/ocdi/icons/logo_brand.zip';
$ico_df_path				= get_template_directory() . '/import-files/ocdi/icons/Defaults.zip';

/**
 * Set directory locations, text strings, and other settings for Merlin WP.
 */
$wizard = new Merlin(
	// Configure Merlin with custom settings.
	$config = array(
		'directory'                => '', // Location where the 'merlin' directory is placed.
		'merlin_url'               => 'merlin', // Customize the page URL where Merlin WP loads.
		'child_action_btn_url'     => 'https://codex.wordpress.org/Child_Themes',  // The URL for the 'child-action-link'.
		'help_mode'                => false, // Set to true to turn on the little wizard helper.
		'dev_mode'                 => true, // Set to true if you're testing or developing.
		'branding'                 => true, // Set to false to remove Merlin WP's branding.
	),
	// Text strings.
	$strings = array(
		'admin-menu'               => esc_html__( 'Theme Setup' , 'antimall' ),
		'title%s%s%s%s' 		       => esc_html__( '%s%s Themes &lsaquo; Theme Setup: %s%s' , 'antimall' ),
		'return-to-dashboard'      => esc_html__( 'Return to the dashboard' , 'antimall' ),
		'btn-skip'                 => esc_html__( 'Skip' , 'antimall' ),
		'btn-next'                 => esc_html__( 'Next' , 'antimall' ),
		'btn-start'                => esc_html__( 'Start' , 'antimall' ),
		'btn-no'                   => esc_html__( 'Cancel' , 'antimall' ),
		'btn-plugins-install'      => esc_html__( 'Install' , 'antimall' ),
		'btn-child-install'        => esc_html__( 'Install' , 'antimall' ),
		'btn-content-install'      => esc_html__( 'Install' , 'antimall' ),
		'btn-import'               => esc_html__( 'Import' , 'antimall' ),
		'welcome-header%s'         => esc_html__( 'Welcome to %s' , 'antimall' ),
		'welcome-header-success%s' => esc_html__( 'Hi. Welcome back' , 'antimall' ),
		'welcome%s'                => esc_html__( 'This wizard will set up your theme, install plugins, and import content. It is optional & should take only a few minutes.' , 'antimall' ),
		'welcome-success%s'        => esc_html__( 'You may have already run this theme setup wizard. If you would like to proceed anyway, click on the "Start" button below.' , 'antimall' ),

		'child-header'             => esc_html__( 'Install Child Theme' , 'antimall' ),
		'child-header-success'     => esc_html__( 'You\'re good to go!' , 'antimall' ),
		'child'                    => esc_html__( 'Let\'s build & activate a child theme so you may easily make theme changes.' , 'antimall' ),
		'child-success%s'          => esc_html__( 'Your child theme has already been installed and is now activated, if it wasn\'t already.' , 'antimall' ),
		'child-action-link'        => esc_html__( 'Learn about child themes' , 'antimall' ),
		'child-json-success%s'     => esc_html__( 'Awesome. Your child theme has already been installed and is now activated.' , 'antimall' ),
		'child-json-already%s'     => esc_html__( 'Awesome. Your child theme has been created and is now activated.' , 'antimall' ),

		'plugins-header'           => esc_html__( 'Install %d plugins' , 'antimall' ),
		'plugins-header-success'   => esc_html__( 'You\'re up to speed!' , 'antimall' ),
		'plugins'                  => esc_html__( 'Let\'s install some essential WordPress plugins to get your site up to speed.' , 'antimall' ),
		'plugins-success%s'        => esc_html__( 'The required WordPress plugins are all installed and up to date. Press "Next" to continue the setup wizard.' , 'antimall' ),
		'plugins-action-link'      => esc_html__( 'Advanced' , 'antimall' ),

		'import-header-1'            => esc_html__( 'Choose your own theme' , 'antimall' ),
		'import-1'                   => esc_html__( 'See %d+ home layouts' , 'antimall' ),
		'import-header-2'            => esc_html__( 'Choose Your Theme' , 'antimall' ),
		'import-2'                   => esc_html__( 'There are many unique and sophisticated theme are available on Printcart.com that you can choose the one is suitable for your printing business' , 'antimall' ),
		'import-header-3'            => esc_html__( 'Import data' , 'antimall' ),
		'import-3'                   => esc_html__( 'You will get the demo data of the theme which you chose and you can customize it if you want' , 'antimall' ),
		'import-header-4'            => esc_html__( 'Importing...' , 'antimall' ),
		'import-4'                   => esc_html__( 'Please be patient. It will be ended soon.
			Do not quit or shut down your browser' , 'antimall' ),
		'process-4'                => esc_html__( 'Importing Antimall Data' , 'antimall' ),
		'import-header'            => esc_html__( 'Import Content' , 'antimall' ),
		'import'                   => esc_html__( 'Let\'s import content to your website, to help you get familiar with the theme.' , 'antimall' ),
		'import-action-link'       => esc_html__( 'Advanced' , 'antimall' ),
		'ready-header'             => esc_html__( 'Import Successfully!!!' , 'antimall' ),
		'ready%s'                  => esc_html__( 'Your site has been set up successfully. Enjoy your new site by %s' , 'antimall' ),
		'ready-action-link'        => esc_html__( 'Extras' , 'antimall' ),
		'ready-big-button'         => esc_html__( 'View your site' , 'antimall' ),
		'ready-link-1'             => wp_kses( sprintf( '<a href="%1$s" target="_blank">%2$s</a>', 'https://wordpress.org/support/', esc_html__( 'Explore WordPress', 'antimall' ) ), array( 'a' => array( 'href' => array(), 'target' => array() ) ) ),
		'ready-link-2'             => wp_kses( sprintf( '<a href="%1$s" target="_blank">%2$s</a>', 'http://cmsmart.net', esc_html__( 'Get Theme Support', 'antimall' ) ), array( 'a' => array( 'href' => array(), 'target' => array() ) ) ),
		'ready-link-3'             => wp_kses( sprintf( '<a href="'.admin_url( 'customize.php' ).'" target="_blank">%s</a>', esc_html__( 'Start Customizing', 'antimall' ) ), array( 'a' => array( 'href' => array(), 'target' => array() ) ) ),
	),
$plugins = array(
	array(
		'name' 		=> esc_html__('Woocommerce', 'antimall'),
		'slug' 		=> 'woocommerce',
		'required' 	=> true,
		'version' 	=> '3.7.0',
	),
	array(
		'name' 		=> esc_html__('Max Mega Menu', 'antimall'),
		'slug' 		=> 'megamenu',
		'required' 	=> true,
		'version' 	=> '2.7.2',
	),
	array(
		'name' 		=> esc_html__('MailChimp for WordPress', 'antimall'),
		'slug' 		=> 'mailchimp-for-wp',
		'required' 	=> false,
		'version' 	=> '4.5.4',
	),
    array(
        'name' 		=> esc_html__('YITH WooCommerce Compare', 'antimall'),
        'slug' => 'yith-woocommerce-compare',
        'required' => true,
        'version' => '2.3.13',
    ),
	array(
		'name' 		=> esc_html__('YITH WooCommerce Wishlist', 'antimall'),
		'slug' 		=> 'yith-woocommerce-wishlist',
		'required' 	=> true,
		'version' 	=> '2.2.13',
	),
	array(
        'name' => esc_html__('Widget CSS Classes', 'antimall'),
        'slug' => 'widget-css-classes',
        'required' => true,
        'version' => '1.5.4',
    ),
    array(
        'name' => esc_html__('WPBakery Visual Composer', 'antimall'),
        'slug' => 'js_composer',
        'required' => true,
        'version' => '6.5.0',
        'source' => esc_url('http://demo9.cmsmart.net/plugins/printshop-solution/newvc/js_composer.zip'),
    ),
    array(
        'name' => esc_html__('Ultimate Addons for WPBakery Page Builder', 'antimall'),
        'slug' => 'Ultimate_VC_Addons',
        'required' => true,
        'version' => '3.19.8',
        'source' => esc_url('http://demo9.cmsmart.net/plugins/printshop-solution/Ultimate_VC_Addons.zip'),
    ),
    array(
        'name' 		=> esc_html__('Slider Revolution', 'antimall'),
        'slug' 		=> 'revslider',
        'required' 	=> false,
        'version' 	=> '6.3.5',
        'source' 	=>esc_url('http://demo9.cmsmart.net/plugins/printshop-solution/revslider.zip'),
    ),
    array(
        'name' 		=> esc_html__('Antique Elements', 'antimall'),
        'slug' 		=> 'antique-elements',
        'required' 	=> false,
        'version' 	=> '1.0.2',
        'source' => esc_url('http://demo9.cmsmart.net/plugins/antimall/antique-elements.zip'),
	),
	array(
		'name'              => 'WooPanel',
		'slug'              => 'woopanel',
		'required'          => false,
		'version'           => '1.2.7',
		'source'            => esc_url('http://demo9.cmsmart.net/plugins/printshop-solution/woopanel.zip'),
	),
	array(
		'name' 		=> esc_html__('YITH WooCommerce Quick View', 'antimall'),
		'slug' 		=> 'yith-woocommerce-quick-view',
		'required' 	=> true,
		'version' 	=> '1.3.13',
	),
)
);

function princart_local_import_files() {
	return array(
		array(
			'import_file_name'             		=> 'Antimall 1',
			'local_import_file_data'            => trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall/content.xml',
            'local_import_megamenu_themes'      => array(
                'megamenu_themes' 	=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall2/megamenu_themes.txt',
                'megamenu_settings' => trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall2/megamenu_settings.txt'
            ),
			'local_import_widget_file'     		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall/widgets.wie',
			'local_import_customizer_file' 		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall/customizer.dat',
			'local_import_rev_slider_file' 		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/slider/sider1.zip',
			'import_preview_image_url'     		=> trailingslashit( get_template_directory_uri() ) . 'import-files/ocdi/antimall/screenshot.png',
			'import_notice'                		=> esc_html__( 'After you import this demo, you will have to setup the slider separately.', 'antimall' ),
			'title_home_page'                  	=> 'Home-1',
			'menu_settings'                 	=> array(
                'primary' 		=> 'main menu'
            ),
		),
        array(
            'import_file_name'             		=> 'Antimall 2',
            'local_import_file_data'            => trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall2/content.xml',
            'local_import_megamenu_themes'      => array(
                'megamenu_themes' 	=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall2/megamenu_themes.txt',
                'megamenu_settings' => trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall2/megamenu_settings.txt'
            ),
            'local_import_widget_file'     		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall2/widgets.wie',
            'local_import_customizer_file' 		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall2/customizer.dat',
            'local_import_rev_slider_file' 		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/slider/slider2.zip',
            'import_preview_image_url'     		=> trailingslashit( get_template_directory_uri() ) . 'import-files/ocdi/antimall2/screenshot.png',
            'import_notice'                		=> esc_html__( 'After you import this demo, you will have to setup the slider separately.', 'antimall' ),
            'title_home_page'                  	=> 'Home-2',
            'menu_settings'                 	=> array(
                'primary' 		=> 'main menu'
            ),
        ),
        array(
            'import_file_name'             		=> 'Antimall 3',
            'local_import_file_data'            => trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall3/content.xml',
            'local_import_widget_file'     		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall3/widgets.wie',
            'local_import_customizer_file' 		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/antimall3/customizer.dat',
            'local_import_rev_slider_file' 		=> trailingslashit( get_template_directory() ) . 'import-files/ocdi/slider/slider3.zip',
            'import_preview_image_url'     		=> trailingslashit( get_template_directory_uri() ) . 'import-files/ocdi/antimall3/screenshot.png',
            'import_notice'                		=> esc_html__( 'After you import this demo, you will have to setup the slider separately.', 'antimall' ),
            'title_home_page'                  	=> 'Home-3',
            'menu_settings'                 	=> array(
                'primary' 		=> 'main menu'
            ),
        ),

	);
}
add_filter( 'merlin_import_files', 'princart_local_import_files' );

/**
 * Get data from a file with WP_Filesystem
 *
 * @param $file
 *
 * @return bool
 */
function antimall_aidoo_get_file_contents( $file ) {
	WP_Filesystem();
	global $wp_filesystem;
	return $wp_filesystem->get_contents( $file );
}

function antimall_setup_font_icon_settings() {

	update_smile_fonts_option();
	antimall_unzip_font_package();

}
function update_smile_fonts_option() {
	global $wpdb;
	global $antimall_font_icon_setting;
	$option_name = 'smile_fonts' ;	
	if ( get_option( $option_name ) !== false ) {
		$affected_row = $wpdb->replace($wpdb->prefix.'options', 
			array( 
				'option_name' => 'smile_fonts',
				'option_value' => antimall_aidoo_get_file_contents($antimall_font_icon_setting),
				'autoload' => 'yes'
			), 
			array( 
				'%s',
				'%s',
				'%s' 
			) 
		);
	}else{
		$table = $wpdb->prefix.'options';
		$data = array('smile_fonts' => antimall_aidoo_get_file_contents($antimall_font_icon_setting));
		$format = array('%s','%s');
		$wpdb->insert($table,$data,$format);
	}
	echo 'update smile_fonts option ok <br/>';
}

function antimall_unzip_font_package() {

	global $ico_about_path, $ico_content_path, $ico_brand_path, $ico_df_path;

	WP_Filesystem();
	$destination 		= wp_upload_dir();
	$base_dir			= $destination['basedir'];
	$smile_fonts_path	= $base_dir . '/smile_fonts';
	$unzipfile_about 	= unzip_file( $ico_about_path, $smile_fonts_path);
	$unzipfile_content 	= unzip_file( $ico_content_path, $smile_fonts_path);
	$unzipfile_brand 	= unzip_file( $ico_brand_path, $smile_fonts_path);
	$ico_df_path 	= unzip_file( $ico_df_path, $smile_fonts_path);

	if ( is_wp_error( $unzipfile_about ) && is_wp_error( $unzipfile_content ) && is_wp_error( $unzipfile_brand )  && is_wp_error( $ico_df_path )) {
		echo 'There was an error unzipping the file. <br/>';
	} 
	else {
		echo 'Successfully unzipped the file! <br/>';       
	}
}
/**
 * Execute custom code after the whole import has finished.
 */
function antimall_merlin_after_import_setup( $selected_import_index ) {

	//update ultimate icon settings
	antimall_setup_font_icon_settings();

}
add_action( 'merlin_after_all_import', 'antimall_merlin_after_import_setup' );