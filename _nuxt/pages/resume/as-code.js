(window.webpackJsonp=window.webpackJsonp||[]).push([[49,10,11],{258:function(t,e,n){},259:function(t,e,n){},276:function(t,e,n){"use strict";var r=n(258);n.n(r).a},277:function(t,e,n){"use strict";var r=n(259);n.n(r).a},286:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"CodeBlock",props:{label:{type:String,required:!0},active:{type:Boolean,default:!1}}}),o=(n(276),n(6)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"code-block",class:[this.active&&"active"]},[this._t("default")],2)}),[],!1,null,"172c3de6",null);e.default=component.exports},287:function(t,e,n){"use strict";n.r(e);n(27);var r=n(2),o=n(1).a.extend({name:"CodeGroup",data:function(){return{tabs:[],activeTabIndex:0}},watch:{activeTabIndex:function(t,e){t!==e&&this.switchTab(t)}},mounted:function(){this.tabs=this.$slots.default.filter((function(slot){return Boolean(slot.componentOptions)})).map((function(slot){return{label:slot.componentOptions.propsData.label,elm:slot.elm}})),this.$nextTick(this.updateHighlighteUnderlinePosition)},methods:{switchTab:function(i){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,r=t.$el.childNodes,e.next=4,t.$nextTick((function(){r.forEach((function(t,e){var o=t.classList;o&&o.contains("code-block")&&(n===i&&r[e].classList.add("active"),++n)}))}));case 4:case"end":return e.stop()}}),e)})))()},updateTabs:function(i){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.activeTabIndex=i,t.updateHighlighteUnderlinePosition(),n=t.$el.childNodes,e.next=5,t.$nextTick((function(){n.forEach((function(t){var e=t.classList;e&&e.contains("active")&&e.remove("active")}))}));case 5:case"end":return e.stop()}}),e)})))()},updateHighlighteUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.width="".concat(t.clientWidth,"px")}}}}),c=(n(277),n(6)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-group"},[n("div",{staticClass:"rounded-t-md relative px-2 pb-0 -mb-2 text-sm text-white bg-gray-800 border-b-2 border-gray-700"},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:label,ref:"tabs",refInFor:!0,staticClass:"px-4 py-3 font-mono font-bold text-gray-400",class:[t.activeTabIndex===i&&"active"],on:{click:function(e){return t.updateTabs(i)}}},[t._v("\n      "+t._s(label)+"\n    ")])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"highlight-underline"})],2),t._v(" "),t._t("default")],2)}),[],!1,null,"39b5aa06",null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(1),c=n(11),l=o.a.extend({name:"AppCodeHighlighter",props:{language:{type:String,default:"javascript",validator:c.y},code:{type:String,default:""}},computed:{classNames:function(){var t="language-".concat(this.language);return Object(r.a)({},t,!0)}}}),d=n(6),component=Object(d.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nuxt-content-highlight"},[e("pre",{class:this.classNames},[this._t("default",[e("code",{domProps:{innerHTML:this._s(this.code)}})]),this._v("\n  "),this._v("\n  ")],2)])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,n){"use strict";n.r(e);var r=n(147),o=n(278),c=(n(27),n(2)),l=n(1),d=n(293),h=n(11);function f(){var data=Object(r.a)(["\n        Note that the YAML version shown here may differ from the original,\n        it might be the parsed version (i.e. same as JSON output).\n        You can have a look at the source document in the following link.\n      "]);return f=function(){return data},data}var m=l.a.extend({layout:"default",components:{"app-code-highlighter":function(){return Promise.resolve().then(n.bind(null,332))}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,h,meta,f,m,v,_,x,k,w,y,content,C,j,source,O,T,R,$,H;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.app,c=n("resume/jsonresume-renoirb",{text:!0}),e.next=4,c.fetch();case 4:return l=e.sent,h=l.meta,meta=void 0===h?{}:h,f=l.basics,m=l.work,v=l.education,_=l.awards,x=l.publications,k=l.skills,w=l.languages,y=l.interests,content=Object(o.a)(l,["meta","basics","work","education","awards","publications","skills","languages","interests"]),C={basics:f,work:m,education:v,awards:_,publications:x,skills:k,languages:w,interests:y},j=meta.source,source=void 0===j?"https://github.com/renoirb/site/blob/2020/content/resume/jsonresume-renoirb.yaml":j,"My curriculum vitæ",O=Object.assign({},{$schema:"https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json"},C),T="",T="text"in content&&"string"==typeof content.text?content.text:d.safeDump(O),R=r.$prism(T,"yaml"),$=JSON.stringify(O,null,2),H=r.$prism($,"json"),e.abrupt("return",{asJson:H,asYaml:R,content:content,pageTitle:"My curriculum vitæ",resume:C,source:source});case 16:case"end":return e.stop()}}),e)})))()},computed:{noteAboutSource:function(){return Object(h.H)(f())}},head:function(){return{title:this.pageTitle}}}),v=n(6),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pages__ligne-editoriale--parent"},[n("div",{staticClass:"document document--item z-30"},[n("div",{staticClass:"title page-title mb-5 font-serif text-2xl italic"},[n("h1",[t._v(t._s(t.pageTitle))])]),t._v(" "),n("div",{staticClass:"body"},[n("rb-notice-box",{staticClass:"my-5",attrs:{variant:"info"}},[t._v("\n        "+t._s(t.noteAboutSource)+"\n        "),n("a",{attrs:{href:t.source,target:"_blank"}},[t._v("Document source")])]),t._v(" "),n("div",{staticClass:"nuxt-content"},[n("h2",[t._v("Other versions")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("As code")]),t._v(" "),n("code-group",[n("code-block",{attrs:{label:"YAML",active:""}},[n("app-code-highlighter",{attrs:{language:"yaml",code:t.asYaml}})],1),t._v(" "),n("code-block",{attrs:{label:"JSON"}},[n("div",{staticClass:"nuxt-content-highlight"},[n("pre",{staticClass:"language-json"},[n("code",{domProps:{innerHTML:t._s(t.asJson)}}),t._v("\n              ")])])])],1)],1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"list-none list-inside"},[e("li",[e("a",{attrs:{href:"https://renoirboulanger.com/files/resume/Resume-Renoir-Boulanger.pdf",title:"Renoir Boulanger Resume in Adobe Acrobat Format"}},[this._v("\n              PDF\n            ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://renoirboulanger.com/files/resume/Resume-Renoir-Boulanger.doc",title:"Renoir Boulanger Resume in Microsoft Word Format"}},[this._v("\n              Word\n            ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://registry.jsonresume.org/renoirb",title:"Renoir Boulanger Resume in HTML",target:"_blank"}},[this._v("\n              HTML hosted on JSONResume public registry\n            ")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AppCodeHighlighter:n(332).default,CodeBlock:n(286).default,CodeGroup:n(287).default})}}]);