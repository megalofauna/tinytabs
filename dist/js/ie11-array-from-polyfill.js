"use strict";Array.from||(Array.from=function(){var r=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===r.call(t)},n=Math.pow(2,53)-1,e=function(r){var t=function(r){var t=Number(r);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(r);return Math.min(Math.max(t,0),n)};return function(r){var n=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var o,i=arguments.length>1?arguments[1]:void 0;if(void 0!==i){if(!t(i))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(o=arguments[2])}for(var a,u=e(n.length),f=t(this)?Object(new this(u)):new Array(u),c=0;c<u;)a=n[c],f[c]=i?void 0===o?i(a,c):i.call(o,a,c):a,c+=1;return f.length=u,f}}());