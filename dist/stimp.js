!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";(function(e,r){var o,i=n(2);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var u=Object(i.a)(o);t.a=u}).call(this,n(3),n(4)(e))},function(e,t){function n(e,t){var n=e.length,r=new Array(n),o={},i=n,u=function(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}(t),c=function(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}(e);for(t.forEach((function(e){if(!c.has(e[0])||!c.has(e[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")}));i--;)o[i]||a(e[i],i,new Set);return r;function a(e,t,i){if(i.has(e)){var f;try{f=", node was:"+JSON.stringify(e)}catch(e){f=""}throw new Error("Cyclic dependency"+f)}if(!c.has(e))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(e));if(!o[t]){o[t]=!0;var s=u.get(e)||new Set;if(t=(s=Array.from(s)).length){i.add(e);do{var l=s[--t];a(l,c.get(l),i)}while(t);i.delete(e)}r[--n]=e}}}e.exports=function(e){return n(function(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}(e),e)},e.exports.array=n},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",(function(){return r}))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=""}var t,n,o;return t=e,(n=[{key:"log",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,["".concat(this.name,":")].concat(n))}},{key:"debug",value:function(){(this.options&&this.options.isDebug||this.app&&this.app.options&&this.app.options.isDebug)&&this.log.apply(this,arguments)}}])&&r(t.prototype,n),o&&r(t,o),e}();function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,r,o=l(i);function i(e,t,n,r){var u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(u=o.call(this)).app=e,u.name=t,u.depends=r,u.initState=n,u.prevState=n,u.utils={},u.beforeUpdateHooks={},u.afterUodateHooks={},u.initHooks=[],u.reducer=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c({},n),o=arguments.length>1?arguments[1]:void 0;for(var i in n)if(o.type==="".concat(e.name,"/").concat(t,"/").concat(i))return r[i]=o.value,r;return"ACTION_TOGGLE_BULK"===o.type?c(c({},r),o.nextState):r};var a=function(e){u[i._getHandlerName(e,"set")]=function(t){u.app.store.dispatch({type:"".concat(u.app.name,"/").concat(u.name,"/").concat(e),value:t})},u.beforeUpdateHooks[e]=[],u.afterUodateHooks[e]=[]};for(var f in n)a(f);return u}return t=i,r=[{key:"_getHandlerName",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"onSet";return e=e.charAt(0).toUpperCase()+e.slice(1),"".concat(t).concat(e)}}],(n=[{key:"_getSortEdges",value:function(){var e=this,t=[];return this.depends.length>0&&this.depends.forEach((function(n){return t.push([e.name,n])})),t}},{key:"_subscribeHandler",value:function(){var e=this,t=this.getState(),n=c({},this.prevState),r=c({},t),o=function(r){if(t[r]!==n[r]){var o=i._getHandlerName(r,"onUpdate");e.beforeUpdateHooks[r]&&e.beforeUpdateHooks[r].forEach((function(e){return e(t[r],n[r])})),void 0!==e[o]&&e[o].apply(e,[t[r],n[r]]),e.afterUodateHooks[r]&&e.afterUodateHooks[r].forEach((function(e){return e(t[r],n[r])}))}};for(var u in t)o(u);this.prevState=r}},{key:"setState",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in this.app.store.dispatch({type:"ACTION_TOGGLE_BULK",nextState:e}),e)this.app.store.dispatch({type:"".concat(this.app.name,"/").concat(this.name,"/").concat(t),value:e[t]})}},{key:"getState",value:function(){return this.app.store.getState()[this.name]}},{key:"onBeforeUpdate",value:function(e,t){this.beforeUpdateHooks[e].push(t.bind(this))}},{key:"onAfterUpdate",value:function(e,t){this.afterUodateHooks[e].push(t.bind(this))}},{key:"onInit",value:function(e){this.initHooks.push(e.bind(this))}},{key:"init",value:function(){var e=this;this.app.store.subscribe((function(){e._subscribeHandler()})),this.initHooks.forEach((function(e){e()}))}}])&&f(t.prototype,n),r&&f(t,r),i}(o),h=n(1),b=n.n(h),v=n(0),m=function(){return Math.random().toString(36).substring(7).split("").join(".")},O={INIT:"@@redux/INIT"+m(),REPLACE:"@@redux/REPLACE"+m(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+m()}};function g(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function w(e,t,n){var r;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(w)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var o=e,i=t,u=[],c=u,a=!1;function f(){c===u&&(c=u.slice())}function s(){if(a)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return i}function l(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(a)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return f(),c.push(e),function(){if(t){if(a)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,f();var n=c.indexOf(e);c.splice(n,1),u=null}}}function p(e){if(!g(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(a)throw new Error("Reducers may not dispatch actions.");try{a=!0,i=o(i,e)}finally{a=!1}for(var t=u=c,n=0;n<t.length;n++){(0,t[n])()}return e}function d(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");o=e,p({type:O.REPLACE})}function y(){var e,t=l;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(s())}return n(),{unsubscribe:t(n)}}})[v.a]=function(){return this},e}return p({type:O.INIT}),(r={dispatch:p,subscribe:l,getState:s,replaceReducer:d})[v.a]=y,r}function j(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function P(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];0,"function"==typeof e[o]&&(n[o]=e[o])}var i,u=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:O.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:O.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+O.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},c=0;c<u.length;c++){var a=u[c],f=n[a],s=e[a],l=f(s,t);if(void 0===l){var p=j(a,t);throw new Error(p)}o[a]=l,r=r||l!==s}return(r=r||u.length!==Object.keys(e).length)?o:e}}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){var t=w(x(e));return t.asyncReducers=E({},e),t.injectReducer=function(e,n){t.asyncReducers[e]=n,t.replaceReducer(x(t.asyncReducers))},t}function x(e){return P(E({},e))}function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M(e);if(t){var o=M(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return N(this,n)}}function N(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(i,e);var t,n,r,o=A(i);function i(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this)).options=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({isDebug:!1},t),n.name=e,n.modules={},n.store=null,n}return t=i,r=[{key:"_sortModulesByDepends",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[],n=[];for(var r in e){var o=e[r]._getSortEdges();o.length>0?n=n.concat(e[r]._getSortEdges()):t.push(e[r])}return b()(n).reverse().forEach((function(n){return t.push(e[n])})),t}}],(n=[{key:"addModule",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=new e(this,t,n,r);return this.modules[t]=o,null===this.store?this.store=_(D({},t,o.reducer)):this.store.injectReducer(t,o.reducer),o}},{key:"init",value:function(){var e=this,t=i._sortModulesByDepends(this.modules).filter((function(e){return void 0!==e})).filter((function(t){for(var n=!0,r=0;r<t.depends.length;r++)if(void 0===e.modules[t.depends[r]]){n=!1;break}return n}));this.debug("init - modules",t),t.forEach((function(t){e.debug("init - modules - module",t),t.init()}))}}])&&T(t.prototype,n),r&&T(t,r),i}(o);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q(e);if(t){var o=q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return W(this,n)}}function W(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(i,e);var t,n,r,o=K(i);function i(){var e;B(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=o.call.apply(o,[this].concat(n))).selectorModule="-m",e.selectorPart="-ch",e.selectorIterable="-i",e.dom={root:null},e.isDOMHasBeenInit=!1,e.domHooksBeforeInit=[],e.domHooksAfterInit=[],e.onInit(e.initDOM.bind(Y(e))),e}return t=i,(n=[{key:"_initDOMChild",value:function(e){var t=e.getAttribute(this.selectorPart),n=e.getAttribute(this.selectorIterable);null!==n?(void 0===this.dom[t]&&(this.dom[t]={}),this.dom[t][n]=e):this.dom[t]=e}},{key:"initDOM",value:function(){if(this.domHooksBeforeInit.forEach((function(e){return e()})),this.dom.root=document.querySelector("[".concat(this.selectorModule,"=").concat(this.name,"]")),this.dom.root){for(var e=this.dom.root.querySelectorAll("[".concat(this.selectorPart,"]")),t=0,n=e.length;t<n;t++){for(var r=e[t],o=!1,i=!1,u=r;!o;){var c=u.parentNode.getAttribute(this.selectorModule);null!==c?(o=!0,i=c===this.name):u=u.parentNode}i&&this._initDOMChild(r)}this.isDOMHasBeenInit=!0,this.domHooksAfterInit.forEach((function(e){return e()}))}else this.isDOMHasBeenInit=!1}},{key:"onBeforeDomInit",value:function(e){this.domHooksBeforeInit.push(e.bind(this))}},{key:"onAfterDomInit",value:function(e){this.domHooksAfterInit.push(e.bind(this))}}])&&L(t.prototype,n),r&&L(t,r),i}(y);t.default={Abstract:o,App:U,Module:y,DOMInteractModule:F}}])}));