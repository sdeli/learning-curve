<!--Site main navbar-->
<div class="middle-section-wrap">
    <div class="container">
        <div class="middle-section">
            <div class="flex-section equal-section">
                <?php antimall_main_nav(); ?>
            </div>
            <div class="flex-section">
                <?php antimall_get_site_logo(); ?>
            </div>
            <div class="flex-section equal-section flex-end">
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
</div>
<!--End site main navbar-->
