/*

Credits: Patrick N McKinney
 
This represents a way to add a toggable legend on the map
The legend is static HTML content.  A better way to build a legend
would be to use the JS API.  Maybe you can improve this solution to use
the JS API.  There are three components:

1. Add the HTML content within the <div id="map"> element of the index.html file

2. Add the jquery.shortlist-legend.css stylesheet within the index.html file

3.  Add the following code within the main.js file

Note: References to line numbers are to the original main.js file.
I have also added the code within the main.js and index.html file of this fork
to show how this solution would look.

I have added "Custom Legend" to the comments for each code block to make it easier to find
// the legend related code in the main.js file.
*/

// Step 1 - create a variable to hold the viewport width

// Purpose: to make the legend button visible when the application
// is loaded on a device that is above the application's breakpoint
// Place after line 83 in main.js

// Custom Legend - Capture viewport width
var viewportWidth = window.innerWidth;


    
// Step 2 - Hook the function to display the legend button into the _map.loaded conditional test

// Explain purpose of hooking into this conditional and .loaded option

// Place the following code after line 521 within the if (_map.loaded ) {} conditional statement
// the legend button's display is set to none in the jquery.shortlist-legend.css file

// Custom Legend - If screen width is above breakpoint, display legend button
if (viewportWidth > 767) {
	$('#customLegendBtn').show();
}


// Step 3 - Hook into the selectMobileTheme function to display the legend button
// on devices below the breakpoint
// This code will display the legend button once the map becomes visible on devices below
// the breakpoint.  For these devices, there is a menu over the map when the application loads

// Place the following code on line 2264 within the selectMobileTheme function code block

// Custom Legend - show Legend button on devices below breakpoint once map is visible
$('#customLegendBtn').show();



// Step 4 - Add toggle funtion to legend button

//  This code will display or hide the legend when the legend button is clicked/touched
// Place at the end of the main.js file, around line 2383
		
// Custom Legend - ddd display/hide legend functionality to the legend button
$('#customLegendBtn').click(function () {
    $('#customLegend').toggle();
});
