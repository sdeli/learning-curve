<?php

class Antimall_Customize_Control_Color extends WP_Customize_Control {

	/**
	 * Official control name.
	 */
	public $type = 'alpha-color';

	/**
	 * Add support for palettes to be passed in.
	 *
	 * Supported palette values are true, false, or an array of RGBa and Hex colors.
	 */
	public $palette;

	/**
	 * Add support for showing the opacity value on the slider handle.
	 */
	public $show_opacity;

	/**
	 * Enqueue scripts and styles.
	 *
	 * Ideally these would get registered and given proper paths before this control object
	 * gets initialized, then we could simply enqueue them here, but for completeness as a
	 * stand alone class we'll register and enqueue them here.
	 */
	public function enqueue() {
		static $enqueued;

		if( !isset($enqueued) ) {
			wp_enqueue_script(
				'spectrum',
				get_template_directory_uri() . '/assets/vendor/spectrum/spectrum.js',
				array( 'jquery' ),
				'1.0.0',
				true
			);
			wp_enqueue_style(
				'spectrum',
				get_template_directory_uri() . '/assets/vendor/spectrum/spectrum.css',
				array(),
				'1.0.0'
			);

			$enqueued = true;
		}
	}

	/**
	 * Render the control.
	 */
	public function render_content() {

		// Process the palette
		if ( is_array( $this->palette ) ) {
			$palette = implode( '|', $this->palette );
		} else {
			// Default to true.
			$palette = ( false === $this->palette || 'false' === $this->palette ) ? 'false' : 'true';
		}

		// Support passing show_opacity as string or boolean. Default to true.
 		$show_opacity = ( false === $this->show_opacity || 'false' === $this->show_opacity ) ? 'false' : 'true';

		// Begin the output. ?>
		<div class="customize-control-content" id="nb-<?php echo esc_attr($this->type)?>-<?php echo esc_attr($this->id)?>">
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
			<div class="color-control-wrap" style="background-color: <?php print($this->value());?>">
				<input class="alpha-color-control" type="text" <?php $this->link(); ?>  />
				<span id="color-placeholder"><?php echo esc_html($this->value()); ?></span>
				<span id="default" data-default-color="<?php echo esc_attr( $this->settings['default']->default ); ?>">
					<i class="icon-arrows-cw"></i>
				</span>
			</div>
		</div>
		<?php
	}
}