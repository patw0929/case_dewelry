$(document).ready(function(){
	//在進入news頁面時，設定滑鼠移過item時，不用再換圖
	$("#item_icon_news").attr("src", "./images/icon_2_news_hover.png");
	$("li.item_news a").removeAttr("onmouseover").removeAttr("onmouseout");
});