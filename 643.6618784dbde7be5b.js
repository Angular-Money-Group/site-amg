"use strict";(self.webpackChunksite_amg=self.webpackChunksite_amg||[]).push([[643],{3643:(J,p,a)=>{a.r(p),a.d(p,{ContactModule:()=>k});var d=a(6895),e=a(8256),v=a(419),g=a(1481),f=a(7599),h=a(8746),r=a(433),C=a(2805),x=a(7533),Z=a(8427),b=a(9628);function M(n,s){1&n&&(e.TgZ(0,"span",9),e._uU(1,"*Por favor, informe seu email"),e.qZA())}function T(n,s){1&n&&(e.TgZ(0,"span",9),e._uU(1,"*E-mail inv\xe1lido"),e.qZA())}function y(n,s){1&n&&(e.TgZ(0,"span",9),e._uU(1,"*Por favor, informe seu n\xfamero"),e.qZA())}function _(n,s){1&n&&(e.TgZ(0,"span",9),e._uU(1,"*N\xfamero inv\xe1lido"),e.qZA())}function P(n,s){1&n&&(e.TgZ(0,"span",9),e._uU(1,"*Por favor, digite uma mensagem"),e.qZA())}let O=(()=>{class n{constructor(o,t){this.fb=o,this.contactService=t,this.openMessage=new e.vpe,this.modalMessage={text:"Mensagem enviada com sucesso!",title:"Enviado",type:"success"},this.submitted=!1,this.loadingSubmit=!1}ngOnInit(){this.form=this.fb.group({email:["",[r.kI.required,r.kI.email]],phone:["",[r.kI.required,r.kI.minLength(11)]],message:["",[r.kI.required]]})}sendForm(o){this.submitted=!0,!o.invalid&&(this.loadingSubmit=!0,this.contactService.sendContact(o.value).pipe((0,h.x)(()=>{this.loadingSubmit=!1})).subscribe(t=>{this.modalMessage={text:"Mensagem enviada com sucesso!",title:"Enviado",type:"success"}},t=>{this.modalMessage={text:"Houve um erro ao enviar sua mensagem!",title:"Erro",type:"error"}}),this.openMessage.emit(),this.submitted=!1,this.form.reset())}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(r.qu),e.Y36(C.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-contact-form"]],decls:18,vars:13,consts:[[1,"w-100",3,"formGroup"],["type","email","placeholder","*email@seudominio.com.br","formControlName","email",1,"rounded","w-100"],[1,"validation--box","d-flex","align-items-center"],["class","text-danger",4,"ngIf"],["type","tel","placeholder","*(00) 00000-0000","mask","(00) 00000-0000","maxlength","15","formControlName","phone",1,"rounded","w-100"],["name","","id","","cols","20","rows","10","maxlength","300","placeholder","*Descreva aqui sua mensagem...","formControlName","message",1,"rounded","w-100"],[1,"d-flex","justify-content-end","pt-3","btn--submit"],[3,"arrow","label","loading","click"],[3,"openMessage","text","title","type"],[1,"text-danger"]],template:function(o,t){if(1&o&&(e.TgZ(0,"form",0)(1,"div"),e._UZ(2,"input",1),e.TgZ(3,"div",2),e.YNc(4,M,2,0,"span",3),e.YNc(5,T,2,0,"span",3),e.qZA()(),e.TgZ(6,"div"),e._UZ(7,"input",4),e.TgZ(8,"div",2),e.YNc(9,y,2,0,"span",3),e.YNc(10,_,2,0,"span",3),e.qZA()(),e.TgZ(11,"div"),e._UZ(12,"textarea",5),e.TgZ(13,"div",2),e.YNc(14,P,2,0,"span",3),e.qZA()(),e.TgZ(15,"div",6)(16,"app-default-button",7),e.NdJ("click",function(){return t.sendForm(t.form)}),e.qZA()()(),e._UZ(17,"app-message-status",8)),2&o){let i,l,u,m,c;e.Q6J("formGroup",t.form),e.xp6(4),e.Q6J("ngIf",(null==(i=t.form.get("email"))||null==i.errors?null:i.errors.required)&&t.submitted),e.xp6(1),e.Q6J("ngIf",(null==(l=t.form.get("email"))||null==l.errors?null:l.errors.email)&&t.submitted&&((null==(l=t.form.get("email"))?null:l.touched)||(null==(l=t.form.get("email"))?null:l.dirty))),e.xp6(4),e.Q6J("ngIf",(null==(u=t.form.get("phone"))||null==u.errors?null:u.errors.required)&&t.submitted),e.xp6(1),e.Q6J("ngIf",(null==(m=t.form.get("phone"))||null==m.errors?null:m.errors.minlenght)&&t.submitted&&((null==(m=t.form.get("phone"))?null:m.touched)||(null==(m=t.form.get("phone"))?null:m.dirty))),e.xp6(4),e.Q6J("ngIf",(null==(c=t.form.get("message"))||null==c.errors?null:c.errors.required)&&t.submitted),e.xp6(2),e.Q6J("arrow",!0)("label","Entrar em contato")("loading",t.loadingSubmit),e.xp6(1),e.Q6J("openMessage",t.openMessage.asObservable())("text",t.modalMessage.text)("title",t.modalMessage.title)("type",t.modalMessage.type)}},dependencies:[d.O5,r._Y,r.Fj,r.JJ,r.JL,r.nD,r.sg,r.u,x.hx,Z.S,b.i],styles:["input[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{border:1px solid var(--green);resize:none}input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus{outline:2px solid var(--green)}input[_ngcontent-%COMP%]{height:55px;background:url(two-envelops.c08590283651b271.svg) no-repeat scroll 7px 7px;background-position:1.5% 50%;padding-left:30px}textarea[_ngcontent-%COMP%]{height:110px;background:url(two-envelops.c08590283651b271.svg) no-repeat scroll 7px 7px;background-position:1.5% 20%;padding:15px 0 0 30px}.validation--box[_ngcontent-%COMP%]{height:30px}@media (max-width: 1024px){.btn--submit[_ngcontent-%COMP%]{justify-content:center!important}}"]}),n})(),A=(()=>{class n{constructor(o,t,i){this.defaultService=o,this.titleService=t,this.meta=i,this.titleService.setTitle("Entre em contato"),this.meta.addTag({name:"description",content:"Entre em contato conosco para um or\xe7amento para seu projeto."}),this.meta.addTag({name:"keywords",content:""})}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(v.T),e.Y36(g.Dx),e.Y36(g.h_))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-contact-page"]],decls:17,vars:0,consts:[[1,"pag","min-vh-100"],[1,"pt-3"],["data-aos","fade-up",1,"text__bold","default-container"],["routerLink","/",2,"cursor","pointer",3,"click"],[1,"default-container","mx-auto","py-5","d-flex","content"],[1,"w-50","content--form","py-3"],["data-aos","fade-up",1,"text__green"],["data-aos","fade-up"],[1,"d-flex","justify-content-end","w-50","content--image"],["loading","lazy","src","assets/backgrounds/contact-background.png","data-aos","fade-up","alt","fundo-contato"],[1,"banner","py-4"],["data-aos","fade-up",1,"text-center","text-white"],[1,"conteudo","w-100"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p",2)(3,"span",3),e.NdJ("click",function(){return t.defaultService.backToTop()}),e._uU(4,"in\xedcio "),e.qZA(),e._uU(5," / contato"),e.qZA(),e.TgZ(6,"div",4)(7,"div",5)(8,"h3",6),e._uU(9,"Contato"),e.qZA(),e._UZ(10,"app-contact-form",7),e.qZA(),e.TgZ(11,"div",8),e._UZ(12,"img",9),e.qZA()(),e.TgZ(13,"div",10)(14,"p",11),e._uU(15,"Seus projetos com produtividade, agilidade e redu\xe7\xe3o de custos."),e.qZA()(),e._UZ(16,"div",12),e.qZA()())},dependencies:[f.rH,O],styles:[".banner[_ngcontent-%COMP%]{background-color:var(--green)}.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:2.25rem;max-width:50%;margin:0 auto}@media (max-width: 1024px){.content[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.content--form[_ngcontent-%COMP%]{width:100%!important;max-width:320px}.content--image[_ngcontent-%COMP%], .content--image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.banner[_ngcontent-%COMP%]{font-size:1.25rem}}"]}),n})();var F=a(4466);const U=[{path:"",component:A}];let k=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.ez,f.Bz.forChild(U),F.m]}),n})()}}]);