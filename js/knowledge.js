$(function () {

    $("div.middle_container").removeClass("container-fluid");

    $(window).scroll(function () {

        if ($(this).scrollTop() > 100) {
            $("#gotop").fadeIn();
        } else {
            $("#gotop").fadeOut();
        }

    });

    $("#gotop").on('click', function () {

        $("html, body").animate({ scrollTop: 0 }, 900);

    });
    
    //在進入knowledge頁面時，設定滑鼠移過item時，不用再換圖
    $("#item_icon_knowledge").attr("src", "./images/icon_6_knowledge_hover.png");
    $("li.item_knowledge a").removeAttr("onmouseover").removeAttr("onmouseout");

});