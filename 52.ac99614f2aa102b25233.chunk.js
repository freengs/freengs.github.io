webpackJsonp([52],{lJtr:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),u=function(){},i=t("D3O6"),r=t("WDs4"),o=t("KDcH"),s=t("xTcG"),a=t("3pCe"),h=t("3/gQ"),p=function(){function l(l,n){this.domRenderer=l,this.renderer2=n,this.onCrop=new e.m,this.aspectRatio=1,this.autoCropArea=.8,this.width=400,this.height=300,this.defaultOption={width:this.width,height:this.height,aspectRatio:1,url:"",cropperWidth:this.width*this.autoCropArea,cropperHeight:this.width*this.autoCropArea*this.aspectRatio},this.rotate=0,this.scaleX=this.scaleY=1,this.zoomable=!0,this.minCropperHeight=this.minCropperWidth=20,this.zoomRatioStep=.1,this.zoomRatio=1,this.x=0,this.y=0,this.points=["e","n","w","s","ne","nw","sw","se"],this.lines=["e","n","w","s"],this.touchEvent=this.domRenderer.getTouchEvent()}return l.prototype.ngOnInit=function(){this.defaultOption=Object.assign(this.defaultOption,this.data),this.width=this.defaultOption.width,this.height=this.defaultOption.height,this.aspectRatio=this.defaultOption.aspectRatio,this.cropperHeight=this.defaultOption.cropperHeight*this.aspectRatio*this.autoCropArea,this.cropperWidth=this.defaultOption.cropperWidth*this.autoCropArea},l.prototype.ngAfterViewInit=function(){var l=this;this.naturalLeft=this.x=this.left=(this.width-this.cropperWidth)/2,this.naturalTop=this.y=this.top=(this.height-this.cropperHeight)/2,this.setCropperCanvas(),this.naturalHeight=this.height,this.naturalWidth=this.width,this.cropper=this.cropperViewChild.nativeElement,this.container=this.containerViewChild.nativeElement,this.zoomable&&this.domRenderer.on(this.container,"wheel mousewheel DOMMouseScroll",function(n){return l.onWheel(n)})},l.prototype.zoomTo=function(l,n){var t=this.width,e=this.height;l<.1&&(l=.1);var u=this.naturalWidth*l,i=this.naturalHeight*l;if(n){var r=this.domRenderer.getRect(this.container);this.left+=(n.pageX-r.left-(this.x-this.left))/t*(u-t),this.top+=(n.pageY-r.top-(this.y-this.top))/e*(i-e)}else this.left+=(u-t)/2,this.top+=(i-e)/2;this.width=u,this.height=i,this.setCropperCanvas(),this.onCropperChange()},l.prototype.getTransform=function(l){void 0===l&&(l={});var n=[],t=l.translateX,e=l.translateY,u=l.rotate,i=l.scaleX,r=l.scaleY;return this.isNumber(t)&&0!==t&&n.push("translateX("+t+"px)"),this.isNumber(e)&&0!==e&&n.push("translateY("+e+"px)"),this.isNumber(u)&&0!==u&&n.push("rotate("+u+"deg)"),this.isNumber(i)&&1!==i&&n.push("scaleX("+i+")"),this.isNumber(r)&&1!==r&&n.push("scaleY("+r+")"),n.length?n.join(" "):"none"},l.prototype.setPosition=function(l,n){var t=this,e=this.cropperWidth+this.x,u=this.cropperHeight+this.y,i=function(){t.cropperHeight-=n,t.y+=n,t.cropperHeight=Math.min(u,t.cropperHeight),t.y=Math.max(0,t.y),!t.y&&n>0||t.y?t.top+=n:t.y||(t.top=t.oldTop-t.maxTop)},r=function(){t.cropperWidth+=l,t.cropperWidth=Math.min(t.cropperWidth,t.naturalWidth-t.x)},o=function(){t.cropperHeight+=n,t.cropperHeight=Math.min(t.cropperHeight,t.naturalHeight-t.y)},s=function(){t.cropperWidth-=l,t.x+=l,t.cropperWidth=Math.min(e,t.cropperWidth),t.x=Math.max(0,t.x),!t.x&&l>0||t.x?t.left+=l:t.x||(t.left=t.oldLeft-t.maxLeft)};switch(this.direction){case"e":r();break;case"w":s();break;case"s":o();break;case"n":i();break;case"ne":i(),r();break;case"nw":i(),s();break;case"sw":o(),s();break;case"se":r(),o()}},l.prototype.onTouchstart=function(l,n){var t=this;void 0===n&&(n={}),l=this.domRenderer.getPointer(l)[0],this.startPoint={pageX:l.pageX,pageY:l.pageY},n.direction&&(this.pointPressed=!0,this.direction=n.direction),n.cropper&&(this.cropperPressed=!0),n.overlay&&(this.overlayPressed=!0),this.maxLeft=this.x,this.maxTop=this.y,this.oldLeft=this.left,this.oldTop=this.top,this.documentTouchmoveListener=this.renderer2.listen("body",this.touchEvent.touchmove,function(l){return t.onTouchmove(l)}),this.documentTouchendListener=this.renderer2.listen("body",this.touchEvent.touchend,function(){return t.onTouchend()}),l.preventDefault(),l.stopPropagation()},l.prototype.onTouchmove=function(l){var n=(l=this.domRenderer.getPointer(l)[0]).pageX-this.startPoint.pageX,t=l.pageY-this.startPoint.pageY,e=this.naturalWidth-this.cropperWidth,u=this.naturalHeight-this.cropperHeight;this.pointPressed&&this.setPosition(n,t),this.cropperPressed&&(this.x+=n,this.y+=t,this.x=Math.max(0,Math.min(e,this.x)),this.y=Math.max(0,Math.min(u,this.y)),this.x>0&&this.x<e&&(this.left+=n),this.y>0&&this.y<u&&(this.top+=t),this.x?this.x>=e&&(this.left=this.oldLeft+(this.naturalWidth-this.maxLeft-this.cropperWidth)):this.left=this.oldLeft-this.maxLeft,this.y?this.y>=e&&(this.top=this.oldTop+(this.naturalHeight-this.maxTop-this.cropperHeight)):this.top=this.oldTop-this.maxTop),this.overlayPressed&&!this.pointPressed&&(this.left-=n,this.top-=t),(this.pointPressed||this.cropperPressed)&&(this.cropperHeight=Math.max(this.minCropperWidth,Math.min(this.naturalHeight,this.cropperHeight)),this.cropperWidth=Math.max(this.minCropperHeight,Math.min(this.naturalWidth,this.cropperWidth))),(this.pointPressed||this.cropperPressed||this.overlayPressed)&&(this.setCropperCanvas(),this.startPoint={pageX:l.pageX,pageY:l.pageY},this.onCropperChange())},l.prototype.onTouchend=function(){this.cropperPressed=!1,this.pointPressed=!1,this.overlayPressed=!1,this.maxLeft=this.x,this.maxTop=this.y,this.unbindCanvasTouchListener()},l.prototype.onCropperChange=function(){this.onCrop.emit({top:parseInt(this.y+"",10),left:parseInt(this.x+"",10),width:this.cropperWidth,height:this.cropperHeight,scale:this.zoomRatio,canvasData:this.getCanvasData()})},l.prototype.onWheel=function(l){(l=l||window.event).wheelDelta?l.wheelDelta>0?this.zoomRatio+=this.zoomRatioStep:l.wheelDelta<0&&(this.zoomRatio-=this.zoomRatioStep):l.detail&&(l.detail<0?this.zoomRatio+=this.zoomRatioStep:l.detail>0&&(this.zoomRatio-=this.zoomRatioStep)),this.zoomTo(this.zoomRatio,l),l.preventDefault(),l.stopPropagation()},l.prototype.getCanvasData=function(){var l=this.cropperWidth,n=this.cropperHeight,t=new Image;return t.src=this.defaultOption.url,this.isNumber(this.rotate),this.canvas=document.createElement("canvas"),this.canvas.width=l,this.canvas.height=n,this.ctx=this.canvas.getContext("2d"),this.ctx.save(),this.ctx.drawImage(t,-this.left,-this.top,this.width,this.height),this.ctx.restore(),this.canvas.toDataURL("image/png")},l.prototype.setCropperCanvas=function(){this.cropperStyle={width:this.cropperWidth+"px",height:this.cropperHeight+"px",transform:this.getTransform({translateX:this.x,translateY:this.y})},this.transformStyle={width:this.width+"px",height:this.height+"px",transform:this.getTransform({translateX:-this.left,translateY:-this.top,rotate:this.rotate,scaleX:this.scaleX,scaleY:this.scaleY})},this.cropperPressed||this.pointPressed||(this.sourceStyle={width:this.width+"px",height:this.height+"px",transform:this.getTransform({translateX:Math.round(this.x-this.left),translateY:Math.round(this.y-this.top),rotate:this.rotate,scaleX:this.scaleX,scaleY:this.scaleY})})},l.prototype.isNumber=function(l){return"number"==typeof l&&!isNaN(l)},l.prototype.unbindCanvasTouchListener=function(){this.canvasTouchstartListener&&(this.canvasTouchstartListener(),this.canvasTouchstartListener=null)},l.prototype.unbindDocumentTouchListener=function(){this.documentTouchendListener&&(this.documentTouchendListener(),this.documentTouchendListener=null),this.documentTouchendListener&&(this.documentTouchendListener(),this.documentTouchendListener=null)},l.prototype.ngOnDestroy=function(){this.unbindCanvasTouchListener(),this.unbindDocumentTouchListener()},l}(),c=function(){},_=t("Un6q"),d=e._1({encapsulation:2,styles:[],data:{}});function f(l){return e._26(0,[(l()(),e._3(0,0,null,null,0,"span",[],[[8,"className",0]],[[null,"touchstart"],[null,"mousedown"]],function(l,n,t){var e=!0,u=l.component;return"touchstart"===n&&(e=!1!==u.onTouchstart(t,{direction:l.context.$implicit})&&e),"mousedown"===n&&(e=!1!==u.onTouchstart(t,{direction:l.context.$implicit})&&e),e},null,null))],null,function(l,n){l(n,0,0,e._6(1,"free-cropper-line free-line-",n.context.$implicit,""))})}function m(l){return e._26(0,[(l()(),e._3(0,0,null,null,0,"span",[],[[8,"className",0]],[[null,"touchstart"],[null,"mousedown"]],function(l,n,t){var e=!0,u=l.component;return"touchstart"===n&&(e=!1!==u.onTouchstart(t,{direction:l.context.$implicit})&&e),"mousedown"===n&&(e=!1!==u.onTouchstart(t,{direction:l.context.$implicit})&&e),e},null,null))],null,function(l,n){l(n,0,0,e._6(1,"free-cropper-point free-point-",n.context.$implicit,""))})}function g(l){return e._26(0,[e._22(402653184,1,{cropperViewChild:0}),e._22(402653184,2,{containerViewChild:0}),(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(3,0,[[2,0],["container",1]],null,36,"div",[["class","free-cropper"],["tabindex","10"]],[[4,"width","px"],[4,"height","px"]],[[null,"touchstart"],[null,"mousedown"]],function(l,n,t){var e=!0,u=l.component;return"touchstart"===n&&(e=!1!==u.onTouchstart(t,{overlay:!0})&&e),"mousedown"===n&&(e=!1!==u.onTouchstart(t,{overlay:!0})&&e),e},null,null)),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(5,0,null,null,7,"div",[["class","free-cropper-wrapper"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(7,0,null,null,4,"div",[["class","free-cropper-canvas"]],null,null,null,null,null)),e._2(8,278528,null,0,_.m,[e.r,e.k,e.B],{ngStyle:[0,"ngStyle"]},null),(l()(),e._24(-1,null,["\n          "])),(l()(),e._3(10,0,null,null,0,"img",[["alt",""]],[[8,"src",4],[4,"width","px"],[4,"height","px"]],null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(14,0,null,null,0,"div",[["class","free-cropper-drag-box free-cropper-modal free-cropper-move"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(16,0,[[1,0],["cropper",1]],null,22,"div",[["class","free-cropper-box"]],null,[[null,"touchstart"],[null,"mousedown"]],function(l,n,t){var e=!0,u=l.component;return"touchstart"===n&&(e=!1!==u.onTouchstart(t,{cropper:!0})&&e),"mousedown"===n&&(e=!1!==u.onTouchstart(t,{cropper:!0})&&e),e},null,null)),e._2(17,278528,null,0,_.m,[e.r,e.k,e.B],{ngStyle:[0,"ngStyle"]},null),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(19,0,null,null,4,"span",[["class","free-cropper-view-box"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n          "])),(l()(),e._3(21,0,null,null,1,"img",[],[[8,"src",4]],null,null,null,null)),e._2(22,278528,null,0,_.m,[e.r,e.k,e.B],{ngStyle:[0,"ngStyle"]},null),(l()(),e._24(-1,null,["\n        "])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(25,0,null,null,0,"span",[["class","free-cropper-dashed free-dashed-h"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(27,0,null,null,0,"span",[["class","free-cropper-dashed free-dashed-v"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(29,0,null,null,0,"span",[["class","free-cropper-center"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(31,0,null,null,0,"span",[["class","free-cropper-face free-cropper-move"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e.Y(16777216,null,null,1,null,f)),e._2(34,802816,null,0,_.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e._24(-1,null,["\n        "])),(l()(),e.Y(16777216,null,null,1,null,m)),e._2(37,802816,null,0,_.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n    "])),(l()(),e._24(-1,null,["\n  "]))],function(l,n){var t=n.component;l(n,8,0,t.sourceStyle),l(n,17,0,t.cropperStyle),l(n,22,0,t.transformStyle),l(n,34,0,t.lines),l(n,37,0,t.points)},function(l,n){var t=n.component;l(n,3,0,t.defaultOption.width,t.defaultOption.height),l(n,10,0,t.defaultOption.url,t.width,t.height),l(n,21,0,t.defaultOption.url)})}var b=t("mgSq"),v=t("nUUg"),y=t("bxa5"),x=t("cgMo"),w=function(){function l(){this.display="block"}return l.prototype.ngOnInit=function(){},l.prototype.onCrop=function(l){this.cropImage=l.canvasData},l}(),C=e._1({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"fadeInUpState",definitions:[{type:0,name:"in",styles:{type:6,styles:{opacity:1,transform:"translate3d(0, 0, 0)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"translate3d(0, 100%, 0)"},offset:null},{type:4,styles:null,timings:".4s cubic-bezier(.25,.8,.25,1)"}],options:null}],options:{}}]}});function T(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,i.a,[r.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("PROPERTY")))})}function O(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,i.a,[r.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("TYPE")))})}function P(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,i.a,[r.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DESCRIPTION")))})}function R(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._24(-1,null,["Object"]))],null,null)}function E(l){return e._26(0,[(l()(),e._24(0,null,["\n                  ","\uff1a\n                  {\n                    width: '","',\n                    height: '","',\n                    aspectRatio: '","',\n                    url: '","',\n                    cropperWidth: '","',\n                    cropperHeight: '","'\n                  }\n                "])),e._19(131072,i.a,[r.a,e.h]),e._19(131072,i.a,[r.a,e.h]),e._19(131072,i.a,[r.a,e.h]),e._19(131072,i.a,[r.a,e.h]),e._19(131072,i.a,[r.a,e.h]),e._19(131072,i.a,[r.a,e.h]),e._19(131072,i.a,[r.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DEMO.CROPPER.DATA.0")),e._25(n,0,1,e._17(n,2).transform("DEMO.CROPPER.DATA.1")),e._25(n,0,2,e._17(n,3).transform("DEMO.CROPPER.DATA.2")),e._25(n,0,3,e._17(n,4).transform("DEMO.CROPPER.DATA.3")),e._25(n,0,4,e._17(n,5).transform("DEMO.CROPPER.DATA.4")),e._25(n,0,5,e._17(n,6).transform("DEMO.CROPPER.DATA.5")),e._25(n,0,6,e._17(n,7).transform("DEMO.CROPPER.DATA.6")))})}function D(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._24(-1,null,["Boolean"]))],null,null)}function M(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,i.a,[r.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DEMO.CROPPER.OPTION.0")))})}function W(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._24(-1,null,["number"]))],null,null)}function Y(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,i.a,[r.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DEMO.CROPPER.OPTION.1")))})}function k(l){return e._26(0,[(l()(),e._3(0,0,null,null,207,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n  "])),(l()(),e._3(2,0,null,null,200,"div",[["class","row"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(4,0,null,null,9,"div",[["fGrid","12"]],null,null,null,null,null)),e._21(512,null,o.a,o.a,[e.B]),e._2(6,4210688,null,0,s.a,[e.k,o.a],{grid:[0,"grid"]},null),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(8,0,null,null,2,"p",[["style","padding-left: 1rem;"]],null,null,null,null,null)),(l()(),e._24(9,null,["\n        ","\n      "])),e._19(131072,i.a,[r.a,e.h]),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(12,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e._24(-1,null,["\n    "])),(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(15,0,null,null,46,"div",[["class","free-demo-board"],["fGrid","12"]],null,null,null,null,null)),e._21(512,null,o.a,o.a,[e.B]),e._2(17,4210688,null,0,s.a,[e.k,o.a],{grid:[0,"grid"]},null),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(19,0,null,null,41,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(21,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),e._24(-1,null,["Default"])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(24,0,null,null,35,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,a.d,a.b)),e._2(25,1097728,null,0,h.b,[e.B],{theme:[0,"theme"],direction:[1,"direction"]},null),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(27,0,null,0,22,"free-tab",[["header","PREVIEW"]],null,null,null,a.c,a.a)),e._2(28,4308992,null,1,h.a,[h.b],{header:[0,"header"]},null),e._22(603979776,1,{templates:1}),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(31,0,null,0,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n            "])),(l()(),e._3(33,0,null,null,6,"div",[["class","col-md-8"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n                "])),(l()(),e._3(35,0,null,null,3,"free-cropper",[],null,[[null,"onCrop"]],function(l,n,t){var e=!0;return"onCrop"===n&&(e=!1!==l.component.onCrop(t)&&e),e},g,d)),e._21(512,null,o.a,o.a,[e.B]),e._2(37,4440064,null,0,p,[o.a,e.B],{data:[0,"data"]},{onCrop:"onCrop"}),e._20(38,{url:0,aspectRatio:1}),(l()(),e._24(-1,null,["\n            "])),(l()(),e._24(-1,null,["\n            "])),(l()(),e._3(41,0,null,null,6,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n              "])),(l()(),e._3(43,0,null,null,3,"p",[["style","margin-left: 10px;"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n                "])),(l()(),e._3(45,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),e._24(-1,null,["\n              "])),(l()(),e._24(-1,null,["\n            "])),(l()(),e._24(-1,null,["\n          "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(51,0,null,0,7,"free-tab",[["header","CODE"]],null,null,null,a.c,a.a)),e._2(52,4308992,null,1,h.a,[h.b],{header:[0,"header"]},null),e._22(603979776,2,{templates:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(55,0,null,0,2,"free-code",[["lang","html"]],null,null,null,b.b,b.a)),e._2(56,4243456,null,0,v.a,[e.B],{lang:[0,"lang"]},null),(l()(),e._24(57,0,['\n              <free-cropper [data]="{url: \'assets/images/picture.jpg\', aspectRatio: (2 / 3)}"\n               (onCrop)="onCrop($event)"<>/free-cropper>\n\n              <img src="','" alt="">\n            '])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n    "])),(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(63,0,null,null,138,"div",[["class","free-demo-board"],["fGrid","12"]],null,null,null,null,null)),e._21(512,null,o.a,o.a,[e.B]),e._2(65,4210688,null,0,s.a,[e.k,o.a],{grid:[0,"grid"]},null),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(67,0,null,null,17,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(69,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),e._24(-1,null,["Import"])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(72,0,null,null,11,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,a.d,a.b)),e._2(73,1097728,null,0,h.b,[e.B],{theme:[0,"theme"],direction:[1,"direction"]},null),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(75,0,null,0,7,"free-tab",[["header","CODE"]],null,null,null,a.c,a.a)),e._2(76,4308992,null,1,h.a,[h.b],{header:[0,"header"]},null),e._22(603979776,3,{templates:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(79,0,null,0,2,"free-code",[["lang","typescript"]],null,null,null,b.b,b.a)),e._2(80,4243456,null,0,v.a,[e.B],{lang:[0,"lang"]},null),(l()(),e._24(-1,0,["\n              import {CropperModule} from 'freeng/freeng';\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n\n      "])),(l()(),e._3(86,0,null,null,3,"h3",[["class","free-head-title"]],null,null,null,null,null)),(l()(),e._24(87,null,["",""])),e._19(131072,i.a,[r.a,e.h]),(l()(),e._3(89,0,null,null,0,"span",[["class","symbol component"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(91,0,null,null,109,"div",[["class","free-demo-row"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(93,0,null,null,1,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),e._24(-1,null,["free-cropper"])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(96,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e._24(97,null,["",""])),e._19(131072,i.a,[r.a,e.h]),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(100,0,null,null,99,"free-table",[],null,null,null,y.i,y.c)),e._2(101,4308992,null,0,x.c,[e.B],null,null),(l()(),e._24(-1,null,["\n          "])),(l()(),e._3(103,0,null,null,21,"free-table-header",[],null,null,null,y.k,y.e)),e._2(104,49152,null,0,x.e,[],null,null),(l()(),e._24(-1,null,["\n            "])),(l()(),e._3(106,0,null,null,17,"free-table-row",[],null,null,null,y.l,y.f)),e._2(107,49152,null,0,x.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(109,0,null,0,3,"free-table-head",[],null,null,null,y.j,y.d)),e._2(110,4308992,null,1,x.d,[x.c,e.k],null,null),e._22(335544320,4,{template:0}),(l()(),e.Y(0,[[4,2]],0,0,null,T)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(114,0,null,0,3,"free-table-head",[],null,null,null,y.j,y.d)),e._2(115,4308992,null,1,x.d,[x.c,e.k],null,null),e._22(335544320,5,{template:0}),(l()(),e.Y(0,[[5,2]],0,0,null,O)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(119,0,null,0,3,"free-table-head",[],null,null,null,y.j,y.d)),e._2(120,4308992,null,1,x.d,[x.c,e.k],null,null),e._22(335544320,6,{template:0}),(l()(),e.Y(0,[[6,2]],0,0,null,P)),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,null,["\n          "])),(l()(),e._24(-1,null,["\n\n          "])),(l()(),e._3(126,0,null,null,72,"free-table-body",[],null,null,null,y.g,y.a)),e._2(127,4308992,null,1,x.a,[x.c],null,null),e._22(603979776,7,{_rows:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(130,0,null,0,21,"free-table-row",[],null,null,null,y.l,y.f)),e._2(131,49152,[[7,4]],0,x.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(133,0,null,0,3,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(134,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,8,{template:0}),(l()(),e._24(-1,0,["data"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(138,0,null,0,5,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(139,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,9,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[9,2]],0,0,null,R)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(145,0,null,0,5,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(146,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,10,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[10,2]],0,0,null,E)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(153,0,null,0,21,"free-table-row",[],null,null,null,y.l,y.f)),e._2(154,49152,[[7,4]],0,x.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(156,0,null,0,3,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(157,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,11,{template:0}),(l()(),e._24(-1,0,["zoomable"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(161,0,null,0,5,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(162,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,12,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[12,2]],0,0,null,D)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(168,0,null,0,5,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(169,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,13,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[13,2]],0,0,null,M)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(176,0,null,0,21,"free-table-row",[],null,null,null,y.l,y.f)),e._2(177,49152,[[7,4]],0,x.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(179,0,null,0,3,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(180,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,14,{template:0}),(l()(),e._24(-1,0,["aspectRatio"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(184,0,null,0,5,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(185,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,15,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[15,2]],0,0,null,W)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(191,0,null,0,5,"free-table-cell",[],null,null,null,y.h,y.b)),e._2(192,4308992,null,1,x.b,[x.g,e.k],null,null),e._22(335544320,16,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[16,2]],0,0,null,Y)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n    "])),(l()(),e._24(-1,null,["\n  "])),(l()(),e._24(-1,null,["\n  "])),(l()(),e._3(204,0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),e._24(205,null,["FreeNG - ",""])),e._19(131072,i.a,[r.a,e.h]),(l()(),e._24(-1,null,["\n"])),(l()(),e._24(-1,null,["\n\n"]))],function(l,n){l(n,6,0,"12"),l(n,17,0,"12"),l(n,25,0,"line","right"),l(n,28,0,"PREVIEW"),l(n,37,0,l(n,38,0,"assets/images/picture.jpg",2/3)),l(n,52,0,"CODE"),l(n,56,0,"html"),l(n,65,0,"12"),l(n,73,0,"line","right"),l(n,76,0,"CODE"),l(n,80,0,"typescript"),l(n,101,0),l(n,110,0),l(n,115,0),l(n,120,0),l(n,127,0),l(n,134,0),l(n,139,0),l(n,146,0),l(n,157,0),l(n,162,0),l(n,169,0),l(n,180,0),l(n,185,0),l(n,192,0)},function(l,n){var t=n.component;l(n,9,0,e._25(n,9,0,e._17(n,10).transform("DEMO.CROPPER.DESCRIPTION"))),l(n,45,0,e._6(1,"",t.cropImage,"")),l(n,57,0,t.cropImage),l(n,87,0,e._25(n,87,0,e._17(n,88).transform("API-OPTION"))),l(n,97,0,e._25(n,97,0,e._17(n,98).transform("COMPONENT.CROPPER"))),l(n,205,0,e._25(n,205,0,e._17(n,206).transform("MOTTO")))})}var H=e.Z("free-main-cropper",w,function(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"free-main-cropper",[],[[40,"@fadeInUpState",0],[4,"display",null]],null,null,k,C)),e._2(1,114688,null,0,w,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e._17(n,1).fadeInUpState,e._17(n,1).display)})},{},{},[]),L=t("a3e3"),I=t("t0d0"),S=t("R08E"),A=t("Qg/J"),N=t("maBJ"),X=t("9ayU"),z=t("kJXZ"),B=t("PQ8Y"),j=t("UHIZ"),U=function(){},F=t("9Qcf"),J=t("RqK6");t.d(n,"MainCropperModuleNgFactory",function(){return V});var V=e._0(u,[],function(l){return e._14([e._15(512,e.j,e.W,[[8,[H]],[3,e.j],e.v]),e._15(4608,_.l,_.k,[e.s,[2,_.t]]),e._15(4608,L.b,L.a,[]),e._15(4608,I.a,I.b,[]),e._15(4608,S.b,S.a,[]),e._15(4608,A.b,A.a,[]),e._15(4608,r.a,r.a,[N.a,L.b,I.a,S.b,A.b,r.b,r.c]),e._15(512,_.b,_.b,[]),e._15(512,X.d,X.d,[]),e._15(512,h.c,h.c,[]),e._15(512,v.b,v.b,[]),e._15(512,z.c,z.c,[]),e._15(512,x.f,x.f,[]),e._15(512,s.b,s.b,[]),e._15(512,c,c,[]),e._15(512,B.d,B.d,[]),e._15(512,j.n,j.n,[[2,j.s],[2,j.k]]),e._15(512,U,U,[]),e._15(512,F.a,F.a,[]),e._15(512,J.a,J.a,[]),e._15(512,u,u,[]),e._15(1024,j.i,function(){return[[{path:"",component:w}]]},[]),e._15(256,r.c,void 0,[]),e._15(256,r.b,void 0,[])])})}});
//# sourceMappingURL=52.ac99614f2aa102b25233.chunk.js.map