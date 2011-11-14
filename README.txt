jFlickery is a pure JS Flickr API wrapper.
---------------------------------------------------------
Currently covers
PhotoSets
 - getList
 - getPhotos

Usage :

//To get the list of PhotoSets
var myFlickr = jFlickery.init({mykey : "your_api_key", myuserid : "your_user_id"});
myFlickr.jsonp("photosets.getList");

//To get the photos in a particular PhotoSet
var myFlickr = jFlickery.init({mykey : "your_api_key", myuserid : "your_user_id", mysetid : "your_photoset_id"});
myFlickr.jsonp("photosets.getPhotos");

----------------------------------------------------------
Use the sample.html file to test it out with your own Flickr key and user id. The sample file shows how easily you can use jFlickery with JQuery.
