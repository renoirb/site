(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{352:function(t,e,n){"use strict";n.r(e);var r=n(3),c=(n(27),n(2)),o=n(1),l=n(11),d=o.a.extend({asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,o=r.slug,e.prev=2,e.next=5,n("projects",o).fetch();case 5:content=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c({message:"Project not found"});case 11:return e.abrupt("return",{content:content});case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))()},methods:{abbreviatize:l.i},head:function(){var t=this.content,e=t.locale,n=void 0===e?"en-CA":e,title=t.title,c=t.tags,o=void 0===c?[]:c,l=t.categories,d=void 0===l?[]:l;return{htmlAttrs:{lang:n},title:title,meta:[{hid:"keywords",name:"keywords",content:[].concat(Object(r.a)(d),Object(r.a)(o)).join(" ")}]}}}),h=n(6),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pages-projects--slug"},[e("div",{staticClass:"document document--collection"},[e("div",{staticClass:"title page-title font-serif text-2xl italic"},[e("h1",{domProps:{innerHTML:this._s(this.abbreviatize(this.content.title))}})]),this._v(" "),e("div",{staticClass:"body mt-10"},[e("nuxt-content",{attrs:{document:this.content}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);