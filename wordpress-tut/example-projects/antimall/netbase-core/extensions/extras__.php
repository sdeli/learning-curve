<?php
function add_attribute($option){

    $attributes = array();
    if ( class_exists( 'WooCommerce' ) ) {
        $attribute_taxonomies = wc_get_attribute_taxonomies();
        $attributes = array();
        foreach($attribute_taxonomies as $attr)
        {
            if($attr->attribute_type == 'select')
            {
                $key = 'pa_'.$attr->attribute_name;
                $attributes[$key] = $attr->attribute_label;
            }
        }
    }

    $option['nbcore_pa_swatch_intro']= array(
        'settings' => array(),
        'controls' => array(
            'label' => esc_html__('Swatch style Attributes', 'antimall'),
            'section' => 'product_category',
            'type' => 'Antimall_Customize_Control_Heading',
        ),
    );

    $option['nbcore_pa_swatch_style' ]= array(
        'settings' => array(
            'default' => '',
            'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
        ),
        'controls' => array(
            'label' => esc_html__('Swatch style Attributes', 'antimall'),
            'description' => esc_html__('This options also effect for product attributes', 'antimall'),
            'section' => 'product_category',
            'type' => 'Antimall_Customize_Control_Checkbox_List',
            'choices' => $attributes,
        ),
    );
    $option['nbcore_wc_attr']= array(
        'settings' => array(
            'default' => true,
            'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
        ),
        'controls' => array(
            'label' => esc_html__('Show Attribute ?', 'antimall'),
            'description' => esc_html__('This options also effect for product attributes in product archive', 'antimall'),
            'section' => 'product_category',
            'type' => 'Antimall_Customize_Control_Switch',
        ),
    );



    return $option;
}
add_filter('attribute_hook','add_attribute');