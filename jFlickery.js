/**
 *  jFlickery - Flickr API wrapper
 *  Currently covers:
 *    -PhotoSets
 *
 *  This Wrapper makes use of JSONP so if you do modify it ensure that the API endpoint that you use is from a trusted service.
 *
 *  http://edmoremoyo.com
 */

var jFlickery = {};

jFlickery.init = function (spec) {
    "use strict";
    var that = {};

    that.getUserID = function () {
        return spec.myuserid || "";
    };

    that.getPhotoSetID = function () {
        return spec.mysetid || "";
    };

    that.getApiKey = function () {
        return spec.mykey || "";
    };

    that.getApiSecret = function () {
        return spec.mysecret || "";
    };

    that.jsonp = function (callback) {
        var script = document.createElement('script'),
            user_id = that.getUserID(),
            api_key = that.getApiKey(),
            photoset_id = that.getPhotoSetID(),
            base_url = "http://api.flickr.com/services/rest/";

        script.setAttribute('src', base_url +'?method=flickr.'+ callback +'&api_key=' + api_key +'&user_id=' + user_id +'&photoset_id=' + photoset_id +'&format=json&jsoncallback=' + callback);
        script.setAttribute('type','text/javascript');
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    return that;
};

var photosets = {};

photosets.getList = function (data) {
    "use strict";
    console.log(data);
};

photosets.getPhotos = function (data) {
    "use strict";
    console.log(data);
};