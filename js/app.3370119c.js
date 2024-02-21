(function(){"use strict";var e={4627:function(e,t,r){var o=r(9963),n=r(6089),i=r(6252);function a(e,t,r,o,n,a){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(c)}var c={mounted(){}},s=r(3744);const u=(0,s.Z)(c,[["render",a]]);var d=u,l=r(1120),h=r(789),f=r(5612),m=r(7303);const g=(0,n.WB)(),p=(0,o.ri)(d);p.use(g),p.use(l.Z),p.use(m.ZP,{}),p.use(f.ZP),p.use(h.Z),p.mount("#app")},1120:function(e,t,r){var o=r(2201),n=r(789);const i=[{path:"/",component:()=>r.e(521).then(r.bind(r,4521))},{path:"/sign-in",name:"sign-in",component:()=>r.e(521).then(r.bind(r,4521))},{path:"/sign-up",name:"sign-up",component:()=>Promise.all([r.e(35),r.e(158)]).then(r.bind(r,9158))},{path:"/home",name:"home",component:()=>r.e(548).then(r.bind(r,3548)),meta:{requiresAuth:!0}},{path:"/ticketcount",name:"thicktcount",component:()=>Promise.all([r.e(633),r.e(473)]).then(r.bind(r,473)),meta:{requiresAuth:!0}},{path:"/useradmin",name:"useradmin",component:()=>r.e(955).then(r.bind(r,4955)),meta:{requiresAuth:!0}},{path:"/holiday",name:"holiday",component:()=>r.e(712).then(r.bind(r,3712)),meta:{requiresAuth:!0}},{path:"/menu",name:"menu",component:()=>r.e(690).then(r.bind(r,6690)),meta:{requiresAuth:!0}},{path:"/userinfo",name:"userinfo",component:()=>Promise.all([r.e(633),r.e(867)]).then(r.bind(r,6867)),meta:{requiresAuth:!0}},{path:"/passwd",name:"passwd",component:()=>Promise.all([r.e(35),r.e(875)]).then(r.bind(r,875))},{path:"/dayticket",name:"dayticket",component:()=>r.e(920).then(r.bind(r,8920))}],a=(0,o.p7)({history:(0,o.PO)(),routes:i});a.beforeEach((async(e,t,r)=>{if(e.matched.some((e=>e.meta.requiresAuth))){if(n.Z.getters.isAuthenticated)return void r();r("/sign-in")}else r()})),t.Z=a},789:function(e,t,r){r.d(t,{Z:function(){return m}});var o=r(894),n=(r(560),r(1120)),i=r(3977),a=r(316),c=r(6100);const s={apiKey:"AIzaSyBPoT9Foryncc0bH8u5g9BQfV0gFV1t6TM",authDomain:"jeju-cafeteria.firebaseapp.com",projectId:"jeju-cafeteria",storageBucket:"jeju-cafeteria.appspot.com",messagingSenderId:"770346717100",appId:"1:770346717100:web:709f8bcb0a7139cd383409",measurementId:"G-GB9GGC8CPL"},u=(0,i.ZF)(s);c.getFirestore(u);var d={state:{user:null,userList:null},getters:{isAuthenticated(e){return!!e.user}},mutations:{signUp(){n.Z.push("/sign-in")},signIn(e,t){e.user=t,n.Z.push("/home")},signOut(e){e.user={},n.Z.push("/sign-in")},fetchAlluserList(e,t){e.userList=t}},actions:{async signUpWithEmailAndPassword({commit:e},{email:t,password:r,username:o,telnum:n}){await a.createUserWithEmailAndPassword(a.getAuth(u),t,r).then((t=>{a.sendEmailVerification(t.user).then((()=>e("signUp")));try{var r=(0,c.getFirestore)(u);const e=c.collection(r,"users"),i=(0,c.doc)(e,t.user.uid);(0,c.setDoc)(i,{uid:t.user.uid,email:t.user.email,username:o,authority:!1,telnum:n,create_at:Date.now()})}catch(i){console.log(i)}})).catch((()=>{throw Error("Email is already registered.")}))},async signInWithEmailAndPassword({commit:e},{email:t,password:r}){await a.signInWithEmailAndPassword(a.getAuth(u),t,r).then((t=>{if(!t.user.emailVerified)throw Error("Email isn't verified.");try{var r=(0,c.getFirestore)(u);const o=(0,c.doc)(r,"users",t.user.uid);(0,c.getDoc)(o).then((t=>{t.exists()?e("signIn",t.data()):console.log("No such document")}))}catch(o){console.log(o)}e("signIn",t.user)})).catch((e=>{if("Email isn't verified."===e.message)throw Error("Email isn't verified.");throw Error("Invalid email or password.")}))},async sendResetPassword({commit:e},{email:t}){await a.sendPasswordResetEmail(a.getAuth(u),t).then((()=>{console.log("good sent to"+t)})).catch((e=>{console.log(e)})),e("signIn","")},async signInWithGoogle({commit:e}){await a.signInWithPopup(a.getAuth(u),new a.GoogleAuthProvider).then((t=>{e("signIn",t.user)}))},async signOut({commit:e}){await a.signOut(a.getAuth(u)).then((()=>e("signOut"))).catch((e=>{console.log(e)}))},async fetchAlluserList({commit:e}){let t=[];try{var r=(0,c.getFirestore)(u);const o=(0,c.query)(c.collection(r,"users")),n=await(0,c.getDocs)(o);n.forEach((e=>{t.push(e.data())})),t.length>0&&e("fetchAlluserList",t)}catch(o){console.log(o)}},async fireBaseDeleteUser({dispatch:e},t){a.deleteUser(t).then((()=>{console.log("good delete user")})).catch((e=>{console.log(e)}));try{var r=(0,c.getFirestore)(u);const o=(0,c.doc)(r,"users",t.uid);console.log(o),(0,c.deleteDoc)(o).then((()=>e("fetchAlluserList"))).catch((()=>{throw Error("Error due delete User.")}))}catch(o){console.log(o)}},async userAuthrity({dispatch:e},t){try{var r=(0,c.getFirestore)(u);const o=(0,c.doc)(r,"users",t.uid);(0,c.updateDoc)(o,{authority:t.authority}).then((()=>e("fetchAlluserList"))).catch((()=>{throw Error("Error due userAuthriy.")}))}catch(o){console.log(o)}}}},l={state:{ticketList:null,allticketList:null,alldayticketList:null},mutations:{fetchTicketList(e,t){e.ticketList=t},fetchAllTicketList(e,t){e.allticketList=t},fetchAllDayTicketList(e,t){e.alldayticketList=t}},actions:{async fetchTicketList({commit:e,rootState:t}){const r=t.auth.user.uid;let o=[];const n=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"tickets"),(0,c.where)("uid","==",r));await c.getDocs(n).then((t=>{t.forEach((e=>{const t=e.data(),r=o.indexOf(t.id);-1===r&&o.push(t)})),e("fetchTicketList",o)})).catch((()=>{throw Error("Error due fetch Tickets.")}))},async addNewTicket({rootState:e,dispatch:t},r){const o=e.auth.user.uid,n=(0,c.collection)((0,c.getFirestore)(),"tickets");r.uid=o,await c.addDoc(n,r).then((()=>t("fetchTicketList"))).catch((()=>{throw Error("Error due add new Ticket.")}))},async checkTicket({dispatch:e},{id:t,currentCheckState:r}){const o=(0,c.doc)((0,c.getFirestore)(),"tickets",t);await c.updateDoc(o,{isChecked:!r}).then((()=>e("fetchTicketList"))).catch((()=>{throw Error("Error due check Ticket.")}))},async deleteTicket({dispatch:e,rootState:t},r){const o=t.auth.user.uid,n=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"tickets"),(0,c.where)("uid","==",o),(0,c.where)("id","==",r)),i=await(0,c.getDocs)(n);0!==i.docs.length&&await(0,c.deleteDoc)(i.docs[0].ref).then((()=>e("fetchTicketList"))).catch((()=>{throw Error("Error due delete Ticket.")}))},async fetchAllTicketList({commit:e},t){let r=[];const o=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"tickets"),(0,c.where)("id","==",t));await c.getDocs(o).then((t=>{t.forEach((e=>{const t=e.data();r.push(t)})),e("fetchAllTicketList",r)})).catch((()=>{throw Error("Error due fetch Tickets.")}))},async HolidayDeleteTicket({dispatch:e},t){const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"tickets"),(0,c.where)("id","==",t)),o=await(0,c.getDocs)(r);0!==o.docs.length&&await(0,c.deleteDoc)(o.docs[0].ref).then((()=>e("fetchTicketList"))).catch((()=>{throw Error("Error due delete Ticket.")}))}}},h={state:{holidayList:null},mutations:{fetchHolidayList(e,t){e.holidayList=t}},actions:{async fetchHolidayList({commit:e}){let t=[];const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"holidays"));await c.getDocs(r).then((r=>{r.forEach((e=>{const r=e.data(),o=t.indexOf(r.id);-1===o&&t.push(r)})),e("fetchHolidayList",t)})).catch((()=>{throw Error("Error due fetch HolidayList.")}))},async addNewHoliday({rootState:e,dispatch:t},r){const o=e.auth.user.uid,n=(0,c.collection)((0,c.getFirestore)(),"holidays");r.uid=o,await c.addDoc(n,r).then((()=>t("fetchHolidayList"))).catch((()=>{throw Error("Error due add new Holidays.")}))},async deleteHoliday({dispatch:e},t){const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"holidays"),(0,c.where)("id","==",t)),o=await(0,c.getDocs)(r);0!==o.docs.length&&await(0,c.deleteDoc)(o.docs[0].ref).then((()=>e("fetchHolidayList"))).catch((()=>{throw Error("Error due delete Holiday.")}))}}},f={state:{mealList:null},mutations:{fetchMealdayList(e,t){e.mealList=t}},actions:{async fetchMealdayList({commit:e}){let t=[];const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"meal"));await c.getDocs(r).then((r=>{r.forEach((e=>{const r=e.data(),o=t.indexOf(r.id);-1===o&&t.push(r)})),e("fetchMealdayList",t)})).catch((()=>{throw Error("Error due fetch mealList.")}))},async addNewMeal({rootState:e,dispatch:t},r){const o=e.auth.user.uid,n=(0,c.collection)((0,c.getFirestore)(),"meal");r.uid=o,await c.addDoc(n,r).then((()=>t("fetchMealdayList"))).catch((()=>{throw Error("Error due add new Meal.")}))},async deleteMeal({dispatch:e},t){const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"meal"),(0,c.where)("id","==",t)),o=await(0,c.getDocs)(r);0!==o.docs.length&&await(0,c.deleteDoc)(o.docs[0].ref).then((()=>e("fetchMealdayList"))).catch((()=>{throw Error("Error due delete Meal.")}))},async updateMeal({dispatch:e},t){const r={meal:t.meal,created_at:new Date},o=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"meal"),(0,c.where)("id","==",t.id)),n=await(0,c.getDocs)(o);0!==n.docs.length&&await(0,c.updateDoc)(n.docs[0].ref,r).then((()=>e("fetchMealdayList"))).catch((()=>{throw Error("Error due delete Meal.")}))}}},m=(0,o.MT)({namespaced:!0,state:{},getters:{},mutations:{},actions:{},modules:{auth:d,tickets:l,holiday:h,meal:f}})}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],i=e[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var u=n();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,n,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,o){return r.f[o](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{35:"90b90096",158:"7a61f18b",473:"fcadaf19",521:"4d974034",548:"e884bdd9",633:"3b23ba0d",690:"a311213a",712:"7d6ab020",867:"8e2f85cf",875:"6cff3f7f",920:"f40e7417",955:"b87f8381"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{158:"84bc6a7f",473:"804814ef",548:"0e34da68",690:"3bfc2cc7",712:"cd31f1ac",867:"7685f278",875:"83a6a9ee",920:"96ca5737",955:"b64a7a10"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="jeju-cafeteria:";r.l=function(o,n,i,a){if(e[o])e[o].push(n);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+i),c.src=o),e[o]=[n];var h=function(t,r){c.onerror=c.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,n){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(r){if(i.onerror=i.onload=null,"load"===r.type)o();else{var a=r&&r.type,c=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,i.parentNode&&i.parentNode.removeChild(i),n(s)}};return i.onerror=i.onload=a,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){n=a[o],i=n.getAttribute("data-href");if(i===e||i===t)return n}},o=function(o){return new Promise((function(n,i){var a=r.miniCssF(o),c=r.p+a;if(t(a,c))return n();e(o,c,null,n,i)}))},n={143:0};r.f.miniCss=function(e,t){var r={158:1,473:1,548:1,690:1,712:1,867:1,875:1,920:1,955:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,o){var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var i=new Promise((function(r,o){n=e[t]=[r,o]}));o.push(n[2]=i);var a=r.p+r.u(t),c=new Error,s=function(o){if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,n[1](c)}};r.l(a,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,i,a=o[0],c=o[1],s=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in c)r.o(c,n)&&(r.m[n]=c[n]);if(s)var d=s(r)}for(t&&t(o);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},o=self["webpackChunkjeju_cafeteria"]=self["webpackChunkjeju_cafeteria"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(4627)}));o=r.O(o)})();
//# sourceMappingURL=app.3370119c.js.map