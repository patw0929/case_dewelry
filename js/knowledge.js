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

});