<?php
class Antimall_Customize_Control_Heading extends WP_Customize_Control {
    public $type = 'heading';

    /**
     * Render the control's content.
     *
     * @return  void
     */
    public function render_content() {

        if ( ! empty( $this->label ) ) :
        ?>
        <h2><?php echo esc_html( $this->label ); ?></h2>
        <?php
        endif;

        if ( ! empty( $this->description ) ) :
        ?>
        <span class="description customize-control-description">
            <span><?php esc_html_e('Info:', 'antimall'); ?></span>
            <?php echo '' . $this->description ; ?>
        </span>
        <?php endif;
    }
}
