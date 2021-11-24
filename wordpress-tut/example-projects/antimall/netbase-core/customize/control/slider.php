<?php

/**
 * Slider custom control
 *
 * @since 1.0
 */
class Antimall_Customize_Control_Slider extends WP_Customize_Control {
    public $type = 'slider';
    public $condition;

    public function enqueue()
    {
        static $enqueued;
        
        if(!isset($enqueued)) {
            wp_enqueue_script('jquery-ui-slider');

            $enqueued = true;
        }

        wp_enqueue_script(
			'nb-customize-slider',
			get_template_directory_uri() . '/assets/netbase/js/admin/slider.min.js',
			array('jquery', 'jquery-ui-slider'),
			Antimall_VER,
			true
        );
    }


    //TODO separate the calculate padding
    public function render_content()
    {
        // $unit = $this->choices['unit'] ? $this->choices['unit'] : '';
        if(!empty($this->choices['unit'])) {
            $unit = $this->choices['unit'];
        } else {
            $unit = '';
        }


        $condition_attr = '';

        if (! empty($this->condition)) {
            $condition_attr = 'nb-data-dependency=' . json_encode($this->condition);
        }

        $name = $name = '_customize-slider-' . $this->id;
        ?>
        <div class="customize-control-content" id="nb-<?php echo esc_attr($this->type)?>-<?php echo esc_attr($this->id)?>" <?php echo esc_attr($condition_attr);?>>
            <?php if( !empty($this->label) ): ?>
            <span class="customize-control-title">
                <?php echo esc_html($this->label); ?>						
            </span>
            <?php endif; ?>
            <?php if( !empty($this->description) ): ?>
            <span class="description customize-control-description">
                <?php echo esc_html($this->description); ?>            
            </span>
            <?php endif; ?>
            <input type="number" class="nb-slider-input" name="<?php echo esc_attr($name); ?>" id="<?php echo esc_attr($this->id . '_' . $this->value());  ?>" value="<?php echo esc_attr($this->value()); ?>" <?php $this->link(); ?> style="display: none" />
            <div
                id="slider_<?php echo esc_attr($this->id)?>"
                class="nb-slider"
                data-value="<?php echo intval( $this->value() ); ?>"
                data-min="<?php echo intval( $this->choices['min'] ); ?>"
                data-max="<?php echo intval( $this->choices['max'] ); ?>"
                data-step="<?php echo intval( $this->choices['step'] ); ?>"
                data-unit="<?php echo esc_attr($unit); ?>"
            ></div>
        </div>
        <?php
    }
}