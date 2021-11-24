<?php

/**
 * Class that contain all the sanitize in WordPress Theme Customize
 */
class Antimall_Customize_Sanitize
{
    public static function sanitize_selection($input, $setting) {
        $input = sanitize_key( $input );
        $choices = $setting->manager->get_control( $setting->id )->choices;

        return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
    }

    public static function sanitize_file_image($file, $setting) {
        $mimes = array(
            'jpg|jpeg|jpe' => 'image/jpeg',
            'gif'          => 'image/gif',
            'png'          => 'image/png',
            'bmp'          => 'image/bmp',
            'tif|tiff'     => 'image/tiff',
            'ico'          => 'image/x-icon',            
        );
        $file_ext = wp_check_filetype( $file, $mimes );
        // If $image has a valid mime_type, return it; otherwise, return the default.
        return ( $file_ext['ext'] ? $file : $setting->default );
    }

    public static function sanitize_file_font($file, $setting) {
        $mimes = array(            
            'eot'          => 'application/vnd.ms-fontobject',
            'otf'          => 'application/x-font-opentype',
            'ttf'          => 'application/x-font-ttf',
            'woff'         => 'application/font-woff',
            'woff2'        => 'application/font-woff2',

        );
        $file_ext = wp_check_filetype( $file, $mimes );
        // If $image has a valid mime_type, return it; otherwise, return the default.
        return ( $file_ext['ext'] ? $file : $setting->default );
    }

    public static function sanitize_checkbox($input) {
        return ( $input ? true : false );
    }
}