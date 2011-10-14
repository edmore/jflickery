/**
 *  jFlickery - Flickr API wrapper
 *
 *  http://edmoremoyo.com
 */

var jFlickery = {};

jFlickery.init = function(spec){
    var that = {};

    that.getApiKey = function(){
        return spec.mykey;
    };

    that.getApiSecret = function(){
        return spec.mysecret;
    };

    return that;
};

jFlickery.photoSets = function(spec){
    var that = jFlickery.init(spec);

    that.getList = function(){
      return "My List";
    };

    that.getPhotos = function(x){
        return "Photos in photoset " + x;
    };

    return that;
};
