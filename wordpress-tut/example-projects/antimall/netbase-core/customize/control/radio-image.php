<?php
class Antimall_Customize_Control_Radio_Image extends WP_Customize_Control
{

    /**
     * Declare the control type.
     *
     * @access public
     * @var string
     */
   	public  $type = 'radio-image';
    public $condition;

    /**
     * Enqueue scripts and styles for the custom control.
     *
     * @access public
     */
    public  function enqueue()
    {
		static $enqueued;

		if( !isset($enqueued) ) {
			wp_enqueue_script('jquery-ui-button');

			$enqueued = true;
		}

		wp_enqueue_script(
			'nb-customize-radio-image',
			get_template_directory_uri() . '/assets/netbase/js/admin/radio-image.min.js',
			array('jquery', 'jquery-ui-button'),
            Antimall_VER,
			true
		);      
    }

    /**
     * Render the control to be displayed in the Customizer.
     */
   public  function render_content()
    {
        if (empty($this->choices)) {
            return;
        }

        $condition_attr = '';

        if (! empty($this->condition)) {
            $condition_attr = 'nb-data-dependency=' . json_encode($this->condition);
        }

        $name = '_customize-radio-' . $this->id; ?>
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
			<div id="input_<?php echo esc_attr($this->id); ?>" class="image image-select-ui">
				<?php foreach ($this->choices as $value => $label): ?>
					<div class="image-select-wrap">
						<input class="nbt-image-select" type="radio" value="<?php echo esc_attr($value); ?>" id="<?php echo esc_attr($this->id . $value); ?>" name="<?php echo esc_attr($name); ?>" <?php $this->link(); checked($this->value(), $value);?>>
							<label for="<?php echo esc_attr($this->id . $value); ?>">
								<img src="<?php echo esc_html($label); ?>" alt="<?php echo esc_attr($value); ?>" title="<?php echo esc_attr($value); ?>">
							</label>
						</input>
					</div>
				<?php endforeach;?>
			</div>
		</div>
		<?php
	}
}
?>