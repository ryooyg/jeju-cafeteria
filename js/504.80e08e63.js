"use strict";(self["webpackChunkjeju_cafeteria"]=self["webpackChunkjeju_cafeteria"]||[]).push([[504],{8504:function(e,t,s){s.r(t),s.d(t,{default:function(){return A}});var i=s(6252),a=s(3577),n=s(9963);const l=e=>((0,i.dD)("data-v-0f2c773c"),e=e(),(0,i.Cn)(),e),c={key:1,class:"d-flex justify-content-center"},d={key:2,class:"user_exit"},r={key:3,class:"user_exit"},o=l((()=>(0,i._)("h2",null,"o",-1))),u=l((()=>(0,i._)("h4",null,"o",-1))),h=[o,u],k={class:"checktickets"},m=l((()=>(0,i._)("h3",null,"[ 기간동안 식수 확인 ]",-1))),f={class:"flex justify-center items-center"},p={class:"input-group mb-3"},_=["value"],w=["value"],b=l((()=>(0,i._)("button",{type:"submit",class:"btn btn-primary",id:"button-setting"},"설정",-1))),g={key:0,class:"mb-2 border bg-warning border-warning rounded p-2",style:{"--bs-bg-opacity":"0.2"}},v={class:"eat"},y={style:{"margin-left":"40%"}},D={key:1,"table-responsive":"",class:"userman"},x={class:"table table-sm table-hover"},j=l((()=>(0,i._)("thead",{class:"thead-dark"},[(0,i._)("tr",null,[(0,i._)("th",{scope:"col"},"순번"),(0,i._)("th",{scope:"col"},"일자")])],-1))),q={scope:"row"},C={scope:"row"};function H(e,t,s,l,o,u){const H=(0,i.up)("b-col"),z=(0,i.up)("b-button"),U=(0,i.up)("b-row"),W=(0,i.up)("b-container"),M=(0,i.up)("v-date-picker"),Y=(0,i.up)("download-excel");return(0,i.wg)(),(0,i.iD)(i.HY,null,[!1===this.changepd?((0,i.wg)(),(0,i.j4)(W,{key:0,class:"topcontainer"},{default:(0,i.w5)((()=>[(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[(0,i.Wm)(H,{cols:"4"}),(0,i.Wm)(H,{cols:"2"},{default:(0,i.w5)((()=>[!1===this.define?((0,i.wg)(),(0,i.j4)(z,{key:0,class:"btn",variant:"primary",to:"/home",size:"sm"},{default:(0,i.w5)((()=>[(0,i.Uk)("홈")])),_:1})):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(H,{cols:"3"},{default:(0,i.w5)((()=>[!1===this.define?((0,i.wg)(),(0,i.j4)(z,{key:0,class:"btn",variant:"danger",onClick:u.qdefine,size:"sm"},{default:(0,i.w5)((()=>[(0,i.Uk)("회원탈퇴")])),_:1},8,["onClick"])):(0,i.kq)("",!0)])),_:1}),(0,i.Wm)(H,{cols:"2"})])),_:1})])),_:1})):(0,i.kq)("",!0),!0===this.define?((0,i.wg)(),(0,i.iD)("div",c,[!0===this.define?((0,i.wg)(),(0,i.j4)(z,{key:0,class:"btn",variant:"primary",onClick:u.onCancle,size:"lg"},{default:(0,i.w5)((()=>[(0,i.Uk)("아니오")])),_:1},8,["onClick"])):(0,i.kq)("",!0),!0===this.define?((0,i.wg)(),(0,i.j4)(z,{key:1,class:"btn",variant:"danger",onClick:t[0]||(t[0]=e=>u.onDeleteUser(this.user)),size:"lg"},{default:(0,i.w5)((()=>[(0,i.Uk)("탈퇴 하겠습니까")])),_:1})):(0,i.kq)("",!0)])):(0,i.kq)("",!0),!1===this.define&&!1===this.changepd?((0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("h2",null,"사용자명 : "+(0,a.zw)(this.user.username),1),(0,i._)("h4",null,"e-mail : "+(0,a.zw)(this.user.email),1)])):(0,i.kq)("",!0),!0===this.define?((0,i.wg)(),(0,i.iD)("div",r,h)):(0,i.kq)("",!0),(0,i._)("div",k,[m,(0,i._)("form",{onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>u.selectDateSubmit&&u.selectDateSubmit(...e)),["prevent"])),class:"mainlist"},[(0,i.Wm)(M,{modelValue:o.date_range,"onUpdate:modelValue":t[1]||(t[1]=e=>o.date_range=e),modelModifiers:{range:!0,number:!0},masks:o.masks,"max-date":o.maxDate},{default:(0,i.w5)((({inputValue:e,inputEvents:t})=>[(0,i._)("div",f,[(0,i._)("div",p,[(0,i._)("input",(0,i.dG)({type:"text",class:"form-control",value:e.start},(0,i.mx)(t.start,!0),{"aria-describedby":"button-setting1"}),null,16,_),(0,i._)("input",(0,i.dG)({type:"text",class:"form-control",value:e.end},(0,i.mx)(t.end,!0),{"aria-describedby":"button-setting1"}),null,16,w),b])])])),_:1},8,["modelValue","masks","max-date"])],32),0!=this.totalticket?((0,i.wg)(),(0,i.iD)("div",g,[(0,i.Wm)(W,null,{default:(0,i.w5)((()=>[(0,i._)("span",v," 총 : "+(0,a.zw)(this.totalticket)+" 일",1),(0,i._)("span",y,[(0,i.Wm)(Y,{class:"btn btn-primary",data:this.dtickets,fields:o.tickets_fields,worksheet:"식수",name:this.excelfname,size:"lg"},{default:(0,i.w5)((()=>[(0,i.Uk)("내려받기(엑셀)")])),_:1},8,["data","fields","name"])])])),_:1})])):(0,i.kq)("",!0),this.s_display&&0!=this.totalticket?((0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("table",x,[j,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.dtickets,((e,t)=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[(0,i._)("td",q,(0,a.zw)(t+1),1),(0,i._)("td",C,(0,a.zw)(e.id),1)])))),128))])])])):(0,i.kq)("",!0)])],64)}s(560);var z=s(2262),U=s(1120),W=s(2633);const M=(0,z.iH)(!1),Y=(0,z.iH)(!1),L=(0,z.iH)(""),S=(0,z.iH)([]),$=(0,z.iH)([]),V=(0,z.iH)(0),E=new Date,T=new Date,Z=new Date(T.setMonth(T.getMonth()-1)),G=(0,z.iH)({start:Z,end:E}),I=E,B=(0,z.iH)(!1),F=(0,z.iH)("");var K={name:"UserInfo",components:{downloadExcel:W.Z},data(){return{user:"",define:M,changepd:Y,passwordNew:L,date_range:G,masks:{input:"YYYY-MM-DD"},maxDate:I,tickets:S,totalticket:V,s_display:B,excelfname:F,tickets_fields:{"번호":"index","식수일자":"id","확정일자":"created_at"},dtickets:$}},computed:{getTicketList(){return this.$store.state.tickets.ticketList}},mounted(){this.user=this.$store.state.auth.user,this.$store.dispatch("fetchTicketList"),this.totalticket=0,this.dtickets=[]},watch:{getTicketList(e){this.tickets=e,this.totalticket=0,this.dtickets=[]}},methods:{qdefine(){this.define=!this.define},onDeleteUser(e){this.$store.dispatch("fireBaseDeleteUser",e),this.$store.dispatch("signOut")},onCancle(){this.define=!1,U.Z.push("/home")},selectDateSubmit(){const e=new Date,t=e.getFullYear(),s=e.getMonth()+1,i=e.getDate();var a=t+"-";s<10&&(a+="0"),a+=s+"-",i<10&&(a+="0"),a+=i,this.excelfname=this.user.username+"_"+a+"_jejucafeteria.xls";let n=[],l=0;this.tickets.sort(((e,t)=>e.id.localeCompare(t.id))),this.tickets.forEach((e=>{let t=new Date(e.date);if(G.value.start<=t&&t<=G.value.end){l+=1;let t=new Date(e.created_at).toLocaleString();n.push({index:l,id:e.id,created_at:t})}})),this.dtickets=n,this.totalticket=l,this.s_display=!0}}},N=s(3744);const O=(0,N.Z)(K,[["render",H],["__scopeId","data-v-0f2c773c"]]);var A=O}}]);
//# sourceMappingURL=504.80e08e63.js.map