(this.webpackJsonppicture=this.webpackJsonppicture||[]).push([[7],{125:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(t.push(o.value),!n||t.length!==n);r=!0);}catch(i){a=!0,l=i}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return t}}(e,n)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,"a",(function(){return a}))},211:function(e,n,t){"use strict";t.r(n);var r=t(125),a=t(25),l=t(0),o=t.n(l),u=t(26),i=t(32),c=t(48),s=t(3);function f(){var e=Object(a.a)(["\nbackground-color: #fff;\npadding: 40px;\nmargin-left: auto;\nmargin-right: auto;\nwidth:460px;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nborder: 1px dashed #ccc;\np{\ntext-align: center;\nfont-size: 18px;\nfont-weight: bold;\n}\nlabel{\ndisplay: flex;\nmargin-bottom: 16px;\njustify-content: center;\nalign-items: center;\n\nspan{\ndisplay: inline-block;\nfont-size: 12px;\nwidth: 6em;\nmargin-right: 20px;\n}\n.note{\npadding-left: 10px;\ncolor: orangered;\n}\ninput{\npadding: 4px;\nborder: 1px solid #ccc;\nborder-radius: 4px;\n&:focus{\nborder: 1px solid dodgerblue;\n}\n}\n}\n"]);return f=function(){return e},e}var p=u.a.div(f());n.default=function(){var e=Object(l.useState)(""),n=Object(r.a)(e,2),t=n[0],a=n[1],u=Object(l.useState)(""),f=Object(r.a)(u,2),d=f[0],b=f[1],m=Object(l.useState)(""),g=Object(r.a)(m,2),v=g[0],y=g[1],h=Object(l.useState)("\u7528\u6237\u540d\u5e94\u4e3a4-10\u7684\u5b57\u7b26"),j=Object(r.a)(h,2),x=j[0],O=j[1],E=Object(l.useState)("\u5bc6\u7801\u5e94\u4e3a8\u4f4d\u5b57\u7b26"),w=Object(r.a)(E,2),S=w[0],A=w[1],k=Object(l.useState)(""),N=Object(r.a)(k,2),P=N[0],B=N[1],I=Object(l.useRef)(null),K=Object(l.useRef)(null),R=Object(l.useRef)(null),V=Object(s.f)(),z=Object(c.a)().AuthStore,C=function(){"bingo!"===x&&"bingo!"===P&&(z.setUsername(t),z.setPassword(d),z.register().then((function(){V.push("/")}),(function(){console.log("\u6ce8\u518c\u5931\u8d25")})))},J=function(e){console.log("xxx"),"Enter"===e.key&&C()};return o.a.createElement(p,null,o.a.createElement("p",null,"\u6ce8\u518c"),o.a.createElement("label",{name:"useName"},o.a.createElement("span",null,"\u7528\u6237\u540d:"),o.a.createElement("input",{type:"text",defaultValue:t,ref:I,onBlur:function(){if(null!==I.current){var e=I.current.value.replace(" ","");I.current.value=e;var n=e.length;if(0===n)return void O("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a");if(n>10)return void O("\u7528\u6237\u540d\u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc710");if(n<4)return void O("\u7528\u6237\u540d\u957f\u5ea6\u4e0d\u80fd\u5c0f\u4e8e4");a(e),O("bingo!")}},onKeyPress:J}),o.a.createElement("span",{className:"note"}," ",x)),o.a.createElement("label",{name:"password"},o.a.createElement("span",null,"\u5bc6\u7801:"),o.a.createElement("input",{type:"password",defaultValue:v,ref:K,onBlur:function(){if(null!==K.current){var e=K.current.value.replace(" ",""),n=e.length;if(0===n)return void A("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a");if(8!==n)return void A("\u5bc6\u7801\u957f\u5ea6\u4e0d\u662f8\u4f4d");y(e),A("bingo!")}},onKeyPress:J}),o.a.createElement("span",{className:"note"},S)),o.a.createElement("label",{name:"confirm"},o.a.createElement("span",null,"\u786e\u8ba4\u5bc6\u7801:"),o.a.createElement("input",{type:"password",defaultValue:d,ref:R,onBlur:function(){if(null!==K.current){var e=R.current.value.replace(" ","");if(""===e)return void B("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a");if(e!==v)return void B("\u5bc6\u7801\u8f93\u5165\u4e0d\u4e00\u81f4");b(e),B("bingo!")}},onKeyPress:J}),o.a.createElement("span",{className:"note"},P)),o.a.createElement(i.a,{onClick:C},"\u6ce8\u518c"))}}}]);
//# sourceMappingURL=7.1120e664.chunk.js.map