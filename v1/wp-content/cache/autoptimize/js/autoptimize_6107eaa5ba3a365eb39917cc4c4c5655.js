window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/cvio.bslthemes.com\/v1\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.3.4"
    }
};
! function(e, a, t) {
    var r, n, o, i, p = a.createElement("canvas"),
        s = p.getContext && p.getContext("2d");

    function c(e, t) {
        var a = String.fromCharCode;
        s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, e), 0, 0);
        var r = p.toDataURL();
        return s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, t), 0, 0), r === p.toDataURL()
    }

    function l(e) {
        if (!s || !s.fillText) return !1;
        switch (s.textBaseline = "top", s.font = "600 32px Arial", e) {
            case "flag":
                return !c([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) && (!c([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !c([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]));
            case "emoji":
                return !c([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340])
        }
        return !1
    }

    function d(e) {
        var t = a.createElement("script");
        t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (i = Array("flag", "emoji"), t.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, o = 0; o < i.length; o++) t.supports[i[o]] = l(i[o]), t.supports.everything = t.supports.everything && t.supports[i[o]], "flag" !== i[o] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[i[o]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() {
        t.DOMReady = !0
    }, t.supports.everything || (n = function() {
        t.readyCallback()
    }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() {
        "complete" === a.readyState && t.readyCallback()
    })), (r = t.source || {}).concatemoji ? d(r.concatemoji) : r.wpemoji && r.twemoji && (d(r.twemoji), d(r.wpemoji)))
}(window, document, window._wpemojiSettings);
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);
var wpcf7 = {
    "apiSettings": {
        "root": "https:\/\/cvio.bslthemes.com\/v1\/wp-json\/contact-form-7\/v1",
        "namespace": "contact-form-7\/v1"
    }
};
(function($) {
    'use strict';
    if (typeof wpcf7 === 'undefined' || wpcf7 === null) {
        return;
    }
    wpcf7 = $.extend({
        cached: 0,
        inputs: []
    }, wpcf7);
    $(function() {
        wpcf7.supportHtml5 = (function() {
            var features = {};
            var input = document.createElement('input');
            features.placeholder = 'placeholder' in input;
            var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
            $.each(inputTypes, function(index, value) {
                input.setAttribute('type', value);
                features[value] = input.type !== 'text';
            });
            return features;
        })();
        $('div.wpcf7 > form').each(function() {
            var $form = $(this);
            wpcf7.initForm($form);
            if (wpcf7.cached) {
                wpcf7.refill($form);
            }
        });
    });
    wpcf7.getId = function(form) {
        return parseInt($('input[name="_wpcf7"]', form).val(), 10);
    };
    wpcf7.initForm = function(form) {
        var $form = $(form);
        $form.submit(function(event) {
            if (!wpcf7.supportHtml5.placeholder) {
                $('[placeholder].placeheld', $form).each(function(i, n) {
                    $(n).val('').removeClass('placeheld');
                });
            }
            if (typeof window.FormData === 'function') {
                wpcf7.submit($form);
                event.preventDefault();
            }
        });
        $('.wpcf7-submit', $form).after('<span class="ajax-loader"></span>');
        wpcf7.toggleSubmit($form);
        $form.on('click', '.wpcf7-acceptance', function() {
            wpcf7.toggleSubmit($form);
        });
        $('.wpcf7-exclusive-checkbox', $form).on('click', 'input:checkbox', function() {
            var name = $(this).attr('name');
            $form.find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
        $('.wpcf7-list-item.has-free-text', $form).each(function() {
            var $freetext = $(':input.wpcf7-free-text', this);
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(':checkbox, :radio', this).is(':checked')) {
                $freetext.prop('disabled', false);
            } else {
                $freetext.prop('disabled', true);
            }
            $wrap.on('change', ':checkbox, :radio', function() {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
        if (!wpcf7.supportHtml5.placeholder) {
            $('[placeholder]', $form).each(function() {
                $(this).val($(this).attr('placeholder'));
                $(this).addClass('placeheld');
                $(this).focus(function() {
                    if ($(this).hasClass('placeheld')) {
                        $(this).val('').removeClass('placeheld');
                    }
                });
                $(this).blur(function() {
                    if ('' === $(this).val()) {
                        $(this).val($(this).attr('placeholder'));
                        $(this).addClass('placeheld');
                    }
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
            $form.find('input.wpcf7-date[type="date"]').each(function() {
                $(this).datepicker({
                    dateFormat: 'yy-mm-dd',
                    minDate: new Date($(this).attr('min')),
                    maxDate: new Date($(this).attr('max'))
                });
            });
        }
        if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
            $form.find('input.wpcf7-number[type="number"]').each(function() {
                $(this).spinner({
                    min: $(this).attr('min'),
                    max: $(this).attr('max'),
                    step: $(this).attr('step')
                });
            });
        }
        $('.wpcf7-character-count', $form).each(function() {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function(target) {
                var $target = $(target);
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $(':input[name="' + name + '"]', $form).each(function() {
                updateCount(this);
                $(this).keyup(function() {
                    updateCount(this);
                });
            });
        });
        $form.on('change', '.wpcf7-validates-as-url', function() {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== val.indexOf('.')) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    wpcf7.submit = function(form) {
        if (typeof window.FormData !== 'function') {
            return;
        }
        var $form = $(form);
        $('.ajax-loader', $form).addClass('is-active');
        wpcf7.clearResponse($form);
        var formData = new FormData($form.get(0));
        var detail = {
            id: $form.closest('div.wpcf7').attr('id'),
            status: 'init',
            inputs: [],
            formData: formData
        };
        $.each($form.serializeArray(), function(i, field) {
            if ('_wpcf7' == field.name) {
                detail.contactFormId = field.value;
            } else if ('_wpcf7_version' == field.name) {
                detail.pluginVersion = field.value;
            } else if ('_wpcf7_locale' == field.name) {
                detail.contactFormLocale = field.value;
            } else if ('_wpcf7_unit_tag' == field.name) {
                detail.unitTag = field.value;
            } else if ('_wpcf7_container_post' == field.name) {
                detail.containerPostId = field.value;
            } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
                var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, '');
                detail.inputs.push({
                    name: owner + '-free-text',
                    value: field.value
                });
            } else if (field.name.match(/^_/)) {} else {
                detail.inputs.push(field);
            }
        });
        wpcf7.triggerEvent($form.closest('div.wpcf7'), 'beforesubmit', detail);
        var ajaxSuccess = function(data, status, xhr, $form) {
            detail.id = $(data.into).attr('id');
            detail.status = data.status;
            detail.apiResponse = data;
            var $message = $('.wpcf7-response-output', $form);
            switch (data.status) {
                case 'validation_failed':
                    $.each(data.invalidFields, function(i, n) {
                        $(n.into, $form).each(function() {
                            wpcf7.notValidTip(this, n.message);
                            $('.wpcf7-form-control', this).addClass('wpcf7-not-valid');
                            $('[aria-invalid]', this).attr('aria-invalid', 'true');
                        });
                    });
                    $message.addClass('wpcf7-validation-errors');
                    $form.addClass('invalid');
                    wpcf7.triggerEvent(data.into, 'invalid', detail);
                    break;
                case 'acceptance_missing':
                    $message.addClass('wpcf7-acceptance-missing');
                    $form.addClass('unaccepted');
                    wpcf7.triggerEvent(data.into, 'unaccepted', detail);
                    break;
                case 'spam':
                    $message.addClass('wpcf7-spam-blocked');
                    $form.addClass('spam');
                    wpcf7.triggerEvent(data.into, 'spam', detail);
                    break;
                case 'aborted':
                    $message.addClass('wpcf7-aborted');
                    $form.addClass('aborted');
                    wpcf7.triggerEvent(data.into, 'aborted', detail);
                    break;
                case 'mail_sent':
                    $message.addClass('wpcf7-mail-sent-ok');
                    $form.addClass('sent');
                    wpcf7.triggerEvent(data.into, 'mailsent', detail);
                    break;
                case 'mail_failed':
                    $message.addClass('wpcf7-mail-sent-ng');
                    $form.addClass('failed');
                    wpcf7.triggerEvent(data.into, 'mailfailed', detail);
                    break;
                default:
                    var customStatusClass = 'custom-' +
                        data.status.replace(/[^0-9a-z]+/i, '-');
                    $message.addClass('wpcf7-' + customStatusClass);
                    $form.addClass(customStatusClass);
            }
            wpcf7.refill($form, data);
            wpcf7.triggerEvent(data.into, 'submit', detail);
            if ('mail_sent' == data.status) {
                $form.each(function() {
                    this.reset();
                });
                wpcf7.toggleSubmit($form);
            }
            if (!wpcf7.supportHtml5.placeholder) {
                $form.find('[placeholder].placeheld').each(function(i, n) {
                    $(n).val($(n).attr('placeholder'));
                });
            }
            $message.html('').append(data.message).slideDown('fast');
            $message.attr('role', 'alert');
            $('.screen-reader-response', $form.closest('.wpcf7')).each(function() {
                var $response = $(this);
                $response.html('').attr('role', '').append(data.message);
                if (data.invalidFields) {
                    var $invalids = $('<ul></ul>');
                    $.each(data.invalidFields, function(i, n) {
                        if (n.idref) {
                            var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                        } else {
                            var $li = $('<li></li>').append(n.message);
                        }
                        $invalids.append($li);
                    });
                    $response.append($invalids);
                }
                $response.attr('role', 'alert').focus();
            });
        };
        $.ajax({
            type: 'POST',
            url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/feedback'),
            data: formData,
            dataType: 'json',
            processData: false,
            contentType: false
        }).done(function(data, status, xhr) {
            ajaxSuccess(data, status, xhr, $form);
            $('.ajax-loader', $form).removeClass('is-active');
        }).fail(function(xhr, status, error) {
            var $e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after($e);
        });
    };
    wpcf7.triggerEvent = function(target, name, detail) {
        var $target = $(target);
        var event = new CustomEvent('wpcf7' + name, {
            bubbles: true,
            detail: detail
        });
        $target.get(0).dispatchEvent(event);
        $target.trigger('wpcf7:' + name, detail);
        $target.trigger(name + '.wpcf7', detail);
    };
    wpcf7.toggleSubmit = function(form, state) {
        var $form = $(form);
        var $submit = $('input:submit', $form);
        if (typeof state !== 'undefined') {
            $submit.prop('disabled', !state);
            return;
        }
        if ($form.hasClass('wpcf7-acceptance-as-validation')) {
            return;
        }
        $submit.prop('disabled', false);
        $('.wpcf7-acceptance', $form).each(function() {
            var $span = $(this);
            var $input = $('input:checkbox', $span);
            if (!$span.hasClass('optional')) {
                if ($span.hasClass('invert') && $input.is(':checked') || !$span.hasClass('invert') && !$input.is(':checked')) {
                    $submit.prop('disabled', true);
                    return false;
                }
            }
        });
    };
    wpcf7.notValidTip = function(target, message) {
        var $target = $(target);
        $('.wpcf7-not-valid-tip', $target).remove();
        $('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);
        if ($target.is('.use-floating-validation-tip *')) {
            var fadeOut = function(target) {
                $(target).not(':hidden').animate({
                    opacity: 0
                }, 'fast', function() {
                    $(this).css({
                        'z-index': -100
                    });
                });
            };
            $target.on('mouseover', '.wpcf7-not-valid-tip', function() {
                fadeOut(this);
            });
            $target.on('focus', ':input', function() {
                fadeOut($('.wpcf7-not-valid-tip', $target));
            });
        }
    };
    wpcf7.refill = function(form, data) {
        var $form = $(form);
        var refillCaptcha = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                $form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        };
        var refillQuiz = function($form, items) {
            $.each(items, function(i, n) {
                $form.find(':input[name="' + i + '"]').val('');
                $form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                $form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        };
        if (typeof data === 'undefined') {
            $.ajax({
                type: 'GET',
                url: wpcf7.apiSettings.getRoute('/contact-forms/' + wpcf7.getId($form) + '/refill'),
                beforeSend: function(xhr) {
                    var nonce = $form.find(':input[name="_wpnonce"]').val();
                    if (nonce) {
                        xhr.setRequestHeader('X-WP-Nonce', nonce);
                    }
                },
                dataType: 'json'
            }).done(function(data, status, xhr) {
                if (data.captcha) {
                    refillCaptcha($form, data.captcha);
                }
                if (data.quiz) {
                    refillQuiz($form, data.quiz);
                }
            });
        } else {
            if (data.captcha) {
                refillCaptcha($form, data.captcha);
            }
            if (data.quiz) {
                refillQuiz($form, data.quiz);
            }
        }
    };
    wpcf7.clearResponse = function(form) {
        var $form = $(form);
        $form.removeClass('invalid spam sent failed');
        $form.siblings('.screen-reader-response').html('').attr('role', '');
        $('.wpcf7-not-valid-tip', $form).remove();
        $('[aria-invalid]', $form).attr('aria-invalid', 'false');
        $('.wpcf7-form-control', $form).removeClass('wpcf7-not-valid');
        $('.wpcf7-response-output', $form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked');
    };
    wpcf7.apiSettings.getRoute = function(path) {
        var url = wpcf7.apiSettings.root;
        url = url.replace(wpcf7.apiSettings.namespace, wpcf7.apiSettings.namespace + path);
        return url;
    };
})(jQuery);
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
})();
(function($) {
    'use strict';
    var container, button, menu, links, i, len;
    container = document.getElementById('site-navigation');
    if (!container) {
        return;
    }
    button = container.getElementsByTagName('button')[0];
    if ('undefined' === typeof button) {
        return;
    }
    menu = container.getElementsByTagName('ul')[0];
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }
    menu.setAttribute('aria-expanded', 'false');
    if (-1 === menu.className.indexOf('nav-menu')) {
        menu.className += ' nav-menu';
    }
    button.onclick = function() {
        if (-1 !== container.className.indexOf('toggled')) {
            container.className = container.className.replace(' toggled', '');
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-expanded', 'false');
        } else {
            container.className += ' toggled';
            button.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-expanded', 'true');
        }
    };
    links = menu.getElementsByTagName('a');
    for (i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener('focus', toggleFocus, true);
        links[i].addEventListener('blur', toggleFocus, true);
    }

    function toggleFocus() {
        var self = this;
        while (-1 === self.className.indexOf('nav-menu')) {
            if ('li' === self.tagName.toLowerCase()) {
                if (-1 !== self.className.indexOf('focus')) {
                    self.className = self.className.replace(' focus', '');
                } else {
                    self.className += ' focus';
                }
            }
            self = self.parentElement;
        }
    }
    (function(container) {
        var touchStartFn, i, parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');
        if ('ontouchstart' in window) {
            touchStartFn = function(e) {
                var menuItem = this.parentNode,
                    i;
                if (!menuItem.classList.contains('focus')) {
                    e.preventDefault();
                    for (i = 0; i < menuItem.parentNode.children.length; ++i) {
                        if (menuItem === menuItem.parentNode.children[i]) {
                            continue;
                        }
                        menuItem.parentNode.children[i].classList.remove('focus');
                    }
                    menuItem.classList.add('focus');
                } else {
                    menuItem.classList.remove('focus');
                }
            };
            for (i = 0; i < parentLink.length; ++i) {
                parentLink[i].addEventListener('touchstart', touchStartFn, false);
            }
        }
    }(container));
})();
(function($) {
    'use strict';
    var isIe = /(trident|msie)/i.test(navigator.userAgent);
    if (isIe && document.getElementById && window.addEventListener) {
        window.addEventListener('hashchange', function() {
            var id = location.hash.substring(1),
                element;
            if (!(/^[A-z0-9_-]+$/.test(id))) {
                return;
            }
            element = document.getElementById(id);
            if (element) {
                if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }, false);
    }
})();;
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(window.jQuery || window.Zepto);
    }
}(function($) {
    var CLOSE_EVENT = 'Close',
        BEFORE_CLOSE_EVENT = 'BeforeClose',
        AFTER_CLOSE_EVENT = 'AfterClose',
        BEFORE_APPEND_EVENT = 'BeforeAppend',
        MARKUP_PARSE_EVENT = 'MarkupParse',
        OPEN_EVENT = 'Open',
        CHANGE_EVENT = 'Change',
        NS = 'mfp',
        EVENT_NS = '.' + NS,
        READY_CLASS = 'mfp-ready',
        REMOVING_CLASS = 'mfp-removing',
        PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
    var mfp, MagnificPopup = function() {},
        _isJQ = !!(window.jQuery),
        _prevStatus, _window = $(window),
        _document, _prevContentType, _wrapClasses, _currPopupType;
    var _mfpOn = function(name, f) {
            mfp.ev.on(NS + name + EVENT_NS, f);
        },
        _getEl = function(className, appendTo, html, raw) {
            var el = document.createElement('div');
            el.className = 'mfp-' + className;
            if (html) {
                el.innerHTML = html;
            }
            if (!raw) {
                el = $(el);
                if (appendTo) {
                    el.appendTo(appendTo);
                }
            } else if (appendTo) {
                appendTo.appendChild(el);
            }
            return el;
        },
        _mfpTrigger = function(e, data) {
            mfp.ev.triggerHandler(NS + e, data);
            if (mfp.st.callbacks) {
                e = e.charAt(0).toLowerCase() + e.slice(1);
                if (mfp.st.callbacks[e]) {
                    mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
                }
            }
        },
        _getCloseBtn = function(type) {
            if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
                _currPopupType = type;
            }
            return mfp.currTemplate.closeBtn;
        },
        _checkInstance = function() {
            if (!$.magnificPopup.instance) {
                mfp = new MagnificPopup();
                mfp.init();
                $.magnificPopup.instance = mfp;
            }
        },
        supportsTransitions = function() {
            var s = document.createElement('p').style,
                v = ['ms', 'O', 'Moz', 'Webkit'];
            if (s['transition'] !== undefined) {
                return true;
            }
            while (v.length) {
                if (v.pop() + 'Transition' in s) {
                    return true;
                }
            }
            return false;
        };
    MagnificPopup.prototype = {
        constructor: MagnificPopup,
        init: function() {
            var appVersion = navigator.appVersion;
            mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
            mfp.isAndroid = (/android/gi).test(appVersion);
            mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
            mfp.supportsTransition = supportsTransitions();
            mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
            _document = $(document);
            mfp.popupsCache = {};
        },
        open: function(data) {
            var i;
            if (data.isObj === false) {
                mfp.items = data.items.toArray();
                mfp.index = 0;
                var items = data.items,
                    item;
                for (i = 0; i < items.length; i++) {
                    item = items[i];
                    if (item.parsed) {
                        item = item.el[0];
                    }
                    if (item === data.el[0]) {
                        mfp.index = i;
                        break;
                    }
                }
            } else {
                mfp.items = $.isArray(data.items) ? data.items : [data.items];
                mfp.index = data.index || 0;
            }
            if (mfp.isOpen) {
                mfp.updateItemHTML();
                return;
            }
            mfp.types = [];
            _wrapClasses = '';
            if (data.mainEl && data.mainEl.length) {
                mfp.ev = data.mainEl.eq(0);
            } else {
                mfp.ev = _document;
            }
            if (data.key) {
                if (!mfp.popupsCache[data.key]) {
                    mfp.popupsCache[data.key] = {};
                }
                mfp.currTemplate = mfp.popupsCache[data.key];
            } else {
                mfp.currTemplate = {};
            }
            mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
            mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
            if (mfp.st.modal) {
                mfp.st.closeOnContentClick = false;
                mfp.st.closeOnBgClick = false;
                mfp.st.showCloseBtn = false;
                mfp.st.enableEscapeKey = false;
            }
            if (!mfp.bgOverlay) {
                mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
                    mfp.close();
                });
                mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
                    if (mfp._checkIfClose(e.target)) {
                        mfp.close();
                    }
                });
                mfp.container = _getEl('container', mfp.wrap);
            }
            mfp.contentContainer = _getEl('content');
            if (mfp.st.preloader) {
                mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
            }
            var modules = $.magnificPopup.modules;
            for (i = 0; i < modules.length; i++) {
                var n = modules[i];
                n = n.charAt(0).toUpperCase() + n.slice(1);
                mfp['init' + n].call(mfp);
            }
            _mfpTrigger('BeforeOpen');
            if (mfp.st.showCloseBtn) {
                if (!mfp.st.closeBtnInside) {
                    mfp.wrap.append(_getCloseBtn());
                } else {
                    _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                        values.close_replaceWith = _getCloseBtn(item.type);
                    });
                    _wrapClasses += ' mfp-close-btn-in';
                }
            }
            if (mfp.st.alignTop) {
                _wrapClasses += ' mfp-align-top';
            }
            if (mfp.fixedContentPos) {
                mfp.wrap.css({
                    overflow: mfp.st.overflowY,
                    overflowX: 'hidden',
                    overflowY: mfp.st.overflowY
                });
            } else {
                mfp.wrap.css({
                    top: _window.scrollTop(),
                    position: 'absolute'
                });
            }
            if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
                mfp.bgOverlay.css({
                    height: _document.height(),
                    position: 'absolute'
                });
            }
            if (mfp.st.enableEscapeKey) {
                _document.on('keyup' + EVENT_NS, function(e) {
                    if (e.keyCode === 27) {
                        mfp.close();
                    }
                });
            }
            _window.on('resize' + EVENT_NS, function() {
                mfp.updateSize();
            });
            if (!mfp.st.closeOnContentClick) {
                _wrapClasses += ' mfp-auto-cursor';
            }
            if (_wrapClasses)
                mfp.wrap.addClass(_wrapClasses);
            var windowHeight = mfp.wH = _window.height();
            var windowStyles = {};
            if (mfp.fixedContentPos) {
                if (mfp._hasScrollBar(windowHeight)) {
                    var s = mfp._getScrollbarSize();
                    if (s) {
                        windowStyles.marginRight = s;
                    }
                }
            }
            if (mfp.fixedContentPos) {
                if (!mfp.isIE7) {
                    windowStyles.overflow = 'hidden';
                } else {
                    $('body, html').css('overflow', 'hidden');
                }
            }
            var classesToadd = mfp.st.mainClass;
            if (mfp.isIE7) {
                classesToadd += ' mfp-ie7';
            }
            if (classesToadd) {
                mfp._addClassToMFP(classesToadd);
            }
            mfp.updateItemHTML();
            _mfpTrigger('BuildControls');
            $('html').css(windowStyles);
            mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));
            mfp._lastFocusedEl = document.activeElement;
            setTimeout(function() {
                if (mfp.content) {
                    mfp._addClassToMFP(READY_CLASS);
                    mfp._setFocus();
                } else {
                    mfp.bgOverlay.addClass(READY_CLASS);
                }
                _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
            }, 16);
            mfp.isOpen = true;
            mfp.updateSize(windowHeight);
            _mfpTrigger(OPEN_EVENT);
            return data;
        },
        close: function() {
            if (!mfp.isOpen) return;
            _mfpTrigger(BEFORE_CLOSE_EVENT);
            mfp.isOpen = false;
            if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                mfp._addClassToMFP(REMOVING_CLASS);
                setTimeout(function() {
                    mfp._close();
                }, mfp.st.removalDelay);
            } else {
                mfp._close();
            }
        },
        _close: function() {
            _mfpTrigger(CLOSE_EVENT);
            var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
            mfp.bgOverlay.detach();
            mfp.wrap.detach();
            mfp.container.empty();
            if (mfp.st.mainClass) {
                classesToRemove += mfp.st.mainClass + ' ';
            }
            mfp._removeClassFromMFP(classesToRemove);
            if (mfp.fixedContentPos) {
                var windowStyles = {
                    marginRight: ''
                };
                if (mfp.isIE7) {
                    $('body, html').css('overflow', '');
                } else {
                    windowStyles.overflow = '';
                }
                $('html').css(windowStyles);
            }
            _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
            mfp.ev.off(EVENT_NS);
            mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
            mfp.bgOverlay.attr('class', 'mfp-bg');
            mfp.container.attr('class', 'mfp-container');
            if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                if (mfp.currTemplate.closeBtn)
                    mfp.currTemplate.closeBtn.detach();
            }
            if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
                $(mfp._lastFocusedEl).focus();
            }
            mfp.currItem = null;
            mfp.content = null;
            mfp.currTemplate = null;
            mfp.prevHeight = 0;
            _mfpTrigger(AFTER_CLOSE_EVENT);
        },
        updateSize: function(winHeight) {
            if (mfp.isIOS) {
                var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                var height = window.innerHeight * zoomLevel;
                mfp.wrap.css('height', height);
                mfp.wH = height;
            } else {
                mfp.wH = winHeight || _window.height();
            }
            if (!mfp.fixedContentPos) {
                mfp.wrap.css('height', mfp.wH);
            }
            _mfpTrigger('Resize');
        },
        updateItemHTML: function() {
            var item = mfp.items[mfp.index];
            mfp.contentContainer.detach();
            if (mfp.content)
                mfp.content.detach();
            if (!item.parsed) {
                item = mfp.parseEl(mfp.index);
            }
            var type = item.type;
            _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
            mfp.currItem = item;
            if (!mfp.currTemplate[type]) {
                var markup = mfp.st[type] ? mfp.st[type].markup : false;
                _mfpTrigger('FirstMarkupParse', markup);
                if (markup) {
                    mfp.currTemplate[type] = $(markup);
                } else {
                    mfp.currTemplate[type] = true;
                }
            }
            if (_prevContentType && _prevContentType !== item.type) {
                mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
            }
            var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
            mfp.appendContent(newContent, type);
            item.preloaded = true;
            _mfpTrigger(CHANGE_EVENT, item);
            _prevContentType = item.type;
            mfp.container.prepend(mfp.contentContainer);
            _mfpTrigger('AfterChange');
        },
        appendContent: function(newContent, type) {
            mfp.content = newContent;
            if (newContent) {
                if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                    if (!mfp.content.find('.mfp-close').length) {
                        mfp.content.append(_getCloseBtn());
                    }
                } else {
                    mfp.content = newContent;
                }
            } else {
                mfp.content = '';
            }
            _mfpTrigger(BEFORE_APPEND_EVENT);
            mfp.container.addClass('mfp-' + type + '-holder');
            mfp.contentContainer.append(mfp.content);
        },
        parseEl: function(index) {
            var item = mfp.items[index],
                type;
            if (item.tagName) {
                item = {
                    el: $(item)
                };
            } else {
                type = item.type;
                item = {
                    data: item,
                    src: item.src
                };
            }
            if (item.el) {
                var types = mfp.types;
                for (var i = 0; i < types.length; i++) {
                    if (item.el.hasClass('mfp-' + types[i])) {
                        type = types[i];
                        break;
                    }
                }
                item.src = item.el.attr('data-mfp-src');
                if (!item.src) {
                    item.src = item.el.attr('href');
                }
            }
            item.type = type || mfp.st.type || 'inline';
            item.index = index;
            item.parsed = true;
            mfp.items[index] = item;
            _mfpTrigger('ElementParse', item);
            return mfp.items[index];
        },
        addGroup: function(el, options) {
            var eHandler = function(e) {
                e.mfpEl = this;
                mfp._openClick(e, el, options);
            };
            if (!options) {
                options = {};
            }
            var eName = 'click.magnificPopup';
            options.mainEl = el;
            if (options.items) {
                options.isObj = true;
                el.off(eName).on(eName, eHandler);
            } else {
                options.isObj = false;
                if (options.delegate) {
                    el.off(eName).on(eName, options.delegate, eHandler);
                } else {
                    options.items = el;
                    el.off(eName).on(eName, eHandler);
                }
            }
        },
        _openClick: function(e, el, options) {
            var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
            if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) {
                return;
            }
            var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
            if (disableOn) {
                if ($.isFunction(disableOn)) {
                    if (!disableOn.call(mfp)) {
                        return true;
                    }
                } else {
                    if (_window.width() < disableOn) {
                        return true;
                    }
                }
            }
            if (e.type) {
                e.preventDefault();
                if (mfp.isOpen) {
                    e.stopPropagation();
                }
            }
            options.el = $(e.mfpEl);
            if (options.delegate) {
                options.items = el.find(options.delegate);
            }
            mfp.open(options);
        },
        updateStatus: function(status, text) {
            if (mfp.preloader) {
                if (_prevStatus !== status) {
                    mfp.container.removeClass('mfp-s-' + _prevStatus);
                }
                if (!text && status === 'loading') {
                    text = mfp.st.tLoading;
                }
                var data = {
                    status: status,
                    text: text
                };
                _mfpTrigger('UpdateStatus', data);
                status = data.status;
                text = data.text;
                mfp.preloader.html(text);
                mfp.preloader.find('a').on('click', function(e) {
                    e.stopImmediatePropagation();
                });
                mfp.container.addClass('mfp-s-' + status);
                _prevStatus = status;
            }
        },
        _checkIfClose: function(target) {
            if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                return;
            }
            var closeOnContent = mfp.st.closeOnContentClick;
            var closeOnBg = mfp.st.closeOnBgClick;
            if (closeOnContent && closeOnBg) {
                return true;
            } else {
                if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
                    return true;
                }
                if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
                    if (closeOnBg) {
                        if ($.contains(document, target)) {
                            return true;
                        }
                    }
                } else if (closeOnContent) {
                    return true;
                }
            }
            return false;
        },
        _addClassToMFP: function(cName) {
            mfp.bgOverlay.addClass(cName);
            mfp.wrap.addClass(cName);
        },
        _removeClassFromMFP: function(cName) {
            this.bgOverlay.removeClass(cName);
            mfp.wrap.removeClass(cName);
        },
        _hasScrollBar: function(winHeight) {
            return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
        },
        _setFocus: function() {
            (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
        },
        _onFocusIn: function(e) {
            if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                mfp._setFocus();
                return false;
            }
        },
        _parseMarkup: function(template, values, item) {
            var arr;
            if (item.data) {
                values = $.extend(item.data, values);
            }
            _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
            $.each(values, function(key, value) {
                if (value === undefined || value === false) {
                    return true;
                }
                arr = key.split('_');
                if (arr.length > 1) {
                    var el = template.find(EVENT_NS + '-' + arr[0]);
                    if (el.length > 0) {
                        var attr = arr[1];
                        if (attr === 'replaceWith') {
                            if (el[0] !== value[0]) {
                                el.replaceWith(value);
                            }
                        } else if (attr === 'img') {
                            if (el.is('img')) {
                                el.attr('src', value);
                            } else {
                                el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class')));
                            }
                        } else {
                            el.attr(arr[1], value);
                        }
                    }
                } else {
                    template.find(EVENT_NS + '-' + key).html(value);
                }
            });
        },
        _getScrollbarSize: function() {
            if (mfp.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return mfp.scrollbarSize;
        }
    };
    $.magnificPopup = {
        instance: null,
        proto: MagnificPopup.prototype,
        modules: [],
        open: function(options, index) {
            _checkInstance();
            if (!options) {
                options = {};
            } else {
                options = $.extend(true, {}, options);
            }
            options.isObj = true;
            options.index = index || 0;
            return this.instance.open(options);
        },
        close: function() {
            return $.magnificPopup.instance && $.magnificPopup.instance.close();
        },
        registerModule: function(name, module) {
            if (module.options) {
                $.magnificPopup.defaults[name] = module.options;
            }
            $.extend(this.proto, module.proto);
            this.modules.push(name);
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: false,
            mainClass: '',
            preloader: true,
            focus: '',
            closeOnContentClick: false,
            closeOnBgClick: true,
            closeBtnInside: true,
            showCloseBtn: true,
            enableEscapeKey: true,
            modal: false,
            alignTop: false,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: 'auto',
            fixedBgPos: 'auto',
            overflowY: 'auto',
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: 'Close (Esc)',
            tLoading: 'Loading...',
            autoFocusLast: true
        }
    };
    $.fn.magnificPopup = function(options) {
        _checkInstance();
        var jqEl = $(this);
        if (typeof options === "string") {
            if (options === 'open') {
                var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                    index = parseInt(arguments[1], 10) || 0;
                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({
                    mfpEl: items
                }, jqEl, itemOpts);
            } else {
                if (mfp.isOpen)
                    mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            options = $.extend(true, {}, options);
            if (_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }
            mfp.addGroup(jqEl, options);
        }
        return jqEl;
    };
    var INLINE_NS = 'inline',
        _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
            if (_lastInlineElement) {
                _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
                _lastInlineElement = null;
            }
        };
    $.magnificPopup.registerModule(INLINE_NS, {
        options: {
            hiddenClass: 'hide',
            markup: '',
            tNotFound: 'Content not found'
        },
        proto: {
            initInline: function() {
                mfp.types.push(INLINE_NS);
                _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
                    _putInlineElementsBack();
                });
            },
            getInline: function(item, template) {
                _putInlineElementsBack();
                if (item.src) {
                    var inlineSt = mfp.st.inline,
                        el = $(item.src);
                    if (el.length) {
                        var parent = el[0].parentNode;
                        if (parent && parent.tagName) {
                            if (!_inlinePlaceholder) {
                                _hiddenClass = inlineSt.hiddenClass;
                                _inlinePlaceholder = _getEl(_hiddenClass);
                                _hiddenClass = 'mfp-' + _hiddenClass;
                            }
                            _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                        }
                        mfp.updateStatus('ready');
                    } else {
                        mfp.updateStatus('error', inlineSt.tNotFound);
                        el = $('<div>');
                    }
                    item.inlineElement = el;
                    return el;
                }
                mfp.updateStatus('ready');
                mfp._parseMarkup(template, {}, item);
                return template;
            }
        }
    });
    var AJAX_NS = 'ajax',
        _ajaxCur, _removeAjaxCursor = function() {
            if (_ajaxCur) {
                $(document.body).removeClass(_ajaxCur);
            }
        },
        _destroyAjaxRequest = function() {
            _removeAjaxCursor();
            if (mfp.req) {
                mfp.req.abort();
            }
        };
    $.magnificPopup.registerModule(AJAX_NS, {
        options: {
            settings: null,
            cursor: 'mfp-ajax-cur',
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                mfp.types.push(AJAX_NS);
                _ajaxCur = mfp.st.ajax.cursor;
                _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
            },
            getAjax: function(item) {
                if (_ajaxCur) {
                    $(document.body).addClass(_ajaxCur);
                }
                mfp.updateStatus('loading');
                var opts = $.extend({
                    url: item.src,
                    success: function(data, textStatus, jqXHR) {
                        var temp = {
                            data: data,
                            xhr: jqXHR
                        };
                        _mfpTrigger('ParseAjax', temp);
                        mfp.appendContent($(temp.data), AJAX_NS);
                        item.finished = true;
                        _removeAjaxCursor();
                        mfp._setFocus();
                        setTimeout(function() {
                            mfp.wrap.addClass(READY_CLASS);
                        }, 16);
                        mfp.updateStatus('ready');
                        _mfpTrigger('AjaxContentAdded');
                    },
                    error: function() {
                        _removeAjaxCursor();
                        item.finished = item.loadError = true;
                        mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                    }
                }, mfp.st.ajax.settings);
                mfp.req = $.ajax(opts);
                return '';
            }
        }
    });
    var _imgInterval, _getTitle = function(item) {
        if (item.data && item.data.title !== undefined)
            return item.data.title;
        var src = mfp.st.image.titleSrc;
        if (src) {
            if ($.isFunction(src)) {
                return src.call(mfp, item);
            } else if (item.el) {
                return item.el.attr(src) || '';
            }
        }
        return '';
    };
    $.magnificPopup.registerModule('image', {
        options: {
            markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>',
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var imgSt = mfp.st.image,
                    ns = '.image';
                mfp.types.push('image');
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (mfp.currItem.type === 'image' && imgSt.cursor) {
                        $(document.body).addClass(imgSt.cursor);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (imgSt.cursor) {
                        $(document.body).removeClass(imgSt.cursor);
                    }
                    _window.off('resize' + EVENT_NS);
                });
                _mfpOn('Resize' + ns, mfp.resizeImage);
                if (mfp.isLowIE) {
                    _mfpOn('AfterChange', mfp.resizeImage);
                }
            },
            resizeImage: function() {
                var item = mfp.currItem;
                if (!item || !item.img) return;
                if (mfp.st.image.verticalFit) {
                    var decr = 0;
                    if (mfp.isLowIE) {
                        decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
                    }
                    item.img.css('max-height', mfp.wH - decr);
                }
            },
            _onImageHasSize: function(item) {
                if (item.img) {
                    item.hasSize = true;
                    if (_imgInterval) {
                        clearInterval(_imgInterval);
                    }
                    item.isCheckingImgSize = false;
                    _mfpTrigger('ImageHasSize', item);
                    if (item.imgHidden) {
                        if (mfp.content)
                            mfp.content.removeClass('mfp-loading');
                        item.imgHidden = false;
                    }
                }
            },
            findImageSize: function(item) {
                var counter = 0,
                    img = item.img[0],
                    mfpSetInterval = function(delay) {
                        if (_imgInterval) {
                            clearInterval(_imgInterval);
                        }
                        _imgInterval = setInterval(function() {
                            if (img.naturalWidth > 0) {
                                mfp._onImageHasSize(item);
                                return;
                            }
                            if (counter > 200) {
                                clearInterval(_imgInterval);
                            }
                            counter++;
                            if (counter === 3) {
                                mfpSetInterval(10);
                            } else if (counter === 40) {
                                mfpSetInterval(50);
                            } else if (counter === 100) {
                                mfpSetInterval(500);
                            }
                        }, delay);
                    };
                mfpSetInterval(1);
            },
            getImage: function(item, template) {
                var guard = 0,
                    onLoadComplete = function() {
                        if (item) {
                            if (item.img[0].complete) {
                                item.img.off('.mfploader');
                                if (item === mfp.currItem) {
                                    mfp._onImageHasSize(item);
                                    mfp.updateStatus('ready');
                                }
                                item.hasSize = true;
                                item.loaded = true;
                                _mfpTrigger('ImageLoadComplete');
                            } else {
                                guard++;
                                if (guard < 200) {
                                    setTimeout(onLoadComplete, 100);
                                } else {
                                    onLoadError();
                                }
                            }
                        }
                    },
                    onLoadError = function() {
                        if (item) {
                            item.img.off('.mfploader');
                            if (item === mfp.currItem) {
                                mfp._onImageHasSize(item);
                                mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                            }
                            item.hasSize = true;
                            item.loaded = true;
                            item.loadError = true;
                        }
                    },
                    imgSt = mfp.st.image;
                var el = template.find('.mfp-img');
                if (el.length) {
                    var img = document.createElement('img');
                    img.className = 'mfp-img';
                    if (item.el && item.el.find('img').length) {
                        img.alt = item.el.find('img').attr('alt');
                    }
                    item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                    img.src = item.src;
                    if (el.is('img')) {
                        item.img = item.img.clone();
                    }
                    img = item.img[0];
                    if (img.naturalWidth > 0) {
                        item.hasSize = true;
                    } else if (!img.width) {
                        item.hasSize = false;
                    }
                }
                mfp._parseMarkup(template, {
                    title: _getTitle(item),
                    img_replaceWith: item.img
                }, item);
                mfp.resizeImage();
                if (item.hasSize) {
                    if (_imgInterval) clearInterval(_imgInterval);
                    if (item.loadError) {
                        template.addClass('mfp-loading');
                        mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                    } else {
                        template.removeClass('mfp-loading');
                        mfp.updateStatus('ready');
                    }
                    return template;
                }
                mfp.updateStatus('loading');
                item.loading = true;
                if (!item.hasSize) {
                    item.imgHidden = true;
                    template.addClass('mfp-loading');
                    mfp.findImageSize(item);
                }
                return template;
            }
        }
    });
    var hasMozTransform, getHasMozTransform = function() {
        if (hasMozTransform === undefined) {
            hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
        }
        return hasMozTransform;
    };
    $.magnificPopup.registerModule('zoom', {
        options: {
            enabled: false,
            easing: 'ease-in-out',
            duration: 300,
            opener: function(element) {
                return element.is('img') ? element : element.find('img');
            }
        },
        proto: {
            initZoom: function() {
                var zoomSt = mfp.st.zoom,
                    ns = '.zoom',
                    image;
                if (!zoomSt.enabled || !mfp.supportsTransition) {
                    return;
                }
                var duration = zoomSt.duration,
                    getElToAnimate = function(image) {
                        var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                            transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
                            cssObj = {
                                position: 'fixed',
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                '-webkit-backface-visibility': 'hidden'
                            },
                            t = 'transition';
                        cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
                        newImg.css(cssObj);
                        return newImg;
                    },
                    showMainContent = function() {
                        mfp.content.css('visibility', 'visible');
                    },
                    openTimeout, animatedImg;
                _mfpOn('BuildControls' + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.content.css('visibility', 'hidden');
                        image = mfp._getItemToZoom();
                        if (!image) {
                            showMainContent();
                            return;
                        }
                        animatedImg = getElToAnimate(image);
                        animatedImg.css(mfp._getOffset());
                        mfp.wrap.append(animatedImg);
                        openTimeout = setTimeout(function() {
                            animatedImg.css(mfp._getOffset(true));
                            openTimeout = setTimeout(function() {
                                showMainContent();
                                setTimeout(function() {
                                    animatedImg.remove();
                                    image = animatedImg = null;
                                    _mfpTrigger('ZoomAnimationEnded');
                                }, 16);
                            }, duration);
                        }, 16);
                    }
                });
                _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        clearTimeout(openTimeout);
                        mfp.st.removalDelay = duration;
                        if (!image) {
                            image = mfp._getItemToZoom();
                            if (!image) {
                                return;
                            }
                            animatedImg = getElToAnimate(image);
                        }
                        animatedImg.css(mfp._getOffset(true));
                        mfp.wrap.append(animatedImg);
                        mfp.content.css('visibility', 'hidden');
                        setTimeout(function() {
                            animatedImg.css(mfp._getOffset());
                        }, 16);
                    }
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    if (mfp._allowZoom()) {
                        showMainContent();
                        if (animatedImg) {
                            animatedImg.remove();
                        }
                        image = null;
                    }
                });
            },
            _allowZoom: function() {
                return mfp.currItem.type === 'image';
            },
            _getItemToZoom: function() {
                if (mfp.currItem.hasSize) {
                    return mfp.currItem.img;
                } else {
                    return false;
                }
            },
            _getOffset: function(isLarge) {
                var el;
                if (isLarge) {
                    el = mfp.currItem.img;
                } else {
                    el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                }
                var offset = el.offset();
                var paddingTop = parseInt(el.css('padding-top'), 10);
                var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                offset.top -= ($(window).scrollTop() - paddingTop);
                var obj = {
                    width: el.width(),
                    height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                };
                if (getHasMozTransform()) {
                    obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                } else {
                    obj.left = offset.left;
                    obj.top = offset.top;
                }
                return obj;
            }
        }
    });
    var IFRAME_NS = 'iframe',
        _emptyPage = '//about:blank',
        _fixIframeBugs = function(isShowing) {
            if (mfp.currTemplate[IFRAME_NS]) {
                var el = mfp.currTemplate[IFRAME_NS].find('iframe');
                if (el.length) {
                    if (!isShowing) {
                        el[0].src = _emptyPage;
                    }
                    if (mfp.isIE8) {
                        el.css('display', isShowing ? 'block' : 'none');
                    }
                }
            }
        };
    $.magnificPopup.registerModule(IFRAME_NS, {
        options: {
            markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>',
            srcAction: 'iframe_src',
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        },
        proto: {
            initIframe: function() {
                mfp.types.push(IFRAME_NS);
                _mfpOn('BeforeChange', function(e, prevType, newType) {
                    if (prevType !== newType) {
                        if (prevType === IFRAME_NS) {
                            _fixIframeBugs();
                        } else if (newType === IFRAME_NS) {
                            _fixIframeBugs(true);
                        }
                    }
                });
                _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
                    _fixIframeBugs();
                });
            },
            getIframe: function(item, template) {
                var embedSrc = item.src;
                var iframeSt = mfp.st.iframe;
                $.each(iframeSt.patterns, function() {
                    if (embedSrc.indexOf(this.index) > -1) {
                        if (this.id) {
                            if (typeof this.id === 'string') {
                                embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                            } else {
                                embedSrc = this.id.call(this, embedSrc);
                            }
                        }
                        embedSrc = this.src.replace('%id%', embedSrc);
                        return false;
                    }
                });
                var dataObj = {};
                if (iframeSt.srcAction) {
                    dataObj[iframeSt.srcAction] = embedSrc;
                }
                mfp._parseMarkup(template, dataObj, item);
                mfp.updateStatus('ready');
                return template;
            }
        }
    });
    var _getLoopedId = function(index) {
            var numSlides = mfp.items.length;
            if (index > numSlides - 1) {
                return index - numSlides;
            } else if (index < 0) {
                return numSlides + index;
            }
            return index;
        },
        _replaceCurrTotal = function(text, curr, total) {
            return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
        };
    $.magnificPopup.registerModule('gallery', {
        options: {
            enabled: false,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: true,
            arrows: true,
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        },
        proto: {
            initGallery: function() {
                var gSt = mfp.st.gallery,
                    ns = '.mfp-gallery';
                mfp.direction = true;
                if (!gSt || !gSt.enabled) return false;
                _wrapClasses += ' mfp-gallery';
                _mfpOn(OPEN_EVENT + ns, function() {
                    if (gSt.navigateByImgClick) {
                        mfp.wrap.on('click' + ns, '.mfp-img', function() {
                            if (mfp.items.length > 1) {
                                mfp.next();
                                return false;
                            }
                        });
                    }
                    _document.on('keydown' + ns, function(e) {
                        if (e.keyCode === 37) {
                            mfp.prev();
                        } else if (e.keyCode === 39) {
                            mfp.next();
                        }
                    });
                });
                _mfpOn('UpdateStatus' + ns, function(e, data) {
                    if (data.text) {
                        data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                    }
                });
                _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
                    var l = mfp.items.length;
                    values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                });
                _mfpOn('BuildControls' + ns, function() {
                    if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                        var markup = gSt.arrowMarkup,
                            arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
                            arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
                        arrowLeft.click(function() {
                            mfp.prev();
                        });
                        arrowRight.click(function() {
                            mfp.next();
                        });
                        mfp.container.append(arrowLeft.add(arrowRight));
                    }
                });
                _mfpOn(CHANGE_EVENT + ns, function() {
                    if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
                    mfp._preloadTimeout = setTimeout(function() {
                        mfp.preloadNearbyImages();
                        mfp._preloadTimeout = null;
                    }, 16);
                });
                _mfpOn(CLOSE_EVENT + ns, function() {
                    _document.off(ns);
                    mfp.wrap.off('click' + ns);
                    mfp.arrowRight = mfp.arrowLeft = null;
                });
            },
            next: function() {
                mfp.direction = true;
                mfp.index = _getLoopedId(mfp.index + 1);
                mfp.updateItemHTML();
            },
            prev: function() {
                mfp.direction = false;
                mfp.index = _getLoopedId(mfp.index - 1);
                mfp.updateItemHTML();
            },
            goTo: function(newIndex) {
                mfp.direction = (newIndex >= mfp.index);
                mfp.index = newIndex;
                mfp.updateItemHTML();
            },
            preloadNearbyImages: function() {
                var p = mfp.st.gallery.preload,
                    preloadBefore = Math.min(p[0], mfp.items.length),
                    preloadAfter = Math.min(p[1], mfp.items.length),
                    i;
                for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                    mfp._preloadItem(mfp.index + i);
                }
                for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                    mfp._preloadItem(mfp.index - i);
                }
            },
            _preloadItem: function(index) {
                index = _getLoopedId(index);
                if (mfp.items[index].preloaded) {
                    return;
                }
                var item = mfp.items[index];
                if (!item.parsed) {
                    item = mfp.parseEl(index);
                }
                _mfpTrigger('LazyLoad', item);
                if (item.type === 'image') {
                    item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
                        item.hasSize = true;
                    }).on('error.mfploader', function() {
                        item.hasSize = true;
                        item.loadError = true;
                        _mfpTrigger('LazyLoadError', item);
                    }).attr('src', item.src);
                }
                item.preloaded = true;
            }
        }
    });
    var RETINA_NS = 'retina';
    $.magnificPopup.registerModule(RETINA_NS, {
        options: {
            replaceSrc: function(item) {
                return item.src.replace(/\.\w+$/, function(m) {
                    return '@2x' + m;
                });
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var st = mfp.st.retina,
                        ratio = st.ratio;
                    ratio = !isNaN(ratio) ? ratio : ratio();
                    if (ratio > 1) {
                        _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
                            item.img.css({
                                'max-width': item.img[0].naturalWidth / ratio,
                                'width': '100%'
                            });
                        });
                        _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
                            item.src = st.replaceSrc(item, ratio);
                        });
                    }
                }
            }
        }
    });
    _checkInstance();
}));
/*! Grained.js
 * Author : Sarath Saleem  - https://github.com/sarathsaleem
 * MIT license: http://opensource.org/licenses/MIT
 * GitHub : https://github.com/sarathsaleem/grained
 * v0.0.1
 */
(function(window, doc) {
    "use strict";

    function grained(ele, opt) {
        var element = null,
            elementId = null,
            selectorElement = null;
        if (typeof ele === 'string') {
            element = doc.getElementById(ele.split('#')[1]);
        }
        if (!element) {
            console.error('Grained: cannot find the element with id ' + ele);
            return;
        } else {
            elementId = element.id;
        }
        if (element.style.position !== 'absolute') {
            element.style.position = 'relative';
        }
        element.style.overflow = 'hidden';
        var prefixes = ["", "-moz-", "-o-animation-", "-webkit-", "-ms-"];
        var options = {
            animate: true,
            patternWidth: 100,
            patternHeight: 100,
            grainOpacity: 0.1,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1,
            grainChaos: 0.5,
            grainSpeed: 20
        };
        Object.keys(opt).forEach(function(key) {
            options[key] = opt[key];
        });
        var generateNoise = function() {
            var canvas = doc.createElement('canvas');
            var ctx = canvas.getContext('2d');
            canvas.width = options.patternWidth;
            canvas.height = options.patternHeight;
            for (var w = 0; w < options.patternWidth; w += options.grainDensity) {
                for (var h = 0; h < options.patternHeight; h += options.grainDensity) {
                    var rgb = Math.random() * 256 | 0;
                    ctx.fillStyle = 'rgba(' + [rgb, rgb, rgb, options.grainOpacity].join() + ')';
                    ctx.fillRect(w, h, options.grainWidth, options.grainHeight);
                }
            }
            return canvas.toDataURL('image/png');
        };

        function addCSSRule(sheet, selector, rules, index) {
            var ins = '';
            if (selector.length) {
                ins = selector + "{" + rules + "}";
            } else {
                ins = rules;
            }
            if ("insertRule" in sheet) {
                sheet.insertRule(ins, index);
            } else if ("addRule" in sheet) {
                sheet.addRule(selector, rules, index);
            }
        }
        var noise = generateNoise();
        var animation = '',
            keyFrames = ['0%:-10%,10%', '10%:-25%,0%', '20%:-30%,10%', '30%:-30%,30%', '40%::-20%,20%', '50%:-15%,10%', '60%:-20%,20%', '70%:-5%,20%', '80%:-25%,5%', '90%:-30%,25%', '100%:-10%,10%'];
        var pre = prefixes.length;
        while (pre--) {
            animation += '@' + prefixes[pre] + 'keyframes grained{';
            for (var key = 0; key < keyFrames.length; key++) {
                var keyVal = keyFrames[key].split(':');
                animation += keyVal[0] + '{';
                animation += prefixes[pre] + 'transform:translate(' + keyVal[1] + ');';
                animation += '}';
            }
            animation += '}';
        }
        var animationAdded = doc.getElementById('grained-animation');
        if (animationAdded) {
            animationAdded.parentElement.removeChild(animationAdded);
        }
        var style = doc.createElement("style");
        style.type = "text/css";
        style.id = 'grained-animation';
        style.innerHTML = animation;
        doc.body.appendChild(style);
        var styleAdded = doc.getElementById('grained-animation-' + elementId);
        if (styleAdded) {
            styleAdded.parentElement.removeChild(styleAdded);
        }
        style = doc.createElement("style");
        style.type = "text/css";
        style.id = 'grained-animation-' + elementId;
        doc.body.appendChild(style);
        var rule = 'background-image: url(' + noise + ');';
        rule += 'position: absolute;content: "";height: 300%;width: 300%;left: -100%;top: -100%;';
        pre = prefixes.length;
        if (options.animate) {
            while (pre--) {
                rule += prefixes[pre] + 'animation-name:grained;';
                rule += prefixes[pre] + 'animation-iteration-count: infinite;';
                rule += prefixes[pre] + 'animation-duration: ' + options.grainChaos + 's;';
                rule += prefixes[pre] + 'animation-timing-function: steps(' + options.grainSpeed + ', end);';
            }
        }
        selectorElement = '#' + elementId + '::before';
        addCSSRule(style.sheet, selectorElement, rule);
    }
    window.grained = grained;
})(window, document);
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.Swiper = factory());
}(this, function() {
    'use strict';
    var doc = (typeof document === 'undefined') ? {
        body: {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        activeElement: {
            blur: function blur() {},
            nodeName: '',
        },
        querySelector: function querySelector() {
            return null;
        },
        querySelectorAll: function querySelectorAll() {
            return [];
        },
        getElementById: function getElementById() {
            return null;
        },
        createEvent: function createEvent() {
            return {
                initEvent: function initEvent() {},
            };
        },
        createElement: function createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function setAttribute() {},
                getElementsByTagName: function getElementsByTagName() {
                    return [];
                },
            };
        },
        location: {
            hash: ''
        },
    } : document;
    var win = (typeof window === 'undefined') ? {
        document: doc,
        navigator: {
            userAgent: '',
        },
        location: {},
        history: {},
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {},
        getComputedStyle: function getComputedStyle() {
            return {
                getPropertyValue: function getPropertyValue() {
                    return '';
                },
            };
        },
        Image: function Image() {},
        Date: function Date() {},
        screen: {},
        setTimeout: function setTimeout() {},
        clearTimeout: function clearTimeout() {},
    } : window;
    var Dom7 = function Dom7(arr) {
        var self = this;
        for (var i = 0; i < arr.length; i += 1) {
            self[i] = arr[i];
        }
        self.length = arr.length;
        return this;
    };

    function $(selector, context) {
        var arr = [];
        var i = 0;
        if (selector && !context) {
            if (selector instanceof Dom7) {
                return selector;
            }
        }
        if (selector) {
            if (typeof selector === 'string') {
                var els;
                var tempParent;
                var html = selector.trim();
                if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                    var toCreate = 'div';
                    if (html.indexOf('<li') === 0) {
                        toCreate = 'ul';
                    }
                    if (html.indexOf('<tr') === 0) {
                        toCreate = 'tbody';
                    }
                    if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
                        toCreate = 'tr';
                    }
                    if (html.indexOf('<tbody') === 0) {
                        toCreate = 'table';
                    }
                    if (html.indexOf('<option') === 0) {
                        toCreate = 'select';
                    }
                    tempParent = doc.createElement(toCreate);
                    tempParent.innerHTML = html;
                    for (i = 0; i < tempParent.childNodes.length; i += 1) {
                        arr.push(tempParent.childNodes[i]);
                    }
                } else {
                    if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                        els = [doc.getElementById(selector.trim().split('#')[1])];
                    } else {
                        els = (context || doc).querySelectorAll(selector.trim());
                    }
                    for (i = 0; i < els.length; i += 1) {
                        if (els[i]) {
                            arr.push(els[i]);
                        }
                    }
                }
            } else if (selector.nodeType || selector === win || selector === doc) {
                arr.push(selector);
            } else if (selector.length > 0 && selector[0].nodeType) {
                for (i = 0; i < selector.length; i += 1) {
                    arr.push(selector[i]);
                }
            }
        }
        return new Dom7(arr);
    }
    $.fn = Dom7.prototype;
    $.Class = Dom7;
    $.Dom7 = Dom7;

    function unique(arr) {
        var uniqueArray = [];
        for (var i = 0; i < arr.length; i += 1) {
            if (uniqueArray.indexOf(arr[i]) === -1) {
                uniqueArray.push(arr[i]);
            }
        }
        return uniqueArray;
    }

    function addClass(className) {
        if (typeof className === 'undefined') {
            return this;
        }
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
                    this[j].classList.add(classes[i]);
                }
            }
        }
        return this;
    }

    function removeClass(className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
                    this[j].classList.remove(classes[i]);
                }
            }
        }
        return this;
    }

    function hasClass(className) {
        if (!this[0]) {
            return false;
        }
        return this[0].classList.contains(className);
    }

    function toggleClass(className) {
        var classes = className.split(' ');
        for (var i = 0; i < classes.length; i += 1) {
            for (var j = 0; j < this.length; j += 1) {
                if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
                    this[j].classList.toggle(classes[i]);
                }
            }
        }
        return this;
    }

    function attr(attrs, value) {
        var arguments$1 = arguments;
        if (arguments.length === 1 && typeof attrs === 'string') {
            if (this[0]) {
                return this[0].getAttribute(attrs);
            }
            return undefined;
        }
        for (var i = 0; i < this.length; i += 1) {
            if (arguments$1.length === 2) {
                this[i].setAttribute(attrs, value);
            } else {
                for (var attrName in attrs) {
                    this[i][attrName] = attrs[attrName];
                    this[i].setAttribute(attrName, attrs[attrName]);
                }
            }
        }
        return this;
    }

    function removeAttr(attr) {
        for (var i = 0; i < this.length; i += 1) {
            this[i].removeAttribute(attr);
        }
        return this;
    }

    function data(key, value) {
        var el;
        if (typeof value === 'undefined') {
            el = this[0];
            if (el) {
                if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
                    return el.dom7ElementDataStorage[key];
                }
                var dataKey = el.getAttribute(("data-" + key));
                if (dataKey) {
                    return dataKey;
                }
                return undefined;
            }
            return undefined;
        }
        for (var i = 0; i < this.length; i += 1) {
            el = this[i];
            if (!el.dom7ElementDataStorage) {
                el.dom7ElementDataStorage = {};
            }
            el.dom7ElementDataStorage[key] = value;
        }
        return this;
    }

    function transform(transform) {
        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this[i].style;
            elStyle.webkitTransform = transform;
            elStyle.transform = transform;
        }
        return this;
    }

    function transition(duration) {
        if (typeof duration !== 'string') {
            duration = duration + "ms";
        }
        for (var i = 0; i < this.length; i += 1) {
            var elStyle = this[i].style;
            elStyle.webkitTransitionDuration = duration;
            elStyle.transitionDuration = duration;
        }
        return this;
    }

    function on() {
        var assign;
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) {
            capture = false;
        }

        function handleLiveEvent(e) {
            var target = e.target;
            if (!target) {
                return;
            }
            var eventData = e.target.dom7EventData || [];
            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }
            if ($(target).is(targetSelector)) {
                listener.apply(target, eventData);
            } else {
                var parents = $(target).parents();
                for (var k = 0; k < parents.length; k += 1) {
                    if ($(parents[k]).is(targetSelector)) {
                        listener.apply(parents[k], eventData);
                    }
                }
            }
        }

        function handleEvent(e) {
            var eventData = e && e.target ? e.target.dom7EventData || [] : [];
            if (eventData.indexOf(e) < 0) {
                eventData.unshift(e);
            }
            listener.apply(this, eventData);
        }
        var events = eventType.split(' ');
        var j;
        for (var i = 0; i < this.length; i += 1) {
            var el = this[i];
            if (!targetSelector) {
                for (j = 0; j < events.length; j += 1) {
                    var event = events[j];
                    if (!el.dom7Listeners) {
                        el.dom7Listeners = {};
                    }
                    if (!el.dom7Listeners[event]) {
                        el.dom7Listeners[event] = [];
                    }
                    el.dom7Listeners[event].push({
                        listener: listener,
                        proxyListener: handleEvent,
                    });
                    el.addEventListener(event, handleEvent, capture);
                }
            } else {
                for (j = 0; j < events.length; j += 1) {
                    var event$1 = events[j];
                    if (!el.dom7LiveListeners) {
                        el.dom7LiveListeners = {};
                    }
                    if (!el.dom7LiveListeners[event$1]) {
                        el.dom7LiveListeners[event$1] = [];
                    }
                    el.dom7LiveListeners[event$1].push({
                        listener: listener,
                        proxyListener: handleLiveEvent,
                    });
                    el.addEventListener(event$1, handleLiveEvent, capture);
                }
            }
        }
        return this;
    }

    function off() {
        var assign;
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var eventType = args[0];
        var targetSelector = args[1];
        var listener = args[2];
        var capture = args[3];
        if (typeof args[1] === 'function') {
            (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
            targetSelector = undefined;
        }
        if (!capture) {
            capture = false;
        }
        var events = eventType.split(' ');
        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];
            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var handlers = (void 0);
                if (!targetSelector && el.dom7Listeners) {
                    handlers = el.dom7Listeners[event];
                } else if (targetSelector && el.dom7LiveListeners) {
                    handlers = el.dom7LiveListeners[event];
                }
                if (handlers && handlers.length) {
                    for (var k = handlers.length - 1; k >= 0; k -= 1) {
                        var handler = handlers[k];
                        if (listener && handler.listener === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        } else if (!listener) {
                            el.removeEventListener(event, handler.proxyListener, capture);
                            handlers.splice(k, 1);
                        }
                    }
                }
            }
        }
        return this;
    }

    function trigger() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var events = args[0].split(' ');
        var eventData = args[1];
        for (var i = 0; i < events.length; i += 1) {
            var event = events[i];
            for (var j = 0; j < this.length; j += 1) {
                var el = this[j];
                var evt = (void 0);
                try {
                    evt = new win.CustomEvent(event, {
                        detail: eventData,
                        bubbles: true,
                        cancelable: true,
                    });
                } catch (e) {
                    evt = doc.createEvent('Event');
                    evt.initEvent(event, true, true);
                    evt.detail = eventData;
                }
                el.dom7EventData = args.filter(function(data, dataIndex) {
                    return dataIndex > 0;
                });
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
        return this;
    }

    function transitionEnd(callback) {
        var events = ['webkitTransitionEnd', 'transitionend'];
        var dom = this;
        var i;

        function fireCallBack(e) {
            if (e.target !== this) {
                return;
            }
            callback.call(this, e);
            for (i = 0; i < events.length; i += 1) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i += 1) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    }

    function outerWidth(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var styles = this.styles();
                return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
            }
            return this[0].offsetWidth;
        }
        return null;
    }

    function outerHeight(includeMargins) {
        if (this.length > 0) {
            if (includeMargins) {
                var styles = this.styles();
                return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
            }
            return this[0].offsetHeight;
        }
        return null;
    }

    function offset() {
        if (this.length > 0) {
            var el = this[0];
            var box = el.getBoundingClientRect();
            var body = doc.body;
            var clientTop = el.clientTop || body.clientTop || 0;
            var clientLeft = el.clientLeft || body.clientLeft || 0;
            var scrollTop = el === win ? win.scrollY : el.scrollTop;
            var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
            return {
                top: (box.top + scrollTop) - clientTop,
                left: (box.left + scrollLeft) - clientLeft,
            };
        }
        return null;
    }

    function styles() {
        if (this[0]) {
            return win.getComputedStyle(this[0], null);
        }
        return {};
    }

    function css(props, value) {
        var i;
        if (arguments.length === 1) {
            if (typeof props === 'string') {
                if (this[0]) {
                    return win.getComputedStyle(this[0], null).getPropertyValue(props);
                }
            } else {
                for (i = 0; i < this.length; i += 1) {
                    for (var prop in props) {
                        this[i].style[prop] = props[prop];
                    }
                }
                return this;
            }
        }
        if (arguments.length === 2 && typeof props === 'string') {
            for (i = 0; i < this.length; i += 1) {
                this[i].style[props] = value;
            }
            return this;
        }
        return this;
    }

    function each(callback) {
        if (!callback) {
            return this;
        }
        for (var i = 0; i < this.length; i += 1) {
            if (callback.call(this[i], i, this[i]) === false) {
                return this;
            }
        }
        return this;
    }

    function html(html) {
        if (typeof html === 'undefined') {
            return this[0] ? this[0].innerHTML : undefined;
        }
        for (var i = 0; i < this.length; i += 1) {
            this[i].innerHTML = html;
        }
        return this;
    }

    function text(text) {
        if (typeof text === 'undefined') {
            if (this[0]) {
                return this[0].textContent.trim();
            }
            return null;
        }
        for (var i = 0; i < this.length; i += 1) {
            this[i].textContent = text;
        }
        return this;
    }

    function is(selector) {
        var el = this[0];
        var compareWith;
        var i;
        if (!el || typeof selector === 'undefined') {
            return false;
        }
        if (typeof selector === 'string') {
            if (el.matches) {
                return el.matches(selector);
            } else if (el.webkitMatchesSelector) {
                return el.webkitMatchesSelector(selector);
            } else if (el.msMatchesSelector) {
                return el.msMatchesSelector(selector);
            }
            compareWith = $(selector);
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) {
                    return true;
                }
            }
            return false;
        } else if (selector === doc) {
            return el === doc;
        } else if (selector === win) {
            return el === win;
        }
        if (selector.nodeType || selector instanceof Dom7) {
            compareWith = selector.nodeType ? [selector] : selector;
            for (i = 0; i < compareWith.length; i += 1) {
                if (compareWith[i] === el) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    function index() {
        var child = this[0];
        var i;
        if (child) {
            i = 0;
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) {
                    i += 1;
                }
            }
            return i;
        }
        return undefined;
    }

    function eq(index) {
        if (typeof index === 'undefined') {
            return this;
        }
        var length = this.length;
        var returnIndex;
        if (index > length - 1) {
            return new Dom7([]);
        }
        if (index < 0) {
            returnIndex = length + index;
            if (returnIndex < 0) {
                return new Dom7([]);
            }
            return new Dom7([this[returnIndex]]);
        }
        return new Dom7([this[index]]);
    }

    function append() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var newChild;
        for (var k = 0; k < args.length; k += 1) {
            newChild = args[k];
            for (var i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = doc.createElement('div');
                    tempDiv.innerHTML = newChild;
                    while (tempDiv.firstChild) {
                        this[i].appendChild(tempDiv.firstChild);
                    }
                } else if (newChild instanceof Dom7) {
                    for (var j = 0; j < newChild.length; j += 1) {
                        this[i].appendChild(newChild[j]);
                    }
                } else {
                    this[i].appendChild(newChild);
                }
            }
        }
        return this;
    }

    function prepend(newChild) {
        var i;
        var j;
        for (i = 0; i < this.length; i += 1) {
            if (typeof newChild === 'string') {
                var tempDiv = doc.createElement('div');
                tempDiv.innerHTML = newChild;
                for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
                    this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                }
            } else if (newChild instanceof Dom7) {
                for (j = 0; j < newChild.length; j += 1) {
                    this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                }
            } else {
                this[i].insertBefore(newChild, this[i].childNodes[0]);
            }
        }
        return this;
    }

    function next(selector) {
        if (this.length > 0) {
            if (selector) {
                if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
                    return new Dom7([this[0].nextElementSibling]);
                }
                return new Dom7([]);
            }
            if (this[0].nextElementSibling) {
                return new Dom7([this[0].nextElementSibling]);
            }
            return new Dom7([]);
        }
        return new Dom7([]);
    }

    function nextAll(selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) {
            return new Dom7([]);
        }
        while (el.nextElementSibling) {
            var next = el.nextElementSibling;
            if (selector) {
                if ($(next).is(selector)) {
                    nextEls.push(next);
                }
            } else {
                nextEls.push(next);
            }
            el = next;
        }
        return new Dom7(nextEls);
    }

    function prev(selector) {
        if (this.length > 0) {
            var el = this[0];
            if (selector) {
                if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
                    return new Dom7([el.previousElementSibling]);
                }
                return new Dom7([]);
            }
            if (el.previousElementSibling) {
                return new Dom7([el.previousElementSibling]);
            }
            return new Dom7([]);
        }
        return new Dom7([]);
    }

    function prevAll(selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) {
            return new Dom7([]);
        }
        while (el.previousElementSibling) {
            var prev = el.previousElementSibling;
            if (selector) {
                if ($(prev).is(selector)) {
                    prevEls.push(prev);
                }
            } else {
                prevEls.push(prev);
            }
            el = prev;
        }
        return new Dom7(prevEls);
    }

    function parent(selector) {
        var parents = [];
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode !== null) {
                if (selector) {
                    if ($(this[i].parentNode).is(selector)) {
                        parents.push(this[i].parentNode);
                    }
                } else {
                    parents.push(this[i].parentNode);
                }
            }
        }
        return $(unique(parents));
    }

    function parents(selector) {
        var parents = [];
        for (var i = 0; i < this.length; i += 1) {
            var parent = this[i].parentNode;
            while (parent) {
                if (selector) {
                    if ($(parent).is(selector)) {
                        parents.push(parent);
                    }
                } else {
                    parents.push(parent);
                }
                parent = parent.parentNode;
            }
        }
        return $(unique(parents));
    }

    function closest(selector) {
        var closest = this;
        if (typeof selector === 'undefined') {
            return new Dom7([]);
        }
        if (!closest.is(selector)) {
            closest = closest.parents(selector).eq(0);
        }
        return closest;
    }

    function find(selector) {
        var foundElements = [];
        for (var i = 0; i < this.length; i += 1) {
            var found = this[i].querySelectorAll(selector);
            for (var j = 0; j < found.length; j += 1) {
                foundElements.push(found[j]);
            }
        }
        return new Dom7(foundElements);
    }

    function children(selector) {
        var children = [];
        for (var i = 0; i < this.length; i += 1) {
            var childNodes = this[i].childNodes;
            for (var j = 0; j < childNodes.length; j += 1) {
                if (!selector) {
                    if (childNodes[j].nodeType === 1) {
                        children.push(childNodes[j]);
                    }
                } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
                    children.push(childNodes[j]);
                }
            }
        }
        return new Dom7(unique(children));
    }

    function remove() {
        for (var i = 0; i < this.length; i += 1) {
            if (this[i].parentNode) {
                this[i].parentNode.removeChild(this[i]);
            }
        }
        return this;
    }

    function add() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var dom = this;
        var i;
        var j;
        for (i = 0; i < args.length; i += 1) {
            var toAdd = $(args[i]);
            for (j = 0; j < toAdd.length; j += 1) {
                dom[dom.length] = toAdd[j];
                dom.length += 1;
            }
        }
        return dom;
    }
    var Methods = {
        addClass: addClass,
        removeClass: removeClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        attr: attr,
        removeAttr: removeAttr,
        data: data,
        transform: transform,
        transition: transition,
        on: on,
        off: off,
        trigger: trigger,
        transitionEnd: transitionEnd,
        outerWidth: outerWidth,
        outerHeight: outerHeight,
        offset: offset,
        css: css,
        each: each,
        html: html,
        text: text,
        is: is,
        index: index,
        eq: eq,
        append: append,
        prepend: prepend,
        next: next,
        nextAll: nextAll,
        prev: prev,
        prevAll: prevAll,
        parent: parent,
        parents: parents,
        closest: closest,
        find: find,
        children: children,
        remove: remove,
        add: add,
        styles: styles,
    };
    Object.keys(Methods).forEach(function(methodName) {
        $.fn[methodName] = Methods[methodName];
    });
    var Utils = {
        deleteProps: function deleteProps(obj) {
            var object = obj;
            Object.keys(object).forEach(function(key) {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            });
        },
        nextTick: function nextTick(callback, delay) {
            if (delay === void 0) delay = 0;
            return setTimeout(callback, delay);
        },
        now: function now() {
            return Date.now();
        },
        getTranslate: function getTranslate(el, axis) {
            if (axis === void 0) axis = 'x';
            var matrix;
            var curTransform;
            var transformMatrix;
            var curStyle = win.getComputedStyle(el, null);
            if (win.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function(a) {
                        return a.replace(',', '.');
                    }).join(', ');
                }
                transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }
            if (axis === 'x') {
                if (win.WebKitCSSMatrix) {
                    curTransform = transformMatrix.m41;
                } else if (matrix.length === 16) {
                    curTransform = parseFloat(matrix[12]);
                } else {
                    curTransform = parseFloat(matrix[4]);
                }
            }
            if (axis === 'y') {
                if (win.WebKitCSSMatrix) {
                    curTransform = transformMatrix.m42;
                } else if (matrix.length === 16) {
                    curTransform = parseFloat(matrix[13]);
                } else {
                    curTransform = parseFloat(matrix[5]);
                }
            }
            return curTransform || 0;
        },
        parseUrlQuery: function parseUrlQuery(url) {
            var query = {};
            var urlToParse = url || win.location.href;
            var i;
            var params;
            var param;
            var length;
            if (typeof urlToParse === 'string' && urlToParse.length) {
                urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
                params = urlToParse.split('&').filter(function(paramsPart) {
                    return paramsPart !== '';
                });
                length = params.length;
                for (i = 0; i < length; i += 1) {
                    param = params[i].replace(/#\S+/g, '').split('=');
                    query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
                }
            }
            return query;
        },
        isObject: function isObject(o) {
            return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
        },
        extend: function extend() {
            var args = [],
                len$1 = arguments.length;
            while (len$1--) args[len$1] = arguments[len$1];
            var to = Object(args[0]);
            for (var i = 1; i < args.length; i += 1) {
                var nextSource = args[i];
                if (nextSource !== undefined && nextSource !== null) {
                    var keysArray = Object.keys(Object(nextSource));
                    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        var nextKey = keysArray[nextIndex];
                        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                        if (desc !== undefined && desc.enumerable) {
                            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                to[nextKey] = {};
                                Utils.extend(to[nextKey], nextSource[nextKey]);
                            } else {
                                to[nextKey] = nextSource[nextKey];
                            }
                        }
                    }
                }
            }
            return to;
        },
    };
    var Support = (function Support() {
        var testDiv = doc.createElement('div');
        return {
            touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
                return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
            }()),
            pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent || ('maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0)),
            prefixedPointerEvents: !!win.navigator.msPointerEnabled,
            transition: (function checkTransition() {
                var style = testDiv.style;
                return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style);
            }()),
            transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
                var style = testDiv.style;
                return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style);
            }()),
            flexbox: (function checkFlexbox() {
                var style = testDiv.style;
                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                for (var i = 0; i < styles.length; i += 1) {
                    if (styles[i] in style) {
                        return true;
                    }
                }
                return false;
            }()),
            observer: (function checkObserver() {
                return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
            }()),
            passiveListener: (function checkPassiveListener() {
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function get() {
                            supportsPassive = true;
                        },
                    });
                    win.addEventListener('testPassiveListener', null, opts);
                } catch (e) {}
                return supportsPassive;
            }()),
            gestures: (function checkGestures() {
                return 'ongesturestart' in win;
            }()),
        };
    }());
    var Browser = (function Browser() {
        function isSafari() {
            var ua = win.navigator.userAgent.toLowerCase();
            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
        }
        return {
            isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g),
            isEdge: !!win.navigator.userAgent.match(/Edge/g),
            isSafari: isSafari(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
        };
    }());
    var SwiperClass = function SwiperClass(params) {
        if (params === void 0) params = {};
        var self = this;
        self.params = params;
        self.eventsListeners = {};
        if (self.params && self.params.on) {
            Object.keys(self.params.on).forEach(function(eventName) {
                self.on(eventName, self.params.on[eventName]);
            });
        }
    };
    var staticAccessors = {
        components: {
            configurable: true
        }
    };
    SwiperClass.prototype.on = function on(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') {
            return self;
        }
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function(event) {
            if (!self.eventsListeners[event]) {
                self.eventsListeners[event] = [];
            }
            self.eventsListeners[event][method](handler);
        });
        return self;
    };
    SwiperClass.prototype.once = function once(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') {
            return self;
        }

        function onceHandler() {
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            handler.apply(self, args);
            self.off(events, onceHandler);
            if (onceHandler.f7proxy) {
                delete onceHandler.f7proxy;
            }
        }
        onceHandler.f7proxy = handler;
        return self.on(events, onceHandler, priority);
    };
    SwiperClass.prototype.off = function off(events, handler) {
        var self = this;
        if (!self.eventsListeners) {
            return self;
        }
        events.split(' ').forEach(function(event) {
            if (typeof handler === 'undefined') {
                self.eventsListeners[event] = [];
            } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
                self.eventsListeners[event].forEach(function(eventHandler, index) {
                    if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
                        self.eventsListeners[event].splice(index, 1);
                    }
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.emit = function emit() {
        var args = [],
            len = arguments.length;
        while (len--) args[len] = arguments[len];
        var self = this;
        if (!self.eventsListeners) {
            return self;
        }
        var events;
        var data;
        var context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function(event) {
            if (self.eventsListeners && self.eventsListeners[event]) {
                var handlers = [];
                self.eventsListeners[event].forEach(function(eventHandler) {
                    handlers.push(eventHandler);
                });
                handlers.forEach(function(eventHandler) {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    };
    SwiperClass.prototype.useModulesParams = function useModulesParams(instanceParams) {
        var instance = this;
        if (!instance.modules) {
            return;
        }
        Object.keys(instance.modules).forEach(function(moduleName) {
            var module = instance.modules[moduleName];
            if (module.params) {
                Utils.extend(instanceParams, module.params);
            }
        });
    };
    SwiperClass.prototype.useModules = function useModules(modulesParams) {
        if (modulesParams === void 0) modulesParams = {};
        var instance = this;
        if (!instance.modules) {
            return;
        }
        Object.keys(instance.modules).forEach(function(moduleName) {
            var module = instance.modules[moduleName];
            var moduleParams = modulesParams[moduleName] || {};
            if (module.instance) {
                Object.keys(module.instance).forEach(function(modulePropName) {
                    var moduleProp = module.instance[modulePropName];
                    if (typeof moduleProp === 'function') {
                        instance[modulePropName] = moduleProp.bind(instance);
                    } else {
                        instance[modulePropName] = moduleProp;
                    }
                });
            }
            if (module.on && instance.on) {
                Object.keys(module.on).forEach(function(moduleEventName) {
                    instance.on(moduleEventName, module.on[moduleEventName]);
                });
            }
            if (module.create) {
                module.create.bind(instance)(moduleParams);
            }
        });
    };
    staticAccessors.components.set = function(components) {
        var Class = this;
        if (!Class.use) {
            return;
        }
        Class.use(components);
    };
    SwiperClass.installModule = function installModule(module) {
        var params = [],
            len = arguments.length - 1;
        while (len-- > 0) params[len] = arguments[len + 1];
        var Class = this;
        if (!Class.prototype.modules) {
            Class.prototype.modules = {};
        }
        var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
        Class.prototype.modules[name] = module;
        if (module.proto) {
            Object.keys(module.proto).forEach(function(key) {
                Class.prototype[key] = module.proto[key];
            });
        }
        if (module.static) {
            Object.keys(module.static).forEach(function(key) {
                Class[key] = module.static[key];
            });
        }
        if (module.install) {
            module.install.apply(Class, params);
        }
        return Class;
    };
    SwiperClass.use = function use(module) {
        var params = [],
            len = arguments.length - 1;
        while (len-- > 0) params[len] = arguments[len + 1];
        var Class = this;
        if (Array.isArray(module)) {
            module.forEach(function(m) {
                return Class.installModule(m);
            });
            return Class;
        }
        return Class.installModule.apply(Class, [module].concat(params));
    };
    Object.defineProperties(SwiperClass, staticAccessors);

    function updateSize() {
        var swiper = this;
        var width;
        var height;
        var $el = swiper.$el;
        if (typeof swiper.params.width !== 'undefined') {
            width = swiper.params.width;
        } else {
            width = $el[0].clientWidth;
        }
        if (typeof swiper.params.height !== 'undefined') {
            height = swiper.params.height;
        } else {
            height = $el[0].clientHeight;
        }
        if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
            return;
        }
        width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
        height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
        Utils.extend(swiper, {
            width: width,
            height: height,
            size: swiper.isHorizontal() ? width : height,
        });
    }

    function updateSlides() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var swiperSize = swiper.size;
        var rtl = swiper.rtlTranslate;
        var wrongRTL = swiper.wrongRTL;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
        var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        var snapGrid = [];
        var slidesGrid = [];
        var slidesSizesGrid = [];
        var offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }
        var offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }
        var previousSnapGridLength = swiper.snapGrid.length;
        var previousSlidesGridLength = swiper.snapGrid.length;
        var spaceBetween = params.spaceBetween;
        var slidePosition = -offsetBefore;
        var prevSlideSize = 0;
        var index = 0;
        if (typeof swiperSize === 'undefined') {
            return;
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
        }
        swiper.virtualSize = -spaceBetween;
        if (rtl) {
            slides.css({
                marginLeft: '',
                marginTop: ''
            });
        } else {
            slides.css({
                marginRight: '',
                marginBottom: ''
            });
        }
        var slidesNumberEvenToRows;
        if (params.slidesPerColumn > 1) {
            if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
            }
            if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
            }
        }
        var slideSize;
        var slidesPerColumn = params.slidesPerColumn;
        var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
        var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
        for (var i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            var slide = slides.eq(i);
            if (params.slidesPerColumn > 1) {
                var newSlideOrderIndex = (void 0);
                var column = (void 0);
                var row = (void 0);
                if (params.slidesPerColumnFill === 'column') {
                    column = Math.floor(i / slidesPerColumn);
                    row = i - (column * slidesPerColumn);
                    if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                        row += 1;
                        if (row >= slidesPerColumn) {
                            row = 0;
                            column += 1;
                        }
                    }
                    newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
                    slide.css({
                        '-webkit-box-ordinal-group': newSlideOrderIndex,
                        '-moz-box-ordinal-group': newSlideOrderIndex,
                        '-ms-flex-order': newSlideOrderIndex,
                        '-webkit-order': newSlideOrderIndex,
                        order: newSlideOrderIndex,
                    });
                } else {
                    row = Math.floor(i / slidesPerRow);
                    column = i - (row * slidesPerRow);
                }
                slide.css(("margin-" + (swiper.isHorizontal() ? 'top' : 'left')), (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))).attr('data-swiper-column', column).attr('data-swiper-row', row);
            }
            if (slide.css('display') === 'none') {
                continue;
            }
            if (params.slidesPerView === 'auto') {
                var slideStyles = win.getComputedStyle(slide[0], null);
                var currentTransform = slide[0].style.transform;
                var currentWebKitTransform = slide[0].style.webkitTransform;
                if (currentTransform) {
                    slide[0].style.transform = 'none';
                }
                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = 'none';
                }
                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
                } else {
                    if (swiper.isHorizontal()) {
                        var width = parseFloat(slideStyles.getPropertyValue('width'));
                        var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
                        var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
                        var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
                        var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
                        var boxSizing = slideStyles.getPropertyValue('box-sizing');
                        if (boxSizing && boxSizing === 'border-box') {
                            slideSize = width + marginLeft + marginRight;
                        } else {
                            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
                        }
                    } else {
                        var height = parseFloat(slideStyles.getPropertyValue('height'));
                        var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
                        var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
                        var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
                        var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
                        var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');
                        if (boxSizing$1 && boxSizing$1 === 'border-box') {
                            slideSize = height + marginTop + marginBottom;
                        } else {
                            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
                        }
                    }
                }
                if (currentTransform) {
                    slide[0].style.transform = currentTransform;
                }
                if (currentWebKitTransform) {
                    slide[0].style.webkitTransform = currentWebKitTransform;
                }
                if (params.roundLengths) {
                    slideSize = Math.floor(slideSize);
                }
            } else {
                slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
                if (params.roundLengths) {
                    slideSize = Math.floor(slideSize);
                }
                if (slides[i]) {
                    if (swiper.isHorizontal()) {
                        slides[i].style.width = slideSize + "px";
                    } else {
                        slides[i].style.height = slideSize + "px";
                    }
                }
            }
            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) {
                    slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
                }
                if (i === 0) {
                    slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
                }
                if (Math.abs(slidePosition) < 1 / 1000) {
                    slidePosition = 0;
                }
                if (params.roundLengths) {
                    slidePosition = Math.floor(slidePosition);
                }
                if ((index) % params.slidesPerGroup === 0) {
                    snapGrid.push(slidePosition);
                }
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) {
                    slidePosition = Math.floor(slidePosition);
                }
                if ((index) % params.slidesPerGroup === 0) {
                    snapGrid.push(slidePosition);
                }
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        var newSlidesGrid;
        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            $wrapperEl.css({
                width: ((swiper.virtualSize + params.spaceBetween) + "px")
            });
        }
        if (!Support.flexbox || params.setWrapperSize) {
            if (swiper.isHorizontal()) {
                $wrapperEl.css({
                    width: ((swiper.virtualSize + params.spaceBetween) + "px")
                });
            } else {
                $wrapperEl.css({
                    height: ((swiper.virtualSize + params.spaceBetween) + "px")
                });
            }
        }
        if (params.slidesPerColumn > 1) {
            swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
            if (swiper.isHorizontal()) {
                $wrapperEl.css({
                    width: ((swiper.virtualSize + params.spaceBetween) + "px")
                });
            } else {
                $wrapperEl.css({
                    height: ((swiper.virtualSize + params.spaceBetween) + "px")
                });
            }
            if (params.centeredSlides) {
                newSlidesGrid = [];
                for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
                    var slidesGridItem = snapGrid[i$1];
                    if (params.roundLengths) {
                        slidesGridItem = Math.floor(slidesGridItem);
                    }
                    if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
                        newSlidesGrid.push(slidesGridItem);
                    }
                }
                snapGrid = newSlidesGrid;
            }
        }
        if (!params.centeredSlides) {
            newSlidesGrid = [];
            for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
                var slidesGridItem$1 = snapGrid[i$2];
                if (params.roundLengths) {
                    slidesGridItem$1 = Math.floor(slidesGridItem$1);
                }
                if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(slidesGridItem$1);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (snapGrid.length === 0) {
            snapGrid = [0];
        }
        if (params.spaceBetween !== 0) {
            if (swiper.isHorizontal()) {
                if (rtl) {
                    slides.css({
                        marginLeft: (spaceBetween + "px")
                    });
                } else {
                    slides.css({
                        marginRight: (spaceBetween + "px")
                    });
                }
            } else {
                slides.css({
                    marginBottom: (spaceBetween + "px")
                });
            }
        }
        if (params.centerInsufficientSlides) {
            var allSlidesSize = 0;
            slidesSizesGrid.forEach(function(slideSizeValue) {
                allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
            });
            allSlidesSize -= params.spaceBetween;
            if (allSlidesSize < swiperSize) {
                var allSlidesOffset = (swiperSize - allSlidesSize) / 2;
                snapGrid.forEach(function(snap, snapIndex) {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach(function(snap, snapIndex) {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }
        Utils.extend(swiper, {
            slides: slides,
            snapGrid: snapGrid,
            slidesGrid: slidesGrid,
            slidesSizesGrid: slidesSizesGrid,
        });
        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }
            swiper.emit('snapGridLengthChange');
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }
        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesOffset();
        }
    }

    function updateAutoHeight(speed) {
        var swiper = this;
        var activeSlides = [];
        var newHeight = 0;
        var i;
        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        }
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                var index = swiper.activeIndex + i;
                if (index > swiper.slides.length) {
                    break;
                }
                activeSlides.push(swiper.slides.eq(index)[0]);
            }
        } else {
            activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
        }
        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                var height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }
        if (newHeight) {
            swiper.$wrapperEl.css('height', (newHeight + "px"));
        }
    }

    function updateSlidesOffset() {
        var swiper = this;
        var slides = swiper.slides;
        for (var i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
        }
    }

    function updateSlidesProgress(translate) {
        if (translate === void 0) translate = (this && this.translate) || 0;
        var swiper = this;
        var params = swiper.params;
        var slides = swiper.slides;
        var rtl = swiper.rtlTranslate;
        if (slides.length === 0) {
            return;
        }
        if (typeof slides[0].swiperSlideOffset === 'undefined') {
            swiper.updateSlidesOffset();
        }
        var offsetCenter = -translate;
        if (rtl) {
            offsetCenter = translate;
        }
        slides.removeClass(params.slideVisibleClass);
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        for (var i = 0; i < slides.length; i += 1) {
            var slide = slides[i];
            var slideProgress = ((offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
            if (params.watchSlidesVisibility) {
                var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
                var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
                var isVisible = (slideBefore >= 0 && slideBefore < swiper.size) || (slideAfter > 0 && slideAfter <= swiper.size) || (slideBefore <= 0 && slideAfter >= swiper.size);
                if (isVisible) {
                    swiper.visibleSlides.push(slide);
                    swiper.visibleSlidesIndexes.push(i);
                    slides.eq(i).addClass(params.slideVisibleClass);
                }
            }
            slide.progress = rtl ? -slideProgress : slideProgress;
        }
        swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
        if (translate === void 0) translate = (this && this.translate) || 0;
        var swiper = this;
        var params = swiper.params;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        var progress = swiper.progress;
        var isBeginning = swiper.isBeginning;
        var isEnd = swiper.isEnd;
        var wasBeginning = isBeginning;
        var wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / (translatesDiff);
            isBeginning = progress <= 0;
            isEnd = progress >= 1;
        }
        Utils.extend(swiper, {
            progress: progress,
            isBeginning: isBeginning,
            isEnd: isEnd,
        });
        if (params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateSlidesProgress(translate);
        }
        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }
        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }
        if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
            swiper.emit('fromEdge');
        }
        swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
        var swiper = this;
        var slides = swiper.slides;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var realIndex = swiper.realIndex;
        var isVirtual = swiper.virtual && params.virtual.enabled;
        slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));
        var activeSlide;
        if (isVirtual) {
            activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
        } else {
            activeSlide = slides.eq(activeIndex);
        }
        activeSlide.addClass(params.slideActiveClass);
        if (params.loop) {
            if (activeSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]")).addClass(params.slideDuplicateActiveClass);
            } else {
                $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]")).addClass(params.slideDuplicateActiveClass);
            }
        }
        var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
        if (params.loop && nextSlide.length === 0) {
            nextSlide = slides.eq(0);
            nextSlide.addClass(params.slideNextClass);
        }
        var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
        if (params.loop && prevSlide.length === 0) {
            prevSlide = slides.eq(-1);
            prevSlide.addClass(params.slidePrevClass);
        }
        if (params.loop) {
            if (nextSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicateNextClass);
            } else {
                $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicateNextClass);
            }
            if (prevSlide.hasClass(params.slideDuplicateClass)) {
                $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicatePrevClass);
            } else {
                $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicatePrevClass);
            }
        }
    }

    function updateActiveIndex(newActiveIndex) {
        var swiper = this;
        var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var params = swiper.params;
        var previousIndex = swiper.activeIndex;
        var previousRealIndex = swiper.realIndex;
        var previousSnapIndex = swiper.snapIndex;
        var activeIndex = newActiveIndex;
        var snapIndex;
        if (typeof activeIndex === 'undefined') {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
                        activeIndex = i;
                    } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                        activeIndex = i + 1;
                    }
                } else if (translate >= slidesGrid[i]) {
                    activeIndex = i;
                }
            }
            if (params.normalizeSlideIndex) {
                if (activeIndex < 0 || typeof activeIndex === 'undefined') {
                    activeIndex = 0;
                }
            }
        }
        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) {
            snapIndex = snapGrid.length - 1;
        }
        if (activeIndex === previousIndex) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }
            return;
        }
        var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
        Utils.extend(swiper, {
            snapIndex: snapIndex,
            realIndex: realIndex,
            previousIndex: previousIndex,
            activeIndex: activeIndex,
        });
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');
        if (previousRealIndex !== realIndex) {
            swiper.emit('realIndexChange');
        }
        swiper.emit('slideChange');
    }

    function updateClickedSlide(e) {
        var swiper = this;
        var params = swiper.params;
        var slide = $(e.target).closest(("." + (params.slideClass)))[0];
        var slideFound = false;
        if (slide) {
            for (var i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) {
                    slideFound = true;
                }
            }
        }
        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = $(slide).index();
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }
    var update = {
        updateSize: updateSize,
        updateSlides: updateSlides,
        updateAutoHeight: updateAutoHeight,
        updateSlidesOffset: updateSlidesOffset,
        updateSlidesProgress: updateSlidesProgress,
        updateProgress: updateProgress,
        updateSlidesClasses: updateSlidesClasses,
        updateActiveIndex: updateActiveIndex,
        updateClickedSlide: updateClickedSlide,
    };

    function getTranslate(axis) {
        if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
        var swiper = this;
        var params = swiper.params;
        var rtl = swiper.rtlTranslate;
        var translate = swiper.translate;
        var $wrapperEl = swiper.$wrapperEl;
        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }
        var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
        if (rtl) {
            currentTranslate = -currentTranslate;
        }
        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        var swiper = this;
        var rtl = swiper.rtlTranslate;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var progress = swiper.progress;
        var x = 0;
        var y = 0;
        var z = 0;
        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }
        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }
        if (!params.virtualTranslate) {
            if (Support.transforms3d) {
                $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)"));
            } else {
                $wrapperEl.transform(("translate(" + x + "px, " + y + "px)"));
            }
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y;
        var newProgress;
        var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }
        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return (-this.snapGrid[0]);
    }

    function maxTranslate() {
        return (-this.snapGrid[this.snapGrid.length - 1]);
    }
    var translate = {
        getTranslate: getTranslate,
        setTranslate: setTranslate,
        minTranslate: minTranslate,
        maxTranslate: maxTranslate,
    };

    function setTransition(duration, byController) {
        var swiper = this;
        swiper.$wrapperEl.transition(duration);
        swiper.emit('setTransition', duration, byController);
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var params = swiper.params;
        var previousIndex = swiper.previousIndex;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        var dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) {
                dir = 'next';
            } else if (activeIndex < previousIndex) {
                dir = 'prev';
            } else {
                dir = 'reset';
            }
        }
        swiper.emit('transitionStart');
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionStart');
                return;
            }
            swiper.emit('slideChangeTransitionStart');
            if (dir === 'next') {
                swiper.emit('slideNextTransitionStart');
            } else {
                swiper.emit('slidePrevTransitionStart');
            }
        }
    }

    function transitionEnd$1(runCallbacks, direction) {
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var previousIndex = swiper.previousIndex;
        swiper.animating = false;
        swiper.setTransition(0);
        var dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) {
                dir = 'next';
            } else if (activeIndex < previousIndex) {
                dir = 'prev';
            } else {
                dir = 'reset';
            }
        }
        swiper.emit('transitionEnd');
        if (runCallbacks && activeIndex !== previousIndex) {
            if (dir === 'reset') {
                swiper.emit('slideResetTransitionEnd');
                return;
            }
            swiper.emit('slideChangeTransitionEnd');
            if (dir === 'next') {
                swiper.emit('slideNextTransitionEnd');
            } else {
                swiper.emit('slidePrevTransitionEnd');
            }
        }
    }
    var transition$1 = {
        setTransition: setTransition,
        transitionStart: transitionStart,
        transitionEnd: transitionEnd$1,
    };

    function slideTo(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var slideIndex = index;
        if (slideIndex < 0) {
            slideIndex = 0;
        }
        var params = swiper.params;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var previousIndex = swiper.previousIndex;
        var activeIndex = swiper.activeIndex;
        var rtl = swiper.rtlTranslate;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }
        var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) {
            snapIndex = snapGrid.length - 1;
        }
        if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }
        var translate = -snapGrid[snapIndex];
        swiper.updateProgress(translate);
        if (params.normalizeSlideIndex) {
            for (var i = 0; i < slidesGrid.length; i += 1) {
                if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
                    slideIndex = i;
                }
            }
        }
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
                return false;
            }
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) {
                    return false;
                }
            }
        }
        var direction;
        if (slideIndex > activeIndex) {
            direction = 'next';
        } else if (slideIndex < activeIndex) {
            direction = 'prev';
        } else {
            direction = 'reset';
        }
        if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex);
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }
            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (speed === 0 || !Support.transition) {
            swiper.setTransition(0);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(translate);
            swiper.updateActiveIndex(slideIndex);
            swiper.updateSlidesClasses();
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.transitionStart(runCallbacks, direction);
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onSlideToWrapperTransitionEnd) {
                    swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) {
                            return;
                        }
                        if (e.target !== this) {
                            return;
                        }
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                        swiper.onSlideToWrapperTransitionEnd = null;
                        delete swiper.onSlideToWrapperTransitionEnd;
                        swiper.transitionEnd(runCallbacks, direction);
                    };
                }
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            }
        }
        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) index = 0;
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var newIndex = index;
        if (swiper.params.loop) {
            newIndex += swiper.loopedSlides;
        }
        return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    function slideNext(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        if (params.loop) {
            if (animating) {
                return false;
            }
            swiper.loopFix();
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
    }

    function slidePrev(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var params = swiper.params;
        var animating = swiper.animating;
        var snapGrid = swiper.snapGrid;
        var slidesGrid = swiper.slidesGrid;
        var rtlTranslate = swiper.rtlTranslate;
        if (params.loop) {
            if (animating) {
                return false;
            }
            swiper.loopFix();
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
        }
        var translate = rtlTranslate ? swiper.translate : -swiper.translate;

        function normalize(val) {
            if (val < 0) {
                return -Math.floor(Math.abs(val));
            }
            return Math.floor(val);
        }
        var normalizedTranslate = normalize(translate);
        var normalizedSnapGrid = snapGrid.map(function(val) {
            return normalize(val);
        });
        var normalizedSlidesGrid = slidesGrid.map(function(val) {
            return normalize(val);
        });
        var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
        var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        var prevIndex;
        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) {
                prevIndex = swiper.activeIndex - 1;
            }
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    function slideReset(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    function slideToClosest(speed, runCallbacks, internal) {
        if (speed === void 0) speed = this.params.speed;
        if (runCallbacks === void 0) runCallbacks = true;
        var swiper = this;
        var index = swiper.activeIndex;
        var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);
        if (snapIndex < swiper.snapGrid.length - 1) {
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            var currentSnap = swiper.snapGrid[snapIndex];
            var nextSnap = swiper.snapGrid[snapIndex + 1];
            if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
                index = swiper.params.slidesPerGroup;
            }
        }
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        var slideToIndex = swiper.clickedIndex;
        var realIndex;
        if (params.loop) {
            if (swiper.animating) {
                return;
            }
            realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            if (params.centeredSlides) {
                if ((slideToIndex < swiper.loopedSlides - (slidesPerView / 2)) || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")")).eq(0).index();
                    Utils.nextTick(function() {
                        swiper.slideTo(slideToIndex);
                    });
                } else {
                    swiper.slideTo(slideToIndex);
                }
            } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")")).eq(0).index();
                Utils.nextTick(function() {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }
    var slide = {
        slideTo: slideTo,
        slideToLoop: slideToLoop,
        slideNext: slideNext,
        slidePrev: slidePrev,
        slideReset: slideReset,
        slideToClosest: slideToClosest,
        slideToClickedSlide: slideToClickedSlide,
    };

    function loopCreate() {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
        var slides = $wrapperEl.children(("." + (params.slideClass)));
        if (params.loopFillGroupWithBlank) {
            var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
            if (blankSlidesNum !== params.slidesPerGroup) {
                for (var i = 0; i < blankSlidesNum; i += 1) {
                    var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
                    $wrapperEl.append(blankNode);
                }
                slides = $wrapperEl.children(("." + (params.slideClass)));
            }
        }
        if (params.slidesPerView === 'auto' && !params.loopedSlides) {
            params.loopedSlides = slides.length;
        }
        swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
        swiper.loopedSlides += params.loopAdditionalSlides;
        if (swiper.loopedSlides > slides.length) {
            swiper.loopedSlides = slides.length;
        }
        var prependSlides = [];
        var appendSlides = [];
        slides.each(function(index, el) {
            var slide = $(el);
            if (index < swiper.loopedSlides) {
                appendSlides.push(el);
            }
            if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
                prependSlides.push(el);
            }
            slide.attr('data-swiper-slide-index', index);
        });
        for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
            $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
        for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
            $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
        }
    }

    function loopFix() {
        var swiper = this;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var slides = swiper.slides;
        var loopedSlides = swiper.loopedSlides;
        var allowSlidePrev = swiper.allowSlidePrev;
        var allowSlideNext = swiper.allowSlideNext;
        var snapGrid = swiper.snapGrid;
        var rtl = swiper.rtlTranslate;
        var newIndex;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        var snapTranslate = -snapGrid[activeIndex];
        var diff = snapTranslate - swiper.getTranslate();
        if (activeIndex < loopedSlides) {
            newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
            newIndex += loopedSlides;
            var slideChanged = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
            newIndex = -slides.length + activeIndex + loopedSlides;
            newIndex += loopedSlides;
            var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
            if (slideChanged$1 && diff !== 0) {
                swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
    }

    function loopDestroy() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var slides = swiper.slides;
        $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + ",." + (params.slideClass) + "." + (params.slideBlankClass))).remove();
        slides.removeAttr('data-swiper-slide-index');
    }
    var loop = {
        loopCreate: loopCreate,
        loopFix: loopFix,
        loopDestroy: loopDestroy,
    };

    function setGrabCursor(moving) {
        var swiper = this;
        if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) {
            return;
        }
        var el = swiper.el;
        el.style.cursor = 'move';
        el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
        el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
        el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
        var swiper = this;
        if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) {
            return;
        }
        swiper.el.style.cursor = '';
    }
    var grabCursor = {
        setGrabCursor: setGrabCursor,
        unsetGrabCursor: unsetGrabCursor,
    };

    function appendSlide(slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        if (params.loop) {
            swiper.loopDestroy();
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) {
                    $wrapperEl.append(slides[i]);
                }
            }
        } else {
            $wrapperEl.append(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        if (params.loop) {
            swiper.loopDestroy();
        }
        var newActiveIndex = activeIndex + 1;
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i = 0; i < slides.length; i += 1) {
                if (slides[i]) {
                    $wrapperEl.prepend(slides[i]);
                }
            }
            newActiveIndex = activeIndex + slides.length;
        } else {
            $wrapperEl.prepend(slides);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var params = swiper.params;
        var activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
        }
        var baseLength = swiper.slides.length;
        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }
        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }
        var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        var slidesBuffer = [];
        for (var i = baseLength - 1; i >= index; i -= 1) {
            var currentSlide = swiper.slides.eq(i);
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                if (slides[i$1]) {
                    $wrapperEl.append(slides[i$1]);
                }
            }
            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            $wrapperEl.append(slides);
        }
        for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
            $wrapperEl.append(slidesBuffer[i$2]);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide(slidesIndexes) {
        var swiper = this;
        var params = swiper.params;
        var $wrapperEl = swiper.$wrapperEl;
        var activeIndex = swiper.activeIndex;
        var activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
        }
        var newActiveIndex = activeIndexBuffer;
        var indexToRemove;
        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (var i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) {
                    swiper.slides.eq(indexToRemove).remove();
                }
                if (indexToRemove < newActiveIndex) {
                    newActiveIndex -= 1;
                }
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) {
                swiper.slides.eq(indexToRemove).remove();
            }
            if (indexToRemove < newActiveIndex) {
                newActiveIndex -= 1;
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        }
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!(params.observer && Support.observer)) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        var swiper = this;
        var slidesIndexes = [];
        for (var i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }
        swiper.removeSlide(slidesIndexes);
    }
    var manipulation = {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        addSlide: addSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides,
    };
    var Device = (function Device() {
        var ua = win.navigator.userAgent;
        var device = {
            ios: false,
            android: false,
            androidChrome: false,
            desktop: false,
            windows: false,
            iphone: false,
            ipod: false,
            ipad: false,
            cordova: win.cordova || win.phonegap,
            phonegap: win.cordova || win.phonegap,
        };
        var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);
        var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (windows) {
            device.os = 'windows';
            device.osVersion = windows[2];
            device.windows = true;
        }
        if (android && !windows) {
            device.os = 'android';
            device.osVersion = android[2];
            device.android = true;
            device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
        }
        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        }
        if (iphone && !ipod) {
            device.osVersion = iphone[2].replace(/_/g, '.');
            device.iphone = true;
        }
        if (ipad) {
            device.osVersion = ipad[2].replace(/_/g, '.');
            device.ipad = true;
        }
        if (ipod) {
            device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
            device.iphone = true;
        }
        if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
            if (device.osVersion.split('.')[0] === '10') {
                device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
            }
        }
        device.desktop = !(device.os || device.android || device.webView);
        device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
        if (device.os && device.os === 'ios') {
            var osVersionArr = device.osVersion.split('.');
            var metaViewport = doc.querySelector('meta[name="viewport"]');
            device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
        }
        device.pixelRatio = win.devicePixelRatio || 1;
        return device;
    }());

    function onTouchStart(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }
        var e = event;
        if (e.originalEvent) {
            e = e.originalEvent;
        }
        data.isTouchEvent = e.type === 'touchstart';
        if (!data.isTouchEvent && 'which' in e && e.which === 3) {
            return;
        }
        if (!data.isTouchEvent && 'button' in e && e.button > 0) {
            return;
        }
        if (data.isTouched && data.isMoved) {
            return;
        }
        if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!$(e).closest(params.swipeHandler)[0]) {
                return;
            }
        }
        touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        var startX = touches.currentX;
        var startY = touches.currentY;
        var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
        var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
        if (edgeSwipeDetection && ((startX <= edgeSwipeThreshold) || (startX >= win.screen.width - edgeSwipeThreshold))) {
            return;
        }
        Utils.extend(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined,
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = Utils.now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) {
            data.allowThresholdMove = false;
        }
        if (e.type !== 'touchstart') {
            var preventDefault = true;
            if ($(e.target).is(data.formElements)) {
                preventDefault = false;
            }
            if (doc.activeElement && $(doc.activeElement).is(data.formElements) && doc.activeElement !== e.target) {
                doc.activeElement.blur();
            }
            var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if (params.touchStartForcePreventDefault || shouldPreventDefault) {
                e.preventDefault();
            }
        }
        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) {
            e = e.originalEvent;
        }
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }
            return;
        }
        if (data.isTouchEvent && e.type === 'mousemove') {
            return;
        }
        var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            swiper.allowClick = false;
            if (data.isTouched) {
                Utils.extend(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                });
                data.touchStartTime = Utils.now();
            }
            return;
        }
        if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                if ((pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if ((pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
                return;
            }
        }
        if (data.isTouchEvent && doc.activeElement) {
            if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }
        if (e.targetTouches && e.targetTouches.length > 1) {
            return;
        }
        touches.currentX = pageX;
        touches.currentY = pageY;
        var diffX = touches.currentX - touches.startX;
        var diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt((Math.pow(diffX, 2)) + (Math.pow(diffY, 2))) < swiper.params.threshold) {
            return;
        }
        if (typeof data.isScrolling === 'undefined') {
            var touchAngle;
            if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
                data.isScrolling = false;
            } else {
                if ((diffX * diffX) + (diffY * diffY) >= 25) {
                    touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
                }
            }
        }
        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (data.isScrolling) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        e.preventDefault();
        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }
        if (!data.isMoved) {
            if (params.loop) {
                swiper.loopFix();
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
            }
            data.allowMomentumBounce = false;
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit('sliderFirstMove', e);
        }
        swiper.emit('sliderMove', e);
        data.isMoved = true;
        var diff = swiper.isHorizontal() ? diffX : diffY;
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) {
            diff = -diff;
        }
        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        data.currentTranslate = diff + data.startTranslate;
        var disableParentSwiper = true;
        var resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
            disableParentSwiper = false;
            if (params.resistance) {
                data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow((-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio));
            }
        } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
            disableParentSwiper = false;
            if (params.resistance) {
                data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow((swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio));
            }
        }
        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        }
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }
        if (!params.followFinger) {
            return;
        }
        if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode) {
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime,
                });
            }
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: Utils.now(),
            });
        }
        swiper.updateProgress(data.currentTranslate);
        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        var swiper = this;
        var data = swiper.touchEventsData;
        var params = swiper.params;
        var touches = swiper.touches;
        var rtl = swiper.rtlTranslate;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesGrid = swiper.slidesGrid;
        var snapGrid = swiper.snapGrid;
        var e = event;
        if (e.originalEvent) {
            e = e.originalEvent;
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }
        var touchEndTime = Utils.now();
        var timeDiff = touchEndTime - data.touchStartTime;
        if (swiper.allowClick) {
            swiper.updateClickedSlide(e);
            swiper.emit('tap', e);
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
                if (data.clickTimeout) {
                    clearTimeout(data.clickTimeout);
                }
                data.clickTimeout = Utils.nextTick(function() {
                    if (!swiper || swiper.destroyed) {
                        return;
                    }
                    swiper.emit('click', e);
                }, 300);
            }
            if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
                if (data.clickTimeout) {
                    clearTimeout(data.clickTimeout);
                }
                swiper.emit('doubleTap', e);
            }
        }
        data.lastClickTime = Utils.now();
        Utils.nextTick(function() {
            if (!swiper.destroyed) {
                swiper.allowClick = true;
            }
        });
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        var currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }
        if (params.freeMode) {
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }
                return;
            }
            if (params.freeModeMomentum) {
                if (data.velocities.length > 1) {
                    var lastMoveEvent = data.velocities.pop();
                    var velocityEvent = data.velocities.pop();
                    var distance = lastMoveEvent.position - velocityEvent.position;
                    var time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
                        swiper.velocity = 0;
                    }
                    if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }
                swiper.velocity *= params.freeModeMomentumVelocityRatio;
                data.velocities.length = 0;
                var momentumDuration = 1000 * params.freeModeMomentumRatio;
                var momentumDistance = swiper.velocity * momentumDuration;
                var newPosition = swiper.translate + momentumDistance;
                if (rtl) {
                    newPosition = -newPosition;
                }
                var doBounce = false;
                var afterBouncePosition;
                var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                var needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }
                    if (params.loop && params.centeredSlides) {
                        needsLoopFix = true;
                    }
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeModeMomentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }
                    if (params.loop && params.centeredSlides) {
                        needsLoopFix = true;
                    }
                } else if (params.freeModeSticky) {
                    var nextSlide;
                    for (var j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }
                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }
                    newPosition = -newPosition;
                }
                if (needsLoopFix) {
                    swiper.once('transitionEnd', function() {
                        swiper.loopFix();
                    });
                }
                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }
                } else if (params.freeModeSticky) {
                    swiper.slideToClosest();
                    return;
                }
                if (params.freeModeMomentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(function() {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) {
                            return;
                        }
                        swiper.emit('momentumBounce');
                        swiper.setTransition(params.speed);
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(function() {
                            if (!swiper || swiper.destroyed) {
                                return;
                            }
                            swiper.transitionEnd();
                        });
                    });
                } else if (swiper.velocity) {
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function() {
                            if (!swiper || swiper.destroyed) {
                                return;
                            }
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeModeSticky) {
                swiper.slideToClosest();
                return;
            }
            if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            return;
        }
        var stopIndex = 0;
        var groupSize = swiper.slidesSizesGrid[0];
        for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
            if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
                if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
                }
            } else if (currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        if (timeDiff > params.longSwipesMs) {
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) {
                    swiper.slideTo(stopIndex + params.slidesPerGroup);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
            if (swiper.swipeDirection === 'prev') {
                if (ratio > (1 - params.longSwipesRatio)) {
                    swiper.slideTo(stopIndex + params.slidesPerGroup);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
        } else {
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                swiper.slideTo(stopIndex + params.slidesPerGroup);
            }
            if (swiper.swipeDirection === 'prev') {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        var swiper = this;
        var params = swiper.params;
        var el = swiper.el;
        if (el && el.offsetWidth === 0) {
            return;
        }
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }
        var allowSlideNext = swiper.allowSlideNext;
        var allowSlidePrev = swiper.allowSlidePrev;
        var snapGrid = swiper.snapGrid;
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        if (params.freeMode) {
            var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
        } else {
            swiper.updateSlidesClasses();
            if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e) {
        var swiper = this;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) {
                e.preventDefault();
            }
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function attachEvents() {
        var swiper = this;
        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl; {
            swiper.onTouchStart = onTouchStart.bind(swiper);
            swiper.onTouchMove = onTouchMove.bind(swiper);
            swiper.onTouchEnd = onTouchEnd.bind(swiper);
        }
        swiper.onClick = onClick.bind(swiper);
        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested; {
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
                doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
                doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
                        passive: false,
                        capture: capture
                    } : capture);
                    target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.addEventListener('mousedown', swiper.onTouchStart, false);
                    doc.addEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.addEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            if (params.preventClicks || params.preventClicksPropagation) {
                target.addEventListener('click', swiper.onClick, true);
            }
        }
        swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
    }

    function detachEvents() {
        var swiper = this;
        var params = swiper.params;
        var touchEvents = swiper.touchEvents;
        var el = swiper.el;
        var wrapperEl = swiper.wrapperEl;
        var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
        var capture = !!params.nested; {
            if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
                doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
            } else {
                if (Support.touch) {
                    var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
                        passive: true,
                        capture: false
                    } : false;
                    target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                    target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                }
                if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                    target.removeEventListener('mousedown', swiper.onTouchStart, false);
                    doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
                    doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
                }
            }
            if (params.preventClicks || params.preventClicksPropagation) {
                target.removeEventListener('click', swiper.onClick, true);
            }
        }
        swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
    }
    var events = {
        attachEvents: attachEvents,
        detachEvents: detachEvents,
    };

    function setBreakpoint() {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var initialized = swiper.initialized;
        var loopedSlides = swiper.loopedSlides;
        if (loopedSlides === void 0) loopedSlides = 0;
        var params = swiper.params;
        var breakpoints = params.breakpoints;
        if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) {
            return;
        }
        var breakpoint = swiper.getBreakpoint(breakpoints);
        if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
            var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
            if (breakpointOnlyParams) {
                ['slidesPerView', 'spaceBetween', 'slidesPerGroup'].forEach(function(param) {
                    var paramValue = breakpointOnlyParams[param];
                    if (typeof paramValue === 'undefined') {
                        return;
                    }
                    if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
                        breakpointOnlyParams[param] = 'auto';
                    } else if (param === 'slidesPerView') {
                        breakpointOnlyParams[param] = parseFloat(paramValue);
                    } else {
                        breakpointOnlyParams[param] = parseInt(paramValue, 10);
                    }
                });
            }
            var breakpointParams = breakpointOnlyParams || swiper.originalParams;
            var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
            var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
            if (directionChanged && initialized) {
                swiper.changeDirection();
            }
            Utils.extend(swiper.params, breakpointParams);
            Utils.extend(swiper, {
                allowTouchMove: swiper.params.allowTouchMove,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
            });
            swiper.currentBreakpoint = breakpoint;
            if (needsReLoop && initialized) {
                swiper.loopDestroy();
                swiper.loopCreate();
                swiper.updateSlides();
                swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
            }
            swiper.emit('breakpoint', breakpointParams);
        }
    }

    function getBreakpoint(breakpoints) {
        var swiper = this;
        if (!breakpoints) {
            return undefined;
        }
        var breakpoint = false;
        var points = [];
        Object.keys(breakpoints).forEach(function(point) {
            points.push(point);
        });
        points.sort(function(a, b) {
            return parseInt(a, 10) - parseInt(b, 10);
        });
        for (var i = 0; i < points.length; i += 1) {
            var point = points[i];
            if (swiper.params.breakpointsInverse) {
                if (point <= win.innerWidth) {
                    breakpoint = point;
                }
            } else if (point >= win.innerWidth && !breakpoint) {
                breakpoint = point;
            }
        }
        return breakpoint || 'max';
    }
    var breakpoints = {
        setBreakpoint: setBreakpoint,
        getBreakpoint: getBreakpoint
    };

    function addClasses() {
        var swiper = this;
        var classNames = swiper.classNames;
        var params = swiper.params;
        var rtl = swiper.rtl;
        var $el = swiper.$el;
        var suffixes = [];
        suffixes.push('initialized');
        suffixes.push(params.direction);
        if (params.freeMode) {
            suffixes.push('free-mode');
        }
        if (!Support.flexbox) {
            suffixes.push('no-flexbox');
        }
        if (params.autoHeight) {
            suffixes.push('autoheight');
        }
        if (rtl) {
            suffixes.push('rtl');
        }
        if (params.slidesPerColumn > 1) {
            suffixes.push('multirow');
        }
        if (Device.android) {
            suffixes.push('android');
        }
        if (Device.ios) {
            suffixes.push('ios');
        }
        if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
            suffixes.push(("wp8-" + (params.direction)));
        }
        suffixes.forEach(function(suffix) {
            classNames.push(params.containerModifierClass + suffix);
        });
        $el.addClass(classNames.join(' '));
    }

    function removeClasses() {
        var swiper = this;
        var $el = swiper.$el;
        var classNames = swiper.classNames;
        $el.removeClass(classNames.join(' '));
    }
    var classes = {
        addClasses: addClasses,
        removeClasses: removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
        var image;

        function onReady() {
            if (callback) {
                callback();
            }
        }
        if (!imageEl.complete || !checkForComplete) {
            if (src) {
                image = new win.Image();
                image.onload = onReady;
                image.onerror = onReady;
                if (sizes) {
                    image.sizes = sizes;
                }
                if (srcset) {
                    image.srcset = srcset;
                }
                if (src) {
                    image.src = src;
                }
            } else {
                onReady();
            }
        } else {
            onReady();
        }
    }

    function preloadImages() {
        var swiper = this;
        swiper.imagesToLoad = swiper.$el.find('img');

        function onReady() {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) {
                return;
            }
            if (swiper.imagesLoaded !== undefined) {
                swiper.imagesLoaded += 1;
            }
            if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                if (swiper.params.updateOnImagesReady) {
                    swiper.update();
                }
                swiper.emit('imagesReady');
            }
        }
        for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
            var imageEl = swiper.imagesToLoad[i];
            swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
        }
    }
    var images = {
        loadImage: loadImage,
        preloadImages: preloadImages,
    };

    function checkOverflow() {
        var swiper = this;
        var wasLocked = swiper.isLocked;
        swiper.isLocked = swiper.snapGrid.length === 1;
        swiper.allowSlideNext = !swiper.isLocked;
        swiper.allowSlidePrev = !swiper.isLocked;
        if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
        }
        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
            swiper.navigation.update();
        }
    }
    var checkOverflow$1 = {
        checkOverflow: checkOverflow
    };
    var defaults = {
        init: true,
        direction: 'horizontal',
        touchEventsTarget: 'container',
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: false,
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        freeMode: false,
        freeModeMomentum: true,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: true,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: false,
        freeModeMinimumVelocity: 0.02,
        autoHeight: false,
        setWrapperSize: false,
        virtualTranslate: false,
        effect: 'slide',
        breakpoints: undefined,
        breakpointsInverse: false,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'column',
        slidesPerGroup: 1,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        watchOverflow: false,
        roundLengths: false,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 0,
        touchMoveStopPropagation: true,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        uniqueNavElements: true,
        resistance: true,
        resistanceRatio: 0.85,
        watchSlidesProgress: false,
        watchSlidesVisibility: false,
        grabCursor: false,
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        preloadImages: true,
        updateOnImagesReady: true,
        loop: false,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: false,
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: true,
        containerModifierClass: 'swiper-container-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-invisible-blank',
        slideActiveClass: 'swiper-slide-active',
        slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideDuplicateClass: 'swiper-slide-duplicate',
        slideNextClass: 'swiper-slide-next',
        slideDuplicateNextClass: 'swiper-slide-duplicate-next',
        slidePrevClass: 'swiper-slide-prev',
        slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
        wrapperClass: 'swiper-wrapper',
        runCallbacksOnInit: true,
    };
    var prototypes = {
        update: update,
        translate: translate,
        transition: transition$1,
        slide: slide,
        loop: loop,
        grabCursor: grabCursor,
        manipulation: manipulation,
        events: events,
        breakpoints: breakpoints,
        checkOverflow: checkOverflow$1,
        classes: classes,
        images: images,
    };
    var extendedDefaults = {};
    var Swiper = (function(SwiperClass) {
        function Swiper() {
            var assign;
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            var el;
            var params;
            if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
                params = args[0];
            } else {
                (assign = args, el = assign[0], params = assign[1]);
            }
            if (!params) {
                params = {};
            }
            params = Utils.extend({}, params);
            if (el && !params.el) {
                params.el = el;
            }
            SwiperClass.call(this, params);
            Object.keys(prototypes).forEach(function(prototypeGroup) {
                Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) {
                    if (!Swiper.prototype[protoMethod]) {
                        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
                    }
                });
            });
            var swiper = this;
            if (typeof swiper.modules === 'undefined') {
                swiper.modules = {};
            }
            Object.keys(swiper.modules).forEach(function(moduleName) {
                var module = swiper.modules[moduleName];
                if (module.params) {
                    var moduleParamName = Object.keys(module.params)[0];
                    var moduleParams = module.params[moduleParamName];
                    if (typeof moduleParams !== 'object' || moduleParams === null) {
                        return;
                    }
                    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                        return;
                    }
                    if (params[moduleParamName] === true) {
                        params[moduleParamName] = {
                            enabled: true
                        };
                    }
                    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                        params[moduleParamName].enabled = true;
                    }
                    if (!params[moduleParamName]) {
                        params[moduleParamName] = {
                            enabled: false
                        };
                    }
                }
            });
            var swiperParams = Utils.extend({}, defaults);
            swiper.useModulesParams(swiperParams);
            swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = Utils.extend({}, swiper.params);
            swiper.passedParams = Utils.extend({}, params);
            swiper.$ = $;
            var $el = $(swiper.params.el);
            el = $el[0];
            if (!el) {
                return undefined;
            }
            if ($el.length > 1) {
                var swipers = [];
                $el.each(function(index, containerEl) {
                    var newParams = Utils.extend({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                });
                return swipers;
            }
            el.swiper = swiper;
            $el.data('swiper', swiper);
            var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));
            Utils.extend(swiper, {
                $el: $el,
                el: el,
                $wrapperEl: $wrapperEl,
                wrapperEl: $wrapperEl[0],
                classNames: [],
                slides: $(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: function isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical: function isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                wrongRTL: $wrapperEl.css('display') === '-webkit-box',
                activeIndex: 0,
                realIndex: 0,
                isBeginning: true,
                isEnd: false,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                touchEvents: (function touchEvents() {
                    var touch = ['touchstart', 'touchmove', 'touchend'];
                    var desktop = ['mousedown', 'mousemove', 'mouseup'];
                    if (Support.pointerEvents) {
                        desktop = ['pointerdown', 'pointermove', 'pointerup'];
                    } else if (Support.prefixedPointerEvents) {
                        desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
                    }
                    swiper.touchEventsTouch = {
                        start: touch[0],
                        move: touch[1],
                        end: touch[2],
                    };
                    swiper.touchEventsDesktop = {
                        start: desktop[0],
                        move: desktop[1],
                        end: desktop[2],
                    };
                    return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                }()),
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    formElements: 'input, select, option, textarea, button, video',
                    lastClickTime: Utils.now(),
                    clickTimeout: undefined,
                    velocities: [],
                    allowMomentumBounce: undefined,
                    isTouchEvent: undefined,
                    startMoving: undefined,
                },
                allowClick: true,
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
            });
            swiper.useModules();
            if (swiper.params.init) {
                swiper.init();
            }
            return swiper;
        }
        if (SwiperClass) Swiper.__proto__ = SwiperClass;
        Swiper.prototype = Object.create(SwiperClass && SwiperClass.prototype);
        Swiper.prototype.constructor = Swiper;
        var staticAccessors = {
            extendedDefaults: {
                configurable: true
            },
            defaults: {
                configurable: true
            },
            Class: {
                configurable: true
            },
            $: {
                configurable: true
            }
        };
        Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides;
            var slidesGrid = swiper.slidesGrid;
            var swiperSize = swiper.size;
            var activeIndex = swiper.activeIndex;
            var spv = 1;
            if (params.centeredSlides) {
                var slideSize = slides[activeIndex].swiperSlideSize;
                var breakLoop;
                for (var i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) {
                            breakLoop = true;
                        }
                    }
                }
                for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
                    if (slides[i$1] && !breakLoop) {
                        slideSize += slides[i$1].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) {
                            breakLoop = true;
                        }
                    }
                }
            } else {
                for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
                    if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
                        spv += 1;
                    }
                }
            }
            return spv;
        };
        Swiper.prototype.update = function update() {
            var swiper = this;
            if (!swiper || swiper.destroyed) {
                return;
            }
            var snapGrid = swiper.snapGrid;
            var params = swiper.params;
            if (params.breakpoints) {
                swiper.setBreakpoint();
            }
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
                var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            var translated;
            if (swiper.params.freeMode) {
                setTranslate();
                if (swiper.params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
                    translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate();
                }
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
            swiper.emit('update');
        };
        Swiper.prototype.changeDirection = function changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) needUpdate = true;
            var swiper = this;
            var currentDirection = swiper.params.direction;
            if (!newDirection) {
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }
            if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
                return swiper;
            }
            if (currentDirection === 'vertical') {
                swiper.$el.removeClass(((swiper.params.containerModifierClass) + "vertical wp8-vertical")).addClass(("" + (swiper.params.containerModifierClass) + newDirection));
                if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                    swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
                }
            }
            if (currentDirection === 'horizontal') {
                swiper.$el.removeClass(((swiper.params.containerModifierClass) + "horizontal wp8-horizontal")).addClass(("" + (swiper.params.containerModifierClass) + newDirection));
                if ((Browser.isIE || Browser.isEdge) && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                    swiper.$el.addClass(((swiper.params.containerModifierClass) + "wp8-" + newDirection));
                }
            }
            swiper.params.direction = newDirection;
            swiper.slides.each(function(slideIndex, slideEl) {
                if (newDirection === 'vertical') {
                    slideEl.style.width = '';
                } else {
                    slideEl.style.height = '';
                }
            });
            swiper.emit('changeDirection');
            if (needUpdate) {
                swiper.update();
            }
            return swiper;
        };
        Swiper.prototype.init = function init() {
            var swiper = this;
            if (swiper.initialized) {
                return;
            }
            swiper.emit('beforeInit');
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }
            swiper.addClasses();
            if (swiper.params.loop) {
                swiper.loopCreate();
            }
            swiper.updateSize();
            swiper.updateSlides();
            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }
            if (swiper.params.preloadImages) {
                swiper.preloadImages();
            }
            if (swiper.params.loop) {
                swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
            }
            swiper.attachEvents();
            swiper.initialized = true;
            swiper.emit('init');
        };
        Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) deleteInstance = true;
            if (cleanStyles === void 0) cleanStyles = true;
            var swiper = this;
            var params = swiper.params;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }
            swiper.emit('beforeDestroy');
            swiper.initialized = false;
            swiper.detachEvents();
            if (params.loop) {
                swiper.loopDestroy();
            }
            if (cleanStyles) {
                swiper.removeClasses();
                $el.removeAttr('style');
                $wrapperEl.removeAttr('style');
                if (slides && slides.length) {
                    slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row');
                }
            }
            swiper.emit('destroy');
            Object.keys(swiper.eventsListeners).forEach(function(eventName) {
                swiper.off(eventName);
            });
            if (deleteInstance !== false) {
                swiper.$el[0].swiper = null;
                swiper.$el.data('swiper', null);
                Utils.deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        };
        Swiper.extendDefaults = function extendDefaults(newDefaults) {
            Utils.extend(extendedDefaults, newDefaults);
        };
        staticAccessors.extendedDefaults.get = function() {
            return extendedDefaults;
        };
        staticAccessors.defaults.get = function() {
            return defaults;
        };
        staticAccessors.Class.get = function() {
            return SwiperClass;
        };
        staticAccessors.$.get = function() {
            return $;
        };
        Object.defineProperties(Swiper, staticAccessors);
        return Swiper;
    }(SwiperClass));
    var Device$1 = {
        name: 'device',
        proto: {
            device: Device,
        },
        static: {
            device: Device,
        },
    };
    var Support$1 = {
        name: 'support',
        proto: {
            support: Support,
        },
        static: {
            support: Support,
        },
    };
    var Browser$1 = {
        name: 'browser',
        proto: {
            browser: Browser,
        },
        static: {
            browser: Browser,
        },
    };
    var Resize = {
        name: 'resize',
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                resize: {
                    resizeHandler: function resizeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) {
                            return;
                        }
                        swiper.emit('beforeResize');
                        swiper.emit('resize');
                    },
                    orientationChangeHandler: function orientationChangeHandler() {
                        if (!swiper || swiper.destroyed || !swiper.initialized) {
                            return;
                        }
                        swiper.emit('orientationchange');
                    },
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                win.addEventListener('resize', swiper.resize.resizeHandler);
                win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
            destroy: function destroy() {
                var swiper = this;
                win.removeEventListener('resize', swiper.resize.resizeHandler);
                win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
            },
        },
    };
    var Observer = {
        func: win.MutationObserver || win.WebkitMutationObserver,
        attach: function attach(target, options) {
            if (options === void 0) options = {};
            var swiper = this;
            var ObserverFunc = Observer.func;
            var observer = new ObserverFunc(function(mutations) {
                if (mutations.length === 1) {
                    swiper.emit('observerUpdate', mutations[0]);
                    return;
                }
                var observerUpdate = function observerUpdate() {
                    swiper.emit('observerUpdate', mutations[0]);
                };
                if (win.requestAnimationFrame) {
                    win.requestAnimationFrame(observerUpdate);
                } else {
                    win.setTimeout(observerUpdate, 0);
                }
            });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: typeof options.childList === 'undefined' ? true : options.childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
            });
            swiper.observer.observers.push(observer);
        },
        init: function init() {
            var swiper = this;
            if (!Support.observer || !swiper.params.observer) {
                return;
            }
            if (swiper.params.observeParents) {
                var containerParents = swiper.$el.parents();
                for (var i = 0; i < containerParents.length; i += 1) {
                    swiper.observer.attach(containerParents[i]);
                }
            }
            swiper.observer.attach(swiper.$el[0], {
                childList: swiper.params.observeSlideChildren
            });
            swiper.observer.attach(swiper.$wrapperEl[0], {
                attributes: false
            });
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.observer.observers.forEach(function(observer) {
                observer.disconnect();
            });
            swiper.observer.observers = [];
        },
    };
    var Observer$1 = {
        name: 'observer',
        params: {
            observer: false,
            observeParents: false,
            observeSlideChildren: false,
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                observer: {
                    init: Observer.init.bind(swiper),
                    attach: Observer.attach.bind(swiper),
                    destroy: Observer.destroy.bind(swiper),
                    observers: [],
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.observer.init();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.observer.destroy();
            },
        },
    };
    var Virtual = {
        update: function update(force) {
            var swiper = this;
            var ref = swiper.params;
            var slidesPerView = ref.slidesPerView;
            var slidesPerGroup = ref.slidesPerGroup;
            var centeredSlides = ref.centeredSlides;
            var ref$1 = swiper.params.virtual;
            var addSlidesBefore = ref$1.addSlidesBefore;
            var addSlidesAfter = ref$1.addSlidesAfter;
            var ref$2 = swiper.virtual;
            var previousFrom = ref$2.from;
            var previousTo = ref$2.to;
            var slides = ref$2.slides;
            var previousSlidesGrid = ref$2.slidesGrid;
            var renderSlide = ref$2.renderSlide;
            var previousOffset = ref$2.offset;
            swiper.updateActiveIndex();
            var activeIndex = swiper.activeIndex || 0;
            var offsetProp;
            if (swiper.rtlTranslate) {
                offsetProp = 'right';
            } else {
                offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            }
            var slidesAfter;
            var slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
                slidesBefore = slidesPerGroup + addSlidesAfter;
            }
            var from = Math.max((activeIndex || 0) - slidesBefore, 0);
            var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
            var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            Utils.extend(swiper.virtual, {
                from: from,
                to: to,
                offset: offset,
                slidesGrid: swiper.slidesGrid,
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                if (swiper.lazy && swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            }
            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.css(offsetProp, (offset + "px"));
                }
                swiper.updateProgress();
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset: offset,
                    from: from,
                    to: to,
                    slides: (function getSlides() {
                        var slidesToRender = [];
                        for (var i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }
                        return slidesToRender;
                    }()),
                });
                onRendered();
                return;
            }
            var prependIndexes = [];
            var appendIndexes = [];
            if (force) {
                swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
            } else {
                for (var i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
                    }
                }
            }
            for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                if (i$1 >= from && i$1 <= to) {
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(i$1);
                    } else {
                        if (i$1 > previousTo) {
                            appendIndexes.push(i$1);
                        }
                        if (i$1 < previousFrom) {
                            prependIndexes.push(i$1);
                        }
                    }
                }
            }
            appendIndexes.forEach(function(index) {
                swiper.$wrapperEl.append(renderSlide(slides[index], index));
            });
            prependIndexes.sort(function(a, b) {
                return b - a;
            }).forEach(function(index) {
                swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
            });
            swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
            onRendered();
        },
        renderSlide: function renderSlide(slide, index) {
            var swiper = this;
            var params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }
            var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
            if (!$slideEl.attr('data-swiper-slide-index')) {
                $slideEl.attr('data-swiper-slide-index', index);
            }
            if (params.cache) {
                swiper.virtual.cache[index] = $slideEl;
            }
            return $slideEl;
        },
        appendSlide: function appendSlide(slides) {
            var swiper = this;
            if (typeof slides === 'object' && 'length' in slides) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) {
                        swiper.virtual.slides.push(slides[i]);
                    }
                }
            } else {
                swiper.virtual.slides.push(slides);
            }
            swiper.virtual.update(true);
        },
        prependSlide: function prependSlide(slides) {
            var swiper = this;
            var activeIndex = swiper.activeIndex;
            var newActiveIndex = activeIndex + 1;
            var numberOfNewSlides = 1;
            if (Array.isArray(slides)) {
                for (var i = 0; i < slides.length; i += 1) {
                    if (slides[i]) {
                        swiper.virtual.slides.unshift(slides[i]);
                    }
                }
                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else {
                swiper.virtual.slides.unshift(slides);
            }
            if (swiper.params.virtual.cache) {
                var cache = swiper.virtual.cache;
                var newCache = {};
                Object.keys(cache).forEach(function(cachedIndex) {
                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cache[cachedIndex];
                });
                swiper.virtual.cache = newCache;
            }
            swiper.virtual.update(true);
            swiper.slideTo(newActiveIndex, 0);
        },
        removeSlide: function removeSlide(slidesIndexes) {
            var swiper = this;
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) {
                return;
            }
            var activeIndex = swiper.activeIndex;
            if (Array.isArray(slidesIndexes)) {
                for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);
                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes[i]];
                    }
                    if (slidesIndexes[i] < activeIndex) {
                        activeIndex -= 1;
                    }
                    activeIndex = Math.max(activeIndex, 0);
                }
            } else {
                swiper.virtual.slides.splice(slidesIndexes, 1);
                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                }
                if (slidesIndexes < activeIndex) {
                    activeIndex -= 1;
                }
                activeIndex = Math.max(activeIndex, 0);
            }
            swiper.virtual.update(true);
            swiper.slideTo(activeIndex, 0);
        },
        removeAllSlides: function removeAllSlides() {
            var swiper = this;
            swiper.virtual.slides = [];
            if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
            }
            swiper.virtual.update(true);
            swiper.slideTo(0, 0);
        },
    };
    var Virtual$1 = {
        name: 'virtual',
        params: {
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                virtual: {
                    update: Virtual.update.bind(swiper),
                    appendSlide: Virtual.appendSlide.bind(swiper),
                    prependSlide: Virtual.prependSlide.bind(swiper),
                    removeSlide: Virtual.removeSlide.bind(swiper),
                    removeAllSlides: Virtual.removeAllSlides.bind(swiper),
                    renderSlide: Virtual.renderSlide.bind(swiper),
                    slides: swiper.params.virtual.slides,
                    cache: {},
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
                var overwriteParams = {
                    watchSlidesProgress: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
                if (!swiper.params.initialSlide) {
                    swiper.virtual.update();
                }
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.virtual.enabled) {
                    return;
                }
                swiper.virtual.update();
            },
        },
    };
    var Keyboard = {
        handle: function handle(event) {
            var swiper = this;
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) {
                e = e.originalEvent;
            }
            var kc = e.keyCode || e.charCode;
            if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
                return false;
            }
            if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }
            if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
                return undefined;
            }
            if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
                var inView = false;
                if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
                    return undefined;
                }
                var windowWidth = win.innerWidth;
                var windowHeight = win.innerHeight;
                var swiperOffset = swiper.$el.offset();
                if (rtl) {
                    swiperOffset.left -= swiper.$el[0].scrollLeft;
                }
                var swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + swiper.width, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + swiper.height],
                    [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]
                ];
                for (var i = 0; i < swiperCoord.length; i += 1) {
                    var point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        inView = true;
                    }
                }
                if (!inView) {
                    return undefined;
                }
            }
            if (swiper.isHorizontal()) {
                if (kc === 37 || kc === 39) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                }
                if ((kc === 39 && !rtl) || (kc === 37 && rtl)) {
                    swiper.slideNext();
                }
                if ((kc === 37 && !rtl) || (kc === 39 && rtl)) {
                    swiper.slidePrev();
                }
            } else {
                if (kc === 38 || kc === 40) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else {
                        e.returnValue = false;
                    }
                }
                if (kc === 40) {
                    swiper.slideNext();
                }
                if (kc === 38) {
                    swiper.slidePrev();
                }
            }
            swiper.emit('keyPress', kc);
            return undefined;
        },
        enable: function enable() {
            var swiper = this;
            if (swiper.keyboard.enabled) {
                return;
            }
            $(doc).on('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = true;
        },
        disable: function disable() {
            var swiper = this;
            if (!swiper.keyboard.enabled) {
                return;
            }
            $(doc).off('keydown', swiper.keyboard.handle);
            swiper.keyboard.enabled = false;
        },
    };
    var Keyboard$1 = {
        name: 'keyboard',
        params: {
            keyboard: {
                enabled: false,
                onlyInViewport: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                keyboard: {
                    enabled: false,
                    enable: Keyboard.enable.bind(swiper),
                    disable: Keyboard.disable.bind(swiper),
                    handle: Keyboard.handle.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.keyboard.enabled) {
                    swiper.keyboard.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.keyboard.enabled) {
                    swiper.keyboard.disable();
                }
            },
        },
    };

    function isEventSupported() {
        var eventName = 'onwheel';
        var isSupported = eventName in doc;
        if (!isSupported) {
            var element = doc.createElement('div');
            element.setAttribute(eventName, 'return;');
            isSupported = typeof element[eventName] === 'function';
        }
        if (!isSupported && doc.implementation && doc.implementation.hasFeature && doc.implementation.hasFeature('', '') !== true) {
            isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
        }
        return isSupported;
    }
    var Mousewheel = {
        lastScrollTime: Utils.now(),
        event: (function getEvent() {
            if (win.navigator.userAgent.indexOf('firefox') > -1) {
                return 'DOMMouseScroll';
            }
            return isEventSupported() ? 'wheel' : 'mousewheel';
        }()),
        normalize: function normalize(e) {
            var PIXEL_STEP = 10;
            var LINE_HEIGHT = 40;
            var PAGE_HEIGHT = 800;
            var sX = 0;
            var sY = 0;
            var pX = 0;
            var pY = 0;
            if ('detail' in e) {
                sY = e.detail;
            }
            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }
            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            }
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
            if ('deltaY' in e) {
                pY = e.deltaY;
            }
            if ('deltaX' in e) {
                pX = e.deltaX;
            }
            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }
            if (pX && !sX) {
                sX = (pX < 1) ? -1 : 1;
            }
            if (pY && !sY) {
                sY = (pY < 1) ? -1 : 1;
            }
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY,
            };
        },
        handleMouseEnter: function handleMouseEnter() {
            var swiper = this;
            swiper.mouseEntered = true;
        },
        handleMouseLeave: function handleMouseLeave() {
            var swiper = this;
            swiper.mouseEntered = false;
        },
        handle: function handle(event) {
            var e = event;
            var swiper = this;
            var params = swiper.params.mousewheel;
            if (!swiper.mouseEntered && !params.releaseOnEdges) {
                return true;
            }
            if (e.originalEvent) {
                e = e.originalEvent;
            }
            var delta = 0;
            var rtlFactor = swiper.rtlTranslate ? -1 : 1;
            var data = Mousewheel.normalize(e);
            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
                        delta = data.pixelX * rtlFactor;
                    } else {
                        return true;
                    }
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
                    delta = data.pixelY;
                } else {
                    return true;
                }
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }
            if (delta === 0) {
                return true;
            }
            if (params.invert) {
                delta = -delta;
            }
            if (!swiper.params.freeMode) {
                if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
                    if (delta < 0) {
                        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                            swiper.slideNext();
                            swiper.emit('scroll', e);
                        } else if (params.releaseOnEdges) {
                            return true;
                        }
                    } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                        swiper.slidePrev();
                        swiper.emit('scroll', e);
                    } else if (params.releaseOnEdges) {
                        return true;
                    }
                }
                swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
            } else {
                if (swiper.params.loop) {
                    swiper.loopFix();
                }
                var position = swiper.getTranslate() + (delta * params.sensitivity);
                var wasBeginning = swiper.isBeginning;
                var wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) {
                    position = swiper.minTranslate();
                }
                if (position <= swiper.maxTranslate()) {
                    position = swiper.maxTranslate();
                }
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
                    swiper.updateSlidesClasses();
                }
                if (swiper.params.freeModeSticky) {
                    clearTimeout(swiper.mousewheel.timeout);
                    swiper.mousewheel.timeout = Utils.nextTick(function() {
                        swiper.slideToClosest();
                    }, 300);
                }
                swiper.emit('scroll', e);
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) {
                    swiper.autoplay.stop();
                }
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) {
                    return true;
                }
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            return false;
        },
        enable: function enable() {
            var swiper = this;
            if (!Mousewheel.event) {
                return false;
            }
            if (swiper.mousewheel.enabled) {
                return false;
            }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
            target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
            target.on(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = true;
            return true;
        },
        disable: function disable() {
            var swiper = this;
            if (!Mousewheel.event) {
                return false;
            }
            if (!swiper.mousewheel.enabled) {
                return false;
            }
            var target = swiper.$el;
            if (swiper.params.mousewheel.eventsTarged !== 'container') {
                target = $(swiper.params.mousewheel.eventsTarged);
            }
            target.off(Mousewheel.event, swiper.mousewheel.handle);
            swiper.mousewheel.enabled = false;
            return true;
        },
    };
    var Mousewheel$1 = {
        name: 'mousewheel',
        params: {
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarged: 'container',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                mousewheel: {
                    enabled: false,
                    enable: Mousewheel.enable.bind(swiper),
                    disable: Mousewheel.disable.bind(swiper),
                    handle: Mousewheel.handle.bind(swiper),
                    handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
                    handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
                    lastScrollTime: Utils.now(),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.mousewheel.enabled) {
                    swiper.mousewheel.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.mousewheel.enabled) {
                    swiper.mousewheel.disable();
                }
            },
        },
    };
    var Navigation = {
        update: function update() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (swiper.params.loop) {
                return;
            }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    $prevEl.addClass(params.disabledClass);
                } else {
                    $prevEl.removeClass(params.disabledClass);
                }
                $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    $nextEl.addClass(params.disabledClass);
                } else {
                    $nextEl.removeClass(params.disabledClass);
                }
                $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            }
        },
        onPrevClick: function onPrevClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop) {
                return;
            }
            swiper.slidePrev();
        },
        onNextClick: function onNextClick(e) {
            var swiper = this;
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop) {
                return;
            }
            swiper.slideNext();
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.navigation;
            if (!(params.nextEl || params.prevEl)) {
                return;
            }
            var $nextEl;
            var $prevEl;
            if (params.nextEl) {
                $nextEl = $(params.nextEl);
                if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
                    $nextEl = swiper.$el.find(params.nextEl);
                }
            }
            if (params.prevEl) {
                $prevEl = $(params.prevEl);
                if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
                    $prevEl = swiper.$el.find(params.prevEl);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                $nextEl.on('click', swiper.navigation.onNextClick);
            }
            if ($prevEl && $prevEl.length > 0) {
                $prevEl.on('click', swiper.navigation.onPrevClick);
            }
            Utils.extend(swiper.navigation, {
                $nextEl: $nextEl,
                nextEl: $nextEl && $nextEl[0],
                $prevEl: $prevEl,
                prevEl: $prevEl && $prevEl[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($nextEl && $nextEl.length) {
                $nextEl.off('click', swiper.navigation.onNextClick);
                $nextEl.removeClass(swiper.params.navigation.disabledClass);
            }
            if ($prevEl && $prevEl.length) {
                $prevEl.off('click', swiper.navigation.onPrevClick);
                $prevEl.removeClass(swiper.params.navigation.disabledClass);
            }
        },
    };
    var Navigation$1 = {
        name: 'navigation',
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                navigation: {
                    init: Navigation.init.bind(swiper),
                    update: Navigation.update.bind(swiper),
                    destroy: Navigation.destroy.bind(swiper),
                    onNextClick: Navigation.onNextClick.bind(swiper),
                    onPrevClick: Navigation.onPrevClick.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.navigation.init();
                swiper.navigation.update();
            },
            toEdge: function toEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                swiper.navigation.update();
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.navigation.destroy();
            },
            click: function click(e) {
                var swiper = this;
                var ref = swiper.navigation;
                var $nextEl = ref.$nextEl;
                var $prevEl = ref.$prevEl;
                if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
                    var isHidden;
                    if ($nextEl) {
                        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
                    } else if ($prevEl) {
                        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
                    }
                    if (isHidden === true) {
                        swiper.emit('navigationShow', swiper);
                    } else {
                        swiper.emit('navigationHide', swiper);
                    }
                    if ($nextEl) {
                        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                    if ($prevEl) {
                        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
                    }
                }
            },
        },
    };
    var Pagination = {
        update: function update() {
            var swiper = this;
            var rtl = swiper.rtl;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
                return;
            }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            var current;
            var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
                    current -= (slidesLength - (swiper.loopedSlides * 2));
                }
                if (current > total - 1) {
                    current -= total;
                }
                if (current < 0 && swiper.params.paginationType !== 'bullets') {
                    current = total + current;
                }
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
            } else {
                current = swiper.activeIndex || 0;
            }
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                var bullets = swiper.pagination.bullets;
                var firstIndex;
                var lastIndex;
                var midIndex;
                if (params.dynamicBullets) {
                    swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                    $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
                    if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                        swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
                        if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
                            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (swiper.pagination.dynamicBulletIndex < 0) {
                            swiper.pagination.dynamicBulletIndex = 0;
                        }
                    }
                    firstIndex = current - swiper.pagination.dynamicBulletIndex;
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
                if ($el.length > 1) {
                    bullets.each(function(index, bullet) {
                        var $bullet = $(bullet);
                        var bulletIndex = $bullet.index();
                        if (bulletIndex === current) {
                            $bullet.addClass(params.bulletActiveClass);
                        }
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                $bullet.addClass(((params.bulletActiveClass) + "-main"));
                            }
                            if (bulletIndex === firstIndex) {
                                $bullet.prev().addClass(((params.bulletActiveClass) + "-prev")).prev().addClass(((params.bulletActiveClass) + "-prev-prev"));
                            }
                            if (bulletIndex === lastIndex) {
                                $bullet.next().addClass(((params.bulletActiveClass) + "-next")).next().addClass(((params.bulletActiveClass) + "-next-next"));
                            }
                        }
                    });
                } else {
                    var $bullet = bullets.eq(current);
                    $bullet.addClass(params.bulletActiveClass);
                    if (params.dynamicBullets) {
                        var $firstDisplayedBullet = bullets.eq(firstIndex);
                        var $lastDisplayedBullet = bullets.eq(lastIndex);
                        for (var i = firstIndex; i <= lastIndex; i += 1) {
                            bullets.eq(i).addClass(((params.bulletActiveClass) + "-main"));
                        }
                        $firstDisplayedBullet.prev().addClass(((params.bulletActiveClass) + "-prev")).prev().addClass(((params.bulletActiveClass) + "-prev-prev"));
                        $lastDisplayedBullet.next().addClass(((params.bulletActiveClass) + "-next")).next().addClass(((params.bulletActiveClass) + "-next-next"));
                    }
                }
                if (params.dynamicBullets) {
                    var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
                    var offsetProp = rtl ? 'right' : 'left';
                    bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
                }
            }
            if (params.type === 'fraction') {
                $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
                $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
            }
            if (params.type === 'progressbar') {
                var progressbarDirection;
                if (params.progressbarOpposite) {
                    progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                } else {
                    progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                }
                var scale = (current + 1) / total;
                var scaleX = 1;
                var scaleY = 1;
                if (progressbarDirection === 'horizontal') {
                    scaleX = scale;
                } else {
                    scaleY = scale;
                }
                $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
            }
            if (params.type === 'custom' && params.renderCustom) {
                $el.html(params.renderCustom(swiper, current + 1, total));
                swiper.emit('paginationRender', swiper, $el[0]);
            } else {
                swiper.emit('paginationUpdate', swiper, $el[0]);
            }
            $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        },
        render: function render() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
                return;
            }
            var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            var $el = swiper.pagination.$el;
            var paginationHTML = '';
            if (params.type === 'bullets') {
                var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                for (var i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
                    }
                }
                $el.html(paginationHTML);
                swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
            }
            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>" +
                        ' / ' +
                        "<span class=\"" + (params.totalClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
                }
                $el.html(paginationHTML);
            }
            if (params.type !== 'custom') {
                swiper.emit('paginationRender', swiper.pagination.$el[0]);
            }
        },
        init: function init() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el) {
                return;
            }
            var $el = $(params.el);
            if ($el.length === 0) {
                return;
            }
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
                $el = swiper.$el.find(params.el);
            }
            if (params.type === 'bullets' && params.clickable) {
                $el.addClass(params.clickableClass);
            }
            $el.addClass(params.modifierClass + params.type);
            if (params.type === 'bullets' && params.dynamicBullets) {
                $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
                swiper.pagination.dynamicBulletIndex = 0;
                if (params.dynamicMainBullets < 1) {
                    params.dynamicMainBullets = 1;
                }
            }
            if (params.type === 'progressbar' && params.progressbarOpposite) {
                $el.addClass(params.progressbarOppositeClass);
            }
            if (params.clickable) {
                $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
                    e.preventDefault();
                    var index = $(this).index() * swiper.params.slidesPerGroup;
                    if (swiper.params.loop) {
                        index += swiper.loopedSlides;
                    }
                    swiper.slideTo(index);
                });
            }
            Utils.extend(swiper.pagination, {
                $el: $el,
                el: $el[0],
            });
        },
        destroy: function destroy() {
            var swiper = this;
            var params = swiper.params.pagination;
            if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
                return;
            }
            var $el = swiper.pagination.$el;
            $el.removeClass(params.hiddenClass);
            $el.removeClass(params.modifierClass + params.type);
            if (swiper.pagination.bullets) {
                swiper.pagination.bullets.removeClass(params.bulletActiveClass);
            }
            if (params.clickable) {
                $el.off('click', ("." + (params.bulletClass)));
            }
        },
    };
    var Pagination$1 = {
        name: 'pagination',
        params: {
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: function(number) {
                    return number;
                },
                formatFractionTotal: function(number) {
                    return number;
                },
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
                modifierClass: 'swiper-pagination-',
                currentClass: 'swiper-pagination-current',
                totalClass: 'swiper-pagination-total',
                hiddenClass: 'swiper-pagination-hidden',
                progressbarFillClass: 'swiper-pagination-progressbar-fill',
                progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
                clickableClass: 'swiper-pagination-clickable',
                lockClass: 'swiper-pagination-lock',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                pagination: {
                    init: Pagination.init.bind(swiper),
                    render: Pagination.render.bind(swiper),
                    update: Pagination.update.bind(swiper),
                    destroy: Pagination.destroy.bind(swiper),
                    dynamicBulletIndex: 0,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
            },
            activeIndexChange: function activeIndexChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.update();
                } else if (typeof swiper.snapIndex === 'undefined') {
                    swiper.pagination.update();
                }
            },
            snapIndexChange: function snapIndexChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.update();
                }
            },
            slidesLengthChange: function slidesLengthChange() {
                var swiper = this;
                if (swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            snapGridLengthChange: function snapGridLengthChange() {
                var swiper = this;
                if (!swiper.params.loop) {
                    swiper.pagination.render();
                    swiper.pagination.update();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.pagination.destroy();
            },
            click: function click(e) {
                var swiper = this;
                if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
                    var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
                    if (isHidden === true) {
                        swiper.emit('paginationShow', swiper);
                    } else {
                        swiper.emit('paginationHide', swiper);
                    }
                    swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
                }
            },
        },
    };
    var Scrollbar = {
        setTranslate: function setTranslate() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var progress = swiper.progress;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;
            var params = swiper.params.scrollbar;
            var newSize = dragSize;
            var newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
                } else {
                    $dragEl.transform(("translateX(" + newPos + "px)"));
                }
                $dragEl[0].style.width = newSize + "px";
            } else {
                if (Support.transforms3d) {
                    $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
                } else {
                    $dragEl.transform(("translateY(" + newPos + "px)"));
                }
                $dragEl[0].style.height = newSize + "px";
            }
            if (params.hide) {
                clearTimeout(swiper.scrollbar.timeout);
                $el[0].style.opacity = 1;
                swiper.scrollbar.timeout = setTimeout(function() {
                    $el[0].style.opacity = 0;
                    $el.transition(400);
                }, 1000);
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
                return;
            }
            swiper.scrollbar.$dragEl.transition(duration);
        },
        updateSize: function updateSize() {
            var swiper = this;
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var $dragEl = scrollbar.$dragEl;
            var $el = scrollbar.$el;
            $dragEl[0].style.width = '';
            $dragEl[0].style.height = '';
            var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
            var divider = swiper.size / swiper.virtualSize;
            var moveDivider = divider * (trackSize / swiper.size);
            var dragSize;
            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }
            if (swiper.isHorizontal()) {
                $dragEl[0].style.width = dragSize + "px";
            } else {
                $dragEl[0].style.height = dragSize + "px";
            }
            if (divider >= 1) {
                $el[0].style.display = 'none';
            } else {
                $el[0].style.display = '';
            }
            if (swiper.params.scrollbar.hide) {
                $el[0].style.opacity = 0;
            }
            Utils.extend(scrollbar, {
                trackSize: trackSize,
                divider: divider,
                moveDivider: moveDivider,
                dragSize: dragSize,
            });
            scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        },
        setDragPosition: function setDragPosition(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var rtl = swiper.rtlTranslate;
            var $el = scrollbar.$el;
            var dragSize = scrollbar.dragSize;
            var trackSize = scrollbar.trackSize;
            var pointerPosition;
            if (swiper.isHorizontal()) {
                pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
            } else {
                pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
            }
            var positionRatio;
            positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) {
                positionRatio = 1 - positionRatio;
            }
            var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        },
        onDragStart: function onDragStart(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;
            swiper.scrollbar.isTouched = true;
            e.preventDefault();
            e.stopPropagation();
            $wrapperEl.transition(100);
            $dragEl.transition(100);
            scrollbar.setDragPosition(e);
            clearTimeout(swiper.scrollbar.dragTimeout);
            $el.transition(0);
            if (params.hide) {
                $el.css('opacity', 1);
            }
            swiper.emit('scrollbarDragStart', e);
        },
        onDragMove: function onDragMove(e) {
            var swiper = this;
            var scrollbar = swiper.scrollbar;
            var $wrapperEl = swiper.$wrapperEl;
            var $el = scrollbar.$el;
            var $dragEl = scrollbar.$dragEl;
            if (!swiper.scrollbar.isTouched) {
                return;
            }
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            scrollbar.setDragPosition(e);
            $wrapperEl.transition(0);
            $el.transition(0);
            $dragEl.transition(0);
            swiper.emit('scrollbarDragMove', e);
        },
        onDragEnd: function onDragEnd(e) {
            var swiper = this;
            var params = swiper.params.scrollbar;
            var scrollbar = swiper.scrollbar;
            var $el = scrollbar.$el;
            if (!swiper.scrollbar.isTouched) {
                return;
            }
            swiper.scrollbar.isTouched = false;
            if (params.hide) {
                clearTimeout(swiper.scrollbar.dragTimeout);
                swiper.scrollbar.dragTimeout = Utils.nextTick(function() {
                    $el.css('opacity', 0);
                    $el.transition(400);
                }, 1000);
            }
            swiper.emit('scrollbarDragEnd', e);
            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        },
        enableDraggable: function enableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var touchEventsTouch = swiper.touchEventsTouch;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = Support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = Support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!Support.touch) {
                target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        disableDraggable: function disableDraggable() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var touchEventsTouch = swiper.touchEventsTouch;
            var touchEventsDesktop = swiper.touchEventsDesktop;
            var params = swiper.params;
            var $el = scrollbar.$el;
            var target = $el[0];
            var activeListener = Support.passiveListener && params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            var passiveListener = Support.passiveListener && params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!Support.touch) {
                target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
            } else {
                target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
                target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
                target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.scrollbar.el) {
                return;
            }
            var scrollbar = swiper.scrollbar;
            var $swiperEl = swiper.$el;
            var params = swiper.params.scrollbar;
            var $el = $(params.el);
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
                $el = $swiperEl.find(params.el);
            }
            var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
            if ($dragEl.length === 0) {
                $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
                $el.append($dragEl);
            }
            Utils.extend(scrollbar, {
                $el: $el,
                el: $el[0],
                $dragEl: $dragEl,
                dragEl: $dragEl[0],
            });
            if (params.draggable) {
                scrollbar.enableDraggable();
            }
        },
        destroy: function destroy() {
            var swiper = this;
            swiper.scrollbar.disableDraggable();
        },
    };
    var Scrollbar$1 = {
        name: 'scrollbar',
        params: {
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                scrollbar: {
                    init: Scrollbar.init.bind(swiper),
                    destroy: Scrollbar.destroy.bind(swiper),
                    updateSize: Scrollbar.updateSize.bind(swiper),
                    setTranslate: Scrollbar.setTranslate.bind(swiper),
                    setTransition: Scrollbar.setTransition.bind(swiper),
                    enableDraggable: Scrollbar.enableDraggable.bind(swiper),
                    disableDraggable: Scrollbar.disableDraggable.bind(swiper),
                    setDragPosition: Scrollbar.setDragPosition.bind(swiper),
                    onDragStart: Scrollbar.onDragStart.bind(swiper),
                    onDragMove: Scrollbar.onDragMove.bind(swiper),
                    onDragEnd: Scrollbar.onDragEnd.bind(swiper),
                    isTouched: false,
                    timeout: null,
                    dragTimeout: null,
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                swiper.scrollbar.init();
                swiper.scrollbar.updateSize();
                swiper.scrollbar.setTranslate();
            },
            update: function update() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            resize: function resize() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                swiper.scrollbar.updateSize();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                swiper.scrollbar.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.scrollbar.setTransition(duration);
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.scrollbar.destroy();
            },
        },
    };
    var Parallax = {
        setTransform: function setTransform(el, progress) {
            var swiper = this;
            var rtl = swiper.rtl;
            var $el = $(el);
            var rtlFactor = rtl ? -1 : 1;
            var p = $el.attr('data-swiper-parallax') || '0';
            var x = $el.attr('data-swiper-parallax-x');
            var y = $el.attr('data-swiper-parallax-y');
            var scale = $el.attr('data-swiper-parallax-scale');
            var opacity = $el.attr('data-swiper-parallax-opacity');
            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }
            if ((x).indexOf('%') >= 0) {
                x = (parseInt(x, 10) * progress * rtlFactor) + "%";
            } else {
                x = (x * progress * rtlFactor) + "px";
            }
            if ((y).indexOf('%') >= 0) {
                y = (parseInt(y, 10) * progress) + "%";
            } else {
                y = (y * progress) + "px";
            }
            if (typeof opacity !== 'undefined' && opacity !== null) {
                var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
                $el[0].style.opacity = currentOpacity;
            }
            if (typeof scale === 'undefined' || scale === null) {
                $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
            } else {
                var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
                $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
            }
        },
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            var progress = swiper.progress;
            var snapGrid = swiper.snapGrid;
            $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index, el) {
                swiper.parallax.setTransform(el, progress);
            });
            slides.each(function(slideIndex, slideEl) {
                var slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
                }
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index, el) {
                    swiper.parallax.setTransform(el, slideProgress);
                });
            });
        },
        setTransition: function setTransition(duration) {
            if (duration === void 0) duration = this.params.speed;
            var swiper = this;
            var $el = swiper.$el;
            $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index, parallaxEl) {
                var $parallaxEl = $(parallaxEl);
                var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                if (duration === 0) {
                    parallaxDuration = 0;
                }
                $parallaxEl.transition(parallaxDuration);
            });
        },
    };
    var Parallax$1 = {
        name: 'parallax',
        params: {
            parallax: {
                enabled: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                parallax: {
                    setTransform: Parallax.setTransform.bind(swiper),
                    setTranslate: Parallax.setTranslate.bind(swiper),
                    setTransition: Parallax.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (!swiper.params.parallax.enabled) {
                    return;
                }
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            init: function init() {
                var swiper = this;
                if (!swiper.params.parallax.enabled) {
                    return;
                }
                swiper.parallax.setTranslate();
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.parallax.enabled) {
                    return;
                }
                swiper.parallax.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (!swiper.params.parallax.enabled) {
                    return;
                }
                swiper.parallax.setTransition(duration);
            },
        },
    };
    var Zoom = {
        getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) {
                return 1;
            }
            var x1 = e.targetTouches[0].pageX;
            var y1 = e.targetTouches[0].pageY;
            var x2 = e.targetTouches[1].pageX;
            var y2 = e.targetTouches[1].pageY;
            var distance = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
            return distance;
        },
        onGestureStart: function onGestureStart(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            zoom.fakeGestureTouched = false;
            zoom.fakeGestureMoved = false;
            if (!Support.gestures) {
                if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
                    return;
                }
                zoom.fakeGestureTouched = true;
                gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$slideEl || !gesture.$slideEl.length) {
                gesture.$slideEl = $(e.target).closest('.swiper-slide');
                if (gesture.$slideEl.length === 0) {
                    gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
                }
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
                gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                if (gesture.$imageWrapEl.length === 0) {
                    gesture.$imageEl = undefined;
                    return;
                }
            }
            gesture.$imageEl.transition(0);
            swiper.zoom.isScaling = true;
        },
        onGestureChange: function onGestureChange(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
                    return;
                }
                zoom.fakeGestureMoved = true;
                gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            if (Support.gestures) {
                zoom.scale = e.scale * zoom.currentScale;
            } else {
                zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
            }
            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = (gesture.maxRatio - 1) + (Math.pow(((zoom.scale - gesture.maxRatio) + 1), 0.5));
            }
            if (zoom.scale < params.minRatio) {
                zoom.scale = (params.minRatio + 1) - (Math.pow(((params.minRatio - zoom.scale) + 1), 0.5));
            }
            gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        onGestureEnd: function onGestureEnd(e) {
            var swiper = this;
            var params = swiper.params.zoom;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (!Support.gestures) {
                if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
                    return;
                }
                if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
                    return;
                }
                zoom.fakeGestureTouched = false;
                zoom.fakeGestureMoved = false;
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
            zoom.currentScale = zoom.scale;
            zoom.isScaling = false;
            if (zoom.scale === 1) {
                gesture.$slideEl = undefined;
            }
        },
        onTouchStart: function onTouchStart(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            if (image.isTouched) {
                return;
            }
            if (Device.android) {
                e.preventDefault();
            }
            image.isTouched = true;
            image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
        },
        onTouchMove: function onTouchMove(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            swiper.allowClick = false;
            if (!image.isTouched || !gesture.$slideEl) {
                return;
            }
            if (!image.isMoved) {
                image.width = gesture.$imageEl[0].offsetWidth;
                image.height = gesture.$imageEl[0].offsetHeight;
                image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                gesture.$imageWrapEl.transition(0);
                if (swiper.rtl) {
                    image.startX = -image.startX;
                    image.startY = -image.startY;
                }
            }
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) {
                return;
            }
            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
            if (!image.isMoved && !zoom.isScaling) {
                if (swiper.isHorizontal() && ((Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x))) {
                    image.isTouched = false;
                    return;
                }
                if (!swiper.isHorizontal() && ((Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y))) {
                    image.isTouched = false;
                    return;
                }
            }
            e.preventDefault();
            e.stopPropagation();
            image.isMoved = true;
            image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
            image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;
            if (image.currentX < image.minX) {
                image.currentX = (image.minX + 1) - (Math.pow(((image.minX - image.currentX) + 1), 0.8));
            }
            if (image.currentX > image.maxX) {
                image.currentX = (image.maxX - 1) + (Math.pow(((image.currentX - image.maxX) + 1), 0.8));
            }
            if (image.currentY < image.minY) {
                image.currentY = (image.minY + 1) - (Math.pow(((image.minY - image.currentY) + 1), 0.8));
            }
            if (image.currentY > image.maxY) {
                image.currentY = (image.maxY - 1) + (Math.pow(((image.currentY - image.maxY) + 1), 0.8));
            }
            if (!velocity.prevPositionX) {
                velocity.prevPositionX = image.touchesCurrent.x;
            }
            if (!velocity.prevPositionY) {
                velocity.prevPositionY = image.touchesCurrent.y;
            }
            if (!velocity.prevTime) {
                velocity.prevTime = Date.now();
            }
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
                velocity.x = 0;
            }
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
                velocity.y = 0;
            }
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTouchEnd: function onTouchEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            var velocity = zoom.velocity;
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            var momentumDurationX = 300;
            var momentumDurationY = 300;
            var momentumDistanceX = velocity.x * momentumDurationX;
            var newPositionX = image.currentX + momentumDistanceX;
            var momentumDistanceY = velocity.y * momentumDurationY;
            var newPositionY = image.currentY + momentumDistanceY;
            if (velocity.x !== 0) {
                momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            }
            if (velocity.y !== 0) {
                momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            }
            var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY;
            var scaledWidth = image.width * zoom.scale;
            var scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
            image.maxX = -image.minX;
            image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
        },
        onTransitionEnd: function onTransitionEnd() {
            var swiper = this;
            var zoom = swiper.zoom;
            var gesture = zoom.gesture;
            if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                zoom.scale = 1;
                zoom.currentScale = 1;
                gesture.$slideEl = undefined;
                gesture.$imageEl = undefined;
                gesture.$imageWrapEl = undefined;
            }
        },
        toggle: function toggle(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            if (zoom.scale && zoom.scale !== 1) {
                zoom.out();
            } else {
                zoom.in(e);
            }
        },
        in: function in$1(e) {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;
            var image = zoom.image;
            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));
            var touchX;
            var touchY;
            var offsetX;
            var offsetY;
            var diffX;
            var diffY;
            var translateX;
            var translateY;
            var imageWidth;
            var imageHeight;
            var scaledWidth;
            var scaledHeight;
            var translateMinX;
            var translateMinY;
            var translateMaxX;
            var translateMaxY;
            var slideWidth;
            var slideHeight;
            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }
            zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (e) {
                slideWidth = gesture.$slideEl[0].offsetWidth;
                slideHeight = gesture.$slideEl[0].offsetHeight;
                offsetX = gesture.$slideEl.offset().left;
                offsetY = gesture.$slideEl.offset().top;
                diffX = (offsetX + (slideWidth / 2)) - touchX;
                diffY = (offsetY + (slideHeight / 2)) - touchY;
                imageWidth = gesture.$imageEl[0].offsetWidth;
                imageHeight = gesture.$imageEl[0].offsetHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
                translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                translateX = diffX * zoom.scale;
                translateY = diffY * zoom.scale;
                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }
                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
            gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
            gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
        },
        out: function out() {
            var swiper = this;
            var zoom = swiper.zoom;
            var params = swiper.params.zoom;
            var gesture = zoom.gesture;
            if (!gesture.$slideEl) {
                gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
            }
            if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
                return;
            }
            zoom.scale = 1;
            zoom.currentScale = 1;
            gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
            gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
            gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
            gesture.$slideEl = undefined;
        },
        enable: function enable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (zoom.enabled) {
                return;
            }
            zoom.enabled = true;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (Support.gestures) {
                swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }
            swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
        },
        disable: function disable() {
            var swiper = this;
            var zoom = swiper.zoom;
            if (!zoom.enabled) {
                return;
            }
            swiper.zoom.enabled = false;
            var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (Support.gestures) {
                swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
            } else if (swiper.touchEvents.start === 'touchstart') {
                swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
            }
            swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
        },
    };
    var Zoom$1 = {
        name: 'zoom',
        params: {
            zoom: {
                enabled: false,
                maxRatio: 3,
                minRatio: 1,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed',
            },
        },
        create: function create() {
            var swiper = this;
            var zoom = {
                enabled: false,
                scale: 1,
                currentScale: 1,
                isScaling: false,
                gesture: {
                    $slideEl: undefined,
                    slideWidth: undefined,
                    slideHeight: undefined,
                    $imageEl: undefined,
                    $imageWrapEl: undefined,
                    maxRatio: 3,
                },
                image: {
                    isTouched: undefined,
                    isMoved: undefined,
                    currentX: undefined,
                    currentY: undefined,
                    minX: undefined,
                    minY: undefined,
                    maxX: undefined,
                    maxY: undefined,
                    width: undefined,
                    height: undefined,
                    startX: undefined,
                    startY: undefined,
                    touchesStart: {},
                    touchesCurrent: {},
                },
                velocity: {
                    x: undefined,
                    y: undefined,
                    prevPositionX: undefined,
                    prevPositionY: undefined,
                    prevTime: undefined,
                },
            };
            ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function(methodName) {
                zoom[methodName] = Zoom[methodName].bind(swiper);
            });
            Utils.extend(swiper, {
                zoom: zoom,
            });
            var scale = 1;
            Object.defineProperty(swiper.zoom, 'scale', {
                get: function get() {
                    return scale;
                },
                set: function set(value) {
                    if (scale !== value) {
                        var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
                        var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
                        swiper.emit('zoomChange', value, imageEl, slideEl);
                    }
                    scale = value;
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.zoom.enabled) {
                    swiper.zoom.enable();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.zoom.disable();
            },
            touchStart: function touchStart(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) {
                    return;
                }
                swiper.zoom.onTouchStart(e);
            },
            touchEnd: function touchEnd(e) {
                var swiper = this;
                if (!swiper.zoom.enabled) {
                    return;
                }
                swiper.zoom.onTouchEnd(e);
            },
            doubleTap: function doubleTap(e) {
                var swiper = this;
                if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                    swiper.zoom.toggle(e);
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                    swiper.zoom.onTransitionEnd();
                }
            },
        },
    };
    var Lazy = {
        loadInSlide: function loadInSlide(index, loadInDuplicate) {
            if (loadInDuplicate === void 0) loadInDuplicate = true;
            var swiper = this;
            var params = swiper.params.lazy;
            if (typeof index === 'undefined') {
                return;
            }
            if (swiper.slides.length === 0) {
                return;
            }
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var $slideEl = isVirtual ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")) : swiper.slides.eq(index);
            var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
            if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
                $images = $images.add($slideEl[0]);
            }
            if ($images.length === 0) {
                return;
            }
            $images.each(function(imageIndex, imageEl) {
                var $imageEl = $(imageEl);
                $imageEl.addClass(params.loadingClass);
                var background = $imageEl.attr('data-background');
                var src = $imageEl.attr('data-src');
                var srcset = $imageEl.attr('data-srcset');
                var sizes = $imageEl.attr('data-sizes');
                swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function() {
                    if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) {
                        return;
                    }
                    if (background) {
                        $imageEl.css('background-image', ("url(\"" + background + "\")"));
                        $imageEl.removeAttr('data-background');
                    } else {
                        if (srcset) {
                            $imageEl.attr('srcset', srcset);
                            $imageEl.removeAttr('data-srcset');
                        }
                        if (sizes) {
                            $imageEl.attr('sizes', sizes);
                            $imageEl.removeAttr('data-sizes');
                        }
                        if (src) {
                            $imageEl.attr('src', src);
                            $imageEl.removeAttr('data-src');
                        }
                    }
                    $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                    $slideEl.find(("." + (params.preloaderClass))).remove();
                    if (swiper.params.loop && loadInDuplicate) {
                        var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                        if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                            var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
                            swiper.lazy.loadInSlide(originalSlide.index(), false);
                        } else {
                            var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
                            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                        }
                    }
                    swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                });
                swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
            });
        },
        load: function load() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var swiperParams = swiper.params;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
            var params = swiperParams.lazy;
            var slidesPerView = swiperParams.slidesPerView;
            if (slidesPerView === 'auto') {
                slidesPerView = 0;
            }

            function slideExist(index) {
                if (isVirtual) {
                    if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
                        return true;
                    }
                } else if (slides[index]) {
                    return true;
                }
                return false;
            }

            function slideIndex(slideEl) {
                if (isVirtual) {
                    return $(slideEl).attr('data-swiper-slide-index');
                }
                return $(slideEl).index();
            }
            if (!swiper.lazy.initialImageLoaded) {
                swiper.lazy.initialImageLoaded = true;
            }
            if (swiper.params.watchSlidesVisibility) {
                $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function(elIndex, slideEl) {
                    var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                    swiper.lazy.loadInSlide(index);
                });
            } else if (slidesPerView > 1) {
                for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
                    if (slideExist(i)) {
                        swiper.lazy.loadInSlide(i);
                    }
                }
            } else {
                swiper.lazy.loadInSlide(activeIndex);
            }
            if (params.loadPrevNext) {
                if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                    var amount = params.loadPrevNextAmount;
                    var spv = slidesPerView;
                    var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                    var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                    for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
                        if (slideExist(i$1)) {
                            swiper.lazy.loadInSlide(i$1);
                        }
                    }
                    for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
                        if (slideExist(i$2)) {
                            swiper.lazy.loadInSlide(i$2);
                        }
                    }
                } else {
                    var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
                    if (nextSlide.length > 0) {
                        swiper.lazy.loadInSlide(slideIndex(nextSlide));
                    }
                    var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
                    if (prevSlide.length > 0) {
                        swiper.lazy.loadInSlide(slideIndex(prevSlide));
                    }
                }
            }
        },
    };
    var Lazy$1 = {
        name: 'lazy',
        params: {
            lazy: {
                enabled: false,
                loadPrevNext: false,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: false,
                elementClass: 'swiper-lazy',
                loadingClass: 'swiper-lazy-loading',
                loadedClass: 'swiper-lazy-loaded',
                preloaderClass: 'swiper-lazy-preloader',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                lazy: {
                    initialImageLoaded: false,
                    load: Lazy.load.bind(swiper),
                    loadInSlide: Lazy.loadInSlide.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
                    swiper.params.preloadImages = false;
                }
            },
            init: function init() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
                    swiper.lazy.load();
                }
            },
            scroll: function scroll() {
                var swiper = this;
                if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
                    swiper.lazy.load();
                }
            },
            resize: function resize() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            scrollbarDragMove: function scrollbarDragMove() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    swiper.lazy.load();
                }
            },
            transitionStart: function transitionStart() {
                var swiper = this;
                if (swiper.params.lazy.enabled) {
                    if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
                        swiper.lazy.load();
                    }
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
                    swiper.lazy.load();
                }
            },
        },
    };
    var Controller = {
        LinearSpline: function LinearSpline(x, y) {
            var binarySearch = (function search() {
                var maxIndex;
                var minIndex;
                var guess;
                return function(array, val) {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }
                    return maxIndex;
                };
            }());
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            var i1;
            var i3;
            this.interpolate = function interpolate(x2) {
                if (!x2) {
                    return 0;
                }
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;
                return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
            };
            return this;
        },
        getInterpolateFunction: function getInterpolateFunction(c) {
            var swiper = this;
            if (!swiper.controller.spline) {
                swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
            }
        },
        setTranslate: function setTranslate(setTranslate$1, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var multiplier;
            var controlledTranslate;

            function setControlledTranslate(c) {
                var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                    swiper.controller.getInterpolateFunction(c);
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }
                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
                }
                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (var i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        },
        setTransition: function setTransition(duration, byController) {
            var swiper = this;
            var controlled = swiper.controller.control;
            var i;

            function setControlledTransition(c) {
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    if (c.params.autoHeight) {
                        Utils.nextTick(function() {
                            c.updateAutoHeight();
                        });
                    }
                    c.$wrapperEl.transitionEnd(function() {
                        if (!controlled) {
                            return;
                        }
                        if (c.params.loop && swiper.params.controller.by === 'slide') {
                            c.loopFix();
                        }
                        c.transitionEnd();
                    });
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        },
    };
    var Controller$1 = {
        name: 'controller',
        params: {
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                controller: {
                    control: swiper.params.controller.control,
                    getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
                    setTranslate: Controller.setTranslate.bind(swiper),
                    setTransition: Controller.setTransition.bind(swiper),
                },
            });
        },
        on: {
            update: function update() {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            resize: function resize() {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                if (swiper.controller.spline) {
                    swiper.controller.spline = undefined;
                    delete swiper.controller.spline;
                }
            },
            setTranslate: function setTranslate(translate, byController) {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                swiper.controller.setTranslate(translate, byController);
            },
            setTransition: function setTransition(duration, byController) {
                var swiper = this;
                if (!swiper.controller.control) {
                    return;
                }
                swiper.controller.setTransition(duration, byController);
            },
        },
    };
    var a11y = {
        makeElFocusable: function makeElFocusable($el) {
            $el.attr('tabIndex', '0');
            return $el;
        },
        addElRole: function addElRole($el, role) {
            $el.attr('role', role);
            return $el;
        },
        addElLabel: function addElLabel($el, label) {
            $el.attr('aria-label', label);
            return $el;
        },
        disableEl: function disableEl($el) {
            $el.attr('aria-disabled', true);
            return $el;
        },
        enableEl: function enableEl($el) {
            $el.attr('aria-disabled', false);
            return $el;
        },
        onEnterKey: function onEnterKey(e) {
            var swiper = this;
            var params = swiper.params.a11y;
            if (e.keyCode !== 13) {
                return;
            }
            var $targetEl = $(e.target);
            if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                if (!(swiper.isEnd && !swiper.params.loop)) {
                    swiper.slideNext();
                }
                if (swiper.isEnd) {
                    swiper.a11y.notify(params.lastSlideMessage);
                } else {
                    swiper.a11y.notify(params.nextSlideMessage);
                }
            }
            if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                if (!(swiper.isBeginning && !swiper.params.loop)) {
                    swiper.slidePrev();
                }
                if (swiper.isBeginning) {
                    swiper.a11y.notify(params.firstSlideMessage);
                } else {
                    swiper.a11y.notify(params.prevSlideMessage);
                }
            }
            if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
                $targetEl[0].click();
            }
        },
        notify: function notify(message) {
            var swiper = this;
            var notification = swiper.a11y.liveRegion;
            if (notification.length === 0) {
                return;
            }
            notification.html('');
            notification.html(message);
        },
        updateNavigation: function updateNavigation() {
            var swiper = this;
            if (swiper.params.loop) {
                return;
            }
            var ref = swiper.navigation;
            var $nextEl = ref.$nextEl;
            var $prevEl = ref.$prevEl;
            if ($prevEl && $prevEl.length > 0) {
                if (swiper.isBeginning) {
                    swiper.a11y.disableEl($prevEl);
                } else {
                    swiper.a11y.enableEl($prevEl);
                }
            }
            if ($nextEl && $nextEl.length > 0) {
                if (swiper.isEnd) {
                    swiper.a11y.disableEl($nextEl);
                } else {
                    swiper.a11y.enableEl($nextEl);
                }
            }
        },
        updatePagination: function updatePagination() {
            var swiper = this;
            var params = swiper.params.a11y;
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.bullets.each(function(bulletIndex, bulletEl) {
                    var $bulletEl = $(bulletEl);
                    swiper.a11y.makeElFocusable($bulletEl);
                    swiper.a11y.addElRole($bulletEl, 'button');
                    swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
                });
            }
        },
        init: function init() {
            var swiper = this;
            swiper.$el.append(swiper.a11y.liveRegion);
            var params = swiper.params.a11y;
            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                swiper.a11y.makeElFocusable($nextEl);
                swiper.a11y.addElRole($nextEl, 'button');
                swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                $nextEl.on('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                swiper.a11y.makeElFocusable($prevEl);
                swiper.a11y.addElRole($prevEl, 'button');
                swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                $prevEl.on('keydown', swiper.a11y.onEnterKey);
            }
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
                swiper.a11y.liveRegion.remove();
            }
            var $nextEl;
            var $prevEl;
            if (swiper.navigation && swiper.navigation.$nextEl) {
                $nextEl = swiper.navigation.$nextEl;
            }
            if (swiper.navigation && swiper.navigation.$prevEl) {
                $prevEl = swiper.navigation.$prevEl;
            }
            if ($nextEl) {
                $nextEl.off('keydown', swiper.a11y.onEnterKey);
            }
            if ($prevEl) {
                $prevEl.off('keydown', swiper.a11y.onEnterKey);
            }
            if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
            }
        },
    };
    var A11y = {
        name: 'a11y',
        params: {
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                a11y: {
                    liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
                },
            });
            Object.keys(a11y).forEach(function(methodName) {
                swiper.a11y[methodName] = a11y[methodName].bind(swiper);
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.init();
                swiper.a11y.updateNavigation();
            },
            toEdge: function toEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.updateNavigation();
            },
            fromEdge: function fromEdge() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.updateNavigation();
            },
            paginationUpdate: function paginationUpdate() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.updatePagination();
            },
            destroy: function destroy() {
                var swiper = this;
                if (!swiper.params.a11y.enabled) {
                    return;
                }
                swiper.a11y.destroy();
            },
        },
    };
    var History = {
        init: function init() {
            var swiper = this;
            if (!swiper.params.history) {
                return;
            }
            if (!win.history || !win.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            var history = swiper.history;
            history.initialized = true;
            history.paths = History.getPathValues();
            if (!history.paths.key && !history.paths.value) {
                return;
            }
            history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) {
                win.addEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (!swiper.params.history.replaceState) {
                win.removeEventListener('popstate', swiper.history.setHistoryPopState);
            }
        },
        setHistoryPopState: function setHistoryPopState() {
            var swiper = this;
            swiper.history.paths = History.getPathValues();
            swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
        },
        getPathValues: function getPathValues() {
            var pathArray = win.location.pathname.slice(1).split('/').filter(function(part) {
                return part !== '';
            });
            var total = pathArray.length;
            var key = pathArray[total - 2];
            var value = pathArray[total - 1];
            return {
                key: key,
                value: value
            };
        },
        setHistory: function setHistory(key, index) {
            var swiper = this;
            if (!swiper.history.initialized || !swiper.params.history.enabled) {
                return;
            }
            var slide = swiper.slides.eq(index);
            var value = History.slugify(slide.attr('data-history'));
            if (!win.location.pathname.includes(key)) {
                value = key + "/" + value;
            }
            var currentState = win.history.state;
            if (currentState && currentState.value === value) {
                return;
            }
            if (swiper.params.history.replaceState) {
                win.history.replaceState({
                    value: value
                }, null, value);
            } else {
                win.history.pushState({
                    value: value
                }, null, value);
            }
        },
        slugify: function slugify(text) {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        },
        scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
            var swiper = this;
            if (value) {
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHistory = History.slugify(slide.attr('data-history'));
                    if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        },
    };
    var History$1 = {
        name: 'history',
        params: {
            history: {
                enabled: false,
                replaceState: false,
                key: 'slides',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                history: {
                    init: History.init.bind(swiper),
                    setHistory: History.setHistory.bind(swiper),
                    setHistoryPopState: History.setHistoryPopState.bind(swiper),
                    scrollToSlide: History.scrollToSlide.bind(swiper),
                    destroy: History.destroy.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.history.enabled) {
                    swiper.history.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.history.initialized) {
                    swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
                }
            },
        },
    };
    var HashNavigation = {
        onHashCange: function onHashCange() {
            var swiper = this;
            var newHash = doc.location.hash.replace('#', '');
            var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
            if (newHash !== activeSlideHash) {
                var newIndex = swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index();
                if (typeof newIndex === 'undefined') {
                    return;
                }
                swiper.slideTo(newIndex);
            }
        },
        setHash: function setHash() {
            var swiper = this;
            if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) {
                return;
            }
            if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
                win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
            } else {
                var slide = swiper.slides.eq(swiper.activeIndex);
                var hash = slide.attr('data-hash') || slide.attr('data-history');
                doc.location.hash = hash || '';
            }
        },
        init: function init() {
            var swiper = this;
            if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) {
                return;
            }
            swiper.hashNavigation.initialized = true;
            var hash = doc.location.hash.replace('#', '');
            if (hash) {
                var speed = 0;
                for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                    var slide = swiper.slides.eq(i);
                    var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                    if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                        var index = slide.index();
                        swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                    }
                }
            }
            if (swiper.params.hashNavigation.watchState) {
                $(win).on('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
        destroy: function destroy() {
            var swiper = this;
            if (swiper.params.hashNavigation.watchState) {
                $(win).off('hashchange', swiper.hashNavigation.onHashCange);
            }
        },
    };
    var HashNavigation$1 = {
        name: 'hash-navigation',
        params: {
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                hashNavigation: {
                    initialized: false,
                    init: HashNavigation.init.bind(swiper),
                    destroy: HashNavigation.destroy.bind(swiper),
                    setHash: HashNavigation.setHash.bind(swiper),
                    onHashCange: HashNavigation.onHashCange.bind(swiper),
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.init();
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.params.hashNavigation.enabled) {
                    swiper.hashNavigation.destroy();
                }
            },
            transitionEnd: function transitionEnd() {
                var swiper = this;
                if (swiper.hashNavigation.initialized) {
                    swiper.hashNavigation.setHash();
                }
            },
        },
    };
    var Autoplay = {
        run: function run() {
            var swiper = this;
            var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
            var delay = swiper.params.autoplay.delay;
            if ($activeSlideEl.attr('data-swiper-autoplay')) {
                delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
            }
            swiper.autoplay.timeout = Utils.nextTick(function() {
                if (swiper.params.autoplay.reverseDirection) {
                    if (swiper.params.loop) {
                        swiper.loopFix();
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.isBeginning) {
                        swiper.slidePrev(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else {
                        swiper.autoplay.stop();
                    }
                } else if (swiper.params.loop) {
                    swiper.loopFix();
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.isEnd) {
                    swiper.slideNext(swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(0, swiper.params.speed, true, true);
                    swiper.emit('autoplay');
                } else {
                    swiper.autoplay.stop();
                }
            }, delay);
        },
        start: function start() {
            var swiper = this;
            if (typeof swiper.autoplay.timeout !== 'undefined') {
                return false;
            }
            if (swiper.autoplay.running) {
                return false;
            }
            swiper.autoplay.running = true;
            swiper.emit('autoplayStart');
            swiper.autoplay.run();
            return true;
        },
        stop: function stop() {
            var swiper = this;
            if (!swiper.autoplay.running) {
                return false;
            }
            if (typeof swiper.autoplay.timeout === 'undefined') {
                return false;
            }
            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
                swiper.autoplay.timeout = undefined;
            }
            swiper.autoplay.running = false;
            swiper.emit('autoplayStop');
            return true;
        },
        pause: function pause(speed) {
            var swiper = this;
            if (!swiper.autoplay.running) {
                return;
            }
            if (swiper.autoplay.paused) {
                return;
            }
            if (swiper.autoplay.timeout) {
                clearTimeout(swiper.autoplay.timeout);
            }
            swiper.autoplay.paused = true;
            if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                swiper.autoplay.paused = false;
                swiper.autoplay.run();
            } else {
                swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
            }
        },
    };
    var Autoplay$1 = {
        name: 'autoplay',
        params: {
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: true,
                stopOnLastSlide: false,
                reverseDirection: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                autoplay: {
                    running: false,
                    paused: false,
                    run: Autoplay.run.bind(swiper),
                    start: Autoplay.start.bind(swiper),
                    stop: Autoplay.stop.bind(swiper),
                    pause: Autoplay.pause.bind(swiper),
                    onTransitionEnd: function onTransitionEnd(e) {
                        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
                            return;
                        }
                        if (e.target !== this) {
                            return;
                        }
                        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
                        swiper.autoplay.paused = false;
                        if (!swiper.autoplay.running) {
                            swiper.autoplay.stop();
                        } else {
                            swiper.autoplay.run();
                        }
                    },
                },
            });
        },
        on: {
            init: function init() {
                var swiper = this;
                if (swiper.params.autoplay.enabled) {
                    swiper.autoplay.start();
                }
            },
            beforeTransitionStart: function beforeTransitionStart(speed, internal) {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (internal || !swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.pause(speed);
                    } else {
                        swiper.autoplay.stop();
                    }
                }
            },
            sliderFirstMove: function sliderFirstMove() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    if (swiper.params.autoplay.disableOnInteraction) {
                        swiper.autoplay.stop();
                    } else {
                        swiper.autoplay.pause();
                    }
                }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.autoplay.running) {
                    swiper.autoplay.stop();
                }
            },
        },
    };
    var Fade = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = swiper.slides.eq(i);
                var offset = $slideEl[0].swiperSlideOffset;
                var tx = -offset;
                if (!swiper.params.virtualTranslate) {
                    tx -= swiper.translate;
                }
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                $slideEl.css({
                    opacity: slideOpacity,
                }).transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.transitionEnd(function() {
                    if (eventTriggered) {
                        return;
                    }
                    if (!swiper || swiper.destroyed) {
                        return;
                    }
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };
    var EffectFade = {
        name: 'effect-fade',
        params: {
            fadeEffect: {
                crossFade: false,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                fadeEffect: {
                    setTranslate: Fade.setTranslate.bind(swiper),
                    setTransition: Fade.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'fade') {
                    return;
                }
                swiper.fadeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'fade') {
                    return;
                }
                swiper.fadeEffect.setTransition(duration);
            },
        },
    };
    var Cube = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var $el = swiper.$el;
            var $wrapperEl = swiper.$wrapperEl;
            var slides = swiper.slides;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var rtl = swiper.rtlTranslate;
            var swiperSize = swiper.size;
            var params = swiper.params.cubeEffect;
            var isHorizontal = swiper.isHorizontal();
            var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            var wrapperRotate = 0;
            var $cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $wrapperEl.append($cubeShadowEl);
                    }
                    $cubeShadowEl.css({
                        height: (swiperWidth + "px")
                    });
                } else {
                    $cubeShadowEl = $el.find('.swiper-cube-shadow');
                    if ($cubeShadowEl.length === 0) {
                        $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                        $el.append($cubeShadowEl);
                    }
                }
            }
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
                }
                var slideAngle = slideIndex * 90;
                var round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                var tx = 0;
                var ty = 0;
                var tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + (round * 4 * swiperSize);
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = (3 * swiperSize) + (swiperSize * 4 * round);
                }
                if (rtl) {
                    tx = -tx;
                }
                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }
                var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = (slideIndex * 90) + (progress * 90);
                    if (rtl) {
                        wrapperRotate = (-slideIndex * 90) - (progress * 90);
                    }
                }
                $slideEl.transform(transform);
                if (params.slideShadows) {
                    var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) {
                        shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    }
                    if (shadowAfter.length) {
                        shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }
                }
            }
            $wrapperEl.css({
                '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
                'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
            });
            if (params.shadow) {
                if (isHorizontal) {
                    $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
                } else {
                    var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                    var multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) +
                        (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                    var scale1 = params.shadowScale;
                    var scale2 = params.shadowScale / multiplier;
                    var offset = params.shadowOffset;
                    $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
                }
            }
            var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
            $wrapperEl.transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var $el = swiper.$el;
            var slides = swiper.slides;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                $el.find('.swiper-cube-shadow').transition(duration);
            }
        },
    };
    var EffectCube = {
        name: 'effect-cube',
        params: {
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                cubeEffect: {
                    setTranslate: Cube.setTranslate.bind(swiper),
                    setTransition: Cube.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: false,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'cube') {
                    return;
                }
                swiper.cubeEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'cube') {
                    return;
                }
                swiper.cubeEffect.setTransition(duration);
            },
        },
    };
    var Flip = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var slides = swiper.slides;
            var rtl = swiper.rtlTranslate;
            for (var i = 0; i < slides.length; i += 1) {
                var $slideEl = slides.eq(i);
                var progress = $slideEl[0].progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                }
                var offset = $slideEl[0].swiperSlideOffset;
                var rotate = -180 * progress;
                var rotateY = rotate;
                var rotateX = 0;
                var tx = -offset;
                var ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }
                $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                if (swiper.params.flipEffect.slideShadows) {
                    var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if (shadowBefore.length === 0) {
                        shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append(shadowBefore);
                    }
                    if (shadowAfter.length === 0) {
                        shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append(shadowAfter);
                    }
                    if (shadowBefore.length) {
                        shadowBefore[0].style.opacity = Math.max(-progress, 0);
                    }
                    if (shadowAfter.length) {
                        shadowAfter[0].style.opacity = Math.max(progress, 0);
                    }
                }
                $slideEl.transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            var slides = swiper.slides;
            var activeIndex = swiper.activeIndex;
            var $wrapperEl = swiper.$wrapperEl;
            slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            if (swiper.params.virtualTranslate && duration !== 0) {
                var eventTriggered = false;
                slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                    if (eventTriggered) {
                        return;
                    }
                    if (!swiper || swiper.destroyed) {
                        return;
                    }
                    eventTriggered = true;
                    swiper.animating = false;
                    var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                    for (var i = 0; i < triggerEvents.length; i += 1) {
                        $wrapperEl.trigger(triggerEvents[i]);
                    }
                });
            }
        },
    };
    var EffectFlip = {
        name: 'effect-flip',
        params: {
            flipEffect: {
                slideShadows: true,
                limitRotation: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                flipEffect: {
                    setTranslate: Flip.setTranslate.bind(swiper),
                    setTransition: Flip.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                var overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                Utils.extend(swiper.params, overwriteParams);
                Utils.extend(swiper.originalParams, overwriteParams);
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'flip') {
                    return;
                }
                swiper.flipEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'flip') {
                    return;
                }
                swiper.flipEffect.setTransition(duration);
            },
        },
    };
    var Coverflow = {
        setTranslate: function setTranslate() {
            var swiper = this;
            var swiperWidth = swiper.width;
            var swiperHeight = swiper.height;
            var slides = swiper.slides;
            var $wrapperEl = swiper.$wrapperEl;
            var slidesSizesGrid = swiper.slidesSizesGrid;
            var params = swiper.params.coverflowEffect;
            var isHorizontal = swiper.isHorizontal();
            var transform = swiper.translate;
            var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
            var rotate = isHorizontal ? params.rotate : -params.rotate;
            var translate = params.depth;
            for (var i = 0, length = slides.length; i < length; i += 1) {
                var $slideEl = slides.eq(i);
                var slideSize = slidesSizesGrid[i];
                var slideOffset = $slideEl[0].swiperSlideOffset;
                var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                var translateZ = -translate * Math.abs(offsetMultiplier);
                var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                if (Math.abs(translateX) < 0.001) {
                    translateX = 0;
                }
                if (Math.abs(translateY) < 0.001) {
                    translateY = 0;
                }
                if (Math.abs(translateZ) < 0.001) {
                    translateZ = 0;
                }
                if (Math.abs(rotateY) < 0.001) {
                    rotateY = 0;
                }
                if (Math.abs(rotateX) < 0.001) {
                    rotateX = 0;
                }
                var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                $slideEl.transform(slideTransform);
                $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                    var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                    if ($shadowBeforeEl.length === 0) {
                        $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                        $slideEl.append($shadowBeforeEl);
                    }
                    if ($shadowAfterEl.length === 0) {
                        $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                        $slideEl.append($shadowAfterEl);
                    }
                    if ($shadowBeforeEl.length) {
                        $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    }
                    if ($shadowAfterEl.length) {
                        $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
                    }
                }
            }
            if (Support.pointerEvents || Support.prefixedPointerEvents) {
                var ws = $wrapperEl[0].style;
                ws.perspectiveOrigin = center + "px 50%";
            }
        },
        setTransition: function setTransition(duration) {
            var swiper = this;
            swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        },
    };
    var EffectCoverflow = {
        name: 'effect-coverflow',
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                coverflowEffect: {
                    setTranslate: Coverflow.setTranslate.bind(swiper),
                    setTransition: Coverflow.setTransition.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') {
                    return;
                }
                swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
                swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                swiper.params.watchSlidesProgress = true;
                swiper.originalParams.watchSlidesProgress = true;
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') {
                    return;
                }
                swiper.coverflowEffect.setTranslate();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (swiper.params.effect !== 'coverflow') {
                    return;
                }
                swiper.coverflowEffect.setTransition(duration);
            },
        },
    };
    var Thumbs = {
        init: function init() {
            var swiper = this;
            var ref = swiper.params;
            var thumbsParams = ref.thumbs;
            var SwiperClass = swiper.constructor;
            if (thumbsParams.swiper instanceof SwiperClass) {
                swiper.thumbs.swiper = thumbsParams.swiper;
                Utils.extend(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                });
                Utils.extend(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                });
            } else if (Utils.isObject(thumbsParams.swiper)) {
                swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
                    watchSlidesVisibility: true,
                    watchSlidesProgress: true,
                    slideToClickedSlide: false,
                }));
                swiper.thumbs.swiperCreated = true;
            }
            swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
        },
        onThumbClick: function onThumbClick() {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) {
                return;
            }
            var clickedIndex = thumbsSwiper.clickedIndex;
            var clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) {
                return;
            }
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) {
                return;
            }
            var slideToIndex;
            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }
            if (swiper.params.loop) {
                var currentIndex = swiper.activeIndex;
                if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                    swiper.loopFix();
                    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                    currentIndex = swiper.activeIndex;
                }
                var prevIndex = swiper.slides.eq(currentIndex).prevAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
                var nextIndex = swiper.slides.eq(currentIndex).nextAll(("[data-swiper-slide-index=\"" + slideToIndex + "\"]")).eq(0).index();
                if (typeof prevIndex === 'undefined') {
                    slideToIndex = nextIndex;
                } else if (typeof nextIndex === 'undefined') {
                    slideToIndex = prevIndex;
                } else if (nextIndex - currentIndex < currentIndex - prevIndex) {
                    slideToIndex = nextIndex;
                } else {
                    slideToIndex = prevIndex;
                }
            }
            swiper.slideTo(slideToIndex);
        },
        update: function update(initial) {
            var swiper = this;
            var thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper) {
                return;
            }
            var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
            if (swiper.realIndex !== thumbsSwiper.realIndex) {
                var currentThumbsIndex = thumbsSwiper.activeIndex;
                var newThumbsIndex;
                if (thumbsSwiper.params.loop) {
                    if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                        thumbsSwiper.loopFix();
                        thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                        currentThumbsIndex = thumbsSwiper.activeIndex;
                    }
                    var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
                    var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(("[data-swiper-slide-index=\"" + (swiper.realIndex) + "\"]")).eq(0).index();
                    if (typeof prevThumbsIndex === 'undefined') {
                        newThumbsIndex = nextThumbsIndex;
                    } else if (typeof nextThumbsIndex === 'undefined') {
                        newThumbsIndex = prevThumbsIndex;
                    } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
                        newThumbsIndex = currentThumbsIndex;
                    } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
                        newThumbsIndex = nextThumbsIndex;
                    } else {
                        newThumbsIndex = prevThumbsIndex;
                    }
                } else {
                    newThumbsIndex = swiper.realIndex;
                }
                if (thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex) {
                        newThumbsIndex = newThumbsIndex - slidesPerView + 1;
                    }
                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            }
            var thumbsToActivate = 1;
            var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }
            thumbsSwiper.slides.removeClass(thumbActiveClass);
            if (thumbsSwiper.params.loop) {
                for (var i = 0; i < thumbsToActivate; i += 1) {
                    thumbsSwiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]")).addClass(thumbActiveClass);
                }
            } else {
                for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
                    thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
                }
            }
        },
    };
    var Thumbs$1 = {
        name: 'thumbs',
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-container-thumbs',
            },
        },
        create: function create() {
            var swiper = this;
            Utils.extend(swiper, {
                thumbs: {
                    swiper: null,
                    init: Thumbs.init.bind(swiper),
                    update: Thumbs.update.bind(swiper),
                    onThumbClick: Thumbs.onThumbClick.bind(swiper),
                },
            });
        },
        on: {
            beforeInit: function beforeInit() {
                var swiper = this;
                var ref = swiper.params;
                var thumbs = ref.thumbs;
                if (!thumbs || !thumbs.swiper) {
                    return;
                }
                swiper.thumbs.init();
                swiper.thumbs.update(true);
            },
            slideChange: function slideChange() {
                var swiper = this;
                if (!swiper.thumbs.swiper) {
                    return;
                }
                swiper.thumbs.update();
            },
            update: function update() {
                var swiper = this;
                if (!swiper.thumbs.swiper) {
                    return;
                }
                swiper.thumbs.update();
            },
            resize: function resize() {
                var swiper = this;
                if (!swiper.thumbs.swiper) {
                    return;
                }
                swiper.thumbs.update();
            },
            observerUpdate: function observerUpdate() {
                var swiper = this;
                if (!swiper.thumbs.swiper) {
                    return;
                }
                swiper.thumbs.update();
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) {
                    return;
                }
                thumbsSwiper.setTransition(duration);
            },
            beforeDestroy: function beforeDestroy() {
                var swiper = this;
                var thumbsSwiper = swiper.thumbs.swiper;
                if (!thumbsSwiper) {
                    return;
                }
                if (swiper.thumbs.swiperCreated && thumbsSwiper) {
                    thumbsSwiper.destroy();
                }
            },
        },
    };
    var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
    if (typeof Swiper.use === 'undefined') {
        Swiper.use = Swiper.Class.use;
        Swiper.installModule = Swiper.Class.installModule;
    }
    Swiper.use(components);
    return Swiper;
}));
/*!
 * jQuery Validation Plugin v1.17.0
 *
 * https://jqueryvalidation.org/
 *
 * Copyright (c) 2017 Jörn Zaefferer
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof module === "object" && module.exports) {
        module.exports = factory(require("jquery"));
    } else {
        factory(jQuery);
    }
}(function($) {
    $.extend($.fn, {
        validate: function(options) {
            if (!this.length) {
                if (options && options.debug && window.console) {
                    console.warn("Nothing selected, can't validate, returning nothing.");
                }
                return;
            }
            var validator = $.data(this[0], "validator");
            if (validator) {
                return validator;
            }
            this.attr("novalidate", "novalidate");
            validator = new $.validator(options, this[0]);
            $.data(this[0], "validator", validator);
            if (validator.settings.onsubmit) {
                this.on("click.validate", ":submit", function(event) {
                    validator.submitButton = event.currentTarget;
                    if ($(this).hasClass("cancel")) {
                        validator.cancelSubmit = true;
                    }
                    if ($(this).attr("formnovalidate") !== undefined) {
                        validator.cancelSubmit = true;
                    }
                });
                this.on("submit.validate", function(event) {
                    if (validator.settings.debug) {
                        event.preventDefault();
                    }

                    function handle() {
                        var hidden, result;
                        if (validator.submitButton && (validator.settings.submitHandler || validator.formSubmitted)) {
                            hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
                        }
                        if (validator.settings.submitHandler) {
                            result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                            if (hidden) {
                                hidden.remove();
                            }
                            if (result !== undefined) {
                                return result;
                            }
                            return false;
                        }
                        return true;
                    }
                    if (validator.cancelSubmit) {
                        validator.cancelSubmit = false;
                        return handle();
                    }
                    if (validator.form()) {
                        if (validator.pendingRequest) {
                            validator.formSubmitted = true;
                            return false;
                        }
                        return handle();
                    } else {
                        validator.focusInvalid();
                        return false;
                    }
                });
            }
            return validator;
        },
        valid: function() {
            var valid, validator, errorList;
            if ($(this[0]).is("form")) {
                valid = this.validate().form();
            } else {
                errorList = [];
                valid = true;
                validator = $(this[0].form).validate();
                this.each(function() {
                    valid = validator.element(this) && valid;
                    if (!valid) {
                        errorList = errorList.concat(validator.errorList);
                    }
                });
                validator.errorList = errorList;
            }
            return valid;
        },
        rules: function(command, argument) {
            var element = this[0],
                settings, staticRules, existingRules, data, param, filtered;
            if (element == null) {
                return;
            }
            if (!element.form && element.hasAttribute("contenteditable")) {
                element.form = this.closest("form")[0];
                element.name = this.attr("name");
            }
            if (element.form == null) {
                return;
            }
            if (command) {
                settings = $.data(element.form, "validator").settings;
                staticRules = settings.rules;
                existingRules = $.validator.staticRules(element);
                switch (command) {
                    case "add":
                        $.extend(existingRules, $.validator.normalizeRule(argument));
                        delete existingRules.messages;
                        staticRules[element.name] = existingRules;
                        if (argument.messages) {
                            settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                        }
                        break;
                    case "remove":
                        if (!argument) {
                            delete staticRules[element.name];
                            return existingRules;
                        }
                        filtered = {};
                        $.each(argument.split(/\s/), function(index, method) {
                            filtered[method] = existingRules[method];
                            delete existingRules[method];
                        });
                        return filtered;
                }
            }
            data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
            if (data.required) {
                param = data.required;
                delete data.required;
                data = $.extend({
                    required: param
                }, data);
            }
            if (data.remote) {
                param = data.remote;
                delete data.remote;
                data = $.extend(data, {
                    remote: param
                });
            }
            return data;
        }
    });
    $.extend($.expr.pseudos || $.expr[":"], {
        blank: function(a) {
            return !$.trim("" + $(a).val());
        },
        filled: function(a) {
            var val = $(a).val();
            return val !== null && !!$.trim("" + val);
        },
        unchecked: function(a) {
            return !$(a).prop("checked");
        }
    });
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    };
    $.validator.format = function(source, params) {
        if (arguments.length === 1) {
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            };
        }
        if (params === undefined) {
            return source;
        }
        if (arguments.length > 2 && params.constructor !== Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor !== Array) {
            params = [params];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                return n;
            });
        });
        return source;
    };
    $.extend($.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.hideThese(this.errorsFor(element));
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onkeyup: function(element, event) {
                var excludedKeys = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                    return;
                } else if (element.name in this.submitted || element.name in this.invalid) {
                    this.element(element);
                }
            },
            onclick: function(element) {
                if (element.name in this.submitted) {
                    this.element(element);
                } else if (element.parentNode.name in this.submitted) {
                    this.element(element.parentNode);
                }
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).addClass(errorClass).removeClass(validClass);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).removeClass(errorClass).addClass(validClass);
                }
            }
        },
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings);
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: $.validator.format("Please enter no more than {0} characters."),
            minlength: $.validator.format("Please enter at least {0} characters."),
            rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
            range: $.validator.format("Please enter a value between {0} and {1}."),
            max: $.validator.format("Please enter a value less than or equal to {0}."),
            min: $.validator.format("Please enter a value greater than or equal to {0}."),
            step: $.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: false,
        prototype: {
            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var groups = (this.groups = {}),
                    rules;
                $.each(this.settings.groups, function(key, value) {
                    if (typeof value === "string") {
                        value = value.split(/\s/);
                    }
                    $.each(value, function(index, name) {
                        groups[name] = key;
                    });
                });
                rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value);
                });

                function delegate(event) {
                    if (!this.form && this.hasAttribute("contenteditable")) {
                        this.form = $(this).closest("form")[0];
                        this.name = $(this).attr("name");
                    }
                    var validator = $.data(this.form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, ""),
                        settings = validator.settings;
                    if (settings[eventType] && !$(this).is(settings.ignore)) {
                        settings[eventType].call(validator, this, event);
                    }
                }
                $(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], " + "[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], " + "[type='radio'], [type='checkbox'], [contenteditable], [type='button']", delegate).on("click.validate", "select, option, [type='radio'], [type='checkbox']", delegate);
                if (this.settings.invalidHandler) {
                    $(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                }
            },
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                }
                this.showErrors();
                return this.valid();
            },
            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i]);
                }
                return this.valid();
            },
            element: function(element) {
                var cleanElement = this.clean(element),
                    checkElement = this.validationTargetFor(cleanElement),
                    v = this,
                    result = true,
                    rs, group;
                if (checkElement === undefined) {
                    delete this.invalid[cleanElement.name];
                } else {
                    this.prepareElement(checkElement);
                    this.currentElements = $(checkElement);
                    group = this.groups[checkElement.name];
                    if (group) {
                        $.each(this.groups, function(name, testgroup) {
                            if (testgroup === group && name !== checkElement.name) {
                                cleanElement = v.validationTargetFor(v.clean(v.findByName(name)));
                                if (cleanElement && cleanElement.name in v.invalid) {
                                    v.currentElements.push(cleanElement);
                                    result = v.check(cleanElement) && result;
                                }
                            }
                        });
                    }
                    rs = this.check(checkElement) !== false;
                    result = result && rs;
                    if (rs) {
                        this.invalid[checkElement.name] = false;
                    } else {
                        this.invalid[checkElement.name] = true;
                    }
                    if (!this.numberOfInvalids()) {
                        this.toHide = this.toHide.add(this.containers);
                    }
                    this.showErrors();
                    $(element).attr("aria-invalid", !rs);
                }
                return result;
            },
            showErrors: function(errors) {
                if (errors) {
                    var validator = this;
                    $.extend(this.errorMap, errors);
                    this.errorList = $.map(this.errorMap, function(message, name) {
                        return {
                            message: message,
                            element: validator.findByName(name)[0]
                        };
                    });
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors);
                    });
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList);
                } else {
                    this.defaultShowErrors();
                }
            },
            resetForm: function() {
                if ($.fn.resetForm) {
                    $(this.currentForm).resetForm();
                }
                this.invalid = {};
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var elements = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(elements);
            },
            resetElements: function(elements) {
                var i;
                if (this.settings.unhighlight) {
                    for (i = 0; elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, "");
                        this.findByName(elements[i].name).removeClass(this.settings.validClass);
                    }
                } else {
                    elements.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
                }
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },
            objectLength: function(obj) {
                var count = 0,
                    i;
                for (i in obj) {
                    if (obj[i] !== undefined && obj[i] !== null && obj[i] !== false) {
                        count++;
                    }
                }
                return count;
            },
            hideErrors: function() {
                this.hideThese(this.toHide);
            },
            hideThese: function(errors) {
                errors.not(this.containers).text("");
                this.addWrapper(errors).hide();
            },
            valid: function() {
                return this.size() === 0;
            },
            size: function() {
                return this.errorList.length;
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
                    } catch (e) {}
                }
            },
            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name === lastActive.name;
                }).length === 1 && lastActive;
            },
            elements: function() {
                var validator = this,
                    rulesCache = {};
                return $(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var name = this.name || $(this).attr("name");
                    if (!name && validator.settings.debug && window.console) {
                        console.error("%o has no name assigned", this);
                    }
                    if (this.hasAttribute("contenteditable")) {
                        this.form = $(this).closest("form")[0];
                        this.name = name;
                    }
                    if (name in rulesCache || !validator.objectLength($(this).rules())) {
                        return false;
                    }
                    rulesCache[name] = true;
                    return true;
                });
            },
            clean: function(selector) {
                return $(selector)[0];
            },
            errors: function() {
                var errorClass = this.settings.errorClass.split(" ").join(".");
                return $(this.settings.errorElement + "." + errorClass, this.errorContext);
            },
            resetInternals: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
            },
            reset: function() {
                this.resetInternals();
                this.currentElements = $([]);
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },
            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element);
            },
            elementValue: function(element) {
                var $element = $(element),
                    type = element.type,
                    val, idx;
                if (type === "radio" || type === "checkbox") {
                    return this.findByName(element.name).filter(":checked").val();
                } else if (type === "number" && typeof element.validity !== "undefined") {
                    return element.validity.badInput ? "NaN" : $element.val();
                }
                if (element.hasAttribute("contenteditable")) {
                    val = $element.text();
                } else {
                    val = $element.val();
                }
                if (type === "file") {
                    if (val.substr(0, 12) === "C:\\fakepath\\") {
                        return val.substr(12);
                    }
                    idx = val.lastIndexOf("/");
                    if (idx >= 0) {
                        return val.substr(idx + 1);
                    }
                    idx = val.lastIndexOf("\\");
                    if (idx >= 0) {
                        return val.substr(idx + 1);
                    }
                    return val;
                }
                if (typeof val === "string") {
                    return val.replace(/\r/g, "");
                }
                return val;
            },
            check: function(element) {
                element = this.validationTargetFor(this.clean(element));
                var rules = $(element).rules(),
                    rulesCount = $.map(rules, function(n, i) {
                        return i;
                    }).length,
                    dependencyMismatch = false,
                    val = this.elementValue(element),
                    result, method, rule, normalizer;
                if (typeof rules.normalizer === "function") {
                    normalizer = rules.normalizer;
                } else if (typeof this.settings.normalizer === "function") {
                    normalizer = this.settings.normalizer;
                }
                if (normalizer) {
                    val = normalizer.call(element, val);
                    if (typeof val !== "string") {
                        throw new TypeError("The normalizer should return a string value.");
                    }
                    delete rules.normalizer;
                }
                for (method in rules) {
                    rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {
                        result = $.validator.methods[method].call(this, val, element, rule.parameters);
                        if (result === "dependency-mismatch" && rulesCount === 1) {
                            dependencyMismatch = true;
                            continue;
                        }
                        dependencyMismatch = false;
                        if (result === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return;
                        }
                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false;
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                        }
                        if (e instanceof TypeError) {
                            e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                        }
                        throw e;
                    }
                }
                if (dependencyMismatch) {
                    return;
                }
                if (this.objectLength(rules)) {
                    this.successList.push(element);
                }
                return true;
            },
            customDataMessage: function(element, method) {
                return $(element).data("msg" + method.charAt(0).toUpperCase() +
                    method.substring(1).toLowerCase()) || $(element).data("msg");
            },
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor === String ? m : m[method]);
            },
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined) {
                        return arguments[i];
                    }
                }
                return undefined;
            },
            defaultMessage: function(element, rule) {
                if (typeof rule === "string") {
                    rule = {
                        method: rule
                    };
                }
                var message = this.findDefined(this.customMessage(element.name, rule.method), this.customDataMessage(element, rule.method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[rule.method], "<strong>Warning: No message defined for " + element.name + "</strong>"),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message === "function") {
                    message = message.call(this, rule.parameters, element);
                } else if (theregex.test(message)) {
                    message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
                }
                return message;
            },
            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule);
                this.errorList.push({
                    message: message,
                    element: element,
                    method: rule.method
                });
                this.errorMap[element.name] = message;
                this.submitted[element.name] = message;
            },
            addWrapper: function(toToggle) {
                if (this.settings.wrapper) {
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                }
                return toToggle;
            },
            defaultShowErrors: function() {
                var i, elements, error;
                for (i = 0; this.errorList[i]; i++) {
                    error = this.errorList[i];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(error.element, error.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (i = 0, elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },
            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element;
                });
            },
            showLabel: function(element, message) {
                var place, group, errorID, v, error = this.errorsFor(element),
                    elementID = this.idOrName(element),
                    describedBy = $(element).attr("aria-describedby");
                if (error.length) {
                    error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    error.html(message);
                } else {
                    error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
                    place = error;
                    if (this.settings.wrapper) {
                        place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(place);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement.call(this, place, $(element));
                    } else {
                        place.insertAfter(element);
                    }
                    if (error.is("label")) {
                        error.attr("for", elementID);
                    } else if (error.parents("label[for='" + this.escapeCssMeta(elementID) + "']").length === 0) {
                        errorID = error.attr("id");
                        if (!describedBy) {
                            describedBy = errorID;
                        } else if (!describedBy.match(new RegExp("\\b" + this.escapeCssMeta(errorID) + "\\b"))) {
                            describedBy += " " + errorID;
                        }
                        $(element).attr("aria-describedby", describedBy);
                        group = this.groups[element.name];
                        if (group) {
                            v = this;
                            $.each(v.groups, function(name, testgroup) {
                                if (testgroup === group) {
                                    $("[name='" + v.escapeCssMeta(name) + "']", v.currentForm).attr("aria-describedby", error.attr("id"));
                                }
                            });
                        }
                    }
                }
                if (!message && this.settings.success) {
                    error.text("");
                    if (typeof this.settings.success === "string") {
                        error.addClass(this.settings.success);
                    } else {
                        this.settings.success(error, element);
                    }
                }
                this.toShow = this.toShow.add(error);
            },
            errorsFor: function(element) {
                var name = this.escapeCssMeta(this.idOrName(element)),
                    describer = $(element).attr("aria-describedby"),
                    selector = "label[for='" + name + "'], label[for='" + name + "'] *";
                if (describer) {
                    selector = selector + ", #" + this.escapeCssMeta(describer).replace(/\s+/g, ", #");
                }
                return this.errors().filter(selector);
            },
            escapeCssMeta: function(string) {
                return string.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
            },
            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },
            validationTargetFor: function(element) {
                if (this.checkable(element)) {
                    element = this.findByName(element.name);
                }
                return $(element).not(this.settings.ignore)[0];
            },
            checkable: function(element) {
                return (/radio|checkbox/i).test(element.type);
            },
            findByName: function(name) {
                return $(this.currentForm).find("[name='" + this.escapeCssMeta(name) + "']");
            },
            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case "select":
                        return $("option:selected", element).length;
                    case "input":
                        if (this.checkable(element)) {
                            return this.findByName(element.name).filter(":checked").length;
                        }
                }
                return value.length;
            },
            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },
            dependTypes: {
                "boolean": function(param) {
                    return param;
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length;
                },
                "function": function(param, element) {
                    return param(element);
                }
            },
            optional: function(element) {
                var val = this.elementValue(element);
                return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
            },
            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    $(element).addClass(this.settings.pendingClass);
                    this.pending[element.name] = true;
                }
            },
            stopRequest: function(element, valid) {
                this.pendingRequest--;
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[element.name];
                $(element).removeClass(this.settings.pendingClass);
                if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    if (this.submitButton) {
                        $("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove();
                    }
                    this.formSubmitted = false;
                } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },
            previousValue: function(element, method) {
                method = typeof method === "string" && method || "remote";
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, {
                        method: method
                    })
                });
            },
            destroy: function() {
                this.resetForm();
                $(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur");
            }
        },
        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },
        addClassRules: function(className, rules) {
            if (className.constructor === String) {
                this.classRuleSettings[className] = rules;
            } else {
                $.extend(this.classRuleSettings, className);
            }
        },
        classRules: function(element) {
            var rules = {},
                classes = $(element).attr("class");
            if (classes) {
                $.each(classes.split(" "), function() {
                    if (this in $.validator.classRuleSettings) {
                        $.extend(rules, $.validator.classRuleSettings[this]);
                    }
                });
            }
            return rules;
        },
        normalizeAttributeRule: function(rules, type, method, value) {
            if (/min|max|step/.test(method) && (type === null || /number|range|text/.test(type))) {
                value = Number(value);
                if (isNaN(value)) {
                    value = undefined;
                }
            }
            if (value || value === 0) {
                rules[method] = value;
            } else if (type === method && type !== "range") {
                rules[method] = true;
            }
        },
        attributeRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;
            for (method in $.validator.methods) {
                if (method === "required") {
                    value = element.getAttribute(method);
                    if (value === "") {
                        value = true;
                    }
                    value = !!value;
                } else {
                    value = $element.attr(method);
                }
                this.normalizeAttributeRule(rules, type, method, value);
            }
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength;
            }
            return rules;
        },
        dataRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;
            for (method in $.validator.methods) {
                value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                this.normalizeAttributeRule(rules, type, method, value);
            }
            return rules;
        },
        staticRules: function(element) {
            var rules = {},
                validator = $.data(element.form, "validator");
            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
        },
        normalizeRules: function(rules, element) {
            $.each(rules, function(prop, val) {
                if (val === false) {
                    delete rules[prop];
                    return;
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break;
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true;
                    } else {
                        $.data(element.form, "validator").resetElements($(element));
                        delete rules[prop];
                    }
                }
            });
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) && rule !== "normalizer" ? parameter(element) : parameter;
            });
            $.each(["minlength", "maxlength"], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this]);
                }
            });
            $.each(["rangelength", "range"], function() {
                var parts;
                if (rules[this]) {
                    if ($.isArray(rules[this])) {
                        rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                    } else if (typeof rules[this] === "string") {
                        parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        rules[this] = [Number(parts[0]), Number(parts[1])];
                    }
                }
            });
            if ($.validator.autoCreateRanges) {
                if (rules.min != null && rules.max != null) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max;
                }
                if (rules.minlength != null && rules.maxlength != null) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength;
                }
            }
            return rules;
        },
        normalizeRule: function(data) {
            if (typeof data === "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true;
                });
                data = transformed;
            }
            return data;
        },
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name));
            }
        },
        methods: {
            required: function(value, element, param) {
                if (!this.depend(param, element)) {
                    return "dependency-mismatch";
                }
                if (element.nodeName.toLowerCase() === "select") {
                    var val = $(element).val();
                    return val && val.length > 0;
                }
                if (this.checkable(element)) {
                    return this.getLength(value, element) > 0;
                }
                return value.length > 0;
            },
            email: function(value, element) {
                return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
            },
            url: function(value, element) {
                return this.optional(element) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
            },
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
            },
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
            },
            number: function(value, element) {
                return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
            },
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },
            minlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param;
            },
            maxlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length <= param;
            },
            rangelength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },
            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },
            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },
            step: function(value, element, param) {
                var type = $(element).attr("type"),
                    errorMessage = "Step attribute on input type " + type + " is not supported.",
                    supportedTypes = ["text", "number", "range"],
                    re = new RegExp("\\b" + type + "\\b"),
                    notSupported = type && !re.test(supportedTypes.join()),
                    decimalPlaces = function(num) {
                        var match = ("" + num).match(/(?:\.(\d+))?$/);
                        if (!match) {
                            return 0;
                        }
                        return match[1] ? match[1].length : 0;
                    },
                    toInt = function(num) {
                        return Math.round(num * Math.pow(10, decimals));
                    },
                    valid = true,
                    decimals;
                if (notSupported) {
                    throw new Error(errorMessage);
                }
                decimals = decimalPlaces(param);
                if (decimalPlaces(value) > decimals || toInt(value) % toInt(param) !== 0) {
                    valid = false;
                }
                return this.optional(element) || valid;
            },
            equalTo: function(value, element, param) {
                var target = $(param);
                if (this.settings.onfocusout && target.not(".validate-equalTo-blur").length) {
                    target.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        $(element).valid();
                    });
                }
                return value === target.val();
            },
            remote: function(value, element, param, method) {
                if (this.optional(element)) {
                    return "dependency-mismatch";
                }
                method = typeof method === "string" && method || "remote";
                var previous = this.previousValue(element, method),
                    validator, data, optionDataString;
                if (!this.settings.messages[element.name]) {
                    this.settings.messages[element.name] = {};
                }
                previous.originalMessage = previous.originalMessage || this.settings.messages[element.name][method];
                this.settings.messages[element.name][method] = previous.message;
                param = typeof param === "string" && {
                    url: param
                } || param;
                optionDataString = $.param($.extend({
                    data: value
                }, param.data));
                if (previous.old === optionDataString) {
                    return previous.valid;
                }
                previous.old = optionDataString;
                validator = this;
                this.startRequest(element);
                data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    context: validator.currentForm,
                    success: function(response) {
                        var valid = response === true || response === "true",
                            errors, message, submitted;
                        validator.settings.messages[element.name][method] = previous.originalMessage;
                        if (valid) {
                            submitted = validator.formSubmitted;
                            validator.resetInternals();
                            validator.toHide = validator.errorsFor(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            validator.invalid[element.name] = false;
                            validator.showErrors();
                        } else {
                            errors = {};
                            message = response || validator.defaultMessage(element, {
                                method: method,
                                parameters: value
                            });
                            errors[element.name] = previous.message = message;
                            validator.invalid[element.name] = true;
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            }
        }
    });
    var pendingRequests = {},
        ajax;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function(settings, _, xhr) {
            var port = settings.port;
            if (settings.mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = xhr;
            }
        });
    } else {
        ajax = $.ajax;
        $.ajax = function(settings) {
            var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
                port = ("port" in settings ? settings : $.ajaxSettings).port;
            if (mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = ajax.apply(this, arguments);
                return pendingRequests[port];
            }
            return ajax.apply(this, arguments);
        };
    }
    return $;
}));
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(global, factory) {
    if (typeof define == 'function' && define.amd) {
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i]
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
}));
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define(['ev-emitter/ev-emitter'], function(EvEmitter) {
            return factory(window, EvEmitter);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'));
    } else {
        window.imagesLoaded = factory(window, window.EvEmitter);
    }
})(typeof window !== 'undefined' ? window : this, function factory(window, EvEmitter) {
    var $ = window.jQuery;
    var console = window.console;

    function extend(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    }
    var arraySlice = Array.prototype.slice;

    function makeArray(obj) {
        if (Array.isArray(obj)) {
            return obj;
        }
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) {
            return arraySlice.call(obj);
        }
        return [obj];
    }

    function ImagesLoaded(elem, options, onAlways) {
        if (!(this instanceof ImagesLoaded)) {
            return new ImagesLoaded(elem, options, onAlways);
        }
        var queryElem = elem;
        if (typeof elem == 'string') {
            queryElem = document.querySelectorAll(elem);
        }
        if (!queryElem) {
            console.error('Bad element for imagesLoaded ' + (queryElem || elem));
            return;
        }
        this.elements = makeArray(queryElem);
        this.options = extend({}, this.options);
        if (typeof options == 'function') {
            onAlways = options;
        } else {
            extend(this.options, options);
        }
        if (onAlways) {
            this.on('always', onAlways);
        }
        this.getImages();
        if ($) {
            this.jqDeferred = new $.Deferred();
        }
        setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.options = {};
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        this.elements.forEach(this.addElementImages, this);
    };
    ImagesLoaded.prototype.addElementImages = function(elem) {
        if (elem.nodeName == 'IMG') {
            this.addImage(elem);
        }
        if (this.options.background === true) {
            this.addElementBackgroundImages(elem);
        }
        var nodeType = elem.nodeType;
        if (!nodeType || !elementNodeTypes[nodeType]) {
            return;
        }
        var childImgs = elem.querySelectorAll('img');
        for (var i = 0; i < childImgs.length; i++) {
            var img = childImgs[i];
            this.addImage(img);
        }
        if (typeof this.options.background == 'string') {
            var children = elem.querySelectorAll(this.options.background);
            for (i = 0; i < children.length; i++) {
                var child = children[i];
                this.addElementBackgroundImages(child);
            }
        }
    };
    var elementNodeTypes = {
        1: true,
        9: true,
        11: true
    };
    ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            return;
        }
        var reURL = /url\((['"])?(.*?)\1\)/gi;
        var matches = reURL.exec(style.backgroundImage);
        while (matches !== null) {
            var url = matches && matches[2];
            if (url) {
                this.addBackground(url, elem);
            }
            matches = reURL.exec(style.backgroundImage);
        }
    };
    ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.addBackground = function(url, elem) {
        var background = new Background(url, elem);
        this.images.push(background);
    };
    ImagesLoaded.prototype.check = function() {
        var _this = this;
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        if (!this.images.length) {
            this.complete();
            return;
        }

        function onProgress(image, elem, message) {
            setTimeout(function() {
                _this.progress(image, elem, message);
            });
        }
        this.images.forEach(function(loadingImage) {
            loadingImage.once('progress', onProgress);
            loadingImage.check();
        });
    };
    ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        this.emitEvent('progress', [this, image, elem]);
        if (this.jqDeferred && this.jqDeferred.notify) {
            this.jqDeferred.notify(this, image);
        }
        if (this.progressedCount == this.images.length) {
            this.complete();
        }
        if (this.options.debug && console) {
            console.log('progress: ' + message, image, elem);
        }
    };
    ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = true;
        this.emitEvent(eventName, [this]);
        this.emitEvent('always', [this]);
        if (this.jqDeferred) {
            var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
            this.jqDeferred[jqMethod](this);
        }
    };

    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function() {
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            return;
        }
        this.proxyImage = new Image();
        this.proxyImage.addEventListener('load', this);
        this.proxyImage.addEventListener('error', this);
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.proxyImage.src = this.img.src;
    };
    LoadingImage.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth;
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [this, this.img, message]);
    };
    LoadingImage.prototype.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    LoadingImage.prototype.onload = function() {
        this.confirm(true, 'onload');
        this.unbindEvents();
    };
    LoadingImage.prototype.onerror = function() {
        this.confirm(false, 'onerror');
        this.unbindEvents();
    };
    LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener('load', this);
        this.proxyImage.removeEventListener('error', this);
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    };

    function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
    }
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function() {
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.img.src = this.url;
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            this.unbindEvents();
        }
    };
    Background.prototype.unbindEvents = function() {
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    };
    Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [this, this.element, message]);
    };
    ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window.jQuery;
        if (!jQuery) {
            return;
        }
        $ = jQuery;
        $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this));
        };
    };
    ImagesLoaded.makeJQueryPlugin();
    return ImagesLoaded;
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('jquery-bridget/jquery-bridget', ['jquery'], function(jQuery) {
            return factory(window, jQuery);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('jquery'));
    } else {
        window.jQueryBridget = factory(window, window.jQuery);
    }
}(window, function factory(window, jQuery) {
    'use strict';
    var arraySlice = Array.prototype.slice;
    var console = window.console;
    var logError = typeof console == 'undefined' ? function() {} : function(message) {
        console.error(message);
    };

    function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) {
            return;
        }
        if (!PluginClass.prototype.option) {
            PluginClass.prototype.option = function(opts) {
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }
        $.fn[namespace] = function(arg0) {
            if (typeof arg0 == 'string') {
                var args = arraySlice.call(arguments, 1);
                return methodCall(this, arg0, args);
            }
            plainCall(this, arg0);
            return this;
        };

        function methodCall($elems, methodName, args) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (!instance) {
                    logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
                        pluginMethodStr);
                    return;
                }
                var method = instance[methodName];
                if (!method || methodName.charAt(0) == '_') {
                    logError(pluginMethodStr + ' is not a valid method');
                    return;
                }
                var value = method.apply(instance, args);
                returnValue = returnValue === undefined ? value : returnValue;
            });
            return returnValue !== undefined ? returnValue : $elems;
        }

        function plainCall($elems, options) {
            $elems.each(function(i, elem) {
                var instance = $.data(elem, namespace);
                if (instance) {
                    instance.option(options);
                    instance._init();
                } else {
                    instance = new PluginClass(elem, options);
                    $.data(elem, namespace, instance);
                }
            });
        }
        updateJQuery($);
    }

    function updateJQuery($) {
        if (!$ || ($ && $.bridget)) {
            return;
        }
        $.bridget = jQueryBridget;
    }
    updateJQuery(jQuery || window.jQuery);
    return jQueryBridget;
}));
(function(global, factory) {
    if (typeof define == 'function' && define.amd) {
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        global.EvEmitter = factory();
    }
}(typeof window != 'undefined' ? window : this, function() {
    function EvEmitter() {}
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        var events = this._events = this._events || {};
        var listeners = events[eventName] = events[eventName] || [];
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        this.on(eventName, listener);
        var onceEvents = this._onceEvents = this._onceEvents || {};
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        listeners = listeners.slice(0);
        args = args || [];
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i]
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                this.off(eventName, listener);
                delete onceListeners[listener];
            }
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
}));
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('get-size/get-size', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.getSize = factory();
    }
})(window, function factory() {
    'use strict';

    function getStyleSize(value) {
        var num = parseFloat(value);
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }

    function noop() {}
    var logError = typeof console == 'undefined' ? noop : function(message) {
        console.error(message);
    };
    var measurements = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
    var measurementsLength = measurements.length;

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }

    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
        }
        return style;
    }
    var isSetup = false;
    var isBoxSizeOuter;

    function setup() {
        if (isSetup) {
            return;
        }
        isSetup = true;
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }

    function getSize(elem) {
        setup();
        if (typeof elem == 'string') {
            elem = document.querySelector(elem);
        }
        if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
        }
        var style = getStyle(elem);
        if (style.display == 'none') {
            return getZeroSize();
        }
        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
            size.width = styleWidth +
                (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
            size.height = styleHeight +
                (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('desandro-matches-selector/matches-selector', factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory();
    } else {
        window.matchesSelector = factory();
    }
}(window, function factory() {
    'use strict';
    var matchesMethod = (function() {
        var ElemProto = window.Element.prototype;
        if (ElemProto.matches) {
            return 'matches';
        }
        if (ElemProto.matchesSelector) {
            return 'matchesSelector';
        }
        var prefixes = ['webkit', 'moz', 'ms', 'o'];
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
                return method;
            }
        }
    })();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function(matchesSelector) {
            return factory(window, matchesSelector);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('desandro-matches-selector'));
    } else {
        window.fizzyUIUtils = factory(window, window.matchesSelector);
    }
}(window, function factory(window, matchesSelector) {
    var utils = {};
    utils.extend = function(a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    };
    utils.modulo = function(num, div) {
        return ((num % div) + div) % div;
    };
    var arraySlice = Array.prototype.slice;
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) {
            return obj;
        }
        if (obj === null || obj === undefined) {
            return [];
        }
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) {
            return arraySlice.call(obj);
        }
        return [obj];
    };
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    };
    utils.getParent = function(elem, selector) {
        while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    };
    utils.getQueryElement = function(elem) {
        if (typeof elem == 'string') {
            return document.querySelector(elem);
        }
        return elem;
    };
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    utils.filterFindElements = function(elems, selector) {
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            if (!(elem instanceof HTMLElement)) {
                return;
            }
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            if (matchesSelector(elem, selector)) {
                ffElems.push(elem);
            }
            var childElems = elem.querySelectorAll(selector);
            for (var i = 0; i < childElems.length; i++) {
                ffElems.push(childElems[i]);
            }
        });
        return ffElems;
    };
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == 'complete' || readyState == 'interactive') {
            setTimeout(callback);
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    };
    var console = window.console;
    utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    if (console) {
                        console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                    }
                    return;
                }
                var instance = new WidgetClass(elem, options);
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            });
        });
    };
    return utils;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('ev-emitter'), require('get-size'));
    } else {
        window.Outlayer = {};
        window.Outlayer.Item = factory(window.EvEmitter, window.getSize);
    }
}(window, function factory(EvEmitter, getSize) {
    'use strict';

    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }
    var docElemStyle = document.documentElement.style;
    var transitionProperty = typeof docElemStyle.transition == 'string' ? 'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ? 'transform' : 'WebkitTransform';
    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend'
    }[transitionProperty];
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + 'Duration',
        transitionProperty: transitionProperty + 'Property',
        transitionDelay: transitionProperty + 'Delay'
    };

    function Item(element, layout) {
        if (!element) {
            return;
        }
        this.element = element;
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };
        this._create();
    }
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;
    proto._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };
        this.css({
            position: 'absolute'
        });
    };
    proto.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto.css = function(style) {
        var elemStyle = this.element.style;
        for (var prop in style) {
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    };
    proto.getPosition = function() {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xValue = style[isOriginLeft ? 'left' : 'right'];
        var yValue = style[isOriginTop ? 'top' : 'bottom'];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        var layoutSize = this.layout.size;
        if (xValue.indexOf('%') != -1) {
            x = (x / 100) * layoutSize.width;
        }
        if (yValue.indexOf('%') != -1) {
            y = (y / 100) * layoutSize.height;
        }
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;
        this.position.x = x;
        this.position.y = y;
    };
    proto.layoutPosition = function() {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = isOriginLeft ? 'left' : 'right';
        var xResetProperty = isOriginLeft ? 'right' : 'left';
        var x = this.position.x + layoutSize[xPadding];
        style[xProperty] = this.getXValue(x);
        style[xResetProperty] = '';
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = isOriginTop ? 'top' : 'bottom';
        var yResetProperty = isOriginTop ? 'bottom' : 'top';
        var y = this.position.y + layoutSize[yPadding];
        style[yProperty] = this.getYValue(y);
        style[yResetProperty] = '';
        this.css(style);
        this.emitEvent('layout', [this]);
    };
    proto.getXValue = function(x) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ? ((x / this.layout.size.width) * 100) + '%' : x + 'px';
    };
    proto.getYValue = function(y) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ? ((y / this.layout.size.height) * 100) + '%' : y + 'px';
    };
    proto._transitionTo = function(x, y) {
        this.getPosition();
        var curX = this.position.x;
        var curY = this.position.y;
        var didNotMove = x == this.position.x && y == this.position.y;
        this.setPosition(x, y);
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }
        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);
        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };
    proto.getTranslate = function(x, y) {
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    };
    proto.goTo = function(x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    };
    proto.moveTo = proto._transitionTo;
    proto.setPosition = function(x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    };
    proto._nonTransition = function(args) {
        this.css(args.to);
        if (args.isCleaning) {
            this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
        }
    };
    proto.transition = function(args) {
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }
        var _transition = this._transn;
        for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            if (args.isCleaning) {
                _transition.clean[prop] = true;
            }
        }
        if (args.from) {
            this.css(args.from);
            var h = this.element.offsetHeight;
            h = null;
        }
        this.enableTransition(args.to);
        this.css(args.to);
        this.isTransitioning = true;
    };

    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function($1) {
            return '-' + $1.toLowerCase();
        });
    }
    var transitionProps = 'opacity,' + toDashedAll(transformProperty);
    proto.enableTransition = function() {
        if (this.isTransitioning) {
            return;
        }
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        this.element.addEventListener(transitionEndEvent, this, false);
    };
    proto.onwebkitTransitionEnd = function(event) {
        this.ontransitionend(event);
    };
    proto.onotransitionend = function(event) {
        this.ontransitionend(event);
    };
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };
    proto.ontransitionend = function(event) {
        if (event.target !== this.element) {
            return;
        }
        var _transition = this._transn;
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;
        delete _transition.ingProperties[propertyName];
        if (isEmptyObj(_transition.ingProperties)) {
            this.disableTransition();
        }
        if (propertyName in _transition.clean) {
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
        }
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }
        this.emitEvent('transitionEnd', [this]);
    };
    proto.disableTransition = function() {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    };
    proto._removeStyles = function(style) {
        var cleanStyle = {};
        for (var prop in style) {
            cleanStyle[prop] = '';
        }
        this.css(cleanStyle);
    };
    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };
    proto.removeTransitionStyles = function() {
        this.css(cleanTransitionStyle);
    };
    proto.stagger = function(delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + 'ms';
    };
    proto.removeElem = function() {
        this.element.parentNode.removeChild(this.element);
        this.css({
            display: ''
        });
        this.emitEvent('remove', [this]);
    };
    proto.remove = function() {
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }
        this.once('transitionEnd', function() {
            this.removeElem();
        });
        this.hide();
    };
    proto.reveal = function() {
        delete this.isHidden;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;
        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onRevealTransitionEnd = function() {
        if (!this.isHidden) {
            this.emitEvent('reveal');
        }
    };
    proto.getHideRevealTransitionEndProperty = function(styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        if (optionStyle.opacity) {
            return 'opacity';
        }
        for (var prop in optionStyle) {
            return prop;
        }
    };
    proto.hide = function() {
        this.isHidden = true;
        this.css({
            display: ''
        });
        var options = this.layout.options;
        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;
        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };
    proto.onHideTransitionEnd = function() {
        if (this.isHidden) {
            this.css({
                display: 'none'
            });
            this.emitEvent('hide');
        }
    };
    proto.destroy = function() {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    };
    return Item;
}));
/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */
(function(window, factory) {
    'use strict';
    if (typeof define == 'function' && define.amd) {
        define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function(EvEmitter, getSize, utils, Item) {
            return factory(window, EvEmitter, getSize, utils, Item);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item'));
    } else {
        window.Outlayer = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, window.Outlayer.Item);
    }
}(window, function factory(window, EvEmitter, getSize, utils, Item) {
    'use strict';
    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function() {};
    var GUID = 0;
    var instances = {};

    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error('Bad element for ' + this.constructor.namespace + ': ' + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        if (jQuery) {
            this.$element = jQuery(this.element);
        }
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);
        var id = ++GUID;
        this.element.outlayerGUID = id;
        instances[id] = this;
        this._create();
        var isInitLayout = this._getOption('initLayout');
        if (isInitLayout) {
            this.layout();
        }
    }
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };
    var proto = Outlayer.prototype;
    utils.extend(proto, EvEmitter.prototype);
    proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    proto._getOption = function(option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ? this.options[oldOption] : this.options[option];
    };
    Outlayer.compatOptions = {
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };
    proto._create = function() {
        this.reloadItems();
        this.stamps = [];
        this.stamp(this.options.stamp);
        utils.extend(this.element.style, this.options.containerStyle);
        var canBindResize = this._getOption('resize');
        if (canBindResize) {
            this.bindResize();
        }
    };
    proto.reloadItems = function() {
        this.items = this._itemize(this.element.children);
    };
    proto._itemize = function(elems) {
        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
        }
        return items;
    };
    proto._filterFindItemElements = function(elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    };
    proto.getItemElements = function() {
        return this.items.map(function(item) {
            return item.element;
        });
    };
    proto.layout = function() {
        this._resetLayout();
        this._manageStamps();
        var layoutInstant = this._getOption('layoutInstant');
        var isInstant = layoutInstant !== undefined ? layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);
        this._isLayoutInited = true;
    };
    proto._init = proto.layout;
    proto._resetLayout = function() {
        this.getSize();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto._getMeasurement = function(measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
            this[measurement] = 0;
        } else {
            if (typeof option == 'string') {
                elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
                elem = option;
            }
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    };
    proto.layoutItems = function(items, isInstant) {
        items = this._getItemsForLayout(items);
        this._layoutItems(items, isInstant);
        this._postLayout();
    };
    proto._getItemsForLayout = function(items) {
        return items.filter(function(item) {
            return !item.isIgnored;
        });
    };
    proto._layoutItems = function(items, isInstant) {
        this._emitCompleteOnItems('layout', items);
        if (!items || !items.length) {
            return;
        }
        var queue = [];
        items.forEach(function(item) {
            var position = this._getItemLayoutPosition(item);
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);
        this._processLayoutQueue(queue);
    };
    proto._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        };
    };
    proto._processLayoutQueue = function(queue) {
        this.updateStagger();
        queue.forEach(function(obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    };
    proto.updateStagger = function() {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    };
    proto._positionItem = function(item, x, y, isInstant, i) {
        if (isInstant) {
            item.goTo(x, y);
        } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    };
    proto._postLayout = function() {
        this.resizeContainer();
    };
    proto.resizeContainer = function() {
        var isResizingContainer = this._getOption('resizeContainer');
        if (!isResizingContainer) {
            return;
        }
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    };
    proto._getContainerSize = noop;
    proto._setContainerMeasure = function(measure, isWidth) {
        if (measure === undefined) {
            return;
        }
        var elemSize = this.size;
        if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                elemSize.borderLeftWidth + elemSize.borderRightWidth : elemSize.paddingBottom + elemSize.paddingTop +
                elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }
        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
    };
    proto._emitCompleteOnItems = function(eventName, items) {
        var _this = this;

        function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
        }
        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }
        var doneCount = 0;

        function tick() {
            doneCount++;
            if (doneCount == count) {
                onComplete();
            }
        }
        items.forEach(function(item) {
            item.once(eventName, tick);
        });
    };
    proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery) {
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                this.$element.trigger(type, args);
            }
        }
    };
    proto.ignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            item.isIgnored = true;
        }
    };
    proto.unignore = function(elem) {
        var item = this.getItem(elem);
        if (item) {
            delete item.isIgnored;
        }
    };
    proto.stamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        this.stamps = this.stamps.concat(elems);
        elems.forEach(this.ignore, this);
    };
    proto.unstamp = function(elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }
        elems.forEach(function(elem) {
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    };
    proto._find = function(elems) {
        if (!elems) {
            return;
        }
        if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
    };
    proto._manageStamps = function() {
        if (!this.stamps || !this.stamps.length) {
            return;
        }
        this._getBoundingRect();
        this.stamps.forEach(this._manageStamp, this);
    };
    proto._getBoundingRect = function() {
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    };
    proto._manageStamp = noop;
    proto._getElementOffset = function(elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };
    proto.handleEvent = utils.handleEvent;
    proto.bindResize = function() {
        window.addEventListener('resize', this);
        this.isResizeBound = true;
    };
    proto.unbindResize = function() {
        window.removeEventListener('resize', this);
        this.isResizeBound = false;
    };
    proto.onresize = function() {
        this.resize();
    };
    utils.debounceMethod(Outlayer, 'onresize', 100);
    proto.resize = function() {
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
        }
        this.layout();
    };
    proto.needsResizeLayout = function() {
        var size = getSize(this.element);
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };
    proto.addItems = function(elems) {
        var items = this._itemize(elems);
        if (items.length) {
            this.items = this.items.concat(items);
        }
        return items;
    };
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        this.layoutItems(items, true);
        this.reveal(items);
    };
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(items, true);
        this.reveal(items);
        this.layoutItems(previousItems);
    };
    proto.reveal = function(items) {
        this._emitCompleteOnItems('reveal', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    };
    proto.hide = function(items) {
        this._emitCompleteOnItems('hide', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function(item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    };
    proto.revealItemElements = function(elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    };
    proto.hideItemElements = function(elems) {
        var items = this.getItems(elems);
        this.hide(items);
    };
    proto.getItem = function(elem) {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
                return item;
            }
        }
    };
    proto.getItems = function(elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function(elem) {
            var item = this.getItem(elem);
            if (item) {
                items.push(item);
            }
        }, this);
        return items;
    };
    proto.remove = function(elems) {
        var removeItems = this.getItems(elems);
        this._emitCompleteOnItems('remove', removeItems);
        if (!removeItems || !removeItems.length) {
            return;
        }
        removeItems.forEach(function(item) {
            item.remove();
            utils.removeFrom(this.items, item);
        }, this);
    };
    proto.destroy = function() {
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        this.items.forEach(function(item) {
            item.destroy();
        });
        this.unbindResize();
        var id = this.element.outlayerGUID;
        delete instances[id];
        delete this.element.outlayerGUID;
        if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
        }
    };
    Outlayer.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    };
    Outlayer.create = function(namespace, options) {
        var Layout = subclass(Outlayer);
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);
        Layout.namespace = namespace;
        Layout.data = Outlayer.data;
        Layout.Item = subclass(Item);
        utils.htmlInit(Layout, namespace);
        if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
        }
        return Layout;
    };

    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }
        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;
        return SubClass;
    }
    var msUnits = {
        ms: 1,
        s: 1000
    };

    function getMilliseconds(time) {
        if (typeof time == 'number') {
            return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
            return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }
    Outlayer.Item = Item;
    return Outlayer;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/item', ['outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(window.Outlayer);
    }
}(window, function factory(Outlayer) {
    'use strict';

    function Item() {
        Outlayer.Item.apply(this, arguments);
    }
    var proto = Item.prototype = Object.create(Outlayer.Item.prototype);
    var _create = proto._create;
    proto._create = function() {
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
    };
    proto.updateSortData = function() {
        if (this.isIgnored) {
            return;
        }
        this.sortData.id = this.id;
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    };
    var _destroy = proto.destroy;
    proto.destroy = function() {
        _destroy.apply(this, arguments);
        this.css({
            display: ''
        });
    };
    return Item;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('get-size'), require('outlayer'));
    } else {
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(window.getSize, window.Outlayer);
    }
}(window, function factory(getSize, Outlayer) {
    'use strict';

    function LayoutMode(isotope) {
        this.isotope = isotope;
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }
    var proto = LayoutMode.prototype;
    var facadeMethods = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
    facadeMethods.forEach(function(methodName) {
        proto[methodName] = function() {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        };
    });
    proto.needsVerticalResizeLayout = function() {
        var size = getSize(this.isotope.element);
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };
    proto._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments);
    };
    proto.getColumnWidth = function() {
        this.getSegmentSize('column', 'Width');
    };
    proto.getRowHeight = function() {
        this.getSegmentSize('row', 'Height');
    };
    proto.getSegmentSize = function(segment, size) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        this._getMeasurement(segmentName, outerSize);
        if (this[segmentName]) {
            return;
        }
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] || this.isotope.size['inner' + size];
    };
    proto.getFirstItemSize = function() {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    };
    proto.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments);
    };
    proto.getSize = function() {
        this.isotope.getSize();
        this.size = this.isotope.size;
    };
    LayoutMode.modes = {};
    LayoutMode.create = function(namespace, options) {
        function Mode() {
            LayoutMode.apply(this, arguments);
        }
        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;
        if (options) {
            Mode.options = options;
        }
        Mode.prototype.namespace = namespace;
        LayoutMode.modes[namespace] = Mode;
        return Mode;
    };
    return LayoutMode;
}));
/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('outlayer'), require('get-size'));
    } else {
        window.Masonry = factory(window.Outlayer, window.getSize);
    }
}(window, function factory(Outlayer, getSize) {
    var Masonry = Outlayer.create('masonry');
    Masonry.compatOptions.fitWidth = 'isFitWidth';
    var proto = Masonry.prototype;
    proto._resetLayout = function() {
        this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns();
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
        }
        this.maxY = 0;
        this.horizontalColIndex = 0;
    };
    proto.measureColumns = function() {
        this.getContainerWidth();
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth || this.containerWidth;
        }
        var columnWidth = this.columnWidth += this.gutter;
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        var excess = columnWidth - containerWidth % columnWidth;
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    };
    proto.getContainerWidth = function() {
        var isFitWidth = this._getOption('fitWidth');
        var container = isFitWidth ? this.element.parentNode : this.element;
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        var colPosMethod = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition';
        var colPosition = this[colPosMethod](colSpan, item);
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
        }
        return position;
    };
    proto._getTopColPosition = function(colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        var minimumY = Math.min.apply(Math, colGroup);
        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY,
        };
    };
    proto._getTopColGroup = function(colSpan) {
        if (colSpan < 2) {
            return this.colYs;
        }
        var colGroup = [];
        var groupCount = this.cols + 1 - colSpan;
        for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
    };
    proto._getColGroupY = function(col, colSpan) {
        if (colSpan < 2) {
            return this.colYs[col];
        }
        var groupColYs = this.colYs.slice(col, col + colSpan);
        return Math.max.apply(Math, groupColYs);
    };
    proto._getHorizontalColPosition = function(colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        col = isOver ? 0 : col;
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;
        return {
            col: col,
            y: this._getColGroupY(col, colSpan),
        };
    };
    proto._manageStamp = function(stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        var isOriginLeft = this._getOption('originLeft');
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        var isOriginTop = this._getOption('originTop');
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
            stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
    };
    proto._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };
        if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
        }
        return size;
    };
    proto._getContainerFitWidth = function() {
        var unusedCols = 0;
        var i = this.cols;
        while (--i) {
            if (this.colYs[i] !== 0) {
                break;
            }
            unusedCols++;
        }
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };
    proto.needsResizeLayout = function() {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };
    return Masonry;
}));
/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'), require('masonry-layout'));
    } else {
        factory(window.Isotope.LayoutMode, window.Masonry);
    }
}(window, function factory(LayoutMode, Masonry) {
    'use strict';
    var MasonryMode = LayoutMode.create('masonry');
    var proto = MasonryMode.prototype;
    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };
    for (var method in Masonry.prototype) {
        if (!keepModeMethods[method]) {
            proto[method] = Masonry.prototype[method];
        }
    }
    var measureColumns = proto.measureColumns;
    proto.measureColumns = function() {
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
    };
    var _getOption = proto._getOption;
    proto._getOption = function(option) {
        if (option == 'fitWidth') {
            return this.options.isFitWidth !== undefined ? this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply(this.isotope, arguments);
    };
    return MasonryMode;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], factory);
    } else if (typeof exports == 'object') {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var FitRows = LayoutMode.create('fitRows');
    var proto = FitRows.prototype;
    proto._resetLayout = function() {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth');
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var itemWidth = item.size.outerWidth + this.gutter;
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
        }
        var position = {
            x: this.x,
            y: this.y
        };
        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;
        return position;
    };
    proto._getContainerSize = function() {
        return {
            height: this.maxY
        };
    };
    return FitRows;
}));
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], factory);
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(require('../layout-mode'));
    } else {
        factory(window.Isotope.LayoutMode);
    }
}(window, function factory(LayoutMode) {
    'use strict';
    var Vertical = LayoutMode.create('vertical', {
        horizontalAlignment: 0
    });
    var proto = Vertical.prototype;
    proto._resetLayout = function() {
        this.y = 0;
    };
    proto._getItemLayoutPosition = function(item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) * this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {
            x: x,
            y: y
        };
    };
    proto._getContainerSize = function() {
        return {
            height: this.y
        };
    };
    return Vertical;
}));
/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
(function(window, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode', 'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function(Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
            return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
        });
    } else if (typeof module == 'object' && module.exports) {
        module.exports = factory(window, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope-layout/js/item'), require('isotope-layout/js/layout-mode'), require('isotope-layout/js/layout-modes/masonry'), require('isotope-layout/js/layout-modes/fit-rows'), require('isotope-layout/js/layout-modes/vertical'));
    } else {
        window.Isotope = factory(window, window.Outlayer, window.getSize, window.matchesSelector, window.fizzyUIUtils, window.Isotope.Item, window.Isotope.LayoutMode);
    }
}(window, function factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
    var jQuery = window.jQuery;
    var trim = String.prototype.trim ? function(str) {
        return str.trim();
    } : function(str) {
        return str.replace(/^\s+|\s+$/g, '');
    };
    var Isotope = Outlayer.create('isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: true,
        sortAscending: true
    });
    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;
    var proto = Isotope.prototype;
    proto._create = function() {
        this.itemGUID = 0;
        this._sorters = {};
        this._getSorters();
        Outlayer.prototype._create.call(this);
        this.modes = {};
        this.filteredItems = this.items;
        this.sortHistory = ['original-order'];
        for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
        }
    };
    proto.reloadItems = function() {
        this.itemGUID = 0;
        Outlayer.prototype.reloadItems.call(this);
    };
    proto._itemize = function() {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
    };
    proto._initLayoutMode = function(name) {
        var Mode = LayoutMode.modes[name];
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ? utils.extend(Mode.options, initialOpts) : initialOpts;
        this.modes[name] = new Mode(this);
    };
    proto.layout = function() {
        if (!this._isLayoutInited && this._getOption('initLayout')) {
            this.arrange();
            return;
        }
        this._layout();
    };
    proto._layout = function() {
        var isInstant = this._getIsInstant();
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);
        this._isLayoutInited = true;
    };
    proto.arrange = function(opts) {
        this.option(opts);
        this._getIsInstant();
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;
        this._bindArrangeComplete();
        if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered]);
        } else {
            this._hideReveal(filtered);
        }
        this._sort();
        this._layout();
    };
    proto._init = proto.arrange;
    proto._hideReveal = function(filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
    };
    proto._getIsInstant = function() {
        var isLayoutInstant = this._getOption('layoutInstant');
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant : !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    };
    proto._bindArrangeComplete = function() {
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;

        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
                _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
            }
        }
        this.once('layoutComplete', function() {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once('hideComplete', function() {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once('revealComplete', function() {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    };
    proto._filter = function(items) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];
        var test = this._getFilterTest(filter);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) {
                continue;
            }
            var isMatched = test(item);
            if (isMatched) {
                matches.push(item);
            }
            if (isMatched && item.isHidden) {
                hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
                visibleUnmatched.push(item);
            }
        }
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    };
    proto._getFilterTest = function(filter) {
        if (jQuery && this.options.isJQueryFiltering) {
            return function(item) {
                return jQuery(item.element).is(filter);
            };
        }
        if (typeof filter == 'function') {
            return function(item) {
                return filter(item.element);
            };
        }
        return function(item) {
            return matchesSelector(item.element, filter);
        };
    };
    proto.updateSortData = function(elems) {
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
        } else {
            items = this.items;
        }
        this._getSorters();
        this._updateItemsSortData(items);
    };
    proto._getSorters = function() {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
        }
    };
    proto._updateItemsSortData = function(items) {
        var len = items && items.length;
        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
        }
    };
    var mungeSorter = (function() {
        function mungeSorter(sorter) {
            if (typeof sorter != 'string') {
                return sorter;
            }
            var args = trim(sorter).split(' ');
            var query = args[0];
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            var parser = Isotope.sortDataParsers[args[1]];
            sorter = parser ? function(elem) {
                return elem && parser(getValue(elem));
            } : function(elem) {
                return elem && getValue(elem);
            };
            return sorter;
        }

        function getValueGetter(attr, query) {
            if (attr) {
                return function getAttribute(elem) {
                    return elem.getAttribute(attr);
                };
            }
            return function getChildText(elem) {
                var child = elem.querySelector(query);
                return child && child.textContent;
            };
        }
        return mungeSorter;
    })();
    Isotope.sortDataParsers = {
        'parseInt': function(val) {
            return parseInt(val, 10);
        },
        'parseFloat': function(val) {
            return parseFloat(val);
        }
    };
    proto._sort = function() {
        if (!this.options.sortBy) {
            return;
        }
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) {
            this.sortHistory = sortBys.concat(this.sortHistory);
        }
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
    };
    proto._getIsSameSortBy = function(sortBys) {
        for (var i = 0; i < sortBys.length; i++) {
            if (sortBys[i] != this.sortHistory[i]) {
                return false;
            }
        }
        return true;
    };

    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            for (var i = 0; i < sortBys.length; i++) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[sortBy];
                var b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                }
            }
            return 0;
        };
    }
    proto._mode = function() {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
            throw new Error('No layout mode: ' + layoutMode);
        }
        mode.options = this.options[layoutMode];
        return mode;
    };
    proto._resetLayout = function() {
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
    };
    proto._getItemLayoutPosition = function(item) {
        return this._mode()._getItemLayoutPosition(item);
    };
    proto._manageStamp = function(stamp) {
        this._mode()._manageStamp(stamp);
    };
    proto._getContainerSize = function() {
        return this._mode()._getContainerSize();
    };
    proto.needsResizeLayout = function() {
        return this._mode().needsResizeLayout();
    };
    proto.appended = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var filteredItems = this._filterRevealAdded(items);
        this.filteredItems = this.filteredItems.concat(filteredItems);
    };
    proto.prepended = function(elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        this._resetLayout();
        this._manageStamps();
        var filteredItems = this._filterRevealAdded(items);
        this.layoutItems(this.filteredItems);
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
    };
    proto._filterRevealAdded = function(items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        this.reveal(filtered.matches);
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
    };
    proto.insert = function(elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
        }
        var filteredInsertItems = this._filter(items).matches;
        for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
    };
    var _remove = proto.remove;
    proto.remove = function(elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        _remove.call(this, elems);
        var len = removeItems && removeItems.length;
        for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            utils.removeFrom(this.filteredItems, item);
        }
    };
    proto.shuffle = function() {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    };
    proto._noTransition = function(fn, args) {
        var transitionDuration = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var returnValue = fn.apply(this, args);
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    };
    proto.getFilteredItemElements = function() {
        return this.filteredItems.map(function(item) {
            return item.element;
        });
    };
    return Isotope;
}));
/*!
 * simpleParallax - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images, 
 * @date: 13-06-2019 16:24:29, 
 * @version: 5.1.0,
 * @link: https://simpleparallax.com/
 */
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define("simpleParallax", [], factory);
    else if (typeof exports === 'object')
        exports["simpleParallax"] = factory();
    else
        root["simpleParallax"] = factory();
})(window, function() {
    return (function(modules) {
            var installedModules = {};

            function __webpack_require__(moduleId) {
                if (installedModules[moduleId]) {
                    return installedModules[moduleId].exports;
                }
                var module = installedModules[moduleId] = {
                    i: moduleId,
                    l: false,
                    exports: {}
                };
                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                module.l = true;
                return module.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports, name, getter) {
                if (!__webpack_require__.o(exports, name)) {
                    Object.defineProperty(exports, name, {
                        enumerable: true,
                        get: getter
                    });
                }
            };
            __webpack_require__.r = function(exports) {
                if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    Object.defineProperty(exports, Symbol.toStringTag, {
                        value: 'Module'
                    });
                }
                Object.defineProperty(exports, '__esModule', {
                    value: true
                });
            };
            __webpack_require__.t = function(value, mode) {
                if (mode & 1) value = __webpack_require__(value);
                if (mode & 8) return value;
                if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
                var ns = Object.create(null);
                __webpack_require__.r(ns);
                Object.defineProperty(ns, 'default', {
                    enumerable: true,
                    value: value
                });
                if (mode & 2 && typeof value != 'string')
                    for (var key in value) __webpack_require__.d(ns, key, function(key) {
                        return value[key];
                    }.bind(null, key));
                return ns;
            };
            __webpack_require__.n = function(module) {
                var getter = module && module.__esModule ? function getDefault() {
                    return module['default'];
                } : function getModuleExports() {
                    return module;
                };
                __webpack_require__.d(getter, 'a', getter);
                return getter;
            };
            __webpack_require__.o = function(object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = 0);
        })
        ([(function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                if (staticProps) _defineProperties(Constructor, staticProps);
                return Constructor;
            }
            var Viewport = function() {
                function Viewport() {
                    _classCallCheck(this, Viewport);
                    this.positions = {
                        top: 0,
                        bottom: 0,
                        height: 0
                    };
                }
                _createClass(Viewport, [{
                    key: "setViewportTop",
                    value: function setViewportTop() {
                        this.positions.top = window.pageYOffset;
                        return this.positions;
                    }
                }, {
                    key: "setViewportBottom",
                    value: function setViewportBottom() {
                        this.positions.bottom = this.positions.top + this.positions.height;
                        return this.positions;
                    }
                }, {
                    key: "setViewportHeight",
                    value: function setViewportHeight() {
                        this.positions.height = document.documentElement.clientHeight;
                        return this.positions;
                    }
                }, {
                    key: "setViewportAll",
                    value: function setViewportAll() {
                        this.positions.top = window.pageYOffset;
                        this.positions.bottom = this.positions.top + this.positions.height;
                        this.positions.height = document.documentElement.clientHeight;
                        return this.positions;
                    }
                }]);
                return Viewport;
            }();
            var viewport = (Viewport);
            var convertToArray = function convertToArray(elements) {
                if (NodeList.prototype.isPrototypeOf(elements) || HTMLCollection.prototype.isPrototypeOf(elements)) return Array.from(elements);
                if (typeof elements === 'string' || elements instanceof String) return document.querySelectorAll(elements);
                return [elements];
            };
            var helpers_convertToArray = (convertToArray);
            var cssTransform = function cssTransform() {
                var prefixes = 'transform webkitTransform mozTransform oTransform msTransform'.split(' ');
                var transform;
                var i = 0;
                while (transform === undefined) {
                    transform = document.createElement('div').style[prefixes[i]] !== undefined ? prefixes[i] : undefined;
                    i += 1;
                }
                return transform;
            };
            var helpers_cssTransform = (cssTransform());
            var isImageLoaded = function isImageLoaded(image) {
                if (!image) {
                    return false;
                }
                if (!image.complete) {
                    return false;
                }
                if (typeof image.naturalWidth !== 'undefined' && image.naturalWidth === 0) {
                    return false;
                }
                return true;
            };
            var helpers_isImageLoaded = (isImageLoaded);

            function _toConsumableArray(arr) {
                return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
            }

            function _nonIterableSpread() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }

            function _iterableToArray(iter) {
                if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
            }

            function _arrayWithoutHoles(arr) {
                if (Array.isArray(arr)) {
                    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
                        arr2[i] = arr[i];
                    }
                    return arr2;
                }
            }

            function parallax_classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function parallax_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function parallax_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) parallax_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) parallax_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            var parallax_ParallaxInstance = function() {
                function ParallaxInstance(element, options) {
                    parallax_classCallCheck(this, ParallaxInstance);
                    this.element = element;
                    this.elementContainer = element;
                    this.settings = options;
                    this.isVisible = true;
                    this.isInit = false;
                    this.oldTranslateValue = -1;
                    this.init = this.init.bind(this);
                    if (helpers_isImageLoaded(element)) {
                        this.init();
                    } else {
                        this.element.addEventListener('load', this.init);
                    }
                }
                parallax_createClass(ParallaxInstance, [{
                    key: "init",
                    value: function init() {
                        if (this.isInit) return;
                        if (this.element.closest('.simpleParallax')) return;
                        if (this.settings.overflow === false) {
                            this.wrapElement(this.element);
                        }
                        this.setStyle();
                        this.getElementOffset();
                        this.intersectionObserver();
                        this.getTranslateValue();
                        this.animate();
                        this.isInit = true;
                    }
                }, {
                    key: "wrapElement",
                    value: function wrapElement() {
                        var elementToWrap = this.element.closest('picture') || this.element;
                        var wrapper = document.createElement('div');
                        wrapper.classList.add('simpleParallax');
                        wrapper.style.overflow = 'hidden';
                        elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
                        wrapper.appendChild(elementToWrap);
                        this.elementContainer = wrapper;
                    }
                }, {
                    key: "unWrapElement",
                    value: function unWrapElement() {
                        var wrapper = this.elementContainer;
                        wrapper.replaceWith.apply(wrapper, _toConsumableArray(wrapper.childNodes));
                    }
                }, {
                    key: "setStyle",
                    value: function setStyle() {
                        if (this.settings.overflow === false) {
                            this.element.style[helpers_cssTransform] = "scale(".concat(this.settings.scale, ")");
                        }
                        if (this.settings.delay > 0) {
                            this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
                        }
                        this.element.style.willChange = 'transform';
                    }
                }, {
                    key: "unSetStyle",
                    value: function unSetStyle() {
                        this.element.style.willChange = '';
                        this.element.style[helpers_cssTransform] = '';
                        this.element.style.transition = '';
                    }
                }, {
                    key: "getElementOffset",
                    value: function getElementOffset() {
                        var positions = this.elementContainer.getBoundingClientRect();
                        this.elementHeight = positions.height;
                        this.elementTop = positions.top + simpleParallax_viewport.positions.top;
                        this.elementBottom = this.elementHeight + this.elementTop;
                    }
                }, {
                    key: "buildThresholdList",
                    value: function buildThresholdList() {
                        var thresholds = [];
                        for (var i = 1.0; i <= this.elementHeight; i++) {
                            var ratio = i / this.elementHeight;
                            thresholds.push(ratio);
                        }
                        return thresholds;
                    }
                }, {
                    key: "intersectionObserver",
                    value: function intersectionObserver() {
                        var options = {
                            root: null,
                            threshold: this.buildThresholdList()
                        };
                        this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), options);
                        this.observer.observe(this.element);
                    }
                }, {
                    key: "intersectionObserverCallback",
                    value: function intersectionObserverCallback(entries) {
                        for (var i = entries.length - 1; i >= 0; i--) {
                            if (entries[i].isIntersecting) {
                                this.isVisible = true;
                            } else {
                                this.isVisible = false;
                            }
                        }
                    }
                }, {
                    key: "checkIfVisible",
                    value: function checkIfVisible() {
                        return this.elementBottom > simpleParallax_viewport.positions.top && this.elementTop < simpleParallax_viewport.positions.bottom;
                    }
                }, {
                    key: "getRangeMax",
                    value: function getRangeMax() {
                        var elementImageHeight = this.element.clientHeight;
                        this.rangeMax = elementImageHeight * this.settings.scale - elementImageHeight;
                    }
                }, {
                    key: "getTranslateValue",
                    value: function getTranslateValue() {
                        var percentage = ((simpleParallax_viewport.positions.bottom - this.elementTop) / ((simpleParallax_viewport.positions.height + this.elementHeight) / 100)).toFixed(1);
                        percentage = Math.min(100, Math.max(0, percentage));
                        if (this.oldPercentage === percentage) {
                            return false;
                        }
                        if (!this.rangeMax) {
                            this.getRangeMax();
                        }
                        this.translateValue = (percentage / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0);
                        if (this.oldTranslateValue === this.translateValue) {
                            return false;
                        }
                        this.oldPercentage = percentage;
                        this.oldTranslateValue = this.translateValue;
                        return true;
                    }
                }, {
                    key: "animate",
                    value: function animate() {
                        var translateValueY = 0;
                        var translateValueX = 0;
                        var inlineCss;
                        if (this.settings.orientation.includes('left') || this.settings.orientation.includes('right')) {
                            translateValueX = "".concat(this.settings.orientation.includes('left') ? this.translateValue * -1 : this.translateValue, "px");
                        }
                        if (this.settings.orientation.includes('up') || this.settings.orientation.includes('down')) {
                            translateValueY = "".concat(this.settings.orientation.includes('up') ? this.translateValue * -1 : this.translateValue, "px");
                        }
                        if (this.settings.overflow === false) {
                            inlineCss = "translate3d(".concat(translateValueX, ", ").concat(translateValueY, ", 0) scale(").concat(this.settings.scale, ")");
                        } else {
                            inlineCss = "translate3d(".concat(translateValueX, ", ").concat(translateValueY, ", 0)");
                        }
                        this.element.style[helpers_cssTransform] = inlineCss;
                    }
                }]);
                return ParallaxInstance;
            }();
            var parallax = (parallax_ParallaxInstance);
            __webpack_require__.d(__webpack_exports__, "viewport", function() {
                return simpleParallax_viewport;
            });
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return simpleParallax_SimpleParallax;
            });

            function simpleParallax_classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function simpleParallax_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }

            function simpleParallax_createClass(Constructor, protoProps, staticProps) {
                if (protoProps) simpleParallax_defineProperties(Constructor.prototype, protoProps);
                if (staticProps) simpleParallax_defineProperties(Constructor, staticProps);
                return Constructor;
            }
            var simpleParallax_viewport = new viewport();
            var intersectionObserverAvailable = true;
            var isInit = false;
            var instances = [];
            var instancesLength;
            var frameID;
            var resizeID;
            var simpleParallax_SimpleParallax = function() {
                function SimpleParallax(elements, options) {
                    simpleParallax_classCallCheck(this, SimpleParallax);
                    if (!elements) return;
                    this.elements = helpers_convertToArray(elements);
                    this.defaults = {
                        delay: 0.4,
                        orientation: 'up',
                        scale: 1.3,
                        overflow: false,
                        transition: 'cubic-bezier(0,0,0,1)',
                        breakpoint: false
                    };
                    this.settings = Object.assign(this.defaults, options);
                    if (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) {
                        return;
                    }
                    if (!('IntersectionObserver' in window)) intersectionObserverAvailable = false;
                    this.lastPosition = -1;
                    this.resizeIsDone = this.resizeIsDone.bind(this);
                    this.handleResize = this.handleResize.bind(this);
                    this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this);
                    this.init();
                }
                simpleParallax_createClass(SimpleParallax, [{
                    key: "init",
                    value: function init() {
                        simpleParallax_viewport.setViewportAll();
                        for (var i = this.elements.length - 1; i >= 0; i--) {
                            var instance = new parallax(this.elements[i], this.settings);
                            instances.push(instance);
                        }
                        instancesLength = instances.length;
                        if (!isInit) {
                            this.proceedRequestAnimationFrame();
                            window.addEventListener('resize', this.resizeIsDone);
                            isInit = true;
                        }
                    }
                }, {
                    key: "resizeIsDone",
                    value: function resizeIsDone() {
                        clearTimeout(resizeID);
                        resizeID = setTimeout(this.handleResize, 500);
                    }
                }, {
                    key: "handleResize",
                    value: function handleResize() {
                        simpleParallax_viewport.setViewportAll();
                        if (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) {
                            this.destroy();
                        }
                        for (var i = instancesLength - 1; i >= 0; i--) {
                            instances[i].getElementOffset();
                            instances[i].getRangeMax();
                        }
                        this.lastPosition = -1;
                    }
                }, {
                    key: "proceedRequestAnimationFrame",
                    value: function proceedRequestAnimationFrame() {
                        simpleParallax_viewport.setViewportTop();
                        if (this.lastPosition === simpleParallax_viewport.positions.top) {
                            frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                            return;
                        }
                        simpleParallax_viewport.setViewportBottom();
                        for (var i = instancesLength - 1; i >= 0; i--) {
                            this.proceedElement(instances[i]);
                        }
                        frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                        this.lastPosition = simpleParallax_viewport.positions.top;
                    }
                }, {
                    key: "proceedElement",
                    value: function proceedElement(instance) {
                        var isVisible = false;
                        if (!intersectionObserverAvailable) {
                            isVisible = instance.checkIfVisible();
                        } else {
                            isVisible = instance.isVisible;
                        }
                        if (!isVisible) return;
                        if (!instance.getTranslateValue()) {
                            return;
                        }
                        instance.animate();
                    }
                }, {
                    key: "destroy",
                    value: function destroy() {
                        var _this = this;
                        var instancesToDestroy = [];
                        instances = instances.filter(function(instance) {
                            if (_this.elements.includes(instance.element)) {
                                instancesToDestroy.push(instance);
                            } else {
                                return instance;
                            }
                        });
                        for (var i = instancesToDestroy.length - 1; i >= 0; i--) {
                            instancesToDestroy[i].unSetStyle();
                            if (this.settings.overflow === false) {
                                instancesToDestroy[i].unWrapElement();
                            }
                        }
                        instancesLength = instances.length;
                        if (!instancesLength) {
                            window.cancelAnimationFrame(frameID);
                            window.removeEventListener('resize', this.handleResize);
                        }
                    }
                }]);
                return SimpleParallax;
            }();
        })])["default"];
});
! function($) {
    "use strict";
    var Typed = function(el, options) {
        this.el = $(el);
        this.options = $.extend({}, $.fn.typed.defaults, options);
        this.isInput = this.el.is('input');
        this.attr = this.options.attr;
        this.showCursor = this.isInput ? false : this.options.showCursor;
        this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text()
        this.contentType = this.options.contentType;
        this.typeSpeed = this.options.typeSpeed;
        this.startDelay = this.options.startDelay;
        this.backSpeed = this.options.backSpeed;
        this.backDelay = this.options.backDelay;
        this.stringsElement = this.options.stringsElement;
        this.strings = this.options.strings;
        this.strPos = 0;
        this.arrayPos = 0;
        this.stopNum = 0;
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;
        this.stop = false;
        this.cursorChar = this.options.cursorChar;
        this.shuffle = this.options.shuffle;
        this.sequence = [];
        this.build();
    };
    Typed.prototype = {
        constructor: Typed,
        init: function() {
            var self = this;
            self.timeout = setTimeout(function() {
                for (var i = 0; i < self.strings.length; ++i) self.sequence[i] = i;
                if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
                self.typewrite(self.strings[self.sequence[self.arrayPos]], self.strPos);
            }, self.startDelay);
        },
        build: function() {
            var self = this;
            if (this.showCursor === true) {
                this.cursor = $("<span class=\"typed-cursor\">" + this.cursorChar + "</span>");
                this.el.after(this.cursor);
            }
            if (this.stringsElement) {
                self.strings = [];
                this.stringsElement.hide();
                var strings = this.stringsElement.find('p');
                $.each(strings, function(key, value) {
                    self.strings.push($(value).html());
                });
            }
            this.init();
        },
        typewrite: function(curString, curStrPos) {
            if (this.stop === true) {
                return;
            }
            var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
            var self = this;
            self.timeout = setTimeout(function() {
                var charPause = 0;
                var substr = curString.substr(curStrPos);
                if (substr.charAt(0) === '^') {
                    var skip = 1;
                    if (/^\^\d+/.test(substr)) {
                        substr = /\d+/.exec(substr)[0];
                        skip += substr.length;
                        charPause = parseInt(substr);
                    }
                    curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                }
                if (self.contentType === 'html') {
                    var curChar = curString.substr(curStrPos).charAt(0)
                    if (curChar === '<' || curChar === '&') {
                        var tag = '';
                        var endTag = '';
                        if (curChar === '<') {
                            endTag = '>'
                        } else {
                            endTag = ';'
                        }
                        while (curString.substr(curStrPos).charAt(0) !== endTag) {
                            tag += curString.substr(curStrPos).charAt(0);
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += endTag;
                    }
                }
                self.timeout = setTimeout(function() {
                    if (curStrPos === curString.length) {
                        self.options.onStringTyped(self.arrayPos);
                        if (self.arrayPos === self.strings.length - 1) {
                            self.options.callback();
                            self.curLoop++;
                            if (self.loop === false || self.curLoop === self.loopCount)
                                return;
                        }
                        self.timeout = setTimeout(function() {
                            self.backspace(curString, curStrPos);
                        }, self.backDelay);
                    } else {
                        if (curStrPos === 0)
                            self.options.preStringTyped(self.arrayPos);
                        var nextString = curString.substr(0, curStrPos + 1);
                        if (self.attr) {
                            self.el.attr(self.attr, nextString);
                        } else {
                            if (self.isInput) {
                                self.el.val(nextString);
                            } else if (self.contentType === 'html') {
                                self.el.html(nextString);
                            } else {
                                self.el.text(nextString);
                            }
                        }
                        curStrPos++;
                        self.typewrite(curString, curStrPos);
                    }
                }, charPause);
            }, humanize);
        },
        backspace: function(curString, curStrPos) {
            if (this.stop === true) {
                return;
            }
            var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
            var self = this;
            self.timeout = setTimeout(function() {
                if (self.contentType === 'html') {
                    if (curString.substr(curStrPos).charAt(0) === '>') {
                        var tag = '';
                        while (curString.substr(curStrPos).charAt(0) !== '<') {
                            tag -= curString.substr(curStrPos).charAt(0);
                            curStrPos--;
                        }
                        curStrPos--;
                        tag += '<';
                    }
                }
                var nextString = curString.substr(0, curStrPos);
                if (self.attr) {
                    self.el.attr(self.attr, nextString);
                } else {
                    if (self.isInput) {
                        self.el.val(nextString);
                    } else if (self.contentType === 'html') {
                        self.el.html(nextString);
                    } else {
                        self.el.text(nextString);
                    }
                }
                if (curStrPos > self.stopNum) {
                    curStrPos--;
                    self.backspace(curString, curStrPos);
                } else if (curStrPos <= self.stopNum) {
                    self.arrayPos++;
                    if (self.arrayPos === self.strings.length) {
                        self.arrayPos = 0;
                        if (self.shuffle) self.sequence = self.shuffleArray(self.sequence);
                        self.init();
                    } else
                        self.typewrite(self.strings[self.sequence[self.arrayPos]], curStrPos);
                }
            }, humanize);
        },
        shuffleArray: function(array) {
            var tmp, current, top = array.length;
            if (top)
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            return array;
        },
        reset: function() {
            var self = this;
            clearInterval(self.timeout);
            var id = this.el.attr('id');
            this.el.after('<span id="' + id + '"/>')
            this.el.remove();
            if (typeof this.cursor !== 'undefined') {
                this.cursor.remove();
            }
            self.options.resetCallback();
        }
    };
    $.fn.typed = function(option) {
        return this.each(function() {
            var $this = $(this),
                data = $this.data('typed'),
                options = typeof option == 'object' && option;
            if (!data) $this.data('typed', (data = new Typed(this, options)));
            if (typeof option == 'string') data[option]();
        });
    };
    $.fn.typed.defaults = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        shuffle: false,
        backDelay: 500,
        loop: false,
        loopCount: false,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: 'html',
        callback: function() {},
        preStringTyped: function() {},
        onStringTyped: function() {},
        resetCallback: function() {}
    };
}(window.jQuery);
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
        }
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default'];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 11);
})
([, , (function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            callback.call();
        } else if (document.attachEvent) {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'interactive') callback.call();
            });
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };
}), , (function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
        var win;
        if (typeof window !== "undefined") {
            win = window;
        } else if (typeof global !== "undefined") {
            win = global;
        } else if (typeof self !== "undefined") {
            win = self;
        } else {
            win = {};
        }
        module.exports = win;
    }.call(this, __webpack_require__(5)))
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    }
    module.exports = g;
}), , , , , , (function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(12);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _global = __webpack_require__(4);
    var _jarallax = __webpack_require__(13);
    var _jarallax2 = _interopRequireDefault(_jarallax);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    var oldPlugin = _global.window.jarallax;
    _global.window.jarallax = _jarallax2.default;
    _global.window.jarallax.noConflict = function() {
        _global.window.jarallax = oldPlugin;
        return this;
    };
    if (typeof _global.jQuery !== 'undefined') {
        var jQueryPlugin = function jQueryPlugin() {
            var args = arguments || [];
            Array.prototype.unshift.call(args, this);
            var res = _jarallax2.default.apply(_global.window, args);
            return (typeof res === 'undefined' ? 'undefined' : _typeof(res)) !== 'object' ? res : this;
        };
        jQueryPlugin.constructor = _jarallax2.default.constructor;
        var oldJqPlugin = _global.jQuery.fn.jarallax;
        _global.jQuery.fn.jarallax = jQueryPlugin;
        _global.jQuery.fn.jarallax.noConflict = function() {
            _global.jQuery.fn.jarallax = oldJqPlugin;
            return this;
        };
    }
    (0, _liteReady2.default)(function() {
        (0, _jarallax2.default)(document.querySelectorAll('[data-jarallax]'));
    });
}), (function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _slicedToArray = function() {
            function sliceIterator(arr, i) {
                var _arr = [];
                var _n = true;
                var _d = false;
                var _e = undefined;
                try {
                    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                        _arr.push(_s.value);
                        if (i && _arr.length === i) break;
                    }
                } catch (err) {
                    _d = true;
                    _e = err;
                } finally {
                    try {
                        if (!_n && _i["return"]) _i["return"]();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) {
                    return arr;
                } else if (Symbol.iterator in Object(arr)) {
                    return sliceIterator(arr, i);
                } else {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            };
        }();
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _liteReady = __webpack_require__(2);
        var _liteReady2 = _interopRequireDefault(_liteReady);
        var _rafl = __webpack_require__(14);
        var _rafl2 = _interopRequireDefault(_rafl);
        var _global = __webpack_require__(4);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var isIE = navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || navigator.userAgent.indexOf('Edge/') > -1;
        var supportTransform = function() {
            var prefixes = 'transform WebkitTransform MozTransform'.split(' ');
            var div = document.createElement('div');
            for (var i = 0; i < prefixes.length; i++) {
                if (div && div.style[prefixes[i]] !== undefined) {
                    return prefixes[i];
                }
            }
            return false;
        }();
        var wndW = void 0;
        var wndH = void 0;
        var wndY = void 0;
        var forceResizeParallax = false;
        var forceScrollParallax = false;

        function updateWndVars(e) {
            wndW = _global.window.innerWidth || document.documentElement.clientWidth;
            wndH = _global.window.innerHeight || document.documentElement.clientHeight;
            if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' && (e.type === 'load' || e.type === 'dom-loaded')) {
                forceResizeParallax = true;
            }
        }
        updateWndVars();
        _global.window.addEventListener('resize', updateWndVars);
        _global.window.addEventListener('orientationchange', updateWndVars);
        _global.window.addEventListener('load', updateWndVars);
        (0, _liteReady2.default)(function() {
            updateWndVars({
                type: 'dom-loaded'
            });
        });
        var jarallaxList = [];
        var oldPageData = false;

        function updateParallax() {
            if (!jarallaxList.length) {
                return;
            }
            if (_global.window.pageYOffset !== undefined) {
                wndY = _global.window.pageYOffset;
            } else {
                wndY = (document.documentElement || document.body.parentNode || document.body).scrollTop;
            }
            var isResized = forceResizeParallax || !oldPageData || oldPageData.width !== wndW || oldPageData.height !== wndH;
            var isScrolled = forceScrollParallax || isResized || !oldPageData || oldPageData.y !== wndY;
            forceResizeParallax = false;
            forceScrollParallax = false;
            if (isResized || isScrolled) {
                jarallaxList.forEach(function(item) {
                    if (isResized) {
                        item.onResize();
                    }
                    if (isScrolled) {
                        item.onScroll();
                    }
                });
                oldPageData = {
                    width: wndW,
                    height: wndH,
                    y: wndY
                };
            }
            (0, _rafl2.default)(updateParallax);
        }
        var resizeObserver = global.ResizeObserver ? new global.ResizeObserver(function(entry) {
            if (entry && entry.length) {
                (0, _rafl2.default)(function() {
                    entry.forEach(function(item) {
                        if (item.target && item.target.jarallax) {
                            if (!forceResizeParallax) {
                                item.target.jarallax.onResize();
                            }
                            forceScrollParallax = true;
                        }
                    });
                });
            }
        }) : false;
        var instanceID = 0;
        var Jarallax = function() {
            function Jarallax(item, userOptions) {
                _classCallCheck(this, Jarallax);
                var self = this;
                self.instanceID = instanceID++;
                self.$item = item;
                self.defaults = {
                    type: 'scroll',
                    speed: 0.5,
                    imgSrc: null,
                    imgElement: '.jarallax-img',
                    imgSize: 'cover',
                    imgPosition: '50% 50%',
                    imgRepeat: 'no-repeat',
                    keepImg: false,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: false,
                    disableVideo: false,
                    automaticResize: true,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: true,
                    videoPlayOnlyVisible: true,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var deprecatedDataAttribute = self.$item.getAttribute('data-jarallax');
                var oldDataOptions = JSON.parse(deprecatedDataAttribute || '{}');
                if (deprecatedDataAttribute) {
                    console.warn('Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53');
                }
                var dataOptions = self.$item.dataset || {};
                var pureDataOptions = {};
                Object.keys(dataOptions).forEach(function(key) {
                    var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
                    if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
                        pureDataOptions[loweCaseOption] = dataOptions[key];
                    }
                });
                self.options = self.extend({}, self.defaults, oldDataOptions, pureDataOptions, userOptions);
                self.pureOptions = self.extend({}, self.options);
                Object.keys(self.options).forEach(function(key) {
                    if (self.options[key] === 'true') {
                        self.options[key] = true;
                    } else if (self.options[key] === 'false') {
                        self.options[key] = false;
                    }
                });
                self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));
                if (self.options.noAndroid || self.options.noIos) {
                    console.warn('Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices');
                    if (!self.options.disableParallax) {
                        if (self.options.noIos && self.options.noAndroid) {
                            self.options.disableParallax = /iPad|iPhone|iPod|Android/;
                        } else if (self.options.noIos) {
                            self.options.disableParallax = /iPad|iPhone|iPod/;
                        } else if (self.options.noAndroid) {
                            self.options.disableParallax = /Android/;
                        }
                    }
                }
                if (typeof self.options.disableParallax === 'string') {
                    self.options.disableParallax = new RegExp(self.options.disableParallax);
                }
                if (self.options.disableParallax instanceof RegExp) {
                    var disableParallaxRegexp = self.options.disableParallax;
                    self.options.disableParallax = function() {
                        return disableParallaxRegexp.test(navigator.userAgent);
                    };
                }
                if (typeof self.options.disableParallax !== 'function') {
                    self.options.disableParallax = function() {
                        return false;
                    };
                }
                if (typeof self.options.disableVideo === 'string') {
                    self.options.disableVideo = new RegExp(self.options.disableVideo);
                }
                if (self.options.disableVideo instanceof RegExp) {
                    var disableVideoRegexp = self.options.disableVideo;
                    self.options.disableVideo = function() {
                        return disableVideoRegexp.test(navigator.userAgent);
                    };
                }
                if (typeof self.options.disableVideo !== 'function') {
                    self.options.disableVideo = function() {
                        return false;
                    };
                }
                var elementInVP = self.options.elementInViewport;
                if (elementInVP && (typeof elementInVP === 'undefined' ? 'undefined' : _typeof(elementInVP)) === 'object' && typeof elementInVP.length !== 'undefined') {
                    var _elementInVP = elementInVP;
                    var _elementInVP2 = _slicedToArray(_elementInVP, 1);
                    elementInVP = _elementInVP2[0];
                }
                if (!(elementInVP instanceof Element)) {
                    elementInVP = null;
                }
                self.options.elementInViewport = elementInVP;
                self.image = {
                    src: self.options.imgSrc || null,
                    $container: null,
                    useImgTag: false,
                    position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed'
                };
                if (self.initImg() && self.canInitParallax()) {
                    self.init();
                }
            }
            _createClass(Jarallax, [{
                key: 'css',
                value: function css(el, styles) {
                    if (typeof styles === 'string') {
                        return _global.window.getComputedStyle(el).getPropertyValue(styles);
                    }
                    if (styles.transform && supportTransform) {
                        styles[supportTransform] = styles.transform;
                    }
                    Object.keys(styles).forEach(function(key) {
                        el.style[key] = styles[key];
                    });
                    return el;
                }
            }, {
                key: 'extend',
                value: function extend(out) {
                    var _arguments = arguments;
                    out = out || {};
                    Object.keys(arguments).forEach(function(i) {
                        if (!_arguments[i]) {
                            return;
                        }
                        Object.keys(_arguments[i]).forEach(function(key) {
                            out[key] = _arguments[i][key];
                        });
                    });
                    return out;
                }
            }, {
                key: 'getWindowData',
                value: function getWindowData() {
                    return {
                        width: wndW,
                        height: wndH,
                        y: wndY
                    };
                }
            }, {
                key: 'initImg',
                value: function initImg() {
                    var self = this;
                    var $imgElement = self.options.imgElement;
                    if ($imgElement && typeof $imgElement === 'string') {
                        $imgElement = self.$item.querySelector($imgElement);
                    }
                    if (!($imgElement instanceof Element)) {
                        $imgElement = null;
                    }
                    if ($imgElement) {
                        if (self.options.keepImg) {
                            self.image.$item = $imgElement.cloneNode(true);
                        } else {
                            self.image.$item = $imgElement;
                            self.image.$itemParent = $imgElement.parentNode;
                        }
                        self.image.useImgTag = true;
                    }
                    if (self.image.$item) {
                        return true;
                    }
                    if (self.image.src === null) {
                        self.image.src = self.css(self.$item, 'background-image').replace(/^url\(['"]?/g, '').replace(/['"]?\)$/g, '');
                    }
                    return !(!self.image.src || self.image.src === 'none');
                }
            }, {
                key: 'canInitParallax',
                value: function canInitParallax() {
                    return supportTransform && !this.options.disableParallax();
                }
            }, {
                key: 'init',
                value: function init() {
                    var self = this;
                    var containerStyles = {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        pointerEvents: 'none'
                    };
                    var imageStyles = {};
                    if (!self.options.keepImg) {
                        var curStyle = self.$item.getAttribute('style');
                        if (curStyle) {
                            self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                        }
                        if (self.image.useImgTag) {
                            var curImgStyle = self.image.$item.getAttribute('style');
                            if (curImgStyle) {
                                self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
                            }
                        }
                    }
                    if (self.css(self.$item, 'position') === 'static') {
                        self.css(self.$item, {
                            position: 'relative'
                        });
                    }
                    if (self.css(self.$item, 'z-index') === 'auto') {
                        self.css(self.$item, {
                            zIndex: 0
                        });
                    }
                    self.image.$container = document.createElement('div');
                    self.css(self.image.$container, containerStyles);
                    self.css(self.image.$container, {
                        'z-index': self.options.zIndex
                    });
                    if (isIE) {
                        self.css(self.image.$container, {
                            opacity: 0.9999
                        });
                    }
                    self.image.$container.setAttribute('id', 'jarallax-container-' + self.instanceID);
                    self.$item.appendChild(self.image.$container);
                    if (self.image.useImgTag) {
                        imageStyles = self.extend({
                            'object-fit': self.options.imgSize,
                            'object-position': self.options.imgPosition,
                            'font-family': 'object-fit: ' + self.options.imgSize + '; object-position: ' + self.options.imgPosition + ';',
                            'max-width': 'none'
                        }, containerStyles, imageStyles);
                    } else {
                        self.image.$item = document.createElement('div');
                        if (self.image.src) {
                            imageStyles = self.extend({
                                'background-position': self.options.imgPosition,
                                'background-size': self.options.imgSize,
                                'background-repeat': self.options.imgRepeat,
                                'background-image': 'url("' + self.image.src + '")'
                            }, containerStyles, imageStyles);
                        }
                    }
                    if (self.options.type === 'opacity' || self.options.type === 'scale' || self.options.type === 'scale-opacity' || self.options.speed === 1) {
                        self.image.position = 'absolute';
                    }
                    if (self.image.position === 'fixed') {
                        var parentWithTransform = 0;
                        var $itemParents = self.$item;
                        while ($itemParents !== null && $itemParents !== document && parentWithTransform === 0) {
                            var parentTransform = self.css($itemParents, '-webkit-transform') || self.css($itemParents, '-moz-transform') || self.css($itemParents, 'transform');
                            if (parentTransform && parentTransform !== 'none') {
                                parentWithTransform = 1;
                                self.image.position = 'absolute';
                            }
                            $itemParents = $itemParents.parentNode;
                        }
                    }
                    imageStyles.position = self.image.position;
                    self.css(self.image.$item, imageStyles);
                    self.image.$container.appendChild(self.image.$item);
                    self.onResize();
                    self.onScroll(true);
                    if (self.options.automaticResize && resizeObserver) {
                        resizeObserver.observe(self.$item);
                    }
                    if (self.options.onInit) {
                        self.options.onInit.call(self);
                    }
                    if (self.css(self.$item, 'background-image') !== 'none') {
                        self.css(self.$item, {
                            'background-image': 'none'
                        });
                    }
                    self.addToParallaxList();
                }
            }, {
                key: 'addToParallaxList',
                value: function addToParallaxList() {
                    jarallaxList.push(this);
                    if (jarallaxList.length === 1) {
                        updateParallax();
                    }
                }
            }, {
                key: 'removeFromParallaxList',
                value: function removeFromParallaxList() {
                    var self = this;
                    jarallaxList.forEach(function(item, key) {
                        if (item.instanceID === self.instanceID) {
                            jarallaxList.splice(key, 1);
                        }
                    });
                }
            }, {
                key: 'destroy',
                value: function destroy() {
                    var self = this;
                    self.removeFromParallaxList();
                    var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
                    self.$item.removeAttribute('data-jarallax-original-styles');
                    if (!originalStylesTag) {
                        self.$item.removeAttribute('style');
                    } else {
                        self.$item.setAttribute('style', originalStylesTag);
                    }
                    if (self.image.useImgTag) {
                        var originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
                        self.image.$item.removeAttribute('data-jarallax-original-styles');
                        if (!originalStylesImgTag) {
                            self.image.$item.removeAttribute('style');
                        } else {
                            self.image.$item.setAttribute('style', originalStylesTag);
                        }
                        if (self.image.$itemParent) {
                            self.image.$itemParent.appendChild(self.image.$item);
                        }
                    }
                    if (self.$clipStyles) {
                        self.$clipStyles.parentNode.removeChild(self.$clipStyles);
                    }
                    if (self.image.$container) {
                        self.image.$container.parentNode.removeChild(self.image.$container);
                    }
                    if (self.options.onDestroy) {
                        self.options.onDestroy.call(self);
                    }
                    delete self.$item.jarallax;
                }
            }, {
                key: 'clipContainer',
                value: function clipContainer() {
                    if (this.image.position !== 'fixed') {
                        return;
                    }
                    var self = this;
                    var rect = self.image.$container.getBoundingClientRect();
                    var width = rect.width,
                        height = rect.height;
                    if (!self.$clipStyles) {
                        self.$clipStyles = document.createElement('style');
                        self.$clipStyles.setAttribute('type', 'text/css');
                        self.$clipStyles.setAttribute('id', 'jarallax-clip-' + self.instanceID);
                        var head = document.head || document.getElementsByTagName('head')[0];
                        head.appendChild(self.$clipStyles);
                    }
                    var styles = '#jarallax-container-' + self.instanceID + ' {\n           clip: rect(0 ' + width + 'px ' + height + 'px 0);\n           clip: rect(0, ' + width + 'px, ' + height + 'px, 0);\n        }';
                    if (self.$clipStyles.styleSheet) {
                        self.$clipStyles.styleSheet.cssText = styles;
                    } else {
                        self.$clipStyles.innerHTML = styles;
                    }
                }
            }, {
                key: 'coverImage',
                value: function coverImage() {
                    var self = this;
                    var rect = self.image.$container.getBoundingClientRect();
                    var contH = rect.height;
                    var speed = self.options.speed;
                    var isScroll = self.options.type === 'scroll' || self.options.type === 'scroll-opacity';
                    var scrollDist = 0;
                    var resultH = contH;
                    var resultMT = 0;
                    if (isScroll) {
                        if (speed < 0) {
                            scrollDist = speed * Math.max(contH, wndH);
                            if (wndH < contH) {
                                scrollDist -= speed * (contH - wndH);
                            }
                        } else {
                            scrollDist = speed * (contH + wndH);
                        }
                        if (speed > 1) {
                            resultH = Math.abs(scrollDist - wndH);
                        } else if (speed < 0) {
                            resultH = scrollDist / speed + Math.abs(scrollDist);
                        } else {
                            resultH += (wndH - contH) * (1 - speed);
                        }
                        scrollDist /= 2;
                    }
                    self.parallaxScrollDistance = scrollDist;
                    if (isScroll) {
                        resultMT = (wndH - resultH) / 2;
                    } else {
                        resultMT = (contH - resultH) / 2;
                    }
                    self.css(self.image.$item, {
                        height: resultH + 'px',
                        marginTop: resultMT + 'px',
                        left: self.image.position === 'fixed' ? rect.left + 'px' : '0',
                        width: rect.width + 'px'
                    });
                    if (self.options.onCoverImage) {
                        self.options.onCoverImage.call(self);
                    }
                    return {
                        image: {
                            height: resultH,
                            marginTop: resultMT
                        },
                        container: rect
                    };
                }
            }, {
                key: 'isVisible',
                value: function isVisible() {
                    return this.isElementInViewport || false;
                }
            }, {
                key: 'onScroll',
                value: function onScroll(force) {
                    var self = this;
                    var rect = self.$item.getBoundingClientRect();
                    var contT = rect.top;
                    var contH = rect.height;
                    var styles = {};
                    var viewportRect = rect;
                    if (self.options.elementInViewport) {
                        viewportRect = self.options.elementInViewport.getBoundingClientRect();
                    }
                    self.isElementInViewport = viewportRect.bottom >= 0 && viewportRect.right >= 0 && viewportRect.top <= wndH && viewportRect.left <= wndW;
                    if (force ? false : !self.isElementInViewport) {
                        return;
                    }
                    var beforeTop = Math.max(0, contT);
                    var beforeTopEnd = Math.max(0, contH + contT);
                    var afterTop = Math.max(0, -contT);
                    var beforeBottom = Math.max(0, contT + contH - wndH);
                    var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
                    var afterBottom = Math.max(0, -contT + wndH - contH);
                    var fromViewportCenter = 1 - 2 * (wndH - contT) / (wndH + contH);
                    var visiblePercent = 1;
                    if (contH < wndH) {
                        visiblePercent = 1 - (afterTop || beforeBottom) / contH;
                    } else if (beforeTopEnd <= wndH) {
                        visiblePercent = beforeTopEnd / wndH;
                    } else if (beforeBottomEnd <= wndH) {
                        visiblePercent = beforeBottomEnd / wndH;
                    }
                    if (self.options.type === 'opacity' || self.options.type === 'scale-opacity' || self.options.type === 'scroll-opacity') {
                        styles.transform = 'translate3d(0,0,0)';
                        styles.opacity = visiblePercent;
                    }
                    if (self.options.type === 'scale' || self.options.type === 'scale-opacity') {
                        var scale = 1;
                        if (self.options.speed < 0) {
                            scale -= self.options.speed * visiblePercent;
                        } else {
                            scale += self.options.speed * (1 - visiblePercent);
                        }
                        styles.transform = 'scale(' + scale + ') translate3d(0,0,0)';
                    }
                    if (self.options.type === 'scroll' || self.options.type === 'scroll-opacity') {
                        var positionY = self.parallaxScrollDistance * fromViewportCenter;
                        if (self.image.position === 'absolute') {
                            positionY -= contT;
                        }
                        styles.transform = 'translate3d(0,' + positionY + 'px,0)';
                    }
                    self.css(self.image.$item, styles);
                    if (self.options.onScroll) {
                        self.options.onScroll.call(self, {
                            section: rect,
                            beforeTop: beforeTop,
                            beforeTopEnd: beforeTopEnd,
                            afterTop: afterTop,
                            beforeBottom: beforeBottom,
                            beforeBottomEnd: beforeBottomEnd,
                            afterBottom: afterBottom,
                            visiblePercent: visiblePercent,
                            fromViewportCenter: fromViewportCenter
                        });
                    }
                }
            }, {
                key: 'onResize',
                value: function onResize() {
                    this.coverImage();
                    this.clipContainer();
                }
            }]);
            return Jarallax;
        }();
        var plugin = function plugin(items) {
            if ((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? items instanceof HTMLElement : items && (typeof items === 'undefined' ? 'undefined' : _typeof(items)) === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
                items = [items];
            }
            var options = arguments[1];
            var args = Array.prototype.slice.call(arguments, 2);
            var len = items.length;
            var k = 0;
            var ret = void 0;
            for (k; k < len; k++) {
                if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' || typeof options === 'undefined') {
                    if (!items[k].jarallax) {
                        items[k].jarallax = new Jarallax(items[k], options);
                    }
                } else if (items[k].jarallax) {
                    ret = items[k].jarallax[options].apply(items[k].jarallax, args);
                }
                if (typeof ret !== 'undefined') {
                    return ret;
                }
            }
            return items;
        };
        plugin.constructor = Jarallax;
        exports.default = plugin;
    }.call(this, __webpack_require__(5)))
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var global = __webpack_require__(4);
    var request = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || fallback;
    var prev = +new Date();

    function fallback(fn) {
        var curr = +new Date();
        var ms = Math.max(0, 16 - (curr - prev));
        var req = setTimeout(fn, ms);
        return prev = curr, req;
    }
    var cancel = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || clearTimeout;
    if (Function.prototype.bind) {
        request = request.bind(global);
        cancel = cancel.bind(global);
    }
    exports = module.exports = request;
    exports.cancel = cancel;
})]);
/*!
 * Name    : Video Background Extension for Jarallax
 * Version : 1.0.1
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
        }
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default'];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 6);
})
([, , (function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            callback.call();
        } else if (document.attachEvent) {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'interactive') callback.call();
            });
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };
}), , (function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
        var win;
        if (typeof window !== "undefined") {
            win = window;
        } else if (typeof global !== "undefined") {
            win = global;
        } else if (typeof self !== "undefined") {
            win = self;
        } else {
            win = {};
        }
        module.exports = win;
    }.call(this, __webpack_require__(5)))
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    }
    module.exports = g;
}), (function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(7);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var _videoWorker = __webpack_require__(8);
    var _videoWorker2 = _interopRequireDefault(_videoWorker);
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxVideo = __webpack_require__(10);
    var _jarallaxVideo2 = _interopRequireDefault(_jarallaxVideo);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    _global2.default.VideoWorker = _global2.default.VideoWorker || _videoWorker2.default;
    (0, _jarallaxVideo2.default)();
    (0, _liteReady2.default)(function() {
        if (typeof jarallax !== 'undefined') {
            jarallax(document.querySelectorAll('[data-jarallax-video]'));
        }
    });
}), (function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = __webpack_require__(9);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _createClass = function() {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function Deferred() {
        this._done = [];
        this._fail = [];
    }
    Deferred.prototype = {
        execute: function execute(list, args) {
            var i = list.length;
            args = Array.prototype.slice.call(args);
            while (i--) {
                list[i].apply(null, args);
            }
        },
        resolve: function resolve() {
            this.execute(this._done, arguments);
        },
        reject: function reject() {
            this.execute(this._fail, arguments);
        },
        done: function done(callback) {
            this._done.push(callback);
        },
        fail: function fail(callback) {
            this._fail.push(callback);
        }
    };
    var ID = 0;
    var YoutubeAPIadded = 0;
    var VimeoAPIadded = 0;
    var loadingYoutubePlayer = 0;
    var loadingVimeoPlayer = 0;
    var loadingYoutubeDefer = new Deferred();
    var loadingVimeoDefer = new Deferred();
    var VideoWorker = function() {
        function VideoWorker(url, options) {
            _classCallCheck(this, VideoWorker);
            var self = this;
            self.url = url;
            self.options_default = {
                autoplay: false,
                loop: false,
                mute: false,
                volume: 100,
                showContols: true,
                startTime: 0,
                endTime: 0
            };
            self.options = self.extend({}, self.options_default, options);
            self.videoID = self.parseURL(url);
            if (self.videoID) {
                self.ID = ID++;
                self.loadAPI();
                self.init();
            }
        }
        _createClass(VideoWorker, [{
            key: 'extend',
            value: function extend(out) {
                var _arguments = arguments;
                out = out || {};
                Object.keys(arguments).forEach(function(i) {
                    if (!_arguments[i]) {
                        return;
                    }
                    Object.keys(_arguments[i]).forEach(function(key) {
                        out[key] = _arguments[i][key];
                    });
                });
                return out;
            }
        }, {
            key: 'parseURL',
            value: function parseURL(url) {
                function getYoutubeID(ytUrl) {
                    var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
                    var match = ytUrl.match(regExp);
                    return match && match[1].length === 11 ? match[1] : false;
                }

                function getVimeoID(vmUrl) {
                    var regExp = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
                    var match = vmUrl.match(regExp);
                    return match && match[3] ? match[3] : false;
                }

                function getLocalVideos(locUrl) {
                    var videoFormats = locUrl.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/);
                    var result = {};
                    var ready = 0;
                    videoFormats.forEach(function(val) {
                        var match = val.match(/^(mp4|webm|ogv|ogg)\:(.*)/);
                        if (match && match[1] && match[2]) {
                            result[match[1] === 'ogv' ? 'ogg' : match[1]] = match[2];
                            ready = 1;
                        }
                    });
                    return ready ? result : false;
                }
                var Youtube = getYoutubeID(url);
                var Vimeo = getVimeoID(url);
                var Local = getLocalVideos(url);
                if (Youtube) {
                    this.type = 'youtube';
                    return Youtube;
                } else if (Vimeo) {
                    this.type = 'vimeo';
                    return Vimeo;
                } else if (Local) {
                    this.type = 'local';
                    return Local;
                }
                return false;
            }
        }, {
            key: 'isValid',
            value: function isValid() {
                return !!this.videoID;
            }
        }, {
            key: 'on',
            value: function on(name, callback) {
                this.userEventsList = this.userEventsList || [];
                (this.userEventsList[name] || (this.userEventsList[name] = [])).push(callback);
            }
        }, {
            key: 'off',
            value: function off(name, callback) {
                var _this = this;
                if (!this.userEventsList || !this.userEventsList[name]) {
                    return;
                }
                if (!callback) {
                    delete this.userEventsList[name];
                } else {
                    this.userEventsList[name].forEach(function(val, key) {
                        if (val === callback) {
                            _this.userEventsList[name][key] = false;
                        }
                    });
                }
            }
        }, {
            key: 'fire',
            value: function fire(name) {
                var _this2 = this;
                var args = [].slice.call(arguments, 1);
                if (this.userEventsList && typeof this.userEventsList[name] !== 'undefined') {
                    this.userEventsList[name].forEach(function(val) {
                        if (val) {
                            val.apply(_this2, args);
                        }
                    });
                }
            }
        }, {
            key: 'play',
            value: function play(start) {
                var self = this;
                if (!self.player) {
                    return;
                }
                if (self.type === 'youtube' && self.player.playVideo) {
                    if (typeof start !== 'undefined') {
                        self.player.seekTo(start || 0);
                    }
                    if (YT.PlayerState.PLAYING !== self.player.getPlayerState()) {
                        self.player.playVideo();
                    }
                }
                if (self.type === 'vimeo') {
                    if (typeof start !== 'undefined') {
                        self.player.setCurrentTime(start);
                    }
                    self.player.getPaused().then(function(paused) {
                        if (paused) {
                            self.player.play();
                        }
                    });
                }
                if (self.type === 'local') {
                    if (typeof start !== 'undefined') {
                        self.player.currentTime = start;
                    }
                    if (self.player.paused) {
                        self.player.play();
                    }
                }
            }
        }, {
            key: 'pause',
            value: function pause() {
                var self = this;
                if (!self.player) {
                    return;
                }
                if (self.type === 'youtube' && self.player.pauseVideo) {
                    if (YT.PlayerState.PLAYING === self.player.getPlayerState()) {
                        self.player.pauseVideo();
                    }
                }
                if (self.type === 'vimeo') {
                    self.player.getPaused().then(function(paused) {
                        if (!paused) {
                            self.player.pause();
                        }
                    });
                }
                if (self.type === 'local') {
                    if (!self.player.paused) {
                        self.player.pause();
                    }
                }
            }
        }, {
            key: 'mute',
            value: function mute() {
                var self = this;
                if (!self.player) {
                    return;
                }
                if (self.type === 'youtube' && self.player.mute) {
                    self.player.mute();
                }
                if (self.type === 'vimeo' && self.player.setVolume) {
                    self.player.setVolume(0);
                }
                if (self.type === 'local') {
                    self.$video.muted = true;
                }
            }
        }, {
            key: 'unmute',
            value: function unmute() {
                var self = this;
                if (!self.player) {
                    return;
                }
                if (self.type === 'youtube' && self.player.mute) {
                    self.player.unMute();
                }
                if (self.type === 'vimeo' && self.player.setVolume) {
                    self.player.setVolume(self.options.volume);
                }
                if (self.type === 'local') {
                    self.$video.muted = false;
                }
            }
        }, {
            key: 'setVolume',
            value: function setVolume() {
                var volume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var self = this;
                if (!self.player || !volume) {
                    return;
                }
                if (self.type === 'youtube' && self.player.setVolume) {
                    self.player.setVolume(volume);
                }
                if (self.type === 'vimeo' && self.player.setVolume) {
                    self.player.setVolume(volume);
                }
                if (self.type === 'local') {
                    self.$video.volume = volume / 100;
                }
            }
        }, {
            key: 'getVolume',
            value: function getVolume(callback) {
                var self = this;
                if (!self.player) {
                    callback(false);
                    return;
                }
                if (self.type === 'youtube' && self.player.getVolume) {
                    callback(self.player.getVolume());
                }
                if (self.type === 'vimeo' && self.player.getVolume) {
                    self.player.getVolume().then(function(volume) {
                        callback(volume);
                    });
                }
                if (self.type === 'local') {
                    callback(self.$video.volume * 100);
                }
            }
        }, {
            key: 'getMuted',
            value: function getMuted(callback) {
                var self = this;
                if (!self.player) {
                    callback(null);
                    return;
                }
                if (self.type === 'youtube' && self.player.isMuted) {
                    callback(self.player.isMuted());
                }
                if (self.type === 'vimeo' && self.player.getVolume) {
                    self.player.getVolume().then(function(volume) {
                        callback(!!volume);
                    });
                }
                if (self.type === 'local') {
                    callback(self.$video.muted);
                }
            }
        }, {
            key: 'getImageURL',
            value: function getImageURL(callback) {
                var self = this;
                if (self.videoImage) {
                    callback(self.videoImage);
                    return;
                }
                if (self.type === 'youtube') {
                    var availableSizes = ['maxresdefault', 'sddefault', 'hqdefault', '0'];
                    var step = 0;
                    var tempImg = new Image();
                    tempImg.onload = function() {
                        if ((this.naturalWidth || this.width) !== 120 || step === availableSizes.length - 1) {
                            self.videoImage = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
                            callback(self.videoImage);
                        } else {
                            step++;
                            this.src = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
                        }
                    };
                    tempImg.src = 'https://img.youtube.com/vi/' + self.videoID + '/' + availableSizes[step] + '.jpg';
                }
                if (self.type === 'vimeo') {
                    var request = new XMLHttpRequest();
                    request.open('GET', 'https://vimeo.com/api/v2/video/' + self.videoID + '.json', true);
                    request.onreadystatechange = function() {
                        if (this.readyState === 4) {
                            if (this.status >= 200 && this.status < 400) {
                                var response = JSON.parse(this.responseText);
                                self.videoImage = response[0].thumbnail_large;
                                callback(self.videoImage);
                            } else {}
                        }
                    };
                    request.send();
                    request = null;
                }
            }
        }, {
            key: 'getIframe',
            value: function getIframe(callback) {
                this.getVideo(callback);
            }
        }, {
            key: 'getVideo',
            value: function getVideo(callback) {
                var self = this;
                if (self.$video) {
                    callback(self.$video);
                    return;
                }
                self.onAPIready(function() {
                    var hiddenDiv = void 0;
                    if (!self.$video) {
                        hiddenDiv = document.createElement('div');
                        hiddenDiv.style.display = 'none';
                    }
                    if (self.type === 'youtube') {
                        self.playerOptions = {};
                        self.playerOptions.videoId = self.videoID;
                        self.playerOptions.playerVars = {
                            autohide: 1,
                            rel: 0,
                            autoplay: 0,
                            playsinline: 1
                        };
                        if (!self.options.showContols) {
                            self.playerOptions.playerVars.iv_load_policy = 3;
                            self.playerOptions.playerVars.modestbranding = 1;
                            self.playerOptions.playerVars.controls = 0;
                            self.playerOptions.playerVars.showinfo = 0;
                            self.playerOptions.playerVars.disablekb = 1;
                        }
                        var ytStarted = void 0;
                        var ytProgressInterval = void 0;
                        self.playerOptions.events = {
                            onReady: function onReady(e) {
                                if (self.options.mute) {
                                    e.target.mute();
                                } else if (self.options.volume) {
                                    e.target.setVolume(self.options.volume);
                                }
                                if (self.options.autoplay) {
                                    self.play(self.options.startTime);
                                }
                                self.fire('ready', e);
                                if (self.options.loop && !self.options.endTime) {
                                    var secondsOffset = 0.1;
                                    self.options.endTime = self.player.getDuration() - secondsOffset;
                                }
                                setInterval(function() {
                                    self.getVolume(function(volume) {
                                        if (self.options.volume !== volume) {
                                            self.options.volume = volume;
                                            self.fire('volumechange', e);
                                        }
                                    });
                                }, 150);
                            },
                            onStateChange: function onStateChange(e) {
                                if (self.options.loop && e.data === YT.PlayerState.ENDED) {
                                    self.play(self.options.startTime);
                                }
                                if (!ytStarted && e.data === YT.PlayerState.PLAYING) {
                                    ytStarted = 1;
                                    self.fire('started', e);
                                }
                                if (e.data === YT.PlayerState.PLAYING) {
                                    self.fire('play', e);
                                }
                                if (e.data === YT.PlayerState.PAUSED) {
                                    self.fire('pause', e);
                                }
                                if (e.data === YT.PlayerState.ENDED) {
                                    self.fire('ended', e);
                                }
                                if (e.data === YT.PlayerState.PLAYING) {
                                    ytProgressInterval = setInterval(function() {
                                        self.fire('timeupdate', e);
                                        if (self.options.endTime && self.player.getCurrentTime() >= self.options.endTime) {
                                            if (self.options.loop) {
                                                self.play(self.options.startTime);
                                            } else {
                                                self.pause();
                                            }
                                        }
                                    }, 150);
                                } else {
                                    clearInterval(ytProgressInterval);
                                }
                            }
                        };
                        var firstInit = !self.$video;
                        if (firstInit) {
                            var div = document.createElement('div');
                            div.setAttribute('id', self.playerID);
                            hiddenDiv.appendChild(div);
                            document.body.appendChild(hiddenDiv);
                        }
                        self.player = self.player || new window.YT.Player(self.playerID, self.playerOptions);
                        if (firstInit) {
                            self.$video = document.getElementById(self.playerID);
                            self.videoWidth = parseInt(self.$video.getAttribute('width'), 10) || 1280;
                            self.videoHeight = parseInt(self.$video.getAttribute('height'), 10) || 720;
                        }
                    }
                    if (self.type === 'vimeo') {
                        self.playerOptions = {
                            id: self.videoID,
                            autopause: 0,
                            transparent: 0,
                            autoplay: self.options.autoplay ? 1 : 0,
                            loop: self.options.loop ? 1 : 0,
                            muted: self.options.mute ? 1 : 0
                        };
                        if (self.options.volume) {
                            self.playerOptions.volume = self.options.volume;
                        }
                        if (!self.options.showContols) {
                            self.playerOptions.badge = 0;
                            self.playerOptions.byline = 0;
                            self.playerOptions.portrait = 0;
                            self.playerOptions.title = 0;
                        }
                        if (!self.$video) {
                            var playerOptionsString = '';
                            Object.keys(self.playerOptions).forEach(function(key) {
                                if (playerOptionsString !== '') {
                                    playerOptionsString += '&';
                                }
                                playerOptionsString += key + '=' + encodeURIComponent(self.playerOptions[key]);
                            });
                            self.$video = document.createElement('iframe');
                            self.$video.setAttribute('id', self.playerID);
                            self.$video.setAttribute('src', 'https://player.vimeo.com/video/' + self.videoID + '?' + playerOptionsString);
                            self.$video.setAttribute('frameborder', '0');
                            self.$video.setAttribute('mozallowfullscreen', '');
                            self.$video.setAttribute('allowfullscreen', '');
                            hiddenDiv.appendChild(self.$video);
                            document.body.appendChild(hiddenDiv);
                        }
                        self.player = self.player || new Vimeo.Player(self.$video, self.playerOptions);
                        if (self.options.startTime && self.options.autoplay) {
                            self.player.setCurrentTime(self.options.startTime);
                        }
                        self.player.getVideoWidth().then(function(width) {
                            self.videoWidth = width || 1280;
                        });
                        self.player.getVideoHeight().then(function(height) {
                            self.videoHeight = height || 720;
                        });
                        var vmStarted = void 0;
                        self.player.on('timeupdate', function(e) {
                            if (!vmStarted) {
                                self.fire('started', e);
                                vmStarted = 1;
                            }
                            self.fire('timeupdate', e);
                            if (self.options.endTime) {
                                if (self.options.endTime && e.seconds >= self.options.endTime) {
                                    if (self.options.loop) {
                                        self.play(self.options.startTime);
                                    } else {
                                        self.pause();
                                    }
                                }
                            }
                        });
                        self.player.on('play', function(e) {
                            self.fire('play', e);
                            if (self.options.startTime && e.seconds === 0) {
                                self.play(self.options.startTime);
                            }
                        });
                        self.player.on('pause', function(e) {
                            self.fire('pause', e);
                        });
                        self.player.on('ended', function(e) {
                            self.fire('ended', e);
                        });
                        self.player.on('loaded', function(e) {
                            self.fire('ready', e);
                        });
                        self.player.on('volumechange', function(e) {
                            self.fire('volumechange', e);
                        });
                    }

                    function addSourceToLocal(element, src, type) {
                        var source = document.createElement('source');
                        source.src = src;
                        source.type = type;
                        element.appendChild(source);
                    }
                    if (self.type === 'local') {
                        if (!self.$video) {
                            self.$video = document.createElement('video');
                            if (self.options.showContols) {
                                self.$video.controls = true;
                            }
                            if (self.options.mute) {
                                self.$video.muted = true;
                            } else if (self.$video.volume) {
                                self.$video.volume = self.options.volume / 100;
                            }
                            if (self.options.loop) {
                                self.$video.loop = true;
                            }
                            self.$video.setAttribute('playsinline', '');
                            self.$video.setAttribute('webkit-playsinline', '');
                            self.$video.setAttribute('id', self.playerID);
                            hiddenDiv.appendChild(self.$video);
                            document.body.appendChild(hiddenDiv);
                            Object.keys(self.videoID).forEach(function(key) {
                                addSourceToLocal(self.$video, self.videoID[key], 'video/' + key);
                            });
                        }
                        self.player = self.player || self.$video;
                        var locStarted = void 0;
                        self.player.addEventListener('playing', function(e) {
                            if (!locStarted) {
                                self.fire('started', e);
                            }
                            locStarted = 1;
                        });
                        self.player.addEventListener('timeupdate', function(e) {
                            self.fire('timeupdate', e);
                            if (self.options.endTime) {
                                if (self.options.endTime && this.currentTime >= self.options.endTime) {
                                    if (self.options.loop) {
                                        self.play(self.options.startTime);
                                    } else {
                                        self.pause();
                                    }
                                }
                            }
                        });
                        self.player.addEventListener('play', function(e) {
                            self.fire('play', e);
                        });
                        self.player.addEventListener('pause', function(e) {
                            self.fire('pause', e);
                        });
                        self.player.addEventListener('ended', function(e) {
                            self.fire('ended', e);
                        });
                        self.player.addEventListener('loadedmetadata', function() {
                            self.videoWidth = this.videoWidth || 1280;
                            self.videoHeight = this.videoHeight || 720;
                            self.fire('ready');
                            if (self.options.autoplay) {
                                self.play(self.options.startTime);
                            }
                        });
                        self.player.addEventListener('volumechange', function(e) {
                            self.getVolume(function(volume) {
                                self.options.volume = volume;
                            });
                            self.fire('volumechange', e);
                        });
                    }
                    callback(self.$video);
                });
            }
        }, {
            key: 'init',
            value: function init() {
                var self = this;
                self.playerID = 'VideoWorker-' + self.ID;
            }
        }, {
            key: 'loadAPI',
            value: function loadAPI() {
                var self = this;
                if (YoutubeAPIadded && VimeoAPIadded) {
                    return;
                }
                var src = '';
                if (self.type === 'youtube' && !YoutubeAPIadded) {
                    YoutubeAPIadded = 1;
                    src = 'https://www.youtube.com/iframe_api';
                }
                if (self.type === 'vimeo' && !VimeoAPIadded) {
                    VimeoAPIadded = 1;
                    src = 'https://player.vimeo.com/api/player.js';
                }
                if (!src) {
                    return;
                }
                var tag = document.createElement('script');
                var head = document.getElementsByTagName('head')[0];
                tag.src = src;
                head.appendChild(tag);
                head = null;
                tag = null;
            }
        }, {
            key: 'onAPIready',
            value: function onAPIready(callback) {
                var self = this;
                if (self.type === 'youtube') {
                    if ((typeof YT === 'undefined' || YT.loaded === 0) && !loadingYoutubePlayer) {
                        loadingYoutubePlayer = 1;
                        window.onYouTubeIframeAPIReady = function() {
                            window.onYouTubeIframeAPIReady = null;
                            loadingYoutubeDefer.resolve('done');
                            callback();
                        };
                    } else if ((typeof YT === 'undefined' ? 'undefined' : _typeof(YT)) === 'object' && YT.loaded === 1) {
                        callback();
                    } else {
                        loadingYoutubeDefer.done(function() {
                            callback();
                        });
                    }
                }
                if (self.type === 'vimeo') {
                    if (typeof Vimeo === 'undefined' && !loadingVimeoPlayer) {
                        loadingVimeoPlayer = 1;
                        var vimeoInterval = setInterval(function() {
                            if (typeof Vimeo !== 'undefined') {
                                clearInterval(vimeoInterval);
                                loadingVimeoDefer.resolve('done');
                                callback();
                            }
                        }, 20);
                    } else if (typeof Vimeo !== 'undefined') {
                        callback();
                    } else {
                        loadingVimeoDefer.done(function() {
                            callback();
                        });
                    }
                }
                if (self.type === 'local') {
                    callback();
                }
            }
        }]);
        return VideoWorker;
    }();
    exports.default = VideoWorker;
}), (function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = jarallaxVideo;
    var _videoWorker = __webpack_require__(8);
    var _videoWorker2 = _interopRequireDefault(_videoWorker);
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function jarallaxVideo() {
        var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;
        if (typeof jarallax === 'undefined') {
            return;
        }
        var Jarallax = jarallax.constructor;
        var defInit = Jarallax.prototype.init;
        Jarallax.prototype.init = function() {
            var self = this;
            defInit.apply(self);
            if (self.video && !self.options.disableVideo()) {
                self.video.getVideo(function(video) {
                    var $parent = video.parentNode;
                    self.css(video, {
                        position: self.image.position,
                        top: '0px',
                        left: '0px',
                        right: '0px',
                        bottom: '0px',
                        width: '100%',
                        height: '100%',
                        maxWidth: 'none',
                        maxHeight: 'none',
                        margin: 0,
                        zIndex: -1
                    });
                    self.$video = video;
                    self.image.$container.appendChild(video);
                    $parent.parentNode.removeChild($parent);
                });
            }
        };
        var defCoverImage = Jarallax.prototype.coverImage;
        Jarallax.prototype.coverImage = function() {
            var self = this;
            var imageData = defCoverImage.apply(self);
            var node = self.image.$item ? self.image.$item.nodeName : false;
            if (imageData && self.video && node && (node === 'IFRAME' || node === 'VIDEO')) {
                var h = imageData.image.height;
                var w = h * self.image.width / self.image.height;
                var ml = (imageData.container.width - w) / 2;
                var mt = imageData.image.marginTop;
                if (imageData.container.width > w) {
                    w = imageData.container.width;
                    h = w * self.image.height / self.image.width;
                    ml = 0;
                    mt += (imageData.image.height - h) / 2;
                }
                if (node === 'IFRAME') {
                    h += 400;
                    mt -= 200;
                }
                self.css(self.$video, {
                    width: w + 'px',
                    marginLeft: ml + 'px',
                    height: h + 'px',
                    marginTop: mt + 'px'
                });
            }
            return imageData;
        };
        var defInitImg = Jarallax.prototype.initImg;
        Jarallax.prototype.initImg = function() {
            var self = this;
            var defaultResult = defInitImg.apply(self);
            if (!self.options.videoSrc) {
                self.options.videoSrc = self.$item.getAttribute('data-jarallax-video') || null;
            }
            if (self.options.videoSrc) {
                self.defaultInitImgResult = defaultResult;
                return true;
            }
            return defaultResult;
        };
        var defCanInitParallax = Jarallax.prototype.canInitParallax;
        Jarallax.prototype.canInitParallax = function() {
            var self = this;
            var defaultResult = defCanInitParallax.apply(self);
            if (!self.options.videoSrc) {
                return defaultResult;
            }
            var video = new _videoWorker2.default(self.options.videoSrc, {
                autoplay: true,
                loop: self.options.videoLoop,
                showContols: false,
                startTime: self.options.videoStartTime || 0,
                endTime: self.options.videoEndTime || 0,
                mute: self.options.videoVolume ? 0 : 1,
                volume: self.options.videoVolume || 0
            });
            if (video.isValid()) {
                if (!defaultResult) {
                    if (!self.defaultInitImgResult) {
                        video.getImageURL(function(url) {
                            var curStyle = self.$item.getAttribute('style');
                            if (curStyle) {
                                self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                            }
                            self.css(self.$item, {
                                'background-image': 'url("' + url + '")',
                                'background-position': 'center',
                                'background-size': 'cover'
                            });
                        });
                    }
                } else {
                    video.on('ready', function() {
                        if (self.options.videoPlayOnlyVisible) {
                            var oldOnScroll = self.onScroll;
                            self.onScroll = function() {
                                oldOnScroll.apply(self);
                                if (self.options.videoLoop || !self.options.videoLoop && !self.videoEnded) {
                                    if (self.isVisible()) {
                                        video.play();
                                    } else {
                                        video.pause();
                                    }
                                }
                            };
                        } else {
                            video.play();
                        }
                    });
                    video.on('started', function() {
                        self.image.$default_item = self.image.$item;
                        self.image.$item = self.$video;
                        self.image.width = self.video.videoWidth || 1280;
                        self.image.height = self.video.videoHeight || 720;
                        self.coverImage();
                        self.clipContainer();
                        self.onScroll();
                        if (self.image.$default_item) {
                            self.image.$default_item.style.display = 'none';
                        }
                    });
                    video.on('ended', function() {
                        self.videoEnded = true;
                        if (!self.options.videoLoop) {
                            if (self.image.$default_item) {
                                self.image.$item = self.image.$default_item;
                                self.image.$item.style.display = 'block';
                                self.coverImage();
                                self.clipContainer();
                                self.onScroll();
                            }
                        }
                    });
                    self.video = video;
                    if (!self.defaultInitImgResult) {
                        if (video.type !== 'local') {
                            video.getImageURL(function(url) {
                                self.image.src = url;
                                self.init();
                            });
                            return false;
                        }
                        self.image.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
                        return true;
                    }
                }
            }
            return defaultResult;
        };
        var defDestroy = Jarallax.prototype.destroy;
        Jarallax.prototype.destroy = function() {
            var self = this;
            if (self.image.$default_item) {
                self.image.$item = self.image.$default_item;
                delete self.image.$default_item;
            }
            defDestroy.apply(self);
        };
    }
})]);
/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
(function(modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
        }
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function getDefault() {
            return module['default'];
        } : function getModuleExports() {
            return module;
        };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = 0);
})
([(function(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(1);
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var _liteReady = __webpack_require__(2);
    var _liteReady2 = _interopRequireDefault(_liteReady);
    var _jarallaxElement = __webpack_require__(3);
    var _jarallaxElement2 = _interopRequireDefault(_jarallaxElement);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    (0, _jarallaxElement2.default)();
    (0, _liteReady2.default)(function() {
        if (typeof jarallax !== 'undefined') {
            jarallax(document.querySelectorAll('[data-jarallax-element]'));
        }
    });
}), (function(module, exports, __webpack_require__) {
    "use strict";
    module.exports = function(callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            callback.call();
        } else if (document.attachEvent) {
            document.attachEvent('onreadystatechange', function() {
                if (document.readyState === 'interactive') callback.call();
            });
        } else if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };
}), (function(module, exports, __webpack_require__) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = jarallaxElement;
    var _global = __webpack_require__(4);
    var _global2 = _interopRequireDefault(_global);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function jarallaxElement() {
        var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;
        if (typeof jarallax === 'undefined') {
            return;
        }
        var Jarallax = jarallax.constructor;
        ['initImg', 'canInitParallax', 'init', 'destroy', 'clipContainer', 'coverImage', 'isVisible', 'onScroll', 'onResize'].forEach(function(key) {
            var def = Jarallax.prototype[key];
            Jarallax.prototype[key] = function() {
                var self = this;
                var args = arguments || [];
                if (key === 'initImg' && self.$item.getAttribute('data-jarallax-element') !== null) {
                    self.options.type = 'element';
                    self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || self.pureOptions.speed;
                }
                if (self.options.type !== 'element') {
                    return def.apply(self, args);
                }
                self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';
                switch (key) {
                    case 'init':
                        var speedArr = self.pureOptions.speed.split(' ');
                        self.options.speed = self.pureOptions.speed || 0;
                        self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                        self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;
                        var thresholdArr = self.pureOptions.threshold.split(' ');
                        self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                        self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
                        break;
                    case 'onResize':
                        var defTransform = self.css(self.$item, 'transform');
                        self.css(self.$item, {
                            transform: ''
                        });
                        var rect = self.$item.getBoundingClientRect();
                        self.itemData = {
                            width: rect.width,
                            height: rect.height,
                            y: rect.top + self.getWindowData().y,
                            x: rect.left
                        };
                        self.css(self.$item, {
                            transform: defTransform
                        });
                        break;
                    case 'onScroll':
                        var wnd = self.getWindowData();
                        var centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
                        var moveY = centerPercent * self.options.speedY;
                        var moveX = centerPercent * self.options.speedX;
                        var my = moveY;
                        var mx = moveX;
                        if (self.options.thresholdY !== null && moveY > self.options.thresholdY) my = 0;
                        if (self.options.thresholdX !== null && moveX > self.options.thresholdX) mx = 0;
                        self.css(self.$item, {
                            transform: 'translate3d(' + mx + 'px,' + my + 'px,0)'
                        });
                        break;
                    case 'initImg':
                    case 'isVisible':
                    case 'clipContainer':
                    case 'coverImage':
                        return true;
                }
                return def.apply(self, args);
            };
        });
    }
}), (function(module, exports, __webpack_require__) {
    "use strict";
    (function(global) {
        var win;
        if (typeof window !== "undefined") {
            win = window;
        } else if (typeof global !== "undefined") {
            win = global;
        } else if (typeof self !== "undefined") {
            win = self;
        } else {
            win = {};
        }
        module.exports = win;
    }.call(this, __webpack_require__(5)))
}), (function(module, exports, __webpack_require__) {
    "use strict";
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var g;
    g = function() {
        return this;
    }();
    try {
        g = g || Function("return this")() || (1, eval)("this");
    } catch (e) {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
    }
    module.exports = g;
})]);
(function($) {
    $(window).load(function() {
        $.getScript('https://cvio.bslthemes.com/bar/index.js', function() {
            console.log('init bar');
        });
        setTimeout(function() {
            $('.theme_panel .toggle_bts a.sett').addClass('active');
            $('.theme_panel').addClass('active');
        }, 3000);
    });
})(jQuery);
(function($) {
    'use strict';
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload()
        }
    };
    $(window).on("load", function() {
        var preload = $('.preloader');
        preload.find('.spinner').fadeOut(function() {
            preload.fadeOut();
        });
        $('.lines').addClass('finish');
        setTimeout(function() {
            $('.lines').addClass('ready');
        }, 1200);
        if (($('.typed-subtitle').length) && ($('.h-subtitle p').length > 1)) {
            $('.typed-subtitle').each(function() {
                $(this).typed({
                    stringsElement: $(this).prev('.typing-subtitle'),
                    loop: true
                });
            });
        }
        setTimeout(function() {
            $('.h-subtitles').addClass('ready');
            if ($('.typed-bread').length) {
                $('.typed-bread').typed({
                    stringsElement: $('.typing-bread'),
                    showCursor: false
                });
            }
        }, 1000);
        var url_hash = location.hash;
        var sectionElem = $(url_hash);
        if (url_hash.indexOf('#section-') == 0 && sectionElem.length) {
            $('body, html').animate({
                scrollTop: $(url_hash).offset().top - 68
            }, 400);
        }
        if ($('.jarallax').length) {
            $('.jarallax').jarallax();
        }
        if ($('.started-carousel').length) {
            var slider_container = $('.started-carousel .swiper-container');
            var is_autoplaytime = slider_container.data('autoplaytime');
            var is_loop = slider_container.data('loop');
            var started_slider = new Swiper('.started-carousel .swiper-container', {
                init: false,
                loop: is_loop,
                spaceBetween: 0,
                effect: 'fade',
                slidesPerView: 1,
                simulateTouch: false,
                autoplay: {
                    delay: is_autoplaytime,
                    disableOnInteraction: false,
                    waitForTransition: false,
                },
                navigation: {
                    nextEl: '.started .swiper-button-next',
                    prevEl: '.started .swiper-button-prev',
                },
            });
            started_slider.on('slideChange', function() {
                var index = started_slider.realIndex;
                var total = started_slider.slides.length;
                $('.started-carousel .swiper-slide').removeClass('first');
                $('.started-carousel .swiper-slide').each(function(i, slide) {
                    if ((index - 1) >= i) {
                        $(slide).addClass('swiper-clip-active');
                    } else {
                        $(slide).removeClass('swiper-clip-active');
                    }
                });
                $('.started-carousel .swiper-slide').each(function(i, slide) {
                    $(slide).css({
                        'z-index': total - i
                    });
                });
            });
            started_slider.init();
        }
        if ($('.reviews-carousel').length) {
            var rev_slider = $('.reviews-carousel .swiper-container');
            var is_autoplaytime = rev_slider.data('autoplaytime');
            var is_loop = rev_slider.data('loop');
            var is_slidesview = rev_slider.data('slidesview');
            var is_spacebetween = rev_slider.data('spacebetween');
            var rev_slider = new Swiper('.reviews-carousel .swiper-container', {
                loop: is_loop,
                spaceBetween: is_spacebetween,
                slidesPerView: is_slidesview,
                autoplay: {
                    delay: is_autoplaytime
                },
                navigation: {
                    nextEl: '.reviews-carousel .swiper-button-next',
                    prevEl: '.reviews-carousel .swiper-button-prev',
                },
                pagination: {
                    el: '.reviews-carousel .swiper-pagination',
                    type: 'bullets',
                },
                breakpoints: {
                    720: {
                        slidesPerView: 1,
                        spaceBetween: is_spacebetween,
                    },
                    1200: {
                        slidesPerView: is_slidesview,
                        spaceBetween: is_spacebetween,
                    },
                }
            });
            if (is_autoplaytime == 0) {
                rev_slider.autoplay.stop();
            }
        }
        if ($('.team-carousel').length) {
            var team_slider = $('.team-carousel .swiper-container');
            var t_is_autoplaytime = team_slider.data('autoplaytime');
            var t_is_loop = team_slider.data('loop');
            var t_is_slidesview = team_slider.data('slidesview');
            var t_is_spacebetween = team_slider.data('spacebetween');
            var team_slider = new Swiper('.team-carousel .swiper-container', {
                loop: t_is_loop,
                spaceBetween: t_is_spacebetween,
                slidesPerView: t_is_slidesview,
                autoplay: {
                    delay: t_is_autoplaytime
                },
                navigation: {
                    nextEl: '.team-carousel .swiper-button-next',
                    prevEl: '.team-carousel .swiper-button-prev',
                },
                pagination: {
                    el: '.team-carousel .swiper-pagination',
                    type: 'bullets',
                },
                breakpoints: {
                    720: {
                        slidesPerView: 1,
                        spaceBetween: t_is_spacebetween,
                    },
                    1200: {
                        slidesPerView: t_is_slidesview,
                        spaceBetween: t_is_spacebetween,
                    },
                }
            });
            if (t_is_autoplaytime == 0) {
                team_slider.autoplay.stop();
            }
        }
    });
    var width = $(window).width();
    var height = $(window).height();
    $('.section.started').css({
        'height': height
    });
    $('.logged-in .section.started').css({
        'height': height - 32
    });
    if (width < 783) {
        $('.section.started').css({
            'height': height
        });
        $('.logged-in .section.started').css({
            'height': height - 46
        });
    }
    if ($('.section.started').hasClass('background-enabled')) {
        $('body').addClass('background-enabled');
    }
    if ($('#grained_container').length) {
        var grained_options = {
            'animate': true,
            'patternWidth': 400,
            'patternHeight': 400,
            'grainOpacity': 0.15,
            'grainDensity': 3,
            'grainWidth': 1,
            'grainHeight': 1
        }
        grained('#grained_container', grained_options);
    }
    if ((width > 1199) && $('.cursor-follower').length) {
        $(window).on('mousemove', function(e) {
            var x = e.pageX;
            var y = e.pageY;
            var newposX = x;
            var newposY = y;
            $('.cursor-follower').css('transform', 'translate3d(' + newposX + 'px,' + newposY + 'px,0px)');
        });
        $('a, .btn-group').on({
            mouseenter: function(e) {
                cursor_over();
            },
            mouseleave: function(e) {
                cursor_out();
            }
        });
    }

    function cursor_over() {
        $(".cursor-follower-inner").stop().animate({
            width: 86,
            height: 86,
            opacity: 0.1,
            margin: '-43px 0 0 -43px'
        }, 500);
    }

    function cursor_out() {
        $(".cursor-follower-inner").stop().animate({
            width: 26,
            height: 26,
            opacity: 0.4,
            margin: '-13px 0 0 -13px'
        }, 500);
    }
    $('.hover-masks a').each(function() {
        var mask_val = $(this).html();
        $(this).wrapInner('<span class="mask-lnk"></span>');
        $(this).append('<span class="mask-lnk mask-lnk-hover">' + mask_val + '</span>');
    });
    $('.hover-animated .circle').on({
        mouseenter: function(e) {
            if ($(this).find(".ink").length === 0) {
                $(this).prepend("<span class='ink'></span>");
            }
            var ink = $(this).find(".ink");
            ink.removeClass("animate");
            if (!ink.height() && !ink.width()) {
                var d = Math.max($(this).outerWidth(), $(this).outerHeight());
                ink.css({
                    height: d,
                    width: d
                });
            }
            var x = e.pageX - $(this).offset().left - ink.width() / 2;
            var y = e.pageY - $(this).offset().top - ink.height() / 2;
            ink.css({
                top: y + 'px',
                left: x + 'px'
            }).addClass("ink-animate");
            $('.cursor-follower').addClass('hide');
        },
        mouseleave: function(e) {
            var ink = $(this).find(".ink");
            var x = e.pageX - $(this).offset().left - ink.width() / 2;
            var y = e.pageY - $(this).offset().top - ink.height() / 2;
            ink.css({
                top: y + 'px',
                left: x + 'px'
            }).removeClass("ink-animate");
            $('.cursor-follower').removeClass('hide');
        }
    });
    $('header .top-menu, .typed-bread, .popup-box .bts, .animate-to-page').on('click', 'a', function() {
        var link = $(this).attr('href');
        if (link.indexOf('#section-') == 0) {
            if (!$('body').hasClass('home')) {
                location.href = '/' + link;
            }
            $('body, html').animate({
                scrollTop: $(link).offset().top - 68
            }, 400);
            if ($('header').hasClass('active')) {
                $('.menu-btn').trigger('click');
            }
        } else {
            $('.lines').removeClass('finish');
            $('.lines').removeClass('ready');
            $('.lines').addClass('no-lines');
            setTimeout(function() {
                location.href = "" + link;
            }, 2500);
        }
        return false;
    });
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= $('.section.started').height()) {
            $('body').removeClass('background-enabled');
        } else {
            if ($('.section.started').hasClass('background-enabled')) {
                $('body').addClass('background-enabled');
            }
        }
        if (($(this).scrollTop() >= 100) && ($('.section').length > 1)) {
            $('.header').addClass('fixed');
            $('.footer').addClass('fixed');
            $('body').removeClass('background-enabled');
            $('.mouse_btn').fadeOut();
        }
        if (($(this).scrollTop() <= 100) && ($('.section').length > 1)) {
            $('.header').removeClass('fixed');
            $('.footer').removeClass('fixed');
            $('.mouse_btn').fadeIn();
        }
        if (($(this).scrollTop() <= 100) && ($('.section').length > 1) && ($('.section.started').hasClass('background-enabled'))) {
            $('body').addClass('background-enabled');
        }
    });
    $('header').on('click', '.menu-btn', function() {
        if ($('header').hasClass('active')) {
            $('header').removeClass('active');
            $('.footer .soc').fadeIn();
            $('body').addClass('loaded');
            if ($('.video-bg').length) {
                $('body').addClass('background-enabled');
            }
        } else {
            $('header').addClass('active');
            $('.footer .soc').hide();
            $('body').removeClass('loaded');
            $('body').removeClass('background-enabled');
        }
        return false;
    });
    $('.top-menu li.menu-item-has-children').each(function() {
        $(this).append('<span class="open-lnk"></span>');
    });
    $('.top-menu').on('click', '.open-lnk', function() {
        if ($(this).closest('li').hasClass('menu-item-has-children')) {
            if ($(this).closest('li').hasClass('active')) {
                $(this).closest('li').removeClass('active');
                $(this).closest('li').find('> ul').slideUp();
            } else {
                $(this).closest('li').addClass('active');
                $(this).closest('li').find('> ul').slideDown();
            }
        }
    });
    $('.section.about').on('click touchstart', '.btn', function() {
        location.href = $(this).attr('href');
    });
    $('.section').on('click', '.mouse_btn', function() {
        $('body, html').animate({
            scrollTop: height - 150
        }, 800);
    });
    if ($('.section').length > 1) {
        $('.mouse_btn').show();
    }
    var $container = $('.portfolio-items');
    $container.imagesLoaded(function() {
        $container.isotope({
            percentPosition: true,
            itemSelector: '.box-item'
        });
        if ($('.portfolio-items.portfolio-new').length) {
            var s_parallax = document.getElementsByClassName('wp-post-image');
            new simpleParallax(s_parallax);
        }
    });
    $('.filters').on('click', '.btn-group', function() {
        var filterValue = $(this).find('input').val();
        $container.isotope({
            filter: filterValue
        });
        $('.filters .btn-group label').removeClass('glitch-effect');
        $(this).find('label').addClass('glitch-effect');
    });
    if (/\.(?:jpg|jpeg|gif|png)$/i.test($('.gallery-item:first a').attr('href'))) {
        $('.gallery-item a').magnificPopup({
            gallery: {
                enabled: true
            },
            type: 'image',
            closeBtnInside: false,
            mainClass: 'mfp-fade'
        });
    }
    $('.has-popup-media').magnificPopup({
        type: 'inline',
        overflowY: 'auto',
        closeBtnInside: true,
        mainClass: 'mfp-fade'
    });
    $('.has-popup-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
            verticalFit: true
        }
    });
    $('.has-popup-video').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        iframe: {
            patterns: {
                youtube_short: {
                    index: 'youtu.be/',
                    id: 'youtu.be/',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        },
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: 'mfp-fade',
        callbacks: {
            markupParse: function(template, values, item) {
                template.find('iframe').attr('allow', 'autoplay');
            }
        }
    });
    $('.has-popup-music').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        mainClass: 'mfp-fade'
    });
    $('.has-popup-gallery').on('click', function() {
        var gallery = $(this).attr('href');
        $(gallery).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            mainClass: 'mfp-fade',
            removalDelay: 160,
            fixedContentPos: false,
            gallery: {
                enabled: true
            }
        }).magnificPopup('open');
        return false;
    });
    if ($('.jarallax-video').length) {
        $('body').addClass('background-enabled');
        $('.jarallax-video').jarallax();
    }
    if ($('.section').length && $('.top-menu li a').length) {
        $(window).on('scroll', function() {
            var scrollPos = $(window).scrollTop();
            $('.top-menu ul li a').each(function() {
                if ($(this).attr('href').indexOf('#section-') == 0) {
                    var currLink = $(this);
                    var refElement = $(currLink.attr("href"));
                    if (refElement.length) {
                        if (refElement.offset().top <= scrollPos + 70) {
                            $('.top-menu ul li').removeClass("current-menu-item");
                            currLink.closest('li').addClass("current-menu-item");
                        }
                    }
                    if (scrollPos == 0) {
                        $('.top-menu ul li').removeClass("current-menu-item");
                    }
                }
            });
        });
    }
    $('.single-post-text').each(function() {
        $(this).find('iframe').wrap('<div class="embed-container"></div>');
    });

    function skills() {
        var skills_dotted = $('.skills.dotted .progress');
        var skills_dotted_w = skills_dotted.width();
        if (skills_dotted.length) {
            skills_dotted.append('<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
            skills_dotted.find('.percentage').append('<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>');
            skills_dotted.find('.percentage .da').css({
                'width': skills_dotted_w
            });
        }
    }
    setTimeout(skills, 1000);
    var skills_circles = $('.skills.circles .progress');
    if (skills_circles.length) {
        skills_circles.append('<div class="slice"><div class="bar"></div><div class="fill"></div></div>');
    }
    $(window).resize(function() {
        var width = $(window).width();
        var height = $(window).height();
        $('.section.started').css({
            'height': height
        });
        $('.logged-in .section.started').css({
            'height': height - 32
        });
        if (width < 783) {
            $('.section.started').css({
                'height': height
            });
            $('.logged-in .section.started').css({
                'height': height - 46
            });
        }
        var skills_dotted = $('.skills-list.dotted .progress');
        var skills_dotted_w = skills_dotted.width();
        if (skills_dotted.length) {
            skills_dotted.find('.percentage .da').css({
                'width': skills_dotted_w + 1
            });
        }
    });
    $('#cform').validate({
        rules: {
            name: {
                required: true
            },
            message: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        },
        success: 'valid',
        submitHandler: function() {
            $.ajax({
                url: 'mailer/feedback.php',
                type: 'post',
                dataType: 'json',
                data: 'name=' + $("#cform").find('input[name="name"]').val() + '&email=' + $("#cform").find('input[name="email"]').val() + '&message=' + $("#cform").find('textarea[name="message"]').val(),
                beforeSend: function() {},
                complete: function() {},
                success: function(data) {
                    $('#cform').fadeOut();
                    $('.alert-success').delay(1000).fadeIn();
                }
            });
        }
    });
    if ($('#map').length) {
        initMap();
    }
})(jQuery);

function initMap() {
    var myLatlng = new google.maps.LatLng(48.859003, 2.345275);
    var styles = [{
        "stylers": [{
            "hue": "#ff1a00"
        }, {
            "invert_lightness": true
        }, {
            "saturation": -100
        }, {
            "lightness": 33
        }, {
            "gamma": 0.5
        }]
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#2D333C"
        }]
    }, {
        "elementType": "labels",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.land_parcel",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "administrative.neighborhood",
        "stylers": [{
            "visibility": "off"
        }]
    }, ]
    var mapOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeControl: false,
        disableDefaultUI: true,
        zoomControl: false,
        scrollwheel: false,
        styles: styles
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
};
! function(d, l) {
    "use strict";
    var e = !1,
        o = !1;
    if (l.querySelector)
        if (d.addEventListener) e = !0;
    if (d.wp = d.wp || {}, !d.wp.receiveEmbedMessage)
        if (d.wp.receiveEmbedMessage = function(e) {
                var t = e.data;
                if (t)
                    if (t.secret || t.message || t.value)
                        if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                            var r, a, i, s, n, o = l.querySelectorAll('iframe[data-secret="' + t.secret + '"]'),
                                c = l.querySelectorAll('blockquote[data-secret="' + t.secret + '"]');
                            for (r = 0; r < c.length; r++) c[r].style.display = "none";
                            for (r = 0; r < o.length; r++)
                                if (a = o[r], e.source === a.contentWindow) {
                                    if (a.removeAttribute("style"), "height" === t.message) {
                                        if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                        else if (~~i < 200) i = 200;
                                        a.height = i
                                    }
                                    if ("link" === t.message)
                                        if (s = l.createElement("a"), n = l.createElement("a"), s.href = a.getAttribute("src"), n.href = t.value, n.host === s.host)
                                            if (l.activeElement === a) d.top.location.href = t.value
                                }
                        }
            }, e) d.addEventListener("message", d.wp.receiveEmbedMessage, !1), l.addEventListener("DOMContentLoaded", t, !1), d.addEventListener("load", t, !1);

    function t() {
        if (!o) {
            o = !0;
            var e, t, r, a, i = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                s = !!navigator.userAgent.match(/Trident.*rv:11\./),
                n = l.querySelectorAll("iframe.wp-embedded-content");
            for (t = 0; t < n.length; t++) {
                if (!(r = n[t]).getAttribute("data-secret")) a = Math.random().toString(36).substr(2, 10), r.src += "#?secret=" + a, r.setAttribute("data-secret", a);
                if (i || s)(e = r.cloneNode(!0)).removeAttribute("security"), r.parentNode.replaceChild(e, r)
            }
        }
    }
}(window, document);