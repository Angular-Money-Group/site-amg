"use strict";(self.webpackChunksite_amg=self.webpackChunksite_amg||[]).push([[592],{2805:(p,l,o)=>{o.d(l,{y:()=>g});var e=o(2340),i=o(8256),r=o(529);let g=(()=>{class n{constructor(c){this.http=c}sendContact(c){return this.http.post(e.N.contact,c)}}return n.\u0275fac=function(c){return new(c||n)(i.LFG(r.eN))},n.\u0275prov=i.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},9628:(p,l,o)=>{o.d(l,{i:()=>f});var e=o(8256),i=o(7599),r=o(6895);function g(s,a){1&s&&e._UZ(0,"img",8)}function n(s,a){1&s&&e._UZ(0,"img",9)}function _(s,a){1&s&&e._UZ(0,"img",10)}const c=function(s){return{"border-left":s}};function u(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",2),e.YNc(2,g,1,0,"img",3),e.YNc(3,n,1,0,"img",4),e.YNc(4,_,1,0,"img",5),e.qZA(),e.TgZ(5,"div")(6,"div",6),e._uU(7),e.qZA(),e.TgZ(8,"div"),e._uU(9),e.qZA()(),e.TgZ(10,"div",7),e.NdJ("click",function(){e.CHM(t);const h=e.oxw();return e.KtG(h.showMessage=!1)}),e._uU(11," Fechar "),e.qZA()()}if(2&s){const t=e.oxw();e.Q6J("ngStyle",e.VKq(6,c,t.formatColorMessage(t.type))),e.xp6(2),e.Q6J("ngIf","success"==t.type),e.xp6(1),e.Q6J("ngIf","error"==t.type),e.xp6(1),e.Q6J("ngIf","alert"==t.type),e.xp6(3),e.hij(" ",t.title," "),e.xp6(2),e.hij(" ",t.text," ")}}let f=(()=>{class s{constructor(t){this.route=t,this.showMessage=!1,this.title="Sucesso",this.text="",this.type="none",this.modalClosed=new e.vpe}ngOnInit(){this.route.events.subscribe(()=>{this.showMessage=!1}),this.openMessage.subscribe(()=>{this.messageStatus()})}formatColorMessage(t){return t?{success:"5px solid #587b52",alert:"5px solid yellow",error:"5px solid red"}[t]:""}messageStatus(){this.showMessage?(this.showMessage=!1,setInterval(()=>{this.showMessage=!0},700)):this.showMessage=!0}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(i.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-message-status"]],inputs:{showMessage:"showMessage",title:"title",text:"text",type:"type",openMessage:"openMessage"},outputs:{modalClosed:"modalClosed"},decls:1,vars:1,consts:[["class","success--box rounded d-flex p-2","data-aos","fade-left",3,"ngStyle",4,"ngIf"],["data-aos","fade-left",1,"success--box","rounded","d-flex","p-2",3,"ngStyle"],[1,"d-flex","justify-content-center","align-items-center","p-2"],["src","assets/svg/check-circle.svg","width","30px","alt","",4,"ngIf"],["src","assets/svg/x-circle.svg","width","30px","alt","",4,"ngIf"],["src","assets/svg/exclamation-circle.svg","width","30px","alt","",4,"ngIf"],[1,"font-weight-bolder","success--box--tittle"],[1,"d-flex","justify-content-center","align-items-center","p-2","success--box--close",3,"click"],["src","assets/svg/check-circle.svg","width","30px","alt",""],["src","assets/svg/x-circle.svg","width","30px","alt",""],["src","assets/svg/exclamation-circle.svg","width","30px","alt",""]],template:function(t,d){1&t&&e.YNc(0,u,12,8,"div",0),2&t&&e.Q6J("ngIf",d.showMessage)},dependencies:[r.O5,r.PC],styles:[".success--box[_ngcontent-%COMP%]{background-color:var(--white);z-index:10;position:fixed;right:1.5%;top:5%;box-shadow:0 0 10px 2px #00000036;width:340px;border-left:5px solid var(--green)}.success--box--close[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.149);cursor:pointer}.success--box--tittle[_ngcontent-%COMP%]{font-weight:bolder}"]}),s})()}}]);