webpackJsonp([1],{"+eVZ":function(t,e){},ArnY:function(t,e){},D0oF:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i={name:"App",data:function(){return{smMenuVisible:!1,menu:{about:{route:{name:"PageView",params:{slug:"about"}},label:"About"},posts:{route:{name:"PostList"},label:"Posts"},bib:{route:{name:"BibList"},label:"Bibliography"},dist:{route:{name:"DistList"},label:"Distributor"}}}},methods:{show_menu:function(){this.smMenuVisible=!this.smMenuVisible}},mounted:function(){this.$Progress.finish()},created:function(){var t=this;this.$Progress.start(),this.$router.beforeEach(function(e,s,n){if(void 0!==e.meta.progress){var i=e.meta.progress;t.$Progress.parseMeta(i)}t.$Progress.start(),n()}),this.$router.afterEach(function(e,s){t.$Progress.finish()})}};function a(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],a("js",new Date),a("config","UA-78070436-5");var r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"clearfix",attrs:{id:"masthead"}},[s("h1",[s("router-link",{attrs:{to:{name:"Home",params:{}}}},[t._v("금치산자레시피")])],1),t._v(" "),s("nav",[s("ul",{staticClass:"on-lg"},t._l(t.menu,function(e,n){return s("li",{key:n,staticClass:"menu-item"},[s("router-link",{attrs:{to:e.route}},[t._v(t._s(e.label))])],1)})),t._v(" "),s("ul",{staticClass:"on-sm"},[s("li",{staticClass:"show-menu"},[s("a",{attrs:{href:"#"},on:{click:t.show_menu}},[t._v("MENU")])]),t._v(" "),t._l(t.menu,function(e,n){return s("li",{directives:[{name:"show",rawName:"v-show",value:t.smMenuVisible,expression:"smMenuVisible"}],key:n,staticClass:"menu-item"},[s("router-link",{attrs:{to:e.route}},[t._v(t._s(e.label))])],1)})],2)])]),t._v(" "),s("router-view"),t._v(" "),s("vue-progress-bar"),t._v(" "),s("footer")],1)},staticRenderFns:[]};var o=s("VU/8")(i,r,!1,function(t){s("ZQdi")},null,null).exports,u=s("/ocq"),l=s("p3jY"),c=s.n(l),m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"post"},[s("div",{staticClass:"postheader"}),t._v(" "),s("ul",t._l(t.lists,function(e){return s("li",{key:e.id,staticClass:"citation"},[t._v("\n      "+t._s(e.author)+'. "'),s("router-link",{attrs:{to:{name:"PostView",params:{slug:e.slug}}}},[t._v(t._s(e.title))]),t._v('" '+t._s(e.pub_date)+". Web.\n    ")],1)}))])},staticRenderFns:[]};var f=s("VU/8")({name:"PostList",data:function(){return{lists:[]}},methods:{get_lists:function(t){var e=this;this.$http.get("/post/").then(function(s){if(200===s.status)return e.lists=s.data,t})}},metaInfo:function(){return{title:"List of Posts: gtsz.rcp"}},beforeRouteEnter:function(t,e,s){s(function(t){return t.get_lists()})},beforeRouteUpdate:function(t,e,s){this.lists=[],this.get_lists(),s()}},m,!1,function(t){s("D0oF")},null,null).exports,h=s("/kJX"),p=s("PJh5"),d=s.n(p),_={name:"PostView",components:{Carousel:h.Carousel,Slide:h.Slide},data:function(){return{content:{title:"loading"}}},computed:{api_url:function(){return"/"+("PageView"===this.$route.name?"page":"post")+"/"+this.$route.params.slug+"/"}},methods:{get_content:function(){var t=this;this.$http.get(this.api_url).then(function(e){200===e.status&&t.set_content(e.data)})},set_content:function(t){t.content=this.$showdown.makeHtml(t.content),t.pub_date=d()(t.pub_date).format("ll"),this.content=t}},metaInfo:function(){return{title:this.content.title,titleTemplate:"%s-Posts: gtsz.rcp"}},beforeRouteEnter:function(t,e,s){s(function(t){return t.get_content()})},beforeRouteUpdate:function(t,e,s){this.content=[],this.get_content(),s()}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"post"},[t.content.images?s("carousel",{staticClass:"images",attrs:{"per-page":1,loop:!0,autoplay:!0}},t._l(t.content.images.images,function(t,e){return s("slide",{key:e},[s("img",{attrs:{src:t.image,alt:t.name}})])})):t._e(),t._v(" "),s("section",{staticClass:"content"},[s("div",{staticClass:"postheader"},[s("h1",[t._v(t._s(t.content.title))])]),t._v(" "),s("div",{staticClass:"entry",domProps:{innerHTML:t._s(t.content.content)}}),t._v(" "),s("div",{staticClass:"date"},[t._v(t._s(t.content.pub_date))])])],1)},staticRenderFns:[]};var g=s("VU/8")(_,v,!1,function(t){s("us4u")},null,null).exports,j=s("PJh5"),b={name:"BibView",data:function(){return{lists:[]}},methods:{get_lists:function(){var t=this;this.$http.get("/book/").then(function(e){200===e.status&&(t.lists=e.data)})},date_format:function(t){return j(t).format("Y")},name_implode:function(t){return t.map(function(t){return t.name}).join(", ")}},metaInfo:function(){return{title:"Bibliography: gtsz.rcp"}},beforeRouteEnter:function(t,e,s){s(function(t){return t.get_lists()})},beforeRouteUpdate:function(t,e,s){this.lists=[],this.get_lists(),s()}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"page"},[t._m(0),t._v(" "),s("div",{staticClass:"entry"},[s("ul",t._l(t.lists,function(e){return s("li",{key:e.id,staticClass:"citation"},[e.writer.length>0?s("span",{staticClass:"writer"},[t._v(t._s(t.name_implode(e.writer))+".")]):t._e(),t._v(" "),e.translator.length>0?s("span",{staticClass:"translator"},[t._v(t._s(t.name_implode(e.translator))+" 번역. ")]):t._e(),t._v(" "),e.editor.length>0?s("span",{staticClass:"editor"},[t._v(t._s(t.name_implode(e.editor))+" 편집,")]):t._e(),t._v(" "),s("router-link",{attrs:{to:{name:"BibView",params:{slug:e.slug}}}},[t._v(t._s(e.title))]),t._v(".\n        "+t._s(t.name_implode(e.publisher))+": "+t._s(e.publisher_place)+", "+t._s(t.date_format(e.pub_date))+"\n      ")],1)}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"postheader"},[e("h1",[this._v("Bibliography")])])}]};var y=s("VU/8")(b,w,!1,function(t){s("ZlZG")},null,null).exports,k=s("fZjL"),C=s.n(k),z=s("ViqS"),P=s.n(z),V={name:"BibView",components:{Carousel:h.Carousel,Slide:h.Slide},data:function(){return{content:[],meta:{writer:new E("Writer",R),translator:new E("Translator",R),designer:new E("Designer",R),publisher:new E("Publisher",R),language:new E("Written in",L),publisher_place:new E("Place of Publication",L),medium:new E("Medium of the Book",L),page_amt:new E("Page Amount",function(t){return t+" Pages"}),binding_type:new E("Binding Type",L),colorspace:new E("Printed in",L),price:new E("Price",function(t){return"￦ "+P()(t).format("0,0")})}}},methods:{get_content:function(){var t=this;this.$http.get("/book/"+this.$route.params.slug+"/").then(function(e){200===e.status&&(t.content=t.set_content(e.data,t.$showdown),t.set_meta(e.data))})},set_content:function(t,e){var s={};return["title","summary","toc","figs","distributor","images"].map(function(n){null!==t[n]&&("string"!=typeof t[n]&&t[n].length<1||("string"!=typeof t[n]||"title"===n?s[n]=t[n]:s[n]=e.makeHtml(t[n])))}),s},set_meta:function(t){var e=this;return C()(this.meta).map(function(s){e.meta[s].set_value(t[s])})}},metaInfo:function(){return{title:this.content.title,titleTemplate:"%s-bibliography: gtsz.rcp"}},beforeRouteEnter:function(t,e,s){s(function(t){return t.get_content()})},beforeRouteUpdate:function(t,e,s){this.content=[],this.get_content(),s()}};function E(t,e){this.label=t,this.valueFactory=e}function R(t){if(void 0!==t)return t.map(function(t){return t.name}).join(", ")}function L(t){return t}E.prototype.set_value=function(t){this.value=t},E.prototype.get_value=function(){return this.valueFactory(this.value)};var F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"post"},[t.content.images?s("carousel",{staticClass:"images",attrs:{"per-page":1,loop:!0,autoplay:!0}},t._l(t.content.images.images,function(t,e){return s("slide",{key:e},[s("img",{attrs:{src:t.image,alt:t.name}})])})):t._e(),t._v(" "),s("section",{staticClass:"content"},[s("header",{staticClass:"postheader"},[s("h1",[t._v(t._s(t.content.title))]),t._v(" "),t.content.subtitle?s("h2",[t._v(t._s(t.content.subtitle))]):t._e()]),t._v(" "),s("section",{staticClass:"meta"},t._l(t.meta,function(e,n){return s("dl",{key:n},[s("dt",[t._v(t._s(e.label))]),t._v(" "),s("dd",[t._v(t._s(e.get_value()))])])})),t._v(" "),t.content.summary?s("section",{staticClass:"summary"},[s("h2",{attrs:{id:"summary"}},[t._v("Summary")]),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content.summary)}})]):t._e(),t._v(" "),t.content.toc?s("section",[s("h2",{attrs:{id:"table-of-contents"}},[t._v("Table of Contents")]),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content.toc)}})]):t._e(),t._v(" "),t.content.figs?s("section",{staticClass:"figs"},[s("h2",{attrs:{id:"list-of-figs"}},[t._v("List of FIGs")]),t._v(" "),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content.figs)}})]):t._e(),t._v(" "),t.content.distributor?s("section",{staticClass:"distributor"},[s("h2",[t._v("Distributor")]),t._v(" "),s("ul",t._l(t.content.distributor,function(e,n){return s("li",{key:n},[s("a",{attrs:{href:e.website}},[t._v(t._s(e.name))])])}))]):t._e()])],1)},staticRenderFns:[]};var $=s("VU/8")(V,F,!1,function(t){s("ArnY")},null,null).exports,x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"page"},[t._m(0),t._v(" "),s("div",{staticClass:"entry"},[s("table",{staticClass:"distributor"},[t._m(1),t._v(" "),s("tbody",t._l(t.lists,function(e){return s("tr",{key:e.id},[s("td",[s("a",{attrs:{href:e.website}},[t._v(t._s(e.name))])]),t._v(" "),s("td",[t._v(t._s(e.Region))]),t._v(" "),s("td",[t._v(t._s(e.country))]),t._v(" "),s("td",[s("a",{attrs:{href:e.address_map}},[t._v(t._s(e.address))])])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"postheader"},[e("h1",[this._v("Distributor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Shop Name")]),this._v(" "),e("th",[this._v("Region")]),this._v(" "),e("th",[this._v("Country")]),this._v(" "),e("th",[this._v("Address")])])])}]};var U=s("VU/8")({name:"DistList",data:function(){return{lists:[]}},methods:{get_lists:function(){var t=this;this.$http.get("/dist/").then(function(e){200===e.status&&(t.lists=e.data.map(function(t){return t.address_map="https://www.google.co.kr/maps/place/"+t.address,t}))})}},metaInfo:function(){return{title:"distributors: gtsz.rcp"}},beforeRouteEnter:function(t,e,s){s(function(t){return t.get_lists()})},beforeRouteUpdate:function(t,e,s){this.lists=[],this.get_lists(),s()}},x,!1,function(t){s("+eVZ")},null,null).exports,H={name:"LinksView",data:function(){return{data:!1}},computed:{api_url:function(){return"/links/"+this.$route.params.slug+"/"}},methods:{get_content:function(){var t=this;this.$http.get(this.api_url).then(function(e){200===e.status&&t.set_content(e.data)})},set_content:function(t){this.data=t,window.location.href=t.url}},beforeRouteEnter:function(t,e,s){s(function(t){return t.get_content()})},beforeRouteUpdate:function(t,e,s){this.content=[],this.get_content(),s()}},q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("article",[this.data?e("div",{staticClass:"msg"},[this._v(this._s(this.data.title)+" 으로 이동합니다.")]):this._e()])},staticRenderFns:[]};var B=s("VU/8")(H,q,!1,function(t){s("XWBq")},null,null).exports;n.a.use(u.a),n.a.use(c.a);var M={func:[{call:"color",modifier:"temp",argument:"#ffb000"},{call:"fail",modifier:"temp",argument:"#6e0000"},{call:"location",modifier:"temp",argument:"top"},{call:"transition",modifier:"temp",argument:{speed:"1.5s",opacity:"0.6s",termination:400}}]},N=new u.a({routes:[{path:"/",name:"Home",component:f,meta:{progress:M}},{path:"/page/:slug",name:"PageView",component:g,meta:{progress:M}},{path:"/post",name:"PostList",component:f,meta:{progress:M}},{path:"/post/:slug",name:"PostView",component:g,meta:{progress:M}},{path:"/bib",name:"BibList",component:y,meta:{progress:M}},{path:"/bib/:slug",name:"BibView",component:$,meta:{progress:M}},{path:"/dist",name:"DistList",component:U,meta:{progress:M}},{path:"/links/:slug",name:"LinksView",component:B,meta:{progress:M}}]}),S=s("mtWM"),O=s.n(S).a.create({baseURL:"http://app.gtszrcp.gtszoffice.com"});O.interceptors.request.use(function(t){return Z.$Progress.start(),t}),O.interceptors.response.use(function(t){return Z.$Progress.finish(),t});var D=O,T=s("HKE2"),W=s.n(T),X=s("zYko"),I=s.n(X);n.a.config.productionTip=!1,n.a.prototype.$http=D,n.a.prototype.$showdown=new W.a.Converter({headerLevelStart:2}),n.a.use(I.a,{color:"#bffaf3",failedColor:"#874b4b",thickness:"5px",transition:{speed:"0.2s",opacity:"0.6s",termination:300},autoRevert:!0,location:"left",inverse:!1});var Z=e.default=new n.a({el:"#app",router:N,components:{App:o},template:"<App/>",metaInfo:{title:"gtsz.rcp HOME"}}).$mount("#app")},XWBq:function(t,e){},ZQdi:function(t,e){},ZlZG:function(t,e){},us4u:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return s(a(t))}function a(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.40d1ba2432affc1e3927.js.map