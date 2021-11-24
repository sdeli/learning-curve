<?php
class Antimall_Customize_Control_Select extends WP_Customize_Control
{

    /**
     * Declare the control type.
     *
     * @access public
     * @var string
     */
    public $type = 'select';

    public $condition;

    /**
     * Render the control to be displayed in the Customizer.
     */
    public function render_content()
    {
        if (empty($this->choices)) {
            return;
        }

        $condition_attr = '';

		if (! empty($this->condition)) {
			$condition_attr = 'nb-data-dependency=' . json_encode($this->condition);
        }

        $name = '_customize-select-' . $this->id; ?>
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

            <select id="select_<?php echo esc_attr($this->id); ?>" name="<?php echo esc_attr($name); ?>" <?php $this->link(); ?>>
                <?php
                foreach ( $this->choices as $value => $label ) {
                    echo '<option value="' . esc_attr( $value ) . '"' . selected( $this->value(), $value, false ) . '>' . $label . '</option>';
                }
                ?>
            </select>
        </div>
        <?php
    }
}
?>