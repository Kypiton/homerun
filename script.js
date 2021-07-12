$(document).on('click', '.video__homerun', function() {
	var $video = $('#video'),
		src = $video.attr('src');
 
	$video.attr('src', src + '&autoplay=1');
});