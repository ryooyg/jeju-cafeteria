"use strict";(self["webpackChunkjeju_cafeteria"]=self["webpackChunkjeju_cafeteria"]||[]).push([[118],{118:function(s,e,a){a.r(e),a.d(e,{default:function(){return P}});a(560);var t=a(6252),i=a(9963);const l={class:"container"},n={class:"row align-items-center min-vh-100"},r={class:"col-12 col-sm-8 col-md-6 col-lg-4 offset-0 offset-sm-2 offset-md-3 offset-lg-4"},o=(0,t._)("div",{class:"mb-3 text-center"},[(0,t._)("h1",null,"제주지방기상청")],-1),c=(0,t._)("div",{class:"mb-3 text-center"},[(0,t._)("h4",null,"삼다정 예약시스템")],-1),m=(0,t._)("hr",null,null,-1),d={class:"mb-3"},u=(0,t._)("label",{class:"form-label",for:"email"},"이메일",-1),p={class:"mb-4"},h=(0,t._)("label",{class:"form-label",for:"password"},"패스워드",-1),f={class:"input-group mb-3"},b=["type"],w={class:"input-group-text"},_={class:"mb-5"},g=(0,t._)("label",{class:"form-label",for:"name"},"성명",-1),v={class:"d-flex justify-content-center align-items-center"},y=(0,t._)("button",{type:"submit",class:"btn btn-primary"},"등록",-1);function U(s,e,a,U,k,x){return(0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",n,[(0,t._)("div",r,[(0,t._)("form",{onSubmit:e[5]||(e[5]=(...s)=>this.signUpWithEmailAndPassword&&this.signUpWithEmailAndPassword(...s))},[o,c,m,(0,t._)("div",d,[u,(0,t.wy)((0,t._)("input",{class:"form-control",type:"email",name:"email",id:"email",placeholder:"e-메일주소(꼭 확인 가능한 메일)","onUpdate:modelValue":e[0]||(e[0]=s=>this.email=s),required:""},null,512),[[i.nr,this.email]])]),(0,t._)("div",p,[h,(0,t._)("div",f,[(0,t.wy)((0,t._)("input",{type:this.isPasswordVisible?"text":"password",class:"form-control",name:"password",placeholder:"Your secure password","onUpdate:modelValue":e[1]||(e[1]=s=>this.password=s),required:""},null,8,b),[[i.YZ,this.password]]),(0,t._)("div",w,[(0,t.wy)((0,t._)("input",{class:"form-check-input mt-0 me-2",type:"checkbox","aria-label":"Checkbox for following text input","onUpdate:modelValue":e[2]||(e[2]=s=>this.isPasswordVisible=s)},null,512),[[i.e8,this.isPasswordVisible]]),(0,t.Uk)("Show ")])])]),(0,t._)("div",_,[g,(0,t.wy)((0,t._)("input",{class:"form-control",type:"text",name:"username",id:"username","onUpdate:modelValue":e[3]||(e[3]=s=>this.username=s),placeholder:"유아무개",required:""},null,512),[[i.nr,this.username]])]),(0,t._)("div",v,[y,(0,t._)("button",{class:"ms-3 btn btn-outline-danger",onClick:e[4]||(e[4]=s=>this.$router.push("/sign-in"))}," 취소 ")])],32)])])])}var k={name:"SignUpView",data(){return{email:"",password:"",username:"",isPasswordVisible:!1}},methods:{async signUpWithEmailAndPassword(s){s.preventDefault();const e={email:this.email,password:this.password,username:this.username};try{await this.$store.dispatch("signUpWithEmailAndPassword",e)}catch(a){this.message=a.message}}}},x=a(3744);const V=(0,x.Z)(k,[["render",U]]);var P=V}}]);
//# sourceMappingURL=118.1d9b00c4.js.map