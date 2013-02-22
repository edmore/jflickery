jFlickery is a pure JS Flickr API wrapper.
---------------------------------------------------------
Currently covers
PhotoSets
 - getList
 - getPhotos

Usage :

- Edit the _jFlickeryConfig.js_ file to include your Flickr _API key_ and _User ID_.

- To get the list of PhotoSets

>jFlickery.getJSONP('photosets.getList');
  

- To get the photos in a particular PhotoSet

>jFlickery.getJSONP('photosets.getPhotos', '\<photoset_id\>');

----------------------------------------------------------

The sample file shows how easily you can use jFlickery with jQuery.
Download the latest version of JQuery and edit the file accordingly or if you prefer download the one specified in the sample.
