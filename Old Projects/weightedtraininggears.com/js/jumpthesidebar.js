function jumpTheSideBar(t, e, a, n, i) {
    console.log(t);
  console.log(e);
  console.log(a);
  console.log(n);
  console.log(i);
    function s(t) {
        console.log("checkpoint");
        var n = window.pageYOffset,
            i = parseInt($("body").css("height"));
        (n - a >= r || n + a <= r) && (!1 === t.hasAttribute("data-jump") && n >= e && t.setAttribute("data-jump", "over"), r = n, !0 === t.hasAttribute("data-jump") && n <= e ? t.style.top = e + "px" : (r + p >= i && (r = i - 10 - p), t.style.top = r + "px"))
    }

    function o(t) {
        var n = $("#homepage-title")[0],
            i = parseInt(window.getComputedStyle(n, null).getPropertyValue("height"));
        !0 === t.hasAttribute("data-jump") && r <= a && (t.style.top = e + i + "px")
    }
    var p = parseInt($("#navbar-main-container").css("height")),
        r = window.pageYOffset;
    ! function(t) {
        window.addEventListener("scroll", function() {
            t.style.transition = "all 0.5s 0s", s(t), 1 === n && o(t)
        })
    }(i)
}