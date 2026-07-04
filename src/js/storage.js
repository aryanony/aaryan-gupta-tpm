// storage.js — LocalStorage wrapper
var Storage = {
  get: function(key) { try { return JSON.parse(localStorage.getItem(key)); } catch(e) { return null; } },
  set: function(key, val) { try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {} },
  remove: function(key) { localStorage.removeItem(key); }
};
