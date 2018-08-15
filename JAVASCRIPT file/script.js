$(window).on("load", function () {
    $(".se-pre-con").fadeOut("slow");
});

function myFunction() {
    alert("You need to be logged into your fb account before clicking this button to connect with me!!");
}
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $("#back2Top").fadeIn();
    } else {
        $("#back2Top").fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});
$(function () {
    $(".scroll-0").click(function () {
        $("html, body").animate({
            scrollTop: $("div#top").offset().top
        }, "slow");
        return false;
    });
});
$(function () {
    $(".scroll-1").click(function () {
        $("html, body").animate({
            scrollTop: $("div#certificates").offset().top
        }, "slow");
        return false;
    });
});
$(function () {
    $(".scroll-2").click(function () {
        $("html, body").animate({
            scrollTop: $("div#aboutme").offset().top
        }, "slow");
        return false;
    });
});
$(function () {
    $(".scroll-3").click(function () {
        $("html, body").animate({
            scrollTop: $("div.skills").offset().top
        }, "slow");
        return false;
    });
});
$(function () {
    $(".scroll-4").click(function () {
        $("html, body").animate({
            scrollTop: $("div#contact").offset().top
        }, "slow");
        return false;
    });
});
$(function () {
    $(".scroll-5").click(function () {
        $("html, body").animate({
            scrollTop: $("div.Template").offset().top
        }, "slow");
        return false;
    });
});
AOS.init({
    duration: 1200
});