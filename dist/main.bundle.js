(()=>{"use strict";function e(e,t,n,d){var o=document.createElement(e);for(var i in n)o.setAttribute(i,n[i]);return t.appendChild(o),d&&(o.innerHTML=d),o}window.ddoReady=function(t){t=t.contentDocument,console.log(t),e("style",t.head,{type:"text/css"},"\n  body {\n    background:red;\n  }\n"),t=t.contentDocument},document.getElementById("ddo-iframe")||e("iframe",document.body,{id:"ddo-iframe",style:"display:block;width:30vw;min-width:400px;position:fixed;top:0;left:0;border:none;height:100vh;",onload:"ddoReady(this)"})})();
//# sourceMappingURL=main.bundle.js.map