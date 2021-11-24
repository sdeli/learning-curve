<?php
class Antimall_Customize_Control_Font_Style extends WP_Customize_Control {
    public $type = 'font-style';

    public function enqueue()
    {
        static $enqueued;

        //TODO min css and js
        if( !isset($enqueued) ) {
            wp_enqueue_script(
                'nb-font-style',
                get_template_directory_uri() . '/assets/netbase/js/admin/font-style.min.js',
                array('jquery'),
                Antimall_VER,
                true
            );

            wp_localize_script( 'nb-customize-typography', 'nb_customize_typography', array(
                'google_fonts' => Antimall_Helper::google_fonts(),
            ) );

            $enqueued = true;
        }

    }

    public function render_content()
    {
        $multi_values = !is_array( $this->value() ) ? explode( ',', $this->value() ) : $this->value(); ?>

        <div class="customize-control-content customize-control-font-style" id="nb-<?php echo esc_attr($this->type)?>-<?php echo esc_attr($this->id)?>">
            <?php if( !empty($this->label) ): ?>
                <span class="customize-control-title">
                <?php echo esc_html($this->label); ?>
            </span>
            <?php endif;
            if( !empty($this->description) ): ?>
                <span class="description customize-control-description">
                    <?php echo esc_html($this->description); ?>
                </span>
            <?php endif; ?>
            <ul class="customize-control-checkbox-multiple">
                <?php if($this->choices['italic']): ?>
                    <li>
                        <label>
                            <input type="checkbox" name="italic" value="italic" <?php checked( in_array( 'italic', $multi_values ) ); ?> />
                            <i class="icon-italic"></i>
                        </label>
                    </li>
                <?php endif; ?>
                <?php if($this->choices['underline']): ?>
                    <li>
                        <label>
                            <input type="checkbox" name="underline" value="underline" <?php checked( in_array( 'underline', $multi_values ) ); ?> />
                            <i class="icon-underline"></i>
                        </label>
                    </li>
                <?php endif; ?>
                <?php if($this->choices['uppercase']): ?>
                    <li>
                        <label>
                            <input type="checkbox" name="uppercase" value="uppercase" <?php checked( in_array( 'uppercase', $multi_values ) ); ?> />
                            <i class="icon-text-height"></i>
                        </label>
                    </li>
                <?php endif; ?>
                <?php if($this->choices['weight']): ?>
                    <li>
                        <select name="fonts-weight">
                            <option value="400" <?php selected(end($multi_values), '400'); ?>><?php esc_html_e('Regular', 'antimall');?></option>
                            <option value="100" <?php selected(end($multi_values), '100'); ?>><?php esc_html_e('Thin', 'antimall');?></option>
                            <option value="200" <?php selected(end($multi_values), '200'); ?>><?php esc_html_e('Extra Light', 'antimall');?></option>
                            <option value="300" <?php selected(end($multi_values), '300'); ?>><?php esc_html_e('Light', 'antimall');?></option>
                            <option value="500" <?php selected(end($multi_values), '500'); ?>><?php esc_html_e('Medium', 'antimall');?></option>
                            <option value="600" <?php selected(end($multi_values), '600'); ?>><?php esc_html_e('Semi-bold', 'antimall');?></option>
                            <option value="700" <?php selected(end($multi_values), '700'); ?>><?php esc_html_e('Bold', 'antimall');?></option>
                            <option value="800" <?php selected(end($multi_values), '800'); ?>><?php esc_html_e('Extra Bold', 'antimall');?></option>
                            <option value="900" <?php selected(end($multi_values), '900'); ?>><?php esc_html_e('Black', 'antimall');?></option>
                        </select>
                    </li>
                <?php endif; ?>
            </ul>
            <input type="hidden" <?php $this->link(); ?> value="<?php echo esc_attr( implode( ',', $multi_values ) ); ?>" />
        </div>
        <?php
    }
}