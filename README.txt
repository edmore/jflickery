jFlickery is a pure JS Flickr API wrapper.
---------------------------------------------------------
Currently covers
PhotoSets
 - getList
 - getPhotos

Usage :

Place your Flickr key and user id in the "jFlickeryConfig.js" file.

//To get the list of PhotoSets
  jFlickery.getJSON("photosets.getList");

//To get the photos in a particular PhotoSet
  jFlickery.getJSON("photosets.getPhotos", "<photoset id>");

----------------------------------------------------------

Please edit the sample.html file to try it out.
The sample file shows how easily you can use jFlickery with JQuery.
Download the latest version of JQuery and edit the file accordingly or if you prefer download the one specified in the sample.
