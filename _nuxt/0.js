(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{333:function(t,e,n){!function(t){"use strict";var e={},n={inheritAttrs:!1,render:function(t){return this.svgElSource?t("svg",{on:this.$listeners,attrs:Object.assign(this.getSvgAttrs(this.svgElSource),(e=this.$attrs,Object.keys(e).reduce((function(t,n){return!1!==e[n]&&null!==e[n]&&void 0!==e[n]&&(t[n]=e[n]),t}),{}))),domProps:{innerHTML:this.getSvgContent(this.svgElSource)}}):null;var e},props:{src:{type:String,required:!0},title:{type:String},transformSource:{type:Function,default:function(svg){return svg}},keepDuringLoading:{type:Boolean,default:!0}},data:function(){return{svgElSource:null}},watch:{src:function(t){this.getSource(t)}},mounted:function(){this.getSource(this.src)},methods:{getSvgAttrs:function(t){var e={},n=t.attributes;if(!n)return e;for(var i=n.length-1;i>=0;i--)e[n[i].name]=n[i].value;return e},getSvgContent:function(t){return t=t.cloneNode(!0),t=this.transformSource(t),this.title&&function(svg,title){var t=svg.getElementsByTagName("title");if(t.length)t[0].textContent=title;else{var e=document.createElementNS("http://www.w3.org/2000/svg","title");e.textContent=title,svg.appendChild(e)}}(t,this.title),t.innerHTML},getSource:function(t){var n=this;e[t]||(e[t]=this.download(t)),this.svgElSource&&e[t].isPending()&&!this.keepDuringLoading&&(this.svgElSource=null,this.$emit("unloaded")),e[t].then((function(svg){n.svgElSource=svg,n.$nextTick((function(){n.$emit("loaded",n.$el)}))})).catch((function(r){n.svgElSource&&(n.svgElSource=null,n.$emit("unloaded")),delete e[t],n.$emit("error",r)}))},download:function(t){return function(t){if(t.isPending)return t;var e=!0,n=t.then((function(t){return e=!1,t}),(function(t){throw e=!1,t}));return n.isPending=function(){return e},n}(new Promise((function(e,n){var r=new XMLHttpRequest;r.open("GET",t,!0),r.onload=function(){if(r.status>=200&&r.status<400)try{var t=(new DOMParser).parseFromString(r.responseText,"text/xml").getElementsByTagName("svg")[0];t?e(t):n(new Error('Loaded file is not valid SVG"'))}catch(t){n(t)}else n(new Error("Error loading SVG"))},r.onerror=n,r.send()})))}}},r={install:function(t){t.component("inline-svg",n)}};t.InlineSvgComponent=n,t.InlineSvgPlugin=r,t.default=n,Object.defineProperty(t,"__esModule",{value:!0})}(e)}}]);