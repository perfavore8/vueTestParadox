(function(){"use strict";var e={1290:function(e,a,t){var n=t(9963),l=t(6252);function i(e,a,t,n,i,r){const o=(0,l.up)("HelloWorld");return(0,l.wg)(),(0,l.j4)(o)}const r=e=>((0,l.dD)("data-v-80ac3d22"),e=e(),(0,l.Cn)(),e),o={class:"container"},s={class:"header"},c=(0,l.uE)('<div class="title" data-v-80ac3d22><div class="left" data-v-80ac3d22><span data-v-80ac3d22>Документы</span></div><div class="right" data-v-80ac3d22><input type="checkbox" class="checkbox" id="flag" data-v-80ac3d22><label for="flag" data-v-80ac3d22></label><button class="btn" data-v-80ac3d22><div class="icon" data-v-80ac3d22></div> Новый тип </button><button class="btn" data-v-80ac3d22><div class="icon" data-v-80ac3d22></div> Новый документ </button></div></div>',1),d={class:"search"},u=r((()=>(0,l._)("div",{class:"icon"},null,-1))),h={class:"main"};function p(e,a,t,i,r,p){const f=(0,l.up)("list-item");return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",s,[c,(0,l._)("div",d,[u,(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Поиск","onUpdate:modelValue":a[0]||(a[0]=e=>r.filterValue=e)},null,512),[[n.nr,r.filterValue]]),r.filterValue?((0,l.wg)(),(0,l.iD)("div",{key:0,class:"del",onClick:a[1]||(a[1]=e=>p.del())})):(0,l.kq)("",!0)])]),(0,l._)("div",h,[(0,l.Wm)(f,{filterValue:r.filterValue},null,8,["filterValue"])])])}t(2087);var f=t(3577);const g=e=>((0,l.dD)("data-v-96c71e82"),e=e(),(0,l.Cn)(),e),v={key:0,class:"card-header"},m={class:"left"},w=["id","onChange"],y=["for"],b={class:"header"},_={class:"flags"},D={class:"title"},k={class:"rigth"},C=g((()=>(0,l._)("div",{class:"edit"},null,-1))),O=g((()=>(0,l._)("div",{class:"arrow"},null,-1))),E={key:0,class:"card-header item"},V={class:"left"},x={class:"header"},j={class:"flags"},q={key:0,class:"required"},P={class:"title"},F=g((()=>(0,l._)("div",{class:"rigth"},[(0,l._)("div",{class:"edit"}),(0,l._)("div",{class:"delete"}),(0,l._)("div",{class:"arrow"})],-1)));function H(e,a,t,n,i,r){const o=(0,l.up)("Draggable"),s=(0,l.up)("Container");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(s,{orientation:"vertical",onDrop:a[1]||(a[1]=e=>r.onColumnDrop(e)),"drag-handle-selector":".arrow","drop-placeholder":i.upperDropPlaceholderOptions,class:"cards"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.documents.children,((e,n)=>((0,l.wg)(),(0,l.j4)(o,{key:e.id},{default:(0,l.w5)((()=>[r.paginateColumns[n]||!t.filterValue?((0,l.wg)(),(0,l.iD)("div",{key:0,class:(0,f.C_)(["",{short:!e.full}])},[e.full?((0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("div",m,[(0,l._)("input",{type:"checkbox",class:"checkbox",id:n+"a",onChange:e=>r.changeVisbl(n)},null,40,w),(0,l._)("label",{for:n+"a"},null,8,y),(0,l._)("div",b,(0,f.zw)(e.name),1),(0,l._)("div",_,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.flags,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"flag",style:(0,f.j5)({backgroundColor:e}),key:e},null,4)))),128))]),(0,l._)("div",D,(0,f.zw)(e.title),1)]),(0,l._)("div",k,[C,(0,l._)("div",{class:(0,f.C_)(["delete",{open:e.children.length}])},null,2),O])])):(0,l.kq)("",!0),(0,l.Wm)(s,{"group-name":"col",onDrop:a=>r.onCardDrop(e.id,a),onDragEnd:a[0]||(a[0]=e=>r.filtration(t.filterValue)),"get-child-payload":r.getCardPayload(e.id),"drag-class":"card-ghost","drop-class":"card-ghost-drop","drag-handle-selector":".arrow","drop-placeholder":i.dropPlaceholderOptions,class:(0,f.C_)(["cards",{margin:!e.show}])},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.children,((a,t)=>((0,l.wg)(),(0,l.j4)(o,{key:a.id},{default:(0,l.w5)((()=>[i.paginate[n]?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[e.show&&i.paginate[n][t]?((0,l.wg)(),(0,l.iD)("div",E,[(0,l._)("div",V,[(0,l._)("div",x,(0,f.zw)(a.name),1),(0,l._)("div",j,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.flags,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"flag",style:(0,f.j5)({backgroundColor:e}),key:e},null,4)))),128))]),a.required?((0,l.wg)(),(0,l.iD)("div",q," Обязательный ")):(0,l.kq)("",!0),(0,l._)("div",P,(0,f.zw)(a.title),1)]),F])):(0,l.kq)("",!0)],64)):(0,l.kq)("",!0)])),_:2},1024)))),128))])),_:2},1032,["onDrop","get-child-payload","drop-placeholder","class"])],2)):(0,l.kq)("",!0)])),_:2},1024)))),128))])),_:1},8,["drop-placeholder"])])}var I=t(4645);const N=(e,a)=>{const{removedIndex:t,addedIndex:n,payload:l}=a;if(null===t&&null===n)return e;const i=[...e];let r=l;return null!==t&&(r=i.splice(t,1)[0]),null!==n&&i.splice(n,0,r),i},W={type:"container",props:{orientation:"vertical"},children:[{id:"column1",type:"container",name:"Обязательные для всех",title:"Документы, обязательные для всех сотрудников без исключения",flags:["#FF238D","#FFB800","#FFB800"],full:!0,show:!1,props:{orientation:"vertical",className:"card-container"},children:[{id:"11",type:"draggable",name:"Паспорт",title:"Для всех",flags:["#00c2ff"],required:!0},{id:"12",type:"draggable",name:"ИНН",title:"Для всех",flags:[],required:!0}]},{id:"column2",type:"container",name:"Обязательные для трудоустройства",title:"Документы, без которых невозможно трудоустройство человека на какую бы то ни было должность в компании вне зависимости от граж",flags:[],full:!0,show:!1,props:{orientation:"vertical",className:"card-container"},children:[]},{id:"column3",type:"container",name:"Специальные",title:"",flags:[],full:!0,show:!1,props:{orientation:"vertical",className:"card-container"},children:[]},{id:"column4",type:"container",name:"",title:"",flags:[],full:!1,show:!0,props:{orientation:"vertical",className:"card-container"},children:[{id:"41",type:"draggable",name:"Тестовое задание кандидата",title:"Россия, Белоруссия, Украина, администратор филиала, повар-сушист, повар-пиццмейкер, повар горячего цеха",flags:[],required:!1},{id:"42",type:"Трудовой договор",name:"ИНН",title:"",flags:["#0066FF","#8E9CBB"],required:!1},{id:"43",type:"draggable",name:"Мед. книжка",title:"",flags:[],required:!1}]}]},Y=(e,a)=>{const t=[];return e.forEach((e=>{let n=e.title+" "+e.name;const l=n.split(" ").map((e=>e.toUpperCase()));l.forEach((n=>{n.includes(a.toUpperCase())&&t.push(e.id)}))})),t};var T={name:"CardsVue",components:{Container:I.W2,Draggable:I._l},props:{filterValue:{type:String,default(){return""}}},data(){return{documents:W,upperDropPlaceholderOptions:{className:"cards-drop-preview",animationDuration:"150",showOnTop:!0},dropPlaceholderOptions:{className:"drop-preview",animationDuration:"150",showOnTop:!0},paginate:[]}},computed:{paginateColumns(){const e=[];return this.paginate.forEach((a=>{let t=!1;a.forEach((e=>{t=t||e})),t?e.push(!0):e.push(!1)})),e}},mounted(){this.fellPaginate()},watch:{filterValue(){this.filtration(this.filterValue)}},methods:{fellPaginate(){this.paginate=[],this.documents.children.forEach(((e,a)=>{this.paginate.push([]),e.children.length||(this.paginate[a][0]=!0),e.children.forEach((()=>this.paginate[a].push(!0)))}))},filtration(e){(0,l.Y3)((()=>{const a=[],t=e=>{const t={title:e.title,name:e.name,id:e.id};a.push(t)};this.documents.children.forEach((e=>{t(e),e.children.forEach((e=>t(e)))}));const n=Y(a,e),l=e=>{let a=[null,null];return this.documents.children.forEach(((t,n)=>{t.children.forEach(((t,l)=>{t.id==e&&(a=[n,l])}))})),a},i=e=>{let a=null;return this.documents.children.forEach(((t,n)=>{t.id==e&&(a=n)})),a};this.fellPaginate(),this.paginate.forEach(((e,a)=>e.forEach(((e,t)=>this.paginate[a][t]=!1)))),n.forEach((e=>{const a=i(e),t=l(e);null!=a&&(this.documents.children[a].children.forEach(((e,t)=>this.paginate[a][t]=!0)),this.documents.children[a].children.length||(this.paginate[a][0]=!0)),null!=t[0]&&(this.paginate[t[0]][t[1]]=!0)}))}))},onColumnDrop(e){const a=Object.assign({},this.documents);a.children=N(a.children,e),this.documents=a},onCardDrop(e,a){if(null!==a.removedIndex||null!==a.addedIndex){const t=Object.assign({},this.documents),n=t.children.filter((a=>a.id===e))[0],l=t.children.indexOf(n),i=Object.assign({},n);i.children=N(i.children,a),t.children.splice(l,1,i),this.documents=t}},getCardPayload(e){return a=>this.documents.children.filter((a=>a.id===e))[0].children[a]},changeVisbl(e){this.documents.children[e].show=!this.documents.children[e].show}}},z=t(3744);const B=(0,z.Z)(T,[["render",H],["__scopeId","data-v-96c71e82"]]);var K=B,U={components:{ListItem:K},data(){return{filterValue:""}},methods:{del(){this.filterValue=""}}};const Z=(0,z.Z)(U,[["render",p],["__scopeId","data-v-80ac3d22"]]);var A=Z,L={name:"App",components:{HelloWorld:A}};const M=(0,z.Z)(L,[["render",i]]);var S=M,G=t(3907),J=(0,G.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(S).use(J).mount("#app")}},a={};function t(n){var l=a[n];if(void 0!==l)return l.exports;var i=a[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(a,n,l,i){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],l=e[d][1],i=e[d][2];for(var o=!0,s=0;s<n.length;s++)(!1&i||r>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[s])}))?n.splice(s--,1):(o=!1,i<r&&(r=i));if(o){e.splice(d--,1);var c=l();void 0!==c&&(a=c)}}return a}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,l,i]}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var l,i,r=n[0],o=n[1],s=n[2],c=0;if(r.some((function(a){return 0!==e[a]}))){for(l in o)t.o(o,l)&&(t.m[l]=o[l]);if(s)var d=s(t)}for(a&&a(n);c<r.length;c++)i=r[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},n=self["webpackChunkvue_test_paradox"]=self["webpackChunkvue_test_paradox"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(1290)}));n=t.O(n)})();
//# sourceMappingURL=app.53ff57de.js.map