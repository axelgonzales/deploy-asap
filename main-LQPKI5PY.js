import{a as je,b as ze}from"./chunk-BH7Q4LKG.js";import{a as l,b as Ue,c as qe,d as Ke,e as W,g as Ge}from"./chunk-OC3SIIWC.js";import{$a as Be,A as se,Aa as I,B as ge,C as N,D as ve,F as c,Fa as q,G as u,Ga as Te,H as _e,I as j,J as Ce,Ja as Ee,Ka as f,L as be,La as Ie,M as z,Ma as ke,N as B,Na as Pe,O as L,Oa as De,P as d,Pa as Fe,Qa as Ae,R as Z,Ra as k,Sa as P,Ta as Ve,U as ye,Ua as He,V as Oe,Va as Re,W as s,Wa as Ne,X as r,Xa as K,Y as a,Za as _,a as M,aa as T,ab as G,ba as v,bb as Ze,ca as E,d as de,db as ae,f as he,j as me,ja as C,ka as re,ma as xe,n as R,na as Se,o as y,pa as m,q as p,r as h,ra as U,s as O,t as ne,u as oe,ua as we,v as x,va as Me,w as S,x as ue,xa as Le,y as fe,za as V}from"./chunk-4FVIKDPJ.js";var $=class t{constructor(n){this.router=n}titlePage="Conectar a quienes nos conectan.";static \u0275fac=function(e){return new(e||t)(u(P))};static \u0275cmp=h({type:t,selectors:[["app-auth-layout"]],standalone:!0,features:[m],decls:6,vars:0,consts:[[1,"container__auth"],[1,"flex","flex-column","justify-content-start","align-items-center","gap-4"],["src","./assets/svg/pass-white.svg","alt","logo","height","95"],[1,"card__auth","justify-content-center","d-flex","flex-column"]],template:function(e,i){e&1&&(s(0,"section")(1,"div",0)(2,"div",1),a(3,"img",2),s(4,"div",3),a(5,"router-outlet"),r()()()())},dependencies:[f,k],styles:["section[_ngcontent-%COMP%]{margin:0;background:url(/assets/images/usuario.jpg) center/cover no-repeat;height:auto;padding:20px 60px 20px 28px;min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}section[_ngcontent-%COMP%]   .container__auth[_ngcontent-%COMP%]{width:100%;max-width:1440px;margin:0 auto;min-height:100%}img[_ngcontent-%COMP%]{margin:0 2rem}article[_ngcontent-%COMP%]{margin:0;max-width:600px;left:25rem;top:45rem;width:60%}article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.5rem;font-weight:700;line-height:normal;letter-spacing:0em;text-align:left;color:#fff}.card__auth[_ngcontent-%COMP%]{width:597px;height:auto;padding:56px;background:#fff;display:flex;flex-direction:column;gap:42px;transform:scale(.9)}@media (max-width: 750px){.card__auth[_ngcontent-%COMP%]{width:100%}}@media (max-width: 575px){section[_ngcontent-%COMP%]{padding:0;background:none}section[_ngcontent-%COMP%]   .card__auth[_ngcontent-%COMP%]{padding:40px 24px;min-height:100vh}}"]})};var Q=class t{authLocalService=p(_);userId=this.authLocalService.getInfoUserLocal()?.userId;merchantApi=p(je);merchantaData=this.merchantApi.merchantUser(this.userId);static \u0275fac=function(e){return new(e||t)};static \u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})};var lt=(t,n)=>n.id;function ct(t,n){if(t&1&&(s(0,"option",3),C(1),r()),t&2){let e=n.$implicit;d("value",e.id),c(),xe("",e.name," - ",e.address,"")}}var F=class t{name=ge.required();merchantData$=p(Q).merchantaData;merchantService=p(ze);onMerchantChange(n){let e=n.target.value;this.merchantService.setSelectedMerchantId(e),console.log("Merchant ID seleccionado:",e)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-card-user"]],inputs:{name:[1,"name"]},standalone:!0,features:[m],decls:10,vars:3,consts:[[1,"flex","flex-column","gap-2","card-user"],[1,"card-user__name"],["id","merchantItems",1,"card-user__local",3,"change"],[3,"value"]],template:function(e,i){if(e&1){let o=T();Se(0)(1),we(2,"async"),s(3,"section",0)(4,"div",1),C(5),r(),s(6,"div")(7,"select",2),v("change",function(A){return x(o),S(i.onMerchantChange(A))}),ye(8,ct,2,3,"option",3,lt),r()()()}if(e&2){let o=i.name(),b=Me(2,1,i.merchantData$);c(5),re(o),c(3),Oe(b==null?null:b.merchants)}},dependencies:[Ee],styles:[".card-user__name[_ngcontent-%COMP%]{color:#2a363b;font-size:16px;font-weight:500;line-height:24px;letter-spacing:.016em;text-align:left}.card-user__local[_ngcontent-%COMP%]{font-size:14px;font-weight:700;line-height:21px;text-align:left;color:#053da5}.card-user[_ngcontent-%COMP%]   #merchantItems[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;outline:none}.card-user[_ngcontent-%COMP%]   #merchantItems[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{padding:5px;font-size:14px;color:#2a363b!important}.card-user[_ngcontent-%COMP%]   #merchantItems[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover{background-color:#eff3fd!important;color:#2a363b!important}@media screen and (min-width: 1199px){.card-user__name[_ngcontent-%COMP%]{font-size:24px;line-height:36px}.card-user__local[_ngcontent-%COMP%]{font-size:14px;font-weight:700;line-height:21px}}"],changeDetection:0})};var w=class t{isSidenavVisibleSubject=new de(!0);isSidenavVisible$=this.isSidenavVisibleSubject.asObservable();toggleSidenav(){let n=this.isSidenavVisibleSubject.value;this.isSidenavVisibleSubject.next(!n)}setSidenavVisibility(n){this.isSidenavVisibleSubject.next(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=R({token:t,factory:t.\u0275fac,providedIn:"root"})};var Y=class t{constructor(n){this.sidenavService=n}toggleMenu(){this.sidenavService.toggleSidenav()}static \u0275fac=function(e){return new(e||t)(u(w))};static \u0275cmp=h({type:t,selectors:[["app-hamburger-icon"]],standalone:!0,features:[m],decls:3,vars:0,consts:[[1,"cursor-pointer","h-2rem"],[1,"hamburger-button",3,"click"],[1,"hamburger-icon"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"button",1),v("click",function(){return i.toggleMenu()}),a(2,"span",2),r()())},styles:['.hamburger-button[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer}.hamburger-icon[_ngcontent-%COMP%]{display:block;width:20px;height:2px;background-color:#000;position:relative}.hamburger-icon[_ngcontent-%COMP%]:before, .hamburger-icon[_ngcontent-%COMP%]:after{content:"";width:20px;height:2px;background-color:#000;position:absolute;left:0}.hamburger-icon[_ngcontent-%COMP%]:before{top:-6px}.hamburger-icon[_ngcontent-%COMP%]:after{top:6px}'],changeDetection:0})};var J=class t{userName=p(_).getNameUser()||"";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-navbar"]],standalone:!0,features:[m],decls:7,vars:1,consts:[[1,"navbar"],[1,"navbar-icon"],["src","assets/svg/pass.svg","alt","logo",2,"width","50px"],[1,"navbar-user"],[3,"name"]],template:function(e,i){e&1&&(s(0,"section",0)(1,"div",1),a(2,"app-hamburger-icon")(3,"img",2),r(),a(4,"div"),s(5,"div",3),a(6,"app-card-user",4),r()()),e&2&&(c(6),d("name","Hola, "+i.userName))},dependencies:[Y,F],styles:[".navbar-icon[_ngcontent-%COMP%]{display:flex;gap:12px}.navbar-user[_ngcontent-%COMP%]{display:none}@media (min-width: 1199px){.navbar-icon[_ngcontent-%COMP%]{display:none}.navbar-user[_ngcontent-%COMP%]{display:block}}"],changeDetection:0})};var $e=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=O({type:t});static \u0275inj=y({imports:[f]})}return t})();var X=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(X||{});function le(t,n=null){return{type:X.Animate,styles:n,timings:t}}function ce(t){return{type:X.Style,styles:t,offset:null}}function pe(t,n=null){return{type:X.Reference,animation:t,options:n}}var Qe=(()=>{class t extends qe{static \u0275fac=(()=>{let e;return function(o){return(e||(e=fe(t)))(o||t)}})();static \u0275cmp=h({type:t,selectors:[["TimesIcon"]],standalone:!0,features:[be,m],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(ue(),s(0,"svg",0),a(1,"path",1),r()),i&2&&(Z(o.getClassNames()),L("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return t})();var vi=pe([ce({transform:"{{transform}}",opacity:0}),le("{{transition}}")]),_i=pe([le("{{transition}}",ce({transform:"{{transform}}",opacity:0}))]);var Ye=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=O({type:t});static \u0275inj=y({imports:[f,W,ae,Qe,ae]})}return t})();var Je=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=O({type:t});static \u0275inj=y({imports:[f]})}return t})();var Xe=(()=>{class t{platformId;el;zone;config;renderer;viewContainer;tooltipPosition;tooltipEvent="hover";appendTo;positionStyle;tooltipStyleClass;tooltipZIndex;escape=!0;showDelay;hideDelay;life;positionTop;positionLeft;autoHide=!0;fitContent=!0;hideOnEscape=!0;content;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this.deactivate()}tooltipOptions;_tooltipOptions={tooltipLabel:null,tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",positionStyle:null,tooltipStyleClass:null,tooltipZIndex:"auto",escape:!0,disabled:null,showDelay:null,hideDelay:null,positionTop:null,positionLeft:null,life:null,autoHide:!0,hideOnEscape:!0,id:Be()+"_tooltip"};_disabled;container;styleClass;tooltipText;showTimeout;hideTimeout;active;mouseEnterListener;mouseLeaveListener;containerMouseleaveListener;clickListener;focusListener;blurListener;documentEscapeListener;scrollHandler;resizeListener;interactionInProgress=!1;constructor(e,i,o,b,A,H){this.platformId=e,this.el=i,this.zone=o,this.config=b,this.renderer=A,this.viewContainer=H}ngAfterViewInit(){Ie(this.platformId)&&this.zone.runOutsideAngular(()=>{let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onInputClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("click",this.clickListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener)),e==="focus"||e==="both"){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement)),i.addEventListener("focus",this.focusListener),i.addEventListener("blur",this.blurListener)}})}setAriaDescribedBy(){let e=this.getOption("id");e&&this.active&&this.renderer.setAttribute(this.el.nativeElement,"aria-describedby",e)}removeAriaDescribedBy(){this.renderer.removeAttribute(this.el.nativeElement,"aria-describedby")}ngOnChanges(e){e.tooltipPosition&&this.setOption({tooltipPosition:e.tooltipPosition.currentValue}),e.tooltipEvent&&this.setOption({tooltipEvent:e.tooltipEvent.currentValue}),e.appendTo&&this.setOption({appendTo:e.appendTo.currentValue}),e.positionStyle&&this.setOption({positionStyle:e.positionStyle.currentValue}),e.tooltipStyleClass&&this.setOption({tooltipStyleClass:e.tooltipStyleClass.currentValue}),e.tooltipZIndex&&this.setOption({tooltipZIndex:e.tooltipZIndex.currentValue}),e.escape&&this.setOption({escape:e.escape.currentValue}),e.showDelay&&this.setOption({showDelay:e.showDelay.currentValue}),e.hideDelay&&this.setOption({hideDelay:e.hideDelay.currentValue}),e.life&&this.setOption({life:e.life.currentValue}),e.positionTop&&this.setOption({positionTop:e.positionTop.currentValue}),e.positionLeft&&this.setOption({positionLeft:e.positionLeft.currentValue}),e.disabled&&this.setOption({disabled:e.disabled.currentValue}),e.content&&(this.setOption({tooltipLabel:e.content.currentValue}),this.active&&(e.content.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),e.autoHide&&this.setOption({autoHide:e.autoHide.currentValue}),e.id&&this.setOption({id:e.id.currentValue}),e.tooltipOptions&&(this._tooltipOptions=M(M({},this._tooltipOptions),e.tooltipOptions.currentValue),this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}isAutoHide(){return this.getOption("autoHide")}onMouseEnter(e){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(e){this.isAutoHide()?this.deactivate():!(l.hasClass(e.relatedTarget,"p-tooltip")||l.hasClass(e.relatedTarget,"p-tooltip-text")||l.hasClass(e.relatedTarget,"p-tooltip-arrow"))&&this.deactivate()}onFocus(e){this.activate()}onBlur(e){this.deactivate()}onInputClick(e){this.deactivate()}activate(){if(!this.interactionInProgress){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let e=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},e)}this.getOption("hideOnEscape")&&(this.documentEscapeListener=this.renderer.listen("document","keydown.escape",()=>{this.deactivate(),this.documentEscapeListener()}))}this.interactionInProgress=!0}deactivate(){this.interactionInProgress=!1,this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide(),this.documentEscapeListener&&this.documentEscapeListener()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div"),this.container.setAttribute("id",this.getOption("id")),this.container.setAttribute("role","tooltip");let e=document.createElement("div");e.className="p-tooltip-arrow",this.container.appendChild(e),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),this.getOption("appendTo")==="body"?document.body.appendChild(this.container):this.getOption("appendTo")==="target"?l.appendChild(this.container,this.el.nativeElement):l.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content"),this.isAutoHide()?this.container.style.pointerEvents="none":(this.container.style.pointerEvents="unset",this.bindContainerMouseleaveListener()),this.setAriaDescribedBy()}bindContainerMouseleaveListener(){if(!this.containerMouseleaveListener){let e=this.container??this.container.nativeElement;this.containerMouseleaveListener=this.renderer.listen(e,"mouseleave",i=>{this.deactivate()})}}unbindContainerMouseleaveListener(){this.containerMouseleaveListener&&(this.bindContainerMouseleaveListener(),this.containerMouseleaveListener=null)}show(){if(!this.getOption("tooltipLabel")||this.getOption("disabled"))return;this.create(),this.el.nativeElement.closest("p-dialog")?setTimeout(()=>{this.container&&this.align()},100):this.align(),l.fadeIn(this.container,250),this.getOption("tooltipZIndex")==="auto"?G.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener()}hide(){this.getOption("tooltipZIndex")==="auto"&&G.clear(this.container),this.remove()}updateText(){let e=this.getOption("tooltipLabel");if(e instanceof _e){let i=this.viewContainer.createEmbeddedView(e);i.detectChanges(),i.rootNodes.forEach(o=>this.tooltipText.appendChild(o))}else this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(e))):this.tooltipText.innerHTML=e}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break}}getHostOffset(){if(this.getOption("appendTo")==="body"||this.getOption("appendTo")==="target"){let e=this.el.nativeElement.getBoundingClientRect(),i=e.left+l.getWindowScrollLeft(),o=e.top+l.getWindowScrollTop();return{left:i,top:o}}else return{left:0,top:0}}alignRight(){this.preAlign("right");let e=this.activeElement,i=this.getHostOffset(),o=i.left+l.getOuterWidth(e),b=i.top+(l.getOuterHeight(e)-l.getOuterHeight(this.container))/2;this.container.style.left=o+this.getOption("positionLeft")+"px",this.container.style.top=b+this.getOption("positionTop")+"px"}get activeElement(){return this.el.nativeElement.nodeName.includes("P-")?l.findSingle(this.el.nativeElement,".p-component")||this.el.nativeElement:this.el.nativeElement}alignLeft(){this.preAlign("left");let e=this.getHostOffset(),i=e.left-l.getOuterWidth(this.container),o=e.top+(l.getOuterHeight(this.el.nativeElement)-l.getOuterHeight(this.container))/2;this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let e=this.getHostOffset(),i=e.left+(l.getOuterWidth(this.el.nativeElement)-l.getOuterWidth(this.container))/2,o=e.top-l.getOuterHeight(this.container);this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let e=this.getHostOffset(),i=e.left+(l.getOuterWidth(this.el.nativeElement)-l.getOuterWidth(this.container))/2,o=e.top+l.getOuterHeight(this.el.nativeElement);this.container.style.left=i+this.getOption("positionLeft")+"px",this.container.style.top=o+this.getOption("positionTop")+"px"}setOption(e){this._tooltipOptions=M(M({},this._tooltipOptions),e)}getOption(e){return this._tooltipOptions[e]}getTarget(e){return l.hasClass(e,"p-inputwrapper")?l.findSingle(e,"input"):e}preAlign(e){this.container.style.left="-999px",this.container.style.top="-999px";let i="p-tooltip p-component p-tooltip-"+e;this.container.className=this.getOption("tooltipStyleClass")?i+" "+this.getOption("tooltipStyleClass"):i}isOutOfBounds(){let e=this.container.getBoundingClientRect(),i=e.top,o=e.left,b=l.getOuterWidth(this.container),A=l.getOuterHeight(this.container),H=l.getViewport();return o+b>H.width||o<0||i<0||i+A>H.height}onWindowResize(e){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Ue(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){let e=this.getOption("tooltipEvent");if((e==="hover"||e==="both")&&(this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener)),e==="focus"||e==="both"){let i=this.el.nativeElement.querySelector(".p-component");i||(i=this.getTarget(this.el.nativeElement))}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&(this.getOption("appendTo")==="body"?document.body.removeChild(this.container):this.getOption("appendTo")==="target"?this.el.nativeElement.removeChild(this.container):l.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.unbindContainerMouseleaveListener(),this.clearTimeouts(),this.removeAriaDescribedBy(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&G.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.documentEscapeListener&&this.documentEscapeListener()}static \u0275fac=function(i){return new(i||t)(u(ve),u(N),u(se),u(Ze),u(j),u(Ce))};static \u0275dir=ne({type:t,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:[2,"escape","escape",V],showDelay:[2,"showDelay","showDelay",I],hideDelay:[2,"hideDelay","hideDelay",I],life:[2,"life","life",I],positionTop:[2,"positionTop","positionTop",I],positionLeft:[2,"positionLeft","positionLeft",I],autoHide:[2,"autoHide","autoHide",V],fitContent:[2,"fitContent","fitContent",V],hideOnEscape:[2,"hideOnEscape","hideOnEscape",V],content:[0,"pTooltip","content"],disabled:[0,"tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[z,oe]})}return t})(),et=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=O({type:t});static \u0275inj=y({imports:[f]})}return t})();var ee=class t{username=p(_).getNameUser()||"";sidenavService=p(w);isVisibleNav=!1;toggleMenu(){this.sidenavService.toggleSidenav()}ngOnInit(){this.sidenavService.isSidenavVisible$.subscribe(n=>{this.isVisibleNav=n})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-sidenav"]],standalone:!0,features:[m],decls:30,vars:9,consts:[[1,"sidenav-container"],[1,"logo-section",3,"ngClass"],[1,"font-semibold","text-2xl","text-primary"],["src","assets/svg/pass.svg","alt","logo"],["tabindex","0","role","button","aria-label","Close menu",1,"pi","pi-times","close",3,"click","keydown.enter","keydown.space"],[1,"user-section"],[3,"name"],[1,"menu-items"],["routerLink","/inicio","routerLinkActive","active",1,"menu-item"],["src","assets/svg/home.png","alt","inicio","tooltipPosition","right",3,"pTooltip"],[1,"menu-text"],["pRipple","","routerLink","/ventas","routerLinkActive","active",1,"menu-item"],["src","assets/svg/ventas.png","alt","venta","tooltipPosition","right",3,"pTooltip"],["pRipple","",1,"menu-item"],["src","assets/svg/inventario.png","alt","inventario","tooltipPosition","right",3,"pTooltip"],["src","assets/svg/reportes.png","alt","reporte","tooltipPosition","right",3,"pTooltip"],["src","assets/svg/configuracion.png","alt","configuracion","tooltipPosition","right",3,"pTooltip"],["tabindex","0","role","button",1,"show",3,"click","keydown.enter","keydown.space"],[1,"pi",3,"ngClass"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"div",1)(2,"div",2),a(3,"img",3),r(),s(4,"div",4),v("click",function(){return i.toggleMenu()})("keydown.enter",function(){return i.toggleMenu()})("keydown.space",function(){return i.toggleMenu()}),r()(),s(5,"div",5),a(6,"app-card-user",6),r(),s(7,"div",7)(8,"a",8),a(9,"img",9),s(10,"span",10),C(11,"Inicio"),r()(),s(12,"a",11),a(13,"img",12),s(14,"span",10),C(15,"Ventas"),r()(),s(16,"a",13),a(17,"img",14),s(18,"span",10),C(19,"Inventario"),r()(),s(20,"a",13),a(21,"img",15),s(22,"span",10),C(23,"Reportes"),r()(),s(24,"a",13),a(25,"img",16),s(26,"span",10),C(27,"Configuraci\xF3n"),r()()(),s(28,"div",17),v("click",function(){return i.toggleMenu()})("keydown.enter",function(){return i.toggleMenu()})("keydown.space",function(){return i.toggleMenu()}),a(29,"i",18),r()()),e&2&&(c(),d("ngClass",i.isVisibleNav?"":"logo"),c(5),d("name",i.username),c(3),d("pTooltip",i.isVisibleNav?"":"Inicio"),c(4),d("pTooltip",i.isVisibleNav?"":"Ventas"),c(4),d("pTooltip",i.isVisibleNav?"":"Inventario"),c(4),d("pTooltip",i.isVisibleNav?"":"Reportes"),c(4),d("pTooltip",i.isVisibleNav?"":"Configuraci\xF3n"),c(3),L("aria-label",i.isVisibleNav?"Collapse menu":"Expand menu"),c(),d("ngClass",i.isVisibleNav?"pi-angle-left":"pi-angle-right"))},dependencies:[Ye,Ge,W,Ke,$e,Je,F,Ve,He,K,f,q,et,Xe],styles:[".sidenav-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;background-color:#fff;transition:width .4s ease}.sidenav-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]{text-align:center;padding:40px 0 20px;border-bottom:1px solid #e0e0e0}.sidenav-container[_ngcontent-%COMP%]   .card-user[_ngcontent-%COMP%]{padding:16px}.sidenav-container[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{display:none}.sidenav-container[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:16px;overflow-x:hidden}.sidenav-container[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}.sidenav-container[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center;padding:12px 16px;color:#2a363b;font-size:18px;font-weight:400;text-decoration:none;transition:background-color .3s ease;position:relative}.sidenav-container[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.sidenav-container[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]{font-size:24px}.sidenav-container[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   .menu-text[_ngcontent-%COMP%]{margin-left:12px;font-weight:400;white-space:nowrap}.sidenav-container[_ngcontent-%COMP%]   .user-section[_ngcontent-%COMP%]{visibility:hidden;height:60px}.sidenav-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:30px 11px}.sidenav-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:45px}.sidenav-container[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:flex;position:absolute;top:130px;right:-15px;border:1px solid #012060;background-color:#fff;padding:5px;border-radius:50%;height:24px;width:24px;justify-content:center;align-items:center}.sidenav-container[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]   .pi-angle-left[_ngcontent-%COMP%], .sidenav-container[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]   .pi-angle-right[_ngcontent-%COMP%]{font-size:16px;color:#012060}.sidenav-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{background-color:#9570de}.sidenav-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding:4px;color:#fff;text-align:center;border-radius:6px;width:32px;height:32px;background-color:#9570de}.sidenav-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700!important}@media (max-width: 1199px){.sidenav-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.sidenav-container[_ngcontent-%COMP%]   .logo-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:60px}.sidenav-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding-top:20px}.sidenav-container[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{display:none}.sidenav-container[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]{gap:12px}.sidenav-container[_ngcontent-%COMP%]   .pi-times[_ngcontent-%COMP%]{display:block}.sidenav-container[_ngcontent-%COMP%]   .user-section[_ngcontent-%COMP%]{visibility:visible;height:auto;padding:24px 10px 24px 16px;border-top:1px solid #e0e0e0}}"]})};var gt=t=>({"collapsed-sidenav":t}),vt=t=>({collapsed:t});function _t(t,n){if(t&1){let e=T();s(0,"div",7),v("click",function(){x(e);let o=E();return S(o.onOverlayClick())})("keydown.enter",function(){x(e);let o=E();return S(o.onOverlayClick())})("keydown.space",function(){x(e);let o=E();return S(o.onOverlayClick())}),r()}}var te=class t{constructor(n){this.sidenavService=n}isVisibleNav=!1;ngOnInit(){this.sidenavService.isSidenavVisible$.subscribe(n=>{this.isVisibleNav=n})}onOverlayClick(){this.sidenavService.toggleSidenav()}isCollapsed=!1;toggleSidenav(){this.isCollapsed=!this.isCollapsed}static \u0275fac=function(e){return new(e||t)(u(w))};static \u0275cmp=h({type:t,selectors:[["app-main-layout"]],standalone:!0,features:[m],decls:9,vars:7,consts:[[1,"container-layout",3,"ngClass"],[1,"sidenav"],[3,"ngClass"],[1,"page"],[1,"navbar"],[1,"content"],["class","overlay","tabindex","0","role","button","aria-label","Close overlay",3,"click","keydown.enter","keydown.space",4,"ngIf"],["tabindex","0","role","button","aria-label","Close overlay",1,"overlay",3,"click","keydown.enter","keydown.space"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"div",1),a(2,"app-sidenav",2),r(),s(3,"div",3)(4,"div",4),a(5,"app-navbar"),r(),s(6,"section",5),a(7,"router-outlet"),r()(),B(8,_t,1,0,"div",6),r()),e&2&&(d("ngClass",U(3,gt,!i.isVisibleNav)),c(2),d("ngClass",U(5,vt,!i.isVisibleNav)),c(6),d("ngIf",!i.isVisibleNav))},dependencies:[f,q,Te,K,k,ee,J],styles:['.container-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(min-content,224px) 1fr;grid-template-rows:88px minmax(calc(100vh - 88px),1fr);width:100%;grid-template-areas:"sidenav page" "sidenav page";transition:grid-template-columns .4s ease}.container-layout.collapsed-sidenav[_ngcontent-%COMP%]{grid-template-columns:64px}@media (max-width: 1199px){.container-layout[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:100vh;grid-template-areas:"page"}.container-layout.collapsed-sidenav[_ngcontent-%COMP%]{grid-template-columns:1fr}.container-layout[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:100%;width:248px;z-index:1050;background-color:#fff;box-shadow:2px 0 10px #0003;transform:translate(-100%);opacity:0;transition:transform .25s ease-in-out,opacity .5s ease-in-out}.container-layout[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:#00000080;z-index:1040}.container-layout.collapsed-sidenav[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{transform:translate(0);opacity:1}.container-layout[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]{padding:0}.container-layout[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]{height:56px;display:flex;align-items:center;padding:0 12px;background-color:#fff}.container-layout[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:0 12px}}.navbar[_ngcontent-%COMP%]{width:100%;height:88px}.sidenav[_ngcontent-%COMP%]{grid-area:sidenav;opacity:1;transform:translate(0);transition:transform .25s ease-in-out,opacity .5s ease-in-out;box-shadow:2px 0 10px #0003;z-index:1}.collapsed-sidenav[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]{transform:translate(0);opacity:1}.page[_ngcontent-%COMP%]{grid-area:page;background:#eff3fd;width:100%;padding:20px 40px 40px;overflow:auto;z-index:0}'],changeDetection:0})};var tt=(t,n)=>{let e=p(P),i=p(_);return i.isLogued()?!0:(i.setRedirectUrl(n.url),e.navigate(["/autenticar"]),!1)};var it=(t,n)=>{let e=p(P),i=p(_);if(i.isLogued()){let o=i.isLogued()?"/":"/autenticar/iniciar-sesion";return e.navigateByUrl(o),!1}return!0};var nt=[{path:"",component:te,canActivate:[tt],loadChildren:()=>import("./chunk-XESDRLLL.js").then(t=>t.MODULES_ROUTES)},{path:"autenticar",component:$,canActivate:[it],loadChildren:()=>import("./chunk-KGCAUA6W.js").then(t=>t.AUTH_ROUTES)}];var ot=(t,n)=>{let i=p(_).getToken(),o=i?t.clone({setHeaders:{Authorization:`Bearer ${i}`}}):t;return n(o)};var st=(t,n)=>n(t).pipe(me(e=>{switch(console.error("HTTP Error Intercepted:",e),e.status){case 400:alert("La solicitud contiene errores. Verifique e intente nuevamente.");break;case 401:localStorage.clear(),window.location.href="/autenticar/iniciar-sesion";break;case 403:alert("No tiene permisos para realizar esta acci\xF3n.");break;case 404:break;case 500:alert("Ha ocurrido un error en el servidor. Intente nuevamente m\xE1s tarde.");break;case 0:alert("No se pudo conectar con el servidor. Verifique su conexi\xF3n a Internet.");break;default:alert(`Ha ocurrido un error inesperado: ${e.message}`);break}return he(()=>e)}));var rt={providers:[Re(nt,Ne()),Ae(),ke(De(),Pe([ot,st])),Le()]};var ie=class t{title="pass";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=h({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,template:function(e,i){e&1&&a(0,"router-outlet")},dependencies:[k]})};Fe(ie,rt).catch(t=>console.error(t));