(this.webpackJsonppicture=this.webpackJsonppicture||[]).push([[9],{216:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(0),l=a.n(r),i=a(26),s=a(50),c=a(48),u=a(212),o=a(105),p=a(214);function d(){var e=Object(n.a)(["\n    width: 100%;\n    border: #ddd dashed 1px;\n    margin-top: 20px;\n    padding: 10px;\n    background: #fff;\n        h3{text-align: center}\n.title{padding:8px}\n    img{\n        border: 1px solid #ddd;\n        border-radius: 4px;\n        padding: 5px;\n        width:150px;\n        height: auto;\n    }\n"]);return d=function(){return e},e}var g=u.a.Dragger,m=i.a.div(d()),f=Object(s.a)((function(){var e=Object(c.a)(),t=(e.UserStore,e.ImageStore);console.log(t.serverFile);var a={showUploadList:!1,beforeUpload:function(e){if(console.log(e),/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)){if(!(e.size>1048576))return t.setFile(e),t.setFileName(e.name),t.upload().then((function(){o.a.success("\u4e0a\u4f20\u6210\u529f")})).catch((function(){o.a.warning("\u4e0a\u4f20\u5931\u8d25")})),!1;o.a.warning("\u6700\u5927\u53ea\u80fd\u4e0a\u4f201M\u7684\u56fe\u7247")}else o.a.warning("\u53ea\u80fd\u4e0a\u4f20png,svg,jpg,jpeg,gif\u7c7b\u578b\u7684\u6587\u4ef6")}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,a,l.a.createElement("p",{className:"ant-upload-drag-icon"},l.a.createElement(p.a,null)),l.a.createElement("p",{className:"ant-upload-text"},"\u70b9\u51fb\u6216\u8005\u62d6\u62fd\u4e0a\u4f20\u56fe\u7247"),l.a.createElement("p",{className:"ant-upload-hint"},"\u4ec5\u652f\u6301png/gif/jpg/jpeg/svg\u683c\u5f0f\u7684\u56fe\u7247\uff0c\u56fe\u7247\u6700\u59271M")),t.serverFile?l.a.createElement(m,null,l.a.createElement("h3",null,"\u4e0a\u4f20\u7ed3\u679c"),l.a.createElement("div",{className:"title"},"\u5728\u7ebf\u5730\u5740:",l.a.createElement("a",{href:t.serverFile.attributes.url.attributes.url}," ",t.serverFile.attributes.url.attributes.url)),l.a.createElement("div",{className:"title"},"\u6587\u4ef6\u540d\uff1a",t.serverFile.attributes.fileName," "),l.a.createElement("div",{className:"title"}," \u56fe\u7247\u9884\u89c8\uff1a"),l.a.createElement("div",{className:"title"},l.a.createElement("img",{src:t.serverFile.attributes.url.attributes.url,alt:"\u4e0a\u4f20\u7684\u56fe\u7247"}))):null)}));function v(){var e=Object(n.a)(["\npadding: 20px 80px;\n.note{\nbackground: orange;\npadding: 10px ;\ncolor: #fff;\nmargin-bottom: 30px;\n}\n\n"]);return v=function(){return e},e}var b=i.a.div(v()),E=Object(s.a)((function(){var e=Object(c.a)().UserStore;return l.a.createElement(b,null,e&&e.currentUser?l.a.createElement("div",{className:"note"},e.currentUser.attributes.username,",\u8981\u4e0d\u8981\u4e0a\u4f20\u4e9b\u56fe\u7247\u5462?"):l.a.createElement("div",{className:"note"},"\u8bf7\u5148\u767b\u5f55\u518d\u4e0a\u4f20!!!"),l.a.createElement(f,null))}));t.default=E}}]);
//# sourceMappingURL=9.9d4dcd8d.chunk.js.map