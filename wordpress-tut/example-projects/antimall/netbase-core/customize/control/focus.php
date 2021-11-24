<?php
class Antimall_Customize_Control_Focus extends WP_Customize_Control
{

    /**
     * Official control name.
     */
    public $type = 'focus';

    /**
     * Render the control.
     */
    public function render_content()
    {
        ?>
        <div class="customize-control-content"
             id="nb-<?php echo esc_attr($this->type) ?>-<?php echo esc_attr($this->id) ?>">
            <?php if (!empty($this->label)): ?>
                <span class="customize-control-title">
                    <?php echo esc_html($this->label); ?>
                </span>
            <?php endif; ?>
            <?php if (!empty($this->description)): ?>
                <span class="description customize-control-description">
                    <?php echo esc_html($this->description); ?>
                </span>
            <?php endif; ?>
            <?php foreach($this->choices as $v=>$k) {
                echo '<a class="focus-section" data-section="' . $v . '">' . $k . ' &rarr;</a>';
            }
            ?>
        </div>
        <?php
    }
}