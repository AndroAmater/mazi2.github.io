(function(e){function t(t){for(var s,_,r=t[0],l=t[1],u=t[2],a=0,p=[];a<r.length;a++)_=r[a],Object.prototype.hasOwnProperty.call(n,_)&&n[_]&&p.push(n[_][0]),n[_]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],s=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(s=!1)}s&&(o.splice(t--,1),e=_(_.s=i[0]))}return e}var s={},n={app:0},o=[];function _(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,_),i.l=!0,i.exports}_.m=e,_.c=s,_.d=function(e,t,i){_.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},_.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},_.t=function(e,t){if(1&t&&(e=_(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(_.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)_.d(i,s,function(t){return e[t]}.bind(null,s));return i},_.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return _.d(t,"a",t),t},_.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},_.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"231f":function(e,t,i){"use strict";i("97c7")},"47a4":function(e,t,i){"use strict";i("cfb6")},"56d7":function(e,t,i){"use strict";i.r(t);i("e623"),i("e379"),i("5dc8"),i("37e1");var s=i("7a23");function n(e,t,i,n,o,_){var r=this,l=Object(s["i"])("Table"),u=Object(s["i"])("Graph");return Object(s["g"])(),Object(s["c"])("div",{id:"app",onMousedown:t[4]||(t[4]=function(e){return r.$refs.graf.startDrag(e)}),onMousemove:t[5]||(t[5]=function(e){return _.move(e)}),onMouseup:t[6]||(t[6]=function(e){return r.$refs.graf.stopDrag(e)})},[Object(s["f"])(l,{ref:"table",onNewvalue:t[1]||(t[1]=function(e){return _.changevalue(e)}),onAutoscale:t[2]||(t[2]=function(e){return r.$refs.graf.autoscale(e)}),points:e.returned},null,8,["points"]),Object(s["f"])(u,{ref:"graf",onNewExprPoint:t[3]||(t[3]=function(e){return _.changevalueGraph(e)}),values:e.sent},null,8,["values"])],32)}i("c975"),i("d3b7"),i("ddb0");var o={class:"spacer"},_=Object(s["f"])("line",{x1:"40",y1:"490",x2:"530",y2:"490",stroke:"black"},null,-1),r=Object(s["f"])("line",{x1:"40",y1:"0",x2:"40",y2:"490",stroke:"black"},null,-1),l={class:"axis",x:"290",y:"530"},u={class:"axis",transform:"translate(11,245) rotate(-90)"},c={key:0};function a(e,t,i,n,a,p){return Object(s["g"])(),Object(s["c"])(s["a"],null,[Object(s["f"])("div",o,[(Object(s["g"])(),Object(s["c"])("svg",{id:"wrapper",onClick:t[1]||(t[1]=function(){return p.createDetailPoint&&p.createDetailPoint.apply(p,arguments)}),onWheel:t[2]||(t[2]=Object(s["m"])((function(e){return p.scrollSet(e)}),["prevent"]))},[_,r,(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.xAxis.points,(function(e){return Object(s["g"])(),Object(s["c"])("line",{class:"marks",key:e,x1:e.x+40,y1:"486",x2:e.x+40,y2:"494"},null,8,["x1","x2"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.yAxis.points,(function(e){return Object(s["g"])(),Object(s["c"])("line",{class:"marks",key:e,x1:"36",y1:490-e.x,x2:"44",y2:490-e.x},null,8,["y1","y2"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.xAxis.points,(function(e){return Object(s["g"])(),Object(s["c"])("line",{class:"grid",key:e,x1:e.x+40,y1:"0",x2:e.x+40,y2:"490"},null,8,["x1","x2"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.yAxis.points,(function(e){return Object(s["g"])(),Object(s["c"])("line",{class:"grid",key:e,x1:"40",y1:490-e.x,x2:"530",y2:490-e.x},null,8,["y1","y2"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.xAxis.points,(function(t){return Object(s["g"])(),Object(s["c"])("text",{id:"numberX"+e.xAxis.points.indexOf(t),key:t,x:t.x+40,y:"509",onClick:function(e){return p.changeStep(t,"this.xAxis")}},Object(s["j"])(t.value),9,["id","x","onClick"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.yAxis.points,(function(t){return Object(s["g"])(),Object(s["c"])("text",{id:"numberY"+e.yAxis.points.indexOf(t),key:t,x:"26",y:490-t.x+5,onClick:function(e){return p.changeStep(t,"this.yAxis")}},Object(s["j"])(t.value),9,["id","y","onClick"])})),128)),Object(s["f"])("text",l,Object(s["j"])(i.values.X),1),Object(s["f"])("text",u,Object(s["j"])(i.values.Y),1),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(i.values.values,(function(e){return Object(s["g"])(),Object(s["c"])("line",{class:"details",key:e,x1:p.userPointX(e)+40,y1:490-p.userPointY(e),x2:p.userPointX(e)+40,y2:"507",visibility:e.pointNameVisibility},null,8,["x1","y1","x2","visibility"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(i.values.values,(function(e){return Object(s["g"])(),Object(s["c"])("text",{class:"detailsText",key:e,x:p.userPointX(e)+40,y:"522",visibility:e.pointNameVisibility},Object(s["j"])(e.x),9,["x","visibility"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(i.values.values,(function(e){return Object(s["g"])(),Object(s["c"])("line",{class:"details",key:e,x1:"30",y1:490-p.userPointY(e),x2:p.userPointX(e)+40,y2:490-p.userPointY(e),visibility:e.pointNameVisibility},null,8,["y1","x2","y2","visibility"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(i.values.values,(function(e){return Object(s["g"])(),Object(s["c"])("text",{class:"detailsText",key:e,x:"15",y:490-p.userPointY(e)+4,visibility:e.pointNameVisibility},Object(s["j"])(e.y),9,["y","visibility"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(i.values.values,(function(e){return Object(s["g"])(),Object(s["c"])("text",{key:e,x:p.userPointX(e)+40,y:490-p.userPointY(e)-10,visibility:e.pointNameVisibility},Object(s["j"])(e.valueName),9,["x","y","visibility"])})),128)),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(i.values.values,(function(e){return Object(s["g"])(),Object(s["c"])("circle",{class:"userPoints",key:e,cx:p.userPointX(e)+40,cy:490-p.userPointY(e),r:"3"},null,8,["cx","cy"])})),128)),0==i.values.toggle?(Object(s["g"])(),Object(s["c"])("svg",c,[(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(i.values.values,(function(e){return Object(s["g"])(),Object(s["c"])("line",{class:"graph",key:e,x1:p.graphX(e)+40,y1:490-p.graphY(e),x2:p.userPointX(e)+40,y2:490-p.userPointY(e)},null,8,["x1","y1","x2","y2"])})),128))])):Object(s["d"])("",!0),Object(s["f"])("circle",{cx:e.detailLive.x+40,cy:490-e.detailLive.y,r:"3",fill:"#cc5534",visibility:e.detailLive.visibility},null,8,["cx","cy","visibility"]),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(i.values.values,(function(e){return Object(s["g"])(),Object(s["c"])("circle",{key:e,onMousedown:function(t){return p.visibilityLock(e)},onMouseover:function(t){return p.pointNameVisibility(e,"visible")},onMouseleave:function(t){return p.pointNameVisibility(e,"hidden")},cx:p.userPointX(e)+40,cy:490-p.userPointY(e),r:"10",opacity:"0",fill:"red"},null,40,["onMousedown","onMouseover","onMouseleave","cx","cy"])})),128))],32))]),Object(s["e"])(" "+Object(s["j"])(e.status),1)],64)}var p=i("6aad");i("231f");p["a"].render=a;var h=p["a"],d={id:"table"},x=Object(s["f"])("p",{id:"customGraphLabel"},"Expressions",-1),b=Object(s["f"])("hr",null,null,-1),f={id:"values"},v={id:"dropdown-content"},y={id:"buttons"},O={class:"buttons"},j={class:"buttons"},g=Object(s["f"])("p",{id:"pointsLabel"},"Points",-1),m=Object(s["f"])("hr",null,null,-1),E={id:"values"},A=Object(s["f"])("td",{class:"emptyCell"},null,-1),P={class:"dotExpr"},M={id:"buttons"},D={class:"buttons"},k={class:"buttons"},w=Object(s["f"])("hr",null,null,-1),C=Object(s["f"])("p",{id:"graphLabel"},"Connect points",-1),B={class:"switch"},I=Object(s["f"])("span",{class:"slider"},null,-1),T=Object(s["f"])("br",null,null,-1),L={key:0},U={class:"switch"},W=Object(s["f"])("span",{class:"slider"},null,-1),R=Object(s["f"])("hr",null,null,-1),K=Object(s["f"])("p",{id:"stepLabel"},"Step",-1),q={id:"step"},S=Object(s["f"])("hr",null,null,-1),N={id:"autoscale"},Y={class:"buttons"};function X(e,t,i,n,o,_){return Object(s["g"])(),Object(s["c"])("div",d,[x,b,Object(s["f"])("table",f,[(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.graphs,(function(i){return Object(s["g"])(),Object(s["c"])("tr",{key:i},[Object(s["f"])("th",{class:"graphName",id:"rowGraph"+i.index,onClick:function(e){return _.changeVisibility(i)}},[Object(s["l"])(Object(s["f"])("input",{onInput:t[1]||(t[1]=function(){return _.emit&&_.emit.apply(_,arguments)}),"onUpdate:modelValue":function(e){return i.valueName=e},placeholder:"Expr 1"},null,40,["onUpdate:modelValue"]),[[s["k"],i.valueName]]),Object(s["f"])("div",v,[(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.colors,(function(e){return Object(s["g"])(),Object(s["c"])("tr",{key:e},[Object(s["f"])("td",{onClick:function(t){return _.changeGraphColor(i,e)}},[Object(s["f"])("span",{class:"dot",style:"background-color:"+e+";"},null,4)],8,["onClick"])])})),128))])],8,["id","onClick"]),Object(s["f"])("td",null,[Object(s["l"])(Object(s["f"])("input",{onInput:t[2]||(t[2]=function(){return _.emit&&_.emit.apply(_,arguments)}),onChange:t[3]||(t[3]=function(){return _.updatePoints&&_.updatePoints.apply(_,arguments)}),class:"graphs","onUpdate:modelValue":function(e){return i.input=e},placeholder:"y = x"},null,40,["onUpdate:modelValue"]),[[s["k"],i.input]])])])})),128))]),Object(s["f"])("table",y,[Object(s["f"])("td",O,[Object(s["f"])("button",{onClick:t[4]||(t[4]=function(){return _.clickPlus&&_.clickPlus.apply(_,arguments)})},"+")]),Object(s["f"])("td",j,[Object(s["f"])("button",{onClick:t[5]||(t[5]=function(){return _.clickMinus&&_.clickMinus.apply(_,arguments)})},"−")])]),g,m,Object(s["f"])("table",E,[Object(s["f"])("tr",null,[A,Object(s["f"])("td",null,[Object(s["l"])(Object(s["f"])("input",{onInput:t[6]||(t[6]=function(){return _.emit&&_.emit.apply(_,arguments)}),"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.X=t}),placeholder:"X-axis"},null,544),[[s["k"],e.X]])]),Object(s["f"])("td",null,[Object(s["l"])(Object(s["f"])("input",{onInput:t[8]||(t[8]=function(){return _.emit&&_.emit.apply(_,arguments)}),"onUpdate:modelValue":t[9]||(t[9]=function(t){return e.Y=t}),placeholder:"Y-axis"},null,544),[[s["k"],e.Y]])])]),(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.values,(function(i){return Object(s["g"])(),Object(s["c"])("tr",{key:i.index,onClick:function(e){return _.highlight(i)}},[Object(s["f"])("th",{id:"row"+i.index,onMouseover:function(e){return _.setExprBind(i,"show")},onMouseleave:function(e){return _.setExprBind(i,"hide")}},[Object(s["l"])(Object(s["f"])("input",{onBlur:t[10]||(t[10]=function(){return _.clear&&_.clear.apply(_,arguments)}),onInput:t[11]||(t[11]=function(){return _.emit&&_.emit.apply(_,arguments)}),"onUpdate:modelValue":function(e){return i.valueName=e},placeholder:"Point 1"},null,40,["onUpdate:modelValue"]),[[s["k"],i.valueName]]),Object(s["f"])("div",{class:"dropdown-contentExpr",id:"dropdown-contentExpr"+i.index,style:{display:"none"},onMouseover:function(e){return _.setExprBind(i,"show")},onMouseleave:function(e){return _.setExprBind(i,"hide")}},[(Object(s["g"])(!0),Object(s["c"])(s["a"],null,Object(s["h"])(e.graphs,(function(e){return Object(s["g"])(),Object(s["c"])("tr",{key:e.index},[Object(s["f"])("td",{id:i.index+"Expr"+e.index,onClick:function(t){return _.bindExpr(e,i)}},[Object(s["f"])("span",P,Object(s["j"])(e.valueName),1)],8,["id","onClick"])])})),128))],40,["id","onMouseover","onMouseleave"])],40,["id","onMouseover","onMouseleave"]),Object(s["f"])("td",null,[Object(s["l"])(Object(s["f"])("input",{onBlur:t[12]||(t[12]=function(){return _.order&&_.order.apply(_,arguments)}),onInput:function(e){return _.pointExpr(i)},"onUpdate:modelValue":function(e){return i.x=e},placeholder:"0"},null,40,["onInput","onUpdate:modelValue"]),[[s["k"],i.x]])]),Object(s["f"])("td",null,[Object(s["l"])(Object(s["f"])("input",{onBlur:t[13]||(t[13]=function(){return _.clear&&_.clear.apply(_,arguments)}),"onUpdate:modelValue":function(e){return i.y=e},placeholder:"0"},null,40,["onUpdate:modelValue"]),[[s["k"],i.y]])])],8,["onClick"])})),128))]),Object(s["f"])("table",M,[Object(s["f"])("td",D,[Object(s["f"])("button",{onClick:t[14]||(t[14]=function(e){return _.clickPlus("point")})},"+")]),Object(s["f"])("td",k,[Object(s["f"])("button",{onClick:t[15]||(t[15]=function(e){return _.clickMinus("point")})},"−")])]),w,C,Object(s["f"])("label",B,[Object(s["f"])("input",{id:"toggle",onClick:t[16]||(t[16]=function(e){return _.connectPoints("toggle")}),onChange:t[17]||(t[17]=function(){return _.emit&&_.emit.apply(_,arguments)}),type:"checkbox"},null,32),I]),T,e.toggle?Object(s["d"])("",!0):(Object(s["g"])(),Object(s["c"])("div",L,[Object(s["f"])("label",U,[Object(s["f"])("input",{id:"connectZero",onClick:t[18]||(t[18]=function(e){return _.connectPoints("connectZero")}),onChange:t[19]||(t[19]=function(){return _.emit&&_.emit.apply(_,arguments)}),type:"checkbox"},null,32),W])])),R,K,Object(s["f"])("td",q,[Object(s["l"])(Object(s["f"])("input",{onChange:t[20]||(t[20]=function(){return _.emit&&_.emit.apply(_,arguments)}),"onUpdate:modelValue":t[21]||(t[21]=function(t){return e.step=t})},null,544),[[s["k"],e.step]])]),S,Object(s["f"])("table",N,[Object(s["f"])("td",Y,[Object(s["f"])("button",{onClick:t[22]||(t[22]=function(){return _.autoscale&&_.autoscale.apply(_,arguments)})},"Autoscale")])])])}var V=i("f472");i("91f3");V["a"].render=X;var G=V["a"],F={name:"App",data:function(){return{sent:[],returned:[],stepSave:0}},components:{Graph:h,Table:G},methods:{changevalue:function(e){var t=this;this.sent=e,this.$refs.graf.update(),setTimeout((function(){for(var i=0;i<t.sent.graphs.length;i++)t.$refs.graf.draw(i),t.stepSave!=e.step&&t.$refs.graf.stepUpdate(),t.stepSave=e.step}),1)},move:function(e){this.$refs.graf.move(e)},changevalueGraph:function(e){var t=this;this.returned=e,setTimeout((function(){t.$refs.table.status()}),1)}}};i("47a4");F.render=n;var $=F;Object(s["b"])($).mount("#app")},"6aad":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c975"),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("b680"),core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("2532"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("1276"),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("ddb0"),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("96cf"),regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_10__),_home_matjaz_Programming_Git_grapher2_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("1da1"),jquery__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("1157"),jquery__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);__webpack_exports__["a"]={name:"Graph",emits:["newExprPoint"],created:function(){for(var e=0;e<11;e++)this.xAxis.points.push({}),this.xAxis.points[e].x=500/this.xAxis.pointsNum*(e+1),this.xAxis.points[e].value=e+1,this.yAxis.points.push({}),this.yAxis.points[e].x=500/this.yAxis.pointsNum*(e+1),this.yAxis.points[e].value=e+1},mounted:function(){var e=this;window.addEventListener("keydown",(function(t){17===t.keyCode&&e.scrollModifier("pressed")})),window.addEventListener("keyup",(function(t){17===t.keyCode&&e.scrollModifier("released")}))},data:function(){return{xAxis:{points:[],pointsNum:11,line:500,posSave:0,start:0,drag:0,mult:1,step:1},yAxis:{points:[],pointsNum:11,line:500,posSave:0,start:0,drag:0,mult:1,step:1},userPoints:[],s:"",dragging:!1,autoscalex:!1,autoscaley:!1,args:[],newDetail:!1,detailLive:{x:0,y:0,visibility:"hidden"},scroll:{X:0,Y:0},scrollMod:!1,status:""}},props:{values:Object},methods:{startDrag:function(e){e.clientY<jquery__WEBPACK_IMPORTED_MODULE_12___default()("svg").offset().top+500&&jquery__WEBPACK_IMPORTED_MODULE_12___default()("svg").offset().top+480<e.clientY?(this.s=this.xAxis,this.dragging=!0,this.xAxis.start=e.clientX):e.clientX<jquery__WEBPACK_IMPORTED_MODULE_12___default()("svg").offset().left+50&&jquery__WEBPACK_IMPORTED_MODULE_12___default()("svg").offset().left+30<e.clientX&&(this.s=this.yAxis,this.dragging=!0,this.yAxis.start=e.clientY)},stopDrag:function(e){this.dragging&&(this.s==this.xAxis?this.xAxis.posSave=this.xAxis.posSave+this.xAxis.start-e.clientX:this.s==this.yAxis&&(this.yAxis.posSave=this.yAxis.posSave+this.yAxis.start-e.clientY),this.dragging=!1)},move:function(e){var t=this;if(this.dragging||this.autoscalex||this.autoscaley){var i;this.update(),this.autoscalex&&!this.autoscaley?(i=0,this.s=this.xAxis):this.autoscaley?(i=0,this.s=this.yAxis):i=this.s==this.xAxis?e.clientX:e.clientY,this.s!=this.xAxis||this.autoscalex?this.s!=this.yAxis||this.autoscaley?this.autoscaley?this.s.line=500+this.s.posSave:this.autoscalex&&!this.autoscaley&&(this.s.line=500-this.s.posSave):(this.s.drag=-(this.s.start-i),this.s.line=500+this.s.posSave-this.s.drag):(this.s.drag=this.s.start-i,this.s.line=500-this.s.posSave-this.s.drag),Math.abs(500-this.s.line)>this.s.points[0].x&&(500-this.s.line>0?this.s.pointsNum+=1:this.s.pointsNum-=1,this.s.line=500,this.s.posSave=0,this.s.drag=0,this.s.start=i);for(var s=0;s<this.s.pointsNum;s++)this.s.pointsNum>this.s.points.length?this.s.points.push({}):this.s.pointsNum<this.s.points.length&&this.s.points.pop(),this.s.points[s].x=this.s.line/this.s.pointsNum*(s+1);if(this.s.points.length>20||this.s.points.length<6&&this.s.mult>.007){var n;n=this.s.points.length>20?2:.5,this.s.points=[],this.s.pointsNum=11;for(var o=0;o<11;o++)this.s.points.push({}),this.s.points[o].x=500/this.s.pointsNum*(o+1);this.s.mult*=n}this.setPointNumbers()}else setTimeout((function(){t.liveDetail(e)}),10)},userPointX:function(e){for(var t,i=0;i<this.xAxis.points.length;i++)e.x>=this.xAxis.points[i].value?t=this.xAxis.points[i].x+(e.x-this.xAxis.points[i].value)/(this.xAxis.points[1].value-this.xAxis.points[0].value)*(this.xAxis.points[1].x-this.xAxis.points[0].x):e.x<this.xAxis.points[0].value&&(t=this.xAxis.points[0].x-(this.xAxis.points[0].value-e.x)/this.xAxis.points[0].value*this.xAxis.points[0].x);return t},userPointY:function(e){for(var t,i=0;i<this.yAxis.points.length;i++)e.y>=this.yAxis.points[i].value?t=this.yAxis.points[i].x+(e.y-this.yAxis.points[i].value)/(this.yAxis.points[1].value-this.yAxis.points[0].value)*(this.yAxis.points[1].x-this.yAxis.points[0].x):e.y<this.yAxis.points[0].value&&(t=this.yAxis.points[0].x-(this.yAxis.points[0].value-e.y)/this.yAxis.points[0].value*this.yAxis.points[0].x);return t},pointNameVisibility:function(e,t){e.lock?e.pointNameVisibility="visible":e.pointNameVisibility=t},visibilityLock:function(e){e.lock?e.lock=!1:e.lock=!0},graphX:function(e){var t;return t=e.index>=1?this.userPointX(this.values.values[e.index-1]):this.values.connectZero?0:this.userPointX(this.values.values[e.index]),t},graphY:function(e){var t;return t=e.index>=1?this.userPointY(this.values.values[e.index-1]):this.values.connectZero?0:this.userPointY(this.values.values[e.index]),t},autoscale:function(){var e=Object(_home_matjaz_Programming_Git_grapher2_0_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_11__["a"])(regeneratorRuntime.mark((function e(t,i,s){var n,o,_,r,l,u,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=this.values.values[this.values.values.length-1],o=this.values.values[0],_=this.xAxis.posSave,r=this.yAxis.posSave,l=1;l<this.values.values.length;l++)parseFloat(this.values.values[l].y)>parseFloat(o.y)&&(o=this.values.values[l]);u=0;case 6:if(!(u<9)){e.next=17;break}return c=this.xAxis.posSave,a=this.yAxis.posSave,"right"==s?(this.yAxis.posSave=a-25,this.xAxis.posSave=c+25):"left"==s&&(this.yAxis.posSave=a+25,this.xAxis.posSave=c-25),"both"!=i&&"x"!=i||(this.autoscalex=!0,this.move(t)),"both"!=i&&"y"!=i||(this.autoscaley=!0,this.move(t),this.autoscaley=!1),e.next=14,this.sleep(1);case 14:u++,e.next=6;break;case 17:this.xAxis.posSave=_,this.yAxis.posSave=r,this.autoscaley=!0,this.move(t),this.autoscaley=!1,this.move(t),this.autoscalex=!1,n.x>this.xAxis.points[this.xAxis.points.length-2].value&&o.y>this.yAxis.points[this.yAxis.points.length-2].value?this.autoscale(t,"both","right"):n.x>this.xAxis.points[this.xAxis.points.length-2].value?this.autoscale(t,"x","right"):o.y>this.yAxis.points[this.yAxis.points.length-2].value?this.autoscale(t,"y","right"):n.x<this.xAxis.points[this.xAxis.points.length-2].value/2&&o.y<this.yAxis.points[this.yAxis.points.length-2].value/2?this.autoscale(t,"both","left"):n.x<this.xAxis.points[this.xAxis.points.length-2].value/2?this.autoscale(t,"x","left"):o.y<this.yAxis.points[this.yAxis.points.length-2].value/2&&this.autoscale(t,"y","left");case 25:case"end":return e.stop()}}),e,this)})));function t(t,i,s){return e.apply(this,arguments)}return t}(),sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))},draw:function draw(point){null!=document.getElementById(point)&&document.getElementById(point).remove();var node=document.createElementNS("http://www.w3.org/2000/svg","svg"),origin={x:40,y:490},input=this.values.graphs[point].input;if(input.includes("x")||/\d/g.test(input)){var inputShort,inputConvertedOne,inputConvertedTwo;input.includes("y = ")?inputShort=input.replace("y = ",""):input.includes("y=")&&(inputShort=input.replace("y=","")),input.includes("x")?(inputConvertedOne=inputShort.replace("x","(i - 1) / this.xAxis.points[0].x * this.xAxis.mult"),inputConvertedTwo=inputShort.replace("x","i / this.xAxis.points[0].x * this.xAxis.mult")):/\d/g.test(input)&&(inputConvertedOne=inputConvertedTwo=parseFloat(inputShort));for(var i=1;i<500;i++){var line=document.createElementNS("http://www.w3.org/2000/svg","line"),color=this.values.graphs[point].color,style="stroke:"+color+";stroke-width:2",visibility=this.values.graphs[point].visibility;try{line.setAttribute("x1",i-1+origin.x),line.setAttribute("y1",-eval(inputConvertedOne)*this.yAxis.points[0].x/this.yAxis.mult+origin.y),line.setAttribute("x2",i+origin.x),line.setAttribute("y2",-eval(inputConvertedTwo)*this.yAxis.points[0].x/this.yAxis.mult+origin.y)}catch(_unused){line.setAttribute("x1",0),line.setAttribute("y1",0),line.setAttribute("x2",0),line.setAttribute("y2",0)}line.setAttribute("style",style),line.setAttribute("visibility",visibility),node.appendChild(line),node.setAttribute("id",this.values.graphs[point].index),document.getElementById("wrapper").appendChild(node)}try{this.args[point]=inputConvertedTwo}catch(_unused2){this.args[point]=void 0}}},update:function(){var e=this;setTimeout((function(){for(var t=0;t<e.values.graphs.length;t++)e.draw(t),null!=document.getElementById(t+1)&&document.getElementById(t+1).remove()}),1)},createDetailPoint:function(e){this.newDetail=!0,this.liveDetail(e)},liveDetail:function liveDetail(e){for(var i=e.clientX-jquery__WEBPACK_IMPORTED_MODULE_12___default()("svg").offset().left-40,a=0;a<this.values.graphs.length;a++){var y=Math.floor(eval(this.args[a])*this.yAxis.points[0].x/this.yAxis.mult);490-e.clientY+jquery__WEBPACK_IMPORTED_MODULE_12___default()("svg").offset().top<y+3&&490-e.clientY+jquery__WEBPACK_IMPORTED_MODULE_12___default()("svg").offset().top>y-3&&i>0&&"visible"==this.values.graphs[a].visibility?(this.detailLive.visibility="visible",this.detailLive.x=i,this.detailLive.y=y,this.newDetail&&"visible"==this.detailLive.visibility&&this.$emit("newExprPoint",{point:{x:i,X:(this.detailLive.x/this.xAxis.points[0].x*this.xAxis.mult).toFixed(3),y:y,Y:(this.detailLive.y/this.yAxis.points[0].x*this.yAxis.mult).toFixed(3)}})):this.detailLive.visibility="hidden"}this.newDetail=!1},changeStep:function changeStep(point,axis){var state;this.numberValue=point,this.s=eval(axis),state=this.s==this.xAxis?document.getElementById("numberX"+this.xAxis.points.indexOf(point)).style.fontWeight:document.getElementById("numberY"+this.yAxis.points.indexOf(point)).style.fontWeight;for(var i=0;i<this.s.points.length;i++)this.s==this.xAxis?document.getElementById("numberX"+i).style.fontWeight="500":document.getElementById("numberY"+i).style.fontWeight="500";"500"==state||""==state?this.s==this.xAxis?document.getElementById("numberX"+this.xAxis.points.indexOf(point)).style.fontWeight="900":document.getElementById("numberY"+this.yAxis.points.indexOf(point)).style.fontWeight="900":(this.s==this.xAxis?document.getElementById("numberX"+this.xAxis.points.indexOf(point)).style.fontWeight="500":document.getElementById("numberY"+this.yAxis.points.indexOf(point)).style.fontWeight="500",this.numberValue=void 0)},stepUpdate:function(){if(void 0!=this.numberValue){var e;if(this.xAxis.points.includes(this.numberValue)){e=this.xAxis.points.indexOf(this.numberValue)+1,this.s.step=this.values.step/e/this.s.mult,this.setPointNumbers();for(var t=0;t<this.xAxis.points.length;t++)document.getElementById("numberX"+t).style.fontWeight="500"}else{e=this.yAxis.points.indexOf(this.numberValue)+1,this.s.step=this.values.step/e/this.s.mult,this.setPointNumbers();for(var i=0;i<this.yAxis.points.length;i++)document.getElementById("numberY"+i).style.fontWeight="500"}this.numberValue=void 0}else this.xAxis.step=this.yAxis.step=this.values.step,this.s=this.xAxis,this.setPointNumbers(),this.s=this.yAxis,this.setPointNumbers()},setPointNumbers:function(){for(var e=0;e<this.s.points.length;e++){var t=(e+1)*this.s.mult*this.s.step;t.toString().includes(".")&&t.toString().split(".")[1].length>2?this.s.points[e].value=t.toFixed(2):this.s.points[e].value=t}},scrollSet:function(e){var t=this.yAxis.posSave,i=this.xAxis.posSave;this.scrollMod?e.deltaY<0?this.scroll.X+=20:this.scroll.X-=20:e.deltaY<0?this.scroll.Y+=20:this.scroll.Y-=20,this.yAxis.posSave=t+this.scroll.Y,this.xAxis.posSave=i+this.scroll.X,this.autoscalex=!0,this.autoscaley=!0,this.move(e),this.autoscaley=!1,this.move(e),this.autoscalex=!1,this.scroll.X=0,this.scroll.Y=0},scrollModifier:function(e){"pressed"==e?this.scrollMod=!0:"released"==e&&(this.scrollMod=!1)}}}},"91f3":function(e,t,i){"use strict";i("9622")},9622:function(e,t,i){},"97c7":function(e,t,i){},cfb6:function(e,t,i){},f472:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c975"),core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("2532"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("5319"),core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("ddb0"),core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__),count=0,countGraph=0;function cell(){this.valueName="Point "+(count+1),this.x=0,this.y=0,this.pointNameVisibility="hidden",this.lock=!1,this.index=count,count++}function graph(){this.valueName="Expr "+(countGraph+1),this.visibility="visible",this.input="",this.index=countGraph,this.converted="",countGraph++}__webpack_exports__["a"]={name:"Table",props:{points:Object},data:function(){return{values:[],X:"X-axis",Y:"Y-axis",toggle:!0,graphs:[],colors:["#cc5534","#7396ff","#90E580","#FFCF00"],step:1,connectZero:!1}},created:function(){this.values[0]=new cell,this.graphs[0]=new graph,this.graphs[0].color="#cc5534",this.values[0].x=4.5,this.values[0].y=6.5,setTimeout(this.emit,1),setTimeout(this.createColorSelect,1)},methods:{clickPlus:function(e){var t=this;"point"==e?(this.values[count]=new cell,setTimeout((function(){t.order()}),10)):(this.graphs[countGraph]=new graph,this.graphs[countGraph-1].color="#cc5534"),this.clear()},clickMinus:function(e){"point"==e?count>1&&(this.values.pop(),count--):countGraph>1&&(this.graphs.pop(),countGraph--,this.emit())},connectPoints:function(e){var t=document.getElementById(e);1==t.checked?"toggle"==e?this.toggle=!1:this.connectZero=!0:"toggle"==e?(this.connectZero=!1,this.toggle=!0):this.connectZero=!1},emit:function(){this.$emit("newvalue",{values:this.values,X:this.X,Y:this.Y,toggle:this.toggle,connectZero:this.connectZero,graphs:this.graphs,step:this.step})},autoscale:function(){this.$emit("autoscale")},order:function(){for(var e=0;e<this.values.length;e++){if(e!=this.values.length-1&&parseFloat(this.values[e].x)>parseFloat(this.values[e+1].x)){var t=this.values[e];this.values[e]=this.values[e+1],this.values[e+1]=t,this.order()}this.values[e].index=this.values.indexOf(this.values[e]),this.values[e].valueName="Point "+(this.values[e].index+1);for(var i=0;i<this.graphs.length;i++)document.getElementById(this.values[e].index+"Expr"+i).style.backgroundColor="white";void 0!=this.values[e].expr&&(document.getElementById(this.values[e].index+"Expr"+this.values[e].expr.index).style.backgroundColor=" #f1f1f1")}this.clear()},highlight:function(e){this.clear(),setTimeout((function(){document.getElementById("row"+e.index).style.borderLeft="2px solid #CD3810"}),2)},clear:function(){var e=this;setTimeout((function(){for(var t=0;t<e.values.length;t++)document.getElementById("row"+t).style.borderLeft=""}),1)},changeGraphColor:function(e,t){document.getElementById("rowGraph"+e.index).style.borderLeft="2px solid "+t,e.color=t,this.changeVisibility(e)},changeVisibility:function(e){"visible"==e.visibility?e.visibility="hidden":e.visibility="visible",this.emit()},status:function(){var e=this;this.values[count]=new cell,this.values[count-1].x=this.points.point.X,this.values[count-1].y=this.points.point.Y,setTimeout((function(){e.order()}),10)},setExprBind:function(e,t){"show"==t?document.getElementById("dropdown-contentExpr"+e.index).style.display="inline":"hide"==t&&(document.getElementById("dropdown-contentExpr"+e.index).style.display="none")},bindExpr:function(e,t){""==document.getElementById(t.index+"Expr"+e.index).style.backgroundColor&&(document.getElementById(t.index+"Expr"+e.index).style.backgroundColor="white");for(var i=document.getElementById(t.index+"Expr"+e.index).style.backgroundColor,s=0;s<this.graphs.length;s++)document.getElementById(t.index+"Expr"+s).style.backgroundColor="white";"white"==i?(document.getElementById(t.index+"Expr"+e.index).style.backgroundColor="#f1f1f1",t.expr=e):(document.getElementById(t.index+"Expr"+e.index).style.backgroundColor="white",t.expr=void 0)},pointExpr:function pointExpr(value){var input;void 0!=value.expr&&(value.expr.input.includes("y = ")?input=value.expr.input.replace("y = ",""):value.expr.input.includes("y=")&&(input=value.expr.input.replace("y=","")),value.y=eval(input.replace("x",value.x)))},updatePoints:function(){for(var e=0;e<this.values.length;e++)this.pointExpr(this.values[e])}}}}});
//# sourceMappingURL=app.192ff1c7.js.map