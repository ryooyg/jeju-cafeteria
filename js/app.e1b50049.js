(function(){"use strict";var e={4627:function(e,t,r){r(560);var n=r(9963),o=r(6089),i=r(6252);function a(e,t,r,n,o,a){const c=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(c)}var c={mounted(){}},s=r(3744);const u=(0,s.Z)(c,[["render",a]]);var d=u,h=r(1120),l=r(789),f=r(5612),m=r(7303);const g=(0,o.WB)(),p=(0,n.ri)(d);p.use(g),p.use(h.Z),p.use(m.ZP,{}),p.use(f.ZP),p.use(l.Z),p.mount("#app"),h.Z.push("/sign-in")},1120:function(e,t,r){var n=r(2201),o=r(789);const i=[{path:"/",component:()=>r.e(225).then(r.bind(r,1225))},{path:"/sign-in",name:"sign-in",component:()=>r.e(225).then(r.bind(r,1225))},{path:"/sign-up",name:"sign-up",component:()=>r.e(118).then(r.bind(r,118))},{path:"/home",name:"home",component:()=>r.e(313).then(r.bind(r,3313)),meta:{requiresAuth:!0}},{path:"/ticketcount",name:"thicktcount",component:()=>r.e(889).then(r.bind(r,889)),meta:{requiresAuth:!0}},{path:"/useradmin",name:"useradmin",component:()=>r.e(138).then(r.bind(r,5138)),meta:{requiresAuth:!0}},{path:"/holiday",name:"holiday",component:()=>r.e(812).then(r.bind(r,3812)),meta:{requiresAuth:!0}},{path:"/menu",name:"menu",component:()=>r.e(634).then(r.bind(r,3634)),meta:{requiresAuth:!0}},{path:"/userinfo",name:"userinfo",component:()=>r.e(624).then(r.bind(r,2624)),meta:{requiresAuth:!0}}],a=(0,n.p7)({history:(0,n.PO)(),routes:i});a.beforeEach((async(e,t,r)=>{if(e.matched.some((e=>e.meta.requiresAuth))){if(o.Z.getters.isAuthenticated)return void r();r("/sign-in")}else r()})),t.Z=a},789:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(894),o=(r(560),r(1120)),i=r(3977),a=r(316),c=r(6100);const s={apiKey:"AIzaSyBPoT9Foryncc0bH8u5g9BQfV0gFV1t6TM",authDomain:"jeju-cafeteria.firebaseapp.com",projectId:"jeju-cafeteria",storageBucket:"jeju-cafeteria.appspot.com",messagingSenderId:"770346717100",appId:"1:770346717100:web:709f8bcb0a7139cd383409",measurementId:"G-GB9GGC8CPL"},u=(0,i.ZF)(s);c.getFirestore(u);var d={state:{user:null,userList:null},getters:{isAuthenticated(e){return!!e.user}},mutations:{signUp(){o.Z.push("/sign-in")},signIn(e,t){e.user=t,o.Z.push("/home")},signOut(e){e.user={},o.Z.push("/sign-in")},fetchAlluserList(e,t){e.userList=t}},actions:{async signUpWithEmailAndPassword({commit:e},{email:t,password:r,username:n}){await a.createUserWithEmailAndPassword(a.getAuth(u),t,r).then((t=>{a.sendEmailVerification(t.user).then((()=>e("signUp")));try{var r=(0,c.getFirestore)(u);const e=c.collection(r,"users"),o=(0,c.doc)(e,t.user.uid);(0,c.setDoc)(o,{uid:t.user.uid,email:t.user.email,username:n,authority:!1,create_at:Date.now()})}catch(o){console.log(o)}})).catch((()=>{throw Error("Email is already registered.")}))},async signInWithEmailAndPassword({commit:e},{email:t,password:r}){await a.signInWithEmailAndPassword(a.getAuth(u),t,r).then((t=>{if(!t.user.emailVerified)throw Error("Email isn't verified.");try{var r=(0,c.getFirestore)(u);const n=(0,c.doc)(r,"users",t.user.uid);(0,c.getDoc)(n).then((t=>{t.exists()?e("signIn",t.data()):console.log("No such document")}))}catch(n){console.log(n)}e("signIn",t.user)})).catch((e=>{if("Email isn't verified."===e.message)throw Error("Email isn't verified.");throw Error("Invalid email or password.")}))},async signInWithGoogle({commit:e}){await a.signInWithPopup(a.getAuth(u),new a.GoogleAuthProvider).then((t=>{e("signIn",t.user)}))},async signOut({commit:e}){await a.signOut(a.getAuth(u)).then((()=>e("signOut"))).catch((e=>{console.log(e)}))},async fetchAlluserList({commit:e}){let t=[];try{var r=(0,c.getFirestore)(u);const n=(0,c.query)(c.collection(r,"users")),o=await(0,c.getDocs)(n);o.forEach((e=>{t.push(e.data())})),t.length>0&&e("fetchAlluserList",t)}catch(n){console.log(n)}},async fireBaseDeleteUser({dispatch:e},t){try{var r=(0,c.getFirestore)(u);const n=(0,c.doc)(r,"users",t.uid);console.log(n),(0,c.deleteDoc)(n).then((()=>e("fetchAlluserList"))).catch((()=>{throw Error("Error due delete User.")}))}catch(n){console.log(n)}},async userAuthrity({dispatch:e},t){try{var r=(0,c.getFirestore)(u);const n=(0,c.doc)(r,"users",t.uid);(0,c.updateDoc)(n,{authority:t.authority}).then((()=>e("fetchAlluserList"))).catch((()=>{throw Error("Error due userAuthriy.")}))}catch(n){console.log(n)}}}},h={state:{ticketList:null,allticketList:null},mutations:{fetchTicketList(e,t){e.ticketList=t},fetchAllTicketList(e,t){e.allticketList=t}},actions:{async fetchTicketList({commit:e,rootState:t}){const r=t.auth.user.uid;let n=[];const o=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"tickets"),(0,c.where)("uid","==",r));await c.getDocs(o).then((t=>{t.forEach((e=>{const t=e.data(),r=n.indexOf(t.id);-1===r&&n.push(t)})),e("fetchTicketList",n)})).catch((()=>{throw Error("Error due fetch Tickets.")}))},async addNewTicket({rootState:e,dispatch:t},r){const n=e.auth.user.uid,o=(0,c.collection)((0,c.getFirestore)(),"tickets");r.uid=n,await c.addDoc(o,r).then((()=>t("fetchTicketList"))).catch((()=>{throw Error("Error due add new Ticket.")}))},async checkTicket({dispatch:e},{id:t,currentCheckState:r}){const n=(0,c.doc)((0,c.getFirestore)(),"tickets",t);await c.updateDoc(n,{isChecked:!r}).then((()=>e("fetchTicketList"))).catch((()=>{throw Error("Error due check Ticket.")}))},async deleteTicket({dispatch:e,rootState:t},r){const n=t.auth.user.uid,o=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"tickets"),(0,c.where)("uid","==",n),(0,c.where)("id","==",r)),i=await(0,c.getDocs)(o);0!==i.docs.length&&await(0,c.deleteDoc)(i.docs[0].ref).then((()=>e("fetchTicketList"))).catch((()=>{throw Error("Error due delete Ticket.")}))},async fetchAllTicketList({commit:e}){const t=new Date,r=t.getFullYear(),n=t.getMonth()+1,o=t.getDate();var i=r+"-";n<10&&(i+="0"),i+=n+"-",o<10&&(i+="0"),i+=o;let a=[];const s=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"tickets"),(0,c.where)("id","==",i));await c.getDocs(s).then((t=>{t.forEach((e=>{const t=e.data();a.push(t)})),e("fetchAllTicketList",a)})).catch((()=>{throw Error("Error due fetch Tickets.")}))}}},l={state:{holidayList:null},mutations:{fetchHolidayList(e,t){e.holidayList=t}},actions:{async fetchHolidayList({commit:e}){let t=[];const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"holidays"));await c.getDocs(r).then((r=>{r.forEach((e=>{const r=e.data(),n=t.indexOf(r.id);-1===n&&t.push(r)})),e("fetchHolidayList",t)})).catch((()=>{throw Error("Error due fetch HolidayList.")}))},async addNewHoliday({rootState:e,dispatch:t},r){const n=e.auth.user.uid,o=(0,c.collection)((0,c.getFirestore)(),"holidays");r.uid=n,await c.addDoc(o,r).then((()=>t("fetchHolidayList"))).catch((()=>{throw Error("Error due add new Holidays.")}))},async deleteHoliday({dispatch:e},t){const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"holidays"),(0,c.where)("id","==",t)),n=await(0,c.getDocs)(r);0!==n.docs.length&&await(0,c.deleteDoc)(n.docs[0].ref).then((()=>e("fetchHolidayList"))).catch((()=>{throw Error("Error due delete Holiday.")}))}}},f={state:{mealList:null},mutations:{fetchMealdayList(e,t){e.mealList=t}},actions:{async fetchMealdayList({commit:e}){let t=[];const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"meal"));await c.getDocs(r).then((r=>{r.forEach((e=>{const r=e.data(),n=t.indexOf(r.id);-1===n&&t.push(r)})),e("fetchMealdayList",t)})).catch((()=>{throw Error("Error due fetch mealList.")}))},async addNewMeal({rootState:e,dispatch:t},r){const n=e.auth.user.uid,o=(0,c.collection)((0,c.getFirestore)(),"meal");r.uid=n,await c.addDoc(o,r).then((()=>t("fetchMealdayList"))).catch((()=>{throw Error("Error due add new Meal.")}))},async deleteMeal({dispatch:e},t){const r=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"meal"),(0,c.where)("id","==",t)),n=await(0,c.getDocs)(r);0!==n.docs.length&&await(0,c.deleteDoc)(n.docs[0].ref).then((()=>e("fetchMealdayList"))).catch((()=>{throw Error("Error due delete Meal.")}))},async updateMeal({dispatch:e},t){const r={meal:t.meal,created_at:new Date},n=(0,c.query)((0,c.collection)((0,c.getFirestore)(),"meal"),(0,c.where)("id","==",t.id)),o=await(0,c.getDocs)(n);0!==o.docs.length&&await(0,c.updateDoc)(o.docs[0].ref,r).then((()=>e("fetchMealdayList"))).catch((()=>{throw Error("Error due delete Meal.")}))}}},m=(0,n.MT)({namespaced:!0,state:{},getters:{},mutations:{},actions:{},modules:{auth:d,tickets:h,holiday:l,meal:f}})}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],i=e[d][2];for(var c=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[n,o,i]}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{118:"1d9b00c4",138:"9ce1f1a2",225:"41336f00",313:"7eab0664",624:"d7295660",634:"508a7a2a",812:"f82b92f6",889:"52a79398"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+"."+{138:"88e32727",313:"6c7dd09d",624:"dd03bc57",634:"7de873e9",812:"6c7dd09d",889:"a27a840e"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="jeju-cafeteria:";r.l=function(n,o,i,a){if(e[n])e[n].push(o);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var h=u[d];if(h.getAttribute("src")==n||h.getAttribute("data-webpack")==t+i){c=h;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.setAttribute("data-webpack",t+i),c.src=n),e[n]=[o];var l=function(t,r){c.onerror=c.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,n,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var a=r&&r.type,c=r&&r.target&&r.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+c+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,i.parentNode&&i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],i=o.getAttribute("data-href");if(i===e||i===t)return o}},n=function(n){return new Promise((function(o,i){var a=r.miniCssF(n),c=r.p+a;if(t(a,c))return o();e(n,c,null,o,i)}))},o={143:0};r.f.miniCss=function(e,t){var r={138:1,313:1,624:1,634:1,812:1,889:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=i);var a=r.p+r.u(t),c=new Error,s=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};r.l(a,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],c=n[1],s=n[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var d=s(r)}for(t&&t(n);u<a.length;u++)i=a[u],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},n=self["webpackChunkjeju_cafeteria"]=self["webpackChunkjeju_cafeteria"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4627)}));n=r.O(n)})();
//# sourceMappingURL=app.e1b50049.js.map