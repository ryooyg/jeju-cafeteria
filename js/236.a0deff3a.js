"use strict";(self["webpackChunkjeju_cafeteria"]=self["webpackChunkjeju_cafeteria"]||[]).push([[236],{236:function(e,t,s){s.r(t),s.d(t,{default:function(){return v}});var r=s(6252),o=s(3577),a=s(9963);const i={"table-responsive":""},l={class:"table table-sm table-hover"},c=(0,r._)("thead",{class:"thead-dark"},[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"성명"),(0,r._)("th",{scope:"col"},"메일"),(0,r._)("th",{scope:"col"},"관리자권한"),(0,r._)("th",{scope:"col"})])],-1),u={scope:"row"},n={scope:"row"},h={scope:"row"},d={scope:"row"},p=["onUpdate:modelValue","onChange"],_={scope:"row"},f={class:"footer"},m={class:"d-flex justify-content-center"};function w(e,t,s,w,k,g){const y=(0,r.up)("b-button");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",i,[(0,r._)("table",l,[c,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(this.users.filter((e=>!!e.uid)),((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:e.uid},[(0,r._)("td",u,(0,o.zw)(t+1),1),(0,r._)("td",n,(0,o.zw)(e.username),1),(0,r._)("td",h,(0,o.zw)(e.email),1),(0,r._)("td",d,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":t=>e.isChecked=t,onChange:t=>g.onChange(e)},null,40,p),[[a.e8,e.isChecked]])]),(0,r._)("td",_,[(0,r.Wm)(y,{pill:"",variant:"danger",size:"sm",onClick:t=>g.myDeleteUser(e)},{default:(0,r.w5)((()=>[(0,r.Uk)("삭제")])),_:2},1032,["onClick"])])])))),128))])])]),(0,r._)("div",f,[(0,r._)("div",m,[(0,r.Wm)(y,{class:"btn",variant:"primary",to:"/home",size:"lg"},{default:(0,r.w5)((()=>[(0,r.Uk)("홈")])),_:1})])])],64)}s(560);var k=s(2262);const g=(0,k.iH)([]);var y={name:"UserInfo",data(){return{users:g}},mounted(){this.$store.dispatch("fetchAlluserList")},computed:{getAlluserList(){return this.$store.state.auth.userList}},watch:{getAlluserList(e){console.log(e),this.users=e,this.users=[],e.forEach((e=>{let t={uid:e.uid,email:e.email,username:e.username,authority:e.authority,creat_at:e.create_at,isChecked:1==e.authority,isDeleted:!1};this.users.push(t)}))}},methods:{checkUserInfo(){this.users.forEach((e=>{console.log(e)}))},onChange(e){e.authority=e.isChecked,this.$store.dispatch("userAuthrity",e)},myDeleteUser(e){this.$store.dispatch("fireBaseDeleteUser",e)}}},b=s(3744);const C=(0,b.Z)(y,[["render",w]]);var v=C}}]);
//# sourceMappingURL=236.a0deff3a.js.map