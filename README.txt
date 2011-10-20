jFlickery is a pure JS Flickr API wrapper.
---------------------------------------------------------
Usage :

var myFlickr = jFlickery.init({mykey : "your_api_key", myuserid : "your_user_id", mysetid : "your_photoset_id"});
myFlickr.jsonp("photosets.getList");
myFlickr.jsonp("photosets.getPhotos");
