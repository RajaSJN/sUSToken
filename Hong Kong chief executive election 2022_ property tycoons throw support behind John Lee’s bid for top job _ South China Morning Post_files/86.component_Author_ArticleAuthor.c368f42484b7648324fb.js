(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{"6R6U":function(t,e,o){"use strict";o.r(e);var a,i=o("6VWK"),r=o("u2We"),n=o("n9T4"),s=o("YKMj"),u=o("ERJl"),l=o("grO+"),c=o("mwIZ"),p=o.n(c),h=o("3WF5"),d=o.n(h),f=o("ijCd"),m=o.n(f),_=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),g=function(){return(g=Object.assign||function(t){for(var e,o=1,a=arguments.length;o<a;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},y=function(t,e,o,a){var i,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(n=(r<3?i(n):r>3?i(e,o,n):i(e,o))||n);return r>3&&n&&Object.defineProperty(e,o,n),n},b=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},v=function(){return Promise.all([o.e(0),o.e(1),o.e(4),o.e(3),o.e(2),o.e(7),o.e(33),o.e(190)]).then(o.bind(null,"A9PJ"))},A=function(){return o.e(170).then(o.bind(null,"jRAH"))},O=function(){return Promise.all([o.e(0),o.e(10),o.e(43),o.e(220)]).then(o.bind(null,"Zyb/"))},C=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.showUpdatedDate=!1,e.followType=l.Fb.AUTHOR,e}return _(e,t),e.prototype.toggleUpdateDateDisplay=function(){this.showUpdatedDate=!this.showUpdatedDate},e.prototype.isShowAuthorLocationTemplate=function(){return this.authors.length<=3},e.prototype.isShowCommaClass=function(t,e){return t.length>1&&e<t.length-2},Object.defineProperty(e.prototype,"getClasses",{get:function(){var t=[];return this.isSingleAuthor&&t.push("article-author--single-author"),""!==this.theme&&t.push("article-author--"+this.theme+"-theme"),this.isBottomFlexInCol&&t.push("article-author--bottom-content-flex-in-column"),t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"getAuthorImageGridSize",{get:function(){return this.authors.filter((function(t){return""!==t.imageUrl})).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSingleAuthor",{get:function(){return 1===this.authors.length&&!m()(l.g,p()(this.authors,"[0]entityId"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isScmpEditorial",{get:function(){return"SCMP Editorial"===p()(Object(r.k)(this.authors),"name","")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"singleAuthorName",{get:function(){return p()(this.authors,"[0].name","")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"singleAuthorEntityId",{get:function(){return p()(this.authors,"[0].entityId","")},enumerable:!0,configurable:!0}),e.prototype.getFinalLocationDisplay=function(t){var e=t.authorLocationsMapping,o=void 0===e?[]:e,a=t.authorLocationIndex,i=void 0===a?0:a,r=t.fallbackLocation,n=void 0===r?"":r,s=p()(o,i,"");return s&&"not available"===s.toLowerCase()&&(s=n),s},Object.defineProperty(e.prototype,"authors",{get:function(){var t=this,e=!0,o=d()(this.authorsProps,(function(o,a){var i=o.name,r=void 0===i?"":i,s=o.urlAlias,u=void 0===s?"#":s,l=o.entityUuid,c=void 0===l?"":l,h=o.entityId,d=o.location,f=p()(o,"image."+t.imageSize+".url");f=f?Object(n.i)(f,70):"";var m=t.getFinalLocationDisplay({authorLocationsMapping:t.authorLocations,authorLocationIndex:a,fallbackLocation:d});return m&&"hong kong"!==m.toLowerCase()&&e&&(e=!1),{name:r,urlAlias:u,entityUuid:c,entityId:h,location:m,imageUrl:f}}));return e&&(o=d()(o,(function(t){return t.location="",g({},t)}))),o},enumerable:!0,configurable:!0}),y([Object(s.c)({required:!0}),b("design:type",Array)],e.prototype,"authorsProps",void 0),y([Object(s.c)(),b("design:type",Number)],e.prototype,"updatedDate",void 0),y([Object(s.c)(),b("design:type",Number)],e.prototype,"publishedDate",void 0),y([Object(s.c)({default:!1}),b("design:type",Boolean)],e.prototype,"hasOpinionType",void 0),y([Object(s.c)({default:"",validator:function(t){return-1!==["","transparent"].indexOf(t)}}),b("design:type",String)],e.prototype,"theme",void 0),y([Object(s.c)({default:!1}),b("design:type",Boolean)],e.prototype,"isSCMPColumnist",void 0),y([Object(s.c)({default:null}),b("design:type",String)],e.prototype,"imageSize",void 0),y([Object(s.c)({default:function(){return[]}}),b("design:type",Array)],e.prototype,"authorLocations",void 0),y([Object(s.c)({default:!1}),b("design:type",Boolean)],e.prototype,"isLiveArticle",void 0),y([Object(s.c)({default:!1}),b("design:type",Boolean)],e.prototype,"isBottomFlexInCol",void 0),e=y([Object(s.a)({components:{BodyParser:v,RouterLinkCustom:u.a,TrustLabel:A,FollowButton:O},filters:{FormatDate:i.a},methods:{FormatISODate:i.b}})],e)}(s.d),D=(o("KSJm"),o("KHd+")),j=Object(D.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"article-author",class:t.getClasses},[t._m(0),t._v(" "),o("div",{staticClass:"article-author__information",class:{"article-author__information--single-author-padding":t.isSingleAuthor,"article-author__information--no-padding-left":0===t.getAuthorImageGridSize}},[o("div",{staticClass:"article-author__main-info"},[o("div",{staticClass:"article-author__header-bar",class:{"article-author__header-bar--green":t.hasOpinionType}}),t._v(" "),o("div",{staticClass:"article-author__names"},[t._l(t.authors,(function(e,a){return o("span",{key:a,staticClass:"article-author__name",class:{"article-author__name--comma":t.isShowCommaClass(t.authors,a)}},[0!==a&&a===t.authors.length-1?o("span",{staticClass:"article-author__name article-author__name--more"},[t._v("and")]):t._e(),t._v(" "),o("router-link-custom",{staticClass:"article-author__name-link",attrs:{to:e.urlAlias,id:e.entityUuid,type:"Author"}},[t._v("\n            "+t._s(e.name)+"\n          ")]),t._v(" "),t.isShowAuthorLocationTemplate()&&e.location?o("span",{staticClass:"article-author__location",class:{"article-author__location--comma":t.isShowCommaClass(t.authors,a)}},[t._v(" in "+t._s(e.location))]):t._e()],1)})),t._v(" "),t.isSingleAuthor?o("follow-button",{staticClass:"article-author__follow-button",attrs:{entityId:t.singleAuthorEntityId,size:"thin",theme:"blue",name:t.singleAuthorName,type:t.followType,showIndicator:t.hasOpinionType,hasOpinionType:t.hasOpinionType,isSCMPColumnist:t.isSCMPColumnist,showUpdatedDate:t.showUpdatedDate}}):t._e()],2),t._v(" "),o("div",{staticClass:"article-author__bottom-content"},[o("div",{staticClass:"article-author__bottom-left-content"},[o("div",{staticClass:"article-author__date-container",class:{"article-author__date-container--active":t.showUpdatedDate},on:{click:t.toggleUpdateDateDisplay}},[o("p",{staticClass:"article-author__published-date"},[o("time",{attrs:{datetime:t.FormatISODate(t.publishedDate)}},[t._v("Published: "+t._s(t._f("FormatDate")(t.publishedDate,"h:mma, D MMM, YYYY")))])]),t._v(" "),o("p",{staticClass:"article-author__updated-date"},[t._v("Updated: "+t._s(t._f("FormatDate")(t.updatedDate,"h:mma, D MMM, YYYY")))])])]),t._v(" "),o("div",{staticClass:"article-author__bottom-right-content"},[o("trust-label",{staticClass:"article-author__trust-label"})],1)])])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"article-author__image-container"},[t._l(t.authors,(function(e,a){return[e.imageUrl?o("router-link-custom",{key:a,staticClass:"article-author__image-link",attrs:{to:e.urlAlias,id:e.entityUuid,type:"Author"}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imageUrl,expression:"author.imageUrl"}],staticClass:"article-author__image",class:{"article-author__image--grey-filter":!t.isScmpEditorial},attrs:{alt:e.name,src:"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAQAAAA3fa6RAAAAEElEQVR42mN8+p8BCBghFAAiEQPLD3901QAAAABJRU5ErkJggg=="}})]):t._e()]}))],2)}],!1,null,"84086802",null);e.default=j.exports},"6VWK":function(t,e,o){"use strict";o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return u}));var a=o("o973"),i=o("rWDI"),r=o("Wgwc"),n=o.n(r);function s(t,e){return void 0===e&&(e=a.a.DEFAULT_DATE_FORMAT),t?n.a.utc(t).utcOffset(480).format(e):""}function u(t,e){return void 0===e&&(e="long"),Object(i.m)(t,e)}function l(t){return t?n.a.utc(t).toISOString():""}},KSJm:function(t,e,o){"use strict";o("XBuP")},XBuP:function(t,e,o){},o973:function(t,e,o){"use strict";var a=function(){function t(){}return t.DEFAULT_DATE_FORMAT="D MMM YYYY [-] h:mmA",t.SHORT_BRITISH_DATE_FORMAT="DD MMM YY",t}();e.a=a}}]);