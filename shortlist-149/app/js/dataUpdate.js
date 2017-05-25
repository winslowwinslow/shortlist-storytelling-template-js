/*********************************************************************
* Name: Last Data Update Text Placement for the ESRI Shortlist Story Map
* Version: 1.0
* Created by: Patrick McKinney, Cumberland County GIS 
* Summary: Adds text (<span> element) for the date of last data update for the map.
* Text is placed in the #header element above the 767px max-width breakpoint.
* Below this breakpoint the text is added to the #mobileTitlePage element.
* There is also a resize function to add the text to the #header element when switching
* from below the breakpoint to above it.
* Notes: script requires jQuery, which is included in the Shortlist index.html file.
* Shortlist on GitHub: https://github.com/Esri/shortlist-storytelling-template-js* 
**********************************************************************/

var lastDataUpdateDate = '3-22-2017' // update this variable with last data update date
var dataUpdateText = '<span id="dataUpdate">Data Last Updated: ' + lastDataUpdateDate + '</span>';
var ccpaMobileTitlePage = $('#mobileTitlePage');
var ccpaHeader = $('#header');
    
$(document).ready(function() {
    var viewportWidth =$(window).width();
    if (viewportWidth >= 768 ) {
        ccpaHeader.append(dataUpdateText);
    } else {
        ccpaMobileTitlePage.append(dataUpdateText);    
    }
});

$(window).resize(function() {
    var viewportWidth = $(window).width();
    if (viewportWidth >= 768) {
        ccpaHeader.append(dataUpdateText);
    }
});