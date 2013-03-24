/*
 *  jflickery.js - Flickr Javascript API wrapper
 *
 *  http://edmoremoyo.com
 */

var JFLICKERY_CONFIG = JFLICKERY_CONFIG || {};

/*
*   @module JFLICKERY
*/

var JFLICKERY = (function (spec) {
    "use strict";
    var that = {};

    /*
     * @namespace JFLICKERY
     * @object getUserID
     * @return {String} user id
     */

    that.getUserID = function () {
        return spec.myuserid || "";
    };

    /*
     * @namespace JFLICKERY
     * @object getApiKey
     * @return {String} api key
     */

    that.getApiKey = function () {
        return spec.mykey || "";
    };

    /*
     * @namespace JFLICKERY
     * @object getJSONP
     */

    that.getJSONP = function () {
        var script = document.createElement('script'),
        user_id = that.getUserID(),
        api_key = that.getApiKey(),
        base_url = "http://api.flickr.com/services/rest/",
        callback = Array.prototype.slice.call(arguments, 0, 1),
        photoset_id = Array.prototype.slice.call(arguments, 1, 2),
        scripts = document.getElementsByTagName('script'),
        length = scripts.length,
        i,
        child;

        for (i = 0; i < length; i += 1) {
            if (scripts[i].getAttribute("src") !== null) {
                if (scripts[i].getAttribute("src").indexOf(base_url + '?method=flickr.' + callback) >= 0) {
                    child = scripts[i];
                    document.getElementsByTagName('head')[0].removeChild(child);
                }
            }
        }

        script.setAttribute('src', base_url + '?method=flickr.' + callback + '&api_key=' + api_key + '&user_id=' + user_id + '&photoset_id=' + photoset_id + '&format=json&jsoncallback=' + callback);
        script.setAttribute('type', 'text/javascript');
        document.getElementsByTagName('head')[0].appendChild(script);
    };

    return that;
}(JFLICKERY_CONFIG));

var photosets = {};

photosets.getList = function (data) {
    "use strict";
    var i, a, li, content, div, ul;

    div = document.createElement('div');
    div.setAttribute('class', "setlinks");
    ul = document.createElement('ul');
    ul.setAttribute('class', "links");

    for (i = 0; i < data["photosets"]["photoset"].length; i += 1) {
        li = document.createElement('li');
        li.setAttribute('class', "link");
        a = document.createElement('a');

        a.setAttribute('id', data["photosets"]["photoset"][i]["id"]);
        a.setAttribute('class', "photoset");
        content = data["photosets"]["photoset"][i]["title"]._content;
        a.innerHTML = content;

        document.getElementsByTagName('body')[0].appendChild(div);
        document.getElementsByClassName('setlinks')[0].appendChild(ul);
        document.getElementsByClassName('links')[0].appendChild(li);
        document.getElementsByClassName('link')[i].appendChild(a);
    }
};

photosets.getPhotos = function (data) {
    "use strict";
    var i, img, li, content, div, ul, farm, server, id, secret;

    div = document.createElement('div');
    div.setAttribute('class', "setphotos");
    ul = document.createElement('ul');
    ul.setAttribute('class', "photos");

    for (i = 0; i < data["photoset"]["photo"].length; i += 1) {
        farm = data["photoset"]["photo"][i]["farm"];
        server = data["photoset"]["photo"][i]["server"];
        id = data["photoset"]["photo"][i]["id"];
        secret = data["photoset"]["photo"][i]["secret"];

        li = document.createElement('li');
        li.setAttribute('class', "photo");
        img = document.createElement('img');

        img.setAttribute('src', 'http://farm' + farm + '.static.flickr.com/' + server + '/' + id + '_' + secret + '.jpg');
        img.setAttribute('title', data["photoset"]["photo"][i]["title"]);

        document.getElementsByTagName('body')[0].appendChild(div);
        document.getElementsByClassName('setphotos')[0].appendChild(ul);
        document.getElementsByClassName('photos')[0].appendChild(li);
        document.getElementsByClassName('photo')[i].appendChild(img);
    }
};

