(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{340:function(t,e,n){"use strict";n.r(e);n(37),n(17),n(7),n(4),n(31);var r=n(3),c=n(10),o=(n(27),n(2)),l=(n(34),n(1)),f=n(11);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=function(t){return[t.images&&!0===t.images?"A":"-",t.gallery&&!0===t.gallery?"B":"-",t.caption&&!0===t.caption?"C":"-",t.caracteresBizzares&&!0===t.caracteresBizzares?"D":"-",t.migrateImages&&!0===t.migrateImages?"E":"-",t.migrateLinks&&!0===t.migrateLinks?"F":"-"]},_=function(input){var t=0;return input.filter(String).forEach((function(e){return"-"!==e&&""!==e?t++:0})),t},O=function(a,b){var t=_(d(a)),e=_(d(b));if(t>e)return-1;if(t<e)return 1;var n=a.created.split("T")[0],r=b.created.split("T")[0];return n>r?-1:n<r?1:0},h=l.a.extend({asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,c,o,l,v,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=n("blog",{deep:!0}).where({revising:!0}).without(["body","categories","coverImage","description","excerpt","extension","keywords","preamble","tags","toc","waybackMachineSnapshots"]).sortBy("created","asc"),e.next=4,c.fetch();case 4:return o=e.sent,l=o.filter((function(a){return Object(f.q)(a)})).map((function(a){var t=d(a),e=_(t);return m(m({},a),{},{score:e,flags:t})})).sort(O),v=l.length,h=Object(r.a)(l.map((function(t){var path=t.path,e=t.score;return[path].map((function(i){return"- [ ]\tscore ".concat(e,"\t<").concat(i,">")})).join(";")}))).join("\n"),console.log(h),e.abrupt("return",{contents:l,count:v});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{contents:[],count:0}},methods:{createFlagString:function(t){return d(t).join(" ")},createSortScoreForFlagThing:_},head:function(){return{meta:[{name:"robots",content:"noindex"}]}}}),y=n(6),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pages__blog__tag--index"},[n("div",{staticClass:"document document--collection"},[n("div",{staticClass:"title page-title font-serif text-2xl italic"},[n("h1",[t._v("\n        Reviewing "),n("small",[t._v("("+t._s(t.count)+")")])])]),t._v(" "),n("div",{staticClass:"body"},[n("ul",t._l(t.contents,(function(content){return n("li",{key:content.slug},[n("NuxtLink",{attrs:{to:content.path,target:"_blank"},domProps:{innerHTML:t._s(content.dir+" "+content.title)}}),t._v("\n           \n          "),content.canonical?n("small",[t._v("\n            ("),n("a",{attrs:{href:content.canonical,target:"_blank"}},[t._v("canonical ")]),t._v(")\n          ")]):t._e(),t._v(" "),n("details",[n("summary",[t._v("\n              score "+t._s(content.score)+":\n              "+t._s(content.flags.join(" "))+"\n            ")]),t._v(" "),n("pre",[t._v(t._s(content))])])],1)})),0)])])])}),[],!1,null,null,null);e.default=component.exports}}]);