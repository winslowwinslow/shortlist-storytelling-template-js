define(["dojo/topic"], function(topic) {
	/*
	* Custom Javascript to be executed while the application is initializing goes here
	*/

	// The application is ready
	topic.subscribe("tpl-ready", function(){
		/*
		* Custom Javascript to be executed when the application is ready goes here
		*/
        // Last Data Update Text
        var lastDataUpdateDate = '4-19-2017' // update text to last data update date
        var dataUpdateText = '<span id="dataUpdate">Data Last Updated: ' + lastDataUpdateDate + '</span>';
        var ccpaMobileSubTitle = $('#mobileSnippet');
        var ccpaHeader = $('#header');
        var viewportWidth = $(window).width();
        // Custom Legend
        var customLegendBtn = $('#customLegendBtn');        
    
        $(document).ready(function() {
            if (viewportWidth >= 769 ) {
                ccpaHeader.append(dataUpdateText);
            } else {
                ccpaMobileSubTitle.insertAfter(dataUpdateText);    
            }
        });

        $(window).resize(function() {
            if (viewportWidth >= 768) {
                ccpaHeader.append(dataUpdateText);
            }
        });
        
        // Custom Legend
        var viewportWidth = window.innerWidth;
        // Custom Legend - If screen width is above breakpoint, display legend button
        if (viewportWidth > 768) {
            customLegendBtn.show();
        } else {
            $('#mobileThemeList .mobileTitleThemes').click(function() {
                customLegendBtn.show();
            });
        }        
        
        // Custom Legend - add display/hide functionality to Legend button
        customLegendBtn.click(function () {
             $('#customLegend').toggle();
        });
	});
});