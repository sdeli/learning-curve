<div class="top-section-wrap">
    <div class="container">
        <div class="top-section">
            <?php $text_section_content = antimall_get_options('nbcore_header_text_section');
            if($text_section_content):
            ?>
            <div class="text-section">
                <?php echo esc_html($text_section_content); ?>
            </div>
            <?php
            endif; ?>
            <div class="icon-header-section">
                <div class="icon-header-wrap">
                <?php
                antimall_header_woo_section();
                antimall_search_section();
                ?>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="middle-section-wrap">
    <div class="container">
        <div class="middle-section">
            <div class="flex-section equal-section flex-end">
                <?php antimall_main_nav(); ?>
            </div>
            <div class="flex-section">
                <?php antimall_get_site_logo(); ?>
            </div>
            <div class="flex-section equal-section">
                <?php antimall_core_sub_menu();?>
            </div>
        </div>
    </div>
</div>