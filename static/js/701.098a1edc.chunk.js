"use strict";(self.webpackChunksyt_admin=self.webpackChunksyt_admin||[]).push([[701],{7058:function(e,t,n){n.d(t,{As:function(){return l},DZ:function(){return i},Uy:function(){return c},j8:function(){return s},tU:function(){return o},uw:function(){return a}});var r=n(7858);function a(e){var t=e.page,n=e.limit,a=e.hosname,o=e.hoscode;return r.W.get("/admin/hosp/hospitalSet/".concat(t,"/").concat(n),{params:{hosname:a,hoscode:o}})}function o(e){return r.W.post("/admin/hosp/hospitalSet/save",e)}function i(e){return r.W.get("/admin/hosp/hospitalSet/get/".concat(e))}function c(e){return r.W.put("/admin/hosp/hospitalSet/update",e)}function l(e){return r.W.delete("/admin/hosp/hospitalSet/remove/".concat(e))}function s(e){return r.W.delete("/admin/hosp/hospitalSet/batchRemove",{data:e})}},8701:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(1413),a=n(5861),o=n(9439),i=n(7757),c=n.n(i),l=n(3099),s=n(7309),u=n(7462),d=n(2791),p=n(1694),f=n.n(p),m=n(5179),h=n(187),v=n(1354),x=n(9220),Z=n(2571),y=n(3486),g=n(3578),w=n(9077),C=n(1113),b=n(9464),j=n(8368);function S(e){return!(!e||!e.then)}var E=function(e){var t=d.useRef(!1),n=d.useRef(),r=(0,j.Z)(!1),a=(0,o.Z)(r,2),i=a[0],c=a[1];d.useEffect((function(){var t;if(e.autoFocus){var r=n.current;t=setTimeout((function(){return r.focus()}))}return function(){t&&clearTimeout(t)}}),[]);var l=e.type,p=e.children,f=e.prefixCls,m=e.buttonProps;return d.createElement(s.Z,(0,u.Z)({},(0,Z.n)(l),{onClick:function(n){var r=e.actionFn,a=e.close;if(!t.current)if(t.current=!0,r){var o;if(e.emitEvent){if(o=r(n),e.quitOnNullishReturnValue&&!S(o))return t.current=!1,void a(n)}else if(r.length)o=r(a),t.current=!1;else if(!(o=r()))return void a();!function(n){var r=e.close;S(n)&&(c(!0),n.then((function(){c(!1,!0),r.apply(void 0,arguments),t.current=!1}),(function(e){console.error(e),c(!1,!0),t.current=!1})))}(o)}else a()},loading:i,prefixCls:f},m,{ref:n}),p)},k=void 0,z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},N=d.forwardRef((function(e,t){var n=d.useContext(w.E_).getPrefixCls,r=(0,m.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),a=(0,o.Z)(r,2),i=a[0],c=a[1],l=function(t,n){var r;c(t,!0),null===(r=e.onVisibleChange)||void 0===r||r.call(e,t,n)},p=function(e){l(!1,e)},h=function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(k,t)},j=function(t){var n;l(!1,t),null===(n=e.onCancel)||void 0===n||n.call(k,t)},S=e.prefixCls,N=e.placement,O=e.children,P=e.overlayClassName,I=z(e,["prefixCls","placement","children","overlayClassName"]),T=n("popover",S),R=n("popconfirm",S),F=f()(R,P),B=d.createElement(y.Z,{componentName:"Popconfirm",defaultLocale:g.Z.Popconfirm},(function(t){return function(t,r){var a,o=e.okButtonProps,i=e.cancelButtonProps,c=e.title,l=e.cancelText,f=e.okText,m=e.okType,v=e.icon,x=e.showCancel,y=void 0===x||x;return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},v,d.createElement("div",{className:"".concat(t,"-message-title")},(a=c)?"function"===typeof a?a():a:null)),d.createElement("div",{className:"".concat(t,"-buttons")},y&&d.createElement(s.Z,(0,u.Z)({onClick:j,size:"small"},i),l||r.cancelText),d.createElement(E,{buttonProps:(0,u.Z)((0,u.Z)({size:"small"},(0,Z.n)(m)),o),actionFn:h,close:p,prefixCls:n("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},f||r.okText)))}(T,t)})),L=n();return d.createElement(x.Z,(0,u.Z)({},I,{prefixCls:T,placement:N,onVisibleChange:function(t){e.disabled||l(t)},visible:i,overlay:B,overlayClassName:F,ref:t,transitionName:(0,b.mL)(L,"zoom-big",e.transitionName)}),(0,C.Tm)(O,{onKeyDown:function(e){var t,n;d.isValidElement(O)&&(null===(n=null===O||void 0===O?void 0:(t=O.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===v.Z.ESC&&i&&l(!1,e)}(e)}}))}));N.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:d.createElement(h.Z,null),disabled:!1};var O=N,P=n(3695),I=n(3383),T=n(3272),R=n(7031),F=n(2072),B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},L=n(4291),V=function(e,t){return d.createElement(L.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:B}))};V.displayName="EditOutlined";var W=d.forwardRef(V),D={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},M=function(e,t){return d.createElement(L.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:D}))};M.displayName="DeleteOutlined";var A=d.forwardRef(M),G=n(1730),H=n(7058),K=n(6871),_=n(184);function U(){var e=(0,d.useState)([]),t=(0,o.Z)(e,2),n=t[0],i=t[1],u=(0,d.useState)(0),p=(0,o.Z)(u,2),f=p[0],m=p[1],h=(0,d.useState)(1),v=(0,o.Z)(h,2),x=v[0],Z=v[1],y=(0,d.useState)(5),g=(0,o.Z)(y,2),w=g[0],C=g[1],b=(0,d.useState)(!1),j=(0,o.Z)(b,2),S=j[0],E=j[1],k=(0,d.useState)({hoscode:"",hosname:""}),z=(0,o.Z)(k,2),N=z[0],B=z[1],L=(0,d.useState)([]),V=(0,o.Z)(L,2),D=V[0],M=V[1],U=(0,d.useState)(!1),q=(0,o.Z)(U,2),J=q[0],Q=q[1],X=(0,K.s0)(),Y=[{title:"\u5e8f\u53f7",width:70,align:"center",render:function(e,t,n){return n+1}},{title:"\u533b\u9662\u540d\u79f0",dataIndex:"hosname"},{title:"\u533b\u9662\u7f16\u53f7",dataIndex:"hoscode"},{title:"API\u57fa\u7840\u8def\u5f84",dataIndex:"apiUrl"},{title:"\u7b7e\u540d\u5bc6\u94a5",dataIndex:"signKey"},{title:"\u8054\u7cfb\u4eba",dataIndex:"contactsName"},{title:"\u8054\u7cfb\u7535\u8bdd",dataIndex:"contactsPhone"},{title:"\u72b6\u6001",dataIndex:"status"},{title:"\u64cd\u4f5c",width:100,fixed:"right",render:function(e,t){return(0,_.jsxs)(l.Z,{children:[(0,_.jsx)(s.Z,{onClick:function(){X("/syt/hospital/hospitalSet/edit/".concat(t.id))},type:"primary",icon:(0,_.jsx)(W,{})}),(0,_.jsx)(O,{title:"\u786e\u5b9a\u5220\u9664\uff1f",onConfirm:(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,H.As)(String(t.id));case 2:P.ZP.success("\u5220\u9664\u6210\u529f"),B({hoscode:"",hosname:""});case 4:case"end":return e.stop()}}),e)}))),okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,_.jsx)(s.Z,{type:"primary",danger:!0,icon:(0,_.jsx)(A,{})})})]})}}];return(0,d.useEffect)((function(){var e=function(){var e=(0,a.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,(0,H.uw)((0,r.Z)({page:x,limit:w},N));case 3:t=e.sent,i(t.records),m(t.total),E(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){return console.log(e)}))}),[x,w,N,J]),(0,_.jsxs)(I.Z,{children:[(0,_.jsxs)(T.Z,{layout:"inline",onFinish:function(e){i([]),B(e),Z(1)},children:[(0,_.jsx)(T.Z.Item,{name:"hosname",children:(0,_.jsx)(R.Z,{placeholder:"\u533b\u9662\u540d\u79f0"})}),(0,_.jsx)(T.Z.Item,{name:"hoscode",children:(0,_.jsx)(R.Z,{placeholder:"\u533b\u9662\u7f16\u53f7"})}),(0,_.jsx)(T.Z.Item,{children:(0,_.jsx)(s.Z,{type:"primary",htmlType:"submit",icon:(0,_.jsx)(G.Z,{}),children:"\u67e5\u8be2"})}),(0,_.jsx)(T.Z.Item,{children:(0,_.jsx)(s.Z,{htmlType:"reset",onClick:function(){i([]),B({hoscode:"",hosname:""})},children:"\u6e05\u7a7a"})})]}),(0,_.jsx)("div",{className:"h-20"}),(0,_.jsxs)(l.Z,{children:[(0,_.jsx)(s.Z,{type:"primary",onClick:function(){X("/syt/hospital/hospitalSet/add")},children:"\u6dfb\u52a0"}),(0,_.jsx)(s.Z,{disabled:0===D.length,onClick:(0,a.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,H.j8)(D);case 2:P.ZP.success("\u6279\u91cf\u5220\u9664\u6210\u529f"),Q(!J);case 4:case"end":return e.stop()}}),e)}))),children:"\u6279\u91cf\u5220\u9664"})]}),(0,_.jsx)("div",{className:"h-20"}),(0,_.jsx)(F.Z,{bordered:!0,loading:S,columns:Y,rowKey:"id",scroll:{x:1200},dataSource:n,pagination:{current:x,total:f,pageSize:w,showSizeChanger:!0,pageSizeOptions:[2,5,10,20],showQuickJumper:!0,showTotal:function(e){return"\u603b\u5171 ".concat(e," \u6761\u6570\u636e")},onChange:function(e,t){i([]),Z(e),C(t||5)}},rowSelection:{type:"checkbox",selectedRowKeys:D,onChange:function(e){M(e)}}})]})}},3099:function(e,t,n){n.d(t,{u:function(){return m},Z:function(){return v}});var r=n(7462),a=n(4942),o=n(9439),i=n(2791),c=n(1694),l=n.n(c),s=n(5501),u=n(9077);function d(e){var t=e.className,n=e.direction,o=e.index,c=e.marginDirection,l=e.children,s=e.split,u=e.wrap,d=i.useContext(m),p=d.horizontalSize,f=d.verticalSize,h=d.latestIndex,v={};return d.supportFlexGap||("vertical"===n?o<h&&(v={marginBottom:p/(s?2:1)}):v=(0,r.Z)((0,r.Z)({},o<h&&(0,a.Z)({},c,p/(s?2:1))),u&&{paddingBottom:f})),null===l||void 0===l?null:i.createElement(i.Fragment,null,i.createElement("div",{className:t,style:v},l),o<h&&s&&i.createElement("span",{className:"".concat(t,"-split"),style:v},s))}var p=n(8883),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},m=i.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),h={small:8,middle:16,large:24};var v=function(e){var t,n=i.useContext(u.E_),c=n.getPrefixCls,v=n.space,x=n.direction,Z=e.size,y=void 0===Z?(null===v||void 0===v?void 0:v.size)||"small":Z,g=e.align,w=e.className,C=e.children,b=e.direction,j=void 0===b?"horizontal":b,S=e.prefixCls,E=e.split,k=e.style,z=e.wrap,N=void 0!==z&&z,O=f(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),P=(0,p.Z)(),I=i.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return function(e){return"string"===typeof e?h[e]:e||0}(e)}))}),[y]),T=(0,o.Z)(I,2),R=T[0],F=T[1],B=(0,s.Z)(C,{keepEmpty:!0}),L=void 0===g&&"horizontal"===j?"center":g,V=c("space",S),W=l()(V,"".concat(V,"-").concat(j),(t={},(0,a.Z)(t,"".concat(V,"-rtl"),"rtl"===x),(0,a.Z)(t,"".concat(V,"-align-").concat(L),L),t),w),D="".concat(V,"-item"),M="rtl"===x?"marginLeft":"marginRight",A=0,G=B.map((function(e,t){null!==e&&void 0!==e&&(A=t);var n=e&&e.key||"".concat(D,"-").concat(t);return i.createElement(d,{className:D,key:n,direction:j,index:t,marginDirection:M,split:E,wrap:N},e)})),H=i.useMemo((function(){return{horizontalSize:R,verticalSize:F,latestIndex:A,supportFlexGap:P}}),[R,F,A,P]);if(0===B.length)return null;var K={};return N&&(K.flexWrap="wrap",P||(K.marginBottom=-F)),P&&(K.columnGap=R,K.rowGap=F),i.createElement("div",(0,r.Z)({className:W,style:(0,r.Z)((0,r.Z)({},K),k)},O),i.createElement(m.Provider,{value:H},G))}}}]);
//# sourceMappingURL=701.098a1edc.chunk.js.map