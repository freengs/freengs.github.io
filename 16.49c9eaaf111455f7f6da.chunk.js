webpackJsonp([16],{qEnM:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("LMZF"),t=function(){},_=u("D3O6"),a=u("WDs4"),r=u("KDcH"),o=u("xTcG"),i=u("3pCe"),c=u("3/gQ"),s=u("mgSq"),f=u("nUUg"),d=function(l){this.steps=l},p=function(){function l(){this.onStepChange=new e.m,this.activeIndexChange=new e.m,this.model=[],this.activeIndex=0,this.readonly=!0}return Object.defineProperty(l.prototype,"activeIndex",{get:function(){return this._activeIndex},set:function(l){l=Math.abs(l),this.model.length>0&&(l%=this.model.length),this._activeIndex=l},enumerable:!0,configurable:!0}),l.prototype.ngAfterContentInit=function(){var l=this.stepContentComponents.toArray(),n=0;if(l.length>0)for(var u=0,e=l;u<e.length;u++)e[u].index=n,n++},l.prototype.onClick=function(l,n,u){if(!this.readonly){this.activeIndex=u;var e={originEvent:l,item:n,activeIndex:this.activeIndex};n.click&&n.click(e),this.activeIndexChange.emit(this.activeIndex),this.onStepChange.emit(e)}},l}(),h=function(){},b=u("Un6q"),m=u("9ayU"),g=e._1({encapsulation:2,styles:[],data:{}});function I(l){return e._26(0,[(l()(),e._3(0,0,null,null,3,"div",[["class","free-step-content"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n      "])),e._16(null,0),(l()(),e._24(-1,null,["\n    "]))],null,null)}function v(l){return e._26(0,[(l()(),e._24(-1,null,["\n    "])),(l()(),e.Y(16777216,null,null,1,null,I)),e._2(2,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._24(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,u.index==u.steps.activeIndex)},null)}var x=e._1({encapsulation:2,styles:[],data:{}});function k(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"span",[["class","free-step-title"]],null,null,null,null,null)),(l()(),e._24(1,null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.label)})}function S(l){return e._26(0,[(l()(),e._24(0,null,["",""]))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.label)})}function E(l){return e._26(0,[(l()(),e._3(0,0,null,null,11,"li",[],[[2,"active",null],[2,"free-step-complete",null],[2,"free-step-actived",null]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onClick(u,l.context.$implicit,l.context.index)&&e),e},null,null)),(l()(),e._24(-1,null,["\n            "])),(l()(),e._3(2,0,null,null,1,"span",[["class","free-step"]],null,null,null,null,null)),(l()(),e._24(3,null,["",""])),(l()(),e._24(-1,null,["\n            "])),(l()(),e.Y(16777216,null,null,1,null,k)),e._2(6,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),e._24(-1,null,["\n            "])),(l()(),e.Y(0,[["temp",2]],null,0,null,S)),(l()(),e._24(-1,null,["\n            "])),(l()(),e._3(10,0,null,null,0,"span",[["class","free-step-chevron"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n          "]))],function(l,n){l(n,6,0,n.component.wired,e._17(n,8))},function(l,n){var u=n.component;l(n,0,0,n.context.index===u.activeIndex,n.context.index<u.activeIndex,!u.readonly),l(n,3,0,n.context.index)})}function y(l){return e._26(0,[(l()(),e._3(0,0,null,null,3,"div",[["class","free-steps-content"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),e._16(null,0),(l()(),e._24(-1,null,["\n      "]))],null,null)}function C(l){return e._26(0,[(l()(),e._3(0,0,null,null,3,"div",[["class","free-steps-footer"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),e._16(null,1),(l()(),e._24(-1,null,["\n      "]))],null,null)}function O(l){return e._26(0,[(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(1,0,null,null,16,"div",[["class","free-steps"]],[[2,"free-steps-wired",null]],null,null,null,null)),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(3,0,null,null,7,"div",[["class","free-steps-nav"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(5,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),e._24(-1,null,["\n          "])),(l()(),e.Y(16777216,null,null,1,null,E)),e._2(8,802816,null,0,b.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e._24(-1,null,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e.Y(16777216,null,null,1,null,y)),e._2(13,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._24(-1,null,["\n      "])),(l()(),e.Y(16777216,null,null,1,null,C)),e._2(16,16384,null,0,b.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e._24(-1,null,["\n    "])),(l()(),e._24(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,8,0,u.model),l(n,13,0,u.stepContentComponents),l(n,16,0,u.footerComponent)},function(l,n){l(n,1,0,n.component.wired)})}var P=u("htcw"),w=u("7rIk"),B=u("CiOS"),T=u("PQ8Y"),D=u("bxa5"),Y=u("cgMo"),M=function(){function l(){this.display="block",this.activeIndex=0,this.wiredIndex=0,this.stepIndex=0,this.items=[{label:"Step 1"},{label:"Step 2"},{label:"Step 3"}],this.steps=[{label:"Step 1"},{label:"Step 2"},{label:"Step 3",click:function(l){alert(l.activeIndex)}}]}return l.prototype.ngOnInit=function(){},l.prototype.toStep=function(l){this.activeIndex+=l,this.activeIndex>=this.items.length&&(this.activeIndex=this.items.length-1)},l.prototype.toClickStep=function(l){console.log(this.stepIndex),this.stepIndex+=l,this.stepIndex>=this.items.length&&(this.stepIndex=this.items.length-1)},l.prototype.toWiredStep=function(l){this.wiredIndex+=l,this.wiredIndex>=this.items.length&&(this.wiredIndex=this.items.length-1)},l}(),N=e._1({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"fadeInUpState",definitions:[{type:0,name:"in",styles:{type:6,styles:{opacity:1,transform:"translate3d(0, 0, 0)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"translate3d(0, 100%, 0)"},offset:null},{type:4,styles:null,timings:".4s cubic-bezier(.25,.8,.25,1)"}],options:null}],options:{}}]}});function j(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("PROPERTY")))})}function R(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("TYPE")))})}function J(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DESCRIPTION")))})}function W(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._24(-1,null,["Array"]))],null,null)}function V(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DEMO.STEPS.OPTION.0")))})}function U(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._24(-1,null,["Boolean"]))],null,null)}function q(l){return e._26(0,[(l()(),e._24(0,null,["\n                  ","(primary/info/success/warning/danger)\n                "])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DEMO.STEPS.OPTION.1")))})}function F(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._24(-1,null,["Number"]))],null,null)}function A(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DEMO.STEPS.OPTION.2")))})}function G(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e._24(-1,null,["Boolean"]))],null,null)}function Q(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DEMO.STEPS.OPTION.3")))})}function Z(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("EVENT")))})}function H(l){return e._26(0,[(l()(),e._24(0,null,["",""])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DESCRIPTION")))})}function $(l){return e._26(0,[(l()(),e._24(0,null,["\n                  ","\n                "])),e._19(131072,_.a,[a.a,e.h])],null,function(l,n){l(n,0,0,e._25(n,0,0,e._17(n,1).transform("DEMO.STEPS.EVENTS.0")))})}function K(l){return e._26(0,[(l()(),e._3(0,0,null,null,429,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n  "])),(l()(),e._3(2,0,null,null,218,"div",[["class","row"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(4,0,null,null,2,"p",[["style","padding-left: 15px;"]],null,null,null,null,null)),(l()(),e._24(5,null,["\n      ","\n    "])),e._19(131072,_.a,[a.a,e.h]),(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(8,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(10,0,null,null,209,"div",[["class","free-demo-board"],["fGrid","12"]],null,null,null,null,null)),e._21(512,null,r.a,r.a,[e.B]),e._2(12,4210688,null,0,o.a,[e.k,r.a],{grid:[0,"grid"]},null),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(14,0,null,null,20,"div",[["class","free-demo-board"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(16,0,null,null,17,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n          "])),(l()(),e._3(18,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),e._24(-1,null,["Import"])),(l()(),e._24(-1,null,["\n          "])),(l()(),e._3(21,0,null,null,11,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,i.d,i.b)),e._2(22,1097728,null,0,c.b,[e.B],{theme:[0,"theme"],direction:[1,"direction"]},null),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(24,0,null,0,7,"free-tab",[["header","CODE"]],null,null,null,i.c,i.a)),e._2(25,4308992,null,1,c.a,[c.b],{header:[0,"header"]},null),e._22(603979776,1,{templates:1}),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(28,0,null,0,2,"free-code",[["lang","typescript"]],null,null,null,s.b,s.a)),e._2(29,4243456,null,0,f.a,[e.B],{lang:[0,"lang"]},null),(l()(),e._24(-1,0,["\n                import {StepsModule} from 'freeng/freeng';\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n\n      "])),(l()(),e._3(36,0,null,null,77,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(38,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),e._24(-1,null,["Default"])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(41,0,null,null,71,"free-tab-group",[["direction","right"]],null,null,null,i.d,i.b)),e._2(42,1097728,null,0,c.b,[e.B],{direction:[0,"direction"]},null),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(44,0,null,0,51,"free-tab",[["header","PREVIEW"]],null,null,null,i.c,i.a)),e._2(45,4308992,null,1,c.a,[c.b],{header:[0,"header"]},null),e._22(603979776,2,{templates:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(48,0,null,0,46,"free-steps",[],null,null,null,O,x)),e._2(49,1097728,null,2,p,[],{model:[0,"model"],activeIndex:[1,"activeIndex"]},null),e._22(603979776,3,{stepContentComponents:1}),e._22(335544320,4,{footerComponent:0}),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(53,0,null,0,2,"free-step-content",[],null,null,null,v,g)),e._2(54,49152,[[3,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                1\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(57,0,null,0,18,"free-step-content",[],null,null,null,v,g)),e._2(58,49152,[[3,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                "])),(l()(),e._3(60,0,null,0,14,"free-accordion-group",[],null,null,null,P.d,P.b)),e._2(61,49152,null,0,w.b,[],null,null),(l()(),e._24(-1,0,["\n                  "])),(l()(),e._3(63,0,null,0,2,"free-accordion",[["header","Item 1"]],null,null,null,P.c,P.a)),e._2(64,4243456,null,0,w.a,[w.b],{header:[0,"header"]},null),(l()(),e._24(-1,1,["\n                    Item 1 content.\n                  "])),(l()(),e._24(-1,0,["\n                  "])),(l()(),e._3(67,0,null,0,2,"free-accordion",[["header","Item 2"]],null,null,null,P.c,P.a)),e._2(68,4243456,null,0,w.a,[w.b],{header:[0,"header"]},null),(l()(),e._24(-1,1,["\n                    Item 2 content.\n                  "])),(l()(),e._24(-1,0,["\n                  "])),(l()(),e._3(71,0,null,0,2,"free-accordion",[["header","Item 3"]],null,null,null,P.c,P.a)),e._2(72,4243456,null,0,w.a,[w.b],{header:[0,"header"]},null),(l()(),e._24(-1,1,["\n                    Item 3 content.\n                  "])),(l()(),e._24(-1,0,["\n                "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(77,0,null,0,2,"free-step-content",[],null,null,null,v,g)),e._2(78,49152,[[3,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                3\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(81,0,null,1,12,"f-footer",[],null,null,null,B.e,B.a)),e._2(82,49152,[[4,4]],0,m.a,[],null,null),(l()(),e._24(-1,0,["\n                "])),(l()(),e._3(84,0,null,0,3,"button",[["fButton",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.toStep(-1)&&e),e},null,null)),e._21(512,null,r.a,r.a,[e.B]),e._2(86,4210688,null,0,T.b,[e.k,r.a],null,null),(l()(),e._24(-1,null,["Prev"])),(l()(),e._24(-1,0,["\n                "])),(l()(),e._3(89,0,null,0,3,"button",[["fButton",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.toStep(1)&&e),e},null,null)),e._21(512,null,r.a,r.a,[e.B]),e._2(91,4210688,null,0,T.b,[e.k,r.a],null,null),(l()(),e._24(-1,null,["Next"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(97,0,null,0,14,"free-tab",[["header","CODE"]],null,null,null,i.c,i.a)),e._2(98,4308992,null,1,c.a,[c.b],{header:[0,"header"]},null),e._22(603979776,5,{templates:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(101,0,null,0,2,"free-code",[["lang","html"]],null,null,null,s.b,s.a)),e._2(102,4243456,null,0,f.a,[e.B],{lang:[0,"lang"]},null),(l()(),e._24(-1,0,['\n              <free-steps [model]="items" [activeIndex]="activeIndex">\n                <free-step-content>\n                  1\n                </free-step-content>\n                <free-step-content>\n                  2\n                </free-step-content>\n                <free-step-content>\n                  3\n                </free-step-content>\n                <f-footer>\n                  <button fButton (click)="toStep(-1)">Prev</button>\n                  <button fButton (click)="toStep(1)">Next</button>\n                </f-footer>\n              </free-steps>\n            '])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(105,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e._24(-1,null,["Javascript"])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(108,0,null,0,2,"free-code",[["lang","javascript"]],null,null,null,s.b,s.a)),e._2(109,4243456,null,0,f.a,[e.B],{lang:[0,"lang"]},null),(l()(),e._24(-1,0,["\n              this.activeIndex = 0;\n              this.items = [\n                {label: 'Step 1'},\n                {label: 'Step 2'},\n                {label: 'Step 3'}\n              ];\n\n              toStep(add: number) {\n                this.activeIndex += add;\n                if (this.activeIndex >= this.items.length) {\n                  this.activeIndex = this.items.length - 1;\n                }\n              }\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n\n      "])),(l()(),e._3(115,0,null,null,61,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(117,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),e._24(-1,null,["Readongly"])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(120,0,null,null,55,"free-tab-group",[["direction","right"]],null,null,null,i.d,i.b)),e._2(121,1097728,null,0,c.b,[e.B],{direction:[0,"direction"]},null),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(123,0,null,0,35,"free-tab",[["header","PREVIEW"]],null,null,null,i.c,i.a)),e._2(124,4308992,null,1,c.a,[c.b],{header:[0,"header"]},null),e._22(603979776,6,{templates:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(127,0,null,0,30,"free-steps",[],null,[[null,"activeIndexChange"]],function(l,n,u){var e=!0;return"activeIndexChange"===n&&(e=!1!==(l.component.stepIndex=u)&&e),e},O,x)),e._2(128,1097728,null,2,p,[],{model:[0,"model"],readonly:[1,"readonly"],activeIndex:[2,"activeIndex"]},{activeIndexChange:"activeIndexChange"}),e._22(603979776,7,{stepContentComponents:1}),e._22(335544320,8,{footerComponent:0}),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(132,0,null,0,2,"free-step-content",[],null,null,null,v,g)),e._2(133,49152,[[7,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                1\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(136,0,null,0,2,"free-step-content",[],null,null,null,v,g)),e._2(137,49152,[[7,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                2\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(140,0,null,0,2,"free-step-content",[],null,null,null,v,g)),e._2(141,49152,[[7,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                3\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(144,0,null,1,12,"f-footer",[],null,null,null,B.e,B.a)),e._2(145,49152,[[8,4]],0,m.a,[],null,null),(l()(),e._24(-1,0,["\n                "])),(l()(),e._3(147,0,null,0,3,"button",[["fButton",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.toClickStep(-1)&&e),e},null,null)),e._21(512,null,r.a,r.a,[e.B]),e._2(149,4210688,null,0,T.b,[e.k,r.a],null,null),(l()(),e._24(-1,null,["Prev"])),(l()(),e._24(-1,0,["\n                "])),(l()(),e._3(152,0,null,0,3,"button",[["fButton",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.toClickStep(1)&&e),e},null,null)),e._21(512,null,r.a,r.a,[e.B]),e._2(154,4210688,null,0,T.b,[e.k,r.a],null,null),(l()(),e._24(-1,null,["Next"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(160,0,null,0,14,"free-tab",[["header","CODE"]],null,null,null,i.c,i.a)),e._2(161,4308992,null,1,c.a,[c.b],{header:[0,"header"]},null),e._22(603979776,9,{templates:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(164,0,null,0,2,"free-code",[["lang","html"]],null,null,null,s.b,s.a)),e._2(165,4243456,null,0,f.a,[e.B],{lang:[0,"lang"]},null),(l()(),e._24(-1,0,['\n              <free-steps [model]="steps" [readonly]="false" [(activeIndex)]="stepIndex">\n                <free-step-content>\n                  1\n                </free-step-content>\n                <free-step-content>\n                  2\n                </free-step-content>\n                <free-step-content>\n                  3\n                </free-step-content>\n                <f-footer>\n                  <button fButton (click)="toClickStep(-1)">Prev</button>\n                  <button fButton (click)="toClickStep(1)">Next</button>\n                </f-footer>\n              </free-steps>\n            '])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(168,0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),e._24(-1,null,["Javascript"])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(171,0,null,0,2,"free-code",[["lang","javascript"]],null,null,null,s.b,s.a)),e._2(172,4243456,null,0,f.a,[e.B],{lang:[0,"lang"]},null),(l()(),e._24(-1,0,["\n              this.activeIndex = 0;\n              this.items = [\n              {label: 'Step 1'},\n              {label: 'Step 2'},\n              {label: 'Step 3'}\n              ];\n\n              toStep(add: number) {\n              this.activeIndex += add;\n              if (this.activeIndex >= this.items.length) {\n              this.activeIndex = this.items.length - 1;\n              }\n              }\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n\n      "])),(l()(),e._3(178,0,null,null,40,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(180,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),e._24(-1,null,["Wired"])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(183,0,null,null,34,"free-tab-group",[["direction","right"]],null,null,null,i.d,i.b)),e._2(184,1097728,null,0,c.b,[e.B],{direction:[0,"direction"]},null),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(186,0,null,0,21,"free-tab",[["header","PREVIEW"]],null,null,null,i.c,i.a)),e._2(187,4308992,null,1,c.a,[c.b],{header:[0,"header"]},null),e._22(603979776,10,{templates:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(190,0,null,0,16,"free-steps",[],null,null,null,O,x)),e._2(191,1097728,null,2,p,[],{model:[0,"model"],activeIndex:[1,"activeIndex"],wired:[2,"wired"]},null),e._22(603979776,11,{stepContentComponents:1}),e._22(335544320,12,{footerComponent:0}),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(195,0,null,0,2,"free-step-content",[],null,null,null,v,g)),e._2(196,49152,[[11,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                1\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(199,0,null,0,2,"free-step-content",[],null,null,null,v,g)),e._2(200,49152,[[11,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                2\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(203,0,null,0,2,"free-step-content",[],null,null,null,v,g)),e._2(204,49152,[[11,4]],0,d,[p],null,null),(l()(),e._24(-1,0,["\n                3\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._3(209,0,null,0,7,"free-tab",[["header","CODE"]],null,null,null,i.c,i.a)),e._2(210,4308992,null,1,c.a,[c.b],{header:[0,"header"]},null),e._22(603979776,13,{templates:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(213,0,null,0,2,"free-code",[["lang","html"]],null,null,null,s.b,s.a)),e._2(214,4243456,null,0,f.a,[e.B],{lang:[0,"lang"]},null),(l()(),e._24(-1,0,['\n              <free-steps [model]="items" [wired]="true" [activeIndex]="wiredIndex">\n                <free-step-content>\n                  1\n                </free-step-content>\n                <free-step-content>\n                  2\n                </free-step-content>\n                <free-step-content>\n                  3\n                </free-step-content>\n              </free-steps>\n            '])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,0,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n    "])),(l()(),e._24(-1,null,["\n  "])),(l()(),e._24(-1,null,["\n  "])),(l()(),e._3(222,0,null,null,202,"div",[["class","row"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n    "])),(l()(),e._3(224,0,null,null,199,"div",[["class","free-demo-board"],["fGrid","12"]],null,null,null,null,null)),e._21(512,null,r.a,r.a,[e.B]),e._2(226,4210688,null,0,o.a,[e.k,r.a],{grid:[0,"grid"]},null),(l()(),e._24(-1,null,["\n      "])),(l()(),e._3(228,0,null,null,3,"h3",[["class","free-head-title"]],null,null,null,null,null)),(l()(),e._24(229,null,["",""])),e._19(131072,_.a,[a.a,e.h]),(l()(),e._3(231,0,null,null,0,"span",[["class","symbol component"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n\n      "])),(l()(),e._3(233,0,null,null,179,"div",[["class","free-demo-row"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(235,0,null,null,1,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),e._24(-1,null,["free-steps"])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(238,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e._24(239,null,["",""])),e._19(131072,_.a,[a.a,e.h]),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(242,0,null,null,122,"free-table",[],null,null,null,D.i,D.c)),e._2(243,4308992,null,0,Y.c,[e.B],null,null),(l()(),e._24(-1,null,["\n          "])),(l()(),e._3(245,0,null,null,21,"free-table-header",[],null,null,null,D.k,D.e)),e._2(246,49152,null,0,Y.e,[],null,null),(l()(),e._24(-1,null,["\n            "])),(l()(),e._3(248,0,null,null,17,"free-table-row",[],null,null,null,D.l,D.f)),e._2(249,49152,null,0,Y.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(251,0,null,0,3,"free-table-head",[],null,null,null,D.j,D.d)),e._2(252,4308992,null,1,Y.d,[Y.c,e.k],null,null),e._22(335544320,14,{template:0}),(l()(),e.Y(0,[[14,2]],0,0,null,j)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(256,0,null,0,3,"free-table-head",[],null,null,null,D.j,D.d)),e._2(257,4308992,null,1,Y.d,[Y.c,e.k],null,null),e._22(335544320,15,{template:0}),(l()(),e.Y(0,[[15,2]],0,0,null,R)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(261,0,null,0,3,"free-table-head",[],null,null,null,D.j,D.d)),e._2(262,4308992,null,1,Y.d,[Y.c,e.k],null,null),e._22(335544320,16,{template:0}),(l()(),e.Y(0,[[16,2]],0,0,null,J)),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,null,["\n          "])),(l()(),e._24(-1,null,["\n\n          "])),(l()(),e._3(268,0,null,null,95,"free-table-body",[],null,null,null,D.g,D.a)),e._2(269,4308992,null,1,Y.a,[Y.c],null,null),e._22(603979776,17,{_rows:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(272,0,null,0,21,"free-table-row",[],null,null,null,D.l,D.f)),e._2(273,49152,[[17,4]],0,Y.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(275,0,null,0,3,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(276,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,18,{template:0}),(l()(),e._24(-1,0,["model"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(280,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(281,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,19,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[19,2]],0,0,null,W)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(287,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(288,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,20,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[20,2]],0,0,null,V)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(295,0,null,0,21,"free-table-row",[],null,null,null,D.l,D.f)),e._2(296,49152,[[17,4]],0,Y.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(298,0,null,0,3,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(299,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,21,{template:0}),(l()(),e._24(-1,0,["readonly"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(303,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(304,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,22,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[22,2]],0,0,null,U)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(310,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(311,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,23,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[23,2]],0,0,null,q)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(318,0,null,0,21,"free-table-row",[],null,null,null,D.l,D.f)),e._2(319,49152,[[17,4]],0,Y.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(321,0,null,0,3,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(322,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,24,{template:0}),(l()(),e._24(-1,0,["activeIndex"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(326,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(327,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,25,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[25,2]],0,0,null,F)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(333,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(334,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,26,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[26,2]],0,0,null,A)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(341,0,null,0,21,"free-table-row",[],null,null,null,D.l,D.f)),e._2(342,49152,[[17,4]],0,Y.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(344,0,null,0,3,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(345,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,27,{template:0}),(l()(),e._24(-1,0,["wired"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(349,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(350,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,28,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[28,2]],0,0,null,G)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(356,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(357,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,29,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[29,2]],0,0,null,Q)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(366,0,null,null,2,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),e._24(367,null,["",""])),e._19(131072,_.a,[a.a,e.h]),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(370,0,null,null,41,"free-table",[],null,null,null,D.i,D.c)),e._2(371,4308992,null,0,Y.c,[e.B],null,null),(l()(),e._24(-1,null,["\n          "])),(l()(),e._3(373,0,null,null,16,"free-table-header",[],null,null,null,D.k,D.e)),e._2(374,49152,null,0,Y.e,[],null,null),(l()(),e._24(-1,null,["\n            "])),(l()(),e._3(376,0,null,null,12,"free-table-row",[],null,null,null,D.l,D.f)),e._2(377,49152,null,0,Y.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(379,0,null,0,3,"free-table-head",[],null,null,null,D.j,D.d)),e._2(380,4308992,null,1,Y.d,[Y.c,e.k],null,null),e._22(335544320,30,{template:0}),(l()(),e.Y(0,[[30,2]],0,0,null,Z)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(384,0,null,0,3,"free-table-head",[],null,null,null,D.j,D.d)),e._2(385,4308992,null,1,Y.d,[Y.c,e.k],null,null),e._22(335544320,31,{template:0}),(l()(),e.Y(0,[[31,2]],0,0,null,H)),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,null,["\n          "])),(l()(),e._24(-1,null,["\n\n          "])),(l()(),e._3(391,0,null,null,19,"free-table-body",[],null,null,null,D.g,D.a)),e._2(392,4308992,null,1,Y.a,[Y.c],null,null),e._22(603979776,32,{_rows:1}),(l()(),e._24(-1,0,["\n            "])),(l()(),e._3(395,0,null,0,14,"free-table-row",[],null,null,null,D.l,D.f)),e._2(396,49152,[[32,4]],0,Y.g,[],null,null),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(398,0,null,0,3,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(399,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,33,{template:0}),(l()(),e._24(-1,0,["onStepChange"])),(l()(),e._24(-1,0,["\n              "])),(l()(),e._3(403,0,null,0,5,"free-table-cell",[],null,null,null,D.h,D.b)),e._2(404,4308992,null,1,Y.b,[Y.g,e.k],null,null),e._22(335544320,34,{template:0}),(l()(),e._24(-1,0,["\n                "])),(l()(),e.Y(0,[[34,2]],0,0,null,$)),(l()(),e._24(-1,0,["\n              "])),(l()(),e._24(-1,0,["\n            "])),(l()(),e._24(-1,0,["\n          "])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n\n      "])),(l()(),e._3(414,0,null,null,8,"div",[["class","free-demo-row"]],null,null,null,null,null)),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(416,0,null,null,1,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),e._24(-1,null,["free-step-content"])),(l()(),e._24(-1,null,["\n        "])),(l()(),e._3(419,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e._24(420,null,["",""])),e._19(131072,_.a,[a.a,e.h]),(l()(),e._24(-1,null,["\n      "])),(l()(),e._24(-1,null,["\n    "])),(l()(),e._24(-1,null,["\n  "])),(l()(),e._24(-1,null,["\n  "])),(l()(),e._3(426,0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),e._24(427,null,["FreeNG - ",""])),e._19(131072,_.a,[a.a,e.h]),(l()(),e._24(-1,null,["\n"])),(l()(),e._24(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,12,0,"12"),l(n,22,0,"line","right"),l(n,25,0,"CODE"),l(n,29,0,"typescript"),l(n,42,0,"right"),l(n,45,0,"PREVIEW"),l(n,49,0,u.items,u.activeIndex),l(n,64,0,"Item 1"),l(n,68,0,"Item 2"),l(n,72,0,"Item 3"),l(n,98,0,"CODE"),l(n,102,0,"html"),l(n,109,0,"javascript"),l(n,121,0,"right"),l(n,124,0,"PREVIEW"),l(n,128,0,u.steps,!1,u.stepIndex),l(n,161,0,"CODE"),l(n,165,0,"html"),l(n,172,0,"javascript"),l(n,184,0,"right"),l(n,187,0,"PREVIEW"),l(n,191,0,u.items,u.wiredIndex,!0),l(n,210,0,"CODE"),l(n,214,0,"html"),l(n,226,0,"12"),l(n,243,0),l(n,252,0),l(n,257,0),l(n,262,0),l(n,269,0),l(n,276,0),l(n,281,0),l(n,288,0),l(n,299,0),l(n,304,0),l(n,311,0),l(n,322,0),l(n,327,0),l(n,334,0),l(n,345,0),l(n,350,0),l(n,357,0),l(n,371,0),l(n,380,0),l(n,385,0),l(n,392,0),l(n,399,0),l(n,404,0)},function(l,n){l(n,5,0,e._25(n,5,0,e._17(n,6).transform("DEMO.STEPS.DESCRIPTION"))),l(n,229,0,e._25(n,229,0,e._17(n,230).transform("API-OPTION"))),l(n,239,0,e._25(n,239,0,e._17(n,240).transform("COMPONENT.STEPS"))),l(n,367,0,e._25(n,367,0,e._17(n,368).transform("EVENT"))),l(n,420,0,e._25(n,420,0,e._17(n,421).transform("DEMO.STEPS.CHILD.0"))),l(n,427,0,e._25(n,427,0,e._17(n,428).transform("MOTTO")))})}var L=e.Z("free-main-steps",M,function(l){return e._26(0,[(l()(),e._3(0,0,null,null,1,"free-main-steps",[],[[40,"@fadeInUpState",0],[4,"display",null]],null,null,K,N)),e._2(1,114688,null,0,M,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,e._17(n,1).fadeInUpState,e._17(n,1).display)})},{},{},[]),z=u("0nO6"),X=u("a3e3"),ll=u("t0d0"),nl=u("R08E"),ul=u("Qg/J"),el=u("maBJ"),tl=u("kJXZ"),_l=u("UHIZ"),al=function(){},rl=u("9Qcf"),ol=u("RqK6");u.d(n,"MainStepsModuleNgFactory",function(){return il});var il=e._0(t,[],function(l){return e._14([e._15(512,e.j,e.W,[[8,[L]],[3,e.j],e.v]),e._15(4608,b.l,b.k,[e.s,[2,b.t]]),e._15(4608,z.r,z.r,[]),e._15(4608,X.b,X.a,[]),e._15(4608,ll.a,ll.b,[]),e._15(4608,nl.b,nl.a,[]),e._15(4608,ul.b,ul.a,[]),e._15(4608,a.a,a.a,[el.a,X.b,ll.a,nl.b,ul.b,a.b,a.c]),e._15(512,b.b,b.b,[]),e._15(512,z.p,z.p,[]),e._15(512,z.g,z.g,[]),e._15(512,m.d,m.d,[]),e._15(512,c.c,c.c,[]),e._15(512,f.b,f.b,[]),e._15(512,tl.c,tl.c,[]),e._15(512,Y.f,Y.f,[]),e._15(512,_l.n,_l.n,[[2,_l.s],[2,_l.k]]),e._15(512,al,al,[]),e._15(512,o.b,o.b,[]),e._15(512,h,h,[]),e._15(512,T.d,T.d,[]),e._15(512,w.c,w.c,[]),e._15(512,rl.a,rl.a,[]),e._15(512,ol.a,ol.a,[]),e._15(512,t,t,[]),e._15(1024,_l.i,function(){return[[{path:"",component:M}]]},[]),e._15(256,a.c,void 0,[]),e._15(256,a.b,void 0,[])])})}});
//# sourceMappingURL=16.49c9eaaf111455f7f6da.chunk.js.map