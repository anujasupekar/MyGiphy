var api_key = apikey;
$(document).ready(main);

function main(){
	api.getAllTrending(api_key, gotAllTrending);
}

function gotAllTrending(trendingGifs, isSearchQuery) {
	for(var i=0; i<trendingGifs["data"].length; i++) {
		var gif_data = trendingGifs["data"][i]["images"]["original"];
		render.renderGif(gif_data);
	}

	if(isSearchQuery) {
		$(".gifsContainer").append('<button id="loadBtn">Load More</button>');
	}

	$("#loadBtn").click(function() {
		console.log("load more pressed");
		$("#loadBtn").hide();
		getMoreGifsBasedOnSearch();
	});	

	$("#searchBtn").click(function() {
		$(".gifsContainer").html('');
		console.log("button pressed");
		getGifsBasedOnSearch();
	});
}

function getGifsBasedOnSearch() {
	var searchTerm = $("#searchBox").val();
	api.getSearched(api_key, searchTerm, gotSearchedGifs);
}

function gotSearchedGifs(searchedGifs) {	
	gotAllTrending(searchedGifs, true);
}

function getMoreGifsBasedOnSearch() {
	getGifsBasedOnSearch();
}
