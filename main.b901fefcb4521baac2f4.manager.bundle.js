(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{435:function(module,exports,__webpack_require__){__webpack_require__(436),__webpack_require__(824),module.exports=__webpack_require__(825)},502:function(module,exports){},825:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(828),types=__webpack_require__(419),ADDON_ID="storybook/share-storybook",TOOL_ID=ADDON_ID+"/tool",jsx_runtime=__webpack_require__(141),react=__webpack_require__(0),bar_button=__webpack_require__(428),icon=__webpack_require__(216),ConfigForm=function(_a){_a.isOpen,_a.onClose;var _b=Object(react.useState)("Storybook Preview"),title=_b[0],_c=(_b[1],Object(react.useState)(500)),width=_c[0],_d=(_c[1],Object(react.useState)(300)),height=_d[0];_d[1],Object(react.useMemo)((function(){return'<iframe\n      src="'+window.location.href+'iframe.html"\n      title="'+title+'"\n      width="'+width+'"\n      height="'+height+'"\n      style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true"\n    ></iframe>'}),[]);return null},__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},Tool=function(){var _a=Object(react.useState)(!1),showModal=_a[0],setShowModal=_a[1];return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Object(jsx_runtime.jsx)(bar_button.a,__assign({title:"Copy embed to place in the code",onClick:function(){return setShowModal(!0)}},{children:Object(jsx_runtime.jsx)(icon.a,{icon:"share"},void 0)}),TOOL_ID),Object(jsx_runtime.jsx)(ConfigForm,{isOpen:showModal,onClose:function(){return setShowModal(!1)}},void 0)]},void 0)};esm.a.register(ADDON_ID,(function(){esm.a.add(TOOL_ID,{type:types.a.TOOL,title:"Share Storybook",match:function(_a){var viewMode=_a.viewMode;return!(!viewMode||!viewMode.match(/^(story|docs)$/))},render:Tool})}))}},[[435,2,3]]]);