!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);async function r(t){try{const e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&APPID=6afc4c4d6d160273a7559007309c6525`,{mode:"cors"}),n=await e.json(),r=n.main;let i=n.weather[0].icon,a=n.name;((t,e,n,r,i,a,o,p)=>{let c=new Date;let s=`<div class="card text-center">\n\t\t<div class="border-bottom p-2 d-flex justify-content-between">\n\t\t\t<p>City: ${a}</p>\n\t\t\t<p><button type="button" class="btn btn-info">C</button> <button type="button" class="btn btn-info">K</button></p>\n\t\t</div>\n\t\t<div class="d-flex justify-content-between">\n\t\t\t<div class="pl-5">\n\t\t\t\t<p class="bg-primary">\n\t\t\t \t\t${c.getUTCDate()} / ${c.getUTCMonth()+1} / ${c.getUTCFullYear()}\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t${c.getUTCHours()}H : ${c.getUTCMinutes()}MM : ${c.getUTCSeconds()}S\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tFeels like ${t} ℃\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class="pr-5">\n\t\t\t\t<img class="card-img-top bg-dark" src="http://openweathermap.org/img/wn/${i}@2x.png" alt="Card image cap">\n\t\t\t\t<p class="pt-3">${r} ℃</p>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t\t<div class="card-body border-top d-flex justify-content-between">\n\t\t\t<div>\n\t\t\t\t<p>humidity</p>\n\t\t\t\t<p>${e}%</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p>Pressure</p>\n\t\t\t\t<p>${n} KPA</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p>Max temp</p>\n\t\t\t\t<p>${o} ℃</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p>Min temp</p>\n\t\t\t\t<p>${p} ℃</p>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>`;document.querySelector("#result-board").innerHTML=s})(r.feels_like,r.humidity,r.pressure,r.temp,i,a,r.temp_max,r.temp_min)}catch(t){alert("Please Enter the Valid name of a City")}}async function i(t){try{const e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t}&units=imperial&APPID=6afc4c4d6d160273a7559007309c6525`,{mode:"cors"}),n=await e.json(),r=n.main;let i=n.weather[0].icon,a=n.name;((t,e,n,r,i,a,o,p)=>{let c=new Date;let s=`<div class="card text-center">\n\t\t<div class="border-bottom p-2 d-flex justify-content-between">\n\t\t\t<p>City: ${a}</p>\n\t\t</div>\n\t\t<div class="d-flex justify-content-between">\n\t\t\t<div class="pl-5">\n\t\t\t\t<p class="bg-primary">\n\t\t\t \t\t${c.getUTCDate()} / ${c.getUTCMonth()+1} / ${c.getUTCFullYear()}\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\t${c.getUTCHours()}H : ${c.getUTCMinutes()}MM : ${c.getUTCSeconds()}S\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tFeels like ${t} ℉\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class="pr-5">\n\t\t\t\t<img class="card-img-top bg-dark" src="http://openweathermap.org/img/wn/${i}@2x.png" alt="Card image cap">\n\t\t\t\t<p class="pt-3">${r} ℉</p>\n\t\t\t</div>\n\n\t\t</div>\n\t\t\n\t\t<div class="card-body border-top d-flex justify-content-between">\n\t\t\t<div>\n\t\t\t\t<p>humidity</p>\n\t\t\t\t<p>${e}%</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p>Pressure</p>\n\t\t\t\t<p>${n} KPA</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p>Max temp</p>\n\t\t\t\t<p>${o} ℉</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<p>Min temp</p>\n\t\t\t\t<p>${p} ℉</p>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>`;document.querySelector("#result-board").innerHTML=s})(r.feels_like,r.humidity,r.pressure,r.temp,i,a,r.temp_max,r.temp_min)}catch(t){alert("Please Enter the Valid name of a City")}}var a=async function(t){try{const e=await fetch("https://api.giphy.com/v1/gifs/translate?api_key=ndz40WtH2Gz6iIkBbvf4K3laFPWRsByL&s=weather",{mode:"cors"}),n=(await e.json()).data.images.original.url;t.style.background=`url(${n})`}catch(t){console.log(t)}};document.querySelector("#search-button-Celsius");const o=document.querySelector("#over-all-wraper");document.querySelectorAll(".input-group-text").forEach(t=>{t.addEventListener("click",t=>{let e=document.querySelector("#inlineFormInputGroup").value,n=t.target.innerHTML;a(o),"Celsius"===n?r(e):i(e)})}),a(o)}]);