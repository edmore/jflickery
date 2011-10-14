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

    that.getList = function(api_url){
        var my_JSON_object = {},
        http_request = new XMLHttpRequest(),
        done = 4,
        ok = 200;

        http_request.open("GET", api_url, true);
        http_request.onreadystatechange = function () {
            if (http_request.readyState == done && http_request.status == ok) {
                my_JSON_object = JSON.parse(http_request.responseText);
                console.log(my_JSON_object);
            }
        };
        http_request.send(null);
    };

    that.getPhotos = function(x){
        return "Photos in photoset " + x;
    };

    return that;
};
