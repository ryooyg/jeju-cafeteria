"use strict";(self["webpackChunkjeju_cafeteria"]=self["webpackChunkjeju_cafeteria"]||[]).push([[962],{6962:function(s,e,a){a.r(e),a.d(e,{default:function(){return V}});var l=a(6252),t=a(9963);const i={class:"container"},o={class:"row align-items-center min-vh-100"},n={class:"col-12 col-sm-8 col-md-6 col-lg-4 offset-0 offset-sm-2 offset-md-3 offset-lg-4"},r=(0,l._)("div",{class:"mb-3 text-center"},[(0,l._)("h2",null,"제주지방기상청")],-1),c=(0,l._)("div",{class:"mb-3 text-center"},[(0,l._)("h6",null,"삼다정 예약시스템")],-1),d=(0,l._)("hr",null,null,-1),m={class:"mb-3"},u=(0,l._)("label",{class:"form-label",for:"email"},"이메일",-1),p={class:"mb-4"},f=(0,l._)("label",{class:"form-label",for:"password"},"암호",-1),h={class:"input-group mb-3"},w=["type"],_={class:"input-group-text"},b={class:"d-flex justify-content-center align-items-center"},g=(0,l._)("button",{class:"btn btn-primary"},"로그인",-1),v={class:"ms-3 text-end"};function y(s,e,a,y,k,x){const P=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",o,[(0,l._)("div",n,[(0,l._)("form",{onSubmit:e[3]||(e[3]=(...s)=>x.loginWithEmailAndPassword&&x.loginWithEmailAndPassword(...s))},[r,c,d,(0,l._)("div",m,[u,(0,l.wy)((0,l._)("input",{class:"form-control",type:"email",name:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=s=>this.email=s),placeholder:"ryooyg12345@gmail.com",required:""},null,512),[[t.nr,this.email]])]),(0,l._)("div",p,[f,(0,l._)("div",h,[(0,l.wy)((0,l._)("input",{type:this.isPasswordVisible?"text":"password",class:"form-control",name:"password",placeholder:"암호","onUpdate:modelValue":e[1]||(e[1]=s=>this.password=s),required:""},null,8,w),[[t.YZ,this.password]]),(0,l._)("div",_,[(0,l.wy)((0,l._)("input",{class:"form-check-input mt-0 me-2",type:"checkbox","aria-label":"Checkbox for following text input","onUpdate:modelValue":e[2]||(e[2]=s=>this.isPasswordVisible=s)},null,512),[[t.e8,this.isPasswordVisible]]),(0,l.Uk)("Show ")])])]),(0,l._)("div",b,[g,(0,l._)("span",v,[(0,l.Uk)("등록을 안 하셨다면? "),(0,l.Wm)(P,{to:"/sign-up"},{default:(0,l.w5)((()=>[(0,l.Uk)("등록")])),_:1})])])],32)])])])}var k={name:"SignInView",data(){return{email:"",password:"",username:"",isPasswordVisible:!1}},methods:{async loginWithEmailAndPassword(s){s.preventDefault();const e={email:"ryooyg@gmail.com",password:"123456"};try{await this.$store.dispatch("signInWithEmailAndPassword",e)}catch(a){this.message=a.message}}}},x=a(3744);const P=(0,x.Z)(k,[["render",y]]);var V=P}}]);
//# sourceMappingURL=962.42d5ae3a.js.map