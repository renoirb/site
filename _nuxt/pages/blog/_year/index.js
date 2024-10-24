(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{243:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(11),l=r.a.extend({name:"BlogListModelByYear",props:{contents:{type:Array,default:function(){return[]}},q:{type:String,default:""},showYear:{type:Boolean,default:!0}},computed:{byYears:function(){return Object(o.k)(this.contents)}},methods:{abbreviatize:o.i}}),c=n(6),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-list-model-by-year"},[t._l(t.byYears,(function(e){return n("div",{key:"buckets-year-"+e[0]},[t.showYear?n("NuxtLink",{staticClass:"no-underline",attrs:{to:{path:"/blog/"+e[0],query:{q:t.q?t.q:void 0}}}},[n("h2",{staticClass:"my-4 font-serif text-2xl italic"},[t._v(t._s(e[0]))])]):t._e(),t._v(" "),Array.isArray(e)?n("ul",t._l(e[1],(function(content){return n("li",{key:content.slug,staticClass:"mb-8"},[n("NuxtLink",{staticClass:"font-serif text-xl italic no-underline",attrs:{lang:content.locale?content.locale:"en-CA",to:{path:content.path,meta:{locale:content.locale?content.locale:"en-CA",date:content.date}}},domProps:{innerHTML:t._s(t.abbreviatize(content.title))}}),t._v(" "),content.prettyfiedTemporalDate?n("div",{staticClass:"mt-0 mb-2 font-serif text-sm italic"},[n("time",{attrs:{datetime:content.prettyfiedTemporalDate.temporalDate}},[t._v("\n            "+t._s(content.prettyfiedTemporalDate.prettified)+"\n          ")])]):t._e(),t._v(" "),content.excerpt?n("div",{staticClass:"mt-0 mb-5 font-serif text-md"},[t._v("\n          "+t._s(content.excerpt)+"\n        ")]):t._e(),t._v(" "),n("app-article-tags",{staticClass:"mt-2 mb-4",attrs:{link:!0,content:content}})],1)})),0):t._e(),t._v(" "),n("div",{staticClass:"h-5 -ml-10"},[t._v(" ")])],1)})),t._v(" "),t.byYears.length<1?n("div",[n("p",{staticClass:"font-serif text-lg italic"},[t._v("\n      Looks like I haven’t written anything\n    ")])]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppArticleTags:n(244).default})},244:function(t,e,n){"use strict";n.r(e);n(30),n(17),n(15),n(24),n(25),n(28),n(21),n(7),n(4),n(13),n(35);var r=n(1),o=n(11);function l(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,f=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){f=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(f)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f=r.a.extend({name:"AppArticleTags",props:{content:{type:Object,validator:o.x,required:!0},link:{type:Boolean,default:!0}},data:function(){return{labeler:new o.e("Tags")}},computed:{tags:function(){var t,e=new Set;if("tags"in this.content&&this.content.tags){var n,r=(null!==(t=this.content.tags)&&void 0!==t?t:[]).map((function(t){return"string"==typeof t&&t.replace(/[\s\t/]/g,"")})).filter((function(t){return""!==t})).filter((function(t){return"on-front-page"!==t})),o=l(r);try{for(o.s();!(n=o.n()).done;){var c=n.value;e.add(c)}}catch(t){o.e(t)}finally{o.f()}}return Array.from(e)},category:function(){var t=null;return"categories"in this.content&&this.content.categories&&Array.isArray(this.content.categories)&&this.content.categories[0]&&(t=this.content.categories[0]),t}},methods:{abbreviatize:o.i}}),d=n(6),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"taxonomy",class:{"taxonomy-not-hoverizable":!t.link,"taxonomy-hoverizable":t.link}},[t.labeler.hasLabel?n("strong",{staticClass:"taxonomy-label",attrs:{id:t.labeler.label.id}},[t._v("\n    "+t._s(t.labeler.label.textContent)+"\n  ")]):t._e(),t._v(" "),t.tags.length>0?n("ul",t._b({staticClass:"taxonomy-items"},"ul",t.labeler.labelee,!1),[t._l(t.tags,(function(e){return n("li",{key:e,staticClass:"px-2 py-1 mb-3 mr-3",class:{"is-hoverizable":t.link}},[!1===t.link?n("span",{domProps:{innerHTML:t._s(t.abbreviatize(e))}}):n("NuxtLink",{staticClass:"no-underline",attrs:{to:"/blog/tag/"+String(e).toLocaleLowerCase()},domProps:{innerHTML:t._s(t.abbreviatize(e))}})],1)})),t._v(" "),t.category?n("li",{staticClass:"category px-2 py-1 mb-3 mr-3",class:{"is-hoverizable":t.link}},[n("NuxtLink",{staticClass:"no-underline",attrs:{to:"/blog/category/"+String(t.category).toLocaleLowerCase()},domProps:{innerHTML:t._s(t.abbreviatize("📁 "+t.category))}})],1):t._e()],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){"use strict";n.r(e);n(27);var r=n(2),o=n(1),l=n(243),c=o.a.extend({components:{"blog-list-model-by-year":l.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=r.year,l=[],e.prev=3,e.next=6,n("blog",o,{deep:!0}).sortBy("created","desc").only(["created","excerpt","locale","path","preamble","slug","tags","title","updated"]).fetch();case 6:l=e.sent,e.next=11;break;case 9:e.prev=9,e.t0=e.catch(3);case 11:return e.abrupt("return",{contents:l});case 12:case"end":return e.stop()}}),e,null,[[3,9]])})))()}}),f=n(6),component=Object(f.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pages__blog__year--index"},[e("div",{staticClass:"document document--collection"},[e("div",{staticClass:"body",attrs:{"data-count":this.contents.length}},[e("blog-list-model-by-year",{attrs:{"show-year":!1,contents:this.contents,q:this.$route&&this.$route.query&&this.$route.query.q}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogListModelByYear:n(243).default})}}]);