(function(e){function t(t){for(var r,s,o=t[0],a=t[1],u=t[2],l=0,f=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},c=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/compo/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var p=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1106:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i={id:"nav"},c=Object(r["f"])("Home"),s=Object(r["f"])("About");function o(e,t){var n=Object(r["u"])("router-link"),o=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",i,[Object(r["g"])(n,{to:"/"},{default:Object(r["A"])((function(){return[c]})),_:1}),Object(r["g"])(n,{to:{name:"About"}},{default:Object(r["A"])((function(){return[s]})),_:1})]),Object(r["g"])(o)],64)}n("624b");const a={};a.render=o;var u=a,p=n("6c02");function l(e,t,n,i,c,s){var o=Object(r["u"])("SearchBar3");return Object(r["p"])(),Object(r["d"])(o)}var f={class:"search-form"},d={class:"suggestions",ref:"suggestions"},h=Object(r["g"])("li",null,"Filter for a city",-1),m=Object(r["g"])("li",null,"or a state",-1);function b(e,t,n,i,c,s){return Object(r["p"])(),Object(r["d"])("form",f,[Object(r["B"])(Object(r["g"])("input",{type:"text",class:"search",placeholder:"City or State",onKeyup:t[1]||(t[1]=function(){return s.displayMatches&&s.displayMatches.apply(s,arguments)}),onChange:t[2]||(t[2]=function(){return s.displayMatches&&s.displayMatches.apply(s,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.filteredCities=e})},null,544),[[r["y"],c.filteredCities]]),Object(r["g"])("ul",d,[h,m],512)])}n("99af"),n("4de4"),n("a15b"),n("d81d"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("5319");var g=n("2909"),j={data:function(){return{endpoint_cities:"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",cities:[],filteredCities:[]}},methods:{findMatches:function(e,t){return this.cities.filter((function(t){var n=new RegExp(e,"gi");return t.city.match(n)||t.state.match(n)}))},displayMatches:function(){var e=this,t=this.findMatches(this.filteredCities,this.cities),n=t.map((function(t){var n=new RegExp(e.filteredCities,"gi"),r=t.city.replace(n,'<span class="hl">'.concat(e.filteredCities,"</span>")),i=t.state.replace(n,'<span class="hl">'.concat(e.filteredCities,"</span>"));return'\n        <li>\n          <span class="name">'.concat(r,", ").concat(i,'</span>\n          <span class="population">').concat(t.population,"</span>\n        </li>\n        ")})).join("");this.$refs.suggestions.innerHTML=n}},mounted:function(){var e=this;fetch(this.endpoint_cities).then((function(e){return e.json()})).then((function(t){var n;return(n=e.cities).push.apply(n,Object(g["a"])(t))}))}};j.render=b;var O=j,y={class:"search-form"};function v(e,t,n,i,c,s){return Object(r["p"])(),Object(r["d"])("form",y,[Object(r["B"])(Object(r["g"])("input",{type:"text",class:"search",ref:"inputbox",placeholder:"Compostable?",onKeyup:t[1]||(t[1]=function(){return s.displayMatches&&s.displayMatches.apply(s,arguments)}),onChange:t[2]||(t[2]=function(){return s.displayMatches&&s.displayMatches.apply(s,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.searchTerm=e})},null,544),[[r["y"],c.searchTerm]]),Object(r["g"])("ul",{class:"suggestions",ref:"suggestions",onMousedown:t[4]||(t[4]=function(){return s.openDescription&&s.openDescription.apply(s,arguments)})},[Object(r["g"])("li",{innerHTML:c.searchTerm},"Filter for an item",8,["innerHTML"])],544)])}n("a4d3"),n("e01a"),n("b0c0");var M={data:function(){return{endpoint_url:"https://script.google.com/macros/s/AKfycbyMniVCYDyakkM1Qo3kHh2athgwnzESL1P0GlXz67uR4MJ6u2A/exec",items:[],searchTerm:"",filteredItems:[]}},methods:{findMatches:function(e,t){return this.items.filter((function(t){var n=new RegExp(e,"gi");return t.name.match(n)}))},displayMatches:function(){var e=this,t=this.findMatches(this.searchTerm,this.items),n=t.map((function(t){var n=new RegExp(e.searchTerm,"gi"),r=t.name.replace(n,'<span class="hl">'.concat(e.searchTerm,"</span>"));t.description.replace(n,'<span class="hl">'.concat(e.searchTerm,"</span>"));return'\n        <li>\n          <span class="name">'.concat(r,"</span>\n          \n        </li>\n        ")})).join("");this.$refs.suggestions.innerHTML=n},openDescription:function(e){console.log(this.$refs.suggestions)}},mounted:function(){var e=this;this.$refs.inputbox.focus(),fetch(this.endpoint_url).then((function(e){return e.json()})).then((function(t){return e.items=t.plants}))}};M.render=v;var w=M,x={class:"search-form"};function C(e,t,n,i,c,s){var o=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])("form",x,[Object(r["B"])(Object(r["g"])("input",{type:"text",class:"search",ref:"inputbox",placeholder:"Compostable?",onKeyup:t[1]||(t[1]=function(){return s.updateFilter&&s.updateFilter.apply(s,arguments)}),onChange:t[2]||(t[2]=function(){return s.updateFilter&&s.updateFilter.apply(s,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.searchTerm=e})},null,544),[[r["y"],c.searchTerm]]),c.searchTerm?(Object(r["p"])(),Object(r["d"])("ul",{key:0,class:"suggestions",ref:"suggestions",onMousedown:t[4]||(t[4]=function(){return s.openDescription&&s.openDescription.apply(s,arguments)})},[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(s.filteredItems,(function(e){return Object(r["p"])(),Object(r["d"])("li",{key:e.id,class:"li"},[Object(r["g"])(o,{to:{name:"ItemDetails",params:{id:e.id,name:e.name,isCompostable:e.isCompostable,description:e.description,image:e.image_url}}},{default:Object(r["A"])((function(){return[Object(r["f"])(Object(r["w"])(e.name),1)]})),_:2},1032,["to"])])})),128))],544)):Object(r["e"])("",!0)])}var T={data:function(){return{endpoint_url:"https://script.google.com/macros/s/AKfycbyMniVCYDyakkM1Qo3kHh2athgwnzESL1P0GlXz67uR4MJ6u2A/exec",items:[],searchTerm:""}},methods:{findMatches:function(e,t){return this.items.filter((function(t){var n=new RegExp(e,"gi");return t.name.match(n)}))},updateFilter:function(){},openDescription:function(e){console.log(this.$refs.suggestions)},toggleVisibility:function(){}},computed:{filteredItems:function(){var e=this;return this.items.filter((function(t){var n=new RegExp(e.searchTerm,"gi");return t.name.match(n)}))}},mounted:function(){var e=this;this.$refs.inputbox.focus(),fetch(this.endpoint_url).then((function(e){return e.json()})).then((function(t){return e.items=t.plants}))}};n("864e");T.render=C;var k=T,_={name:"Home",components:{SearchBar:O,SearchBar2:w,SearchBar3:k},data:function(){return{items:[]}}};n("5925");_.render=l;var S=_;function A(e,t,n,r,i,c){return"about page this is new here"}var D={};D.render=A;var H=D;function P(e,t,n,i,c,s){return" items "+Object(r["w"])(c.items)}var E={data:function(){return{items:["pina","fasz"]}}};E.render=P;var R=E,z=Object(r["g"])("h2",null,"Can I put this in the compost?",-1);function B(e,t,n,i,c,s){return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("h1",null,Object(r["w"])(n.name),1),z,Object(r["g"])("h2",null,[Object(r["g"])("strong",null,Object(r["w"])(n.isCompostable),1)]),Object(r["g"])("p",null,Object(r["w"])(n.description),1),Object(r["g"])("img",{src:n.image,alt:""},null,8,["src"])],64)}var F={props:["id","name","isCompostable","description","image"],data:function(){return{uri:"https://script.google.com/macros/s/AKfycbyMniVCYDyakkM1Qo3kHh2athgwnzESL1P0GlXz67uR4MJ6u2A/exec"}},mounted:function(){}};F.render=B;var I=F,L=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:H},{path:"/items",name:"Items",component:R},{path:"/items/:id",name:"ItemDetails",component:I,props:!0}],V=Object(p["a"])({history:Object(p["b"])("/compo/"),routes:L}),K=V;n("0284");Object(r["c"])(u).use(K).mount("#app")},5925:function(e,t,n){"use strict";n("1106")},"624b":function(e,t,n){"use strict";n("c574")},"76be":function(e,t,n){},"864e":function(e,t,n){"use strict";n("76be")},c574:function(e,t,n){}});
//# sourceMappingURL=app.6c4eeae0.js.map