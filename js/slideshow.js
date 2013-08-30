$(document).ready(function() {
	$('.slideshow')
	.cycle({
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		speed:  1500,  //調整輪播秒數
		
		pager:  '#nav',
		pagerAnchorBuilder: function(idx, slide) { 
        // return selector string for existing anchor
        
        return '#nav li:eq(' + idx + ') a'; 
    }
	});
	
	
});