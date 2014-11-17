(function(module) {
    "use strict";
    var Spotify = {},
        track = '<iframe src="https://embed.spotify.com/?uri=spotify:$1:$2" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>',
        user = '<iframe src="https://embed.spotify.com/?uri=spotify:user:$1:playlist:$2" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>'
    var	embedtrack = /spotify:(track|album):([a-zA-Z0-9]+)/g;
    var	embeduser = /spotify:user:([a-zA-Z0-9]+):playlist:([a-z-A-Z0-9]+)/g;


    Spotify.parse = function(data, callback) {

        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(embedtrack)) {
            data.postData.content = data.postData.content.replace(embedtrack, track);
        }
        if (data.postData.content.match(embeduser)) {
            data.postData.content = data.postData.content.replace(embeduser, user);
        }

        callback(null, data);
    };

    module.exports = Spotify;
}(module));
