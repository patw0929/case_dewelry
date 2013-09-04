$(document).ready(function(){
	//在進入locations頁面時，設定滑鼠移過item時，不用再換圖
	$("#item_icon_locations").attr("src", "./images/icon_5_locations_hover.png");
	$("li.item_locations a").removeAttr("onmouseover").removeAttr("onmouseout");
});