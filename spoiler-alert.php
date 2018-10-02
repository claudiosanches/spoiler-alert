<?php
/**
 * Plugin Name: Spoiler Alert
 * Plugin URI:  https://github.com/claudiosanches/spoiler-alert
 * Description: Adds a spoiler alert into Gutenberg block
 * Author:      Claudio Sanches
 * Author URI:  https://claudiosanches.com
 * Version:     0.0.1
 * License:     GPLv3
 * Text Domain: spoiler-alert
 * Domain Path: /languages
 *
 * Copyright (C) 2018 Claudio Sanches
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 * @package Spoiler_Alert
 */

defined( 'ABSPATH' ) || exit;

define( 'SPOILER_ALERT_VERSION', '0.0.1' );
define( 'SPOILER_ALERT_PLUGIN_FILE', __FILE__ );

if ( ! class_exists( 'Spoiler_Alert' ) ) {
	include_once dirname( __FILE__ ) . '/includes/class-spoiler-alert.php';

	add_action( 'plugins_loaded', array( 'WC_CoSpoiler_Alertrreios', 'init' ) );
}
