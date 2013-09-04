$(document).ready(function(){
	//在進入story頁面時，設定滑鼠移過item時，不用再換圖
	$("#item_icon_story").attr("src", "./images/icon_1_story_hover.png");
	$("li.item_story a").removeAttr("onmouseover").removeAttr("onmouseout");
});