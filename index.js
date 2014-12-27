module.exports.parse = function(data, callback) {
	var postContent = data && data.postData && data.postData.content;

	if (postContent) {
	    postContent = postContent.replace(/\[\[spotify (track|album)=([a-zA-Z0-9]+)\]\]/g,'<iframe src="https://embed.spotify.com/?uri=spotify:$1:$2" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
	    postContent = postContent.replace(/\[\[spotify user=([a-zA-Z0-9]+) playlist=([a-z-A-Z0-9]+)\]\]/g,'<iframe src="https://embed.spotify.com/?uri=spotify:user:$1:playlist:$2" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>');
		data.postData.content = postContent;
	}

    callback(null,data);
};
