var e=function(){let e=[];return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":" live_AqVAdbSI3iq6qvheU2btDbPvPUx4FhPf0KO84Ew4BtwLMszLCefwpjCjD6X1ksjH"}}).then((e=>e.json())).then((t=>{e=t.map((e=>e.name)),console.log(e)})).catch((function(e){console.log(e)}))};document.querySelector(".breed-select"),document.querySelector(".loader"),document.querySelector(".error"),document.querySelector(".cat-info");e();
//# sourceMappingURL=index.26ee21b8.js.map
