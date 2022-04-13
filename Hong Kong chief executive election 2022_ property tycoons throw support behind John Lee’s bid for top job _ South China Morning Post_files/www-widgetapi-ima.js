(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function r(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ja});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=ma;
function u(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.U=b.prototype}
function sa(){this.o=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.u=0;this.I=this.j=null}
function ta(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
sa.prototype.A=function(a){this.i=a};
function ua(a,b){a.j={ab:b,gb:!0};a.h=a.u||a.m}
sa.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
sa.prototype.s=function(a){this.h=a};
function va(a,b,c){a.u=b;void 0!=c&&(a.m=c)}
function wa(a,b){a.h=b;a.u=0}
function xa(a){a.u=0;var b=a.j.ab;a.j=null;return b}
function ya(a){a.I=[a.j];a.u=0;a.m=0}
function za(a){var b=a.I.splice(0)[0];(b=a.j=a.j||b)?b.gb?a.h=a.u||a.m:void 0!=b.s&&a.m<b.s?(a.h=b.s,a.j=null):a.h=a.m:a.h=0}
function Aa(a){this.h=new sa;this.i=a}
function Ba(a,b){ta(a.h);var c=a.h.l;if(c)return Ca(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Da(a)}
function Ca(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.o=!1,e;var f=e.value}catch(g){return a.h.l=null,ua(a.h,g),Da(a)}a.h.l=null;d.call(a.h,f);return Da(a)}
function Da(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.o=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ua(a.h,c)}a.h.o=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.gb)throw b.ab;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){ta(a.h);a.h.l?b=Ca(a,a.h.l.next,b,a.h.A):(a.h.A(b),b=Da(a));return b};
this.throw=function(b){ta(a.h);a.h.l?b=Ca(a,a.h.l["throw"],b,a.h.A):(ua(a.h,b),b=Da(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Fa(new Ea(new Aa(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.o=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.m)}};
b.prototype.ba=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.oa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.V(g):this.u(g)}};
b.prototype.V=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.pa(h,g):this.u(g)};
b.prototype.m=function(g){this.A(2,g)};
b.prototype.u=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.na();this.I()};
b.prototype.na=function(){var g=this;e(function(){if(g.L()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.o)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.I=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.oa=function(g){var h=this.l();g.za(h.resolve,h.reject)};
b.prototype.pa=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(v,p){return"function"==typeof v?function(z){try{l(v(z))}catch(y){n(y)}}:p}
var l,n,q=new b(function(v,p){l=v;n=p});
this.za(k(g,l),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.za=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),n=l.next();!n.done;n=l.next())d(n.value).za(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,n){function q(z){return function(y){v[z]=y;p--;0==p&&l(v)}}
var v=[],p=0;do v.push(void 0),p++,d(k.value).za(q(v.length-1),n),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ia(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return fa(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&ia(h.data_,l))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:n,index:h,entry:q}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ka(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ka(this,function(b,c){return[b,c]})}});
r("Object.setPrototypeOf",function(a){return a||ra});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ka(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ka(this,function(b,c){return c})}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function La(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=La(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function C(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ra(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Sa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Sa=Qa:Sa=Ra;return Sa.apply(null,arguments)}
function D(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.U=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.tc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ta(a){return a}
;function Ua(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ua);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.vb=b)}
E(Ua,Error);Ua.prototype.name="CustomError";var Va;function Xa(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");Ua.call(this,c+a[d])}
E(Xa,Ua);Xa.prototype.name="AssertionError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},bb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},cb=Array.prototype.some?function(a,b){Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c&&!(e in d&&b.call(void 0,d[e],e,a));e++);
};
function db(a,b){b=ab(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function eb(a){return Array.prototype.concat.apply([],arguments)}
function fb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function gb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function hb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ib(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function wb(a,b){this.h=a===xb&&b||"";this.i=yb}
wb.prototype.la=!0;wb.prototype.ha=function(){return this.h};
function zb(a){return new wb(xb,a)}
var yb={},xb={};zb("");var Ab=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Bb=/&/g,Cb=/</g,Db=/>/g,Eb=/"/g,Fb=/'/g,Gb=/\x00/g,Hb=/[\x00&<>"']/;function Ib(a,b){this.h=b===Jb?a:""}
Ib.prototype.la=!0;Ib.prototype.ha=function(){return this.h.toString()};
Ib.prototype.toString=function(){return this.h.toString()};
function Kb(a){if(a instanceof Ib&&a.constructor===Ib)return a.h;La(a);return"type_error:SafeUrl"}
var Lb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Mb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Nb(a){if(a instanceof Ib)return a;a="object"==typeof a&&a.la?a.ha():String(a);Mb.test(a)?a=new Ib(a,Jb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=a.match(Lb)?new Ib(a,Jb):null);return a}
var Jb={},Ob=new Ib("about:invalid#zClosurez",Jb);var Pb={};function Qb(a,b){this.h=b===Pb?a:"";this.la=!0}
Qb.prototype.ha=function(){return this.h};
Qb.prototype.toString=function(){return this.h.toString()};
var Rb=new Qb("",Pb);
function Sb(a){if(a instanceof Ib)return'url("'+Kb(a).replace(/</g,"%3c").replace(/[\\"]/g,"\\$&")+'")';if(a instanceof wb)a=a instanceof wb&&a.constructor===wb&&a.i===yb?a.h:"type_error:Const";else{a=String(a);var b=a.replace(Tb,"$1").replace(Tb,"$1").replace(Ub,"url");if(Vb.test(b)){if(b=!Wb.test(a)){for(var c=b=!0,d=0;d<a.length;d++){var e=a.charAt(d);"'"==e&&c?b=!b:'"'==e&&b&&(c=!c)}b=b&&c&&ac(a)}a=b?bc(a):"zClosurez"}else a="zClosurez"}if(/[{;}]/.test(a))throw new Xa("Value does not allow [{;}], got: %s.",[a]);
return a}
function ac(a){for(var b=!0,c=/^[-_a-zA-Z0-9]$/,d=0;d<a.length;d++){var e=a.charAt(d);if("]"==e){if(b)return!1;b=!0}else if("["==e){if(!b)return!1;b=!1}else if(!b&&!c.test(e))return!1}return b}
var Vb=RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),Ub=RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))","g"),Tb=RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)","g"),Wb=/\/\*/;function bc(a){return a.replace(Ub,function(b,c,d,e){var f="";d=d.replace(/^(['"])(.*)\1$/,function(g,h,k){f=h;return k});
b=(Nb(d)||Ob).ha();return c+f+b+f+e})}
;var cc={};function dc(a,b){this.h=b===cc?a:"";this.la=!0}
dc.prototype.ha=function(){return this.h};
dc.prototype.toString=function(){return this.h.toString()};function ec(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function H(a){return-1!=ec().indexOf(a)}
;function fc(){return(H("Chrome")||H("CriOS"))&&!H("Edge")||H("Silk")}
;var gc={};function hc(a){this.h=gc===gc?a:"";this.la=!0}
hc.prototype.ha=function(){return this.h.toString()};
hc.prototype.toString=function(){return this.h.toString()};var ic=/^[\w+/_-]+[=]{0,2}$/;function jc(){var a=A.document;return a.querySelector?(a=a.querySelector('style[nonce],link[rel="stylesheet"][nonce]'))&&(a=a.nonce||a.getAttribute("nonce"))&&ic.test(a)?a:"":""}
;function kc(){return"cssText".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()})}
function lc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var mc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nc(a){return a?decodeURI(a):a}
function oc(a){return nc(a.match(mc)[3]||null)}
function pc(a){var b=a.match(mc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function qc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)qc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function rc(a){var b=[],c;for(c in a)qc(c,a[c],b);return b.join("&")}
var sc=/#|$/;function tc(a,b){var c=a.search(sc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function vc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;function wc(a){wc[" "](a);return a}
wc[" "]=function(){};var xc=H("Opera"),yc=H("Trident")||H("MSIE"),zc=H("Edge"),Ac=zc||yc,Bc=H("Gecko")&&!(-1!=ec().toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Cc=-1!=ec().toLowerCase().indexOf("webkit")&&!H("Edge");function Gc(){var a=A.document;return a?a.documentMode:void 0}
var Hc;a:{var Ic="",Jc=function(){var a=ec();if(Bc)return/rv:([^\);]+)(\)|;)/.exec(a);if(zc)return/Edge\/([\d\.]+)/.exec(a);if(yc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Cc)return/WebKit\/(\S+)/.exec(a);if(xc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Jc&&(Ic=Jc?Jc[1]:"");if(yc){var Kc=Gc();if(null!=Kc&&Kc>parseFloat(Ic)){Hc=String(Kc);break a}}Hc=Ic}var Lc=Hc,Mc;if(A.document&&yc){var Nc=Gc();Mc=Nc?Nc:parseInt(Lc,10)||void 0}else Mc=void 0;var Oc=Mc;var Pc=vc()||H("iPod"),Qc=H("iPad");!H("Android")||fc();fc();var Rc=H("Safari")&&!(fc()||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||H("Firefox")||H("FxiOS")||H("Silk")||H("Android"))&&!(vc()||H("iPad")||H("iPod"));var Sc={},Tc=null;
function Uc(a,b){Ma(a);void 0===b&&(b=0);if(!Tc){Tc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Sc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Tc[h]&&(Tc[h]=g)}}}b=Sc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Vc="undefined"!==typeof Uint8Array;var Wc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Xc(a,b){Object.isFrozen(a)||(Wc?a[Wc]|=b:void 0!==a.Da?a.Da|=b:Object.defineProperties(a,{Da:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Yc(a){var b;Wc?b=a[Wc]:b=a.Da;return null==b?0:b}
function Zc(a){Xc(a,1);return a}
function $c(a){return Array.isArray(a)?!!(Yc(a)&2):!1}
function ad(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Xc(a,2)}
;function bd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var cd,dd=Object.freeze(Zc([]));function ed(a){if($c(a.D))throw Error("Cannot mutate an immutable Message");}
var fd="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function gd(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function hd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Vc&&null!=a&&a instanceof Uint8Array)return Uc(a)}return a}
;function id(a,b){b=void 0===b?jd:b;return kd(a,b)}
function ld(a,b){if(null!=a){if(Array.isArray(a))a=kd(a,b);else if(bd(a)){var c={},d;for(d in a)c[d]=ld(a[d],b);a=c}else a=b(a);return a}}
function kd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=ld(c[d],b);Array.isArray(a)&&Yc(a)&1&&Zc(c);return c}
function md(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=hd(a);return Array.isArray(a)?id(a,md):a}
function jd(a){return Vc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function nd(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&(c=a.i[b],null!=c)?c:a.D[b+a.j]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||ed(a);b<a.l&&!d?a.D[b+a.j]=c:(a.i||(a.i=a.D[a.l+a.j]={}))[b]=c;return a}
function od(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=nd(a,b,d);null==e&&(e=dd);if($c(a.D))c&&(ad(e),Object.freeze(e));else if(e===dd||$c(e))e=Zc(e.slice()),I(a,b,e,d);return e}
function pd(a,b,c,d){ed(a);(c=qd(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),I(a,c));return I(a,b,d)}
function qd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=nd(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function rd(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=nd(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);$c(a.D)&&ad(b.D);return a.h[c]=b}
function sd(a,b,c,d){d=void 0===d?!1:d;a.h||(a.h={});var e=$c(a.D),f=a.h[c];if(!f){d=od(a,c,!0,d);f=[];e=e||$c(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&ad(f[g].D);e&&(ad(f),Object.freeze(f));a.h[c]=f}return f}
function J(a,b,c,d){d=void 0===d?!1:d;ed(a);a.h||(a.h={});var e=c?c.D:c;a.h[b]=c;return I(a,b,e,d)}
function td(a,b,c,d){ed(a);a.h||(a.h={});var e=d?d.D:d;a.h[b]=d;pd(a,b,c,e)}
function ud(a,b,c,d){var e=void 0===e?!1:e;ed(a);e=sd(a,c,b,e);c=d?d:new c;a=od(a,b);e.push(c);a.push(c.D)}
function vd(a,b){a=nd(a,b);return null==a?"":a}
;function wd(a,b,c){a||(a=xd);xd=null;var d=this.constructor.i;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.h||0);this.h=void 0;this.D=a;a:{d=this.D.length;a=d-1;if(d&&(d=this.D[a],bd(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.j,(d=this.D[a])?Array.isArray(d)&&Zc(d):this.D[a]=dd;else{d=this.i||(this.i=this.D[this.l+this.j]={});var e=d[a];e?Array.isArray(e)&&
Zc(e):d[a]=dd}}
wd.prototype.toJSON=function(){var a=this.D;return cd?a:id(a,md)};
function yd(a){cd=!0;try{return JSON.stringify(a.toJSON(),zd)}finally{cd=!1}}
wd.prototype.clone=function(){var a=id(this.D);xd=a;a=new this.constructor(a);xd=null;Ad(a,this);return a};
wd.prototype.toString=function(){return this.D.toString()};
function zd(a,b){return hd(b)}
function Ad(a,b){b.m&&(a.m=b.m.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=sd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)Ad(f[g],e[g])}else(f=rd(a,e.constructor,g,void 0,f))&&Ad(f,e)}}}}
var xd;function Bd(){wd.apply(this,arguments)}
u(Bd,wd);if(fd){var Cd={};Object.defineProperties(Bd,(Cd[Symbol.hasInstance]=gd(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),Cd))};function Dd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;ed(a);if(b){var e=Zc([]);for(var f=0;f<b.length;f++)e[f]=b[f].D;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=dd;a=I(a,c,e,d)}else a=J(a,c,b,!0);return a}
;function L(){Bd.apply(this,arguments)}
u(L,Bd);if(fd){var Ed={};Object.defineProperties(L,(Ed[Symbol.hasInstance]=gd(Object[Symbol.hasInstance]),Ed))};var Fd=window;zb("csi.gstatic.com");zb("googleads.g.doubleclick.net");zb("partner.googleadservices.com");zb("pubads.g.doubleclick.net");zb("securepubads.g.doubleclick.net");zb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function Gd(a,b){this.width=a;this.height=b}
m=Gd.prototype;m.clone=function(){return new Gd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Hd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Ld(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var f=d=0,g;g=b[f];f++)e==g.nodeName&&(a[d++]=g);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(f=d=0;g=b[f];f++){e=g.className;var h;if(h="function"==typeof e.split)h=0<=ab(e.split(/\s+/),c);h&&(a[d++]=g)}a.length=d;return a}return b}
function Md(a,b){hb(b,function(c,d){c&&"object"==typeof c&&c.la&&(c=c.ha());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Nd.hasOwnProperty(d)?a.setAttribute(Nd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Nd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Od(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ma(f)||C(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(C(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}F(g?fb(f):f,d)}}}
function Pd(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Qd(a){for(var b;b=a.firstChild;)a.removeChild(b)}
function Rd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
function Sd(){this.h=A.document||document}
m=Sd.prototype;m.getElementsByTagName=function(a,b){return(b||this.h).getElementsByTagName(String(a))};
m.Xa=function(a,b,c){var d=this.h,e=arguments,f=e[1],g=Pd(d,String(e[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):Md(g,f));2<e.length&&Od(d,g,e);return g};
m.createElement=function(a){return Pd(this.h,a)};
m.rb=function(a,b){a.appendChild(b)};
m.isElement=function(a){return C(a)&&1==a.nodeType};function Td(a){var b=Ud;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Vd(){var a=[];Td(function(b){a.push(b)});
return a}
var Ud={Yb:"allow-forms",Zb:"allow-modals",ac:"allow-orientation-lock",cc:"allow-pointer-lock",dc:"allow-popups",ec:"allow-popups-to-escape-sandbox",fc:"allow-presentation",hc:"allow-same-origin",ic:"allow-scripts",jc:"allow-top-navigation",kc:"allow-top-navigation-by-user-activation"},Wd=$a(function(){return Vd()});
function Xd(){var a=Yd(),b={};F(Wd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Yd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Zd={};function $d(a,b){b instanceof dc&&b.constructor===dc?b=b.h:(La(b),b="type_error:SafeStyleSheet");if(yc&&void 0!==a.cssText)a.cssText=b;else if(A.trustedTypes)if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else Qd(a),a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)));else a.innerHTML=b}
;var ae=(new Date).getTime();function be(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ce="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag jsfeat jsmode mods".split(" ");ha(ce);function de(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(q){for(var v=g,p=0;64>p;p+=4)v[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=v[p-3]^v[p-8]^v[p-14]^v[p-16],v[p]=(q<<1|q>>>31)&4294967295;q=e[0];var z=e[1],y=e[2],G=e[3],M=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var K=G^z&(y^G);var N=1518500249}else K=z^y^G,N=1859775393;else 60>p?(K=z&y|G&(z|y),N=2400959708):(K=z^y^G,N=3395469782);K=((q<<5|q>>>27)&4294967295)+K+M+N+v[p]&4294967295;M=G;G=y;y=(z<<30|z>>>2)&4294967295;z=q;q=K}e[0]=e[0]+q&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+y&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+M&4294967295}
function c(q,v){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],z=0,y=q.length;z<y;++z)p.push(q.charCodeAt(z));q=p}v||(v=q.length);p=0;if(0==l)for(;p+64<v;)b(q.slice(p,p+64)),p+=64,n+=64;for(;p<v;)if(f[l++]=q[p++],n++,64==l)for(l=0,b(f);p+64<v;)b(q.slice(p,p+64)),p+=64,n+=64}
function d(){var q=[],v=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=v&255,v>>>=8;b(f);for(p=v=0;5>p;p++)for(var z=24;0<=z;z-=8)q[v++]=e[p]>>z&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,xb:function(){for(var q=d(),v="",p=0;p<q.length;p++)v+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return v}}}
;function ee(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,fe(be(d),a,c||null)].join(" "):null}
function fe(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),ge(e.join(" "));
var f=[],g=[];F(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=ge(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ge(a){var b=de();b.update(a);return b.xb().toLowerCase()}
;var he={};function ie(a){this.h=a||{cookie:""}}
m=ie.prototype;m.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{La:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.yc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.La}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ab(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{La:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ab(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var je=new ie("undefined"==typeof document?null:document);function ke(a){return!!he.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function le(a,b,c,d){(a=A[a])||(a=(new ie(document)).get(b));return a?ee(a,c,d):null}
function me(a){var b=void 0===b?!1:b;var c=be(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;ke(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new ie(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");ke(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new ie(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?ee(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ke(b)&&((b=le("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=le("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function ne(a){if(fd){var b={};Object.defineProperties(a,(b[Symbol.hasInstance]=gd(Object[Symbol.hasInstance]),b))}}
;function oe(){this.l=this.l;this.u=this.u}
oe.prototype.l=!1;oe.prototype.dispose=function(){this.l||(this.l=!0,this.ga())};
oe.prototype.ga=function(){if(this.u)for(;this.u.length;)this.u.shift()()};function pe(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
pe.prototype.stopPropagation=function(){this.j=!0};
pe.prototype.preventDefault=function(){this.defaultPrevented=!0};function qe(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=re(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,se[c])c=se[c];else{c=String(c);if(!se[c]){var f=/function\s+([^\(]+)/m.exec(c);se[c]=f?f[1]:"[Anonymous]"}c=se[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function re(a,b){b||(b={});b[te(a)]=!0;var c=a.stack||"";(a=a.vb)&&!b[te(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=re(a,b));return c}
function te(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var se={};var ue=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ve(a,b){pe.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
E(ve,pe);var we={2:"touch",3:"pen",4:"mouse"};
ve.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Bc){a:{try{wc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:we[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ve.U.preventDefault.call(this)};
ve.prototype.stopPropagation=function(){ve.U.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ve.prototype.preventDefault=function(){ve.U.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xe="closure_listenable_"+(1E6*Math.random()|0);var ye=0;function ze(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ca=e;this.key=++ye;this.ta=this.ya=!1}
function Ae(a){a.ta=!0;a.listener=null;a.proxy=null;a.src=null;a.Ca=null}
;function Be(a){this.src=a;this.listeners={};this.h=0}
Be.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ce(a,b,d,e);-1<g?(b=a[g],c||(b.ya=!1)):(b=new ze(b,this.src,f,!!d,e),b.ya=c,a.push(b));return b};
Be.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ce(e,b,c,d);return-1<b?(Ae(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function De(a,b){var c=b.type;c in a.listeners&&db(a.listeners[c],b)&&(Ae(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Ce(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ta&&f.listener==b&&f.capture==!!c&&f.Ca==d)return e}return-1}
;var Ee="closure_lm_"+(1E6*Math.random()|0),Fe={},Ge=0;function He(a,b,c,d,e){if(d&&d.once)Ie(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)He(a,b[f],c,d,e);else c=Je(c),a&&a[xe]?a.X(b,c,C(d)?!!d.capture:!!d,e):Ke(a,b,c,!1,d,e)}
function Ke(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=C(e)?!!e.capture:!!e,h=Le(a);h||(a[Ee]=h=new Be(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Me();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ue||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ne(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ge++}}
function Me(){function a(c){return b.call(a.src,a.listener,c)}
var b=Oe;return a}
function Ie(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ie(a,b[f],c,d,e);else c=Je(c),a&&a[xe]?a.j.add(String(b),c,!0,C(d)?!!d.capture:!!d,e):Ke(a,b,c,!0,d,e)}
function Pe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Pe(a,b[f],c,d,e);else(d=C(d)?!!d.capture:!!d,c=Je(c),a&&a[xe])?a.j.remove(String(b),c,d,e):a&&(a=Le(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ce(b,c,d,e)),(c=-1<a?b[a]:null)&&Qe(c))}
function Qe(a){if("number"!==typeof a&&a&&!a.ta){var b=a.src;if(b&&b[xe])De(b.j,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ne(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ge--;(c=Le(b))?(De(c,a),0==c.h&&(c.src=null,b[Ee]=null)):Ae(a)}}}
function Ne(a){return a in Fe?Fe[a]:Fe[a]="on"+a}
function Oe(a,b){if(a.ta)a=!0;else{b=new ve(b,this);var c=a.listener,d=a.Ca||a.src;a.ya&&Qe(a);a=c.call(d,b)}return a}
function Le(a){a=a[Ee];return a instanceof Be?a:null}
var Re="__closure_events_fn_"+(1E9*Math.random()>>>0);function Je(a){if("function"===typeof a)return a;a[Re]||(a[Re]=function(b){return a.handleEvent(b)});
return a[Re]}
;function Se(){oe.call(this);this.j=new Be(this);this.ba=this;this.I=null}
E(Se,oe);Se.prototype[xe]=!0;Se.prototype.addEventListener=function(a,b,c,d){He(this,a,b,c,d)};
Se.prototype.removeEventListener=function(a,b,c,d){Pe(this,a,b,c,d)};
function Te(a,b){var c=a.I;if(c){var d=[];for(var e=1;c;c=c.I)d.push(c),++e}a=a.ba;c=b.type||b;"string"===typeof b?b=new pe(b,a):b instanceof pe?b.target=b.target||a:(e=b,b=new pe(c,a),ob(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Ue(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Ue(g,c,!0,b)&&e,b.j||(e=Ue(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Ue(g,c,!1,b)&&e}
Se.prototype.ga=function(){Se.U.ga.call(this);if(this.j){var a=this.j,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ae(d[e]);delete a.listeners[c];a.h--}}this.I=null};
Se.prototype.X=function(a,b,c,d){return this.j.add(String(a),b,!1,c,d)};
function Ue(a,b,c,d){b=a.j.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ta&&g.capture==c){var h=g.listener,k=g.Ca||g.src;g.ya&&De(a.j,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ve(a){Se.call(this);var b=this;this.A=this.i=0;this.P=null!=a?a:{S:function(e,f){return setTimeout(e,f)},
fa:clearTimeout};var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,We(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||Xe(this)}
u(Ve,Se);function Ye(){var a=Ze;Ve.h||(Ve.h=new Ve(a));return Ve.h}
Ve.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.P.fa(this.A);delete Ve.h};
Ve.prototype.J=function(){return this.h};
function Xe(a){a.A=a.P.S(function(){var b;return x(function(c){if(1==c.h)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.s(3):w(c,We(a),3):w(c,We(a),3);Xe(a);c.h=0})},3E4)}
function We(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.P.S(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:ya(h);a.o=void 0;a.i&&(a.P.fa(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?Te(a,"networkstatus-online"):Te(a,"networkstatus-offline"));c(g);za(h);break;case 2:xa(h),g=!1,h.s(3)}})})}
;function $e(){this.data_=[];this.h=-1}
$e.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
$e.prototype.get=function(a){return!!this.data_[a]};
function af(a){-1==a.h&&(a.h=bb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function cf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
cf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function df(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var ef;
function ff(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=Pd(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Sa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Wa;c.Wa=null;e()}};
return function(e){d.next={Wa:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function gf(a){A.setTimeout(function(){throw a;},0)}
;function hf(){this.i=this.h=null}
hf.prototype.add=function(a,b){var c=jf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
hf.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var jf=new cf(function(){return new kf},function(a){return a.reset()});
function kf(){this.next=this.scope=this.h=null}
kf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
kf.prototype.reset=function(){this.next=this.scope=this.h=null};function lf(a,b){mf||nf();of||(mf(),of=!0);pf.add(a,b)}
var mf;function nf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);mf=function(){a.then(qf)}}else mf=function(){var b=qf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!H("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(ef||(ef=ff()),ef(b)):A.setImmediate(b)}}
var of=!1,pf=new hf;function qf(){for(var a;a=pf.remove();){try{a.h.call(a.scope)}catch(b){gf(b)}df(jf,a)}of=!1}
;function rf(a,b){this.h=a[A.Symbol.iterator]();this.i=b}
rf.prototype[Symbol.iterator]=function(){return this};
rf.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function sf(a,b){return new rf(a,b)}
;function tf(){this.blockSize=-1}
;function uf(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.u=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
E(uf,tf);uf.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function vf(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
uf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)vf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vf(this,e);f=0;break}}this.i=f;this.l+=b}};
uf.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;vf(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function wf(){}
wf.prototype.next=function(){return xf};
var xf={done:!0,value:void 0};function yf(a){return{value:a,done:!1}}
wf.prototype.R=function(){return this};function zf(a){if(a instanceof Af||a instanceof Bf||a instanceof Cf)return a;if("function"==typeof a.next)return new Af(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Af(function(){return a[Symbol.iterator]()});
if("function"==typeof a.R)return new Af(function(){return a.R()});
throw Error("Not an iterator or iterable.");}
function Af(a){this.i=a}
Af.prototype.R=function(){return new Bf(this.i())};
Af.prototype[Symbol.iterator]=function(){return new Cf(this.i())};
Af.prototype.h=function(){return new Cf(this.i())};
function Bf(a){this.i=a}
u(Bf,wf);Bf.prototype.next=function(){return this.i.next()};
Bf.prototype[Symbol.iterator]=function(){return new Cf(this.i)};
Bf.prototype.h=function(){return new Cf(this.i)};
function Cf(a){Af.call(this,function(){return a});
this.j=a}
u(Cf,Af);Cf.prototype.next=function(){return this.j.next()};function Df(a,b){this.i={};this.h=[];this.j=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Df)for(c=Ef(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ef(a){Ff(a);return a.h.concat()}
m=Df.prototype;m.has=function(a){return Gf(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Hf;Ff(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Hf(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.j=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return Gf(this.i,a)?(delete this.i[a],--this.size,this.j++,this.h.length>2*this.size&&Ff(this),!0):!1};
function Ff(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Gf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Gf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return Gf(this.i,a)?this.i[a]:b};
m.set=function(a,b){Gf(this.i,a)||(this.size+=1,this.h.push(a),this.j++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Ef(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Df(this)};
m.keys=function(){return zf(this.R(!0)).h()};
m.values=function(){return zf(this.R(!1)).h()};
m.entries=function(){var a=this;return sf(this.keys(),function(b){return[b,a.get(b)]})};
m.R=function(a){Ff(this);var b=0,c=this.j,d=this,e=new wf;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return xf;var f=d.h[b++];return yf(a?f:d.i[f])};
return e};
function Gf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var If=A.JSON.stringify;function Jf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Kf(a){this.h=0;this.o=void 0;this.l=this.i=this.j=null;this.m=this.u=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){Lf(b,2,c)},function(c){Lf(b,3,c)})}catch(c){Lf(this,3,c)}}
function Mf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Mf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Nf=new cf(function(){return new Mf},function(a){a.reset()});
function Of(a,b,c){var d=Nf.get();d.i=a;d.onRejected=b;d.context=c;return d}
Kf.prototype.then=function(a,b,c){return lg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Kf.prototype.$goog_Thenable=!0;Kf.prototype.cancel=function(a){if(0==this.h){var b=new mg(a);lf(function(){ng(this,b)},this)}};
function ng(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?ng(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):og(c),pg(c,e,3,b)))}a.j=null}else Lf(a,3,b)}
function qg(a,b){a.i||2!=a.h&&3!=a.h||rg(a);a.l?a.l.next=b:a.i=b;a.l=b}
function lg(a,b,c,d){var e=Of(null,null,null);e.h=new Kf(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof mg?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;qg(a,e);return e.h}
Kf.prototype.I=function(a){this.h=0;Lf(this,2,a)};
Kf.prototype.L=function(a){this.h=0;Lf(this,3,a)};
function Lf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.I,f=a.L;if(d instanceof Kf){qg(d,Of(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(C(d))try{var k=d.then;if("function"===typeof k){sg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.o=c,a.h=b,a.j=null,rg(a),3!=b||c instanceof mg||tg(a,c))}}
function sg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function rg(a){a.u||(a.u=!0,lf(a.A,a))}
function og(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
Kf.prototype.A=function(){for(var a;a=og(this);)pg(this,a,this.h,this.o);this.u=!1};
function pg(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,ug(b,c,d);else try{b.j?b.i.call(b.context):ug(b,c,d)}catch(e){vg.call(null,e)}df(Nf,b)}
function ug(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function tg(a,b){a.m=!0;lf(function(){a.m&&vg.call(null,b)})}
var vg=gf;function mg(a){Ua.call(this,a)}
E(mg,Ua);mg.prototype.name="cancel";function O(a){oe.call(this);this.o=1;this.j=[];this.m=0;this.h=[];this.i={};this.A=!!a}
E(O,oe);m=O.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
function wg(a,b,c){var d=xg;if(a=d.i[a]){var e=d.h;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.xa(a)}}
m.xa=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.m?(this.j.push(a),this.h[a+1]=function(){}):(c&&db(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.ma=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];yg(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.l;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,0<this.j.length&&0==this.m)for(;c=this.j.pop();)this.xa(c)}}return 0!=e}return!1};
function yg(a,b,c){lf(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.xa,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.ga=function(){O.U.ga.call(this);this.clear();this.j.length=0};function zg(a){this.h=a}
zg.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,If(b))};
zg.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
zg.prototype.remove=function(a){this.h.remove(a)};function Ag(a){this.h=a}
E(Ag,zg);function Bg(a){this.data=a}
function Cg(a){return void 0===a||a instanceof Bg?a:new Bg(a)}
Ag.prototype.set=function(a,b){Ag.U.set.call(this,a,Cg(b))};
Ag.prototype.i=function(a){a=Ag.U.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ag.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Dg(a){this.h=a}
E(Dg,Ag);Dg.prototype.set=function(a,b,c){if(b=Cg(b)){if(c){if(c<Date.now()){Dg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Dg.U.set.call(this,a,b)};
Dg.prototype.i=function(a){var b=Dg.U.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Dg.prototype.remove.call(this,a);else return b}};function Eg(){}
;function Fg(){}
E(Fg,Eg);Fg.prototype[Symbol.iterator]=function(){return zf(this.R(!0)).h()};
Fg.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Gg(a){this.h=a}
E(Gg,Fg);m=Gg.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.R=function(a){var b=0,c=this.h,d=new wf;d.next=function(){if(b>=c.length)return xf;var e=c.key(b++);if(a)return yf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yf(e)};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function Hg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
E(Hg,Gg);function Ig(a,b){this.i=a;this.h=null;var c;if(c=yc)c=!(9<=Number(Oc));if(c){Jg||(Jg=new Df);this.h=Jg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),Jg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
E(Ig,Fg);var Kg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Jg=null;function Lg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Kg[b]})}
m=Ig.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(Lg(a),b);Mg(this)};
m.get=function(a){a=this.h.getAttribute(Lg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(Lg(a));Mg(this)};
m.R=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new wf;d.next=function(){if(b>=c.length)return xf;var e=c[b++];if(a)return yf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yf(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Mg(this)};
function Mg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ng(a,b){this.i=a;this.h=b+"::"}
E(Ng,Fg);Ng.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Ng.prototype.get=function(a){return this.i.get(this.h+a)};
Ng.prototype.remove=function(a){this.i.remove(this.h+a)};
Ng.prototype.R=function(a){var b=this.i[Symbol.iterator](),c=this,d=new wf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return yf(a?e.slice(c.h.length):c.i.get(e))};
return d};function Og(a){L.call(this,a)}
u(Og,L);Og.prototype.getKey=function(){return nd(this,1)};
Og.prototype.da=function(){return nd(this,2===qd(this,Pg)?2:-1)};
Og.prototype.setValue=function(a){return pd(this,2,Pg,a)};
var Pg=[2,3,4,5,6];function Qg(a){L.call(this,a)}
u(Qg,L);function Rg(a){L.call(this,a)}
u(Rg,L);function Sg(a){L.call(this,a,-1,Tg)}
u(Sg,L);Sg.prototype.getPlayerType=function(){return nd(this,36)};
Sg.prototype.setHomeGroupInfo=function(a){return J(this,81,a)};
var Tg=[9,66,24,32,86,100,101];function Ug(a){L.call(this,a,-1,Vg)}
u(Ug,L);var Vg=[15,26,28];function Wg(a){L.call(this,a)}
u(Wg,L);Wg.prototype.setToken=function(a){return I(this,2,a)};function Xg(a){L.call(this,a,-1,Yg)}
u(Xg,L);Xg.prototype.setSafetyMode=function(a){return I(this,5,a)};
var Yg=[12];function Zg(a){L.call(this,a,-1,$g)}
u(Zg,L);var $g=[12];function ah(a){L.call(this,a,-1,bh)}
u(ah,L);function ch(a){L.call(this,a)}
u(ch,L);ch.prototype.getKey=function(){return vd(this,1)};
ch.prototype.da=function(){return vd(this,2)};
ch.prototype.setValue=function(a){return I(this,2,a)};
var bh=[4,5];function dh(a){L.call(this,a)}
u(dh,L);function eh(a){L.call(this,a)}
u(eh,L);var fh=[2,3];function gh(a){L.call(this,a)}
u(gh,L);function hh(a){L.call(this,a)}
u(hh,L);function ih(a){L.call(this,a)}
u(ih,L);function jh(a){L.call(this,a,-1,kh)}
u(jh,L);var kh=[10,17];function lh(a){L.call(this,a)}
u(lh,L);function mh(a){L.call(this,a)}
u(mh,L);function nh(a){L.call(this,a)}
u(nh,L);function oh(a){L.call(this,a,431)}
u(oh,L);
var ph=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,117];function qh(a){L.call(this,a)}
u(qh,L);function rh(a){L.call(this,a)}
u(rh,L);rh.prototype.setVideoId=function(a){return pd(this,1,sh,a)};
rh.prototype.getPlaylistId=function(){return nd(this,2===qd(this,sh)?2:-1)};
var sh=[1,2];function th(a){L.call(this,a,-1,uh)}
u(th,L);var uh=[3];var vh=0;function wh(a,b){var c;cb(a,function(d){c=b[d];return!!c});
return c}
D("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++vh});function xh(a){if(a.requestFullscreen)a=a.requestFullscreen(void 0);else if(a.webkitRequestFullscreen)a=a.webkitRequestFullscreen();else if(a.mozRequestFullScreen)a=a.mozRequestFullScreen();else if(a.msRequestFullscreen)a=a.msRequestFullscreen();else if(a.webkitEnterFullscreen)a=a.webkitEnterFullscreen();else return Promise.reject(Error("Fullscreen API unavailable"));return a instanceof Promise?a:Promise.resolve()}
function yh(){var a=void 0===a?!1:a;var b=wh(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],document);if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function zh(a){L.call(this,a,1)}
u(zh,L);function Ah(a){L.call(this,a)}
u(Ah,L);var Bh;Bh=new function(a,b){this.h=a;this.fieldName=b;this.isRepeated=0;this.i=Dd}(406606992,{vc:0},Ah);function Ch(){Ah.apply(this,arguments)}
u(Ch,Ah);ne(Ch);var Dh=A.window,Eh,Fh,Gh=(null==Dh?void 0:null==(Eh=Dh.yt)?void 0:Eh.config_)||(null==Dh?void 0:null==(Fh=Dh.ytcfg)?void 0:Fh.data_)||{},Hh,Ih=(null==Dh?void 0:null==(Hh=Dh.ytcfg)?void 0:Hh.obfuscatedData_)||[];function Jh(){zh.apply(this,arguments)}
u(Jh,zh);ne(Jh);var Kh=new Jh(Ih),Lh=Gh.EXPERIMENT_FLAGS;if(!Lh||!Lh.jspb_i18n_extension){var Mh=new Ch;Bh.i(Kh,Mh)}D("yt.config_",Gh);D("yt.configJspb_",Ih);function Nh(){var a=arguments;1<a.length?Gh[a[0]]=a[1]:1===a.length&&Object.assign(Gh,a[0])}
function P(a,b){return a in Gh?Gh[a]:b}
function Oh(){return P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Ph(){var a=Gh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Qh=[];function Rh(a){Qh.forEach(function(b){return b(a)})}
function Sh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Th(b)}}:a}
function Th(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=P("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Nh("ERRORS",e));Rh(a)}
function Uh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=P("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Nh("ERRORS",e))}
;var Vh=/^[\w.]*$/,Wh={q:!0,search_query:!0};function Xh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Yh(f[0]||""),h=Yh(f[1]||"");g in c?Array.isArray(c[g])?gb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],n=String(Xh);k.args=[{key:l,value:f[1],query:a,method:Zh==n?"unchanged":n}];Wh.hasOwnProperty(l)||Uh(k)}}return c}
var Zh=String(Xh);function $h(a){var b=[];hb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];F(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ai(a){"?"==a.charAt(0)&&(a=a.substr(1));return Xh(a,"&")}
function bi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ai(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=rc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ci(a){if(!b)var b=window.location.href;var c=a.match(mc)[1]||null,d=oc(a);c&&d?(a=a.match(mc),b=b.match(mc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)==d&&(Number(b.match(mc)[4]||null)||null)==(Number(a.match(mc)[4]||null)||null):!0;return a}
function Yh(a){return a&&a.match(Vh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function di(){return{B:"svg",F:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},N:[{B:"g",H:"ytp-fullscreen-button-corner-0",N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"}}]},{B:"g",H:"ytp-fullscreen-button-corner-1",N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"}}]},{B:"g",H:"ytp-fullscreen-button-corner-2",N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"}}]},{B:"g",
H:"ytp-fullscreen-button-corner-3",N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"}}]}]}}
function ei(){return{B:"svg",F:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"}}]}}
function fi(){return{B:"svg",F:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"}}]}}
function gi(){return{B:"svg",F:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},N:[{B:"path",O:!0,F:{d:"M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 Z M19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z",fill:"#fff"}}]}}
;var hi=1;function ii(a){oe.call(this);this.h={};this.i={};this.element=this.createElement(a)}
u(ii,oe);
ii.prototype.createElement=function(a,b){b=b||"svg"===a.B;var c=a.H,d=a.zc;if(b){var e=document.createElementNS("http://www.w3.org/2000/svg",a.B);Ac&&(a.F||(a.F={}),a.F.focusable="false")}else e=Pd(document,a.B);if(c){if(c=ji(this,e,"class",c))ki(this,e,"class",c),this.h[c]=e}else if(d){c=t(d);for(var f=c.next();!f.done;f=c.next())this.h[f.value]=e;ki(this,e,"class",d.join(" "))}d=a.Ac;c=a.N;if(d)b=ji(this,e,"child",d),void 0!==b&&e.appendChild(document.createTextNode(String(b)));else if(c)for(d=0,
c=t(c),f=c.next();!f.done;f=c.next())if(f=f.value)if("string"===typeof f)f=ji(this,e,"child",f),null!=f&&e.appendChild(document.createTextNode(String(f)));else if(f.element)e.appendChild(f.element);else{var g=f;f=this.createElement(g,b);e.appendChild(f);g.O&&(g="ytp-id-"+hi.toString(),hi++,f.id=g,f=document.createElementNS("http://www.w3.org/2000/svg","use"),f.setAttribute("class","ytp-svg-shadow"),f.setAttributeNS("http://www.w3.org/1999/xlink","href","#"+g),g=d++,e.insertBefore(f,e.childNodes[g]||
null))}if(a=a.F)for(b=e,d=t(Object.keys(a)),c=d.next();!c.done;c=d.next())c=c.value,f=a[c],ki(this,b,c,"string"===typeof f?ji(this,b,c,f):f);return e};
ii.prototype.detach=function(){var a=this.element;a&&a.parentNode&&a.parentNode.removeChild(a)};
function ji(a,b,c,d){if("{{"===d.substr(0,2))a.i[d]=[b,c];else return d}
ii.prototype.update=function(a){for(var b=t(Object.keys(a)),c=b.next();!c.done;c=b.next()){c=c.value;var d=this.i["{{"+c+"}}"];d&&ki(this,d[0],d[1],a[c])}};
function li(a,b){var c=[];if(!b)return c;b=t(b);for(var d=b.next();!d.done;d=b.next())if(d=d.value,null!=d){var e=d.nodeType;1===e||3===e?c.push(d):d&&"string"===typeof d.B?c.push(a.createElement(d)):d.element?c.push(d.element):"string"===typeof d&&-1!==d.indexOf("\n")?d.split("\n").forEach(function(f,g){0<g&&c.push(Pd(document,"BR"));c.push(document.createTextNode(String(f)))}):c.push(document.createTextNode(String(d)))}return c}
function ki(a,b,c,d){if("child"===c){Qd(b);var e;void 0===d?e=void 0:e=!Array.isArray(d)||d&&"string"===typeof d.B?[d]:d;c=li(a,e);c=t(c);for(a=c.next();!a.done;a=c.next())b.appendChild(a.value)}else"style"===c?(c=d?d:"",a=Zd.cssText,a||(a=d=kc(),void 0===b.style[d]&&(d=(Cc?"Webkit":Bc?"Moz":yc?"ms":null)+lc(d),void 0!==b.style[d]&&(a=d)),Zd.cssText=a),a&&(b.style[a]=c)):null===d||void 0===d?b.removeAttribute(c):(a=d.toString(),"href"===c&&(a=Kb(Nb(a)||Ob)),b.setAttribute(c,a))}
ii.prototype.ga=function(){this.h={};this.i={};this.detach();oe.prototype.ga.call(this)};var mi={".ima-ad-player":{"background-color":"#000"},".ima-controls":{"background-color":"#000",bottom:"0",height:"40px",width:"100%",position:"absolute"},".ima-control-button":{"background-color":"#000",border:"1px transparent solid","border-style":"none",cursor:"pointer",fill:"#fff",height:"40px",width:"40px"},".ima-control-countdown":{"background-color":"#000","border-style":"none",color:"#fff","font-family":"Arial, sans-serif","font-size":"12px",height:"40px","line-height":"40px","margin-left":"10px",
"vertical-align":"top"},".ima-control-button.fullscreen":{"float":"right"},".ima-control-button:hover":{fill:"#f00"}};
function ni(a,b,c,d){this.player=a;this.tb=d;this.i=this.ba=null;this.o=document.createElement("div");this.m=document.createElement("div");this.l=document.createElement("button");this.A=document.createElement("button");this.L=document.createElement("span");this.oa=null;this.u=document.createElement("button");this.j=this.h=this.I=null;this.pa={currentTime:0};this.Sa=this.V=this.Ta=this.Ha=this.isAdPlaying=!1;this.na=this.playerWidth=this.playerHeight=0;this.Nb.bind(this);if(window.google&&google&&
google.ima&&google.ima.AdDisplayContainer&&(this.ba=Hd(b))&&(this.i=Hd(c))){if(this.i){this.i.textContent="";if(this.i)for(a=t(Object.entries(mi)),b=a.next();!b.done;b=a.next()){c=t(b.value);b=c.next().value;c=c.next().value;b="#"+this.i.id+" "+b;if(-1!=b.indexOf("<"))throw Error("Selector does not allow '<', got: "+b);d=b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g,"");if(!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(d))throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: "+
b);a:{for(var e={"(":")","[":"]"},f=[],g=0;g<d.length;g++){var h=d[g];if(e[h])f.push(e[h]);else{b:{var k=void 0;for(k in e)if(e[k]==h){k=!0;break b}k=!1}if(k&&f.pop()!=h){d=!1;break a}}}d=0==f.length}if(!d)throw Error("() and [] in selector must be balanced, got: "+b);if(!(c instanceof Qb)){d=void 0;e="";for(d in c)if(Object.prototype.hasOwnProperty.call(c,d)){if(!/^[-_a-zA-Z0-9]+$/.test(d))throw Error("Name allows only [-_a-zA-Z0-9], got: "+d);f=c[d];null!=f&&(f=Array.isArray(f)?f.map(Sb).join(" "):
Sb(f),e+=d+":"+f+";")}c=e?new Qb(e,Pb):Rb}b+="{";c instanceof Qb&&c.constructor===Qb?c=c.h:(La(c),c="type_error:SafeStyle");b=b+c.replace(/</g,"\\3C ")+"}";b=new dc(b,cc);c=Va||(Va=new Sd);d=c.h;yc&&d.createStyleSheet?(c=d.createStyleSheet(),$d(c,b)):(d=Ld(c.h,"HEAD")[0],d||(e=Ld(c.h,"BODY")[0],d=c.Xa("HEAD"),e.parentNode.insertBefore(d,e)),e=c.Xa("STYLE"),(f=jc())&&e.setAttribute("nonce",f),$d(e,b),c.rb(d,e))}a=this.player.getSize();this.playerHeight=a.height;this.playerWidth=a.width;oi(this.i,this.playerWidth,
this.playerHeight);this.i.style.position="relative";oi(this.o,a.width,a.height-40);this.o.className="ima-ad-player";this.i.appendChild(this.o);this.m.className="ima-controls";this.l.className="ima-control-button playpause";this.l.title="Play/Pause";pi(this.l,ei());this.l.addEventListener("click",this.Pb.bind(this));this.m.appendChild(this.l);this.A.className="ima-control-button mute";this.A.title="Mute/Unmute";pi(this.A,gi());this.A.addEventListener("click",this.Ob.bind(this));this.m.appendChild(this.A);
this.L.className="ima-control-countdown";this.m.appendChild(this.L);this.u.className="ima-control-button fullscreen";this.u.title="Fullscreen";pi(this.u,di());this.u.addEventListener("click",this.Qb.bind(this));this.m.appendChild(this.u);this.i.appendChild(this.m);qi(this.i)}this.isAutoplayEnabled()&&(this.jb(),this.V=!0);this.player.addEventListener("onStateChange",this.onStateChange.bind(this));this.player.addEventListener("onVideoDataChange",this.onVideoDataChange.bind(this));this.player.addEventListener("onVolumeChange",
this.Rb.bind(this));this.o&&(this.I=window.google&&google&&google.ima&&google.ima.AdDisplayContainer?new google.ima.AdDisplayContainer(this.o):null)&&(this.j=new google.ima.AdsLoader(this.I),this.j.addEventListener("adsManagerLoaded",this.Mb.bind(this)),this.j.addEventListener("adError",this.Kb.bind(this)),setInterval(this.Xb.bind(this),500),ri(this))}}
function si(a){!window.yt_embedsEnableImaKillswitch&&!a.Sa||window.yt_embedsEnableImaKillswitch&&!a.V||!a.h||(a.h.init(a.playerWidth,a.playerHeight-40,"normal"),a.h.start())}
m=ni.prototype;m.onStateChange=function(a){a=a.data;-1===a?(this.V=!0,!this.Ta&&this.I&&(this.player.pauseVideo(),this.Ta=!0,this.I.initialize(),this.Sa=!0,si(this))):0===a&&this.j&&this.j.contentComplete()};
m.Mb=function(a){this.player.logImaAdEvent(9,0);this.h=a.getAdsManager(this.pa);this.h.addEventListener("contentPauseRequested",this.jb.bind(this));this.h.addEventListener("contentResumeRequested",this.Oa.bind(this));this.h.addEventListener("click",this.Hb.bind(this));this.h.addEventListener("skipped",this.Ib.bind(this));this.h.addEventListener("adError",this.Lb.bind(this));this.h.addEventListener("start",this.Jb.bind(this));si(this)};
m.jb=function(){ti(this);this.player.pauseVideo();qi(this.ba);pi(this.l,ei());var a=this.i;a&&(a.style.display="block");this.isAdPlaying=!0;this.oa=setInterval(this.Wb.bind(this),500)};
m.Oa=function(){this.player.logImaAdEvent(2,ui(this));ti(this);this.oa&&clearInterval(this.oa);this.isAdPlaying=!1;var a=this.ba;a&&(a.style.display="block");pi(this.l,fi());qi(this.i);this.player.playVideo()};
m.Pb=function(){vi(this,!this.isAdPlaying);this.player.logImaAdEvent(this.isAdPlaying?6:5,ui(this))};
function vi(a,b){b!==a.isAdPlaying&&a.h&&(b?(a.h.resume(),pi(a.l,ei())):(a.h.pause(),pi(a.l,fi())),a.isAdPlaying=b)}
m.Ob=function(){wi(this,!this.Ha)};
function wi(a,b){a.h&&b!==a.Ha&&(b?(a.h.setVolume(0),a.player.mute(),pi(a.A,{B:"svg",F:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"}}]})):
(a.h.setVolume(1),a.player.unMute(),pi(a.A,gi())),a.Ha=b)}
m.Qb=function(){var a=this;yh()?ti(this):this.i&&xh(this.i).then(function(){a.h&&a.h.resize(window.screen.width,window.screen.height-40,"fullscreen");pi(a.u,{B:"svg",F:{height:"100%",version:"1.1",viewBox:"0 0 36 36",width:"100%"},N:[{B:"g",H:"ytp-fullscreen-button-corner-2",N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"}}]},{B:"g",H:"ytp-fullscreen-button-corner-3",N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"}}]},{B:"g",H:"ytp-fullscreen-button-corner-0",
N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"}}]},{B:"g",H:"ytp-fullscreen-button-corner-1",N:[{B:"path",O:!0,H:"ytp-svg-fill",F:{d:"m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z"}}]}]})})};
function ti(a){if(yh())a:{var b=yh(),c;wh(["fullscreenEnabled","webkitFullscreenEnabled","mozFullScreenEnabled","msFullscreenEnabled"],document)?yh()==b&&(c=document):c=b;if(c&&(b=wh(["exitFullscreen","webkitExitFullscreen","mozCancelFullScreen","msExitFullscreen"],c))){b.call(c)instanceof Promise||Promise.resolve();break a}Promise.resolve()}a.h&&a.h.resize(a.playerWidth,a.playerHeight-40,"normal");pi(a.u,di())}
m.Hb=function(){ti(this);vi(this,!1);this.player.logImaAdEvent(4,ui(this))};
m.Ib=function(){this.player.logImaAdEvent(3,ui(this))};
m.Jb=function(a){this.player.logImaAdEvent(1,ui(this));if(a=a.getAd())this.na=a.getDuration()};
m.Xb=function(){this.pa.currentTime=this.player.getCurrentTime();var a=this.player.getSize();if(this.playerHeight!==a.height||this.playerWidth!==a.width){var b=a.width;a=a.height;this.playerWidth=b;this.playerHeight=a;if(this.i&&this.m&&this.o&&(oi(this.i,b,a),oi(this.m,b,40),a-=40,oi(this.o,b,a),this.h)){var c=yh()?"fullscreen":"normal";this.h.resize(b,a,c)}}};
m.Rb=function(a){wi(this,a.data.muted)};
function ri(a){if(a.j){var b=a.player.getPlayerMode();if(b.pfp&&b.pfp.enableIma){var c=new google.ima.AdsRequest;c.setAdWillAutoPlay(!!b.pfp.autoplay);c.setAdWillPlayMuted(!!b.pfp.mutedAutoplay);a.tb(c);if(c.adTagUrl){c.linearAdSlotWidth=a.playerWidth;c.linearAdSlotHeight=a.playerHeight-40;b=c.adTagUrl;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=ai(1<b.length?b[1]:b[0])):b={};var d={},e=a.player.getVideoData();e.video_id&&!b.vid&&(d.vid=e.video_id);d.cust_params="yt_embed_ima=1";
b.cust_params&&(d.cust_params=b.cust_params+"&yt_embed_ima=1");c.adTagUrl=bi(c.adTagUrl,d||{},!0);a.j.requestAds(c);a.player.logImaAdEvent(8,0)}}}}
m.onVideoDataChange=function(a){"newdata"===a.data.type&&(this.h&&(this.h.destroy(),this.h=null),this.j&&this.j.contentComplete(),ri(this))};
m.Wb=function(){if(this.L&&this.h){var a=this.na-this.h.getRemainingTime();a=(new Date(1E3*a)).toISOString().substr(14,5);var b=(new Date(1E3*this.na)).toISOString().substr(14,5);this.L.innerText=a+" / "+b}};
m.Kb=function(a){a.getError().getMessage();this.player.logImaAdEvent(10,ui(this));this.h&&this.h.destroy();(this.isAutoplayEnabled()||this.V)&&this.Oa()};
m.Lb=function(a){a.getError().getMessage();this.player.logImaAdEvent(10,ui(this));this.h&&this.h.destroy();this.Oa()};
m.Nb=function(a){a=a.h()+": "+a.i();console.log(a)};
function oi(a,b,c){a.style.width=b+"px";a.style.height=c+"px"}
function qi(a){a&&(a.style.display="none")}
function pi(a,b){a.textContent="";b=new ii(b);a.append(b.element)}
m.isAutoplayEnabled=function(){var a=this.player.getPlayerMode();return a.pfp&&(a.pfp.autoplay||a.pfp.mutedAutoplay)};
function ui(a){return 0===a.pa.currentTime?1:0===a.player.getPlayerState()?3:2}
m.sb=function(){return this.h};
m.Ab=function(){return this.j};D("YT.ImaManager",ni);ni.prototype.getAdsLoader=ni.prototype.Ab;ni.prototype.getAdsManager=ni.prototype.sb;var xi={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function yi(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in xi||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
yi.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
yi.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
yi.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=A.ytEventsEventsListeners||{};D("ytEventsEventsListeners",kb);var zi=A.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",zi);
function Ai(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ib(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=C(e[4])&&C(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Bi(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ci()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
var Ci=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Di(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Ai(a,b,c,d);if(!e){e=++zi.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new yi(h);if(!Rd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new yi(h);
h.currentTarget=a;return c.call(a,h)};
g=Sh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ci()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d]}}}
;function Ei(a,b){"function"===typeof a&&(a=Sh(a));return window.setTimeout(a,b)}
function Fi(a){"function"===typeof a&&(a=Sh(a));return window.setInterval(a,250)}
;function Q(a){a=Gi(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Hi(a,b){a=Gi(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Gi(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function Ii(){var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=P("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function Ji(a){var b=Ki;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ae;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ka){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Fd:g;try{var h=g.history.length}catch(ka){h=0}e.u_his=h;var k;e.u_h=null==(k=Fd.screen)?void 0:k.height;var l;e.u_w=null==(l=Fd.screen)?void 0:l.width;var n;e.u_ah=null==(n=Fd.screen)?void 0:n.availHeight;var q;e.u_aw=
null==(q=Fd.screen)?void 0:q.availWidth;var v;e.u_cd=null==(v=Fd.screen)?void 0:v.colorDepth}catch(ka){}h=b.h;try{var p=h.screenX;var z=h.screenY}catch(ka){}try{var y=h.outerWidth;var G=h.outerHeight}catch(ka){}try{var M=h.innerWidth;var K=h.innerHeight}catch(ka){}try{var N=h.screenLeft;var jb=h.screenTop}catch(ka){}try{M=h.innerWidth,K=h.innerHeight}catch(ka){}try{var uc=h.screen.availWidth;var bf=h.screen.availTop}catch(ka){}p=[N,jb,p,z,uc,bf,y,G,M,K];z=b.h.top;try{var ba=(z||window).document,S=
"CSS1Compat"==ba.compatMode?ba.documentElement:ba.body;var W=(new Gd(S.clientWidth,S.clientHeight)).round()}catch(ka){W=new Gd(-12245933,-12245933)}ba=W;W={};var X=void 0===X?A:X;S=new $e;X.SVGElement&&X.document.createElementNS&&S.set(0);z=Xd();z["allow-top-navigation-by-user-activation"]&&S.set(1);z["allow-popups-to-escape-sandbox"]&&S.set(2);X.crypto&&X.crypto.subtle&&S.set(3);X.TextDecoder&&X.TextEncoder&&S.set(4);X=af(S);W.bc=X;W.bih=ba.height;W.biw=ba.width;W.brdim=p.join();b=b.i;b=(W.vis=b.prerendering?
3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,W.wgl=!!Fd.WebGLRenderingContext,W);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Ki=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return $h(Ji(a))});Date.now();var Li="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function Mi(){if(!Li)return null;var a=Li();return"open"in a?a:null}
;var Ni={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Oi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha(ce)),Pi=!1;
function Qi(a,b){b=void 0===b?{}:b;var c=ci(a),d=Q("web_ajax_ignore_global_headers_if_set"),e;for(e in Ni){var f=P(Ni[e]);!f||!c&&oc(a)||d&&void 0!==b[e]||!Q("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=
g)}if(c||!oc(a))b["X-YouTube-Ad-Signals"]=$h(Ji());return b}
function Ri(a){var b=window.location.search,c=oc(a);Q("debug_handle_relative_url_for_query_forward_killswitch")||c||!ci(a)||(c=document.location.hostname);var d=nc(a.match(mc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ai(b),f={};F(Oi,function(g){e[g]&&(f[g]=e[g])});
return bi(a,f||{},!1)}
function Si(a,b){var c=b.format||"JSON";a=Ti(a,b);var d=Ui(a,b),e=!1,f=Vi(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,q=400<=k.status&&500>k.status,v=500<=k.status&&600>k.status;if(l||q||v)n=Wi(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=
!!n}n=n||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,n):b.onError&&b.onError.call(q,k,n);b.onFinish&&b.onFinish.call(q,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Ei(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function Ti(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=bi(a,b||{},!0);return a}
function Ui(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ai(e),ob(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):rc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;
break a}f=!0}a=!f}!Pi&&a&&"POST"!=b.method&&(Pi=!0,Th(Error("AJAX request with postData should use POST")));return e}
function Wi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Uh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Xi(a):null)e={},F(a.getElementsByTagName("*"),function(g){e[g.tagName]=Yi(g)})}d&&Zi(e);
return e}
function Zi(a){if(C(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;zb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===pb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Ta,createScript:Ta,createScriptURL:Ta})}catch(g){A.console&&A.console.error(g.message)}pb=e}else pb=e}d=(e=pb)?e.createHTML(d):d;a[c]=new hc(d)}else Zi(a[b])}}
function Xi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Yi(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Vi(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Sh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Mi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=Ri(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Qi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var $i={pc:"WEB_DISPLAY_MODE_UNKNOWN",lc:"WEB_DISPLAY_MODE_BROWSER",nc:"WEB_DISPLAY_MODE_MINIMAL_UI",oc:"WEB_DISPLAY_MODE_STANDALONE",mc:"WEB_DISPLAY_MODE_FULLSCREEN"};function aj(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;D("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var bj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},cj={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},dj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},ej={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function fj(){var a=A.navigator;return a?a.connection:void 0}
;function gj(){return"INNERTUBE_API_KEY"in Gh&&"INNERTUBE_API_VERSION"in Gh}
function hj(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Ka:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),cb:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Bb:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),fb:P("INNERTUBE_CONTEXT_HL"),eb:P("INNERTUBE_CONTEXT_GL"),Cb:P("INNERTUBE_HOST_OVERRIDE")||"",Eb:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Db:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ij(a){var b={client:{hl:a.fb,gl:a.eb,clientName:a.cb,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ka}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Ii();0<c.length&&(b.request={internalExperimentFlags:c});jj(a,void 0,b);kj(void 0,b);lj(a,void 0,b);mj(void 0,b);P("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&
(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(ai(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function nj(a){var b=new Zg,c=new Sg;I(c,1,a.fb);I(c,2,a.eb);I(c,16,a.Bb);I(c,17,a.innertubeContextClientVersion);if(a.Ka){var d=a.Ka,e=new Qg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,62,e)}(d=A.devicePixelRatio)&&1!=d&&I(c,65,d);d=P("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=Ii();if(0<d.length){e=new Ug;for(var f=0;f<d.length;f++){var g=new Og;I(g,1,d[f].key);g.setValue(d[f].value);
ud(e,15,Og,g)}J(b,5,e)}jj(a,c);kj(c);lj(a,c);mj(c);P("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(a=new Xg,I(a,3,P("DELEGATED_SESSION_ID")));a=t(Object.entries(ai(P("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,1,c);return b}
function jj(a,b,c){a=a.cb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=rd(b,Rg,96)||new Rg;var d=aj();d=Object.keys($i).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=aj())}
function kj(a,b){var c;if(Q("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function lj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=rd(b,Qg,62))?d:new Qg;I(c,6,a.appInstallData);J(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function mj(a,b){a:{var c=fj();if(c){var d=bj[c.type||"unknown"]||"CONN_UNKNOWN";c=bj[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,cj[d]):b&&(b.client.connectionType=d));Q("web_log_effective_connection_type")&&(d=fj(),d=null!=d&&d.effectiveType?ej.hasOwnProperty(d.effectiveType)?ej[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,dj[d]):
b&&(b.client.effectiveConnectionType=d)))}
function oj(a,b,c){c=void 0===c?{}:c;var d={};Q("enable_web_eom_visitor_data")&&P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.sc||P("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().qc:b=me([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function pj(a){a=Object.assign({},a);delete a.Authorization;var b=me();if(b){var c=new uf;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=Uc(c.digest(),3)}return a}
;function qj(a){var b=new Hg;(b=b.isAvailable()?a?new Ng(b,a):b:null)||(a=new Ig(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Dg(a):null;this.i=document.domain||window.location.hostname}
qj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(If(b))}catch(f){return}else e=escape(b);b=this.i;je.set(""+a,e,{La:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
qj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=je.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
qj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;je.remove(""+a,"/",void 0===b?"youtube.com":b)};var rj=window,T=rj.ytcsi&&rj.ytcsi.now?rj.ytcsi.now:rj.performance&&rj.performance.timing&&rj.performance.now&&rj.performance.timing.navigationStart?function(){return rj.performance.timing.navigationStart+rj.performance.now()}:function(){return(new Date).getTime()};var sj;function tj(){sj||(sj=new qj("yt.innertube"));return sj}
function uj(a,b,c,d){if(d)return null;d=tj().get("nextId",!0)||1;var e=tj().get("requests",!0)||{};e[d]={method:a,request:b,authState:pj(c),requestTime:Math.round(T())};tj().set("nextId",d+1,86400,!0);tj().set("requests",e,86400,!0);return d}
function vj(a){var b=tj().get("requests",!0)||{};delete b[a];tj().set("requests",b,86400,!0)}
function wj(a){var b=tj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=pj(oj(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),xj(a,d.method,e,{}));delete b[c]}}tj().set("requests",b,86400,!0)}}
;function yj(){}
function zj(a,b){return Aj(a,0,b)}
yj.prototype.S=function(a,b){return Aj(a,1,b)};
function Bj(a,b){Aj(a,2,b)}
;function Cj(){yj.apply(this,arguments)}
u(Cj,yj);function Dj(){Cj.h||(Cj.h=new Cj);return Cj.h}
function Aj(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Ei(a,c||0)}
Cj.prototype.fa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Cj.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var Ze=Dj();var Ej=Pc||Qc;var Fj=function(){var a;return function(){a||(a=new qj("ytidb"));return a}}();
function Gj(){var a;return null==(a=Fj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Hj=[],Ij=!1;function Jj(a){Ij||(Hj.push({type:"ERROR",payload:a}),10<Hj.length&&Hj.shift())}
function Kj(a,b){Ij||(Hj.push({type:"EVENT",eventType:a,payload:b}),10<Hj.length&&Hj.shift())}
;function Lj(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ha(b))}
u(Lj,Error);function Mj(){try{return Nj(),!0}catch(a){return!1}}
function Nj(){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new Lj("Datasync ID not set","unknown");}
;function Oj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Pj(a){return a.substr(0,a.indexOf(":"))||a}
;var Qj={},Rj=(Qj.AUTH_INVALID="No user identifier specified.",Qj.EXPLICIT_ABORT="Transaction was explicitly aborted.",Qj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Qj.MISSING_INDEX="Index not created.",Qj.MISSING_OBJECT_STORES="Object stores not created.",Qj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Qj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Qj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Qj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Qj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Qj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Qj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Qj),Sj={},Tj=(Sj.AUTH_INVALID="ERROR",Sj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Sj.EXPLICIT_ABORT="IGNORED",Sj.IDB_NOT_SUPPORTED="ERROR",Sj.MISSING_INDEX=
"WARNING",Sj.MISSING_OBJECT_STORES="ERROR",Sj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Sj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Sj.QUOTA_EXCEEDED="WARNING",Sj.QUOTA_MAYBE_EXCEEDED="WARNING",Sj.UNKNOWN_ABORT="WARNING",Sj.INCOMPATIBLE_DB_VERSION="WARNING",Sj),Uj={},Vj=(Uj.AUTH_INVALID=!1,Uj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Uj.EXPLICIT_ABORT=!1,Uj.IDB_NOT_SUPPORTED=!1,Uj.MISSING_INDEX=!1,Uj.MISSING_OBJECT_STORES=!1,Uj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Uj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Uj.QUOTA_EXCEEDED=!1,Uj.QUOTA_MAYBE_EXCEEDED=!0,Uj.UNKNOWN_ABORT=!0,Uj.INCOMPATIBLE_DB_VERSION=!1,Uj);function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Rj[a]:c;d=void 0===d?Tj[a]:d;e=void 0===e?Vj[a]:e;Lj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,U.prototype)}
u(U,Lj);function Wj(a,b){U.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Rj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Wj.prototype)}
u(Wj,U);function Xj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Xj.prototype)}
u(Xj,Error);var Yj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Zj(a,b,c,d){b=Pj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new U("QUOTA_EXCEEDED",a);if(Rc&&"UnknownError"===e.name)return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Xj)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Yj.some(function(f){return e.message.includes(f)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",xc:e.name})];e.level="WARNING";return e}
function ak(a,b,c){var d=Gj();return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function bk(a){if(!a)throw Error();throw a;}
function ck(a){return a}
function dk(a){this.h=a}
function V(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
V.all=function(a){return new V(new dk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ia:0};f.ia<a.length;f={ia:f.ia},++f.ia)ek(V.resolve(a[f.ia]).then(function(g){return function(h){d[g.ia]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
V.resolve=function(a){return new V(new dk(function(b,c){a instanceof V?a.then(b,c):b(a)}))};
V.reject=function(a){return new V(new dk(function(b,c){c(a)}))};
V.prototype.then=function(a,b){var c=this,d=null!=a?a:ck,e=null!=b?b:bk;return new V(new dk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){fk(c,c,d,f,g)}),c.onRejected.push(function(){gk(c,c,e,f,g)})):"FULFILLED"===c.state.status?fk(c,c,d,f,g):"REJECTED"===c.state.status&&gk(c,c,e,f,g)}))};
function ek(a,b){a.then(void 0,b)}
function fk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof V?hk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function gk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof V?hk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function hk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof V?hk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ik(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function jk(a){return new Promise(function(b,c){ik(a,b,c)})}
function Y(a){return new V(new dk(function(b,c){ik(a,b,c)}))}
;function kk(a,b){return new V(new dk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function $k(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
m=$k.prototype;m.add=function(a,b,c){return al(this,[a],{mode:"readwrite",M:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return al(this,[a],{mode:"readwrite",M:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return al(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).count(b)})};
function bl(a,b,c){a=a.h.createObjectStore(b,c);return new cl(a)}
m.delete=function(a,b){return al(this,[a],{mode:"readwrite",M:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return al(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).get(b)})};
function dl(a,b){return al(a,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(c){c=c.objectStore("LogsRequestsStore");return Y(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function al(a,b,c,d){var e,f,g,h,k,l,n,q,v,p,z,y;return x(function(G){switch(G.h){case 1:var M={mode:"readonly",M:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.M?3:1;g=0;case 2:if(h){G.s(3);break}g++;k=Math.round(T());va(G,4);l=a.h.transaction(b,e.mode);M=new el(l);M=fl(M,d);return w(G,M,6);case 6:return n=G.i,q=Math.round(T()),gl(a,k,q,g,void 0,b.join(),e),G.return(n);case 4:v=xa(G);p=Math.round(T());z=Zj(v,a.h.name,b.join(),a.h.version);
if((y=z instanceof U&&!z.h)||g>=f)gl(a,k,p,g,z,b.join(),e),h=z;G.s(2);break;case 3:return G.return(Promise.reject(h))}})}
function gl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Kj("QUOTA_EXCEEDED",{dbName:Pj(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Kj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),hl(a,!1,d,f,b,g.tag),Jj(e)):hl(a,!0,d,f,b,g.tag)}
function hl(a,b,c,d,e,f){Kj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function cl(a){this.h=a}
m=cl.prototype;m.add=function(a,b){return Y(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Y(this.h.clear()).then(function(){})};
m.count=function(a){return Y(this.h.count(a))};
function il(a,b){return jl(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?il(this,a):Y(this.h.delete(a))};
m.get=function(a){return Y(this.h.get(a))};
m.index=function(a){try{return new kl(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Xj(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function jl(a,b,c){a=a.h.openCursor(b.query,b.direction);return ll(a).then(function(d){return kk(d,c)})}
function el(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=U;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function fl(a,b){var c=new Promise(function(d,e){try{ek(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
el.prototype.abort=function(){this.h.abort();this.i=!0;throw new U("EXPLICIT_ABORT");};
el.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new cl(a),this.j.set(a,b));return b};
function kl(a){this.h=a}
m=kl.prototype;m.count=function(a){return Y(this.h.count(a))};
m.delete=function(a){return ml(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Y(this.h.get(a))};
m.getKey=function(a){return Y(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function ml(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return ll(a).then(function(d){return kk(d,c)})}
function nl(a,b){this.request=a;this.cursor=b}
function ll(a){return Y(a).then(function(b){return b?new nl(a,b):null})}
m=nl.prototype;m.advance=function(a){this.cursor.advance(a);return ll(this.request)};
m.continue=function(a){this.cursor.continue(a);return ll(this.request)};
m.delete=function(){return Y(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.da=function(){return this.cursor.value};
m.update=function(a){return Y(this.cursor.update(a))};function ol(a,b,c){return new Promise(function(d,e){function f(){v||(v=new $k(g.result,{closed:q}));return v}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.Ub,n=c.upgrade,q=c.closed,v;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Kj("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Pj(a)});var z=f(),y=new el(g.transaction);
n&&n(z,function(G){return p.oldVersion<G&&p.newVersion>=G},y);
y.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Kj("IDB_UNEXPECTEDLY_CLOSED",{dbName:Pj(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function pl(a,b,c){c=void 0===c?{}:c;return ol(a,b,c)}
function ql(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,jk(c),4);
if(2!=g.h)return wa(g,0);f=xa(g);throw Zj(f,a,"",-1);})}
;function rl(a){return new Promise(function(b){Bj(function(){b()},a)})}
function sl(a,b){this.name=a;this.options=b;this.l=!0;this.u=this.m=0;this.i=500}
sl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return pl(a,b,c)};
sl.prototype.delete=function(a){a=void 0===a?{}:a;return ql(this.name,a)};
function tl(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function ul(a,b){if(!b)throw ak("openWithToken",Pj(a.name));return a.open()}
sl.prototype.open=function(){function a(){var f,g,h,k,l,n,q,v,p,z;return x(function(y){switch(y.h){case 1:return g=null!=(f=Error().stack)?f:"",va(y,2),w(y,c.j(c.name,c.options.version,e),4);case 4:h=y.i;for(var G=c.options,M=[],K=t(Object.keys(G.sa)),N=K.next();!N.done;N=K.next()){N=N.value;var jb=G.sa[N],uc=void 0===jb.Sb?Number.MAX_VALUE:jb.Sb;!(h.h.version>=jb.Ia)||h.h.version>=uc||h.h.objectStoreNames.contains(N)||M.push(N)}k=M;if(0===k.length){y.s(5);break}l=Object.keys(c.options.sa);n=h.objectStoreNames();
if(c.u<Hi("ytidb_reopen_db_retries",0))return c.u++,h.close(),Jj(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());if(!(c.m<Hi("ytidb_remake_db_retries",1))){y.s(6);break}c.m++;if(!Q("ytidb_remake_db_enable_backoff_delay")){y.s(7);break}return w(y,rl(c.i),8);case 8:c.i*=2;case 7:return w(y,c.delete(),9);case 9:return Jj(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),y.return(a());
case 6:throw new Wj(n,l);case 5:return y.return(h);case 2:q=xa(y);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){y.s(10);break}return w(y,c.j(c.name,void 0,Object.assign({},e,{upgrade:void 0})),11);case 11:v=y.i;p=v.h.version;if(void 0!==c.options.version&&p>c.options.version+1)throw v.close(),
c.l=!1,tl(c,p);return y.return(v);case 10:throw b(),q instanceof Error&&!Q("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),Zj(q,c.name,"",null!=(z=c.options.version)?z:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw tl(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Ub:b,upgrade:this.options.upgrade};return this.h=d=a()};var vl=new sl("YtIdbMeta",{sa:{databases:{Ia:1}},upgrade:function(a,b){b(1)&&bl(a,"databases",{keyPath:"actualName"})}});
function wl(a,b){var c;return x(function(d){if(1==d.h)return w(d,ul(vl,b),2);c=d.i;return d.return(al(c,["databases"],{M:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Y(f.h.put(a,void 0)).then(function(){})})}))})}
function xl(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,ul(vl,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function yl(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,ul(vl,b),2)):3!=e.h?(d=e.i,w(e,al(d,["databases"],{M:!0,mode:"readonly"},function(f){c.length=0;return jl(f.objectStore("databases"),{},function(g){a(g.da())&&c.push(g.da());return g.continue()})}),3)):e.return(c)})}
function zl(a){return yl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Al,Bl=new function(){}(new function(){});
function Cl(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=Gj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ej)f=/WebKit\/([0-9]+)/.exec(ec()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(ec()),f=!(f&&602<=parseInt(f[1],10)));if(f||zc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,wl(d,Bl),4);case 4:return w(e,xl("yt-idb-test-do-not-use",Bl),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function Dl(){if(void 0!==Al)return Al;Ij=!0;return Al=Cl().then(function(a){Ij=!1;var b;if(null!=(b=Fj())&&b.h){var c;b={hasSucceededOnce:(null==(c=Gj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Fj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function El(){return B("ytglobal.idbToken_")||void 0}
function Fl(){var a=El();return a?Promise.resolve(a):Dl().then(function(b){(b=b?Bl:void 0)&&D("ytglobal.idbToken_",b);return b})}
;new Jf;function Gl(a){if(!Mj())throw a=new U("AUTH_INVALID",{dbName:a}),Jj(a),a;var b=Nj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Hl(a,b,c,d){var e,f,g,h,k,l;return x(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",w(n,Fl(),2);case 2:g=n.i;if(!g)throw h=ak("openDbImpl",a,b),Q("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Jj(h),h;Oj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Gl(a);va(n,3);return w(n,wl(k,g),5);case 5:return w(n,pl(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=xa(n),va(n,7),w(n,xl(k.actualName,g),9);case 9:wa(n,
8);break;case 7:xa(n);case 8:throw l;}})}
function Il(a,b,c){c=void 0===c?{}:c;return Hl(a,b,!1,c)}
function Jl(a,b,c){c=void 0===c?{}:c;return Hl(a,b,!0,c)}
function Kl(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Fl(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Oj(a);d=Gl(a);return w(e,ql(d.actualName,b),3)}return w(e,xl(d.actualName,c),0)})}
function Ll(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,ql(d.actualName,b),2):w(e,xl(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Ml(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Fl(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Oj("LogsDatabaseV2");return w(d,zl(b),3)}c=d.i;return w(d,Ll(c,a,b),0)})}
function Nl(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Fl(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Oj(a);return w(d,ql(a,b),3)}return w(d,xl(a,c),0)})}
;function Ol(a){this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ka=function(){};
this.now=Date.now;this.ra=!1;var b;this.pb=null!=(b=a.pb)?b:100;var c;this.ob=null!=(c=a.ob)?c:1;var d;this.mb=null!=(d=a.mb)?d:2592E6;var e;this.lb=null!=(e=a.lb)?e:12E4;var f;this.nb=null!=(f=a.nb)?f:5E3;var g;this.v=null!=(g=a.v)?g:void 0;this.Ba=!!a.Ba;var h;this.Aa=null!=(h=a.Aa)?h:.1;var k;this.Fa=null!=(k=a.Fa)?k:10;a.handleError&&(this.handleError=a.handleError);a.ka&&(this.ka=a.ka);a.ra&&(this.ra=a.ra);this.C=a.C;this.P=a.P;this.G=a.G;this.K=a.K;this.Z=a.Z;this.Pa=a.Pa;this.Na=a.Na;this.v&&
(!this.C||this.C("networkless_logging"))&&Pl(this)}
function Pl(a){a.v&&!a.ra&&(a.h=!0,a.Ba&&Math.random()<=a.Aa&&a.G.wb(a.v),Ql(a),a.K.J()&&a.wa(),a.K.X(a.Pa,a.wa.bind(a)),a.K.X(a.Na,a.Va.bind(a)))}
m=Ol.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.G.set(d,this.v).then(function(e){d.id=e;c.K.J()&&Rl(c,d)}).catch(function(e){Rl(c,d);
Sl(c,e)})}else this.Z(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.K.J()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.G.set(e,d.v).catch(function(l){Sl(d,l)}),2);
f(g,h);k.h=0})}}this.Z(a,b,e.skipRetry)}else this.G.set(e,this.v).catch(function(g){d.Z(a,b,e.skipRetry);
Sl(d,g)})}else this.Z(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.G.ja(d.id,c.v):e=!0;c.K.Y&&c.C&&c.C("vss_network_hint")&&c.K.Y(!0);f(g,h)};
this.Z(d.url,d.options);this.G.set(d,this.v).then(function(g){d.id=g;e&&c.G.ja(d.id,c.v)}).catch(function(g){Sl(c,g)})}else this.Z(a,b)};
m.wa=function(){var a=this;if(!this.v)throw ak("throttleSend");this.i||(this.i=this.P.S(function(){var b;return x(function(c){if(1==c.h)return w(c,a.G.bb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?w(c,Rl(a,b),3):(a.Va(),c.return());a.i&&(a.i=0,a.wa());c.h=0})},this.pb))};
m.Va=function(){this.P.fa(this.i);this.i=0};
function Rl(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.v)throw c=ak("immediateSend"),c;if(void 0===b.id){e.s(2);break}return w(e,a.G.Fb(b.id,a.v),3);case 3:(d=e.i)?b=d:a.ka(Error("The request cannot be found in the database."));case 2:if(Tl(a,b,a.mb)){e.s(4);break}a.ka(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return w(e,a.G.ja(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=Ul(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return w(e,a.G.ja(b.id,a.v),8);case 8:a.Z(b.url,b.options,!!b.skipRetry),e.h=0}})}
function Ul(a,b){if(!a.v)throw ak("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.h){case 1:g=Vl(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Fa)){l.s(2);break}if(!a.K.aa){l.s(3);break}return w(l,a.K.aa(),3);case 3:if(a.K.J()){l.s(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.s(6);break}return w(l,a.G.Qa(b.id,a.v,!1),6);case 6:return l.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Fa)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.s(8);break}return b.sendCount<a.ob?w(l,a.G.Qa(b.id,a.v),12):w(l,a.G.ja(b.id,a.v),8);case 12:a.P.S(function(){a.K.J()&&a.wa()},a.nb);
case 8:c(e,f),l.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):w(h,a.G.ja(b.id,a.v),2);a.K.Y&&a.C&&a.C("vss_network_hint")&&a.K.Y(!0);d(e,f);h.h=0})};
return b}
function Tl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ql(a){if(!a.v)throw ak("retryQueuedRequests");a.G.bb("QUEUED",a.v).then(function(b){b&&!Tl(a,b,a.lb)?a.P.S(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.s(2):w(c,a.G.Qa(b.id,a.v),2);Ql(a);c.h=0})}):a.K.J()&&a.wa()})}
function Sl(a,b){a.qb&&!a.K.J()?a.qb(b):a.handleError(b)}
function Vl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var Wl=B("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.xa;O.prototype.publish=O.prototype.ma;O.prototype.clear=O.prototype.clear;D("ytPubsub2Pubsub2Instance",Wl);D("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});D("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});D("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});D("ytPubsub2Pubsub2SkipSubKey",null);function Xl(a,b){sl.call(this,a,b);this.options=b;Oj(a)}
u(Xl,sl);function Yl(a,b){var c;return function(){c||(c=new Xl(a,b));return c}}
Xl.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ra?Jl:Il)(a,b,Object.assign({},c))};
Xl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ra?Nl:Kl)(this.name,a)};
function Zl(a,b){return Yl(a,b)}
;var $l;
function am(){if($l)return $l();var a={};$l=Zl("LogsDatabaseV2",{sa:(a.LogsRequestsStore={Ia:2},a),Ra:!1,upgrade:function(b,c,d){c(2)&&bl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return $l()}
;function bm(a){return ul(am(),a)}
function cm(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,bm(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,dl(d,e),3);f=g.i;c.Vb=T();dm(c);return g.return(f)})}
function em(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,bm(b),2);if(3!=l.h)return d=l.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,al(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(n){return ml(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.da()&&(k=q.da(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.Vb=T();dm(c);return l.return(k)})}
function fm(a,b){var c;return x(function(d){if(1==d.h)return w(d,bm(b),2);c=d.i;return d.return(al(c,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Y(f.h.put(g,void 0)).then(function(){return g})})}))})}
function gm(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return w(e,bm(b),2);d=e.i;return e.return(al(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Y(g.h.put(h,void 0)).then(function(){return h})):V.resolve(void 0)})}))})}
function hm(a,b){var c;return x(function(d){if(1==d.h)return w(d,bm(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function im(a){var b,c;return x(function(d){if(1==d.h)return w(d,bm(a),2);b=d.i;c=T()-2592E6;return w(d,al(b,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){return jl(e.objectStore("LogsRequestsStore"),{},function(f){if(f.da().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function jm(){x(function(a){return w(a,Ml(),0)})}
function dm(a){if(!Q("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var km={},lm=Zl("ServiceWorkerLogsDatabase",{sa:(km.SWHealthLog={Ia:1},km),Ra:!0,upgrade:function(a,b){b(1)&&bl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function mm(a){return ul(lm(),a)}
function nm(a){var b,c;x(function(d){if(1==d.h)return w(d,mm(a),2);b=d.i;c=T()-2592E6;return w(d,al(b,["SWHealthLog"],{mode:"readwrite",M:!0},function(e){return jl(e.objectStore("SWHealthLog"),{},function(f){if(f.da().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function om(a){var b;return x(function(c){if(1==c.h)return w(c,mm(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var pm={},qm=0;function rm(a){var b=void 0===b?"":b;if(a)if(b)Vi(a,void 0,"POST",b);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Vi(a,void 0,"GET","");else{b:{try{var c=new Ya({url:a});if(c.j&&c.i||c.l){var d=nc(a.match(mc)[5]||null);var e=!(!d||!d.endsWith("/aclk")||"1"!==tc(a,"ri"));break b}}catch(g){}e=!1}if(e){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var f=!0;break b}}catch(g){}f=!1}b=f?!0:!1}else b=!1;b||sm(a)}}
function sm(a){var b=new Image,c=""+qm++;pm[c]=b;b.onload=b.onerror=function(){delete pm[c]};
b.src=a}
;function tm(){this.h=new Map;this.i=!1}
function um(){if(!tm.h){var a=B("yt.networkRequestMonitor.instance")||new tm;D("yt.networkRequestMonitor.instance",a);tm.h=a}return tm.h}
tm.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
tm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
tm.prototype.removeParams=function(a){return a.split("?")[0]};
tm.prototype.removeParams=tm.prototype.removeParams;tm.prototype.isEndpointCFR=tm.prototype.isEndpointCFR;tm.prototype.requestComplete=tm.prototype.requestComplete;tm.getInstance=um;var vm;function wm(){vm||(vm=new qj("yt.offline"));return vm}
function xm(a){if(Q("offline_error_handling")){var b=wm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);wm().set("errors",b,2592E3,!0)}}
function ym(){if(Q("offline_error_handling")){var a=wm().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Lj(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Th(c)}wm().set("errors",{},2592E3,!0)}}}
;var zm=Hi("network_polling_interval",3E4);function Z(){Se.call(this);var a=this;this.V=0;this.A=this.m=!1;this.i=this.Ja();Q("use_shared_nsm")?(this.h=Ye(),Q("use_shared_nsm_and_keep_yt_online_updated")&&(this.h.X("networkstatus-online",function(){a.i=!0;a.A&&ym()}),this.h.X("networkstatus-offline",function(){a.i=!1}))):(Am(this),Bm(this))}
u(Z,Se);function Cm(){if(!Z.h){var a=B("yt.networkStatusManager.instance")||new Z;D("yt.networkStatusManager.instance",a);Z.h=a}return Z.h}
m=Z.prototype;m.J=function(){if(Q("use_shared_nsm")&&this.h){var a;return null==(a=this.h)?void 0:a.J()}return this.i};
m.Y=function(a){if(Q("use_shared_nsm")&&this.h){var b;null!=(b=this.h)&&(b.h=a)}else a!==this.i&&(this.i=a)};
m.Gb=function(a){!Q("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.V||Dm(this))};
m.Ja=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.yb=function(){this.A=!0};
m.X=function(a,b){return Q("use_shared_nsm")&&this.h?this.h.X(a,b):Se.prototype.X.call(this,a,b)};
function Bm(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return w(b,a.aa(),2);a.A&&ym();b.h=0})})}
function Am(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.aa(),0)})})}
function Dm(a){a.V=zj(function(){return x(function(b){if(1==b.h)return a.i?a.Ja()||!a.m?b.s(3):w(b,a.aa(),3):w(b,a.aa(),3);Dm(a);b.h=0})},zm)}
m.aa=function(a){var b=this;if(Q("use_shared_nsm")&&this.h){var c=We(this.h,a);c.then(function(d){Q("use_cfr_monitor")&&um().requestComplete("generate_204",d)});
return c}return this.o?this.o:this.o=new Promise(function(d){var e,f,g,h;return x(function(k){switch(k.h){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,va(k,2,3),e&&(b.L=Ze.S(function(){e.abort()},a||2E4)),w(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:ya(k);Q("use_cfr_monitor")&&um().requestComplete("generate_204",h);b.o=void 0;b.L&&Ze.fa(b.L);h!==b.i&&(b.i=h,b.i&&b.m?Te(b,"ytnetworkstatus-online"):b.m&&Te(b,"ytnetworkstatus-offline"));d(h);za(k);break;case 2:xa(k),h=!1,k.s(3)}})})};
Z.prototype.sendNetworkCheckRequest=Z.prototype.aa;Z.prototype.listen=Z.prototype.X;Z.prototype.enableErrorFlushing=Z.prototype.yb;Z.prototype.getWindowStatus=Z.prototype.Ja;Z.prototype.monitorNetworkStatusChange=Z.prototype.Gb;Z.prototype.networkStatusHint=Z.prototype.Y;Z.prototype.isNetworkAvailable=Z.prototype.J;Z.getInstance=Cm;function Em(a){a=void 0===a?{}:a;Se.call(this);var b=this;this.i=this.L=0;this.m="ytnetworkstatus-offline";this.o="ytnetworkstatus-online";Q("use_shared_nsm")&&(this.m="networkstatus-offline",this.o="networkstatus-online");this.h=Cm();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.h);c&&c(a.Za);a.hb&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.h))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.h))a.Ga?(this.Ga=a.Ga,c(this.o,
function(){Fm(b,"publicytnetworkstatus-online")}),c(this.m,function(){Fm(b,"publicytnetworkstatus-offline")})):(c(this.o,function(){Te(b,"publicytnetworkstatus-online")}),c(this.m,function(){Te(b,"publicytnetworkstatus-offline")}))}
u(Em,Se);Em.prototype.J=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.h)():!0};
Em.prototype.Y=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.h);b&&b(a)};
Em.prototype.aa=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.h);return Q("skip_network_check_if_cfr")&&um().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Y((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.J())})):c?d.return(c(a)):d.return(!0)})};
function Fm(a,b){a.Ga?a.i?(Ze.fa(a.L),a.L=Ze.S(function(){a.A!==b&&(Te(a,b),a.A=b,a.i=T())},a.Ga-(T()-a.i))):(Te(a,b),a.A=b,a.i=T()):Te(a,b)}
;var Gm;function Hm(){Ol.call(this,{G:{wb:im,ja:hm,bb:em,Fb:fm,Qa:gm,set:cm},K:Im(),handleError:Th,ka:Uh,Z:Jm,now:T,qb:xm,P:Dj(),Pa:"publicytnetworkstatus-online",Na:"publicytnetworkstatus-offline",Ba:!0,Aa:.1,Fa:Hi("potential_esf_error_limit",10),C:Q,ra:!(Mj()&&(Q("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==oc(document.location.toString()):1))});this.j=new Jf;Q("networkless_immediately_drop_all_requests")&&jm();Nl("LogsDatabaseV2")}
u(Hm,Ol);function Km(){var a=B("yt.networklessRequestController.instance");a||(a=new Hm,D("yt.networklessRequestController.instance",a),Q("networkless_logging")&&Fl().then(function(b){a.v=b;Pl(a);a.j.resolve();a.Ba&&Math.random()<=a.Aa&&a.v&&nm(a.v);Q("networkless_immediately_drop_sw_health_store")&&Lm(a)}));
return a}
Hm.prototype.writeThenSend=function(a,b){b||(b={});Mj()||(this.h=!1);Ol.prototype.writeThenSend.call(this,a,b)};
Hm.prototype.sendThenWrite=function(a,b,c){b||(b={});Mj()||(this.h=!1);Ol.prototype.sendThenWrite.call(this,a,b,c)};
Hm.prototype.sendAndWrite=function(a,b){b||(b={});Mj()||(this.h=!1);Ol.prototype.sendAndWrite.call(this,a,b)};
Hm.prototype.awaitInitialization=function(){return this.j.promise};
function Lm(a){var b;x(function(c){if(!a.v)throw b=ak("clearSWHealthLogsDb"),b;return c.return(om(a.v).catch(function(d){a.handleError(d)}))})}
function Jm(a,b,c){Q("use_cfr_monitor")&&Mm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T());c&&0===Object.keys(b).length?rm(a):Si(a,b)}
function Im(){Gm||(Gm=new Em({hb:!0,Za:!0}));return Gm}
function Mm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){um().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){um().requestComplete(a,!0);d(e,f)}}
;var Nm=0,Om=0,Pm,Qm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:Om};D("ytNetworklessLoggingInitializationOptions",Qm);function Rm(a,b){function c(d){var e=Sm().J();if(!Tm()||!d||e&&Q("vss_networkless_bypass_write"))Um(a,b);else{var f={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0};cm(f,d).then(function(g){f.id=g;Sm().J()&&Vm(f)}).catch(function(g){Vm(f);
Sm().J()?Th(g):xm(g)})}}
b=void 0===b?{}:b;Q("skip_is_supported_killswitch")?Fl().then(function(d){c(d)}):c(El())}
function Wm(a,b){function c(d){if(Tm()&&d){var e={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){Q("use_cfr_monitor")&&um().requestComplete(e.url,!0);void 0!==e.id?hm(e.id,d):f=!0;Q("vss_network_hint")&&Sm().Y(!0);g(k,l)};
if(Q("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){um().requestComplete(e.url,!1);h(k,l)}}Um(e.url,e.options);
cm(e,d).then(function(k){e.id=k;f&&hm(e.id,d)}).catch(function(k){Sm().J()?Th(k):xm(k)})}else Um(a,b)}
b=void 0===b?{}:b;Q("skip_is_supported_killswitch")?Fl().then(function(d){c(d)}):c(El())}
function Xm(){var a=El();if(!a)throw ak("throttleSend");Nm||(Nm=Ze.S(function(){var b;return x(function(c){if(1==c.h)return w(c,em("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,Vm(b),3):(Ze.fa(Nm),Nm=0,c.return());Nm&&(Nm=0,Xm());c.h=0})},100))}
function Vm(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=El();if(!b)throw c=ak("immediateSend"),c;if(void 0===a.id){e.s(2);break}return w(e,fm(a.id,b),3);case 3:(d=e.i)?a=d:Uh(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=T()-f)){e.s(4);break}Uh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return w(e,hm(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Ym(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(T());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return w(e,hm(a.id,b),8);case 8:Um(a.url,a.options,!!a.skipRetry),e.h=0}})}
function Ym(a){var b=El();if(!b)throw ak("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.h){case 1:Q("use_cfr_monitor")&&um().requestComplete(a.url,!1);g=Vl(f);if(!(Q("nwl_consider_error_code")&&g||!Q("nwl_consider_error_code")&&Zm()<=Hi("potential_esf_error_limit",10))){l.s(2);break}if(Q("skip_checking_network_on_cfr_failure")&&(!Q("skip_checking_network_on_cfr_failure")||um().isEndpointCFR(a.url))){l.s(3);break}return w(l,Sm().aa(),3);case 3:if(Sm().J()){l.s(2);break}c(e,f);if(!Q("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.s(6);break}return w(l,gm(a.id,b,!1),6);case 6:return l.return();case 2:if(Q("nwl_consider_error_code")&&!g&&Zm()>Hi("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&Qm.potentialEsfErrorCounter++;Om++;if(void 0===(null==(k=a)?void 0:k.id)){l.s(8);break}return 1>a.sendCount?w(l,gm(a.id,b),12):w(l,hm(a.id,b),8);case 12:Ze.S(function(){Sm().J()&&Xm()},5E3);
case 8:c(e,f),l.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return Q("use_cfr_monitor")&&um().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):w(h,hm(a.id,b),2);Q("vss_network_hint")&&Sm().Y(!0);d(e,f);h.h=0})};
return a}
function Sm(){if(Q("use_new_nwl"))return Im();Pm||(Pm=new Em({hb:!0,Za:!0}));return Pm}
function Um(a,b,c){c&&0===Object.keys(b).length?rm(a):Si(a,b)}
function Tm(){return B("ytNetworklessLoggingInitializationOptions")?Qm.isNwlInitialized:!1}
function Zm(){return B("ytNetworklessLoggingInitializationOptions")?Qm.potentialEsfErrorCounter:Om}
;function $m(a){var b=this;this.config_=null;a?this.config_=a:gj()&&(this.config_=hj());zj(function(){wj(b)},5E3)}
$m.prototype.isReady=function(){!this.config_&&gj()&&(this.config_=hj());return!!this.config_};
function xj(a,b,c,d){function e(z){z=void 0===z?!1:z;var y;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||Q("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(y=uj(b,c,l,k)),y)){var G=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(K,N){vj(y);G(K,N)};
c.onFetchSuccess=function(K,N){vj(y);M(K,N)}}try{z&&d.retry&&!d.ib.bypassNetworkless?(g.method="POST",d.ib.writeThenSend?Q("use_new_nwl_wts")?Km().writeThenSend(p,g):Rm(p,g):Q("use_new_nwl_saw")?Km().sendAndWrite(p,g):Wm(p,g)):(g.method="POST",g.postParams||(g.postParams={}),Si(p,g))}catch(K){if("InvalidAccessError"==K.name)y&&(vj(y),y=0),Uh(Error("An extension is blocking network request."));
else throw K;}y&&zj(function(){wj(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Uh(new Lj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Lj("innertube xhrclient not ready",b,c,d);Th(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,y){if(d.onSuccess)d.onSuccess(y)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,y){if(d.onError)d.onError(y)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Cb)&&(h=f);var k=a.config_.Eb||!1,l=oj(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},v=a.config_.Db&&f;v=v&&f.startsWith("Bearer");v||(q.key=a.config_.innertubeApiKey);var p=bi(""+h+n,q||{},!0);Q("use_new_nwl")&&Km().h||!Q("use_new_nwl")&&
Tm()?Dl().then(function(z){e(z)}):e(!1)}
;var an={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},bn={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function cn(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var dn=A.ytPubsubPubsubInstance||new O,en=A.ytPubsubPubsubSubscribedKeys||{},fn=A.ytPubsubPubsubTopicToKeys||{},gn=A.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.xa;O.prototype.publish=O.prototype.ma;O.prototype.clear=O.prototype.clear;D("ytPubsubPubsubInstance",dn);D("ytPubsubPubsubTopicToKeys",fn);D("ytPubsubPubsubIsSynchronous",gn);D("ytPubsubPubsubSubscribedKeys",en);var hn=Hi("initial_gel_batch_timeout",2E3),jn=Math.pow(2,16)-1,kn=void 0;function ln(){this.j=this.h=this.i=0}
var mn=new ln,nn=new ln,on=!0,pn=A.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",pn);var qn=A.ytLoggingTransportGELProtoQueue_||new Map;D("ytLoggingTransportGELProtoQueue_",qn);var rn=A.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",rn);var sn=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};D("ytLoggingTransportTokensToJspbCttTargetIds_",sn);
function tn(a,b){if("log_event"===a.endpoint){var c=un(a),d=pn.get(c)||[];pn.set(c,d);d.push(a.payload);vn(b,d,c)}}
function wn(a,b){if("log_event"===a.endpoint){var c=un(a,!0),d=qn.get(c)||[];qn.set(c,d);a=yd(a.payload);d.push(a);vn(b,d,c,!0)}}
function vn(a,b,c,d){d=void 0===d?!1:d;a&&(kn=new a);a=Hi("tvhtml5_logging_max_batch")||Hi("web_logging_max_batch")||100;var e=T(),f=d?nn.j:mn.j;b.length>=a?xn({writeThenSend:!0},Q("flush_only_full_queue")?c:void 0,d):10<=e-f&&(yn(d),d?nn.j=e:mn.j=e)}
function zn(a,b){if("log_event"===a.endpoint){var c=un(a),d=new Map;d.set(c,[a.payload]);b&&(kn=new b);return new Kf(function(e){kn&&kn.isReady()?An(d,e,{bypassNetworkless:!0},!0):e()})}}
function Bn(a,b){if("log_event"===a.endpoint){var c=un(a,!0),d=new Map;d.set(c,[yd(a.payload)]);b&&(kn=new b);return new Kf(function(e){kn&&kn.isReady()?Cn(d,e,{bypassNetworkless:!0},!0):e()})}}
function un(a,b){var c="";if(a.qa)c="visitorOnlyApprovedKey";else if(a.W){if(void 0===b?0:b){b=a.W.token;c=a.W;var d=new rh;c.videoId?d.setVideoId(c.videoId):c.playlistId&&pd(d,2,sh,c.playlistId);sn[b]=d}else b=a.W,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),rn[a.W.token]=c;c=a.W.token}return c}
function xn(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Kf(function(d){c?(window.clearTimeout(nn.i),window.clearTimeout(nn.h),nn.h=0):(window.clearTimeout(mn.i),window.clearTimeout(mn.h),mn.h=0);if(kn&&kn.isReady())if(void 0!==b)if(c){var e=new Map,f=qn.get(b)||[];e.set(b,f);Cn(e,d,a);qn.delete(b)}else e=new Map,f=pn.get(b)||[],e.set(b,f),An(e,d,a),pn.delete(b);else c?(Cn(qn,d,a),qn.clear()):(An(pn,d,a),pn.clear());else yn(c),d()})}
function yn(a){a=void 0===a?!1:a;if(Q("web_gel_timeout_cap")&&(!a&&!mn.h||a&&!nn.h)){var b=Ei(function(){xn({writeThenSend:!0},void 0,a)},6E4);
a?nn.h=b:mn.h=b}window.clearTimeout(a?nn.i:mn.i);b=P("LOGGING_BATCH_TIMEOUT",Hi("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&on&&(b=hn);b=Ei(function(){xn({writeThenSend:!0},void 0,a)},b);
a?nn.i=b:mn.i=b}
function An(a,b,c,d){var e=kn;c=void 0===c?{}:c;var f=Math.round(T()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=mb({context:ij(e.config_||hj())});k.events=l;(l=rn[h])&&Dn(k,h,l);delete rn[h];h="visitorOnlyApprovedKey"===h;En(k,f,h);Fn(c);xj(e,"log_event",k,Gn(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
on=!1}}
function Cn(a,b,c,d){var e=kn;c=void 0===c?{}:c;var f=Math.round(T()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=new th;var n=nj(e.config_||hj());J(k,1,n);l=Hn(l);for(n=0;n<l.length;n++)ud(k,3,oh,l[n]);(l=sn[h])&&In(k,h,l);delete sn[h];h="visitorOnlyApprovedKey"===h;Jn(k,f,h);Fn(c);k=yd(k);h=Gn(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;xj(e,"log_event","",h);on=!1}}
function Fn(a){Q("always_send_and_write")&&(a.writeThenSend=!1)}
function Gn(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,ib:a,qa:b,uc:!!e,headers:{},postBodyFormat:"",postBody:""}}
function En(a,b,c){a.requestTimeMs=String(b);Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&(c=Kn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Jn(a,b,c){I(a,2,b);if(!c&&(b=P("EVENT_ID"))){c=Kn();var d=new qh;I(d,1,b);I(d,2,c);J(a,5,d)}}
function Kn(){var a=P("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*jn/2));a++;a>jn&&(a=1);Nh("BATCH_CLIENT_COUNTER",a);return a}
function Dn(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function In(a,b,c){if(nd(c,1===qd(c,sh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,4,c);a=rd(a,Zg,1)||new Zg;c=rd(a,Xg,3)||new Xg;var e=new Wg;e.setToken(b);I(e,1,d);ud(c,12,Wg,e);J(a,3,c)}
function Hn(a){for(var b=[],c=0;c<a.length;c++)try{var d=b,e=d.push;var f=String(a[c]),g=oh;if(null==f||""==f)var h=new g;else{var k=JSON.parse(f);if(!Array.isArray(k))throw Error("Expected to deserialize an Array but got "+La(k)+": "+k);xd=k;var l=new g(k);xd=null;h=l}e.call(d,h)}catch(n){Th(new Lj("Transport failed to deserialize "+String(a[c])))}return b}
;var Ln=A.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ln);function Mn(a){Ln[a]=a in Ln?Ln[a]+1:0;return Ln[a]}
;function Nn(a,b){var c=void 0===c?{}:c;var d=$m;P("ytLoggingEventsDefaultDisabled",!1)&&$m==$m&&(d=null);a:{c=void 0===c?{}:c;if(Q("lr_drop_other_and_business_payloads")){if(bn[a]||an[a])break a}else if(Q("lr_drop_other_payloads")&&bn[a])break a;var e={},f=Math.round(c.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=cn();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&c.va&&(a=e.context,b=c.va,b={index:Mn(b),groupKey:b},a.sequence=
b,c.zb&&delete Ln[c.va]);(c.Tb?zn:tn)({endpoint:"log_event",payload:e,W:c.W,qa:c.qa},d)}}
;var On=[{Ma:function(a){return"Cannot read property '"+a.key+"'"},
Ea:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ma:function(a){return"Cannot call '"+a.key+"'"},
Ea:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ma:function(a){return a.key+" is not defined"},
Ea:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Qn={ea:[],ca:[{ub:Pn,weight:500}]};function Pn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Rn(){this.ca=[];this.ea=[]}
var Sn;function Tn(){if(!Sn){var a=Sn=new Rn;a.ea.length=0;a.ca.length=0;Qn.ea&&a.ea.push.apply(a.ea,Qn.ea);Qn.ca&&a.ca.push.apply(a.ca,Qn.ca)}return Sn}
;var Un=new O;function Vn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Wn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Wn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Wn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Wn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Xn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Yn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Vn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Yn(e+".ve",f,g,h):0;d+=g;d+=Yn(e,a[e],b,c);if(500<d)break}}else c[b]=Zn(a),d+=c[b].length;else c[b]=Zn(a),d+=c[b].length;return d}
function Yn(a,b,c,d){c+="."+a;a=Zn(b);d[c]=a;return c.length+a.length}
function Zn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var $n=A.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",$n);function ao(a){var b=void 0;b=void 0===b?{}:b;var c=!1;P("ytLoggingEventsDefaultDisabled",!1)&&$m===$m&&(c=!0);c=c?null:$m;b=void 0===b?{}:b;var d=Math.round(b.timestamp||T());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=cn();d=new nh;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(Q("log_sequence_info_on_gel_web")&&b.va){e=b.va;var f=Mn(e),g=new mh;I(g,2,f);I(g,1,e);J(d,3,g);b.zb&&delete $n[b.va]}J(a,33,d);(b.Tb?Bn:wn)({endpoint:"log_event",payload:a,W:b.W,qa:b.qa},c)}
;var bo=new Set,co=0,eo=0,fo=0,go=[],ho=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function io(){for(var a=t(ho),b=a.next();!b.done;b=a.next()){var c=ec();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;var jo={};function ko(a){return jo[a]||(jo[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var lo={},mo=[],xg=new O,no={};function oo(){for(var a=t(mo),b=a.next();!b.done;b=a.next())b=b.value,b()}
function po(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[ko(b)]:a.getAttribute("data-"+b):null;return c}
function qo(a){xg.ma.apply(xg,arguments)}
;function ro(a){this.h=a||{};a=[this.h,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function so(a,b){a=[a.h,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function to(a,b,c){uo||(uo={},Di(window,"message",function(d){a:{if(d.origin===so(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=uo[e.id])d.o=!0,d.o&&(F(d.u,d.sendMessage,d),d.u.length=0),d.Ua(e)}e=void 0}return e}));
uo[c]=b}
var uo=null;function vo(a,b,c){this.m=this.h=this.i=null;this.j=0;this.o=!1;this.u=[];this.l=null;this.I={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.A=c;this.setup(a,b)}
m=vo.prototype;m.setSize=function(a,b){this.h.width=a.toString();this.h.height=b.toString();return this};
m.getIframe=function(){return this.h};
m.Ua=function(a){wo(this,a.event,a)};
m.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);xo(this,a);return this};
function yo(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.A===b[0]&&xo(a,c)}}
m.destroy=function(){this.h&&this.h.id&&(lo[this.h.id]=null);var a=this.l;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.h;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.h)&&a.parentNode&&a.parentNode.removeChild(a);uo&&(uo[this.id]=null);this.i=null;a=this.h;for(var c in kb)kb[c][0]==a&&Bi(c);this.m=this.h=null};
m.Ya=function(){return{}};
function zo(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.o?a.sendMessage(b):a.u.push(b)}
function wo(a,b,c){a.l.l||(c={target:a,data:c},a.l.ma(b,c),qo(a.A+"."+b,c))}
function Ao(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+so(a.i,"title"));(b=so(a.i,"width"))&&c.setAttribute("width",b.toString());(b=so(a.i,"height"))&&c.setAttribute("height",
b.toString());var g=a.Ya();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&F(["debugjs","debugcss"],function(h){var k=tc(window.location.href,h);null!==k&&(g[h]=k)});
window.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(window.yt_embedsTokenValue),delete window.yt_embedsTokenValue);c.src=so(a.i,"host")+("/embed/"+so(a.i,"videoId"))+"?"+rc(g);return c}
m.kb=function(){this.h&&this.h.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.j)};
function Bo(a){to(a.i,a,a.id);a.j=Fi(a.kb.bind(a));Di(a.h,"load",function(){window.clearInterval(a.j);a.j=Fi(a.kb.bind(a))})}
m.setup=function(a,b){if(a=Hd(a)){var c="iframe"===a.tagName.toLowerCase();b.host||(b.host=c?pc(a.src):"https://www.youtube.com");this.i=new ro(b);c||(b=Ao(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b);this.h=a;this.h.id||(this.h.id="widget"+Na(this.h));lo[this.h.id]=this;if(window.postMessage){this.l=new O;Bo(this);a=so(this.i,"events");for(var d in a)a.hasOwnProperty(d)&&this.addEventListener(d,a[d]);for(var e in no)no.hasOwnProperty(e)&&yo(this,e)}}};
function xo(a,b){a.I[b]||(a.I[b]=!0,zo(a,"addEventListener",[b]))}
m.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=If(a),c=[pc(this.h.src||"").replace("http:","https:")];if(this.h.contentWindow)for(var d=0;d<c.length;d++)try{this.h.contentWindow.postMessage(b,c[d])}catch(Xb){if(Xb.name&&"SyntaxError"===Xb.name){if(!(Xb.message&&0<Xb.message.indexOf("target origin ''"))){var e=void 0,f=Xb;e=void 0===e?{}:e;e.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":h;if(f){f.hasOwnProperty("level")&&
f.level&&(h=f.level);if(Q("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=co)){var n=void 0,q=void 0,v=void 0,p=f,z=g,y=qe(p),G=y.message||"Unknown Error",M=y.name||"UnknownError",K=y.stack||p.i||
"Not available";if(K.startsWith(M+": "+G)){var N=K.split("\n");N.shift();K=N.join("\n")}var jb=y.lineNumber||"Not available",uc=y.fileName||"Not available",bf=K,ba=z,S=0;if(p.hasOwnProperty("args")&&p.args&&p.args.length)for(var W=0;W<p.args.length&&!(S=Xn(p.args[W],"params."+W,ba,S),500<=S);W++);else if(p.hasOwnProperty("params")&&p.params){var X=p.params;if("object"===typeof p.params)for(q in X){if(X[q]){var ka="params."+q,lk=Zn(X[q]);ba[ka]=lk;S+=ka.length+lk.length;if(500<S)break}}else ba.params=
Zn(X)}if(go.length)for(var Id=0;Id<go.length&&!(S=Xn(go[Id],"params.context."+Id,ba,S),500<=S);Id++);navigator.vendor&&!ba.hasOwnProperty("vendor")&&(ba["device.vendor"]=navigator.vendor);var qb={message:G,name:M,lineNumber:jb,fileName:uc,stack:bf,params:ba,sampleWeight:1},mk=Number(p.columnNumber);isNaN(mk)||(qb.lineNumber=qb.lineNumber+":"+mk);if("IGNORED"===p.level)n=0;else a:{for(var nk=Tn(),ok=t(nk.ea),Pf=ok.next();!Pf.done;Pf=ok.next()){var pk=Pf.value;if(qb.message&&qb.message.match(pk.wc)){n=
pk.weight;break a}}for(var qk=t(nk.ca),Qf=qk.next();!Qf.done;Qf=qk.next()){var rk=Qf.value;if(rk.ub(qb)){n=rk.weight;break a}}n=1}qb.sampleWeight=n;v=qb;for(var sk=t(On),Rf=sk.next();!Rf.done;Rf=sk.next()){var Sf=Rf.value;if(Sf.Ea[v.name])for(var tk=t(Sf.Ea[v.name]),Tf=tk.next();!Tf.done;Tf=tk.next()){var uk=Tf.value,Jd=v.message.match(uk.regexp);if(Jd){v.params["params.error.original"]=Jd[0];for(var Uf=uk.groups,vk={},Yb=0;Yb<Uf.length;Yb++)vk[Uf[Yb]]=Jd[Yb+1],v.params["params.error."+Uf[Yb]]=Jd[Yb+
1];v.message=Sf.Ma(vk);break}}}v.params||(v.params={});var wk=Tn();v.params["params.errorServiceSignature"]="msg="+wk.ea.length+"&cb="+wk.ca.length;v.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(v.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));zb("sample").constructor!==wb&&(v.params["params.fconst"]="true");var qa=v;window.yterr&&"function"===typeof window.yterr&&window.yterr(qa);if(0!==qa.sampleWeight&&!bo.has(qa.message)){if("ERROR"===
h){Un.ma("handleError",qa);if(Q("record_app_crashed_web")&&0===fo&&1===qa.sampleWeight)if(fo++,Q("errors_via_jspb")){var Vf=new lh;I(Vf,1,1);if(!Q("report_client_error_with_app_crash_ks")){var xk=new gh;I(xk,1,qa.message);var yk=new hh;J(yk,3,xk);var zk=new ih;J(zk,5,yk);var Ak=new jh;J(Ak,9,zk);J(Vf,4,Ak)}var Ho=Vf,Bk=new oh;td(Bk,20,ph,Ho);ao(Bk)}else{var Ck={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};Q("report_client_error_with_app_crash_ks")||(Ck.systemHealth={crashData:{clientError:{logMessage:{message:qa.message}}}});
Nn("appCrashed",Ck)}eo++}else"WARNING"===h&&Un.ma("handleWarning",qa);if(Q("kevlar_gel_error_routing"))a:{var Wf=void 0,Xf=void 0,Dc=h,R=qa;if(Q("errors_via_jspb")){if(io())Xf=void 0;else{var Zb=new dh;I(Zb,1,R.stack);R.fileName&&I(Zb,4,R.fileName);var Ia=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Ia.length&&(1!==Ia.length||isNaN(Number(Ia[0]))?2!==Ia.length||isNaN(Number(Ia[0]))||isNaN(Number(Ia[1]))||(I(Zb,2,Number(Ia[0])),I(Zb,3,Number(Ia[1]))):I(Zb,2,Number(Ia[0])));var rb=
new gh;I(rb,1,R.message);I(rb,3,R.name);I(rb,6,R.sampleWeight);"ERROR"===Dc?I(rb,2,2):"WARNING"===Dc?I(rb,2,1):I(rb,2,0);var Yf=new eh;I(Yf,1,!0);td(Yf,3,fh,Zb);var sb=new ah;I(sb,3,window.location.href);for(var Dk=P("FEXP_EXPERIMENTS",[]),Zf=0;Zf<Dk.length;Zf++){var Ek=sb,Io=Dk[Zf];ed(Ek);od(Ek,5).push(Io)}var $f=Oh();if(!Ph()&&$f)for(var Fk=t(Object.keys($f)),tb=Fk.next();!tb.done;tb=Fk.next()){var Gk=tb.value,ag=new ch;I(ag,1,Gk);ag.setValue(String($f[Gk]));ud(sb,4,ch,ag)}var bg=R.params;if(bg){var Hk=
t(Object.keys(bg));for(tb=Hk.next();!tb.done;tb=Hk.next()){var Ik=tb.value,cg=new ch;I(cg,1,"client."+Ik);cg.setValue(String(bg[Ik]));ud(sb,4,ch,cg)}}var Jk=P("SERVER_NAME"),Kk=P("SERVER_VERSION");if(Jk&&Kk){var dg=new ch;I(dg,1,"server.name");dg.setValue(Jk);ud(sb,4,ch,dg);var eg=new ch;I(eg,1,"server.version");eg.setValue(Kk);ud(sb,4,ch,eg)}var Kd=new hh;J(Kd,1,sb);J(Kd,2,Yf);J(Kd,3,rb);Xf=Kd}var Lk=Xf;if(!Lk)break a;var Mk=new oh;td(Mk,163,ph,Lk);ao(Mk)}else{if(io())Wf=void 0;else{var Ec={stackTrace:R.stack};
R.fileName&&(Ec.filename=R.fileName);var Ja=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Ja.length&&(1!==Ja.length||isNaN(Number(Ja[0]))?2!==Ja.length||isNaN(Number(Ja[0]))||isNaN(Number(Ja[1]))||(Ec.lineNumber=Number(Ja[0]),Ec.columnNumber=Number(Ja[1])):Ec.lineNumber=Number(Ja[0]));var fg={level:"ERROR_LEVEL_UNKNOWN",message:R.message,errorClassName:R.name,sampleWeight:R.sampleWeight};"ERROR"===Dc?fg.level="ERROR_LEVEL_ERROR":"WARNING"===Dc&&(fg.level="ERROR_LEVEL_WARNNING");
var Jo={isObfuscated:!0,browserStackInfo:Ec},$b={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&($b.experimentIds=P("FEXP_EXPERIMENTS"));var gg=Oh();if(!Ph()&&gg)for(var Nk=t(Object.keys(gg)),ub=Nk.next();!ub.done;ub=Nk.next()){var Ok=ub.value;$b.kvPairs.push({key:Ok,value:String(gg[Ok])})}var hg=R.params;if(hg){var Pk=t(Object.keys(hg));for(ub=Pk.next();!ub.done;ub=Pk.next()){var Qk=ub.value;$b.kvPairs.push({key:"client."+Qk,value:String(hg[Qk])})}}var Rk=P("SERVER_NAME"),Sk=P("SERVER_VERSION");
Rk&&Sk&&($b.kvPairs.push({key:"server.name",value:Rk}),$b.kvPairs.push({key:"server.version",value:Sk}));Wf={errorMetadata:$b,stackTrace:Jo,logMessage:fg}}var Tk=Wf;if(!Tk)break a;Nn("clientError",Tk)}("ERROR"===Dc||Q("errors_flush_gel_always_killswitch"))&&xn(void 0,void 0,!1)}if(!Q("suppress_error_204_logging")){var vb=qa,Fc=vb.params||{},Wa={urlParams:{a:"logerror",t:"jserror",type:vb.name,msg:vb.message.substr(0,250),line:vb.lineNumber,level:h,"client.name":Fc.name},postParams:{url:P("PAGE_NAME",
window.location.href),file:vb.fileName},method:"POST"};Fc.version&&(Wa["client.version"]=Fc.version);if(Wa.postParams){vb.stack&&(Wa.postParams.stack=vb.stack);for(var Uk=t(Object.keys(Fc)),ig=Uk.next();!ig.done;ig=Uk.next()){var Vk=ig.value;Wa.postParams["client."+Vk]=Fc[Vk]}var jg=Oh();if(jg)for(var Wk=t(Object.keys(jg)),kg=Wk.next();!kg.done;kg=Wk.next()){var Xk=kg.value;Wa.postParams[Xk]=jg[Xk]}var Yk=P("SERVER_NAME"),Zk=P("SERVER_VERSION");Yk&&Zk&&(Wa.postParams["server.name"]=Yk,Wa.postParams["server.version"]=
Zk)}Si(P("ECATCHER_REPORT_HOST","")+"/error_204",Wa)}try{bo.add(qa.message)}catch(Oo){}co++}}}}}else throw Xb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Co(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Do(a){return 0===a.search("get")||0===a.search("is")}
;function Eo(a,b){vo.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.T={};this.playerInfo={}}
u(Eo,vo);m=Eo.prototype;m.Ya=function(){var a=so(this.i,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=so(this.i,"embedConfig")){if(C(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
m.Ua=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(C(a))for(var c in a)a.hasOwnProperty(c)&&(this.T[c]=a[c]);break;case "infoDelivery":Fo(this,a);break;case "initialDelivery":C(a)&&(window.clearInterval(this.j),this.playerInfo={},this.T={},Go(this,a.apiInterface),Fo(this,a));break;default:wo(this,b,a)}};
function Fo(a,b){if(C(b))for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c])}
function Go(a,b){F(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Co(c)?this[c]=function(){this.playerInfo={};
this.T={};zo(this,c,arguments);return this}:Do(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){zo(this,c,arguments);
return this})},a)}
m.getVideoEmbedCode=function(){var a=so(this.i,"host")+("/embed/"+so(this.i,"videoId")),b=Number(so(this.i,"width")),c=Number(so(this.i,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);Hb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Bb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Cb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Db,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Eb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Fb,"&#39;")),-1!=a.indexOf("\x00")&&
(a=a.replace(Gb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
m.getOptions=function(a){return this.T.namespaces?a?this.T[a]?this.T[a].options||[]:[]:this.T.namespaces||[]:[]};
m.getOption=function(a,b){if(this.T.namespaces&&a&&b&&this.T[a])return this.T[a][b]};
function Ko(a){if("iframe"!==a.tagName.toLowerCase()){var b=po(a,"videoid");b&&(b={videoId:b,width:po(a,"width"),height:po(a,"height")},new Eo(a,b))}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return lo[a]});
D("YT.scan",oo);D("YT.subscribe",function(a,b,c){xg.subscribe(a,b,c);no[a]=!0;for(var d in lo)lo.hasOwnProperty(d)&&yo(lo[d],a)});
D("YT.unsubscribe",function(a,b,c){wg(a,b,c)});
D("YT.Player",Eo);vo.prototype.destroy=vo.prototype.destroy;vo.prototype.setSize=vo.prototype.setSize;vo.prototype.getIframe=vo.prototype.getIframe;vo.prototype.addEventListener=vo.prototype.addEventListener;Eo.prototype.getVideoEmbedCode=Eo.prototype.getVideoEmbedCode;Eo.prototype.getOptions=Eo.prototype.getOptions;Eo.prototype.getOption=Eo.prototype.getOption;
mo.push(function(a){var b=a;b||(b=document);a=fb(b.getElementsByTagName("yt:player"));var c=b||document;b=fb(c.querySelectorAll&&c.querySelector?c.querySelectorAll(".yt-player"):Ld(document,"*","yt-player",b));F(eb(a,b),Ko)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||oo();var Lo=A.onYTReady;Lo&&Lo();var Mo=A.onYouTubeIframeAPIReady;Mo&&Mo();var No=A.onYouTubePlayerAPIReady;No&&No();}).call(this);
