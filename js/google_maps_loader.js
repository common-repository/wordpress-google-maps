/*! Google Maps Free - v2.5.4
 * https://wordpress.org/plugins/wordpress-google-maps/
 * Copyright (c) 2015; * Licensed GPLv2+ */
/*global window:false */
/*global document:false */
/*global _agm:false */

/**
 * Asynchrounously load Google Maps API.
 */


/**
 * Global API loaded flag.
 */
window._agmMapIsLoaded = false;


/**
 * Callback - triggers loaded flag setting.
 */
function agmInitialize () {
	window._agmMapIsLoaded = true;
}

/**
 * Handles the actual loading of Google Maps API.
 */
function loadGoogleMaps () {
	var protocol = '';
	try { protocol = document.location.protocol; } catch (e) { protocol = 'http:'; }
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = protocol + "//maps.google.com/maps/api/js?v=3&libraries=panoramio&sensor=false&callback=agmInitialize";
	document.body.appendChild(script);
}

jQuery(window).load(loadGoogleMaps);
