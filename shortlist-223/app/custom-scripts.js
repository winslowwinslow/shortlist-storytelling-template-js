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
        var lastDataUpdateDate = '4-19-2017'
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
        
        // Custom Legend
        var viewportWidth = window.innerWidth;
        // Custom Legend - If screen width is above breakpoint, display legend button
        if (viewportWidth > 767) {
            $('#customLegendBtn').show();
        } 
        // Custom Legend - ddd display/hide functionality to Legend button
        $('#customLegendBtn').click(function () {
             $('#customLegend').toggle();
        });
	});
});
