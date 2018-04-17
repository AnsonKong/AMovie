(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{412:function(t,e,a){"use strict";var r=a(56),s=Object(r.a)({name:"Aka",props:["src","routeName"]},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._l(t.src,function(e,r){return[0!==r?a("span",[t._v("/")]):t._e(),t._v(" "),t.routeName&&e.id?a("span",[a("router-link",{attrs:{to:{name:t.routeName,params:{id:e.id}}}},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")])],1):a("span",[t._v("\n\t\t\t"+t._s(e.name||e)+"\n\t\t")])]})],2)},[],!1,null,null,null);e.a=s.exports},413:function(t,e,a){"use strict";var r={name:"MovieRankItem",props:["src"],computed:{parsedTo:function(){return{path:"/subject/"+this.realSubject.id}},parsedRate:function(){return Number((this.realSubject.rating.average/2).toFixed(1))},parsedTitle:function(){var t=this.realSubject.title,e=this.realSubject.original_title;return t===e?t:t+" / "+e},realSubject:function(){return this.src.subject||this.src}},components:{Aka:a(412).a}},s=a(56);var n=function(t){a(415)},i=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("tbody",[a("tr",[a("td",{attrs:{valign:"top"}},[a("router-link",{staticClass:"info-pic",attrs:{to:t.parsedTo,title:t.parsedTitle}},[a("img",{attrs:{src:t.realSubject.images.small,width:"115px",height:"171px",alt:t.realSubject.title}})])],1),t._v(" "),a("td",{attrs:{valign:"top"}},[a("ul",{staticClass:"info-list"},[a("li",[a("router-link",{attrs:{to:t.parsedTo,title:t.parsedTitle}},[a("span",{attrs:{alt:t.parsedTitle}},[t._v(t._s(t.parsedTitle))])]),t._v(" "),a("span",{staticClass:"year"},[t._v(t._s("("+t.realSubject.year+")"))]),t._v(" "),t.src.new?a("el-tag",{attrs:{size:"mini"}},[t._v("新上映")]):t._e()],1),t._v(" "),t.src.rank?a("li",[a("span",[t._v("排名: "+t._s(t.src.rank))])]):t._e(),t._v(" "),t.src.box?a("li",[a("span",[t._v("票房: "+t._s(t.src.box))])]):t._e(),t._v(" "),a("li",[t._v("类型: \n\t\t\t\t\t\t"),a("Aka",{attrs:{src:t.realSubject.genres}})],1),t._v(" "),t.realSubject.directors&&t.realSubject.directors.length?a("li",[t._v("导演: \n\t\t\t\t\t\t"),a("Aka",{attrs:{src:t.realSubject.directors,routeName:"celebrity"}})],1):t._e(),t._v(" "),t.realSubject.casts&&t.realSubject.casts.length?a("li",[t._v("主演: \n\t\t\t\t\t\t"),a("Aka",{attrs:{src:t.realSubject.casts,routeName:"celebrity"}})],1):t._e(),t._v(" "),a("li",[a("el-rate",{attrs:{value:t.parsedRate,disabled:"","show-score":"","text-color":"#ff9900"}})],1),t._v(" "),a("li",[a("span",[t._v(t._s(t.realSubject.collect_count)+"人看过")])])])])])])])},[],!1,n,"data-v-2101a86f",null);e.a=i.exports},414:function(t,e,a){(t.exports=a(12)(!1)).push([t.i,".year[data-v-2101a86f]{color:#888}ul[data-v-2101a86f]{padding-left:20px}",""])},415:function(t,e,a){var r=a(414);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(11).default)("55668e6e",r,!0,{})},419:function(t,e,a){(t.exports=a(12)(!1)).push([t.i,".rank-item[data-v-4db50aec]{margin:10px 0}",""])},420:function(t,e,a){var r=a(419);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(11).default)("359813d3",r,!0,{})},433:function(t,e,a){"use strict";a.r(e);var r=a(412),s=a(413),n={name:"Celebrity",data:function(){return{src:null}},mounted:function(){this.loadApi()},watch:{$route:"loadApi"},props:["api"],methods:{loadApi:function(){var t=this,e=this.$route.params.id;this.$jsonpHelper(this.api+e,null,function(e,a){e||(t.src=a)})}},components:{Aka:r.a,MovieRankItem:s.a}},i=a(56);var c=function(t){a(420)},l=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.src?a("div",[a("h1",[t._v("\n\t\t"+t._s(t.src.name)+" / "+t._s(t.src.name_en)+"\n\t")]),t._v(" "),a("ul",{staticClass:"info-list"},[a("li",[t._v("性别: "+t._s(t.src.gender))]),t._v(" "),t.src.born_place?a("li",[t._v("出生地: "+t._s(t.src.born_place))]):t._e(),t._v(" "),t.src.aka_en&&t.src.aka_en.length?a("li",[t._v("更多外文名: \n\t\t\t"),a("Aka",{attrs:{src:t.src.aka_en}})],1):t._e(),t._v(" "),t.src.aka&&t.src.aka.length?a("li",[t._v("更多中文名: \n\t\t\t"),a("Aka",{attrs:{src:t.src.aka}})],1):t._e()]),t._v(" "),a("h3",[t._v("\n\t\t最受好评的5部作品\n\t")]),t._v(" "),a("ol",{staticClass:"list-rank"},t._l(t.src.works,function(t){return a("MovieRankItem",{key:t.id,staticClass:"rank-item",attrs:{src:t}})}))]):t._e()},[],!1,c,"data-v-4db50aec",null);e.default=l.exports}}]);