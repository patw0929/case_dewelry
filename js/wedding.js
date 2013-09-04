$(document).ready(function(){
	//在進入locations頁面時，設定滑鼠移過item時，不用再換圖
	$("#item_icon_wedding").attr("src", "./images/icon_3_wedding_hover.png");
	$("li.item_wedding a").removeAttr("onmouseover").removeAttr("onmouseout");
});