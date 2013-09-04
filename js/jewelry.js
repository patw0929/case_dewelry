$(document).ready(function(){
	//在進入jewelry頁面時，設定滑鼠移過item時，不用再換圖
	$("#item_icon_jewelry").attr("src", "./images/icon_4_jewelry_hover.png");
	$("li.item_jewelry a").removeAttr("onmouseover").removeAttr("onmouseout");
});