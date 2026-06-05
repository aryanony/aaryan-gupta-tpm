// cookies.js — Cookie utilities
var Cookies = {
  get: function(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  },
  set: function(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days || 365) * 86400000);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + d.toUTCString() + ';path=/';
  }
};
