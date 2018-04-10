var api = {
	getAllTrending : function(_apiKey, callback) {
		$.get('http://api.giphy.com/v1/gifs/trending', { api_key : _apiKey }, function(data) {
	    	callback(data);
		});
	}
}

