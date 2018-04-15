var api = {
	getAllTrending : function(_apiKey, callback) {
		$.get('http://api.giphy.com/v1/gifs/trending', { api_key : _apiKey }, function(data) {
	    	callback(data);
		});
	},

	getSearched : function(_apiKey, _searchTerm, callback) {
		$.get('http://api.giphy.com/v1/gifs/search', { api_key : _apiKey, q : _searchTerm }, function(data) {
	    	callback(data);
		});
	}
}

