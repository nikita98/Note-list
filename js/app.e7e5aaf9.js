(function(t){function o(o){for(var n,s,d=o[0],r=o[1],c=o[2],u=0,f=[];u<d.length;u++)s=d[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(o);while(f.length)f.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],n=!0,d=1;d<e.length;d++){var r=e[d];0!==i[r]&&(n=!1)}n&&(a.splice(o--,1),t=s(s.s=e[0]))}return t}var n={},i={app:0},a=[];function s(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,o,e){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)s.d(e,n,function(o){return t[o]}.bind(null,n));return e},s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],r=d.push.bind(d);d.push=o,d=d.slice();for(var c=0;c<d.length;c++)o(d[c]);var l=r;a.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"353d":function(t,o,e){"use strict";e("6a8f")},3705:function(t,o,e){},"4b10":function(t,o,e){"use strict";e("f001")},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],s=(e("5c0b"),e("2877")),d={},r=Object(s["a"])(d,i,a,!1,null,null,null),c=r.exports,l=e("8c4f"),u=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("application-window",{attrs:{title:"Tasks"},scopedSlots:t._u([{key:"content",fn:function(){return t._l(t.TODOCATEGORIES,(function(t){return e("todo-category",{key:t.number,attrs:{number:t.number,title:t.title,todos:t.todos}})}))},proxy:!0},{key:"footer",fn:function(){return[e("add",{attrs:{label:"Add category"},on:{addElem:t.addCategory}})]},proxy:!0}])})},f=[],p=e("5530"),h=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo-category"},[e("div",{staticClass:"todo-category__header",on:{click:function(o){return t.$router.push("todo-list/"+t.title)}}},[e("span",{staticClass:"todo-category__title"},[t._v(t._s(t.title))]),e("span",{staticClass:"todo-category__number"},[t._v(t._s(t.done.length+"/"+t.sortedTodos.length))])]),e("div",{staticClass:"todo-category__list"},t._l(t.sortedTodos,(function(t){return e("todo",{key:t.id,attrs:{id:t.id,text:t.text,done:t.done}})})),1)])},m=[],_=(e("99af"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo",class:{done:t.done}},[t._v(t._s(t.short(t.text)))])}),v=[],b={name:"todo",props:["id","text","done"],methods:{short:function(t){return t.length>26?t.substr(0,24)+"...":t}}},g=b,C=(e("e832"),Object(s["a"])(g,_,v,!1,null,"7604b12e",null)),x=C.exports,O={components:{todo:x},props:["id","title","todos"],data:function(){return{done:[],notDone:[],sortedTodos:[]}},methods:{todoSort:function(){for(var t=0;t<this.todos.length;t++)this.todos[t].done?this.done.push(this.todos[t]):this.notDone.push(this.todos[t]);this.sortedTodos=this.notDone.concat(this.done)}},mounted:function(){this.todoSort()}},y=O,T=(e("4b10"),Object(s["a"])(y,h,m,!1,null,null,null)),w=T.exports,D=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"application-window"},[n("div",{staticClass:"application-window__inner"},[n("div",{staticClass:"application-window__header"},[n("div",{staticClass:"application-window__title"},[t._v(t._s(t.title))]),n("div",{staticClass:"application-window__title-save"},[t.needSave?n("img",{staticClass:"application-window__save",attrs:{src:e("c7d8")},on:{click:t.saveData}}):t._e()])]),t._t("content"),n("div",{staticClass:"application-window__footer"},[t._t("footer")],2)],2)])},k=[],E={props:["title","needSave"],methods:{saveData:function(){this.$emit("saveData")}}},j=E,A=(e("6c4f"),Object(s["a"])(j,D,k,!1,null,null,null)),$=A.exports,S=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",{staticClass:"add",on:{submit:function(o){return o.preventDefault(),t.submit(o)}}},[e("div",{staticClass:"add__input-wrap"},[e("label",{staticClass:"add__label",attrs:{for:"add"}},[t._v(t._s(t.label))]),e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.input,expression:"input",modifiers:{trim:!0}}],staticClass:"add__input",attrs:{name:"add",type:"text"},domProps:{value:t.input},on:{input:function(o){o.target.composing||(t.input=o.target.value.trim())},blur:function(o){return t.$forceUpdate()}}})]),e("div",{staticClass:"add__icon-wrap",on:{click:function(o){return o.preventDefault(),t.submit(o)}}},[e("div",{staticClass:"add__icon"})])])},G=[],M={props:["label"],data:function(){return{input:""}},methods:{submit:function(){this.input.length&&(this.$emit("addElem",this.input),this.input="")}}},R=M,Y=(e("7201"),Object(s["a"])(R,S,G,!1,null,null,null)),I=Y.exports,N=e("2f62"),P={components:{todoCategory:w,applicationWindow:$,add:I},methods:Object(p["a"])(Object(p["a"])({},Object(N["c"])(["ADDTODOCATEGORY"])),{},{addCategory:function(t){this.ADDTODOCATEGORY(t)}}),computed:Object(p["a"])({},Object(N["b"])(["TODOCATEGORIES"]))},H=P,J=Object(s["a"])(H,u,f,!1,null,null,null),L=J.exports,W=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"todo-list"},[t.isModal?e("modal-confirm",{attrs:{text:t.modalText},on:{action:t.modalAction}}):t._e(),e("application-window",{attrs:{title:t.todoCategory.title,needSave:"true"},on:{saveData:t.saveData},scopedSlots:t._u([{key:"content",fn:function(){return t._l(t.todoCategory.todos,(function(o){return e("expand-todo",{key:o.id,attrs:{todoId:o.id,todoText:o.text,todoDone:o.done},on:{check:t.changeTodoDone,del:t.delTodo,change:t.changeTodoText}})}))},proxy:!0},{key:"footer",fn:function(){return[e("add",{attrs:{label:"Add todo"},on:{addElem:t.addTodo}})]},proxy:!0}])})],1)},q=[],z=(e("a434"),function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"expand-todo",class:{"expand-todo_done":t.done}},[n("TextareaAutosize",{staticClass:"expand-todo__text",attrs:{rows:"1"},model:{value:t.text,callback:function(o){t.text=o},expression:"text"}}),t._v(" "+t._s(t.upText)+" "),n("div",{staticClass:"expand-todo__btns"},[n("img",{staticClass:"expand-todo__btn expand-todo__btn_delete",attrs:{src:e("72f1")},on:{click:t.del}}),n("div",{staticClass:"expand-todo__check",on:{click:t.check}},[t.done?n("div",{staticClass:"expand-todo__check-tick"}):t._e()])])],1)}),U=[],B=(e("fb6a"),{data:function(){return{id:this.todoId,text:this.todoText,done:this.todoDone}},props:["todoId","todoText","todoDone"],computed:{upText:function(){return this.change(),this.text.slice(0,0)}},methods:{del:function(){this.$emit("del",this.id)},change:function(){this.$emit("change",this.id,this.text)},check:function(){this.done=!this.done,this.$emit("check",this.id,this.done)}}}),F=B,K=(e("353d"),Object(s["a"])(F,z,U,!1,null,"b9062cdc",null)),Q=K.exports,V=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"modal"},[e("div",{staticClass:"modal__inner"},[e("div",{staticClass:"modal__text"},[t._v(t._s(t.text))]),e("div",{staticClass:"modal__footer"},[e("div",{staticClass:"btn modal__btn",on:{click:function(o){return t.confirm(!0)}}},[t._v("Yes")]),e("div",{staticClass:"btn btn_deny modal__btn",on:{click:function(o){return t.confirm(!1)}}},[t._v("No")])])])])},X=[],Z={props:["text","actionName"],methods:{confirm:function(t){this.$emit("action",t)}}},tt=Z,ot=(e("c4fc"),Object(s["a"])(tt,V,X,!1,null,null,null)),et=ot.exports,nt={name:"todo-list",components:{expandTodo:Q,modalConfirm:et,applicationWindow:$,add:I},data:function(){return{todoCategory:{},isModal:!1,delID:null,modalText:"Are you shure want to delete todo?"}},mounted:function(){this.fillData()},methods:Object(p["a"])(Object(p["a"])({},Object(N["c"])(["CHANGETODOCATEGORY"])),{},{saveData:function(){this.CHANGETODOCATEGORY(this.todoCategory)},titheChange:function(t){this.todoCategory.title=t,console.log(this.todoCategory)},addTodo:function(t){var o={text:t,done:!1,id:Math.random()*Math.pow(10,16)};this.todoCategory.todos.push(o),console.log(this.todoCategory)},fillData:function(){this.todoCategory=JSON.parse(JSON.stringify(this.TODOCATEGORY(this.$route.params.title)))},findTodo:function(t){for(var o=0;o<this.todoCategory.todos.length;o++)if(this.todoCategory.todos[o].id===t)return this.todoCategory.todos[o];return!1},changeTodoDone:function(t,o){console.log("value = "+o),console.log("this.findTodo(id).done = "+this.findTodo(t).done),this.findTodo(t).done=o},changeTodoText:function(t,o){this.findTodo(t).text=o},delTodo:function(t){this.delID=t,this.isModal=!0},modalAction:function(t){if(this.isModal=!1,t)for(var o=0;o<this.todoCategory.todos.length;o++)this.todoCategory.todos[o].id===this.delID&&this.todoCategory.todos.splice(o,1)}}),computed:Object(p["a"])({},Object(N["b"])(["TODOCATEGORY"]))},it=nt,at=Object(s["a"])(it,W,q,!1,null,null,null),st=at.exports;n["a"].use(l["a"]);var dt=[{path:"/",name:"todo-categories",component:L},{path:"/todo-list/:title",name:"todo-list",component:st}],rt=new l["a"]({mode:"history",base:"",routes:dt}),ct=rt;e("7db0");n["a"].use(N["a"]);var lt=new N["a"].Store({state:{todoCategories:[{title:"chores",id:0,todos:[{text:"wash dishes",done:!0,id:123},{text:"wipe dust",done:!1,id:1213123213},{text:"cook food",done:!0,id:2},{text:"Lorem ipsum adolor sit amet consectetur adipisicing elit. Libero provident aperiam harum, reiciendis at similique amet vel natus autem deserunt?",done:!1,id:3}]},{title:"wash yourself",id:1,todos:[{text:"wash",done:!1,id:0},{text:"brush teeth",done:!0,id:1},{text:"trim nails",done:!1,id:2}]},{title:"complete the test task",id:2,todos:[{text:"create a store",done:!1,id:0},{text:"set up a link with firebase",done:!1,id:1},{text:"HTML coding",done:!1,id:2},{text:"make pretty styles",done:!1,id:3}]}]},mutations:{ADDTODOCATEGORY:function(t,o){var e={title:o,id:Math.random()*Math.pow(10,16),todos:[]};t.todoCategories.push(e),console.log(e)},CHANGETODOCATEGORY:function(t,o){for(var e=0;e<t.todoCategories.length;e++)t.todoCategories[e].title===o.title&&(t.todoCategories[e]=o)}},actions:{},getters:{TODOCATEGORIES:function(t){return t.todoCategories},TODOCATEGORY:function(t){return function(o){return t.todoCategories.find((function(t){return t.title===o}))}}},modules:{}}),ut=e("3f9d");n["a"].use(ut["a"]),n["a"].config.productionTip=!1,new n["a"]({router:ct,store:lt,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,o,e){"use strict";e("9c0c")},"6a8f":function(t,o,e){},"6c4f":function(t,o,e){"use strict";e("3705")},7201:function(t,o,e){"use strict";e("ea0d")},"72f1":function(t,o,e){t.exports=e.p+"img/delete.b2b9a32a.png"},"9c0c":function(t,o,e){},abb2:function(t,o,e){},c4fc:function(t,o,e){"use strict";e("cb2f")},c7d8:function(t,o,e){t.exports=e.p+"img/save.6bfe84aa.png"},cb2f:function(t,o,e){},e832:function(t,o,e){"use strict";e("abb2")},ea0d:function(t,o,e){},f001:function(t,o,e){}});
//# sourceMappingURL=app.e7e5aaf9.js.map