"use strict";(self.webpackChunkPixyDeltaApp=self.webpackChunkPixyDeltaApp||[]).push([[834],{4834:(b,c,o)=>{o.r(c),o.d(c,{ConnectionModule:()=>M});var u=o(6895),r=o(8996),e=o(4650),d=o(5776),l=o(4087);function h(t,s){if(1&t&&(e.TgZ(0,"li")(1,"a",2),e._UZ(2,"i"),e._uU(3),e.qZA()()),2&t){const n=s.$implicit;e.xp6(1),e.s9C("routerLink",n.route),e.xp6(1),e.Tol(n.icon),e.xp6(1),e.hij(" ",n.title,"")}}let p=(()=>{class t{constructor(n,i){this.router=n,this.sideMenubarListService=i,this.getCurrentRoute()}ngOnInit(){this.getSideIconAndMenubarList()}ngOnDestroy(){this.sideMenubarListsSub&&this.sideMenubarListsSub.unsubscribe(),this.currentRouteSub&&this.currentRouteSub.unsubscribe()}getSideIconAndMenubarList(){this.sideMenubarListsSub=this.sideMenubarListService.getSideMenubarList().subscribe({next:n=>{this.sideMenubarLists=n,this.getCurrentRoute()},error:n=>{console.log(n)}})}getCurrentRoute(){if(this.currentRouteSub=this.router.events.subscribe(i=>{i instanceof r.m2&&(this.currentRoute=i.url)}),this.currentRoute){var n="/"+this.currentRoute.split("/")[1]+"/"+this.currentRoute.split("/")[2];this.currentRouteMenus=this.sideMenubarLists.filter(i=>i.route==n).map(i=>i.children)[0],this.sideMenubarListService.setOption(this.currentRouteMenus)}}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.F0),e.Y36(l.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-side-menubar"]],decls:2,vars:1,consts:[["id","side-menubar",1,"list-group","list-group-flush","p-2"],[4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item","list-group-item-success","border","mb-2",3,"routerLink"]],template:function(n,i){1&n&&(e.TgZ(0,"ul",0),e.YNc(1,h,4,5,"li",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("ngForOf",i.currentRouteMenus))},dependencies:[u.sg,r.yS,r.Od],styles:['li[_ngcontent-%COMP%]{border-radius:5px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:"Exo 2",sans-serif;box-shadow:#00000029 0 3px 6px,#0000003b 0 3px 6px}']}),t})();const a=function(t){return{hidden:t}},g=[{path:"",component:(()=>{class t{constructor(n,i){this.sideMenubarToggleService=n,this.sideMenubarListService=i}ngOnInit(){}ngAfterViewInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.I),e.Y36(l.c))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-connection"]],decls:5,vars:6,consts:[[1,"auth-child-wrapper"],[1,"auth-child-side-menubar",3,"ngClass"],[1,"auth-child-content",3,"ngClass"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-side-menubar"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("ngClass",e.VKq(2,a,i.sideMenubarToggleService.hideSideNav)),e.xp6(2),e.Q6J("ngClass",e.VKq(4,a,i.sideMenubarToggleService.hideSideNav)))},dependencies:[u.mk,r.lC,p]}),t})(),children:[{path:"",redirectTo:"storage",pathMatch:"full"},{path:"storage",loadChildren:()=>o.e(615).then(o.bind(o,5615)).then(t=>t.StorageModule)},{path:"sql",loadChildren:()=>o.e(444).then(o.bind(o,4444)).then(t=>t.SqlModule)}]}];let m=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild(g),r.Bz]}),t})();var C=o(7673);let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,m,C.p]}),t})()}}]);