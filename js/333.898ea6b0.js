"use strict";(self["webpackChunkjeju_cafeteria"]=self["webpackChunkjeju_cafeteria"]||[]).push([[333],{4657:function(t,e,a){a.d(e,{Z:function(){return u}});var s=a(6252),i=a(3577);const d={class:"fheader"};function l(t,e,a,l,n,r){const o=(0,s.up)("b-button"),u=(0,s.up)("b-nav"),h=(0,s.up)("b-card-header"),c=(0,s.up)("b-card-text"),m=(0,s.up)("b-card-body"),y=(0,s.up)("b-card");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s.Wm)(y,{title:"Card Title","no-body":""},{default:(0,s.w5)((()=>[(0,s.Wm)(h,{"header-tag":"nav"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,{align:"center"},{default:(0,s.w5)((()=>[!0!==this.getAuth||a.homeDisplay?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(o,{key:0,pill:"",size:"sm",variant:"success",to:"/ticketcount"},{default:(0,s.w5)((()=>[(0,s.Uk)("당일식수")])),_:1})),!0!==this.getAuth||a.homeDisplay?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(o,{key:1,pill:"",size:"sm",variant:"success",to:"/userinfo"},{default:(0,s.w5)((()=>[(0,s.Uk)("사용자설정")])),_:1})),!0!==this.getAuth||a.homeDisplay?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(o,{key:2,pill:"",size:"sm",variant:"success",to:"/holiday"},{default:(0,s.w5)((()=>[(0,s.Uk)("휴일설정")])),_:1})),!0!==this.getAuth||a.homeDisplay?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(o,{key:3,pill:"",size:"sm",variant:"success",to:"/menu"},{default:(0,s.w5)((()=>[(0,s.Uk)("메뉴입력")])),_:1})),a.homeDisplay?((0,s.wg)(),(0,s.j4)(o,{key:4,pill:"",size:"sm",variant:"success",to:"/home"},{default:(0,s.w5)((()=>[(0,s.Uk)("홈")])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(o,{size:"sm",variant:"danger",onClick:this.signOut},{default:(0,s.w5)((()=>[(0,s.Uk)("로그아웃")])),_:1},8,["onClick"])])),_:1})])),_:1}),!0===this.getAuth?((0,s.wg)(),(0,s.j4)(m,{key:0},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)(" 모든 권한 관리자인 [ "+(0,i.zw)(this.getUserName)+" ]님 환영합니다.",1)])),_:1})])),_:1})):(0,s.kq)("",!0),!1===this.getAuth?((0,s.wg)(),(0,s.j4)(m,{key:1},{default:(0,s.w5)((()=>[(0,s.Wm)(c,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(this.getUserName)+"님 환영합니다. ",1)])),_:1})])),_:1})):(0,s.kq)("",!0)])),_:1})])}var n={computed:{getAuth(){return this.$store.state.auth.user.authority},getUserName(){return this.$store.state.auth.user.username},getEmail(){return this.$store.state.auth.user.email}},methods:{signOut(){this.$store.dispatch("signOut")}},props:{homeDisplay:Boolean}},r=a(3744);const o=(0,r.Z)(n,[["render",l],["__scopeId","data-v-0637d8df"]]);var u=o},2333:function(t,e,a){a.r(e),a.d(e,{default:function(){return O}});var s=a(6252),i=a(9963),d=a(3577);const l={class:"tablepick"},n={class:"d-flex justify-content-end"},r=(0,s._)("a",null,"식사선택 : ",-1),o=["value"],u={class:"mycal"},h={class:"justify-content-center"},c={key:0},m={key:1},y={key:0,class:"mb-3 border bg-warning border-warning rounded p-2",style:{"--bs-bg-opacity":"0.2"}},p=(0,s._)("div",{class:"footer"},[(0,s._)("div",{class:"d-flex justify-content-center"},[(0,s._)("button",{type:"submit",class:"btn btn-primary",size:"lg"},"확 정")])],-1);function g(t,e,a,g,f,w){const b=(0,s.up)("Header"),k=(0,s.up)("VDatePicker");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(b,{homeDisplay:f.homeDisplay},null,8,["homeDisplay"]),(0,s._)("div",l,[(0,s._)("form",{onSubmit:e[1]||(e[1]=(0,i.iM)(((...t)=>w.handleSubmit&&w.handleSubmit(...t)),["prevent"]))},[(0,s._)("div",n,[r,(0,s.wy)((0,s._)("select",{"onUpdate:modelValue":e[0]||(e[0]=t=>f.op_selected=t)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.options,(t=>((0,s.wg)(),(0,s.iD)("option",{key:t.value,value:t.value},(0,d.zw)(t.text),9,o)))),128))],512),[[i.bM,f.op_selected]])]),(0,s._)("div",u,[(0,s._)("div",h,["one"===f.op_selected?((0,s.wg)(),(0,s.iD)("span",c,[(0,s.Wm)(k,{attributes:w.attributes,onDayclick:w.onDayClick,mode:"multiple","disabled-dates":f.disabledDates,color:f.selectedColor,"min-date":new Date,"disabled-attribute":f.disabledAttribute,class:"my-calendar"},null,8,["attributes","onDayclick","disabled-dates","color","min-date","disabled-attribute"])])):(0,s.kq)("",!0),"range"===f.op_selected?((0,s.wg)(),(0,s.iD)("span",m,[(0,s.Wm)(k,{attributes:w.attributes,onDayclick:w.onRangeClick,range:"","disabled-dates":f.disabledDates,color:f.selectedColor,"min-date":new Date,"disabled-attribute":f.disabledAttribute,class:"my-calendar"},null,8,["attributes","onDayclick","disabled-dates","color","min-date","disabled-attribute"])])):(0,s.kq)("",!0)])]),this.message?((0,s.wg)(),(0,s.iD)("div",y,(0,d.zw)(this.message),1)):(0,s.kq)("",!0),p],32)])],64)}a(560);var f=a(2262),w=a(4657);const b=(0,f.iH)("one"),k=(0,f.iH)("0");var D=(0,f.iH)(),v=(0,f.iH)(),_=(0,f.iH)([]),H=(0,f.iH)([]);const S=(0,f.iH)("white"),j=(0,f.iH)([{text:"하루씩",value:"one"},{text:"범위지정",value:"range"}]),z=(0,f.iH)([{repeat:{weekdays:[1,7]}}]),T=(0,f.iH)([{contentStyle:{color:"red"},contentHoverStyle:{cursor:"default",backgroundColor:"transparent"}}]),$=(0,f.iH)(!1),C=(0,f.iH)([]);var x={name:"HomeView",components:{Header:w.Z},data(){return{days:_,holiday:H,twin_days:[],op_selected:b,options:j,date:new Date,disabledDates:z,selectedColor:S,disabledAttribute:T,newTicket:{id:"",date:"",uid:"",created_at:0},message:"",timer:1,interval:"",homeDisplay:$,meales:C}},computed:{getTicketList(){return this.$store.state.tickets.ticketList},dates(){return this.days.map((t=>t.date))},getHolidayList(){return this.$store.state.holiday.holidayList},holidates(){return this.holiday.map((t=>t.date))},fetchMealdayList(){return this.$store.state.meal.mealList},attributes(){return[{contentStyle:{fontWeight:"700",fontSize:".9rem"},dates:new Date},...this.dates.map((t=>({highlight:"blue",dates:t}))),...this.holidates.map((t=>({highlight:"red",dates:t}))),...this.meales]}},watch:{getTicketList(t){this.days=t;let e=[];t.forEach((t=>{e.push(t)})),this.twin_days=e},getHolidayList(t){t.length>0&&(this.holiday=t)},fetchMealdayList(t){this.meales=[],t.length>0&&t.forEach((t=>{this.meales.push({key:t.id,dates:t.date,dot:"yellow",popover:{label:t.meal}})}))}},mounted(){this.$store.dispatch("fetchTicketList"),this.$store.dispatch("fetchHolidayList"),this.$store.dispatch("fetchMealdayList")},methods:{onDayClick(t){const e=new Date,a=6e4*(new Date).getTimezoneOffset(),s=new Date(t.date-a);let i=s.toISOString().split("T")[0],d=e.toISOString().split("T")[0];if(i>=d){const e=this.holiday.findIndex((e=>e.id===t.id));if(e<0){const e=this.days.findIndex((e=>e.id===t.id));if(e>=0)this.days.splice(e,1);else{let e=this.dateDisabled(s);e||this.days.push({id:t.id,date:s.toISOString(),uid:this.$store.state.auth.user.uid,created_at:Date.now()})}}}},onRangeClick(t){0==k.value?(k.value=1,D=t.date):(v=t.date,this.getDateRange(D,v))},getDateRange(t,e){let a=new Date(t),s=new Date(e);if(a>s){var i=a;a=s,s=i}while(a<=s){const t=6e4*(new Date).getTimezoneOffset(),e=new Date(a-t);var d={id:e.toISOString().split("T")[0],date:e.toISOString()};const s=this.holiday.findIndex((t=>t.id===d.id));if(s<0){const t=this.days.findIndex((t=>t.id===d.id));if(-1===t){const t=new Date(d.date);let e=this.dateDisabled(t);e||this.days.push({id:d.id,date:d.date,uid:this.$store.state.auth.user.uid,created_at:Date.now()})}}a.setDate(a.getDate()+1)}},async handleSubmit(){let t=[];this.days.forEach((e=>{const a=new Date(e.date);let s=this.dateDisabled(a);s||t.push(e)})),t.forEach((t=>{-1===this.twin_days.indexOf(t)&&this.$store.dispatch("addNewTicket",t)})),this.days=t,this.twin_days.forEach((t=>{-1===this.days.indexOf(t)&&this.$store.dispatch("deleteTicket",t.id)})),this.message="식수 변경이 완료 되었습니다",this.startTimer()},dateDisabled(t){const e=t.getDay();return 0===e||6===e},startTimer(){this.interval=setInterval((()=>{0===this.timer?(clearInterval(this.interval),this.message=""):this.timer--}),200)}}},I=a(3744);const L=(0,I.Z)(x,[["render",g]]);var O=L}}]);
//# sourceMappingURL=333.898ea6b0.js.map