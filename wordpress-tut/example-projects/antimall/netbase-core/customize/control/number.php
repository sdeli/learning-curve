<?php

class Antimall_Customize_Control_Number extends WP_Customize_Control {
    public $type = 'number';

    public $condition;

    //TODO separate the calculate padding
    public function render_content()
    {

        $condition_attr = '';

		if (! empty($this->condition)) {
			$condition_attr = 'nb-data-dependency=' . json_encode($this->condition);
        }

        $name = $name = '_customize-number-' . $this->id;
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
            <input id="<?php echo esc_attr($this->id . '_' . $this->value());  ?>" name="<?php echo esc_attr($name); ?>" type="number" min="<?php echo $this->input_attrs['min']?>" step="<?php echo $this->input_attrs['step']?>" value="<?php echo esc_attr($this->value()); ?>" <?php $this->link(); ?>
        </div>
        <?php
    }
}