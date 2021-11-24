<?php

/*
* One value *

'condition' => array(
    'element' => 'element',
    'value'   => 'value',
)

* Array *

'condition' => array(
    'element' => array('element1', 'element2'),
    'value'   => array('value1', 'value2'),
)

* Not Value *

'condition' => array(
    'element' => 'element',
    'value'   => '!value',
)


*/

class Antimall_Customize_Options
{
    public function footer()
    {
        return array(
            'title' => esc_html__('Footer', 'antimall'),
            'priority' => 17,
            'options' => array(
                'nbcore_footer_top_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Footer top section', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_show_footer_top' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show this section', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_footer_fullwidth' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Full width', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_footer_top_layout' => array(
                    'settings' => array(
                        'default' => 'layout-9',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Columns', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'layout-1' => get_template_directory_uri() . '/assets/images/options/footers/footer-1.png',
                            'layout-2' => get_template_directory_uri() . '/assets/images/options/footers/footer-2.png',
                            'layout-3' => get_template_directory_uri() . '/assets/images/options/footers/footer-3.png',
                            'layout-4' => get_template_directory_uri() . '/assets/images/options/footers/footer-4.png',
                            'layout-5' => get_template_directory_uri() . '/assets/images/options/footers/footer-5.png',
                            'layout-6' => get_template_directory_uri() . '/assets/images/options/footers/footer-6.png',
                            'layout-7' => get_template_directory_uri() . '/assets/images/options/footers/footer-7.png',
                            'layout-8' => get_template_directory_uri() . '/assets/images/options/footers/footer-8.png',
                            'layout-9' => get_template_directory_uri() . '/assets/images/options/footers/footer-9.png',
                        ),
                    ),
                ),
                'nbcore_footer_top_padding_top' => array(
                    'settings' => array(
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Padding top', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '0',
                            'max' => '100',
                            'step' => '1',
                        ),
                    ),
                ),
                'nbcore_footer_top_padding_bottom' => array(
                    'settings' => array(
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Padding bottom', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '0',
                            'max' => '100',
                            'step' => '1',
                        ),
                    ),
                ),
                'nbcore_footer_top_border_bot_color' => array(
                    'settings' => array(
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border Bottom Color', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_bot_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Footer bottom section', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_show_footer_bot' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show this section', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_footer_bot_layout' => array(
                    'settings' => array(
                        'default' => 'layout-9',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Columns', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'layout-1' => get_template_directory_uri() . '/assets/images/options/footers/footer-1.png',
                            'layout-2' => get_template_directory_uri() . '/assets/images/options/footers/footer-2.png',
                            'layout-3' => get_template_directory_uri() . '/assets/images/options/footers/footer-3.png',
                            'layout-4' => get_template_directory_uri() . '/assets/images/options/footers/footer-4.png',
                            'layout-5' => get_template_directory_uri() . '/assets/images/options/footers/footer-5.png',
                            'layout-6' => get_template_directory_uri() . '/assets/images/options/footers/footer-6.png',
                            'layout-7' => get_template_directory_uri() . '/assets/images/options/footers/footer-7.png',
                            'layout-8' => get_template_directory_uri() . '/assets/images/options/footers/footer-8.png',
                            'layout-9' => get_template_directory_uri() . '/assets/images/options/footers/footer-9.png',
                        ),
                    ),
                ),
                'nbcore_footer_bot_padding_top' => array(
                    'settings' => array(
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Padding top', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '0',
                            'max' => '100',
                            'step' => '1',
                        ),
                    ),
                ),
                'nbcore_footer_bot_padding_bottom' => array(
                    'settings' => array(
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Padding bottom', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '0',
                            'max' => '100',
                            'step' => '1',
                        ),
                    ),
                ),
                'nbcore_footer_bot_border_bot_color' => array(
                    'settings' => array(
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border Bottom Color', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_enable_colorful_widget_title' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Enable colorful widget title', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_footer_abs_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Absolute Footer', 'antimall'),
                        'description' => esc_html__('These area take text and HTML code for its content', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_footer_abs_left_content' => array(
                    'settings' => array(
                        'default' => '',
                ),
                    'controls' => array(
                        'label' => esc_html__('Left content', 'antimall'),
                        'type' => 'textarea',
                        'section' => 'footer'
                    ),
                ),
                'nbcore_footer_abs_right_content' => array(
                    'settings' => array(
                        'default' => '',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Right content', 'antimall'),
                        'type' => 'textarea',
                        'section' => 'footer'
                    ),
                ),
                'nbcore_footer_abs_padding' => array(
                    'settings' => array(
                        'default' => '10',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Padding top and bottom', 'antimall'),
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '5',
                            'max' => '60',
                            'step' => '1',
                        ),
                    ),
                ),
                'nbcore_footer_color_focus' => array(
                    'settings' => array(),
                    'controls' => array(
                        'section' => 'footer',
                        'type' => 'Antimall_Customize_Control_Focus',
                        'choices' => array(
                            'footer_colors' => esc_html__('Edit color', 'antimall'),
                        ),
                    ),
                ),
            ),
        );
    }

    public function blog()
    {
        return array(
            'title' => esc_html__('Blog', 'antimall'),
            'priority' => 16,
            'sections' => array(
                'blog_general' => array(
                    'title' => esc_html__('General', 'antimall')
                ),
                'blog_archive' => array(
                    'title' => esc_html__('Blog Archive', 'antimall'),
                ),
                'blog_single' => array(
                    'title' => esc_html__('Blog Single', 'antimall')
                ),
            ),
            'options' => array(
                'nbcore_blog_layout_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Layout', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_blog_sidebar' => array(
                    'settings' => array(
                        'default' => 'right-sidebar',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Sidebar position', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'left-sidebar' => get_template_directory_uri() . '/assets/images/options/2cl.png',
                            'no-sidebar' => get_template_directory_uri() . '/assets/images/options/1c.png',
                            'right-sidebar' => get_template_directory_uri() . '/assets/images/options/2cr.png',
                        ),
                    ),
                ),
                'nbcore_blog_width' => array(
                    'settings' => array(
                        'default' => '70',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Blog width', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => '%',
                            'min' => '60',
                            'max' => '80',
                            'step' => '1'
                        ),
                    ),
                ),
                'nbcore_blog_meta_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Post meta', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_blog_meta_date' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show date', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_blog_meta_read_time' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show time to read', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_blog_meta_author' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show author', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_blog_meta_category' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show categories', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_blog_meta_tag' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show Tags', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Switch',
                        'condition' => array(
                            'element' => 'nbcore_blog_archive_layout',
                            'value'   => 'classic',
                        )
                    ),
                ),
                'nbcore_blog_other_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Other', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_blog_sticky_sidebar' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Sticky sidebar', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_blog_meta_align' => array(
                    'settings' => array(
                        'default' => 'center',
                        'transport' => 'postMessage',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Meta align', 'antimall'),
                        'section' => 'blog_general',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'left' => get_template_directory_uri() . '/assets/images/options/meta-left.png',
                            'center' =>get_template_directory_uri() . '/assets/images/options/meta-center.png',
                            'right' => get_template_directory_uri() . '/assets/images/options/meta-right.png',
                        ),
                    ),
                ),
                'nbcore_blog_archive_layout' => array(
                    'settings' => array(
                        'default' => 'classic',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Blog Archive Layout', 'antimall'),
                        'section' => 'blog_archive',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'classic' => get_template_directory_uri() . '/assets/images/options/classic.png',
                            'masonry' => get_template_directory_uri() . '/assets/images/options/masonry.png',
                        ),
                    ),
                ),
                'nbcore_blog_masonry_columns' => array(
                    'settings' => array(
                        'default' => '2',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Masonry Columns', 'antimall'),
                        'section' => 'blog_archive',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            '2' => esc_html__('2', 'antimall'),
                            '3' => esc_html__('3', 'antimall'),
                        ),
                        'condition' => array(
                            'element' => 'nbcore_blog_archive_layout',
                            'value'   => 'masonry',
                        )
                    ),
                ),
                'nbcore_blog_archive_post_style' => array(
                    'settings' => array(
                        'default' => 'style-1',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Archive Post style', 'antimall'),
                        'section' => 'blog_archive',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'style-1' => get_template_directory_uri() . '/assets/images/options/post-style-1.png',
                            'style-2' => get_template_directory_uri() . '/assets/images/options/post-style-2.png',
                        ),
                    ),
                ),
                'nbcore_blog_archive_summary' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show Post summary', 'antimall'),
                        'section' => 'blog_archive',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_excerpt_only' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show Excerpt Only', 'antimall'),
                        'section' => 'blog_archive',
                        'type' => 'Antimall_Customize_Control_Switch',
                        'condition' => array(
                            'element' => array('nbcore_blog_archive_layout', 'nbcore_blog_archive_summary'),
                            'value'   => array('classic', 1),
                        )
                    ),
                ),
                'nbcore_excerpt_length' => array(
                    'settings' => array(
                        'default' => '40',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Excerpt Length', 'antimall'),
                        'section' => 'blog_archive',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'min' => '20',
                            'max' => '100',
                            'step' => '1',
                        ),
                        'condition' => array(
                            'element' => 'nbcore_excerpt_only',
                            'value'   => 1,
                        )
                    ),
                ),
                'nbcore_blog_archive_comments' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show Comments number', 'antimall'),
                        'section' => 'blog_archive',
                        'type' => 'Antimall_Customize_Control_Switch',
                        'condition' => array(
                            'element' => 'nbcore_blog_archive_layout',
                            'value'   => 'classic',
                        )
                    ),
                ),
                'nbcore_blog_single_title_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Post title', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_blog_single_title_position' => array(
                    'settings' => array(
                        'default' => 'position-1',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Post title style', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'position-1' => get_template_directory_uri() . '/assets/images/options/post-title-1.png',
                            'position-2' => get_template_directory_uri() . '/assets/images/options/post-title-2.png',
                        ),
                    ),
                ),
                'nbcore_blog_bg_single_title' => array(
                    'settings' => array(
                        'default' => '',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Background Blog Single Title', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'WP_Customize_Cropped_Image_Control',
                        'flex_width'  => true,
                        'flex_height' => true,
                        'width' => 2000,
                        'height' => 1000,
                        'condition' => array(
                            'element' => 'nbcore_blog_single_title_position',
                            'value'   => 'position-1',
                        )
                    ),
                ),
                'nbcore_blog_single_title_size' => array(
                    'settings' => array(
                        'default' => '50',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Font size', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '16',
                            'max' => '70',
                            'step' => '1',
                        ),
                    ),
                ),
                'nbcore_blog_single_layout_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Layout', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_blog_single_show_thumb' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('featured thumbnail', 'antimall'),
                        'description' => esc_html__('Show featured thumbnail of this post on top of its content', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Switch',
                    )
                ),
                'nbcore_blog_single_show_social' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show social button', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_blog_single_show_author' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show author info', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_blog_single_show_nav' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show post navigation', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_blog_single_show_comments' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show post comments', 'antimall'),
                        'section' => 'blog_single',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                )
            ),
        );
    }
    public static function pages()
    {
        return array(
            'title' => esc_html__('Pages', 'antimall'),
            'priority' => 18,
            'sections' => array(
                'pages_general' => array(
                    'title' => esc_html__('General', 'antimall')
                ),
               
                
            ),
            'options' => array(
                'nbcore_pages_layout_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Layout', 'antimall'),
                        'section' => 'pages_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_page_title_image' => array(
                    'settings' => array(
                        'default'=>''
                        //'sanitize_callback' => array('NBT_Customize_Sanitize', 'sanitize_file_image')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Image Background Title Pages', 'antimall'),
                        'section' => 'pages_general',
                        'type' => 'WP_Customize_Cropped_Image_Control',
                        'flex_width'  => true,
                        'flex_height' => true,
                        'width' => 2000,
                        'height' => 1000,
                    ),
                ),
                'nbcore_pages_sidebar' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Sidebar position', 'antimall'),
                        'section' => 'pages_general',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'left-sidebar' => get_template_directory_uri() . '/assets/images/options/2cl.png',
                            'no-sidebar' => get_template_directory_uri() . '/assets/images/options/1c.png',
                            'right-sidebar' => get_template_directory_uri() . '/assets/images/options/2cr.png',
                        ),
                    ),
                ),
                /*'nbcore_pages_image_banner_bottom' => array(
                    'settings' => array(
                       // 'sanitize_callback' => array('NBT_Customize_Sanitize', 'sanitize_file_image')
                       'default' => '',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Image Banner Pages', 'antimall'),
                        'section' => 'pages_general',
                        'type' => 'WP_Customize_Cropped_Image_Control',
                        'flex_width'  => true,
                        'flex_height' => true,
                        'width' => 2000,
                        'height' => 1000,
                    ),
                ),*/
                /*'nbcore_page_text_banner_bottom' => array(
                    'settings' => array(
                        'transport' => 'postMessage',
                        'sanitize_callback' => '',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text banner bottom section', 'antimall'),
                        'section' => 'pages_general',
                        'type' => 'textarea',
                    ),
                ),  */                 
                'page_content_width' => array(
                    'settings' => array(
                        'default' => '70',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Page content width', 'antimall'),
                        'section' => 'pages_general',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => '%',
                            'min' => '60',
                            'max' => '80',
                            'step' => '1'
                        ),
                        'condition' => array(
                            'element' => 'nbcore_pages_sidebar',
                            'value'   => '!no-sidebar',
                        )
                    ),
                ), 
                
            ),
        );
    }

    public static function dokan()
    {
        return array(
            'title' => esc_html__('Dokan', 'antimall'),
            'priority' => 18,
            'sections' => array(
                'dokan_general' => array(
                    'title' => esc_html__('General', 'antimall')
                ),
                'dokan_dashboard' => array(
                    'title' => esc_html__('Dashboard', 'antimall'),
                ),

                'nbcore_storelist' => array(
                    'title' => esc_html__('Store listing', 'antimall')
                ),

                'nbcore_vendor' => array(
                    'title' => esc_html__('Vendor detail', 'antimall')
                ),
                
                'nbcore_product' => array(
                    'title' => esc_html__('Single Product', 'antimall')
                ),               
                
            ),
            'options' => array(
                'nbcore_dokan_layout_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Layout', 'antimall'),
                        'section' => 'dokan_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_dokan_sidebar' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Sidebar position', 'antimall'),
                        'section' => 'dokan_general',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'left-sidebar' => get_template_directory_uri() . '/assets/images/options/2cl.png',
                            'no-sidebar' => get_template_directory_uri() . '/assets/images/options/1c.png',
                            'right-sidebar' => get_template_directory_uri() . '/assets/images/options/2cr.png',
                        ),
                    ),
                ),

                'nbcore_dashboard_style' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox'),
                    ),
                    'controls' => array(
                        'label' => esc_html__('Light style', 'antimall'),
                        'section' => 'dokan_dashboard',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),

                /*nbcore_vendor*/
                'nbcore_vendor_layout_intro' => array(
                    'settings' =>  array(),
                    'controls' => array(
                        'label' => esc_html__('Vendor Layout', 'antimall'),
                        'section' => 'nbcore_vendor',
                        'type' => 'Antimall_Customize_Control_Heading',
                        
                    ),
                ),
                'nbcore_vendor_details_sidebar' => array(
                    'settings' => array(
                        'default' => 'right-sidebar',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Vendors sidebar', 'antimall'),
                        'section' => 'nbcore_vendor',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'left-sidebar' => get_template_directory_uri() . '/assets/images/options/2cl.png',
                            'no-sidebar' => get_template_directory_uri() . '/assets/images/options/1c.png',
                            'right-sidebar' => get_template_directory_uri() . '/assets/images/options/2cr.png',
                        ),
                    ),
                ),

                'nbcore_vendor_details_width' => array(
                    'settings' => array(
                        'default' => '75',
                            'transport' => 'postMessage',
                            'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Vendors content width', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                                'unit' => '%',
                                'min' => '60',
                                'max' => '80',
                                'step' => '1'
                            ),
                            'section' => 'nbcore_vendor',
                    ),
                ),
                'nbcore_vendor_sticky_sidebar' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Sticky sidebar', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Switch',
                        'section' => 'nbcore_vendor',
                    ),
                ),
                'nbcore_vendor_map_height' => array(
                    'settings' => array(
                        'default' => '200',
                            'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Height of maps', 'antimall'),
                            'type' => 'text',
                            'section' => 'nbcore_vendor',
                    ),
                ),
                'nbcore_vendor_per_page' => array(
                    'settings' => array(
                        'default' => '12',
                            'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per Page', 'antimall'),
                            'type' => 'number',
                            'input_attrs' => array(
                                'min'   => 1,
                                'step'  => 1,
                            ),
                            'section' => 'nbcore_vendor',
                    ),
                ),
                'nbcore_vendor_loop_columns_xl' => array(
                    'settings' => array(
                        'default' => '3',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row (Large Desktops)', 'antimall'),
                            'type' => 'select',
                            'choices' => array(
                                '1' => esc_html__('1', 'antimall'),
                                '2' => esc_html__('2', 'antimall'),
                                '3' => esc_html__('3', 'antimall'),
                                '4' => esc_html__('4', 'antimall'),
                                '6' => esc_html__('6', 'antimall'),
                            ),
                            'section' => 'nbcore_vendor',
                    ),
                ),

                'nbcore_vendor_loop_columns_lg' => array(
                    'settings' => array(
                        'default' => '3',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row (Desktops)', 'antimall'),
                            'type' => 'select',
                            'choices' => array(
                                '1' => esc_html__('1', 'antimall'),
                                '2' => esc_html__('2', 'antimall'),
                                '3' => esc_html__('3', 'antimall'),
                                '4' => esc_html__('4', 'antimall'),
                                '6' => esc_html__('6', 'antimall'),
                            ),
                            'section' => 'nbcore_vendor',
                    ),
                ),

                'nbcore_vendor_loop_columns_md' => array(
                    'settings' => array(
                        'default' => '2',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row (Tablets)', 'antimall'),
                            'type' => 'select',
                            'choices' => array(
                                '1' => esc_html__('1', 'antimall'),
                                '2' => esc_html__('2', 'antimall'),
                                '3' => esc_html__('3', 'antimall'),
                                '4' => esc_html__('4', 'antimall'),
                                '6' => esc_html__('6', 'antimall'),
                            ),
                            'section' => 'nbcore_vendor',
                    ),
                ),
                'nbcore_vendor_loop_columns_sm' => array(
                    'settings' => array(
                        'default' => '2',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row (Mobile Landscape)', 'antimall'),
                            'type' => 'select',
                            'choices' => array(
                                '1' => esc_html__('1', 'antimall'),
                                '2' => esc_html__('2', 'antimall'),
                                '3' => esc_html__('3', 'antimall'),
                                '4' => esc_html__('4', 'antimall'),
                                '6' => esc_html__('6', 'antimall'),
                            ),
                            'section' => 'nbcore_vendor',
                    ),
                ),
                /*end_nbcore_vendor*/

                /*nbcore_product*/
                'nbcore_mp_layout_intro' => array(
                    'settings' =>  array(),
                    'controls' => array(
                        'label' => esc_html__('More Product Layout', 'antimall'),
                            'description' => esc_html__('If enable \'More product\' tab on product single page view', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Heading',
                        'section' => 'nbcore_product',
                        
                    ),
                ),
                'nbcore_mp_loop_columns_xl' => array(
                    'settings' => array(
                        'default' => '3',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row (Large Desktops)', 'antimall'),
                            'type' => 'select',
                            'choices' => array(
                                '1' => esc_html__('1', 'antimall'),
                                '2' => esc_html__('2', 'antimall'),
                                '3' => esc_html__('3', 'antimall'),
                                '4' => esc_html__('4', 'antimall'),
                            ),
                            'section' => 'nbcore_product',
                        ),
                    ),
                
                'nbcore_mp_loop_columns_lg' => array(
                    'settings' => array(
                        'default' => '3',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row (Desktops)', 'antimall'),
                            'type' => 'select',
                            'choices' => array(
                                '1' => esc_html__('1', 'antimall'),
                                '2' => esc_html__('2', 'antimall'),
                                '3' => esc_html__('3', 'antimall'),
                                '4' => esc_html__('4', 'antimall'),
                            ),
                            'section' => 'nbcore_product',
                    ),
                ),
                'nbcore_mp_loop_columns_md' => array(
                    'settings' => array(
                        'default' => '2',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row (Tablets)', 'antimall'),
                            'type' => 'select',
                            'choices' => array(
                                '1' => esc_html__('1', 'antimall'),
                                '2' => esc_html__('2', 'antimall'),
                                '3' => esc_html__('3', 'antimall'),
                                '4' => esc_html__('4', 'antimall'),
                            ),
                            'section' => 'nbcore_product',
                    ),
                ),
                'nbcore_mp_loop_columns_sm' => array(
                    'settings' => array(
                        'default' => '2',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row (Mobile Landscape)', 'antimall'),
                            'type' => 'select',
                            'choices' => array(
                                '1' => esc_html__('1', 'antimall'),
                                '2' => esc_html__('2', 'antimall'),
                                '3' => esc_html__('3', 'antimall'),
                                '4' => esc_html__('4', 'antimall'),
                            ),
                            'section' => 'nbcore_product',
                    ),
                ),
                /*end_nbcore_product*/
            ),
        );
    }
    public function nblayout()
    {
        return array(
            'title' => esc_html__('Layout', 'antimall'),
            'priority' => 15,
            'sections' => array(
                'site_layout' => array(
                    'title' => esc_html__('Layout', 'antimall'),
                ),

            ),
            'options' => array(

                'nbcore_container_width' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Container Width', 'antimall'),
                        'section' => 'site_layout',
                        'type' => 'select',
                        'choices' => array(
                            '1170' => esc_html__('Standard (1170px)', 'antimall'),
                            '1470' => esc_html__('Wide (1470px)', 'antimall'),
                        ),
                        'default' => '1170',
                        'description' => 'Wide option only works on screen resolution >= 1920px'
                    ),
                ),
            ),
        );
    }
    public function color()
    {
        return array(
            'title' => esc_html__('Color', 'antimall'),
            'priority' => 13,
            'sections' => array(
                'general_color' => array(
                    'title' => esc_html__('General', 'antimall')
                ),
                'type_color' => array(
                    'title' => esc_html__('Type', 'antimall')
                ),
                'header_colors' => array(
                    'title' => esc_html__('Header', 'antimall')
                ),
                'footer_colors' => array(
                    'title' => esc_html__('Footer', 'antimall')
                ),
                'button_colors' => array(
                    'title' => esc_html__('Buttons', 'antimall')
                ),
                'other_colors' => array(
                    'title' => esc_html__('Other', 'antimall')
                ),
            ),
            'options' => array(
                'nbcore_main_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Main Colors', 'antimall'),
                        'section' => 'general_color',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_primary_color' => array(
                    'settings' => array(
                        'default' => '#1e88e5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Primary Color', 'antimall'),
                        'section' => 'general_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_secondary_color' => array(
                    'settings' => array(
                        'default' => '#fdd835',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Secondary Color', 'antimall'),
                        'section' => 'general_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_background_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Background', 'antimall'),
                        'section' => 'general_color',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_background_color' => array(
                    'settings' => array(
                        'default' => '#fff',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Site Background Color', 'antimall'),
                        'section' => 'general_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_inner_background' => array(
                    'settings' => array(
                        'default' => '#edf0f5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Inner Background Color', 'antimall'),
                        'section' => 'general_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_text_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Text', 'antimall'),
                        'section' => 'type_color',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_heading_color' => array(
                    'settings' => array(
                        'default' => '#323232',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Heading Color', 'antimall'),
                        'section' => 'type_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_body_color' => array(
                    'settings' => array(
                        'default' => '#777777',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Body Color', 'antimall'),
                        'section' => 'type_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_link_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Link', 'antimall'),
                        'section' => 'type_color',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_link_color' => array(
                    'settings' => array(
                        'default' => '#000000',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Link Color', 'antimall'),
                        'section' => 'type_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_link_hover_color' => array(
                    'settings' => array(
                        'default' => '#444444',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Link Hover Color', 'antimall'),
                        'section' => 'type_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_divider_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Divider', 'antimall'),
                        'section' => 'type_color',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_divider_color' => array(
                    'settings' => array(
                        'default' => '#e4e4e4',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Divider Color', 'antimall'),
                        'section' => 'type_color',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_top_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Header Top', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_header_top_bg' => array(
                    'settings' => array(
                        'default' => '#282725',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('background color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_top_color' => array(
                    'settings' => array(
                        'default' => '#e4e4e4',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_middle_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Header Middle', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_header_middle_bg' => array(
                    'settings' => array(
                        'default' => '#ffffff',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('background color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_middle_color' => array(
                    'settings' => array(
                        'default' => '#646464',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_bottom_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Header Bottom', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_header_bot_bg' => array(
                    'settings' => array(
                        'default' => '#fff',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('background color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_bot_color' => array(
                    'settings' => array(
                        'default' => '#646464',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_mainmn_colors_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Main Menu', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_header_mainmn_bg' => array(
                    'settings' => array(
                        'default' => '#fff',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('background color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_mainmn_color' => array(
                    'settings' => array(
                        'default' => '#646464',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_mainmn_bor' => array(
                    'settings' => array(
                        'default' => '#646464',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border color', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_mainmnhover_bg' => array(
                    'settings' => array(
                        'default' => '#fff',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('background hover', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_mainmnhover_color' => array(
                    'settings' => array(
                        'default' => '#646464',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text hover', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_header_mainmnhover_bor' => array(
                    'settings' => array(
                        'default' => '#646464',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('border hover', 'antimall'),
                        'section' => 'header_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_top_color_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Footer top', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_footer_top_heading' => array(
                    'settings' => array(
                        'default' => '#323232',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Heading color', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_top_color' => array(
                    'settings' => array(
                        'default' => '#777777',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text color', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_top_bg' => array(
                    'settings' => array(
                        'default' => '#edf0f5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Background color', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_bot_color_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Footer bottom', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_footer_bot_heading' => array(
                    'settings' => array(
                        'default' => '#323232',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Heading color', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_bot_color' => array(
                    'settings' => array(
                        'default' => '#777777',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text color', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_bot_bg' => array(
                    'settings' => array(
                        'default' => '#edf0f5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Background color', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_abs_color_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Footer Absolute Bottom', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_footer_abs_color' => array(
                    'settings' => array(
                        'default' => '#edf0f5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text color', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_footer_abs_bg' => array(
                    'settings' => array(
                        'default' => '#1f1f1f',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Background color', 'antimall'),
                        'section' => 'footer_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_pb_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Primary button', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_pb_background' => array(
                    'settings' => array(
                        'default' => '#1e88e5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Background', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_pb_background_hover' => array(
                    'settings' => array(
                        'default' => '#1565C0',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Background Hover', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_pb_text' => array(
                    'settings' => array(
                        'default' => '#ffffff',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_pb_text_hover' => array(
                    'settings' => array(
                        'default' => '#ffffff',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text hover', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_pb_border' => array(
                    'settings' => array(
                        'default' => '#1e88e5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_pb_border_hover' => array(
                    'settings' => array(
                        'default' => '#1565C0',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border hover', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_sb_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Secondary button', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_sb_background' => array(
                    'settings' => array(
                        'default' => 'transparent',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Background', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_sb_background_hover' => array(
                    'settings' => array(
                        'default' => '#1e88e5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Background Hover', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_sb_text' => array(
                    'settings' => array(
                        'default' => '#1e88e5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_sb_text_hover' => array(
                    'settings' => array(
                        'default' => '#ffffff',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text hover', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_sb_border' => array(
                    'settings' => array(
                        'default' => '#1e88e5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_sb_border_hover' => array(
                    'settings' => array(
                        'default' => '#1e88e5',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border hover', 'antimall'),
                        'section' => 'button_colors',
                        'type' => 'Antimall_Customize_Control_Color',
                    ),
                ),
                'nbcore_page_title_color_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Page title', 'antimall'),
                        'section' => 'other_colors',
                        'type' => 'Antimall_Customize_Control_Heading'
                    ),
                ),
                'nbcore_page_title_color' => array(
                    'settings' => array(
                        'default' => '#323232',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text color', 'antimall'),
                        'section' => 'other_colors',
                        'type' => 'Antimall_Customize_Control_Color'
                    ),
                ),
            ),
        );
    }

    public function elements()
    {
        return array(
            'title' => esc_html__('Elements', 'antimall'),
            'priority' => 12,
            'sections' => array(
                'title_section_element' => array(
                    'title' => esc_html__('Title Section', 'antimall')
                ),
                'button_element' => array(
                    'title' => esc_html__('Button', 'antimall')
                ),
                'share_buttons_element' => array(
                    'title' => esc_html__('Social Share', 'antimall')
                ),
                'pagination_element' => array(
                    'title' => esc_html__('Pagination', 'antimall')
                ),
                'back_top_element' => array(
                    'title' => esc_html__('Back to Top Button', 'antimall')
                ),
                'preloading_element' => array(
                    'title' => esc_html__('Preloading', 'antimall')
                ),
            ),
            'options' => array(
                'show_title_section' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show title section', 'antimall'),
                        'section' => 'title_section_element',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'home_page_title_section' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show Homepage title', 'antimall'),
                        'description' => esc_html__('Turn this off to not display the title section for only homepage', 'antimall'),
                        'section' => 'title_section_element',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_page_title_size' => array(
                    'settings' => array(
                        'default' => '50',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Font size', 'antimall'),
                        'section' => 'title_section_element',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '16',
                            'max' => '70',
                            'step' => '1'
                        ),
                    ),
                ),
                'nbcore_page_title_padding' => array(
                    'settings' => array(
                        'default' => '75',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Padding top and bottom', 'antimall'),
                        'section' => 'title_section_element',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '15',
                            'max' => '105',
                            'step' => '1'
                        ),
                    ),
                ),
                /*'nbcore_page_title_image' => array(
                    'settings' => array(
                        'default' => '',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Image Background', 'antimall'),
                        'section' => 'title_section_element',
                        'type' => 'WP_Customize_Cropped_Image_Control',
                        'flex_width'  => true,
                        'flex_height' => true,
                        'width' => 2000,
                        'height' => 1000,
                    ),
                ),*/
                'nbcore_page_title_color_focus' => array(
                    'settings' => array(),
                    'controls' => array(
                        'section' => 'title_section_element',
                        'type' => 'Antimall_Customize_Control_Focus',
                        'choices' => array(
                            'other_colors' => esc_html__('Edit color', 'antimall')
                        ),
                    ),
                ),
                'nbcore_button_padding' => array(
                    'settings' => array(
                        'default' => '30',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Padding left & right', 'antimall'),
                        'section' => 'button_element',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '5',
                            'max' => '60',
                            'step' => '1'
                        ),
                    ),
                ),
                'nbcore_button_border_radius' => array(
                    'settings' => array(
                        'default' => '0',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border Radius', 'antimall'),
                        'section' => 'button_element',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '0',
                            'max' => '50',
                            'step' => '1'
                        ),
                    ),
                ),
                'nbcore_button_border_width' => array(
                    'settings' => array(
                        'default' => '2',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Border Width', 'antimall'),
                        'section' => 'button_element',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '1',
                            'max' => '10',
                            'step' => '1'
                        ),
                    ),
                ),
                'share_buttons_style' => array(
                    'settings' => array(
                        'default' => 'style-1',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Style','antimall'),
                        'section' => 'share_buttons_element',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            'style-1' => esc_html__('Style 1', 'antimall'),
                            'style-2' => esc_html__('Style 2', 'antimall'),
                        ),
                    ),
                ),
                'share_buttons_position' => array(
                    'settings' => array(
                        'default' => 'inside-content',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Buttons position','antimall'),
                        'section' => 'share_buttons_element',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'inside-content' => get_template_directory_uri() . '/assets/images/options/ss-inside.png',
                            'floating' => get_template_directory_uri() . '/assets/images/options/ss-floating.png',
                        ),
                    ),
                ),
                'pagination_style' => array(
                    'settings' => array(
                        'default' => 'pagination-style-1',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Style', 'antimall'),
                        'section' => 'pagination_element',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            'pagination-style-1' => esc_html__('Style 1','antimall'),
                            'pagination-style-2' => esc_html__('Style 2','antimall'),
                        ),
                    ),
                ),
                'show_back_top' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show button', 'antimall'),
                        'section' => 'back_top_element',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'back_top_shape' => array(
                    'settings' => array(
                        'default' => 'circle',
                        'transport' => 'postMessage',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show button', 'antimall'),
                        'section' => 'back_top_element',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            'circle' => esc_html__('Circle','antimall'),
                            'square' => esc_html__('Square','antimall'),
                        ),
                    ),
                ),
                'back_top_style' => array(
                    'settings' => array(
                        'default' => 'light',
                        'transport' => 'postMessage',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show button', 'antimall'),
                        'section' => 'back_top_element',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            'light' => esc_html__('Light','antimall'),
                            'dark' => esc_html__('Dark','antimall'),
                        ),
                    ),
                ),
                'nbcore_header_preloading' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show Preloading', 'antimall'),
                        'section' => 'preloading_element',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_header_style_preloading' => array(
                    'settings' => array(
                        'transport' => 'refresh',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Choose style preloading', 'antimall'),
                        'section' => 'preloading_element',
                        'type' => 'Antimall_Customize_Control_Select',
                        'condition' => array(
                            'element' => 'nbcore_header_preloading',
                            'value' => 1,
                        ),
                        'choices' => array(
                            'demo1' => 'Square',
                            'demo2' => 'Square Zoom',
                            'demo3' => 'Square Rotate',
                            'demo4' => 'square Scale',
                            'demo5' => 'Square Shape',
                            'demo6' => 'Square Double Rotate',
                            'demo7' => 'Square Zoom & Rotate',
                            'demo8' => 'Square Dance',
                            'demo9' => 'Square Interleaved',
                            'demo10' => 'Circle Toggle',
                            'demo11' => 'Circle Zoom',
                            'demo12' => 'Circle Scroll',
                            'demo13' => 'Circle Dance',
                            'demo14' => 'Twisted',
                            'demo15' => 'Twisted Sporadic',
                        ),
                        
                    ),
                ),
            ),
        );
    }

    public function header()
    {
        return array(
            'title' => esc_html__('Header Options', 'antimall'),
            'description' => esc_html__('header description', 'antimall'),
            'priority' => 11,
            'sections' => array(
                'header_presets' => array(
                    'title' => esc_html__('Presets', 'antimall'),
                ),
                'header_general' => array(
                    'title' => esc_html__('Sections', 'antimall'),
                ),
            ),
            'options' => array(
                'header_heading' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Header style', 'antimall'),
                        'description' => esc_html__('Quickly select a preset to change your header layout.', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Heading',
                        'section' => 'header_presets',
                    ),
                ),
                'nbcore_header_style' => array(
                    'settings' => array(
                        'default' => 'mid-stack',
                        'transport' => 'refresh',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'section' => 'header_presets',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'mid-stack' => get_template_directory_uri() . '/assets/images/options/headers/mid-stack.png',
                            'mid-stack-2' => get_template_directory_uri() . '/assets/images/options/headers/mid-stack.png',
                            'mid-inline' => get_template_directory_uri() . '/assets/images/options/headers/mid-inline.png',
                            'left-inline_1' => get_template_directory_uri() . '/assets/images/options/headers/left-inline.png',
                            'left-inline' => get_template_directory_uri() . '/assets/images/options/headers/left-inline.png',
                            'left-stack' => get_template_directory_uri() . '/assets/images/options/headers/left-stack.png',
                            'left-stack-2' => get_template_directory_uri() . '/assets/images/options/headers/left-stack-2.png',
                            'header-home-1' => get_template_directory_uri() . '/assets/images/options/headers/left-stack-2.png',
                            'header-home-2' => get_template_directory_uri() . '/assets/images/options/headers/left-stack-2.png',
                            'header-home-3' => get_template_directory_uri() . '/assets/images/options/headers/left-stack-2.png',
                        ),
                    ),
                ),
                'nbcore_general_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('General', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_logo_upload' => array(
                    'settings' => array(
                        'default' => '',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_file_image')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Site Logo', 'antimall'),
                        'section' => 'header_general',
                        'description' => esc_html__('If you don\'t upload logo image, your site\'s logo will be the Site Title ', 'antimall'),
                        'type' => 'WP_Customize_Upload_Control'
                    ),
                ),
                'nbcore_logo_width' => array(
                    'settings' => array(
                        'default' => '120',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Logo Area Width', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '100',
                            'max' => '600',
                            'step' => '10',
                        ),
                    ),
                ),
                'nbcore_menu_resp' => array(
                    'settings' => array(
                        'default' => '768',
                        'transport' => 'postMessage',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Menu Responsive', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'select',
                        'choices' => array(
                            '576' => esc_html__('576 px', 'antimall'),
                            '768' => esc_html__('768 px', 'antimall'),
                            '992' => esc_html__('992 px', 'antimall'),
                            '1200' => esc_html__('1200 px', 'antimall'),
                        ),
                    ),
                ),
                'nbcore_header_fixed' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Fixed header', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_header_text_section' => array(
                    'settings' => array(
                        'default' => '',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_kses_post',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Text section', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'textarea',
                    ),
                ),
                'nbcore_header_top_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Header topbar', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_top_section_padding' => array(
                    'settings' => array(
                        'default' => '10',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Top & bottom padding', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '0',
                            'max' => '45',
                            'step' => '1'
                        ),
                    ),
                ),
                'nbcore_header_middle_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Header Middle', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_middle_section_padding' => array(
                    'settings' => array(
                        'default' => '20',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Top & bottom padding', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '0',
                            'max' => '45',
                            'step' => '1'
                        ),
                    ),
                ),
                'nbcore_header_bot_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Header bottom', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_bot_section_padding' => array(
                    'settings' => array(
                        'default' => '30',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Top & bottom padding', 'antimall'),
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '0',
                            'max' => '45',
                            'step' => '1'
                        ),
                    ),
                ),
                'nbcore_header_color_focus' => array(
                    'settings' => array(),
                    'controls' => array(
                        'section' => 'header_general',
                        'type' => 'Antimall_Customize_Control_Focus',
                        'choices' => array(
                            'header_colors' => esc_html__('Edit color', 'antimall'),
                        ),
                    ),
                ),

            ),
        );
    }

    public function typo()
    {
        return array(
            'title' => esc_html__('Typography', 'antimall'),
            'priority' => 14,
            'options' => array(
                'body_font_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Body Font', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'body_font_family' => array(
                    'settings' => array(
                        'default' => 'google,Noto Sans',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label'   => esc_html__( 'Font Family', 'antimall' ),
                        'dependency' => 'body_font_style',
                        'type'    => 'Antimall_Customize_Control_Typography',
                    ),
                ),
                'body_font_style' => array(
                    'settings' => array(
                        'default' => '400',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Font Styles', 'antimall'),
                        'type'    => 'Antimall_Customize_Control_Font_Style',
                        'choices' => array(
                            'italic' => true,
                            'underline' => true,
                            'uppercase' => true,
                            'weight' => true,
                        )
                    ),
                ),
                'body_font_size' => array(
                    'settings' => array(
                        'default' => '14',
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Font Size', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '8',
                            'max' => '30',
                            'step' => '1',
                        ),
                    ),
                ),
                'heading_font_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Heading Font', 'antimall'),
                        'section' => 'typography',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'heading_font_family' => array(
                    'settings' => array(
                        'default' => 'google,Vidaloka',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label'   => esc_html__( 'Heading font', 'antimall' ),
                        'dependency' => 'heading_font_style',
                        'type'    => 'Antimall_Customize_Control_Typography',
                    ),
                ),
                'heading_font_style' => array(
                    'settings' => array(
                        'default' => '400',
                        'sanitize_callback' => 'wp_filter_nohtml_kses',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Font Styles', 'antimall'),
                        'type'    => 'Antimall_Customize_Control_Font_Style',
                        'choices' => array(
                            'italic' => true,
                            'underline' => true,
                            'uppercase' => true,
                            'weight' => true,
                        ),
                    ),
                ),
                'heading_base_size' => array(
                    'settings' => array(
                        'default' => '16',
                        'sanitize_callback' => 'absint',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Heading base size', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => 'px',
                            'min' => '10',
                            'max' => '40',
                            'step' => '1',
                        ),
                    ),
                ),
                'subset_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Font subset', 'antimall'),
                        'description' => esc_html__('Turn these settings on if you have to support these scripts', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'subset_cyrillic' => array(
                    'settings' => array(
                        'default' => false,
                        'transport' => 'refresh',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox'),
                    ),
                    'controls' => array(
                        'label'   => esc_html__( 'Cyrillic subset', 'antimall' ),
                        'type'    => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'subset_greek' => array(
                    'settings' => array(
                        'default' => false,
                        'transport' => 'refresh',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox'),
                    ),
                    'controls' => array(
                        'label'   => esc_html__( 'Greek subset', 'antimall' ),
                        'type'    => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'subset_vietnamese' => array(
                    'settings' => array(
                        'default' => false,
                        'transport' => 'refresh',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox'),
                    ),
                    'controls' => array(
                        'label'   => esc_html__( 'Vietnamese subset', 'antimall' ),
                        'type'    => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'font_color_focus' => array(
                    'settings' => array(),
                    'controls' => array(
                        'type'    => 'Antimall_Customize_Control_Focus',
                        'choices' => array(
                            'type_color' => esc_html__('Edit font color', 'antimall'),
                        ),
                    ),
                ),
            ),
        );
    }

    public function woocommerce()
    {
        return array(
            'title' => esc_html__('Shop', 'antimall'),
            'priority' => 15,
            'sections' => array(
                'product_category' => array(
                    'title' => esc_html__('Product Category', 'antimall'),
                ),
                'product_details' => array(
                    'title' => esc_html__('Product Details', 'antimall'),
                ),
                'other_wc_pages' => array(
                    'title' => esc_html__('Other Pages', 'antimall'),
                ),
            ),
            'options' => apply_filters('attribute_hook', array(
                'nbcore_pa_title_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Product category title', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_shop_title' => array(
                    'settings' => array(
                        'default' => esc_html__('Shop', 'antimall'),
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'wp_filter_nohtml_kses'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Shop page title', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'text',
                    ),
                ),
                'nbcore_wc_breadcrumb' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show breadcrumb ?', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_pa_layout_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Product category layout', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_shop_sidebar' => array(
                    'settings' => array(
                        'default' => 'right-sidebar',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Sidebar Layout', 'antimall'),
                        'section' => 'product_category',
                        'description' => esc_html__('Sidebar Position for product category and shop page', 'antimall'),
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'left-sidebar' => get_template_directory_uri() . '/assets/images/options/2cl.png',
                            'no-sidebar' => get_template_directory_uri() . '/assets/images/options/1c.png',
                            'right-sidebar' => get_template_directory_uri() . '/assets/images/options/2cr.png',
                        ),
                    ),
                ),
                'nbcore_shop_content_width' => array(
                    'settings' => array(
                        'default' => '70',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Woocommerce content width', 'antimall'),
                        'description' => esc_html__('This options also effect Cart page', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => '%',
                            'min' => '60',
                            'max' => '80',
                            'step' => '1'
                        ),
                        'condition' => array(
                            'element' => 'nbcore_shop_sidebar',
                            'value'   => '!no-sidebar',
                        )
                    ),
                ),
                'shop_sticky_sidebar' => array(
                    'settings' => array(
                        'default' => 'right-sidebar',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Sticky Sidebar', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),

                /*'nbcore_product_meta_align' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Choose product meta align', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'select',
                        'choices' => array(
                            'left' => esc_html__('Left', 'antimall'),
                            'center' => esc_html__('Center', 'antimall'),
                            'right' => esc_html__('Right', 'antimall'),
                        ),
                        'default' => 'left'
                    ),
                ),

                'nbcore_product_price_style' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Choose product price style', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'select',
                        'choices' => array(
                            'default_woo' => esc_html__('Default Woocommerce', 'antimall'),
                            'space_between' => esc_html__('Space Between', 'antimall'),
                            'no_strike' => esc_html__('No Strike', 'antimall'),
                        ),
                        'default' => 'default_woo'
                    ),
                ),

                'nbcore_product_hover' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Choose product hover', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'select',
                        'choices' => array(
                            'image' => esc_html__('Display box shadow only product image', 'antimall'),
                            'full_block' => esc_html__('Display box shadow whole product block', 'antimall'),
                        ),
                        'default' => 'horizontal'
                    ),
                ),*/

                'nbcore_product_list' => array(
                    'settings' => array(
                        'default' => 'grid-type',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Product List Style', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'grid-type' => get_template_directory_uri() . '/assets/images/options/grid.png',
                            'list-type' => get_template_directory_uri() . '/assets/images/options/list.png',
                        ),
                    ),
                ),
                //TODO nbcore_product_list depencies
                'nbcore_grid_product_description' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Product Description', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch',
                        'condition' => array(
                            'element' => 'nbcore_product_list',
                            'value'   => 'grid-type',
                        )
                    ),
                ),
                'nbcore_loop_columns' => array(
                    'settings' => array(
                        'default' => 'three-columns',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'two-columns' => get_template_directory_uri() . '/assets/images/options/2-columns.png',
                            'three-columns' => get_template_directory_uri() . '/assets/images/options/3-columns.png',
                            'four-columns' => get_template_directory_uri() . '/assets/images/options/4-columns.png',
                        ),
                        'condition' => array(
                            'element' => 'nbcore_product_list',
                            'value'   => 'grid-type',
                        )
                    ),
                ),
                'nbcore_pa_other_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Other', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_shop_banner' => array(
                    'settings' => array(
                        'default' => '',
                    ),
                    'controls' => array(
                        'label' => esc_html__('Shop Banner', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'WP_Customize_Cropped_Image_Control',
                        'flex_width'  => true,
                        'flex_height' => true,
                        'width' => 2000,
                        'height' => 1000,
                    ),
                ),
                'nbcore_shop_action' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show shop action', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch'
                    ),
                ),

                /*'nbcore_product_image_mask' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show opacity when hover', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch'
                    ),
                ),*/

                'nbcore_product_rating' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show product rating', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch'
                    ),
                ),

                'nbcore_product_action_style' => array(
                    'settings' => array(
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Choose product action style', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'select',
                        'choices' => array(
                            'center' => esc_html__('Center', 'antimall'),
                            'vertical' => esc_html__('Vertical', 'antimall'),
                            'horizontal' => esc_html__('Horizontal', 'antimall'),
                        ),
                        'default' => 'horizontal'
                    ),
                ),

                'nbcore_products_per_page' => array(
                    'settings' => array(
                        'default' => '12',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per Page', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Number',
                        'input_attrs' => array(
                            'min'   => 1,
                            'step'  => 1,
                        ),
                    ),
                ),
                'nbcore_wc_sale' => array(
                    'settings' => array(
                        'default' => 'style-1',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Choose sale tag style', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            'style-1' => esc_html__('Style 1', 'antimall'),
                            'style-2' => esc_html__('Style 2', 'antimall'),                            
                        ),
                    ),
                ),
                'product_category_wishlist' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Wishlist button', 'antimall'),
                        'description' => esc_html__('This feature need YITH Woocommerce Wishlist plugin to be installed and activated', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'product_category_compare' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Compare button', 'antimall'),
                        'description' => esc_html__('This feature need YITH Woocommerce Compare plugin to be installed and activated', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'product_category_quickview' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Quickview button', 'antimall'),
                        'description' => esc_html__('This feature need YITH Woocommerce Quick View plugin to be installed and activated', 'antimall'),
                        'section' => 'product_category',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_pd_layout_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Layout', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_pd_details_title' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Enable Product title', 'antimall'),
                        'description' => esc_html__('Default product title is not display if the Page title is showing. Enable this to displaying both.', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                /*'nbcore_pd_enable_review_rating' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Enable Review Rating', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),*/
                'nbcore_pd_details_sidebar' => array(
                    'settings' => array(
                        'default' => 'right-sidebar',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Product details sidebar', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'left-sidebar' => get_template_directory_uri() . '/assets/images/options/2cl.png',
                            'no-sidebar' => get_template_directory_uri() . '/assets/images/options/1c.png',
                            'right-sidebar' => get_template_directory_uri() . '/assets/images/options/2cr.png',
                        ),
                    ),
                ),
                'nbcore_pd_details_width' => array(
                    'settings' => array(
                        'default' => '70',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Product details content width', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => '%',
                            'min' => '60',
                            'max' => '80',
                            'step' => '1'
                        ),
                        'condition' => array(
                            'element'   => 'nbcore_pd_details_sidebar',
                            'value'     => '!no-sidebar',
                        )
                    ),
                ),
                'product_sticky_sidebar' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Sticky sidebar', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_pd_meta_layout' => array(
                    'settings' => array(
                        'default' => 'left-images',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Product meta layout', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'left-images' => get_template_directory_uri() . '/assets/images/options/left-image.png',
                            'right-images' => get_template_directory_uri() . '/assets/images/options/right-image.png',
                            'wide' => get_template_directory_uri() . '/assets/images/options/wide.png',
                        ),
                    ),
                ),
                'nbcore_add_cart_style' => array(
                    'settings' => array(
                        'default' => 'style-1',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Add to cart input style', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            'style-1' => esc_html__('Style 1', 'antimall'),
                            'style-2' => esc_html__('Style 2', 'antimall'),
                        ),
                    ),
                ),
                'nbcore_pd_show_social' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show social share?', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_pd_gallery_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Product Gallery', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_pd_images_width' => array(
                    'settings' => array(
                        'default' => '50',
                        'transport' => 'postMessage',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Product images width', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Slider',
                        'choices' => array(
                            'unit' => '%',
                            'min' => '30',
                            'max' => '60',
                            'step' => '1'
                        ),
                        'condition' => array(
                            'element' => 'nbcore_pd_meta_layout',
                            'value'   => '!wide',
                        )
                    ),
                ),
                'nbcore_pd_featured_autoplay' => array(
                    'settings' => array(
                        'default' => false,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Featured Images Autoplay', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_pd_thumb_pos' => array(
                    'settings' => array(
                        'default' => 'bottom-thumb',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Small thumb position', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'bottom-thumb' => get_template_directory_uri() . '/assets/images/options/bottom-thumb.png',
                            'left-thumb' => get_template_directory_uri() . '/assets/images/options/left-thumb.png',
                            'inside-thumb' => get_template_directory_uri() . '/assets/images/options/inside-thumb.png',
                        ),
                    ),
                ),
                'nbcore_pd_info_tab_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Information tab', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_info_style' => array(
                    'settings' => array(
                        'default' => 'accordion-tabs',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Tabs style', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            'horizontal-tabs' => esc_html__('Horizontal', 'antimall'),
                            'accordion-tabs' => esc_html__('Accordion', 'antimall'),
                        ),
                    ),
                ),
                'nbcore_reviews_form' => array(
                    'settings' => array(
                        'default' => 'split',
                        'transport' => 'postMessage',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Reviews form style', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            'split' => esc_html__('Split', 'antimall'),
                            'full-width' => esc_html__('Full Width', 'antimall'),
                        ),
                    ),
                ),
                'nbcore_reviews_round_avatar' => array(
                    'settings' => array(
                        'default' => false,
                        'transport' => 'postMessage',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Round reviewer avatar', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_other_products_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Related & Cross-sells products', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Heading',
                    ),
                ),
                'nbcore_show_upsells' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show upsells products?', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_pd_upsells_columns' => array(
                    'settings' => array(
                        'default' => '3',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Upsells Products per row', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            '2' => esc_html__('2 Products', 'antimall'),
                            '3' => esc_html__('3 Products', 'antimall'),
                            '4' => esc_html__('4 Products', 'antimall'),
                        ),
                    ),
                ),
                'nbcore_upsells_limit' => array(
                    'settings' => array(
                        'default' => '6',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Upsells Products limit', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Number',
                        'input_attrs' => array(
                            'min' => '2',
                            'step' => '1'
                        ),
                    ),
                ),
                'nbcore_show_related' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show related product?', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_pd_related_columns' => array(
                    'settings' => array(
                        'default' => '3',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Related Products per row', 'antimall'),
                        'section' => 'product_details',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            '2' => esc_html__('2 Products', 'antimall'),
                            '3' => esc_html__('3 Products', 'antimall'),
                            '4' => esc_html__('4 Products', 'antimall'),
                        ),
                    ),
                ),
                'nbcore_cart_intro' => array(
                    'settings' => array(),
                    'controls' => array(
                        'label' => esc_html__('Cart', 'antimall'),
                        'section' => 'other_wc_pages',
                        'type' => 'Antimall_Customize_Control_Heading'
                    ),
                ),
                'nbcore_cart_layout' => array(
                    'settings' => array(
                        'default' => 'cart-layout-1',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Cart page layout', 'antimall'),
                        'section' => 'other_wc_pages',
                        'type' => 'Antimall_Customize_Control_Radio_Image',
                        'choices' => array(
                            'cart-layout-1' => get_template_directory_uri() . '/assets/images/options/cart-style-1.png',
                            'cart-layout-2' => get_template_directory_uri() . '/assets/images/options/cart-style-2.png',
                        ),
                    ),
                ),
                'nbcore_show_to_shop' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show Continue shopping button', 'antimall'),
                        'section' => 'other_wc_pages',
                        'type' => 'Antimall_Customize_Control_Switch',
                    ),
                ),
                'nbcore_show_cross_sells' => array(
                    'settings' => array(
                        'default' => true,
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_checkbox')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Show cross sells', 'antimall'),
                        'section' => 'other_wc_pages',
                        'type' => 'Antimall_Customize_Control_Switch'
                    ),
                ),
                'nbcore_cross_sells_per_row' => array(
                    'settings' => array(
                        'default' => '4',
                        'sanitize_callback' => array('Antimall_Customize_Sanitize', 'sanitize_selection')
                    ),
                    'controls' => array(
                        'label' => esc_html__('Products per row', 'antimall'),
                        'section' => 'other_wc_pages',
                        'type' => 'Antimall_Customize_Control_Select',
                        'choices' => array(
                            '3' => esc_html__('3 products', 'antimall'),
                            '4' => esc_html__('4 products', 'antimall'),
                            '5' => esc_html__('5 products', 'antimall'),
                        ),
                        'condition' => array(
                            'element' => 'nbcore_show_cross_sells',
                            'value'   => 1,
                        )
                    ),
                ),
                'nbcore_cross_sells_limit' => array(
                    'settings' => array(
                        'default' => '6',
                        'sanitize_callback' => 'absint'
                    ),
                    'controls' => array(
                        'label' => esc_html__('Cross sells Products limit', 'antimall'),
                        'section' => 'other_wc_pages',
                        'type' => 'Antimall_Customize_Control_Number',
                        'input_attrs' => array(
                            'min' => '3',
                            'step' => '1'
                        ),
                        'condition' => array(
                            'element' => 'nbcore_show_cross_sells',
                            'value'   => 1,
                        )
                    ),
                ),
            )),
        );
    }
}