"use strict";(self.webpackChunksite_amg=self.webpackChunksite_amg||[]).push([[958],{4958:(Z,r,s)=>{s.r(r),s.d(r,{ContactModule:()=>x});var c=s(6895),t=s(8256),n=s(433),m=s(7533),d=s(8427),l=s(9628);function u(e,i){1&e&&(t.TgZ(0,"span",9),t._uU(1,"*E-mail inv\xe1lido"),t.qZA())}function p(e,i){1&e&&(t.TgZ(0,"span",9),t._uU(1,"*N\xfamero inv\xe1lido"),t.qZA())}let g=(()=>{class e{constructor(){this.contactForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),phoneNumber:new n.NI("",n.kI.required),message:new n.NI("")}),this.submitted=!1,this.showMessage=!1,this.loadingSubmit=!1}ngOnInit(){}get email(){return this.contactForm.get("email")}get phoneNumber(){return this.contactForm.get("phoneNumber")}get message(){return this.contactForm.get("message")}sendForm(o){this.submitted=!0,!o.invalid&&(this.loadingSubmit=!0,setTimeout(()=>{this.loadingSubmit=!1,this.showMessage=!0},500),this.submitted=!1)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-form"]],decls:14,vars:10,consts:[[1,"w-100",3,"formGroup"],["type","email","placeholder","*email@seudominio.com.br","formControlName","email",1,"rounded","w-100"],[1,"validation--box","d-flex","align-items-center"],["class","text-danger",4,"ngIf"],["type","tel","placeholder","*(00) 00000-0000","mask","(00) 00000-0000","formControlName","phoneNumber",1,"rounded","w-100"],["name","","id","","cols","20","rows","10","maxlength","300","placeholder","Descreva aqui sua mensagem...","formControlName","message",1,"rounded","w-100"],[1,"d-flex","justify-content-end","pt-3","btn--submit"],[3,"arrow","label","loading","click"],[3,"showMessage","text","title","type","modalClosed"],[1,"text-danger"]],template:function(o,a){1&o&&(t.TgZ(0,"form",0)(1,"div"),t._UZ(2,"input",1),t.TgZ(3,"div",2),t.YNc(4,u,2,0,"span",3),t.qZA()(),t.TgZ(5,"div"),t._UZ(6,"input",4),t.TgZ(7,"div",2),t.YNc(8,p,2,0,"span",3),t.qZA()(),t.TgZ(9,"div"),t._UZ(10,"textarea",5),t.qZA(),t.TgZ(11,"div",6)(12,"app-default-button",7),t.NdJ("click",function(){return a.sendForm(a.contactForm)}),t.qZA()()(),t.TgZ(13,"app-message-status",8),t.NdJ("modalClosed",function(){return a.showMessage=!1}),t.qZA()),2&o&&(t.Q6J("formGroup",a.contactForm),t.xp6(4),t.Q6J("ngIf",a.email.invalid&&a.submitted),t.xp6(4),t.Q6J("ngIf",a.phoneNumber.invalid&&a.submitted),t.xp6(4),t.Q6J("arrow",!0)("label","Entrar em contato")("loading",a.loadingSubmit),t.xp6(1),t.Q6J("showMessage",a.showMessage)("text","Mensagem enviada com sucesso!")("title","Enviado")("type","success"))},dependencies:[c.O5,n._Y,n.Fj,n.JJ,n.JL,n.nD,n.sg,n.u,m.hx,d.S,l.i],styles:["input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid var(--green);resize:none}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{outline:2px solid var(--green)}input[_ngcontent-%COMP%]{height:55px;background:url(two-envelops.c08590283651b271.svg) no-repeat scroll 7px 7px;background-position:1.5% 50%;padding-left:30px}textarea[_ngcontent-%COMP%]{height:110px;background:url(two-envelops.c08590283651b271.svg) no-repeat scroll 7px 7px;background-position:1.5% 20%;padding:15px 0 0 30px}.validation--box[_ngcontent-%COMP%]{height:30px}@media (max-width: 1024px){.btn--submit[_ngcontent-%COMP%]{justify-content:center!important}}"]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-page"]],decls:13,vars:0,consts:[[1,"pt-3"],["data-aos","fade-up",1,"text__bold","default-container"],[1,"default-container","mx-auto","py-5","d-flex","content"],[1,"w-50","content--form","py-3"],["data-aos","fade-up",1,"text__green"],["data-aos","fade-up"],[1,"d-flex","justify-content-end","w-50","content--image"],["src","../../../../../assets/backgrounds/contact-background.png","data-aos","fade-up","alt",""],[1,"banner","py-4"],["data-aos","fade-up",1,"text-center","text-white"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"in\xedcio / sobre n\xf3s"),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"h3",4),t._uU(6,"Contato"),t.qZA(),t._UZ(7,"app-contact-form",5),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"img",7),t.qZA()(),t.TgZ(10,"div",8)(11,"p",9),t._uU(12,"Seus projetos com produtividade, agilidade e redu\xe7\xe3o de custos."),t.qZA()()())},dependencies:[g],styles:[".banner[_ngcontent-%COMP%]{background-color:var(--green)}.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.25rem;max-width:50%;margin:0 auto}@media (max-width: 1024px){.content[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.content--form[_ngcontent-%COMP%]{width:100%!important;max-width:320px}.content--image[_ngcontent-%COMP%], .content--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}}"]}),e})();var C=s(4736),h=s(4466);const v=[{path:"",component:f}];let x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,C.Bz.forChild(v),h.m]}),e})()}}]);