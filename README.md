# shortlist-storytelling-template-js - Static Legend Plugin

This fork of the Shortlist" story map provides a method to add a static, toggable legend to the application.  The legend is considered static because the legend is created using a HTML unordered list, as opposed to creating the legend from the map/feature service.  jQuery is utilized to add the toggable functionality to the legend, as well as control when the legend displays below the mobile breakpoint.

The static legend involves the following changes to the application:

1.	Adding the <strong>jquery.shortlist-legend.css</strong> stylesheet, which controls the layout of the legend and legend button
   
      a.	Add this file to the <strong>"app/css/"</strong> directory
   
      b.	Add the stylesheet within the `<head>` element around <em>line 91</em> on the <strong>index.html</strong> file.
   
      c.	Adjust the stylesheet to suit the needs of your application


2.	Adding the `<div id="customLegendBtn">` element at the top of the `<div id="map">` around <em>line 156</em> of the <strong>index.html</strong> file.
   
      a.	 This is the legend button that users will click/press to toggle the legend on/off.


3.	Add `<h3>Legend</h3>` within the `<div id="customLegendBtn">` element


4.	Immediately below the `<div id="customLegendBtn">` element, add the `<div id="customLegend">` element around <em>line 159</em> of the <strong>index.html</strong> file.
   
      a. This element will contain the legend contents


5.	Add legend elements within the `<div id="customLegend">` using `<ul><li>[Name of Layer]</li><li>[image representing layer]<img alt="" src="resources/images/legend/[name of image]"</li></ul>` structure.


6.	Created a folder named <strong>"images"</strong> within the <strong>"resources/images/"</strong> directory.
   
      a.	The images for the legend should be stored here.


7.	Make the following changes within the <strong>main.js</strong> file within the <strong>"app/js/"</strong> directory:
   
      a.	Around <em>line 86</em>, create a variable to hold the viewport width
   
         var viewportWidth = window.innerWidth;

      b.	Around <em>line 528</em>, within the <strong>if(_map.loaded)</strong> conditional statement, add the following code:

         
         if (viewportWidth > 767) {
   	      $('#customLegendBtn').show();
   		}
   		
						
         note: This will show the legend button on devices above the mobile breakpoint.
         This element’s diplay is set to none by default.

   c. Around <em>line 2275</em>, within the <strong>function selectMobileTheme(index)</strong>, add the following code:

         $('#customLegendBtn').show()
   
      note: This will show the legend button below the mobile breakpoint once the map becomes visiable.  This occurs after the user selects a button for one of the tab layers

   d.	At the end of the file, around <em>line 2398</em>, add the following code to add the toggable function to the legend button.  This will allow the legend to be turned on and off

         $('#customLegendBtn').click(function () {
	         $('#customLegend').toggle();
         });
         
[View demo app with plugin here](http://pmacmaps.github.io/shortlist-storytelling-template-js/)

## Original ReadMe Contents

This repository contains the application files for the "Shortlist" story map app.  The app presents a curated set of points of interest.  

[View live app here](http://storymaps.esri.com/stories/shortlist-sandiego/)

![App](/resources/images/shortlist-storytelling-template-js.png) 

## Features
* You can organize your POIs by theme; for example, Food, Hotels, and Attractions. 
* As users pan and zoom, the app presents POIs only for the current map extent.

## Instructions

1. Download and unzip the .zip file.
2. Web-enable the directory.
3. Access the index.html page to see app with default configuration.
4. Change config settings in the index.html to point to your own data (see readme.pdf in zip file for more on config section).

## Requirements

* Notepad or HTML editor
* A little background with Javascript

## Resources

* [Story Maps web site](http://storymaps.arcgis.com/)
* [Story Maps Blog](http://blogs.esri.com/esri/arcgis/category/story-maps/)
* [ArcGIS.com] (http://www.arcgis.com/home)
* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/index.html)
* [@EsriStoryMaps Twitter Feed](https://twitter.com/EsriStoryMaps)

## Issues

Find a bug or want to request a new feature?  Please let us know by submitting an issue.

## Contributing

Anyone and everyone is welcome to contribute. 

## Licensing
Copyright 2012 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's 
[license.txt](license.txt) file.

The following components in this repo are under the MIT License.
[license_mit.txt](license_mit.txt) file.
* the jquery library
* the jquery colorbox plugin (jquery.colorbox-min.js)
* the jquery color animation plugin (jquery.animate-colors-min.js)

[](Esri Tags: Storytelling Shortlist ArcGIS-Online Template)
[](Esri Language: JavaScript)
