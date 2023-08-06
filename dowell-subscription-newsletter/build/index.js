!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var l in r)e.o(r,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:r[l]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Home:function(){return n},Subscribe:function(){return v},Subscribers:function(){return E}});var r=require("react"),l=e.n(r),n=function(e){var t=e.homeLink,r=e.subscribeNav,n=e.subscribeLink,a=e.unsubscribeNav,s=e.subscribersNav,c=e.subscribersLink,i=e.unsubscribeLink;return l().createElement("div",{className:"container mx-auto w-8/12 md:w-6/12 bg-[#282B34] mt-28 rounded-lg"},l().createElement("nav",{className:"text-white w-full pt-4 px-8"},l().createElement("ul",{className:"flex"},l().createElement("li",{className:"hover:text-slate-400"},t),l().createElement("li",{className:"ml-auto hover:text-slate-400"},s),l().createElement("li",{className:"mx-4 hover:text-slate-400"},r),l().createElement("li",{className:"hover:text-slate-400"},a))),l().createElement("div",{className:"text-white"},l().createElement("div",{className:"pt-12 text-center w-full"},l().createElement("h1",{className:"text-xl text-sky-500"},"Dowell Newsletter Subscription Service"),l().createElement("p",{className:"mt-4"},"Welcome to the Dowell Newsletter Subscripion Service")),l().createElement("div",{className:"px-12 pt-8 pb-12"},l().createElement("ul",null,l().createElement("li",{className:"py-4 hover:text-slate-400"},c),l().createElement("li",{className:"hover:text-slate-400"},n),l().createElement("li",{className:"py-4 hover:text-slate-400"},i)))))},a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=l().createContext&&l().createContext(a),c=function(){return c=Object.assign||function(e){for(var t,r=1,l=arguments.length;r<l;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)},i=function(e,t){var r={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(r[l[n]]=e[l[n]])}return r};function o(e){return e&&e.map((function(e,t){return l().createElement(e.tag,c({key:t},e.attr),o(e.child))}))}function u(e){return function(t){return l().createElement(m,c({attr:c({},e.attr)},t),o(e.child))}}function m(e){var t=function(t){var r,n=e.attr,a=e.size,s=e.title,o=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),l().createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,o,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&l().createElement("title",null,s),e.children)};return void 0!==s?l().createElement(s.Consumer,null,(function(e){return t(e)})):t(a)}function d(e){return u({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"}}]})(e)}function b(e){return u({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 16c-2.137 0-4.146-0.832-5.657-2.343s-2.343-3.52-2.343-5.657c0-1.513 0.425-2.986 1.228-4.261 0.781-1.239 1.885-2.24 3.193-2.895l0.672 1.341c-1.063 0.533-1.961 1.347-2.596 2.354-0.652 1.034-0.997 2.231-0.997 3.461 0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5c0-1.23-0.345-2.426-0.997-3.461-0.635-1.008-1.533-1.822-2.596-2.354l0.672-1.341c1.308 0.655 2.412 1.656 3.193 2.895 0.803 1.274 1.228 2.748 1.228 4.261 0 2.137-0.832 4.146-2.343 5.657s-3.52 2.343-5.657 2.343z"}}]})(e)}var p=function(e){var t=e.classNames,r=e.size,n=e.clickHandler;return l().createElement("div",{className:t.join(" "),onClick:n},l().createElement(d,{size:r,color:"black"}))},f=function(e){var t=e.classNames;return l().createElement(b,{className:t.join(" ")})},g=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,v=function(e){var t=e.path,r=e.email,n=e.topic,a=e.goBack,s=e.status,c=e.reason,i=e.loading,o=e.setEmail,u=e.setTopic,m=e.setStatus,d=e.setReason,b=e.handleSubscription,v=e.handleUnsubscription,E=function(){return!(n&&g.test(r)&&s)};return l().createElement("div",{className:"container mx-auto w-4/5 md:w-2/5 h-full"},l().createElement(p,{clickHandler:a,classNames:["absolute cursor-pointer top-[20px] left-[20px] rounded-full bg-white"],size:"2rem"}),l().createElement("h1",{className:"text-center mt-20 text-2xl "},t.includes("unsubscribe")?"Unsubscribe from Newsletter":"Subscribe to newsletter"),l().createElement("div",{className:"flex flex-col p-8 mt-8 bg-slate-700 rounded-lg"},l().createElement("div",{className:"flex flex-col items-center pb-8 rounded-lg"},l().createElement("h1",{className:"text-2xl pb-2 text-sky-600"},"Newsletter"),l().createElement("p",{className:"text-sm text-white"},t.includes("unsubscribe")?"We are sorry to see you go":"Stay up to date with our latest news and products")),l().createElement("div",{className:"input flex flex-col justify-between"},l().createElement("span",{className:"text-white text-lg mb-2"},"Topic"),l().createElement("input",{required:!0,type:"text",value:n,placeholder:"uhmmm",onChange:function(e){return u(e.target.value)},className:"form-input w-full rounded-lg border-transparent bg-gray-100 mb-6 shadow-sm placeholder-slate-400 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"}),l().createElement("span",{className:"text-white text-lg mb-2"},"Status"),l().createElement("select",{required:!0,onChange:function(e){return m(e.target.value)},className:"mb-6 w-full mt-1 rounded-md border-gray-300 shadow-sm text-sm focus:border-sky-500 focus:ring-1 focus:ring-sky-500"},l().createElement("option",null,"select your subscription status"),l().createElement("option",null,"Public"),l().createElement("option",null,"Existing Client"),l().createElement("option",null,"Internal team"),l().createElement("option",null,"Prospective Client"),l().createElement("option",null,"Sales Agent"),l().createElement("option",null,"Prospective Sales Agent")),l().createElement("span",{className:"text-white text-lg mb-2"},"Email"),l().createElement("input",{required:!0,type:"email",value:r,onChange:function(e){return o(e.target.value)},className:"form-input w-full rounded-lg border-transparent bg-gray-100 mb-8 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"}),t.includes("unsubscribe")&&l().createElement(l().Fragment,null,l().createElement("span",{className:"text-white text-lg mt-[-12px] mb-2"},"Reasons to unsubscribe"),l().createElement("input",{type:"text",value:c,onChange:function(e){return d(e.target.value)},className:"form-input w-full rounded-lg border-transparent bg-gray-100 mb-8"})),l().createElement("button",{type:"submit",onClick:function(){return t.includes("unsubscribe")?v():b()},disabled:E(),className:"flex justify-center items-center rounded-lg w-full text-white py-2 disabled:cursor-not-allowed hover:disabled:bg-slate-100 hover:disabled:text-stone-500 ".concat(E()?"bg-white text-stone-500 opacity-70":"bg-sky-600")},i?l().createElement(l().Fragment,null,l().createElement(f,{classNames:["animate-spin h-5 w-5 size={size} fill-white mr-2"]}),"Processing..."):l().createElement(l().Fragment,null,t.includes("unsubscribe")?"Unsubscibe":"Subscribe")))))},E=function(e){var t=e.goBack,r=e.subscribersList,n=e.isLoading,a=(null!=r?r:{Details:{data:[]}}).Details.data;return l().createElement("div",{className:" w-8/12 mx-auto mt-8 "},l().createElement(p,{clickHandler:t,classNames:["absolute cursor-pointer top-[32px] left-[20px] rounded-full bg-white"],size:"2rem"}),l().createElement("div",{className:"text-xl text-sky-700"},l().createElement("h1",null,"List of Subscribers")),l().createElement("div",null,n?l().createElement(f,{classNames:["animate-spin h-5 w-5 mt-16 size={size} fill-sky-500 flex justify-center items-center"]}):l().createElement(l().Fragment,null,a.map((function(e){return l().createElement(l().Fragment,null,l().createElement("div",{key:e.id,className:"mt-4 bg-white rounded-lg px-8 pt-4"},l().createElement("h1",{className:"text-black text-lg"},"Subscribers Information"),l().createElement("div",{className:"info divide-y divide-zinc-300"},l().createElement("div",{className:"topic pt-3"},l().createElement("p",{className:"text-lg"},"Topic"),l().createElement("p",{className:"py-2"},e.topic)),l().createElement("div",{className:"eamil pt-4"},l().createElement("p",{className:"text-lg"},"Email"),l().createElement("p",null,e.subscriberEmail)))))})))))};module.exports=t}();