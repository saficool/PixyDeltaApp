"use strict";(self.webpackChunkPixyDeltaApp=self.webpackChunkPixyDeltaApp||[]).push([[926],{7926:(wt,I,l)=>{l.r(I),l.d(I,{ListNotesModule:()=>St});var u=l(6895),_=l(8996),e=l(4650),N=l(2732),d=l(805),P=l(5696),S=l(4859),y=l(8580),b=l(3546),O=l(7392),h=l(7340),p=l(9592),x=l(1795);let R=(()=>{class i{constructor(t){this.el=t,this.iconPos="left",this.loadingIcon="pi pi-spinner pi-spin",this._loading=!1}ngAfterViewInit(){this._initialStyleClass=this.el.nativeElement.className,p.p.addMultipleClasses(this.el.nativeElement,this.getStyleClass()),(this.icon||this.loading)&&this.createIconEl();let t=document.createElement("span");this.icon&&!this.label&&t.setAttribute("aria-hidden","true"),t.className="p-button-label",this.label?t.appendChild(document.createTextNode(this.label)):t.innerHTML="&nbsp;",this.el.nativeElement.appendChild(t),this.initialized=!0}getStyleClass(){let t="p-button p-component";return this.icon&&!this.label&&(t+=" p-button-icon-only"),this.loading&&(t+=" p-disabled p-button-loading",!this.icon&&this.label&&(t+=" p-button-loading-label-only")),t}setStyleClass(){let t=this.getStyleClass();this.el.nativeElement.className=t+" "+this._initialStyleClass}createIconEl(){let t=document.createElement("span");t.className="p-button-icon",t.setAttribute("aria-hidden","true");let n=this.label?"p-button-icon-"+this.iconPos:null;n&&p.p.addClass(t,n);let o=this.getIconClass();o&&p.p.addMultipleClasses(t,o);let a=p.p.findSingle(this.el.nativeElement,".p-button-label");a?this.el.nativeElement.insertBefore(t,a):this.el.nativeElement.appendChild(t)}getIconClass(){return this.loading?"p-button-loading-icon "+this.loadingIcon:this._icon}setIconClass(){let t=p.p.findSingle(this.el.nativeElement,".p-button-icon");t?t.className=this.iconPos?"p-button-icon p-button-icon-"+this.iconPos+" "+this.getIconClass():"p-button-icon "+this.getIconClass():this.createIconEl()}removeIconElement(){let t=p.p.findSingle(this.el.nativeElement,".p-button-icon");this.el.nativeElement.removeChild(t)}get label(){return this._label}set label(t){this._label=t,this.initialized&&(p.p.findSingle(this.el.nativeElement,".p-button-label").textContent=this._label||"&nbsp;",(this.loading||this.icon)&&this.setIconClass(),this.setStyleClass())}get icon(){return this._icon}set icon(t){this._icon=t,this.initialized&&(this.setIconClass(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.loading||this.icon?this.setIconClass():this.removeIconElement(),this.setStyleClass())}ngOnDestroy(){this.initialized=!1}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq))},i.\u0275dir=e.lG2({type:i,selectors:[["","pButton",""]],hostAttrs:[1,"p-element"],inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",label:"label",icon:"icon",loading:"loading"}}),i})(),L=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,x.T]}),i})();var v=l(982);const Y=["content"];function G(i,s){1&i&&e.GkF(0)}function H(i,s){if(1&i&&(e.TgZ(0,"div",10),e.YNc(1,G,1,0,"ng-container",11),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngTemplateOutlet",t.headerTemplate)}}function J(i,s){if(1&i&&(e.TgZ(0,"span",15),e._uU(1),e.qZA()),2&i){const t=e.oxw(4);e.xp6(1),e.Oqu(t.option("header"))}}const V=function(){return{"p-dialog-header-icon p-dialog-header-close p-link":!0}};function Q(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(o){e.CHM(t);const a=e.oxw(4);return e.KtG(a.close(o))})("keydown.enter",function(o){e.CHM(t);const a=e.oxw(4);return e.KtG(a.close(o))}),e._UZ(1,"span",17),e.qZA()}2&i&&e.Q6J("ngClass",e.DdM(1,V))}function z(i,s){if(1&i&&(e.TgZ(0,"div",10),e.YNc(1,J,2,1,"span",12),e.TgZ(2,"div",13),e.YNc(3,Q,2,2,"button",14),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.option("header")),e.xp6(2),e.Q6J("ngIf",t.closable)}}function U(i,s){if(1&i&&e._UZ(0,"i",1),2&i){const t=e.oxw(3);e.Tol(t.option("icon")),e.Q6J("ngClass","p-confirm-dialog-icon")}}function $(i,s){1&i&&e.GkF(0)}function K(i,s){if(1&i&&(e.TgZ(0,"div",18),e.Hsn(1),e.YNc(2,$,1,0,"ng-container",11),e.qZA()),2&i){const t=e.oxw(3);e.xp6(2),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}function W(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(4);return e.KtG(o.reject())}),e.qZA()}if(2&i){const t=e.oxw(4);e.Tol(t.option("rejectButtonStyleClass")),e.Q6J("icon",t.option("rejectIcon"))("label",t.rejectButtonLabel)("ngClass","p-confirm-dialog-reject"),e.uIk("aria-label",t.rejectAriaLabel)}}function q(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(4);return e.KtG(o.accept())}),e.qZA()}if(2&i){const t=e.oxw(4);e.Tol(t.option("acceptButtonStyleClass")),e.Q6J("icon",t.option("acceptIcon"))("label",t.acceptButtonLabel)("ngClass","p-confirm-dialog-accept"),e.uIk("aria-label",t.acceptAriaLabel)}}function X(i,s){if(1&i&&(e.TgZ(0,"div",18),e.YNc(1,W,1,6,"button",19),e.YNc(2,q,1,6,"button",19),e.qZA()),2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.option("rejectVisible")),e.xp6(1),e.Q6J("ngIf",t.option("acceptVisible"))}}const tt=function(i){return{"p-dialog p-confirm-dialog p-component":!0,"p-dialog-rtl":i}},et=function(i,s){return{transform:i,transition:s}},it=function(i){return{value:"visible",params:i}};function nt(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",3),e.NdJ("@animation.start",function(o){e.CHM(t);const a=e.oxw(2);return e.KtG(a.onAnimationStart(o))})("@animation.done",function(o){e.CHM(t);const a=e.oxw(2);return e.KtG(a.onAnimationEnd(o))}),e.YNc(1,H,2,1,"div",4),e.YNc(2,z,4,2,"div",4),e.TgZ(3,"div",5,6),e.YNc(5,U,1,3,"i",7),e._UZ(6,"span",8),e.qZA(),e.YNc(7,K,3,1,"div",9),e.YNc(8,X,3,2,"div",9),e.qZA()}if(2&i){const t=e.oxw(2);e.Tol(t.styleClass),e.Q6J("ngClass",e.VKq(11,tt,t.rtl))("ngStyle",t.style)("@animation",e.VKq(16,it,e.WLB(13,et,t.transformOptions,t.transitionOptions))),e.xp6(1),e.Q6J("ngIf",t.headerTemplate),e.xp6(1),e.Q6J("ngIf",!t.headerTemplate),e.xp6(3),e.Q6J("ngIf",t.option("icon")),e.xp6(1),e.Q6J("innerHTML",t.option("message"),e.oJD),e.xp6(1),e.Q6J("ngIf",t.footer||t.footerTemplate),e.xp6(1),e.Q6J("ngIf",!t.footer&&!t.footerTemplate)}}function ot(i,s){if(1&i&&(e.TgZ(0,"div",1),e.YNc(1,nt,9,18,"div",2),e.qZA()),2&i){const t=e.oxw();e.Tol(t.maskStyleClass),e.Q6J("ngClass",t.getMaskClass()),e.xp6(1),e.Q6J("ngIf",t.visible)}}const st=[[["p-footer"]]],at=["p-footer"],lt=(0,h.oQ)([(0,h.oB)({transform:"{{transform}}",opacity:0}),(0,h.jt)("{{transition}}",(0,h.oB)({transform:"none",opacity:1}))]),ct=(0,h.oQ)([(0,h.jt)("{{transition}}",(0,h.oB)({transform:"{{transform}}",opacity:0}))]);let rt=(()=>{class i{constructor(t,n,o,a,c,r){this.el=t,this.renderer=n,this.confirmationService=o,this.zone=a,this.cd=c,this.config=r,this.acceptIcon="pi pi-check",this.acceptVisible=!0,this.rejectIcon="pi pi-times",this.rejectVisible=!0,this.closeOnEscape=!0,this.blockScroll=!0,this.closable=!0,this.autoZIndex=!0,this.baseZIndex=0,this.transitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.focusTrap=!0,this.defaultFocus="accept",this.onHide=new e.vpe,this._position="center",this.transformOptions="scale(0.7)",this.id=(0,v.Th)(),this.subscription=this.confirmationService.requireConfirmation$.subscribe(f=>{f?f.key===this.key&&(this.confirmation=f,this.confirmationOptions={message:this.confirmation.message||this.message,icon:this.confirmation.icon||this.icon,header:this.confirmation.header||this.header,rejectVisible:this.confirmation.rejectVisible??this.rejectVisible,acceptVisible:this.confirmation.acceptVisible??this.acceptVisible,acceptLabel:this.confirmation.acceptLabel||this.acceptLabel,rejectLabel:this.confirmation.rejectLabel||this.rejectLabel,acceptIcon:this.confirmation.acceptIcon||this.acceptIcon,rejectIcon:this.confirmation.rejectIcon||this.rejectIcon,acceptButtonStyleClass:this.confirmation.acceptButtonStyleClass||this.acceptButtonStyleClass,rejectButtonStyleClass:this.confirmation.rejectButtonStyleClass||this.rejectButtonStyleClass,defaultFocus:this.confirmation.defaultFocus||this.defaultFocus,blockScroll:!1===this.confirmation.blockScroll||!0===this.confirmation.blockScroll?this.confirmation.blockScroll:this.blockScroll,closeOnEscape:!1===this.confirmation.closeOnEscape||!0===this.confirmation.closeOnEscape?this.confirmation.closeOnEscape:this.closeOnEscape,dismissableMask:!1===this.confirmation.dismissableMask||!0===this.confirmation.dismissableMask?this.confirmation.dismissableMask:this.dismissableMask},this.confirmation.accept&&(this.confirmation.acceptEvent=new e.vpe,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new e.vpe,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0):this.hide()})}get visible(){return this._visible}set visible(t){this._visible=t,this._visible&&!this.maskVisible&&(this.maskVisible=!0),this.cd.markForCheck()}get position(){return this._position}set position(t){switch(this._position=t,t){case"top-left":case"bottom-left":case"left":this.transformOptions="translate3d(-100%, 0px, 0px)";break;case"top-right":case"bottom-right":case"right":this.transformOptions="translate3d(100%, 0px, 0px)";break;case"bottom":this.transformOptions="translate3d(0px, 100%, 0px)";break;case"top":this.transformOptions="translate3d(0px, -100%, 0px)";break;default:this.transformOptions="scale(0.7)"}}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template}})}ngOnInit(){this.breakpoints&&this.createStyle(),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.visible&&this.cd.markForCheck()})}option(t){const n=this.confirmationOptions||this;if(n.hasOwnProperty(t))return n[t]}onAnimationStart(t){if("visible"===t.toState){this.container=t.element,this.wrapper=this.container.parentElement,this.contentContainer=p.p.findSingle(this.container,".p-dialog-content"),this.container.setAttribute(this.id,""),this.appendContainer(),this.moveOnTop(),this.bindGlobalListeners(),this.enableModality();const n=this.getElementToFocus();n&&n.focus()}}onAnimationEnd(t){"void"===t.toState&&this.onOverlayHide()}getElementToFocus(){switch(this.option("defaultFocus")){case"accept":default:return p.p.findSingle(this.container,".p-confirm-dialog-accept");case"reject":return p.p.findSingle(this.container,".p-confirm-dialog-reject");case"close":return p.p.findSingle(this.container,".p-dialog-header-close");case"none":return null}}appendContainer(){this.appendTo&&("body"===this.appendTo?document.body.appendChild(this.wrapper):p.p.appendChild(this.wrapper,this.appendTo))}restoreAppend(){this.wrapper&&this.appendTo&&this.el.nativeElement.appendChild(this.wrapper)}enableModality(){this.option("blockScroll")&&p.p.addClass(document.body,"p-overflow-hidden"),this.option("dismissableMask")&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",t=>{this.wrapper&&this.wrapper.isSameNode(t.target)&&this.close(t)}))}disableModality(){this.maskVisible=!1,this.option("blockScroll")&&p.p.removeClass(document.body,"p-overflow-hidden"),this.dismissableMask&&this.unbindMaskClickListener(),this.container&&!this.cd.destroyed&&this.cd.detectChanges()}createStyle(){if(!this.styleElement){this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t="";for(let n in this.breakpoints)t+=`\n                    @media screen and (max-width: ${n}) {\n                        .p-dialog[${this.id}] {\n                            width: ${this.breakpoints[n]} !important;\n                        }\n                    }\n                `;this.styleElement.innerHTML=t}}close(t){this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(d.wB.CANCEL),this.hide(d.wB.CANCEL),t.preventDefault()}hide(t){this.onHide.emit(t),this.visible=!1,this.confirmation=null,this.confirmationOptions=null}moveOnTop(){this.autoZIndex&&(v.P9.set("modal",this.container,this.baseZIndex+this.config.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}getMaskClass(){let t={"p-dialog-mask p-component-overlay":!0,"p-dialog-mask-scrollblocker":this.blockScroll};return t[this.getPositionClass().toString()]=!0,t}getPositionClass(){const n=["left","right","top","top-left","top-right","bottom","bottom-left","bottom-right"].find(o=>o===this.position);return n?`p-dialog-${n}`:""}bindGlobalListeners(){(this.option("closeOnEscape")&&this.closable||this.focusTrap&&!this.documentEscapeListener)&&(this.documentEscapeListener=this.renderer.listen(this.el?this.el.nativeElement.ownerDocument:"document","keydown",n=>{if(27==n.which&&this.option("closeOnEscape")&&this.closable&&parseInt(this.container.style.zIndex)===v.P9.get(this.container)&&this.visible&&this.close(n),9===n.which&&this.focusTrap){n.preventDefault();let o=p.p.getFocusableElements(this.container);if(o&&o.length>0)if(o[0].ownerDocument.activeElement){let a=o.indexOf(o[0].ownerDocument.activeElement);n.shiftKey?-1==a||0===a?o[o.length-1].focus():o[a-1].focus():-1==a||a===o.length-1?o[0].focus():o[a+1].focus()}else o[0].focus()}}))}unbindGlobalListeners(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}onOverlayHide(){this.container&&this.autoZIndex&&v.P9.clear(this.container),this.disableModality(),this.unbindGlobalListeners(),this.container=null}destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}ngOnDestroy(){this.restoreAppend(),this.onOverlayHide(),this.subscription.unsubscribe(),this.translationSubscription&&this.translationSubscription.unsubscribe(),this.destroyStyle()}accept(){this.confirmation&&this.confirmation.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(d.wB.ACCEPT)}reject(){this.confirmation&&this.confirmation.rejectEvent&&this.confirmation.rejectEvent.emit(d.wB.REJECT),this.hide(d.wB.REJECT)}get acceptButtonLabel(){return this.option("acceptLabel")||this.config.getTranslation(d.ws.ACCEPT)}get rejectButtonLabel(){return this.option("rejectLabel")||this.config.getTranslation(d.ws.REJECT)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(d.YP),e.Y36(e.R0b),e.Y36(e.sBO),e.Y36(d.b4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-confirmDialog"]],contentQueries:function(t,n,o){if(1&t&&(e.Suo(o,d.$_,5),e.Suo(o,d.jx,4)),2&t){let a;e.iGM(a=e.CRH())&&(n.footer=a.first),e.iGM(a=e.CRH())&&(n.templates=a)}},viewQuery:function(t,n){if(1&t&&e.Gf(Y,5),2&t){let o;e.iGM(o=e.CRH())&&(n.contentViewChild=o.first)}},hostAttrs:[1,"p-element"],inputs:{header:"header",icon:"icon",message:"message",style:"style",styleClass:"styleClass",maskStyleClass:"maskStyleClass",acceptIcon:"acceptIcon",acceptLabel:"acceptLabel",acceptAriaLabel:"acceptAriaLabel",acceptVisible:"acceptVisible",rejectIcon:"rejectIcon",rejectLabel:"rejectLabel",rejectAriaLabel:"rejectAriaLabel",rejectVisible:"rejectVisible",acceptButtonStyleClass:"acceptButtonStyleClass",rejectButtonStyleClass:"rejectButtonStyleClass",closeOnEscape:"closeOnEscape",dismissableMask:"dismissableMask",blockScroll:"blockScroll",rtl:"rtl",closable:"closable",appendTo:"appendTo",key:"key",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",transitionOptions:"transitionOptions",focusTrap:"focusTrap",defaultFocus:"defaultFocus",breakpoints:"breakpoints",visible:"visible",position:"position"},outputs:{onHide:"onHide"},ngContentSelectors:at,decls:1,vars:1,consts:[[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","ngStyle"],["class","p-dialog-header",4,"ngIf"],[1,"p-dialog-content"],["content",""],[3,"ngClass","class",4,"ngIf"],[1,"p-confirm-dialog-message",3,"innerHTML"],["class","p-dialog-footer",4,"ngIf"],[1,"p-dialog-header"],[4,"ngTemplateOutlet"],["class","p-dialog-title",4,"ngIf"],[1,"p-dialog-header-icons"],["type","button",3,"ngClass","click","keydown.enter",4,"ngIf"],[1,"p-dialog-title"],["type","button",3,"ngClass","click","keydown.enter"],[1,"pi","pi-times"],[1,"p-dialog-footer"],["type","button","pRipple","","pButton","",3,"icon","label","ngClass","class","click",4,"ngIf"],["type","button","pRipple","","pButton","",3,"icon","label","ngClass","click"]],template:function(t,n){1&t&&(e.F$t(st),e.YNc(0,ot,2,4,"div",0)),2&t&&e.Q6J("ngIf",n.maskVisible)},dependencies:[u.mk,u.O5,u.tP,u.PC,R,x.H],styles:[".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translate(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0px!important;left:0px!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}\n"],encapsulation:2,data:{animation:[(0,h.X$)("animation",[(0,h.eR)("void => visible",[(0,h._7)(lt)]),(0,h.eR)("visible => void",[(0,h._7)(ct)])])]},changeDetection:0}),i})(),dt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,L,x.T,L,d.m8]}),i})();var w=l(2453);function pt(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"cdk-accordion-item",11,12)(2,"mat-card",13),e.NdJ("click",function(){e.CHM(t);const o=e.MAs(1);return e.KtG(o.toggle())}),e._uU(3),e.TgZ(4,"span",14),e._UZ(5,"i"),e.qZA()(),e.TgZ(6,"mat-card",15)(7,"mat-card-content"),e._uU(8),e.qZA(),e.TgZ(9,"mat-card-actions")(10,"div",16)(11,"button",17),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.editNote(a))}),e.TgZ(12,"mat-icon"),e._uU(13,"edit"),e.qZA()(),e.TgZ(14,"div",18),e._uU(15),e.ALo(16,"date"),e.qZA(),e.TgZ(17,"div",19),e._uU(18),e.ALo(19,"date"),e.qZA(),e.TgZ(20,"button",20),e.NdJ("click",function(){const a=e.CHM(t).$implicit,c=e.oxw();return e.KtG(c.deleteNote(a.id))}),e.TgZ(21,"mat-icon"),e._uU(22,"delete"),e.qZA()()()()()()}if(2&i){const t=s.$implicit,n=s.index,o=e.MAs(1);e.uIk("id","accordion-header-"+n)("aria-expanded",o.expanded)("aria-controls","accordion-body-"+n),e.xp6(3),e.hij(" ",t.title," "),e.xp6(2),e.Gre("fa-solid ",o.expanded?"fa-chevron-up":"fa-chevron-down"," fa-chevron-down"),e.xp6(1),e.Udp("display",o.expanded?"":"none"),e.uIk("id","accordion-body-"+n)("aria-labelledby","accordion-header-"+n),e.xp6(2),e.hij(" ",t.content," "),e.xp6(7),e.hij("Created: ",e.xi3(16,14,t.created+"Z","short"),""),e.xp6(3),e.hij("Last modefied: ",e.xi3(19,17,t.modified+"Z","short"),"")}}function ht(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",21),e.NdJ("click",function(){e.CHM(t),e.oxw();const o=e.MAs(9);return e.KtG(o.reject())}),e._uU(1,"No"),e.qZA(),e.TgZ(2,"button",22),e.NdJ("click",function(){e.CHM(t),e.oxw();const o=e.MAs(9);return e.KtG(o.accept())}),e._uU(3,"Yes"),e.qZA()}}const ut=function(){return{width:"auto"}},ft=[{path:"",component:(()=>{class i{constructor(t,n,o,a,c){this.notesService=t,this.confirmationService=n,this.shareDataService=o,this.router=a,this.messageService=c}ngOnInit(){this.getNotes()}ngOnDestroy(){this.notes_sub&&this.notes_sub.unsubscribe(),this.deleteNote_subscription&&this.deleteNote_subscription.unsubscribe()}getNotes(){this.notes_sub=this.notesService.GetNotes().subscribe({next:t=>{this.notes=t,console.log(this.notes)},error:t=>{console.log(t)},complete:()=>{}})}deleteNote(t){this.confirmationService.confirm({message:"Are you sure that you want to delete this note?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.deleteNote_subscription=this.notesService.DeleteNote(t).subscribe({next:n=>{var o=this.notes.findIndex(a=>a.id==t);this.notes.splice(o,1),this.messageService.add({severity:"success",summary:"Success",detail:"Note deleted successfully!"})},error:n=>{this.messageService.add({severity:"error",summary:"Error",detail:"Error while deleting note!"})}})}})}editNote(t){this.shareDataService.setData("note",t),this.router.navigate(["/auth/notes/update-note"])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(N.U),e.Y36(d.YP),e.Y36(P.u),e.Y36(_.F0),e.Y36(d.ez))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-list-notes"]],decls:12,vars:6,consts:[[1,"content"],[1,"container"],[1,"row","mb-2"],[1,"col-sm-12","d-flex"],["mat-raised-button","","routerLink","../create-note",1,"me-auto"],[1,"notes-accordion"],["class","notes-accordion-item","role","button","tabindex","0",4,"ngFor","ngForOf"],[3,"transitionOptions","baseZIndex"],["cd",""],["pTemplate","footer"],["position","bottom-right"],["role","button","tabindex","0",1,"notes-accordion-item"],["accordionItem","cdkAccordionItem"],[1,"notes-accordion-item-header",3,"click"],[1,"notes-accordion-item-description","text-dark"],["role","region",1,"notes-accordion-item-body"],[1,"d-flex","align-items-center"],["mat-icon-button","",1,"me-2",3,"click"],[1,"text-muted","me-2"],[1,"text-muted","me-auto"],["mat-icon-button","","color","accent",3,"click"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"button",4),e._uU(5," Add Note "),e.qZA()()(),e.TgZ(6,"cdk-accordion",5),e.YNc(7,pt,23,20,"cdk-accordion-item",6),e.qZA()()(),e.TgZ(8,"p-confirmDialog",7,8),e.YNc(10,ht,4,0,"ng-template",9),e.qZA(),e._UZ(11,"p-toast",10)),2&t&&(e.xp6(7),e.Q6J("ngForOf",n.notes),e.xp6(1),e.Akn(e.DdM(5,ut)),e.Q6J("transitionOptions","100ms")("baseZIndex",1e4))},dependencies:[u.sg,_.rH,S.lW,y.xI,y.dD,b.a8,b.dn,b.hq,O.Hw,rt,d.jx,w.FN,u.uU],styles:[".notes-accordion-item[_ngcontent-%COMP%]:hover{cursor:pointer;box-shadow:#00000030 0 10px 20px,#0000003b 0 6px 6px}.notes-accordion[_ngcontent-%COMP%]{display:block;max-width:100%}.notes-accordion-item[_ngcontent-%COMP%]{display:block;border:solid 1px #c0c2cd;background:white;margin-bottom:.5rem}.notes-accordion-item[_ngcontent-%COMP%] + .notes-accordion-item[_ngcontent-%COMP%]{border-top:none}.notes-accordion-item-header[_ngcontent-%COMP%]{display:flex;align-content:center;justify-content:space-between}.notes-accordion-item-description[_ngcontent-%COMP%]{font-size:.85em;color:#999}.notes-accordion-item-header[_ngcontent-%COMP%], .notes-accordion-item-body[_ngcontent-%COMP%]{padding:1rem}.notes-accordion-item-header[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#eee}.notes-accordion-item[_ngcontent-%COMP%]:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.notes-accordion-item[_ngcontent-%COMP%]:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}mat-card-actions[_ngcontent-%COMP%]{padding:0}"]}),i})()}];let mt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(ft),_.Bz]}),i})();var C=l(2687),g=l(8184),T=l(3353),m=l(4080),M=l(9521),k=l(7579),gt=l(9770),_t=l(9646),B=l(445),bt=l(8675);function vt(i,s){}class D{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0}}let Ct=(()=>{class i extends m.en{constructor(t,n,o,a,c,r,f,j){super(),this._elementRef=t,this._focusTrapFactory=n,this._config=a,this._interactivityChecker=c,this._ngZone=r,this._overlayRef=f,this._focusMonitor=j,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=Ot=>{this._portalOutlet.hasAttached();const Lt=this._portalOutlet.attachDomPortal(Ot);return this._contentAttached(),Lt},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=o}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(t){this._portalOutlet.hasAttached();const n=this._portalOutlet.attachComponentPortal(t);return this._contentAttached(),n}attachTemplatePortal(t){this._portalOutlet.hasAttached();const n=this._portalOutlet.attachTemplatePortal(t);return this._contentAttached(),n}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(t,n){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const o=()=>{t.removeEventListener("blur",o),t.removeEventListener("mousedown",o),t.removeAttribute("tabindex")};t.addEventListener("blur",o),t.addEventListener("mousedown",o)})),t.focus(n)}_focusByCssSelector(t,n){let o=this._elementRef.nativeElement.querySelector(t);o&&this._forceFocus(o,n)}_trapFocus(){const t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(n=>{n||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const t=this._config.restoreFocus;let n=null;if("string"==typeof t?n=this._document.querySelector(t):"boolean"==typeof t?n=t?this._elementFocusedBeforeDialogWasOpened:null:t&&(n=t),this._config.restoreFocus&&n&&"function"==typeof n.focus){const o=(0,T.ht)(),a=this._elementRef.nativeElement;(!o||o===this._document.body||o===a||a.contains(o))&&(this._focusMonitor?(this._focusMonitor.focusVia(n,this._closeInteractionType),this._closeInteractionType=null):n.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const t=this._elementRef.nativeElement,n=(0,T.ht)();return t===n||t.contains(n)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,T.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(C.qV),e.Y36(u.K0,8),e.Y36(D),e.Y36(C.ic),e.Y36(e.R0b),e.Y36(g.Iu),e.Y36(C.tE))},i.\u0275cmp=e.Xpm({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(t,n){if(1&t&&e.Gf(m.Pl,7),2&t){let o;e.iGM(o=e.CRH())&&(n._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,n){2&t&&e.uIk("id",n._config.id||null)("role",n._config.role)("aria-modal",n._config.ariaModal)("aria-labelledby",n._config.ariaLabel?null:n._ariaLabelledBy)("aria-label",n._config.ariaLabel)("aria-describedby",n._config.ariaDescribedBy||null)},features:[e.qOj],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,n){1&t&&e.YNc(0,vt,0,0,"ng-template",0)},dependencies:[m.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),i})();class E{constructor(s,t){this.overlayRef=s,this.config=t,this.closed=new k.x,this.disableClose=t.disableClose,this.backdropClick=s.backdropClick(),this.keydownEvents=s.keydownEvents(),this.outsidePointerEvents=s.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(n=>{n.keyCode===M.hY&&!this.disableClose&&!(0,M.Vb)(n)&&(n.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})})}close(s,t){if(this.containerInstance){const n=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this.overlayRef.dispose(),n.next(s),n.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(s="",t=""){return this.overlayRef.updateSize({width:s,height:t}),this}addPanelClass(s){return this.overlayRef.addPanelClass(s),this}removePanelClass(s){return this.overlayRef.removePanelClass(s),this}}const F=new e.OlP("DialogScrollStrategy"),yt=new e.OlP("DialogData"),xt=new e.OlP("DefaultDialogConfig"),kt={provide:F,deps:[g.aV],useFactory:function Tt(i){return()=>i.scrollStrategies.block()}};let Dt=0,Et=(()=>{class i{constructor(t,n,o,a,c,r){this._overlay=t,this._injector=n,this._defaultOptions=o,this._parentDialog=a,this._overlayContainer=c,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new k.x,this._afterOpenedAtThisLevel=new k.x,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,gt.P)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,bt.O)(void 0))),this._scrollStrategy=r}get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}open(t,n){(n={...this._defaultOptions||new D,...n}).id=n.id||"cdk-dialog-"+Dt++,n.id&&this.getDialogById(n.id);const a=this._getOverlayConfig(n),c=this._overlay.create(a),r=new E(c,n),f=this._attachContainer(c,r,n);return r.containerInstance=f,this._attachDialogContent(t,r,f,n),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){A(this.openDialogs,t=>t.close())}getDialogById(t){return this.openDialogs.find(n=>n.id===t)}ngOnDestroy(){A(this._openDialogsAtThisLevel,t=>{!1===t.config.closeOnDestroy&&this._removeOpenDialog(t,!1)}),A(this._openDialogsAtThisLevel,t=>t.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(t){const n=new g.X_({positionStrategy:t.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:t.scrollStrategy||this._scrollStrategy(),panelClass:t.panelClass,hasBackdrop:t.hasBackdrop,direction:t.direction,minWidth:t.minWidth,minHeight:t.minHeight,maxWidth:t.maxWidth,maxHeight:t.maxHeight,width:t.width,height:t.height,disposeOnNavigation:t.closeOnNavigation});return t.backdropClass&&(n.backdropClass=t.backdropClass),n}_attachContainer(t,n,o){const a=o.injector??o.viewContainerRef?.injector,c=[{provide:D,useValue:o},{provide:E,useValue:n},{provide:g.Iu,useValue:t}];let r;o.container?"function"==typeof o.container?r=o.container:(r=o.container.type,c.push(...o.container.providers(o))):r=Ct;const f=new m.C5(r,o.viewContainerRef,e.zs3.create({parent:a||this._injector,providers:c}),o.componentFactoryResolver);return t.attach(f).instance}_attachDialogContent(t,n,o,a){const c=this._createInjector(a,n,o);if(t instanceof e.Rgc){let r={$implicit:a.data,dialogRef:n};a.templateContext&&(r={...r,..."function"==typeof a.templateContext?a.templateContext():a.templateContext}),o.attachTemplatePortal(new m.UE(t,null,r,c))}else{const r=o.attachComponentPortal(new m.C5(t,a.viewContainerRef,c,a.componentFactoryResolver));n.componentInstance=r.instance}}_createInjector(t,n,o){const a=t&&t.viewContainerRef&&t.viewContainerRef.injector,c=[{provide:yt,useValue:t.data},{provide:E,useValue:n}];return t.providers&&("function"==typeof t.providers?c.push(...t.providers(n,t,o)):c.push(...t.providers)),t.direction&&(!a||!a.get(B.Is,null,e.XFs.Optional))&&c.push({provide:B.Is,useValue:{value:t.direction,change:(0,_t.of)()}}),e.zs3.create({parent:a||this._injector,providers:c})}_removeOpenDialog(t,n){const o=this.openDialogs.indexOf(t);o>-1&&(this.openDialogs.splice(o,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,c)=>{a?c.setAttribute("aria-hidden",a):c.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),n&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const t=this._overlayContainer.getContainerElement();if(t.parentElement){const n=t.parentElement.children;for(let o=n.length-1;o>-1;o--){const a=n[o];a!==t&&"SCRIPT"!==a.nodeName&&"STYLE"!==a.nodeName&&!a.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const t=this._parentDialog;return t?t._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(g.aV),e.LFG(e.zs3),e.LFG(xt,8),e.LFG(i,12),e.LFG(g.Xj),e.LFG(F))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();function A(i,s){let t=i.length;for(;t--;)s(i[t])}let At=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[Et,kt],imports:[g.U8,m.eL,C.rt,m.eL]}),i})();var It=l(5599);let St=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[d.YP,d.ez],imports:[u.ez,mt,S.ot,y.XD,At,b.QW,O.Ps,It.CreateNoteModule,_.Bz,dt,w.EV]}),i})()}}]);