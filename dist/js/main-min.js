"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function TinyTabs(t) {
  var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var r = document.querySelector(t);var a = { tabList: r.querySelector("ul"), tabTrigger: "[data-tab-trigger]", tabContent: "[data-tab-content]", tabTriggerActiveClass: "is-active", equalizeTabHeight: !1 };var i = _extends({}, a, e),
      o = Array.from(r.querySelectorAll(i.tabTrigger)),
      s = Array.from(r.querySelectorAll(i.tabContent));!0 === i.equalizeTabHeight && function () {
    var t = 0;s.forEach(function (e) {
      e.removeAttribute("hidden");var r = e.offsetHeight;console.log(t), r > t && (t = r), e.style.height = t + "px", e.setAttribute("hidden", "");
    });
  }(), s[0].removeAttribute("hidden"), s[0].removeAttribute("aria-hidden"), o[0].setAttribute("aria-selected", "true"), i.tabList.setAttribute("aria-role", "tablist"), o.forEach(function (t) {
    t.setAttribute("role", "tab"), t.parentNode.setAttribute("aria-role", "presentation");
  }), s.forEach(function (t) {
    t.setAttribute("aria-role", "tabpanel"), t.setAttribute("aria-hidden", "");
  }), o.forEach(function (t) {
    t.addEventListener("click", function (e) {
      e.preventDefault();var a = t.getAttribute("href"),
          b = r.querySelector(a);o.forEach(function (t) {
        t.classList.remove(i.tabTriggerActiveClass), t.removeAttribute("aria-selected");
      }), s.forEach(function (t) {
        t.setAttribute("hidden", ""), t.setAttribute("aria-hidden", "true");
      }), t.classList.add(i.tabTriggerActiveClass), t.setAttribute("aria-selected", "true"), b.removeAttribute("hidden"), b.removeAttribute("aria-hidden");
    });
  });var b = document.createElement("div");b.id = "end-of-tab", b.setAttribute("role", "separator"), b.setAttribute("aria-labelledby", "end-of-tab"), b.setAttribute("aria-label", "End of"), r.appendChild(b);
}