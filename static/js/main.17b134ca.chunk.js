(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=(n(15),n(5)),l=n(4),s=n(3),u=n(8),f=(n(18),[function(e){var t=e.style;return r.a.createElement(s.a.div,{className:"page",style:Object(l.a)({},t,{background:"linear-gradient(123deg, rgba(255,189,91,1) 0%, rgba(255,137,184,1) 100%)"})},"YY")},function(e){var t=e.style;return r.a.createElement(s.a.div,{className:"page",style:Object(l.a)({},t,{background:"lightblue"})},"B")},function(e){var t=e.style;return r.a.createElement(s.a.div,{className:"page",style:Object(l.a)({},t,{background:"lightgreen"})},"C")}]);var m=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(0),l=Object(i.a)(c,2),m=l[0],d=l[1];console.log("i",n,"lastI",m);var g=function(e){console.log("yolo",e),e<0||e>=f.length||(d(function(){return n}),o(function(){return e}),console.log("yolo2"))},b=Object(s.b)(n,function(e){return e},{from:{opacity:0,transform:"translate3d(".concat(m<n?"100%":"-100%",",0,0)")},enter:{opacity:1,transform:"translate3d(0%,0,0)"},leave:{opacity:0,transform:"translate3d(".concat(m<n?"-50%":"50%"," ,0,0)")}}),v=function(e){"ArrowRight"===e.key?g(n+1):"ArrowLeft"===e.key&&g(n-1)};Object(a.useEffect)(function(){return window.addEventListener("keydown",v),function(){window.removeEventListener("keydown",v)}});var w=Object(u.a)({onSwipedLeft:function(){return g(n+1)},onSwipedRight:function(){return g(n-1)}});return r.a.createElement("div",Object.assign({className:"simple-trans-main"},w),r.a.createElement("div",{className:"controls"},r.a.createElement("button",{className:"left",onClick:function(){return g(n-1)}},"left"),r.a.createElement("button",{className:"right",onClick:function(){return g(n+1)}},"right")),b.map(function(e){var t=e.item,n=e.props,a=e.key,o=f[t];return r.a.createElement(o,{key:a,style:n})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,1,2]]]);
//# sourceMappingURL=main.17b134ca.chunk.js.map