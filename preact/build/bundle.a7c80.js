!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}({0:function(e,t,n){e.exports=n("pwNi")},"5D9O":function(e,t,n){e.exports=n("wVGV")()},Asjh:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},DEwm:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("KM04"),a=(n.n(i),n("eW0v")),s=n("nzAS"),u=n("Z54E");t.a=function(e){function t(t){var n=r(this,e.call(this,t));return n.state={selectedOrganization:n.props.entities[0].id,selectedAttribute:"",selectedOperator:"",selectedInput:"",selectedCombinator:n.props.combinators[0],queries:[],attributes:n.props.attributes.reduce(function(e,t){var n=Object.keys(t)[0];return e[n]=t[n],e},{}),operators:Object.keys(n.props.operators).map(function(e){return{id:e,label:n.props.operators[e]}})},n.handleInputChange=n.handleInputChange.bind(n),n.handleAddQuery=n.handleAddQuery.bind(n),n.handleRemoveQuery=n.handleRemoveQuery.bind(n),n.handleReset=n.handleReset.bind(n),n}return o(t,e),t.prototype.handleInputChange=function(e){var t,n=e.target.name;this.setState((t={},t[n]=e.target.value,t))},t.prototype.handleAddQuery=function(e){var t=[].concat(this.state.queries),n={id:this.state.queries.length,attribute:this.state.selectedAttribute,operator:this.state.selectedOperator,input:this.state.selectedInput};t.length>0&&(n.combinator=this.state.selectedCombinator),t.push(n),this.setState({queries:t}),this.handleReset(e)},t.prototype.handleRemoveQuery=function(e,t){e.preventDefault(),this.setState({queries:this.state.queries.filter(function(e){return e.id!==t})})},t.prototype.handleReset=function(e){e.preventDefault(),this.setState({selectedAttribute:"",selectedOperator:"",selectedInput:""})},t.prototype.render=function(){var e=this.props.entities.map(function(e){return n.i(i.h)("option",{key:e.id,value:e.id},e.label)}),t=this.state.attributes[this.state.selectedOrganization].map(function(e){return n.i(i.h)("option",{key:e,value:e},e)}),r=this.state.operators.map(function(e){return n.i(i.h)("option",{key:e.id,value:e.id},e.label)}),o=this.props.combinators.map(function(e){return n.i(i.h)("option",{key:e,value:e},e)}),a=this.state.selectedOrganization&&this.state.selectedAttribute&&this.state.selectedOperator&&this.state.selectedInput;return n.i(i.h)("form",{className:"filter-form"},n.i(i.h)("div",{className:"primary-content"},n.i(i.h)("select",{className:"filter-dropdown",name:"selectedOrganization",value:this.state.selectedOrganization,onChange:this.handleInputChange},e),n.i(i.h)(s.a,{queries:this.state.queries,onClick:this.handleRemoveQuery})),n.i(i.h)("div",{className:"secondary-content"},this.state.queries.length>0&&n.i(i.h)("select",{className:"filter-dropdown",name:"selectedCombinator",value:this.state.selectedCombinator,onChange:this.handleInputChange},o),n.i(i.h)("select",{className:"filter-dropdown",name:"selectedAttribute",value:this.state.selectedAttribute,onChange:this.handleInputChange},n.i(i.h)("option",{value:"",disabled:!0,hidden:!0},this.props.copy.filter.attributePlaceholder),t),this.state.selectedAttribute&&n.i(i.h)("select",{className:"filter-dropdown",name:"selectedOperator",value:this.state.selectedOperator,onChange:this.handleInputChange},n.i(i.h)("option",{value:"",disabled:!0,hidden:!0},this.props.copy.filter.operatorPlaceholder),r),n.i(i.h)(u.a,{selectedAttribute:this.state.selectedAttribute,copy:this.props.copy,handleInputChange:this.handleInputChange}),n.i(i.h)("div",{className:"filter-icons"},a&&n.i(i.h)("a",{className:"filter-plus",href:"",onClick:this.handleAddQuery},"+"),this.state.selectedAttribute&&n.i(i.h)("a",{className:"filter-minus",href:"",onClick:this.handleReset},"-"))))},t}(a.a)},JkW7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n("j25A").a},KM04:function(e){!function(){"use strict";function t(){}function n(e,n){var r,o,i,a,s=T;for(a=arguments.length;a-- >2;)A.push(arguments[a]);for(n&&null!=n.children&&(A.length||A.push(n.children),delete n.children);A.length;)if((o=A.pop())&&void 0!==o.pop)for(a=o.length;a--;)A.push(o[a]);else"boolean"==typeof o&&(o=null),(i="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(i=!1)),i&&r?s[s.length-1]+=o:s===T?s=[o]:s.push(o),r=i;var u=new t;return u.nodeName=e,u.children=s,u.attributes=null==n?void 0:n,u.key=null==n?void 0:n.key,void 0!==R.vnode&&R.vnode(u),u}function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t){return n(e.nodeName,r(r({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function i(e){!e.__d&&(e.__d=!0)&&1==W.push(e)&&(R.debounceRendering||E)(a)}function a(){var e,t=W;for(W=[];e=t.pop();)e.__d&&P(e)}function s(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&u(e,t.nodeName):n||e._componentConstructor===t.nodeName}function u(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function p(e){var t=r({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===t[o]&&(t[o]=n[o]);return t}function l(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===U.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,h,a):e.removeEventListener(t,h,a),(e.__l||(e.__l={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)d(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var s=o&&t!==(t=t.replace(/^xlink\:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function d(e,t,n){try{e[t]=n}catch(e){}}function h(e){return this.__l[e.type](R.event&&R.event(e)||e)}function m(){for(var e;e=M.pop();)R.afterMount&&R.afterMount(e),e.componentDidMount&&e.componentDidMount()}function y(e,t,n,r,o,i){D++||(q=null!=o&&void 0!==o.ownerSVGElement,L=null!=e&&!("__preactattr_"in e));var a=b(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--D||(L=!1,i||m()),a}function b(e,t,n,r,o){var i=e,a=q;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),_(e,!0))),i.__preactattr_=!0,i;var s=t.nodeName;if("function"==typeof s)return k(e,t,n,r);if(q="svg"===s||"foreignObject"!==s&&q,s+="",(!e||!u(e,s))&&(i=l(s,q),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),_(e,!0)}var p=i.firstChild,c=i.__preactattr_,f=t.children;if(null==c){c=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)c[d[h].name]=d[h].value}return!L&&f&&1===f.length&&"string"==typeof f[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=f[0]&&(p.nodeValue=f[0]):(f&&f.length||null!=p)&&v(i,f,n,r,L||null!=c.dangerouslySetInnerHTML),N(i,t.attributes,c),q=a,i}function v(e,t,n,r,o){var i,a,u,p,l,f=e.childNodes,d=[],h={},m=0,y=0,v=f.length,g=0,N=t?t.length:0;if(0!==v)for(var C=0;C<v;C++){var w=f[C],O=w.__preactattr_,x=N&&O?w._component?w._component.__k:O.key:null;null!=x?(m++,h[x]=w):(O||(void 0!==w.splitText?!o||w.nodeValue.trim():o))&&(d[g++]=w)}if(0!==N)for(var C=0;C<N;C++){p=t[C],l=null;var x=p.key;if(null!=x)m&&void 0!==h[x]&&(l=h[x],h[x]=void 0,m--);else if(!l&&y<g)for(i=y;i<g;i++)if(void 0!==d[i]&&s(a=d[i],p,o)){l=a,d[i]=void 0,i===g-1&&g--,i===y&&y++;break}l=b(l,p,n,r),u=f[C],l&&l!==e&&l!==u&&(null==u?e.appendChild(l):l===u.nextSibling?c(u):e.insertBefore(l,u))}if(m)for(var C in h)void 0!==h[C]&&_(h[C],!1);for(;y<=g;)void 0!==(l=d[g--])&&_(l,!1)}function _(e,t){var n=e._component;n?j(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||c(e),g(e))}function g(e){for(e=e.lastChild;e;){var t=e.previousSibling;_(e,!0),e=t}}function N(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||f(e,r,n[r],n[r]=void 0,q);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||f(e,r,n[r],n[r]=t[r],q)}function C(e){var t=e.constructor.name;(z[t]||(z[t]=[])).push(e)}function w(e,t,n){var r,o=z[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),S.call(r,t,n)):(r=new S(t,n),r.constructor=e,r.render=O),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.__b=o[i].__b,o.splice(i,1);break}return r}function O(e,t,n){return this.constructor(e,n)}function x(e,t,n,r,o){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r),r&&r!==e.context&&(e.__c||(e.__c=e.context),e.context=r),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===R.syncComponentUpdates&&e.base?i(e):P(e,1,o)),e.__r&&e.__r(e))}function P(e,t,n,o){if(!e.__x){var i,a,s,u=e.props,l=e.state,c=e.context,f=e.__p||u,d=e.__s||l,h=e.__c||c,b=e.base,v=e.__b,g=b||v,N=e._component,C=!1;if(b&&(e.props=f,e.state=d,e.context=h,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,l,c)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(u,l,c),e.props=u,e.state=l,e.context=c),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!C){i=e.render(u,l,c),e.getChildContext&&(c=r(r({},c),e.getChildContext()));var O,k,S=i&&i.nodeName;if("function"==typeof S){var I=p(i);a=N,a&&a.constructor===S&&I.key==a.__k?x(a,I,1,c,!1):(O=a,e._component=a=w(S,I,c),a.__b=a.__b||v,a.__u=e,x(a,I,0,c,!1),P(a,1,n,!0)),k=a.base}else s=g,O=N,O&&(s=e._component=null),(g||1===t)&&(s&&(s._component=null),k=y(s,i,c,n||!b,g&&g.parentNode,!0));if(g&&k!==g&&a!==N){var A=g.parentNode;A&&k!==A&&(A.replaceChild(k,g),O||(g._component=null,_(g,!1)))}if(O&&j(O),e.base=k,k&&!o){for(var T=e,E=e;E=E.__u;)(T=E).base=k;k._component=T,k._componentConstructor=T.constructor}}if(!b||n?M.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(f,d,h),R.afterUpdate&&R.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);D||o||m()}}function k(e,t,n,r){for(var o=e&&e._component,i=o,a=e,s=o&&e._componentConstructor===t.nodeName,u=s,l=p(t);o&&!u&&(o=o.__u);)u=o.constructor===t.nodeName;return o&&u&&(!r||o._component)?(x(o,l,3,n,r),e=o.base):(i&&!s&&(j(i),e=a=null),o=w(t.nodeName,l,n),e&&!o.__b&&(o.__b=e,a=null),x(o,l,1,n,r),e=o.base,a&&e!==a&&(a._component=null,_(a,!1))),e}function j(e){R.beforeUnmount&&R.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?j(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,c(t),C(e),g(t)),e.__r&&e.__r(null)}function S(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function I(e,t,n){return y(n,e,{},!1,t,!1)}var R={},A=[],T=[],E="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,U=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,W=[],M=[],D=0,q=!1,L=!1,z={};r(S.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=r({},n)),r(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),i(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),P(this,2)},render:function(){}});var V={h:n,createElement:n,cloneElement:o,Component:S,render:I,rerender:a,options:R};e.exports=V}()},UQex:function(e){"use strict";function t(e){return function(){return e}}var n=function(){};n.thatReturns=t,n.thatReturnsFalse=t(!1),n.thatReturnsTrue=t(!0),n.thatReturnsNull=t(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},Uyz7:function(e,t){"use strict";t.a={ENDPOINT:"/assets/data.json"}},Z54E:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("KM04"),a=(n.n(i),n("eW0v")),s=n.i(i.h)("option",{value:""});t.a=function(e){function t(){return r(this,e.apply(this,arguments))}return o(t,e),t.prototype.renderInput=function(e){switch(e){case"STRING":return n.i(i.h)("input",{className:"filter-input",name:"selectedInput",onChange:this.props.handleInputChange});case"NUMBER":return n.i(i.h)("input",{className:"filter-input",name:"selectedInput",type:"number",onChange:this.props.handleInputChange});case"DATE":return n.i(i.h)("input",{className:"filter-input",name:"selectedInput",type:"date",onChange:this.props.handleInputChange});case"BOOLEAN":return n.i(i.h)("select",{className:"filter-dropdown",name:"selectedInput",onChange:this.props.handleInputChange},s,n.i(i.h)("option",{value:this.props.copy.filter.boolean.true.id},this.props.copy.filter.boolean.true.label),n.i(i.h)("option",{value:this.props.copy.filter.boolean.false.id},this.props.copy.filter.boolean.false.label));case"ENUM":var t=this.props.enum.map(function(e){return n.i(i.h)("option",{key:e,value:e},e)});return n.i(i.h)("select",{className:"filter-dropdown",onChange:this.props.handleInputChange,multiple:!0,size:"1"},t);default:return null}},t.prototype.render=function(){var e=void 0;if(this.props.selectedAttribute){e=this.renderInput(this.props.selectedAttribute.split("_")[1])}return n.i(i.h)("div",null,e)},t}(a.a)},eW0v:function(e,t,n){"use strict";function r(e){var t=e.nodeName,n=e.attributes;e.attributes={},t.defaultProps&&y(e.attributes,t.defaultProps),n&&y(e.attributes,n)}function o(e,t){var n,r,o;if(t){for(o in t)if(n=D.test(o))break;if(n){r=e.attributes={};for(o in t)t.hasOwnProperty(o)&&(r[D.test(o)?o.replace(/([A-Z0-9])/,"-$1").toLowerCase():o]=t[o])}}}function i(e){return l.bind(null,e)}function a(e,t){for(var n=t||0;n<e.length;n++){var r=e[n];Array.isArray(r)?a(r):r&&"object"==typeof r&&!f(r)&&(r.props&&r.type||r.attributes&&r.nodeName||r.children)&&(e[n]=l(r.type||r.nodeName,r.props||r.attributes,r.children))}}function s(e){return"function"==typeof e&&!(e.prototype&&e.prototype.render)}function u(e){return _({displayName:e.displayName||e.name,render:function(){return e(this.props,this.context)}})}function p(e){var t=e[W];return t?!0===t?e:t:(t=u(e),Object.defineProperty(t,W,{configurable:!0,value:!0}),t.displayName=e.displayName,t.propTypes=e.propTypes,t.defaultProps=e.defaultProps,Object.defineProperty(e,W,{configurable:!0,value:t}),t)}function l(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return a(e,2),c(T.h.apply(void 0,e))}function c(e){e.preactCompatNormalized=!0,m(e),s(e.nodeName)&&(e.nodeName=p(e.nodeName));var t=e.attributes.ref,n=t&&typeof t;return!K||"string"!==n&&"number"!==n||(e.attributes.ref=d(t,K)),h(e),e}function f(e){return e&&(e instanceof z||e.$$typeof===U)}function d(e,t){return t._refProxies[e]||(t._refProxies[e]=function(n){t&&t.refs&&(t.refs[e]=n,null===n&&(delete t._refProxies[e],t=null))})}function h(e){var t=e.nodeName,n=e.attributes;if(n&&"string"==typeof t){var r={};for(var o in n)r[o.toLowerCase()]=o;if(r.ondoubleclick&&(n.ondblclick=n[r.ondoubleclick],delete n[r.ondoubleclick]),r.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|rad/i.test(n.type))){var i=r.oninput||"oninput";n[i]||(n[i]=O([n[i],n[r.onchange]]),delete n[r.onchange])}}}function m(e){var t=e.attributes||(e.attributes={});Z.enumerable="className"in t,t.className&&(t.class=t.className),Object.defineProperty(t,"className",Z)}function y(e){for(var t=arguments,n=1,r=void 0;n<arguments.length;n++)if(r=t[n])for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o]);return e}function b(e,t){for(var n in e)if(!(n in t))return!0;for(var r in t)if(e[r]!==t[r])return!0;return!1}function v(){}function _(e){function t(e,t){C(this),S.call(this,e,t,q),x.call(this,e,t)}return e=y({constructor:t},e),e.mixins&&N(e,g(e.mixins)),e.statics&&y(t,e.statics),e.propTypes&&(t.propTypes=e.propTypes),e.defaultProps&&(t.defaultProps=e.defaultProps),e.getDefaultProps&&(t.defaultProps=e.getDefaultProps()),v.prototype=S.prototype,t.prototype=y(new v,e),t.displayName=e.displayName||"Component",t}function g(e){for(var t={},n=0;n<e.length;n++){var r=e[n];for(var o in r)r.hasOwnProperty(o)&&"function"==typeof r[o]&&(t[o]||(t[o]=[])).push(r[o])}return t}function N(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=O(t[n].concat(e[n]||$),"getDefaultProps"===n||"getInitialState"===n||"getChildContext"===n))}function C(e){for(var t in e){var n=e[t];"function"!=typeof n||n.__bound||M.hasOwnProperty(t)||((e[t]=n.bind(e)).__bound=!0)}}function w(e,t,n){if("string"==typeof t&&(t=e.constructor.prototype[t]),"function"==typeof t)return t.apply(e,n)}function O(e,t){return function(){for(var n,r=arguments,o=this,i=0;i<e.length;i++){var a=w(o,e[i],r);if(t&&null!=a){n||(n={});for(var s in a)a.hasOwnProperty(s)&&(n[s]=a[s])}else void 0!==a&&(n=a)}return n}}function x(e,t){P.call(this,e,t),this.componentWillReceiveProps=O([P,this.componentWillReceiveProps||"componentWillReceiveProps"]),this.render=O([P,k,this.render||"render",j])}function P(e){if(e){var t=e.children;if(t&&Array.isArray(t)&&1===t.length&&("string"==typeof t[0]||"function"==typeof t[0]||t[0]instanceof z)&&(e.children=t[0])&&"object"==typeof e.children&&(e.children.length=1,e.children[0]=e.children),L){var n="function"==typeof this?this:this.constructor,r=this.propTypes||n.propTypes,o=this.displayName||n.name;r&&A.a.checkPropTypes(r,e,"prop",o)}}}function k(){K=this}function j(){K===this&&(K=null)}function S(e,t,n){T.Component.call(this,e,t),this.state=this.getInitialState?this.getInitialState():{},this.refs={},this._refProxies={},n!==q&&x.call(this,e,t)}function I(e,t){S.call(this,e,t)}n.d(t,"a",function(){return S});var R=n("5D9O"),A=n.n(R),T=n("KM04"),E=(n.n(T),"a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan".split(" ")),U="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,W="undefined"!=typeof Symbol?Symbol.for("__preactCompatWrapper"):"__preactCompatWrapper",M={constructor:1,render:1,shouldComponentUpdate:1,componentWillReceiveProps:1,componentWillUpdate:1,componentDidUpdate:1,componentWillMount:1,componentDidMount:1,componentWillUnmount:1,componentDidUnmount:1},D=/^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/,q={},L="undefined"==typeof process||!process.env||!1,z=n.i(T.h)("a",null).constructor;z.prototype.$$typeof=U,z.prototype.preactCompatUpgraded=!1,z.prototype.preactCompatNormalized=!1,Object.defineProperty(z.prototype,"type",{get:function(){return this.nodeName},set:function(e){this.nodeName=e},configurable:!0}),Object.defineProperty(z.prototype,"props",{get:function(){return this.attributes},set:function(e){this.attributes=e},configurable:!0});var V=T.options.event;T.options.event=function(e){return V&&(e=V(e)),e.persist=Object,e.nativeEvent=e,e};var Q=T.options.vnode;T.options.vnode=function(e){if(!e.preactCompatUpgraded){e.preactCompatUpgraded=!0;var t=e.nodeName,n=e.attributes=y({},e.attributes);"function"==typeof t?(!0===t[W]||t.prototype&&"isReactComponent"in t.prototype)&&(e.children&&""===String(e.children)&&(e.children=void 0),e.children&&(n.children=e.children),e.preactCompatNormalized||c(e),r(e)):(e.children&&""===String(e.children)&&(e.children=void 0),e.children&&(n.children=e.children),n.defaultValue&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),o(e,n))}Q&&Q(e)};var G=function(){};G.prototype.getChildContext=function(){return this.props.context},G.prototype.render=function(e){return e.children[0]};for(var K,$=[],B={},H=E.length;H--;)B[E[H]]=i(E[H]);var Z={configurable:!0,get:function(){return this.class},set:function(e){this.class=e}};y(S.prototype=new T.Component,{constructor:S,isReactComponent:{},replaceState:function(e,t){var n=this;this.setState(e,t);for(var r in n.state)r in e||delete n.state[r]},getDOMNode:function(){return this.base},isMounted:function(){return!!this.base}}),v.prototype=S.prototype,I.prototype=new v,I.prototype.isPureReactComponent=!0,I.prototype.shouldComponentUpdate=function(e,t){return b(this.props,e)||b(this.state,t)}},hIGS:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("KM04"),a=(n.n(i),n("eW0v")),s=n("DEwm");t.a=function(e){function t(){return r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return n.i(i.h)("div",{className:"panel"},n.i(i.h)("h2",{className:"panel-heading"},this.props.copy.panel.heading),n.i(i.h)(s.a,{entities:this.props.entities,attributes:this.props.attributes,operators:this.props.operators,enum:this.props.enum,combinators:this.props.combinators,copy:this.props.copy}))},t}(a.a)},j25A:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("KM04"),a=(n.n(i),n("eW0v")),s=n("Uyz7"),u=n("hIGS"),p=n("rq4c"),l=(n.n(p),n.i(i.h)("h1",null,"Query Builder"));t.a=function(e){function t(){var t=r(this,e.call(this));return t.state={data:null},t}return o(t,e),t.prototype.componentDidMount=function(){var e=this;fetch(s.a.ENDPOINT).then(function(e){return e.json()}).then(function(t){return e.setState({data:t})})},t.prototype.render=function(){var e=this.state.data?n.i(i.h)(u.a,{entities:this.state.data.entity,attributes:this.state.data.attribute,operators:this.state.data.operator,enum:this.state.data.enum,combinators:this.state.data.combinator,copy:this.state.data.copy}):null;return n.i(i.h)("main",{className:"query-builder"},l,e)},t}(a.a)},nzAS:function(e,t,n){"use strict";function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("KM04"),a=(n.n(i),n("eW0v"));t.a=function(e){function t(){return r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.queries.map(function(t){return n.i(i.h)("span",{className:"query",key:t.id},t.combinator?t.combinator+" ":"",t.attribute," ",n.i(i.h)("span",{className:"query-operator"},t.operator)," ",t.input,n.i(i.h)("a",{className:"query-remove",href:"",onClick:function(n){return e.props.onClick(n,t.id)}},"x"))});return n.i(i.h)("div",{className:"queries"},t)},t}(a.a)},pwNi:function(e,t,n){"use strict";var r=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register("/sw.js");var o=function(e){return e&&e.default||e};if("function"==typeof o(n("JkW7"))){var i=document.body.firstElementChild,a=function(){var e=o(n("JkW7"));i=(0,r.render)((0,r.h)(e),document.body,i)};a()}},rq4c:function(){},"wRU+":function(e){"use strict";function t(e,t,r,o,i,a,s,u){if(n(t),!e){var p;if(void 0===t)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[r,o,i,a,s,u],c=0;p=new Error(t.replace(/%s/g,function(){return l[c++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}}var n=function(){};e.exports=t},wVGV:function(e,t,n){"use strict";var r=n("UQex");n("wRU+"),n("Asjh");e.exports=function(){function e(){}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}}});
//# sourceMappingURL=bundle.a7c80.js.map