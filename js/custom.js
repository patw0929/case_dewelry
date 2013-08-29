//顯示hinter與否
function hover_in(theElement){
	var parent_li = theElement.parentNode;
	$(parent_li).children('img[class=hinter]').css("display", "block");
}
function hover_out(theElement){
	var parent_li = theElement.parentNode;
	$(parent_li).children('img[class=hinter]').css("display", "none");
}