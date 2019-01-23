$(window).on("load", function() {
    $(".se-pre-con").fadeOut("slow");
});

function myFunction() {
    alert("You need to be logged into your fb account before clicking this button to connect with me!!");
}

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $("#back2Top").fadeIn();
    } else {
        $("#back2Top").fadeOut();
    }
});

$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});

$(function() {
    $(".scroll-0").click(function() {
        $("html, body").animate({
            scrollTop: $("div#top").offset().top
        }, "slow");
        return false;
    });
});

$(function() {
    $(".scroll-1").click(function() {
        $("html, body").animate({
            scrollTop: $("div#certificates").offset().top
        }, "slow");
        return false;
    });
});

$(function() {
    $(".scroll-2").click(function() {
        $("html, body").animate({
            scrollTop: $("div#aboutme").offset().top
        }, "slow");
        return false;
    });
});

$(function() {
    $(".scroll-3").click(function() {
        $("html, body").animate({
            scrollTop: $("div.skills").offset().top
        }, "slow");
        return false;
    });
});

$(function() {
    $(".scroll-4").click(function() {
        $("html, body").animate({
            scrollTop: $("div#contact").offset().top
        }, "slow");
        return false;
    });
});

$(function() {
    $(".scroll-5").click(function() {
        $("html, body").animate({
            scrollTop: $("div.Template").offset().top
        }, "slow");
        return false;
    });
});

$(function() {
    $(".scroll-6").click(function() {
        $("html, body").animate({
            scrollTop: $("div#projects").offset().top
        }, "slow");
        return false;
    });
});

AOS.init({
    duration: 1200
});

$(function(){
    $(".typed").typed({
    strings: ["am a 2nd year Btech graduate from College of Engineering and Technology,Bbsr.",
        " belong to CSE background.",
        "am extremely passionate about coding ever since i learned programming.",
        "pursued my +2 from Super 40 Batch,DAV Cspur securing 91.8% and my matriculation from St. Mary's school,Jajpur securing 96.8% .",
    ],
        stringsElement: null,
        // typing speed
        typeSpeed: 30,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 5,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
});
});