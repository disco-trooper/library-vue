(function(t){function e(e){for(var o,l,i=e[0],s=e[1],u=e[2],d=0,f=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(e);while(f.length)f.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,i=1;i<a.length;i++){var s=a[i];0!==r[s]&&(o=!1)}o&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},r={app:0},n=[];function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/library-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var c=s;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"grey darken-2",dark:""}},[a("v-toolbar-title",{staticClass:"display-1 font-weight-light"},[t._v("Library")])],1),a("v-content",[a("v-container",[a("app-table")],1)],1)],1)},n=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",[a("v-card-title",[t._v(" Books "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-data-table",{attrs:{headers:t.headers,items:t.books,search:t.search},scopedSlots:t._u([{key:"item.title",fn:function(e){var o=e.item;return[a("v-edit-dialog",{attrs:{"return-value":o.title},on:{"update:returnValue":function(e){return t.$set(o,"title",e)},"update:return-value":function(e){return t.$set(o,"title",e)}},scopedSlots:t._u([{key:"input",fn:function(){return[a("v-text-field",{attrs:{label:"Edit"},model:{value:o.title,callback:function(e){t.$set(o,"title",e)},expression:"item.title"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(o.title)+" ")])]}},{key:"item.author",fn:function(e){var o=e.item;return[a("v-edit-dialog",{attrs:{"return-value":o.author},on:{"update:returnValue":function(e){return t.$set(o,"author",e)},"update:return-value":function(e){return t.$set(o,"author",e)}},scopedSlots:t._u([{key:"input",fn:function(){return[a("v-text-field",{attrs:{label:"Edit"},model:{value:o.author,callback:function(e){t.$set(o,"author",e)},expression:"item.author"}})]},proxy:!0}],null,!0)},[t._v(" "+t._s(o.author)+" ")])]}},{key:"item.status",fn:function(e){var o=e.item;return[a("v-btn",{attrs:{outlined:"",small:"",color:"Read"===o.status?"red":"black"},on:{click:function(e){"Read"===o.status?o.status="Unread":o.status="Read",t.updateLocalStorage()}}},[t._v(t._s(o.status)+" ")])]}},{key:"item.actions",fn:function(e){var o=e.item;return[a("v-icon",{attrs:{small:""},on:{click:function(e){t.clickedBook=o,t.deteleBook(t.clickedBook)}}},[t._v(" mdi-delete ")])]}},{key:"item.notes",fn:function(e){var o=e.item;return[a("v-icon",{attrs:{small:""},on:{click:function(e){e.stopPropagation(),t.notesDialog=!0,t.clickedNote=o}}},[t._v(" mdi-comment-edit ")])]}}])})],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.notesDialog,callback:function(e){t.notesDialog=e},expression:"notesDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Notes")])]),a("v-card-text",[a("v-textarea",{model:{value:t.clickedNote.notes,callback:function(e){t.$set(t.clickedNote,"notes",e)},expression:"clickedNote.notes"}})],1)],1)],1),a("app-new-book-form",{on:{bookAdded:function(e){return t.addNewBook(e)}}})],1)},i=[],s=(a("4160"),a("c975"),a("a434"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"50%"},on:{"click:outside":function(e){return t.resetData()}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[a("v-btn",t._g({staticClass:"mt-2",attrs:{dark:""}},o),[t._v(" Add New Book ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v(" Add New Book ")]),a("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:t.titleRules,label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),a("v-col",{attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{rules:t.authorRules,label:"Author",required:""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-select",{attrs:{items:t.status,label:"Status"},model:{value:t.currentStatus,callback:function(e){t.currentStatus=e},expression:"currentStatus"}})],1),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-textarea",{staticClass:"mx-2",attrs:{"auto-grow":"",label:"Notes",rows:"1"},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{dark:""},on:{click:t.addNewBook}},[t._v(" Add Book ")])],1)],1)],1)}),u=[],c={name:"NewBookForm",data:function(){return{dialog:!1,valid:!1,author:"",title:"",titleRules:[function(t){return!!t||"Title is required"}],authorRules:[function(t){return!!t||"Author is required"}],status:["Read","Unread"],currentStatus:"Read",notes:""}},methods:{addNewBook:function(){this.valid&&(this.dialog=!1,this.$emit("bookAdded",{title:this.title,author:this.author,status:this.currentStatus,notes:this.notes}))},resetData:function(){this.title="",this.author="",this.currentStatus="Read",this.notes=""}}},d=c,f=a("2877"),v=a("6544"),p=a.n(v),h=a("8336"),b=a("b0af"),m=a("99d9"),k=a("62ad"),g=a("a523"),x=a("169a"),y=a("ce7e"),S=a("4bd4"),w=a("0fd9"),V=a("b974"),_=a("2fa4"),N=a("8654"),B=a("a844"),O=Object(f["a"])(d,s,u,!1,null,null,null),T=O.exports;p()(O,{VBtn:h["a"],VCard:b["a"],VCardActions:m["a"],VCardTitle:m["c"],VCol:k["a"],VContainer:g["a"],VDialog:x["a"],VDivider:y["a"],VForm:S["a"],VRow:w["a"],VSelect:V["a"],VSpacer:_["a"],VTextField:N["a"],VTextarea:B["a"]});var D={name:"Table",components:{appNewBookForm:T},data:function(){return{clickedNote:"",search:"",headers:[{text:"Title",value:"title",sortable:"desc"},{text:"Author",value:"author",sortable:!0},{text:"Status",value:"status",sortable:!0},{text:"Notes",value:"notes",sortable:!1},{text:"",value:"actions",sortable:!1}],books:[],newBookDialog:!1,notesDialog:!1,clickedBook:"",localLibrary:JSON.parse(localStorage.getItem("books")),addDummies:JSON.parse(localStorage.getItem("addDummies"))}},updated:function(){localStorage.setItem("books",JSON.stringify(this.books))},created:function(){var t=this;if(null===this.addDummies)return this.populateBookshelf(),void localStorage.setItem("books",JSON.stringify(this.books));this.books=[],this.localLibrary.forEach((function(e){t.books.push(e)}))},methods:{addNewBook:function(t){this.books.push(t),localStorage.setItem("addDummies",!1)},deteleBook:function(t){this.books.splice(this.books.indexOf(t),1),localStorage.setItem("addDummies",!1)},populateBookshelf:function(){var t={title:"Nineteen Eighty-Four",author:"George Orwell",notes:"",status:"Read"},e={title:"The Power of Now",author:"Eckhart Tolle",status:"Unread",notes:""};this.books.push(t),this.books.push(e)},updateLocalStorage:function(){localStorage.setItem("books",JSON.stringify(this.books)),localStorage.setItem("addDummies",!1)}}},C=D,j=a("8fea"),A=a("7679"),R=a("132d"),$=Object(f["a"])(C,l,i,!1,null,null,null),E=$.exports;p()($,{VBtn:h["a"],VCard:b["a"],VCardText:m["b"],VCardTitle:m["c"],VDataTable:j["a"],VDialog:x["a"],VEditDialog:A["a"],VIcon:R["a"],VSpacer:_["a"],VTextField:N["a"],VTextarea:B["a"]});var I={name:"App",components:{appTable:E},data:function(){return{}}},P=I,J=a("7496"),F=a("40dc"),L=a("a75b"),q=a("2a7f"),M=Object(f["a"])(P,r,n,!1,null,null,null),U=M.exports;p()(M,{VApp:J["a"],VAppBar:F["a"],VContainer:g["a"],VContent:L["a"],VToolbarTitle:q["a"]});var G=a("f309");o["a"].use(G["a"]);var z=new G["a"]({});o["a"].config.productionTip=!1,new o["a"]({vuetify:z,render:function(t){return t(U)}}).$mount("#app")}});
//# sourceMappingURL=app.e99e949f.js.map