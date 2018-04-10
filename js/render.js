var render = {
	renderGif : function(gif_data) {
		var url = gif_data["url"];
		var rendered_gif = '<img src='+url+' alt="giphy.com" width="100" height="100">';
		$(".gifsContainer").append(rendered_gif);
	}
}