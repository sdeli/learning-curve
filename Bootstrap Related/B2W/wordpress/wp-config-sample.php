<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'bootstrap2wordpress');

/** MySQL database username */
define('DB_USER', 'sdeli2');

/** MySQL database password */
define('DB_PASSWORD', 'GUOWWgMF4tbolhDk');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'INVebuD@3zYMduu->W%r?|YA&Ho73u^(dB2E*3O!JY=7*p!&q+%e1@cW=Y2:cTDw');
define('SECURE_AUTH_KEY',  'JMU +8Zo6qr:$nwQEzLH!{yU|S*|P@Rt8;CgEf^2jNft99g?+yute9gbVG+EMAk8');
define('LOGGED_IN_KEY',    'K?P{8r9Int$-DLDp.+tJ-dPWP2u0^2^~9~>XG^c2Y|/so+},:jg2X#CUe<68i|Sg');
define('NONCE_KEY',        ',37[oTcfB:Pu+sDk cvc-.(>a/?Y0#NeQ%o?jP&z-jjr!3hB1X~+v|:CvzyJ+lD]');
define('AUTH_SALT',        'pR~11^GQUUB$Ta$Y[Kw?wa#6GrZ}<yNbj(FY)<@ja>3amat.,ZHp:$62yt.+}a,4');
define('SECURE_AUTH_SALT', 'xSfBfp4_Y>|y49eYA/65xGLb;;9-QV{aaq,V#w;Lgng-r8J|oMrpXntE$]E!>A!#');
define('LOGGED_IN_SALT',   'B+xBE&$u6I.sa{|tDu*4Soh;-DIjyDzQ3=V{OFm3g%K>MeBuyn`?-<Ac=wD2r*I2');
define('NONCE_SALT',       'a 1|q,hC9[`K5_-+#5}fw.e;Utm*UCa|^s3,1q?B>3D)nf6Fmi-|~9[nq_8B$4++');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'maj_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
