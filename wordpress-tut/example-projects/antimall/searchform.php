<form method="get" class="search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <div class="nb-input-group">
        <input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search', 'placeholder', 'antimall' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
        <span class="search-button">
            <button class="bt-4" type="submit"><i class="icon-search"></i></button>
        </span>
    </div>
</form>