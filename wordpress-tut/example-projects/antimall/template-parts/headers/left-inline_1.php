<div class="top-section-wrap">
    <div class="container">
        <div class="top-section">
            <?php $text_section_content = antimall_get_options('nbcore_header_text_section');
            if($text_section_content):
            ?>
            <div class="text-section">
                <?php echo esc_html($text_section_content); ?>
            </div>
            <?php endif;?>
<!--            <div class="sub-header-menu">-->
            <?php antimall_core_sub_menu(); ?>
<!--            </div>            -->
        </div>
    </div>
</div>
<div class="middle-section-wrap">
    <div class="container-fluid">
        <div class="middle-section">
            <?php antimall_get_site_logo(); ?>
            <div class="main-nav-wrap">
                <?php antimall_main_nav(); ?>
                <div class="icon-header-section">
                    <div class="icon-header-wrap">
                    <?php 
                    antimall_search_section(false);
                    antimall_header_woo_section(false);
                    ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
