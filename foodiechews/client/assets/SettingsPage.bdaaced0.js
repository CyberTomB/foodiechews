import{a as t,c as a,p as e,k as o,d as s,e as c,f as n,A as l,D as i,B as r,I as d,F as u,h as m,l as p,t as y,j as h}from"./vendor.a06d263d.js";import{a as v,P as f,l as b,A as C}from"./index.2d985608.js";const k=["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];const w={name:"Settings",setup(){const e=t({account:a((()=>C.account))});return{state:e,states:k,async editAccount(){try{await this.editCity("add",e.account.activeLocation),await v.editAccount(e.account),f.toast("Applied All Changes","success")}catch(t){f.toast(t,"error")}},async editCity(t,a){try{let o=!0;if(1===e.account.location.length&&"remove"===t)f.toast("Cannot remove only city on record","error");else{switch(t){case"add":o=await v.addCity(a);break;case"remove":if(!(await f.confirm()))return"";o=await v.removeCity(a);break;default:return f.toast("Edit city recieved bad action","error"),""}b.log("response value:",o),o?f.toast("Updated City","success"):f.toast("Not a valid city (Settings)","error")}}catch(o){f.toast(o,"error")}}}}},A=p();e("data-v-1924f784");const O={class:"container-fluid"},L={class:"row justify-content-around py-4"},g=n("div",{class:"col-sm-12"},[n("h5",null," Account Settings: ")],-1),N={class:"col-8 card bg-bootSec text-dark shadow-sm mb-2"},S={class:"form-group form-check"},R=n("label",{for:"showOnlyOpen",class:"form-check-label"},"Only Find Open Restaurants",-1),x={class:"form-group form-check"},I=n("label",{for:"nodupes",class:"form-check-label"},"No Duplicate Restaurants",-1),D={class:"form-group form-check"},M=n("label",{for:"showRestaurants",class:"form-check-label"},"Show My Restaurant History",-1),V=n("small",{id:"showRestaurantsHelp",class:"form-text text-muted"},[n("em",null,"Only show cities on my profile page.")],-1),U={class:"row"},H={class:"col-sm-12 col-md-6"},T={class:"form-group"},j=n("label",{for:"activeLocationCity"},"City:",-1),E={class:"col-sm-12 col-md-2 pb-1"},K={class:"col-sm-12 col-md-2 mb-1"},W={class:"\r\n                    col-8\r\n                    card\r\n                    bg-bootSec\r\n                    text-dark\r\n                    shadow-sm mb-2"},Y=n("h6",null,"Location History:",-1),F={class:"col-11 d-flex justify-content-end"};o();const P=A(((t,a,e,o,p,v)=>(s(),c("div",O,[n("div",L,[g,n("div",N,[n("div",S,[l(n("input",{type:"checkbox",name:"showOnlyOpen",id:"showOnlyOpen",class:"form-check-input","onUpdate:modelValue":a[1]||(a[1]=t=>o.state.account.showOnlyOpen=t)},null,512),[[i,o.state.account.showOnlyOpen]]),R]),n("div",x,[l(n("input",{type:"checkbox",name:"nodupes",id:"nodupes",class:"form-check-input","onUpdate:modelValue":a[2]||(a[2]=t=>o.state.account.noDupes=t)},null,512),[[i,o.state.account.noDupes]]),I]),n("div",D,[l(n("input",{type:"checkbox",name:"showRestaurants",id:"showRestaurants",class:"form-check-input","onUpdate:modelValue":a[3]||(a[3]=t=>o.state.account.showRestaurants=t)},null,512),[[i,o.state.account.showRestaurants]]),M,V]),n("div",U,[n("div",H,[n("div",T,[j,l(n("input",{class:"form-control",id:"activeLocationCity",type:"text",placeholder:"New York City","onUpdate:modelValue":a[4]||(a[4]=t=>o.state.account.activeLocation.city=t)},null,512),[[r,o.state.account.activeLocation.city]])])]),n("div",E,[l(n("select",{name:"activeLocationState",id:"activeLocationState","onUpdate:modelValue":a[5]||(a[5]=t=>o.state.account.activeLocation.state=t)},[(s(!0),c(u,null,m(o.states,((t,a)=>(s(),c("option",{value:t,key:a},y(t),9,["value"])))),128))],512),[[d,o.state.account.activeLocation.state]])]),n("div",K,[n("button",{type:"button",class:"btn btn-secondary btn-sm",onClick:a[6]||(a[6]=t=>o.editCity("add",o.state.account.activeLocation))}," + City ")])])]),n("div",W,[Y,n("ul",null,[(s(!0),c(u,null,m(o.state.account.location,(t=>(s(),c("li",{key:t},[h(y(t.city)+", "+y(t.state)+"   ",1),n("i",{class:"far fa fa-times-circle action",onClick:a=>o.editCity("remove",t)},null,8,["onClick"])])))),128))])]),n("div",F,[n("button",{type:"button",class:"btn btn-success",onClick:a[7]||(a[7]=(...t)=>o.editAccount&&o.editAccount(...t))}," Save Changes ")])])]))));w.render=P,w.__scopeId="data-v-1924f784";export default w;