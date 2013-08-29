//顯示hinter與否
function hover_in(theElement, item){
	var parent_li = theElement.parentNode;
	$(parent_li).children('img[class=hinter]').css("display", "block");
	
	//將次選單顯示出來
	switch(item){
		case 'wedding':
			$("nav.sub_nav").css("display", "block");
			$("ul.sub_nav_wedding_ul").css("display", "block");
			break;
		case 'jewelry':
			$("nav.sub_nav").css("display", "block");
			$("ul.sub_nav_jewelry_ul").css("display", "block");
			break;
	}
}
function hover_out(theElement, item){
	var parent_li = theElement.parentNode;
	$(parent_li).children('img[class=hinter]').css("display", "none");
	
	//將次選單隱藏起來
	switch(item){
		case 'wedding':
			$("nav.sub_nav").css("display", "none");
			$("ul.sub_nav_wedding_ul").css("display", "none");
			break;
		case 'jewelry':
			$("nav.sub_nav").css("display", "none");
			$("ul.sub_nav_jewelry_ul").css("display", "none");
			break;
	}
}