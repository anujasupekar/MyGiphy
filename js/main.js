var api_key = 'YFeskElUi13DrHigzNb7wfYku9Y0brww';
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
		$("#loadBtn").hide();
		getMoreGifsBasedOnSearch();
	});	

	$("#searchBtn").click(function() {
		$(".gifsContainer").html('');
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
