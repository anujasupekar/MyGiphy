var api_key = apikey;
$(document).ready(main);

function main(){
	api.getAllTrending(api_key, gotAllTrending);
}

function gotAllTrending(trendingGifs) {
	for(var i=0; i<trendingGifs["data"].length; i++) {
		var gif_data = trendingGifs["data"][i]["images"]["original"];
		render.renderGif(gif_data);
	}
}

function gotOneTrending(gif) {
	

}

