!function(h) {
    h.fn.Xslider = function(e) {
        var t = {
            affect: "scrollx",
            speed: 1200,
            space: 6e3,
            auto: !0,
            trigger: "mouseover",
            conbox: ".conbox",
            ctag: "a",
            switcher: ".switcher",
            stag: "a",
            current: "cur",
            rand: !1
        };
        t = h.extend({}, t, e);
        var a = 1
          , s = 0
          , n = h(this).find(t.conbox)
          , i = n.find(t.ctag)
          , c = h(this).find(t.switcher).find(t.stag);
        function o() {
            switch (a >= i.length && (a = 0),
            c.removeClass(t.current).eq(a).addClass(t.current),
            t.affect) {
            case "scrollx":
                n.width(i.length * i.width()),
                n.stop().animate({
                    left: -i.width() * a
                }, t.speed);
                break;
            case "scrolly":
                i.css({
                    display: "block"
                }),
                n.stop().animate({
                    top: -i.height() * a + "px"
                }, t.speed);
                break;
            case "fade":
                i.eq(s).stop().animate({
                    opacity: 0
                }, t.speed / 2).css("z-index", 1).end().eq(a).css("z-index", 9).stop().animate({
                    opacity: 1
                }, t.speed / 2);
                break;
            case "none":
                i.hide().eq(a).show()
            }
            s = a,
            a++
        }
        if (t.rand && (a = Math.floor(Math.random() * i.length),
        o()),
        "fade" == t.affect && h.each(i, function(e, t) {
            0 === e ? h(this).css({
                position: "absolute",
                "z-index": 9
            }) : h(this).css({
                position: "absolute",
                "z-index": 1,
                opacity: 0
            })
        }),
        t.auto)
            var r = setInterval(o, t.space);
        function d() {
            clearInterval(r)
        }
        function f() {
            t.auto && (r = setInterval(o, t.space))
        }
        c.bind(t.trigger, function() {
            d(),
            a = h(this).index(),
            o(),
            f()
        }),
        n.hover(d, f)
    }
}(jQuery);
