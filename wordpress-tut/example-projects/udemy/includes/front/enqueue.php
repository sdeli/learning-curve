<?php

function ju_enqueue(){
    $uri                =   get_theme_file_uri();
    $ver                =   JU_DEV_MODE ? time() : false;

    wp_register_style( 
        'ju_google_fonts', 
        'https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i', 
        [],  
        $ver
    );
    wp_register_style( 'ju_bootstrap', $uri . '/assets/css/bootstrap.css', [], $ver );
    wp_register_style( 'ju_style', $uri . '/assets/css/style.css', [], $ver );
    wp_register_style( 'ju_dark', $uri . '/assets/css/dark.css', [], $ver );
    wp_register_style( 'ju_font_icons', $uri . '/assets/css/font-icons.css', [], $ver );
    wp_register_style( 'ju_animate', $uri . '/assets/css/animate.css', [], $ver );
    wp_register_style( 'ju_magnific_popup', $uri . '/assets/css/magnific-popup.css', [], $ver );
    wp_register_style( 'ju_responsive', $uri . '/assets/css/responsive.css', [], $ver );
    wp_register_style( 'ju_custom', $uri . '/assets/css/custom.css', [], $ver );

    // RTL
    wp_register_style( 'ju_bootstrap_rtl' , $uri . '/assets/css/bootstrap-rtl.css' );
    wp_register_style( 'ju_style_rtl' , $uri . '/assets/css/style-rtl.css' );
    wp_register_style( 'ju_dark_rtl', $uri . '/assets/css/dark-rtl.css' );
    wp_register_style( 'ju_font_icons_rtl', $uri . '/assets/css/font-icons-rtl.css' );
    wp_register_style( 'ju_responsive_rtl', $uri . '/assets/css/responsive-rtl.css' );

    wp_enqueue_style( 'ju_google_fonts' );
    wp_enqueue_style( 'ju_bootstrap' );
    wp_enqueue_style( 'ju_style' );
    wp_enqueue_style( 'ju_dark' );
    wp_enqueue_style( 'ju_font_icons' );
    wp_enqueue_style( 'ju_animate' );
    wp_enqueue_style( 'ju_magnific_popup' );
    wp_enqueue_style( 'ju_responsive' );
    wp_enqueue_style( 'ju_custom' );

    if( is_rtl() ){
        wp_enqueue_style( 'ju_bootstrap_rtl' );
        wp_enqueue_style( 'ju_style_rtl' );
        wp_enqueue_style( 'ju_dark_rtl' );
        wp_enqueue_style( 'ju_font_icons_rtl' );
        wp_enqueue_style( 'ju_responsive_rtl' );
    }

    $read_more_color                =   get_theme_mod( 'ju_read_more_color' );
    wp_add_inline_style(
        'ju_custom',
        'a.more-link{ color: ' . $read_more_color . '; border-color: '. $read_more_color. '; }'
    );

    wp_register_script( 'ju_plugins', $uri . '/assets/js/plugins.js', [], $ver, true );
    wp_register_script( 'ju_functions', $uri . '/assets/js/functions.js', [], $ver, true );

    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'ju_plugins' );
    wp_enqueue_script( 'ju_functions' );
}