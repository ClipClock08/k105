function preloader() {
    document.querySelector("body").classList.add("loading")
}

function heightBlock(e) {
    for (var t = document.querySelectorAll(e), i = 0, s = 0; s < t.length; ++s) t[s].style.height = "", t[s].removeAttribute("style"), i < t[s].offsetHeight && (i = t[s].offsetHeight);
    for (s = 0; s < t.length; ++s) t[s].style.height = i + "px"
}

function changeBtn() {
    var e = $(".more-down"), t = $(e).text(), i = document.createElement("span");
    newI = document.createElement("i"), newI.classList.add("icon"), $(e).html($(i).text(t)), $(e).find("span").append(newI)
}

document.addEventListener("DOMContentLoaded", preloader), $(document).ready(function () {
    $(".js-select").each(function (e, t) {
        $(t).select2({dropdownParent: $(t).parents(".js-select-parent")})
    }), AOS.init({once: !0}), $("html").removeClass("no-js"), $(".page_wrap").css("minHeight", window.innerHeight), /iphone|ipad|android|mac/gi.test(navigator.userAgent) && $("html").addClass("device"), $.fn.toOneHeight = function () {
        var e = $(this), t = [];
        e.each(function () {
            var e = $(this);
            t.push(parseFloat(e.outerHeight()))
        }), e.height(Math.max.apply(Math, t))
    }, $(".lockscreen-down").on("click", function (e) {
        e.preventDefault();
        var t = $(".lockscreen").height();
        $("html, body").animate({scrollTop: t + 1}, 500)
    }), $(window).on("load resize", function () {
        var e = $(".square-wrap");
        e.length && e.each(function () {
            $(this).find(".square-item").each(function () {
                $(this).height($(this).width())
            })
        })
    }), $(".facults-slider-item").toOneHeight(), $(".kafedras .desc-inner").mCustomScrollbar({scrollInertia: 100}), $(".facults-slider").slick({
        slidesToShow: 3,
        autoplay: !0,
        autoplaySpeed: 2e3,
        responsive: [{breakpoint: 992, settings: {slidesToShow: 2, infinite: !0}}, {
            breakpoint: 660,
            settings: {slidesToShow: 1, infinite: !0}
        }]
    }), $(".testimonials-slider").slick({
        slidesToShow: 1,
        autoplay: !0,
        responsive: [{breakpoint: 767, settings: {autoplay: !1, adaptiveHeight: !0}}]
    }), $(".partners-slider").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: !0,
        centerMode: !0,
        responsive: [{breakpoint: 1400, settings: {slidesToShow: 4, centerMode: !1}}, {
            breakpoint: 1200,
            settings: {slidesToShow: 3, centerMode: !1}
        }, {breakpoint: 992, settings: {slidesToShow: 2, centerMode: !1}}, {
            breakpoint: 480,
            settings: {slidesToShow: 1, centerMode: !1}
        }]
    }), $(".insta-slider").slick({
        slidesToShow: 4,
        autoplay: !0,
        responsive: [{breakpoint: 992, settings: {slidesToShow: 3}}, {
            breakpoint: 768,
            settings: {slidesToShow: 2}
        }, {breakpoint: 660, settings: {slidesToShow: 1, arrows: !1, dots: !0}}]
    }), $(".structure-slider").slick({
        slidesToShow: 5,
        autoplay: !0,
        arrows: window.innerWidth < 768,
        swipeToSlide: !0,
        responsive: [{breakpoint: 1200, settings: {slidesToShow: 4}}, {
            breakpoint: 992,
            settings: {slidesToShow: 3}
        }, {breakpoint: 768, settings: {slidesToShow: 2}}, {breakpoint: 660, settings: {slidesToShow: 1}}]
    }), $(".simple-slider").slick({
        slidesToShow: 4,
        autoplay: !0,
        responsive: [{breakpoint: 768, settings: {slidesToShow: 2, infinite: !0}}, {
            breakpoint: 480,
            settings: {slidesToShow: 1, infinite: !0}
        }]
    });
    var e, t = {
        slidesToShow: 2,
        autoplay: !1,
        swipeToSlide: !0,
        responsive: [{breakpoint: 660, settings: {slidesToShow: 1}}]
    };
    if (window.innerWidth < 768) $(".stuff-slider").slick(t), $(".stuff-slider").on("setPosition", function () {
        $(".stuff-slider-item-inner p").respText()
    }); else {
        var i = $(".stuff-slider"), s = ($(".stuff-slider-item").outerHeight(!0), i.parent().find(".more-down"));
        s.on("click", function (e) {
            e.preventDefault(), i.toggleClass("opened");
            var t = s.find("span").text(), n = s.parents(".stuff").find(".slideUp").text(),
                o = s.parents(".stuff").find(".slideDown").text(),
                a = (s.find(".more-down").text(), s.parents(".stuff").find(".slideUp").text()),
                l = s.parents(".stuff").find(".slideDown").text();
            s.find("span").text(t == n ? o : n), s.find(".more-down").text(t == a ? l : a), changeBtn()
        })
    }
    changeBtn(), $(".menu-tirgger").on("click", function (e) {
        e.preventDefault(), $(this).parents(".main-menu").toggleClass("opened")
    }), $(".stuff-slider-item").length && $(".stuff-slider-item").length <= 4 && $(".stuff-slider").closest(".wrapper").find(".more-down").css("display", "none");
    var n, o, a, l = !1, r = 200;

    function d() {
        new Date - e < r ? setTimeout(d, r) : (l = !1, window.innerWidth >= 768 && $(".stuff-slider").hasClass("slick-initialized") && $(".stuff-slider").slick("unslick"), window.innerWidth < 768 && !$(".stuff-slider").hasClass("slick-initialized") && $(".stuff-slider").slick(t))
    }

    $(window).resize(function () {
        e = new Date, !1 === l && (l = !0, setTimeout(d, r))
    }), n = $(".materials").find(".more-down"), o = n.find("span"), a = $(".materials-list"), listL = a.find(".materials-list-item").length, listL <= 4 && a.closest(".materials").find(".more-down").css("display", "none"), n.on("click", function (e) {
        e.preventDefault(), a.toggleClass("opened"), o.toggle(), $(this).toggleClass("up")
    }), $(".show-all").on("click", function (e) {
        e.preventDefault(), $(this).toggleClass("up").parent().toggleClass("all").end().find("span").toggle()
    }), $(".gallery-slider").slick({
        slidesToShow: 2,
        autoplay: !0,
        responsive: [{breakpoint: 660, settings: {slidesToShow: 1}}]
    });
    var c = $(".bases-item").length;
    $(".bases-slider").slick({
        slidesToShow: 4,
        rows: window.innerWidth > 660 && c > 4 ? 2 : 1,
        autoplay: !0,
        arrows: !1,
        responsive: [{breakpoint: 1200, settings: {arrows: !0, slidesToShow: 3}}, {
            breakpoint: 992,
            settings: {arrows: !0, slidesToShow: 2}
        }, {breakpoint: 768, settings: {arrows: !0, slidesToShow: 1}}]
    }), $(".history-slider").mCustomScrollbar({scrollInertia: 1200}), $.fn.respText = function () {
        var e = this.parent(), t = Math.round(.06 * e.width());
        window.innerWidth < 1479 ? $(this).css({
            fontSize: t,
            lineHeight: Math.round(1.2 * t) + "px",
            marginBottom: t
        }) : $(this).css({fontSize: "", lineHeight: "", marginBottom: ""})
    }, $(".tabs").each(function () {
        var e = $(this).find(".tab-link"), t = $(this).find(".tab");
        e.on("click", function (i) {
            i.preventDefault();
            var s = $(this).attr("href");
            $(this).addClass("active"), e.not(this).removeClass("active"), t.css("display", "none"), $('[data-tab="' + s + '"]').css("display", ""), $(".bad-message").css("display", "none")
        })
    }), /iPhone|iPad|android/gi.test(navigator.userAgent) && $(".full  .arrow-down").on("click", function (e) {
        window.innerWidth < 1025 && ("a" != (e && e.target || e.srcElement).tagName.toLowerCase() && e.preventDefault(), $(this).closest(".full").find(".sub").slideToggle(400))
    }), $(".mob-menu-trigger").on("click", function () {
        $(this).toggleClass("opened"), $("body").toggleClass("mob-menu-opened")
    }), $('[data-modal="true"]').fancybox({clickOutside: "close"}), $(".fancy-video").fancybox({
        padding: 0,
        beforeShow: function (e, t) {
            console.info("Clicked element:"), console.info(t.opts.$orig)
        }
    }), $(".simple-slider__link").fancybox({
        padding: 0,
        hash: !1,
        helpers: {overlay: {locked: !1}}
    }), setTimeout(function () {
        $("#annoying-1").addClass("opened")
    }, 4000), $(".annoying-close").click(function () {
        $("#annoying-1").removeClass("opened")
    }), $('input[type="tel"]').mask("+38(999) 999 99 99");
    var h, p, f, u, g, m, w, v, k, y, T = 1, b = setInterval(function () {
        5 == T && clearInterval(b), T++
    }, 1e3), S = 5;
    setInterval(function () {
        !function (e) {
            e < 0 && (e = 0);
            var t = Math.floor(e / 60 / 60 / 24), i = Math.floor(e / 60 / 60), s = Math.floor((e - 60 * i * 60) / 60),
                n = Math.floor(e - 60 * i * 60 - 60 * s);
            Math.floor((e - 24 * t * 60 * 60) / 60 / 60), String(n).length, $(".countdown").text(n)
        }(S -= 1)
    }, 1e3), $('.js_validate [type="submit"]').on("click", function () {
        return function (e) {
            var t = "error", i = "pass", s = (e.find("[required]"), 0), n = void 0, o = e.find(".password").val(),
                a = e.find(".password_1").val(), l = !1, r = !1, d = !1;

            function c(e, n) {
                n ? (e.parents(".required-field").addClass(t).removeClass(i), l && e.val().length > 0 && e.parents(".required-field").attr("data-error", "Некорректный email"), r && e.val().length > 0 && e.parents(".required-field").attr("data-error", "Пароль должен быть не менее 6 символов"), a !== o && e.parents(".required-field").attr("data-error", "Пароли не совпадают"), d && e.val().length > 0 && e.parents(".required-field").attr("data-error", "Некорректный формат телефона"), s++) : e.parents(".required-field").addClass(i).removeClass(t)
            }

            return e.find("[required]").each(function () {
                switch ($(this).attr("data-validate")) {
                    case void 0:
                        c($(this), 0 === $.trim($(this).val()).length);
                        break;
                    case"email":
                        l = !0, n = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, c($(this), !n.test($.trim($(this).val()))), l = !1;
                        break;
                    case"phone":
                        d = !0, n = /[0-9 -()+]{10}$/, c($(this), !n.test($.trim($(this).val()))), d = !1;
                        break;
                    case"pass":
                        r = !0, n = /^[a-zA-Z0-9_-]{6,}$/, c($(this), !n.test($.trim($(this).val()))), r = !1;
                        break;
                    case"pass1":
                        c($(this), a !== o || 0 === $.trim($(this).val()).length);
                        break;
                    default:
                        n = new RegExp($(this).attr("data-validate"), "g"), c($(this), !n.test($.trim($(this).val())))
                }
            }), $(".js_valid_radio").each(function () {
                for (var e = $(this).find("input.required"), n = 0, o = 0; o < e.length; o++) {
                    if (!0 === $(e[o]).is(":checked")) {
                        n = 1;
                        break
                    }
                    n = 0
                }
                0 === n ? ($(this).addClass(t).removeClass(i), s = 1) : $(this).addClass(i).removeClass(t)
            }), 0 === s || (e.find("." + t + " input:first").focus(), !1)
        }($(this).parents(".js_validate"))
    }), $("#calendar-widg").fullCalendar({
        locale: "ru",
        defaultView: "month"
    }), $('input[name="groupSearch"]').autocomplete({source: ["110-AB", "110F", "110-QW", "112-R"]}), $('input[name="teacherSearch"]').autocomplete({source: ["Абдулин П.И.", "Ажиков И.Н.", "Акулов П.И", "Алмазов В.И"]}), $(".schedule-filter-select").styler({
        selectSmartPositioning: !1,
        onFormStyled: function () {
            $("html").addClass("formstyled")
        }
    }), $(".lockscreen").length ? (p = window.innerWidth >= 768 ? Math.round($(".header").height()) : 0, f = $(".lockscreen"), u = $(".lockscreen-inner"), g = !0, m = $("#main"), w = $(document).height() - window.innerHeight, v = u.height(), k = Math.round(u.offset().top + v), y = $("<div/>", {
        visibility: "hidden",
        height: w
    }), window.innerWidth >= 768 && f.css({paddingTop: p}), m.addClass("fixed").css("marginTop", p), y.insertAfter(m), $(window).on("load scroll", function () {
        var e = window.pageYOffset, t = m.hasClass("fixed");
        !t && k >= e + p && (m.addClass("fixed").css("marginTop", p), f.addClass("locked"), y.show(), $("html").removeClass("sticky-header")), t && k < e + p && (m.removeClass("fixed").css("marginTop", 0), f.removeClass("locked"), y.hide(), $("html").addClass("sticky-header")), g && $("#counts").length && k / 4 <= e && ($(".digit").each(function () {
            $(this).spincrement({thousandSeparator: "", duration: 5e3, to: $(this).data("to")})
        }), g = !1)
    })) : (h = !0, $(window).on("load scroll", function () {
        var e = window.pageYOffset, t = $("#counts");
        e < 1 ? $("html").removeClass("sticky-header") : $("html").addClass("sticky-header"), h && t.length && t.offset().top <= e + (window.innerHeight - 100) && ($(".digit").each(function () {
            $(this).spincrement({thousandSeparator: "", duration: 5e3, to: $(this).data("to")})
        }), h = !1)
    })), $(".facults-slider-item .type").ellipsis({
        lines: 2,
        ellipClass: "ellip",
        responsive: !0
    }), $(".facults-slider-item .name").ellipsis({
        lines: 3,
        ellipClass: "ellip",
        responsive: !0
    }), $(".news-actions-item-text").ellipsis({
        lines: 10,
        ellipClass: "ellip",
        responsive: !0
    }), $(".news-sidebar .content-list-item-desc .text").ellipsis({
        lines: 10,
        ellipClass: "ellip",
        responsive: !0
    }), $(document).on("click", ".go-to-top", function () {
        $("html, body").animate({scrollTop: 0}, 500)
    }), $(window).width() < 1025 && $(document).on("click", ".js-open", function (e) {
        e.preventDefault(), $(this).toggleClass("opened").next().slideToggle()
    });
    var C = window.location.hash.replace("-section", "");
    $(".parent-scroll-element").length && $("html, body").animate({scrollTop: $(C).offset().top - $(".header").outerHeight() - 30}, 500)
}), innerWidth > 414 && (window.addEventListener("resize orientationchange", function () {
    heightBlock(".js-height"), heightBlock(".js-height1")
}), window.addEventListener("load", function () {
    heightBlock(".js-height"), heightBlock(".js-height1")
})), window.addEventListener("scroll", function () {
    scrollTopPosition = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop, scrollTopPosition > 300 ? $(".go-to-top").addClass("visible") : $(".go-to-top").removeClass("visible")
}), window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector("body").classList.add("loaded")
    }, 100), setTimeout(function () {
        document.querySelector(".preloader").style.display = "none"
    }, 300)
}), $(document).on("click", ".popover .popover_close", function () {
    $(this).parent().hide(200)
});
var change_title = function () {
    innerWidth <= 600 && $(".fc-widget-content .fc-title").html('<i class="fa fa-info-circle" aria-hidden="true"></i>')
}, minHeight = function () {
    var e = $(".page_wrap");
    $("div").is(".search") && $(e).css("min-height", "400px").addClass("act")
};
document.addEventListener("DOMContentLoaded", function () {
    change_title(), setTimeout(function () {
        minHeight()
    }, 0), window.innerWidth <= 768 && null !== document.querySelector(".lockscreen-inner video") && document.querySelector(".lockscreen-inner video").remove(), window.innerWidth <= 1024 && $(".footer-top div:nth-last-of-type(1) a").removeClass("js-open"), $(window).on("scroll", function () {
        AOS.init()
    }), $("div").is("#map") && ($("#map").length && (
        c = window.innerWidth > 992 ? 36.2786 : 36.2847,
            h = google.maps.MapTypeId.ROADMAP, p = {
            zoom: 16,
            map: document.getElementById("map"),
            center: new google.maps.LatLng(50.0427, c),
            mapTypeId: h,
            scrollwheel: !1,
            mapTypeControlOptions: {mapTypeIds: []}
        }, new google.maps.Map(map, p)), marker = new google.maps.Marker({
        position: {lat: 50.042773, lng: 36.284608},
        map: new google.maps.Map(map, p)
    }))
});

var retina = window.devicePixelRatio > 1 ? true : false;
if (retina) {
    var retinaZoom = document.getElementsByTagName('html');
    retinaZoom[0].classList.add("retina");
}