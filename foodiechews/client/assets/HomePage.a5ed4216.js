import{o as t,c as e,p as a,k as o,d as s,e as n,f as r,i,l as d,G as c}from"./vendor.a06d263d.js";import{b,A as l}from"./index.b96be2de.js";import{g as v}from"./LocationGetter.0f172b81.js";const p={name:"Home",setup:()=>(t((async()=>{await v()})),{user:e((()=>l.user)),location:e((()=>l.activeLocation)),async login(){b.loginWithPopup()}})},u=d();a("data-v-577e796b");const h={class:"container-fluid",id:"bg-img"},m=c('<div class="row justify-content-center mt-5" data-v-577e796b><div class="col-9 col-md-6 card-transparent-white text-dark text-shadow-light mt-5 rounded" data-v-577e796b><h2 class="text-center pt-1" data-v-577e796b> About Us </h2><p class="pt-3 text-center" data-v-577e796b><b data-v-577e796b><i data-v-577e796b> ♪ When you&#39;re craving something new but don&#39;t know what to do... FoodieChews! ♪ </i></b></p><h2 class="text-center pt-3" data-v-577e796b> How To Use </h2><p class="text-center pt-3" data-v-577e796b> Hit the random button below to find a restaurant in your area! <br data-v-577e796b><br data-v-577e796b> Create an account to save your foodie history and see other cravers favorite places! </p></div></div>',1),f={class:"d-flex justify-content-center mt-3"};o();const g=u(((t,e,a,o,d,c)=>(s(),n("div",h,[m,r("div",f,[o.user.isAuthenticated?i("",!0):(s(),n("button",{key:0,class:"btn btn-primary text-uppercase",onClick:e[1]||(e[1]=(...t)=>o.login&&o.login(...t))}," Login "))])]))));p.render=g,p.__scopeId="data-v-577e796b";export default p;