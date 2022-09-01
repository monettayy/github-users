"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[360],{4930:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(3645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,".landing-card[data-v-35663883]{border:1px solid rgba(0,0,0,.1);border-radius:12px;overflow:visible;overflow:auto;padding:30px 20px;position:relative;width:100%}",""]);const a=r},3645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},3379:(e,n,t)=>{var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function i(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],c=n.base?a[0]+n.base:a[0],l=t[c]||0,u="".concat(c," ").concat(l);t[c]=l+1;var d=i(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(s[d].references++,s[d].updater(f)):s.push({identifier:u,updater:b(f,n),references:1}),o.push(u)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function f(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var a=document.createTextNode(r),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(a,s[n]):e.appendChild(a)}}function v(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,p=0;function b(e,n){var t,o,r;if(n.singleton){var a=p++;t=m||(m=l(n)),o=f.bind(null,t,a,!1),r=f.bind(null,t,a,!0)}else t=l(n),o=v.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=i(t[o]);s[r].references--}for(var a=c(e,n),l=0;l<t.length;l++){var u=i(t[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}t=a}}}},3744:(e,n)=>{n.Z=(e,n)=>{const t=e.__vccOpts||e;for(const[e,o]of n)t[e]=o;return t}},5360:(e,n,t)=>{t.r(n),t.d(n,{default:()=>H});var o=t(821),r=function(e){return(0,o.dD)("data-v-35663883"),e=e(),(0,o.Cn)(),e},a={class:"container-fluid"},s=r((function(){return(0,o._)("h3",{class:"mb-5 text-gray-800"},"Find User from Github",-1)})),i={class:"row justify-content-center"},c={class:"col-lg-10 col-12"},l=r((function(){return(0,o._)("h5",{class:"mb-2 text-gray-800"},"Input List of Username separated by comma",-1)})),u={class:"form-group"},d={class:"row justify-content-center mt-4"},f={class:"col-lg-4 col-md-6"},v={class:"landing-card"},m={key:0,class:"card-label row"},p={class:"col-6 mb-0"},b={key:0,class:"col-6 mb-1"},g={key:1,class:"col-6 mb-1"},h=r((function(){return(0,o._)("div",{class:"col-6 mb-0"},"Login",-1)})),w={key:2,class:"col-6 mb-1"},y={key:3,class:"col-6 mb-1"},_=r((function(){return(0,o._)("div",{class:"col-6 mb-0"},"Company",-1)})),x={key:4,class:"col-6 mb-1"},C={key:5,class:"col-6 mb-1"},k=r((function(){return(0,o._)("div",{class:"col-6 mb-0"},"Followers",-1)})),D={class:"col-6 mb-1 text-right"},N=r((function(){return(0,o._)("div",{class:"col-6 mb-0"},"Public Repositories",-1)})),j={class:"col-6 mb-1 text-right"},S=r((function(){return(0,o._)("div",{class:"col-6 mb-0"},"Average Followers/Repo",-1)})),U={class:"col-6 mb-1 text-right"},z={key:1,class:"card-label row"},F=r((function(){return(0,o._)("div",{class:"col-6 mb-0"},"Username",-1)})),M={class:"col-6 mb-1"},T=r((function(){return(0,o._)("div",{class:"col-12 mb-0 text-center"},"(No Data Found for this Username)",-1)}));const I={__name:"Dashboard",setup:function(e){var n=(0,o.FN)().appContext.config.globalProperties.$alert,t=(0,o.iH)(null),r=(0,o.qj)({user_infos:[]}),I=function(){axios.get("/github-users",{params:{usernames:t.value}}).then((function(e){console.log(e),e.data.success?(r.user_infos=e.data.data,console.log("user_infos",r.user_infos)):e.data.message&&n.toast(e.data.message,"error")})).catch((function(e){e.response.data.message?n.toast(e.response.data.message,"error"):n.toast("Something went wrong","error")}))};return(0,o.bv)((function(){})),function(e,n){return(0,o.wg)(),(0,o.iD)("div",a,[s,(0,o._)("div",i,[(0,o._)("div",c,[l,(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",placeholder:"juan, pedro, anne","onUpdate:modelValue":n[0]||(n[0]=function(e){return(0,o.dq)(t)?t.value=e:t=e})},null,512),[[o.nr,(0,o.SU)(t)]])]),(0,o._)("button",{class:"btn btn-primary",onClick:I}," Get Users Information "),(0,o._)("div",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.user_infos,(function(e,n){return(0,o.wg)(),(0,o.iD)("div",f,[(0,o._)("div",v,[e.status?((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",p,"Name "+(0,o.zw)(e.status),1),e.name?((0,o.wg)(),(0,o.iD)("div",b,(0,o.zw)(e.name),1)):((0,o.wg)(),(0,o.iD)("div",g,"(No Name)")),h,e.login?((0,o.wg)(),(0,o.iD)("div",w,(0,o.zw)(e.login),1)):((0,o.wg)(),(0,o.iD)("div",y,"(No Login)")),_,e.company?((0,o.wg)(),(0,o.iD)("div",x,(0,o.zw)(e.company),1)):((0,o.wg)(),(0,o.iD)("div",C,"(No Company)")),k,(0,o._)("div",D,(0,o.zw)(e.followers),1),N,(0,o._)("div",j,(0,o.zw)(e.public_repos),1),S,(0,o._)("div",U,(0,o.zw)(e.ave_followers),1)])):((0,o.wg)(),(0,o.iD)("div",z,[F,(0,o._)("div",M,(0,o.zw)(e.username),1),T]))])])})),256))])])])])}}};var L=t(3379),A=t.n(L),E=t(4930),Z={insert:"head",singleton:!1};A()(E.Z,Z);E.Z.locals;const H=(0,t(3744).Z)(I,[["__scopeId","data-v-35663883"]])}}]);