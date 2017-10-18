# Esri Shortlist Story Map Customizations

This fork of the [Esri Shortlist Story Map](https://github.com/Esri/shortlist-storytelling-template-js) provides the code to various customizations I have made in live deployments of the application.  I have broken the code out, although you could combine the various custom styles into a single custom stylesheet for the app.  I will cover each customization in a seperate section, detailing what changes are required.  

Below are some links to the customizations in action:

* [Cumberland County Bridges Capital Improvement Program](https://gis.ccpa.net/storymaps/bridges/)
* [CAEDC Interactive Data Map](http://map.cumberlandbusiness.com/)
* [Demo map for this repo](http://pmacmaps.github.io/shortlist-storytelling-template-js/)

**Note:** I have encountered instances where the 1.4.9 version of this app will load the tour points on desktop (above breakpoint), but not on mobile (below breakpoint). I have not yet encountered this issue with version 2.2.3.

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
* [ArcGIS.com](http://www.arcgis.com/home)
* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/index.html)
* [@EsriStoryMaps Twitter Feed](https://twitter.com/EsriStoryMaps)
* [Story Maps Developers' Corner](https://developerscorner.storymaps.arcgis.com)

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
