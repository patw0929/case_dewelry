$(document).ready(function(){
	//在進入contact.html頁面時，設定滑鼠移過contact item時，不用再換圖
	$("#item_icon_contact").attr("src", "./images/icon_7_contact_hover.png");
	$("li.item_contact a").removeAttr("onmouseover").removeAttr("onmouseout");
});