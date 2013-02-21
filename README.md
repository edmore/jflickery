jFlickery is a pure JS Flickr API wrapper.
---------------------------------------------------------
Currently covers
PhotoSets
 - getList
 - getPhotos

Usage :

- Edit the "jFlickeryConfig.js" file to include your Flickr API key and User ID.

- To get the list of PhotoSets

  - jFlickery.getJSONP("photosets.getList");

- To get the photos in a particular PhotoSet

  - jFlickery.getJSONP("photosets.getPhotos", "\<photoset_id\>");

----------------------------------------------------------

The sample file shows how easily you can use jFlickery with jQuery.
Download the latest version of JQuery and edit the file accordingly or if you prefer download the one specified in the sample.
