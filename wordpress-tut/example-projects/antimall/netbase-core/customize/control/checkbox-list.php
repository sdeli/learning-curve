<?php

class Antimall_Customize_Control_Checkbox_List extends WP_Customize_Control {

    /**
     * Declare the control type.
     *
     * @access public
     * @var string
     */
    public $type = 'checkbox-list';

    public $condition;

    /**
     * Enqueue scripts and styles for the custom control.
     *
     * @access public
     */
    public function enqueue() {
        static $enqueued;

        //TODO min css and js
        if (!isset($enqueued)) {
            wp_enqueue_script(
                    'antimall-checkbox-list', get_template_directory_uri() . '/assets/netbase/js/admin/checkbox-list.min.js', array('jquery'), Antimall_VER, true
            );
            $enqueued = true;
        }
    }

    /**
     * Render the control to be displayed in the Customizer.
     */
    public function render_content() {

        $condition_attr = '';

		if (! empty($this->condition)) {
			$condition_attr = 'nb-data-dependency=' . json_encode($this->condition);
        }

        if (empty($this->choices))
            return;
        ?>
        <div class="customize-control-content" id="nb-<?php echo esc_attr($this->type) ?>-<?php echo esc_attr($this->id) ?>" <?php echo esc_attr($condition_attr);?>>
        <?php if (!empty($this->label)) : ?>
            <span class="customize-control-title"><?php echo esc_html($this->label); ?></span>
        <?php endif; ?>

            <?php if (!empty($this->description)) : ?>
                <span class="description customize-control-description"><?php echo esc_html($this->description); ?></span>
            <?php endif; ?>
            <?php $multi_values = json_decode($this->value()); ?>

            <ul class="customize-control-checkbox-lists">
                <?php foreach ($this->choices as $value => $label) : ?>
                    <li>
                        <label>
                        <input type="checkbox" name="<?php echo esc_attr($value); ?>" <?php  if(isset($multi_values->$value)) checked($multi_values->$value); ?> /> 
                    <?php echo esc_html($label); ?>
                        </label>
                    </li>
                <?php endforeach; ?>
            </ul>
            <input type="hidden" <?php $this->link(); ?> value="<?php echo esc_attr(json_encode($this->choices)); ?>" />
        </div>
        <?php
    }
}
?>