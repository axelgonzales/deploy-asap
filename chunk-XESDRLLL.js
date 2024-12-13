import{a as A,b as L}from"./chunk-BH7Q4LKG.js";import{c as R,d as U,h as M}from"./chunk-V2FUWDDZ.js";import{F as a,G as I,Ha as $,Ka as G,N as v,P as s,T as y,U as T,V as D,W as o,X as r,Y as l,Za as H,aa as x,ba as S,ca as u,ga as V,ha as N,i as O,ia as W,ja as p,k as F,la as d,pa as g,q as z,r as m,sa as j,v as C,w as _}from"./chunk-4FVIKDPJ.js";var Q=(t,n)=>({"font-weight":t,"font-size":n}),f=class t{title="";fontSize="14px";fontWeight="400";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-title"]],inputs:{title:"title",fontSize:"fontSize",fontWeight:"fontWeight"},standalone:!0,features:[g],decls:2,vars:5,consts:[[1,"title",3,"ngStyle"]],template:function(e,i){e&1&&(o(0,"h2",0),p(1),r()),e&2&&(s("ngStyle",j(2,Q,i.fontWeight,i.fontSize)),a(),d(" ",i.title,`
`))},dependencies:[G,$],styles:[".title[_ngcontent-%COMP%]{color:#2a363b}"],changeDetection:0})};var q=["inputSearch"],b=class t{inputSearch;userName=z(H).getNameUser();clickBtnSearch(){this.inputSearch&&console.log(this.inputSearch.control.value)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-home"]],viewQuery:function(e,i){if(e&1&&V(q,5),e&2){let c;N(c=W())&&(i.inputSearch=c.first)}},standalone:!0,features:[g],decls:8,vars:1,consts:[["inputSearch",""],[1,"flex","flex-column","w-full","gap-2","home"],[1,"home-title"],["fontSize","16px","fontWeight","600",3,"title"],[1,"flex","gap-2"],["placeholder","Buscar por productos y/o servicios","iconRight","search","size","large","height","56px",1,"flex-1",3,"keyEnter"],[1,"button-filter"],["src","assets/svg/filter.svg","alt","filter"]],template:function(e,i){if(e&1){let c=x();o(0,"div",1)(1,"div",2),l(2,"app-title",3),r(),o(3,"div",4)(4,"app-input",5,0),S("keyEnter",function(){return C(c),_(i.clickBtnSearch())}),r(),o(6,"button",6),l(7,"img",7),r()()()}e&2&&(a(2),s("title","Hola,"+i.userName))},dependencies:[M,f],styles:[".home[_ngcontent-%COMP%]{margin-top:20px}.home[_ngcontent-%COMP%]   .button-filter[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:52px;height:56px;background-color:#fff;border:none;border-radius:12px;box-shadow:0 2px 8px #0000001a;cursor:pointer;padding:0}.home[_ngcontent-%COMP%]   .button-filter[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px;filter:grayscale(100%)}.home[_ngcontent-%COMP%]   .button-filter[_ngcontent-%COMP%]:hover{box-shadow:0 4px 12px #00000026}.home[_ngcontent-%COMP%]   .button-filter[_ngcontent-%COMP%]:active{box-shadow:0 2px 6px #0003}@media (min-width: 1199px){.home[_ngcontent-%COMP%]   .home-title[_ngcontent-%COMP%]{display:none}}"],changeDetection:0})};var w=class t{imageUrl="";altText="";title="Corte de cabello para caballero";type="Servicio";total="";price="";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=m({type:t,selectors:[["app-card-sales"]],inputs:{imageUrl:"imageUrl",altText:"altText",title:"title",type:"type",total:"total",price:"price"},standalone:!0,features:[g],decls:24,vars:6,consts:[[1,"service-card"],[1,"info-row"],[1,"flex","justify-content-between","align-items-center"],["fontWeight","500","fontSize","14px",3,"title"],[1,"pi","pi-trash","cursor-pointer"],[1,"flex","flex-row","gap-1","align-items-center"],["fontWeight","normal","fontSize","14px",3,"title"],["fontWeight","normal","fontSize","12px",3,"title"],[1,"total-row"],[1,"flex","justify-content-between"],["title","Total","fontWeight","normal","fontSize","12px"],[1,"price"]],template:function(e,i){e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2),l(3,"app-title",3)(4,"i",4),r(),o(5,"div",5),l(6,"app-title",6)(7,"app-title",7),r()(),l(8,"hr"),o(9,"div",8),l(10,"div"),o(11,"div",9)(12,"div"),l(13,"app-title",10),o(14,"span",11),p(15),r()(),o(16,"div"),l(17,"app-title",10),o(18,"span",11),p(19),r()(),o(20,"div"),l(21,"app-title",10),o(22,"span",11),p(23),r()()()()()),e&2&&(a(3),s("title",i.title),a(3),s("title","Tipo"),a(),s("title",i.type),a(8),d("s/",i.price,""),a(4),d("s/",i.price,""),a(4),d("s/",i.price,""))},dependencies:[f],styles:[".service-card[_ngcontent-%COMP%]{border:1px solid #e0e0e0;border-radius:8px;padding:16px;background-color:#fff;box-shadow:0 2px 5px #0000001a;width:100%;min-width:336px}hr[_ngcontent-%COMP%]{border:none;border-top:1px solid #e0e0e0;margin:8px 0}.info-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:8px 0;gap:5px}i[_ngcontent-%COMP%]{font-size:20px}i[_ngcontent-%COMP%]:hover{color:#e12b21}"],changeDetection:0})};var B=(t,n)=>n.id;function J(t,n){if(t&1){let e=x();o(0,"li",6),S("click",function(){let c=C(e).$implicit,h=u(2);return _(h.selectSuggestion(c))})("keydown.enter",function(){let c=C(e).$implicit,h=u(2);return _(h.selectSuggestion(c))}),p(1),r()}if(t&2){let e=n.$implicit;a(),d(" ",e.name," ")}}function K(t,n){if(t&1&&(o(0,"div",4)(1,"ul"),T(2,J,2,1,"li",5,B),r()()),t&2){let e=u();a(2),D(e.suggestions)}}function X(t,n){t&1&&(o(0,"div"),p(1,"asd"),r())}function Y(t,n){t&1&&(o(0,"div",7)(1,"div",8)(2,"div",9),p(3,"Agrega productos al carrito de tu cliente."),r(),l(4,"img",10),r()())}function Z(t,n){if(t&1){let e=x();o(0,"app-card-sales",14),S("click",function(){let c=C(e).$implicit,h=u(3);return _(h.changeMerchantSelected(c.id))}),r()}if(t&2){let e=n.$implicit;s("title",e.name)("type",e.type)("total",e.price)("price",e.price)}}function ee(t,n){if(t&1&&(o(0,"div",2),l(1,"app-title",11),o(2,"div",12),T(3,Z,1,4,"app-card-sales",13,B),r()()),t&2){let e=u(2);a(3),D(e.merchantSelected)}}function te(t,n){if(t&1&&v(0,Y,5,0,"div",7)(1,ee,5,0,"div",2),t&2){let e=u();y(e.merchantSelected.length===0?0:1)}}var P=class t{constructor(n,e){this.merchantService=n;this.merchantApiService=e;this.formGroup=new R(this.formObject)}selectedMerchantId=null;suggestions=[];merchantSelected=[];formGroup;formObject={search:new U("")};ngOnInit(){let n=this.merchantService.selectedMerchantId$.pipe(O(i=>!!i));this.formGroup.get("search").valueChanges.pipe(O(i=>i&&i.length>=3)).pipe(F(n)).subscribe(([i,c])=>{this.selectedMerchantId=c,this.getDataMerchantService(i)})}getDataMerchantService(n){this.selectedMerchantId&&this.merchantApiService.merchantServices(this.selectedMerchantId).subscribe(e=>{console.log(n);let i=e.filter(c=>c.name.toLowerCase().includes(n.toLowerCase()));this.suggestions=i})}selectSuggestion(n){this.merchantSelected.push(n),this.searchControl.setValue(""),this.suggestions=[]}changeMerchantSelected(n){this.merchantSelected=this.merchantSelected.filter(e=>e.id!==n)}get searchControl(){return this.formGroup.get("search")}static \u0275fac=function(e){return new(e||t)(I(L),I(A))};static \u0275cmp=m({type:t,selectors:[["app-sales-page"]],standalone:!0,features:[g],decls:7,vars:3,consts:[[1,"flex","gap-3","flex-column","mt-3"],["title","Formulario de ventas","fontSize","16px","fontWeight","600"],[1,"flex","flex-column"],["placeholder","Buscar por productos y/o servicios","iconRight","search","size","large","height","56px","name","username",1,"flex-1",3,"control"],[1,"search-text"],["tabindex","0",1,"suggestion-item"],["tabindex","0",1,"suggestion-item",3,"click","keydown.enter"],[1,"flex","flex-1","gap-4","justify-content-center"],[1,"flex","gap-4","flex-column","justify-content-center","align-items-center"],[1,"mx-0"],["src","assets/svg/canasta.svg","alt","logo"],["title","Lista de productos y/o servicios","fontSize","16px","fontWeight","600"],[1,"flex","flex-wrap","gap-4","mt-3"],[3,"title","type","total","price"],[3,"click","title","type","total","price"]],template:function(e,i){e&1&&(o(0,"section",0),l(1,"app-title",1),o(2,"div",2),l(3,"app-input",3),v(4,K,4,0,"div",4),r(),v(5,X,2,0,"div")(6,te,2,1),r()),e&2&&(a(3),s("control",i.searchControl),a(),y(i.suggestions.length>0?4:-1),a(),y(i.suggestions.length===0&&i.merchantSelected.length>0?5:6))},dependencies:[f,M,w],styles:[".search-text[_ngcontent-%COMP%]{position:relative;background:#fff;border:1px solid #ddd;border-radius:4px;max-height:200px;overflow-y:auto;z-index:1000;box-shadow:0 2px 5px #0000001a}.search-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.search-text[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]{padding:10px;cursor:pointer;transition:background-color .2s}.search-text[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:hover{background-color:#f5f5f5}"],changeDetection:0})};var we=[{path:"inicio",component:b},{path:"ventas",component:P},{path:"",redirectTo:"inicio",pathMatch:"full"}];export{we as MODULES_ROUTES};