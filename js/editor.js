var T = {"apiUrl":"https:\/\/edit.telegra.ph","pageId":0};
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Quill=e():t.Quill=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(53)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(2),i=r(o),l=n(18),a=r(l),s=n(29),u=r(s),c=n(30),f=r(c),p=n(42),h=r(p),d=n(34),y=r(d),v=n(31),b=r(v),g=n(32),m=r(g),_=n(43),O=r(_),w=n(33),x=r(w),k=n(44),E=r(k),j=n(51),A=r(j),N=n(52),q=r(N);a["default"].register({"blots/block":u["default"],"blots/block/embed":s.BlockEmbed,"blots/break":f["default"],"blots/container":h["default"],"blots/cursor":y["default"],"blots/embed":b["default"],"blots/inline":m["default"],"blots/scroll":O["default"],"blots/text":x["default"],"modules/clipboard":E["default"],"modules/history":A["default"],"modules/keyboard":q["default"]}),i["default"].register(u["default"],f["default"],y["default"],m["default"],O["default"],x["default"]),t.exports=a["default"]},function(t,e,n){"use strict";var r=n(3),o=n(7),i=n(12),l=n(13),a=n(14),s=n(15),u=n(16),c=n(17),f=n(8),p=n(10),h=n(11),d=n(9),y=n(6),v={Scope:y.Scope,create:y.create,find:y.find,query:y.query,register:y.register,Container:r["default"],Format:o["default"],Leaf:i["default"],Embed:u["default"],Scroll:l["default"],Block:s["default"],Inline:a["default"],Text:c["default"],Attributor:{Attribute:f["default"],Class:p["default"],Style:h["default"],Store:d["default"]}};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=v},function(t,e,n){"use strict";function r(t){var e=a.find(t);if(null==e)try{e=a.create(t)}catch(n){e=a.create(a.Scope.INLINE),[].slice.call(t.childNodes).forEach(function(t){e.domNode.appendChild(t)}),t.parentNode.replaceChild(e.domNode,t),e.attach()}return e}var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(4),l=n(5),a=n(6),s=function(t){function e(){t.apply(this,arguments)}return o(e,t),e.prototype.appendChild=function(t){this.insertBefore(t)},e.prototype.attach=function(){var e=this;t.prototype.attach.call(this),this.children=new i["default"],[].slice.call(this.domNode.childNodes).reverse().forEach(function(t){try{var n=r(t);e.insertBefore(n,e.children.head)}catch(o){if(o instanceof a.ParchmentError)return;throw o}})},e.prototype.deleteAt=function(t,e){return 0===t&&e===this.length()?this.remove():void this.children.forEachAt(t,e,function(t,e,n){t.deleteAt(e,n)})},e.prototype.descendant=function(t,n){var r=this.children.find(n),o=r[0],i=r[1];return null==t.blotName&&t(o)||null!=t.blotName&&o instanceof t?[o,i]:o instanceof e?o.descendant(t,i):[null,-1]},e.prototype.descendants=function(t,n,r){void 0===n&&(n=0),void 0===r&&(r=Number.MAX_VALUE);var o=[],i=r;return this.children.forEachAt(n,r,function(n,r,l){(null==t.blotName&&t(n)||null!=t.blotName&&n instanceof t)&&o.push(n),n instanceof e&&(o=o.concat(n.descendants(t,r,i))),i-=l}),o},e.prototype.detach=function(){this.children.forEach(function(t){t.detach()}),t.prototype.detach.call(this)},e.prototype.formatAt=function(t,e,n,r){this.children.forEachAt(t,e,function(t,e,o){t.formatAt(e,o,n,r)})},e.prototype.insertAt=function(t,e,n){var r=this.children.find(t),o=r[0],i=r[1];if(o)o.insertAt(i,e,n);else{var l=null==n?a.create("text",e):a.create(e,n);this.appendChild(l)}},e.prototype.insertBefore=function(t,e){if(null!=this.statics.allowedChildren&&!this.statics.allowedChildren.some(function(e){return t instanceof e}))throw new a.ParchmentError("Cannot insert "+t.statics.blotName+" into "+this.statics.blotName);t.insertInto(this,e)},e.prototype.length=function(){return this.children.reduce(function(t,e){return t+e.length()},0)},e.prototype.moveChildren=function(t,e){this.children.forEach(function(n){t.insertBefore(n,e)})},e.prototype.optimize=function(){if(t.prototype.optimize.call(this),0===this.children.length)if(null!=this.statics.defaultChild){var e=a.create(this.statics.defaultChild);this.appendChild(e),e.optimize()}else this.remove()},e.prototype.path=function(t,n){void 0===n&&(n=!1);var r=this.children.find(t,n),o=r[0],i=r[1],l=[[this,t]];return o instanceof e?l.concat(o.path(i,n)):(null!=o&&l.push([o,i]),l)},e.prototype.removeChild=function(t){this.children.remove(t)},e.prototype.replace=function(n){n instanceof e&&n.moveChildren(this),t.prototype.replace.call(this,n)},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=this.clone();return this.parent.insertBefore(n,this.next),this.children.forEachAt(t,this.length(),function(t,r,o){t=t.split(r,e),n.appendChild(t)}),n},e.prototype.unwrap=function(){this.moveChildren(this.parent,this.next),this.remove()},e.prototype.update=function(t){var e=this,n=[],o=[];t.forEach(function(t){t.target===e.domNode&&"childList"===t.type&&(n.push.apply(n,t.addedNodes),o.push.apply(o,t.removedNodes))}),o.forEach(function(t){if(!(null!=t.parentNode&&document.body.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY)){var n=a.find(t);null!=n&&(null!=n.domNode.parentNode&&n.domNode.parentNode!==e.domNode||n.detach())}}),n.filter(function(t){return t.parentNode==e.domNode}).sort(function(t,e){return t===e?0:t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING?1:-1}).forEach(function(t){var n=null;null!=t.nextSibling&&(n=a.find(t.nextSibling));var o=r(t);o.next==n&&null!=o.next||(null!=o.parent&&o.parent.removeChild(e),e.insertBefore(o,n))})},e}(l["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s},function(t,e){"use strict";var n=function(){function t(){this.head=this.tail=void 0,this.length=0}return t.prototype.append=function(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];this.insertBefore(t[0],void 0),t.length>1&&this.append.apply(this,t.slice(1))},t.prototype.contains=function(t){for(var e,n=this.iterator();e=n();)if(e===t)return!0;return!1},t.prototype.insertBefore=function(t,e){t.next=e,null!=e?(t.prev=e.prev,null!=e.prev&&(e.prev.next=t),e.prev=t,e===this.head&&(this.head=t)):null!=this.tail?(this.tail.next=t,t.prev=this.tail,this.tail=t):(t.prev=void 0,this.head=this.tail=t),this.length+=1},t.prototype.offset=function(t){for(var e=0,n=this.head;null!=n;){if(n===t)return e;e+=n.length(),n=n.next}return-1},t.prototype.remove=function(t){this.contains(t)&&(null!=t.prev&&(t.prev.next=t.next),null!=t.next&&(t.next.prev=t.prev),t===this.head&&(this.head=t.next),t===this.tail&&(this.tail=t.prev),this.length-=1)},t.prototype.iterator=function(t){return void 0===t&&(t=this.head),function(){var e=t;return null!=t&&(t=t.next),e}},t.prototype.find=function(t,e){void 0===e&&(e=!1);for(var n,r=this.iterator();n=r();){var o=n.length();if(t<o||e&&t===o&&(null==n.next||0!==n.next.length()))return[n,t];t-=o}return[null,0]},t.prototype.forEach=function(t){for(var e,n=this.iterator();e=n();)t(e)},t.prototype.forEachAt=function(t,e,n){if(!(e<=0))for(var r,o=this.find(t),i=o[0],l=o[1],a=t-l,s=this.iterator(i);(r=s())&&a<t+e;){var u=r.length();t>a?n(r,t-a,Math.min(e,a+u-t)):n(r,0,Math.min(u,t+e-a)),a+=u}},t.prototype.map=function(t){return this.reduce(function(e,n){return e.push(t(n)),e},[])},t.prototype.reduce=function(t,e){for(var n,r=this.iterator();n=r();)e=t(e,n);return e},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";var r=n(6),o=function(){function t(t){this.domNode=t,this.attach()}return Object.defineProperty(t.prototype,"statics",{get:function(){return this.constructor},enumerable:!0,configurable:!0}),t.create=function(t){if(null==this.tagName)throw new r.ParchmentError("Blot definition missing tagName");var e;return Array.isArray(this.tagName)?("string"==typeof t&&(t=t.toUpperCase(),parseInt(t).toString()===t&&(t=parseInt(t))),e="number"==typeof t?document.createElement(this.tagName[t-1]):this.tagName.indexOf(t)>-1?document.createElement(t):document.createElement(this.tagName[0])):e=document.createElement(this.tagName),this.className&&e.classList.add(this.className),e},t.prototype.attach=function(){this.domNode[r.DATA_KEY]={blot:this}},t.prototype.clone=function(){var t=this.domNode.cloneNode();return r.create(t)},t.prototype.detach=function(){null!=this.parent&&this.parent.removeChild(this),delete this.domNode[r.DATA_KEY]},t.prototype.deleteAt=function(t,e){var n=this.isolate(t,e);n.remove()},t.prototype.formatAt=function(t,e,n,o){var i=this.isolate(t,e);if(null!=r.query(n,r.Scope.BLOT)&&o)i.wrap(n,o);else if(null!=r.query(n,r.Scope.ATTRIBUTE)){var l=r.create(this.statics.scope);i.wrap(l),l.format(n,o)}},t.prototype.insertAt=function(t,e,n){var o=null==n?r.create("text",e):r.create(e,n),i=this.split(t);this.parent.insertBefore(o,i)},t.prototype.insertInto=function(t,e){if(null!=this.parent&&this.parent.children.remove(this),t.children.insertBefore(this,e),null!=e)var n=e.domNode;null!=this.next&&this.domNode.nextSibling==n||t.domNode.insertBefore(this.domNode,n),this.parent=t},t.prototype.isolate=function(t,e){var n=this.split(t);return n.split(e),n},t.prototype.length=function(){return 1},t.prototype.offset=function(t){return void 0===t&&(t=this.parent),null==this.parent||this==t?0:this.parent.children.offset(this)+this.parent.offset(t)},t.prototype.optimize=function(){null!=this.domNode[r.DATA_KEY]&&delete this.domNode[r.DATA_KEY].mutations},t.prototype.remove=function(){null!=this.domNode.parentNode&&this.domNode.parentNode.removeChild(this.domNode),this.detach()},t.prototype.replace=function(t){null!=t.parent&&(t.parent.insertBefore(this,t.next),t.remove())},t.prototype.replaceWith=function(t,e){var n="string"==typeof t?r.create(t,e):t;return n.replace(this),n},t.prototype.split=function(t,e){return 0===t?this:this.next},t.prototype.update=function(t){void 0===t&&(t=[])},t.prototype.wrap=function(t,e){var n="string"==typeof t?r.create(t,e):t;return null!=this.parent&&this.parent.insertBefore(n,this.next),n.appendChild(this),n},t.blotName="abstract",t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o},function(t,e){"use strict";function n(t,e){var n=o(t);if(null==n)throw new a("Unable to create "+t+" blot");var r=n,i=t instanceof Node?t:r.create(e);return new r(i,e)}function r(t,n){return void 0===n&&(n=!1),null==t?null:null!=t[e.DATA_KEY]?t[e.DATA_KEY].blot:n?r(t.parentNode,n):null}function o(t,e){void 0===e&&(e=p.ANY);var n;if("string"==typeof t)n=f[t]||s[t];else if(t instanceof Text)n=f.text;else if("number"==typeof t)t&p.LEVEL&p.BLOCK?n=f.block:t&p.LEVEL&p.INLINE&&(n=f.inline);else if(t instanceof HTMLElement){var r=(t.getAttribute("class")||"").split(/\s+/);for(var o in r)if(n=u[r[o]])break;n=n||c[t.tagName]}return null==n?null:e&p.LEVEL&n.scope&&e&p.TYPE&n.scope?n:null}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e-0]=arguments[e];if(t.length>1)return t.map(function(t){return i(t)});var n=t[0];if("string"!=typeof n.blotName&&"string"!=typeof n.attrName)throw new a("Invalid definition");if("abstract"===n.blotName)throw new a("Cannot register abstract class");if(f[n.blotName||n.attrName]=n,"string"==typeof n.keyName)s[n.keyName]=n;else if(null!=n.className&&(u[n.className]=n),null!=n.tagName){Array.isArray(n.tagName)?n.tagName=n.tagName.map(function(t){return t.toUpperCase()}):n.tagName=n.tagName.toUpperCase();var r=Array.isArray(n.tagName)?n.tagName:[n.tagName];r.forEach(function(t){null!=c[t]&&null!=n.className||(c[t]=n)})}return n}var l=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},a=function(t){function e(e){e="[Parchment] "+e,t.call(this,e),this.message=e,this.name=this.constructor.name}return l(e,t),e}(Error);e.ParchmentError=a;var s={},u={},c={},f={};e.DATA_KEY="__blot",function(t){t[t.TYPE=3]="TYPE",t[t.LEVEL=12]="LEVEL",t[t.ATTRIBUTE=13]="ATTRIBUTE",t[t.BLOT=14]="BLOT",t[t.INLINE=7]="INLINE",t[t.BLOCK=11]="BLOCK",t[t.BLOCK_BLOT=10]="BLOCK_BLOT",t[t.INLINE_BLOT=6]="INLINE_BLOT",t[t.BLOCK_ATTRIBUTE=9]="BLOCK_ATTRIBUTE",t[t.INLINE_ATTRIBUTE=5]="INLINE_ATTRIBUTE",t[t.ANY=15]="ANY"}(e.Scope||(e.Scope={}));var p=e.Scope;e.create=n,e.find=r,e.query=o,e.register=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(8),i=n(9),l=n(3),a=n(6),s=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.formats=function(t){return"string"==typeof this.tagName||(Array.isArray(this.tagName)?t.tagName.toLowerCase():void 0)},e.prototype.attach=function(){t.prototype.attach.call(this),this.attributes=new i["default"](this.domNode)},e.prototype.format=function(t,e){var n=a.query(t);n instanceof o["default"]?this.attributes.attribute(n,e):e&&(null==n||t===this.statics.blotName&&this.formats()[t]===e||this.replaceWith(t,e))},e.prototype.formats=function(){var t=this.attributes.values(),e=this.statics.formats(this.domNode);return null!=e&&(t[this.statics.blotName]=e),t},e.prototype.replaceWith=function(e,n){var r=t.prototype.replaceWith.call(this,e,n);return this.attributes.copy(r),r},e.prototype.update=function(e){var n=this;t.prototype.update.call(this,e),e.some(function(t){return t.target===n.domNode&&"attributes"===t.type})&&this.attributes.build()},e.prototype.wrap=function(n,r){var o=t.prototype.wrap.call(this,n,r);return o instanceof e&&o.statics.scope===this.statics.scope&&this.attributes.move(o),o},e}(l["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s},function(t,e,n){"use strict";var r=n(6),o=function(){function t(t,e,n){void 0===n&&(n={}),this.attrName=t,this.keyName=e;var o=r.Scope.TYPE&r.Scope.ATTRIBUTE;null!=n.scope?this.scope=n.scope&r.Scope.LEVEL|o:this.scope=r.Scope.ATTRIBUTE,null!=n.whitelist&&(this.whitelist=n.whitelist)}return t.keys=function(t){return[].map.call(t.attributes,function(t){return t.name})},t.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.setAttribute(this.keyName,e),!0)},t.prototype.canAdd=function(t,e){var n=r.query(t,r.Scope.BLOT&(this.scope|r.Scope.TYPE));return null!=n&&(null==this.whitelist||this.whitelist.indexOf(e)>-1)},t.prototype.remove=function(t){t.removeAttribute(this.keyName)},t.prototype.value=function(t){return t.getAttribute(this.keyName)},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o},function(t,e,n){"use strict";var r=n(8),o=n(10),i=n(11),l=n(6),a=function(){function t(t){this.attributes={},this.domNode=t,this.build()}return t.prototype.attribute=function(t,e){e?t.add(this.domNode,e)&&(null!=t.value(this.domNode)?this.attributes[t.attrName]=t:delete this.attributes[t.attrName]):(t.remove(this.domNode),delete this.attributes[t.attrName])},t.prototype.build=function(){var t=this;this.attributes={};var e=r["default"].keys(this.domNode),n=o["default"].keys(this.domNode),a=i["default"].keys(this.domNode);e.concat(n).concat(a).forEach(function(e){var n=l.query(e,l.Scope.ATTRIBUTE);n instanceof r["default"]&&(t.attributes[n.attrName]=n)})},t.prototype.copy=function(t){var e=this;Object.keys(this.attributes).forEach(function(n){var r=e.attributes[n].value(e.domNode);t.format(n,r)})},t.prototype.move=function(t){var e=this;this.copy(t),Object.keys(this.attributes).forEach(function(t){e.attributes[t].remove(e.domNode)}),this.attributes={}},t.prototype.values=function(){var t=this;return Object.keys(this.attributes).reduce(function(e,n){return e[n]=t.attributes[n].value(t.domNode),e},{})},t}();Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a},function(t,e,n){"use strict";function r(t,e){var n=t.getAttribute("class")||"";return n.split(/\s+/).filter(function(t){return 0===t.indexOf(e+"-")})}var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(8),l=function(t){function e(){t.apply(this,arguments)}return o(e,t),e.keys=function(t){return(t.getAttribute("class")||"").split(/\s+/).map(function(t){return t.split("-").slice(0,-1).join("-")})},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(this.remove(t),t.classList.add(this.keyName+"-"+e),!0)},e.prototype.remove=function(t){var e=r(t,this.keyName);e.forEach(function(e){t.classList.remove(e)}),0===t.classList.length&&t.removeAttribute("class")},e.prototype.value=function(t){var e=r(t,this.keyName)[0]||"";return e.slice(this.keyName.length+1)},e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=l},function(t,e,n){"use strict";function r(t){var e=t.split("-"),n=e.slice(1).map(function(t){return t[0].toUpperCase()+t.slice(1)}).join("");return e[0]+n}var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(8),l=function(t){function e(){t.apply(this,arguments)}return o(e,t),e.keys=function(t){return(t.getAttribute("style")||"").split(";").map(function(t){var e=t.split(":");return e[0].trim()})},e.prototype.add=function(t,e){return!!this.canAdd(t,e)&&(t.style[r(this.keyName)]=e,!0)},e.prototype.remove=function(t){t.style[r(this.keyName)]="",t.getAttribute("style")||t.removeAttribute("style")},e.prototype.value=function(t){return t.style[r(this.keyName)]},e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=l},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(5),i=n(6),l=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.value=function(t){return!0},e.prototype.index=function(t,e){return t!==this.domNode?-1:Math.min(e,1)},e.prototype.position=function(t,e){var n=[].indexOf.call(this.parent.domNode.childNodes,this.domNode);return t>0&&(n+=1),[this.parent.domNode,n]},e.prototype.value=function(){return t={},t[this.statics.blotName]=this.statics.value(this.domNode)||!0,t;var t},e.scope=i.Scope.INLINE_BLOT,e}(o["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=l},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(3),i=n(6),l={characterData:!0,characterDataOldValue:!0,childList:!0,subtree:!0},a=100,s=function(t){function e(e){var n=this;t.call(this,e),this.parent=null,this.observer=new MutationObserver(function(t){n.update(t)}),this.observer.observe(this.domNode,l)}return r(e,t),e.prototype.detach=function(){t.prototype.detach.call(this),this.observer.disconnect()},e.prototype.deleteAt=function(e,n){this.update(),0===e&&n===this.length()?this.children.forEach(function(t){t.remove()}):t.prototype.deleteAt.call(this,e,n)},e.prototype.formatAt=function(e,n,r,o){this.update(),t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){this.update(),t.prototype.insertAt.call(this,e,n,r)},e.prototype.optimize=function(e){var n=this;void 0===e&&(e=[]),t.prototype.optimize.call(this),e.push.apply(e,this.observer.takeRecords());for(var r=function(t,e){void 0===e&&(e=!0),null!=t&&t!==n&&null!=t.domNode.parentNode&&(null==t.domNode[i.DATA_KEY].mutations&&(t.domNode[i.DATA_KEY].mutations=[]),e&&r(t.parent))},l=function(t){null!=t.domNode[i.DATA_KEY]&&null!=t.domNode[i.DATA_KEY].mutations&&(t instanceof o["default"]&&t.children.forEach(l),t.optimize())},s=e,u=0;s.length>0;u+=1){if(u>=a)throw new Error("[Parchment] Maximum optimize iterations reached");s.forEach(function(t){var e=i.find(t.target,!0);null!=e&&(e.domNode===t.target&&("childList"===t.type?(r(i.find(t.previousSibling,!1)),[].forEach.call(t.addedNodes,function(t){var e=i.find(t,!1);r(e,!1),e instanceof o["default"]&&e.children.forEach(function(t){r(t,!1)})})):"attributes"===t.type&&r(e.prev)),r(e))}),this.children.forEach(l),s=this.observer.takeRecords(),e.push.apply(e,s)}},e.prototype.update=function(e){var n=this;e=e||this.observer.takeRecords(),e.map(function(t){var e=i.find(t.target,!0);if(null!=e)return null==e.domNode[i.DATA_KEY].mutations?(e.domNode[i.DATA_KEY].mutations=[t],e):(e.domNode[i.DATA_KEY].mutations.push(t),null)}).forEach(function(t){null!=t&&t!==n&&null!=t.domNode[i.DATA_KEY]&&t.update(t.domNode[i.DATA_KEY].mutations||[])}),null!=this.domNode[i.DATA_KEY].mutations&&t.prototype.update.call(this,this.domNode[i.DATA_KEY].mutations),this.optimize(e)},e.blotName="scroll",e.defaultChild="block",e.scope=i.Scope.BLOCK_BLOT,e.tagName="DIV",e}(o["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=s},function(t,e,n){"use strict";function r(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(t[n]!==e[n])return!1;return!0}var o=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(7),l=n(6),a=function(t){function e(){t.apply(this,arguments)}return o(e,t),e.formats=function(n){if(n.tagName!==e.tagName)return t.formats.call(this,n)},e.prototype.format=function(n,r){var o=this;n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):(this.children.forEach(function(t){t instanceof i["default"]||(t=t.wrap(e.blotName,!0)),o.attributes.copy(t)}),this.unwrap())},e.prototype.formatAt=function(e,n,r,o){if(null!=this.formats()[r]||l.query(r,l.Scope.ATTRIBUTE)){var i=this.isolate(e,n);i.format(r,o)}else t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.optimize=function(){t.prototype.optimize.call(this);var n=this.formats();if(0===Object.keys(n).length)return this.unwrap();var o=this.next;o instanceof e&&o.prev===this&&r(n,o.formats())&&(o.moveChildren(this),o.remove())},e.blotName="inline",e.scope=l.Scope.INLINE_BLOT,e.tagName="SPAN",e}(i["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=a},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(7),i=n(6),l=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.formats=function(n){var r=i.query(e.blotName).tagName;if(n.tagName!==r)return t.formats.call(this,n)},e.prototype.format=function(n,r){null!=i.query(n,i.Scope.BLOCK)&&(n!==this.statics.blotName||r?t.prototype.format.call(this,n,r):this.replaceWith(e.blotName))},e.prototype.formatAt=function(e,n,r,o){null!=i.query(r,i.Scope.BLOCK)?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.insertAt=function(e,n,r){if(null==r||null!=i.query(n,i.Scope.INLINE))t.prototype.insertAt.call(this,e,n,r);else{var o=this.split(e),l=i.create(n,r);o.parent.insertBefore(l,o)}},e.blotName="block",e.scope=i.Scope.BLOCK_BLOT,e.tagName="P",e}(o["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=l},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(12),i=function(t){function e(){t.apply(this,arguments)}return r(e,t),e.formats=function(t){},e.prototype.format=function(e,n){t.prototype.formatAt.call(this,0,this.length(),e,n)},e.prototype.formatAt=function(e,n,r,o){0===e&&n===this.length()?this.format(r,o):t.prototype.formatAt.call(this,e,n,r,o)},e.prototype.formats=function(){return this.statics.formats(this.domNode)},e}(o["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i},function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},o=n(12),i=n(6),l=function(t){function e(e){t.call(this,e),this.text=this.statics.value(this.domNode)}return r(e,t),e.create=function(t){return document.createTextNode(t)},e.value=function(t){return t.data},e.prototype.deleteAt=function(t,e){this.domNode.data=this.text=this.text.slice(0,t)+this.text.slice(t+e)},e.prototype.index=function(t,e){return this.domNode===t?e:-1},e.prototype.insertAt=function(e,n,r){null==r?(this.text=this.text.slice(0,e)+n+this.text.slice(e),this.domNode.data=this.text):t.prototype.insertAt.call(this,e,n,r)},e.prototype.length=function(){return this.text.length},e.prototype.optimize=function(){t.prototype.optimize.call(this),this.text=this.statics.value(this.domNode),0===this.text.length?this.remove():this.next instanceof e&&this.next.prev===this&&(this.insertAt(this.length(),this.next.value()),this.next.remove())},e.prototype.position=function(t,e){return void 0===e&&(e=!1),[this.domNode,t]},e.prototype.split=function(t,e){if(void 0===e&&(e=!1),!e){if(0===t)return this;if(t===this.length())return this.next}var n=i.create(this.domNode.splitText(t));return this.parent.insertBefore(n,this.next),this.text=this.statics.value(this.domNode),n},e.prototype.update=function(t){var e=this;t.some(function(t){return"characterData"===t.type&&t.target===e.domNode})&&(this.text=this.statics.value(this.domNode))},e.prototype.value=function(){return this.text},e.blotName="text",e.scope=i.Scope.INLINE_BLOT,e}(o["default"]);Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(e=(0,j["default"])(!0,{container:t,modules:{clipboard:!0,keyboard:!0,history:!0}},e),e.theme&&e.theme!==S.DEFAULTS.theme){if(e.theme=S["import"]("themes/"+e.theme),null==e.theme)throw new Error("Invalid theme "+e.theme+". Did you register it?")}else e.theme=T["default"];var n=(0,j["default"])(!0,{},e.theme.DEFAULTS);[n,e].forEach(function(t){t.modules=t.modules||{},Object.keys(t.modules).forEach(function(e){t.modules[e]===!0&&(t.modules[e]={})})});var r=Object.keys(n.modules).concat(Object.keys(e.modules)),o=r.reduce(function(t,e){var n=S["import"]("modules/"+e);return null==n?P.error("Cannot load "+e+" module. Are you sure you registered it?"):t[e]=n.DEFAULTS||{},t},{});return null!=e.modules&&e.modules.toolbar&&e.modules.toolbar.constructor!==Object&&(e.modules.toolbar={container:e.modules.toolbar}),e=(0,j["default"])(!0,{},S.DEFAULTS,{modules:o},n,e),["bounds","container"].forEach(function(t){"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),e.modules=Object.keys(e.modules).reduce(function(t,n){return e.modules[n]&&(t[n]=e.modules[n]),t},{}),e}function a(t,e,n,r){if(!this.options.strict&&!this.isEnabled()&&e===g["default"].sources.USER)return new d["default"];var o=null==n?null:this.getSelection(),i=this.editor.delta,l=t();if(null!=o&&(n===!0&&(n=o.index),null==r?o=u(o,l,e):0!==r&&(o=u(o,n,r,e)),this.setSelection(o,g["default"].sources.SILENT)),l.length()>0){var a,s=[g["default"].events.TEXT_CHANGE,l,i,e];if((a=this.emitter).emit.apply(a,[g["default"].events.EDITOR_CHANGE].concat(s)),e!==g["default"].sources.SILENT){var c;(c=this.emitter).emit.apply(c,s)}}return l}function s(t,e,n,r,o){var i={};return"number"==typeof t.index&&"number"==typeof t.length?"number"!=typeof e?(o=r,r=n,n=e,e=t.length,t=t.index):(e=t.length,t=t.index):"number"!=typeof e&&(o=r,r=n,n=e,e=0),"object"===("undefined"==typeof n?"undefined":c(n))?(i=n,o=r):"string"==typeof n&&(null!=r?i[n]=r:o=n),o=o||g["default"].sources.API,[t,e,i,o]}function u(t,e,n,r){if(null==t)return null;var o=void 0,i=void 0;if(e instanceof d["default"]){var l=[t.index,t.index+t.length].map(function(t){return e.transformPosition(t,r===g["default"].sources.USER)}),a=f(l,2);o=a[0],i=a[1]}else{var s=[t.index,t.index+t.length].map(function(t){return t<e||t===e&&r!==g["default"].sources.USER?t:n>=0?t+n:Math.max(e,t+n)}),u=f(s,2);o=u[0],i=u[1]}return new x.Range(o,i-o)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.overload=e.expandConfig=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();n(19);var h=n(20),d=r(h),y=n(27),v=r(y),b=n(35),g=r(b),m=n(39),_=r(m),O=n(2),w=r(O),x=n(40),k=r(x),E=n(25),j=r(E),A=n(37),N=r(A),q=n(41),T=r(q),P=(0,N["default"])("quill"),S=function(){function t(e){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i(this,t),this.options=l(e,r),this.container=this.options.container,null==this.container)return P.error("Invalid Quill container",e);this.options.debug&&t.debug(this.options.debug),this.fileSizeLimit=this.options.fileSizeLimit,this.fileSizeLimitCallback=this.options.fileSizeLimitCallback,this.updatePhoto=this.options.updatePhoto||function(t,e){e&&e(t)};var o=this.container.innerHTML.trim();this.container.classList.add("ql-container"),this.container.innerHTML="",this.root=this.addContainer("ql-editor"),this.root.classList.add("ql-blank"),this.emitter=new g["default"],this.scroll=w["default"].create(this.root,{emitter:this.emitter,whitelist:this.options.formats}),this.editor=new v["default"](this.scroll),this.selection=new k["default"](this.scroll,this.emitter),this.theme=new this.options.theme(this,this.options),this.keyboard=this.theme.addModule("keyboard"),this.clipboard=this.theme.addModule("clipboard"),this.history=this.theme.addModule("history"),this.theme.init(),this.emitter.on(g["default"].events.EDITOR_CHANGE,function(t){t===g["default"].events.TEXT_CHANGE&&n.root.classList.toggle("ql-blank",n.editor.isBlank())}),this.emitter.on(g["default"].events.SCROLL_UPDATE,function(t,e){var r=n.selection.lastRange,o=r&&0===r.length?r.index:void 0;a.call(n,function(){return n.editor.update(null,e,o)},t)});var s=this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">"+o+"<p><br></p></div>");this.setContents(s),this.history.clear(),this.options.placeholder&&this.root.setAttribute("data-placeholder",this.options.placeholder),this.options.readOnly&&this.disable()}return p(t,null,[{key:"debug",value:function(t){t===!0&&(t="log"),N["default"].level(t)}},{key:"import",value:function(t){return null==this.imports[t]&&P.error("Cannot import "+t+". Are you sure it was registered?"),this.imports[t]}},{key:"register",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"!=typeof t){var o=t.attrName||t.blotName;"string"==typeof o?this.register("formats/"+o,t,e):Object.keys(t).forEach(function(r){n.register(r,t[r],e)})}else null!=this.imports[t]&&!r,this.imports[t]=e,(t.startsWith("blots/")||t.startsWith("formats/"))&&"abstract"!==e.blotName&&w["default"].register(e);
}}]),p(t,[{key:"addContainer",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof t){var n=t;t=document.createElement("div"),t.classList.add(n)}return this.container.insertBefore(t,e),t}},{key:"blur",value:function(){this.selection.setRange(null)}},{key:"deleteText",value:function(t,e,n){var r=this,o=s(t,e,n),i=f(o,4);return t=i[0],e=i[1],n=i[3],a.call(this,function(){return r.editor.deleteText(t,e)},n,t,-1*e)}},{key:"disable",value:function(){this.enable(!1)}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.scroll.enable(t),this.container.classList.toggle("ql-disabled",!t),t||this.blur()}},{key:"focus",value:function(){this.selection.focus(),this.selection.scrollIntoView()}},{key:"format",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g["default"].sources.API;return a.call(this,function(){var r=n.getSelection(!0),i=new d["default"];if(null==r)return i;if(w["default"].query(t,w["default"].Scope.BLOCK))i=n.editor.formatLine(r.index,r.length,o({},t,e));else{if(0===r.length)return n.selection.format(t,e),i;i=n.editor.formatText(r.index,r.length,o({},t,e))}return n.setSelection(r,g["default"].sources.SILENT),i},r)}},{key:"formatLine",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,e,n,r,o),c=f(u,4);return t=c[0],e=c[1],l=c[2],o=c[3],a.call(this,function(){return i.editor.formatLine(t,e,l)},o,t,0)}},{key:"formatText",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,e,n,r,o),c=f(u,4);return t=c[0],e=c[1],l=c[2],o=c[3],a.call(this,function(){return i.editor.formatText(t,e,l)},o,t,0)}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof t?this.selection.getBounds(t,e):this.selection.getBounds(t.index,t.length)}},{key:"getContents",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=s(t,e),r=f(n,2);return t=r[0],e=r[1],this.editor.getContents(t,e)}},{key:"getFormat",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getSelection(),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return"number"==typeof t?this.editor.getFormat(t,e):this.editor.getFormat(t.index,t.length)}},{key:"getLength",value:function(){return this.scroll.length()}},{key:"getModule",value:function(t){return this.theme.modules[t]}},{key:"getSelection",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t&&this.focus(),this.update(),this.selection.getRange()[0]}},{key:"getText",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getLength()-t,n=s(t,e),r=f(n,2);return t=r[0],e=r[1],this.editor.getText(t,e)}},{key:"hasFocus",value:function(){return this.selection.hasFocus()}},{key:"insertEmbed",value:function(e,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.sources.API;return a.call(this,function(){return o.editor.insertEmbed(e,n,r)},i,e)}},{key:"insertText",value:function(t,e,n,r,o){var i=this,l=void 0,u=s(t,0,n,r,o),c=f(u,4);return t=c[0],l=c[2],o=c[3],a.call(this,function(){return i.editor.insertText(t,e,l)},o,t,e.length)}},{key:"isEnabled",value:function(){return!this.container.classList.contains("ql-disabled")}},{key:"off",value:function(){return this.emitter.off.apply(this.emitter,arguments)}},{key:"on",value:function(){return this.emitter.on.apply(this.emitter,arguments)}},{key:"once",value:function(){return this.emitter.once.apply(this.emitter,arguments)}},{key:"pasteHTML",value:function(t,e,n){this.clipboard.dangerouslyPasteHTML(t,e,n)}},{key:"removeFormat",value:function(t,e,n){var r=this,o=s(t,e,n),i=f(o,4);return t=i[0],e=i[1],n=i[3],a.call(this,function(){return r.editor.removeFormat(t,e)},n,t)}},{key:"setContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g["default"].sources.API;return a.call(this,function(){t=new d["default"](t);var n=e.getLength(),r=e.editor.deleteText(0,n),o=e.editor.applyDelta(t),i=o.ops[o.ops.length-1];null!=i&&"\n"===i.insert[i.insert.length-1]&&(e.editor.deleteText(e.getLength()-1,1),o["delete"](1));var l=r.compose(o);return l},n)}},{key:"setSelection",value:function(e,n,r){if(null==e)this.selection.setRange(null,n||t.sources.API);else{var o=s(e,n,r),i=f(o,4);e=i[0],n=i[1],r=i[3],this.selection.setRange(new x.Range(e,n),r)}this.selection.scrollIntoView()}},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g["default"].sources.API,n=(new d["default"]).insert(t);return this.setContents(n,e)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g["default"].sources.USER,e=this.scroll.update(t);return this.selection.update(t),e}},{key:"updateContents",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g["default"].sources.API;return a.call(this,function(){return t=new d["default"](t),e.editor.applyDelta(t,n)},n,!0)}}]),t}();S.DEFAULTS={bounds:null,formats:null,modules:{},placeholder:"",readOnly:!1,strict:!0,theme:"default"},S.events=g["default"].events,S.sources=g["default"].sources,S.version="1.1.3",S.imports={delta:d["default"],parchment:w["default"],"core/module":_["default"],"core/theme":T["default"]},e.expandConfig=l,e.overload=s,e["default"]=S},function(t,e){"use strict";var n=document.createElement("div");n.classList.toggle("test-class",!1),n.classList.contains("test-class")&&!function(){var t=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,n){return arguments.length>1&&!this.contains(e)==!n?n:t.call(this,e)}}(),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return e=e||0,this.substr(e,t.length)===t}),String.prototype.endsWith||(String.prototype.endsWith=function(t,e){var n=this.toString();("number"!=typeof e||!isFinite(e)||Math.floor(e)!==e||e>n.length)&&(e=n.length),e-=t.length;var r=n.indexOf(t,e);return r!==-1&&r===e}),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function r(t){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var r,e=Object(this),n=e.length>>>0,o=arguments[1],i=0;i<n;i++)if(r=e[i],t.call(o,r,i,e))return r}}),document.addEventListener("DOMContentLoaded",function(){document.execCommand("enableObjectResizing",!1,!1)})},function(t,e,n){var r=n(21),o=n(22),i=n(25),l=n(26),a=String.fromCharCode(0),s=function(t){Array.isArray(t)?this.ops=t:null!=t&&Array.isArray(t.ops)?this.ops=t.ops:this.ops=[]};s.prototype.insert=function(t,e){var n={};return 0===t.length?this:(n.insert=t,e instanceof Object&&Object.keys(e).length>0&&(n.attributes=e),this.push(n))},s.prototype["delete"]=function(t){return t<=0?this:this.push({"delete":t})},s.prototype.retain=function(t,e){if(t<=0)return this;var n={retain:t};return e instanceof Object&&Object.keys(e).length>0&&(n.attributes=e),this.push(n)},s.prototype.push=function(t){var e=this.ops.length,n=this.ops[e-1];if(t=i(!0,{},t),"object"==typeof n){if("number"==typeof t["delete"]&&"number"==typeof n["delete"])return this.ops[e-1]={"delete":n["delete"]+t["delete"]},this;if("number"==typeof n["delete"]&&null!=t.insert&&(e-=1,n=this.ops[e-1],"object"!=typeof n))return this.ops.unshift(t),this;if(o(t.attributes,n.attributes)){if("string"==typeof t.insert&&"string"==typeof n.insert)return this.ops[e-1]={insert:n.insert+t.insert},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this;if("number"==typeof t.retain&&"number"==typeof n.retain)return this.ops[e-1]={retain:n.retain+t.retain},"object"==typeof t.attributes&&(this.ops[e-1].attributes=t.attributes),this}}return e===this.ops.length?this.ops.push(t):this.ops.splice(e,0,t),this},s.prototype.filter=function(t){return this.ops.filter(t)},s.prototype.forEach=function(t){this.ops.forEach(t)},s.prototype.map=function(t){return this.ops.map(t)},s.prototype.partition=function(t){var e=[],n=[];return this.forEach(function(r){var o=t(r)?e:n;o.push(r)}),[e,n]},s.prototype.reduce=function(t,e){return this.ops.reduce(t,e)},s.prototype.chop=function(){var t=this.ops[this.ops.length-1];return t&&t.retain&&!t.attributes&&this.ops.pop(),this},s.prototype.length=function(){return this.reduce(function(t,e){return t+l.length(e)},0)},s.prototype.slice=function(t,e){t=t||0,"number"!=typeof e&&(e=1/0);for(var n=[],r=l.iterator(this.ops),o=0;o<e&&r.hasNext();){var i;o<t?i=r.next(t-o):(i=r.next(e-o),n.push(i)),o+=l.length(i)}return new s(n)},s.prototype.compose=function(t){for(var e=l.iterator(this.ops),n=l.iterator(t.ops),r=new s;e.hasNext()||n.hasNext();)if("insert"===n.peekType())r.push(n.next());else if("delete"===e.peekType())r.push(e.next());else{var o=Math.min(e.peekLength(),n.peekLength()),i=e.next(o),a=n.next(o);if("number"==typeof a.retain){var u={};"number"==typeof i.retain?u.retain=o:u.insert=i.insert;var c=l.attributes.compose(i.attributes,a.attributes,"number"==typeof i.retain);c&&(u.attributes=c),r.push(u)}else"number"==typeof a["delete"]&&"number"==typeof i.retain&&r.push(a)}return r.chop()},s.prototype.concat=function(t){var e=new s(this.ops.slice());return t.ops.length>0&&(e.push(t.ops[0]),e.ops=e.ops.concat(t.ops.slice(1))),e},s.prototype.diff=function(t,e){if(this.ops===t.ops)return new s;var n=[this,t].map(function(e){return e.map(function(e){if(null!=e.insert)return"string"==typeof e.insert?e.insert:a;var n=ops===t.ops?"on":"with";throw new Error("diff() called "+n+" non-document")}).join("")}),i=new s,u=r(n[0],n[1],e),c=l.iterator(this.ops),f=l.iterator(t.ops);return u.forEach(function(t){for(var e=t[1].length;e>0;){var n=0;switch(t[0]){case r.INSERT:n=Math.min(f.peekLength(),e),i.push(f.next(n));break;case r.DELETE:n=Math.min(e,c.peekLength()),c.next(n),i["delete"](n);break;case r.EQUAL:n=Math.min(c.peekLength(),f.peekLength(),e);var a=c.next(n),s=f.next(n);o(a.insert,s.insert)?i.retain(n,l.attributes.diff(a.attributes,s.attributes)):i.push(s)["delete"](n)}e-=n}}),i.chop()},s.prototype.eachLine=function(t,e){e=e||"\n";for(var n=l.iterator(this.ops),r=new s;n.hasNext();){if("insert"!==n.peekType())return;var o=n.peek(),i=l.length(o)-n.peekLength(),a="string"==typeof o.insert?o.insert.indexOf(e,i)-i:-1;a<0?r.push(n.next()):a>0?r.push(n.next(a)):(t(r,n.next(1).attributes||{}),r=new s)}r.length()>0&&t(r,{})},s.prototype.transform=function(t,e){if(e=!!e,"number"==typeof t)return this.transformPosition(t,e);for(var n=l.iterator(this.ops),r=l.iterator(t.ops),o=new s;n.hasNext()||r.hasNext();)if("insert"!==n.peekType()||!e&&"insert"===r.peekType())if("insert"===r.peekType())o.push(r.next());else{var i=Math.min(n.peekLength(),r.peekLength()),a=n.next(i),u=r.next(i);if(a["delete"])continue;u["delete"]?o.push(u):o.retain(i,l.attributes.transform(a.attributes,u.attributes,e))}else o.retain(l.length(n.next()));return o.chop()},s.prototype.transformPosition=function(t,e){e=!!e;for(var n=l.iterator(this.ops),r=0;n.hasNext()&&r<=t;){var o=n.peekLength(),i=n.peekType();n.next(),"delete"!==i?("insert"===i&&(r<t||!e)&&(t+=o),r+=o):t-=Math.min(o,t-r)}return t},t.exports=s},function(t,e){function n(t,e,n){if(t==e)return t?[[y,t]]:[];(n<0||t.length<n)&&(n=null);var o=l(t,e),i=t.substring(0,o);t=t.substring(o),e=e.substring(o),o=a(t,e);var s=t.substring(t.length-o);t=t.substring(0,t.length-o),e=e.substring(0,e.length-o);var c=r(t,e);return i&&c.unshift([y,i]),s&&c.push([y,s]),u(c),null!=n&&(c=f(c,n)),c}function r(t,e){var r;if(!t)return[[d,e]];if(!e)return[[h,t]];var i=t.length>e.length?t:e,l=t.length>e.length?e:t,a=i.indexOf(l);if(a!=-1)return r=[[d,i.substring(0,a)],[y,l],[d,i.substring(a+l.length)]],t.length>e.length&&(r[0][0]=r[2][0]=h),r;if(1==l.length)return[[h,t],[d,e]];var u=s(t,e);if(u){var c=u[0],f=u[1],p=u[2],v=u[3],b=u[4],g=n(c,p),m=n(f,v);return g.concat([[y,b]],m)}return o(t,e)}function o(t,e){for(var n=t.length,r=e.length,o=Math.ceil((n+r)/2),l=o,a=2*o,s=new Array(a),u=new Array(a),c=0;c<a;c++)s[c]=-1,u[c]=-1;s[l+1]=0,u[l+1]=0;for(var f=n-r,p=f%2!=0,y=0,v=0,b=0,g=0,m=0;m<o;m++){for(var _=-m+y;_<=m-v;_+=2){var O,w=l+_;O=_==-m||_!=m&&s[w-1]<s[w+1]?s[w+1]:s[w-1]+1;for(var x=O-_;O<n&&x<r&&t.charAt(O)==e.charAt(x);)O++,x++;if(s[w]=O,O>n)v+=2;else if(x>r)y+=2;else if(p){var k=l+f-_;if(k>=0&&k<a&&u[k]!=-1){var E=n-u[k];if(O>=E)return i(t,e,O,x)}}}for(var j=-m+b;j<=m-g;j+=2){var E,k=l+j;E=j==-m||j!=m&&u[k-1]<u[k+1]?u[k+1]:u[k-1]+1;for(var A=E-j;E<n&&A<r&&t.charAt(n-E-1)==e.charAt(r-A-1);)E++,A++;if(u[k]=E,E>n)g+=2;else if(A>r)b+=2;else if(!p){var w=l+f-j;if(w>=0&&w<a&&s[w]!=-1){var O=s[w],x=l+O-w;if(E=n-E,O>=E)return i(t,e,O,x)}}}}return[[h,t],[d,e]]}function i(t,e,r,o){var i=t.substring(0,r),l=e.substring(0,o),a=t.substring(r),s=e.substring(o),u=n(i,l),c=n(a,s);return u.concat(c)}function l(t,e){if(!t||!e||t.charAt(0)!=e.charAt(0))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(i,o)==e.substring(i,o)?(n=o,i=n):r=o,o=Math.floor((r-n)/2+n);return o}function a(t,e){if(!t||!e||t.charAt(t.length-1)!=e.charAt(e.length-1))return 0;for(var n=0,r=Math.min(t.length,e.length),o=r,i=0;n<o;)t.substring(t.length-o,t.length-i)==e.substring(e.length-o,e.length-i)?(n=o,i=n):r=o,o=Math.floor((r-n)/2+n);return o}function s(t,e){function n(t,e,n){for(var r,o,i,s,u=t.substring(n,n+Math.floor(t.length/4)),c=-1,f="";(c=e.indexOf(u,c+1))!=-1;){var p=l(t.substring(n),e.substring(c)),h=a(t.substring(0,n),e.substring(0,c));f.length<h+p&&(f=e.substring(c-h,c)+e.substring(c,c+p),r=t.substring(0,n-h),o=t.substring(n+p),i=e.substring(0,c-h),s=e.substring(c+p))}return 2*f.length>=t.length?[r,o,i,s,f]:null}var r=t.length>e.length?t:e,o=t.length>e.length?e:t;if(r.length<4||2*o.length<r.length)return null;var i,s=n(r,o,Math.ceil(r.length/4)),u=n(r,o,Math.ceil(r.length/2));if(!s&&!u)return null;i=u?s&&s[4].length>u[4].length?s:u:s;var c,f,p,h;t.length>e.length?(c=i[0],f=i[1],p=i[2],h=i[3]):(p=i[0],h=i[1],c=i[2],f=i[3]);var d=i[4];return[c,f,p,h,d]}function u(t){t.push([y,""]);for(var e,n=0,r=0,o=0,i="",s="";n<t.length;)switch(t[n][0]){case d:o++,s+=t[n][1],n++;break;case h:r++,i+=t[n][1],n++;break;case y:r+o>1?(0!==r&&0!==o&&(e=l(s,i),0!==e&&(n-r-o>0&&t[n-r-o-1][0]==y?t[n-r-o-1][1]+=s.substring(0,e):(t.splice(0,0,[y,s.substring(0,e)]),n++),s=s.substring(e),i=i.substring(e)),e=a(s,i),0!==e&&(t[n][1]=s.substring(s.length-e)+t[n][1],s=s.substring(0,s.length-e),i=i.substring(0,i.length-e))),0===r?t.splice(n-o,r+o,[d,s]):0===o?t.splice(n-r,r+o,[h,i]):t.splice(n-r-o,r+o,[h,i],[d,s]),n=n-r-o+(r?1:0)+(o?1:0)+1):0!==n&&t[n-1][0]==y?(t[n-1][1]+=t[n][1],t.splice(n,1)):n++,o=0,r=0,i="",s=""}""===t[t.length-1][1]&&t.pop();var c=!1;for(n=1;n<t.length-1;)t[n-1][0]==y&&t[n+1][0]==y&&(t[n][1].substring(t[n][1].length-t[n-1][1].length)==t[n-1][1]?(t[n][1]=t[n-1][1]+t[n][1].substring(0,t[n][1].length-t[n-1][1].length),t[n+1][1]=t[n-1][1]+t[n+1][1],t.splice(n-1,1),c=!0):t[n][1].substring(0,t[n+1][1].length)==t[n+1][1]&&(t[n-1][1]+=t[n+1][1],t[n][1]=t[n][1].substring(t[n+1][1].length)+t[n+1][1],t.splice(n+1,1),c=!0)),n++;c&&u(t)}function c(t,e){if(0===e)return[y,t];for(var n=0,r=0;r<t.length;r++){var o=t[r];if(o[0]===h||o[0]===y){var i=n+o[1].length;if(e===i)return[r+1,t];if(e<i){t=t.slice();var l=e-n,a=[o[0],o[1].slice(0,l)],s=[o[0],o[1].slice(l)];return t.splice(r,1,a,s),[r+1,t]}n=i}}throw new Error("cursor_pos is out of bounds!")}function f(t,e){var n=c(t,e),r=n[1],o=n[0],i=r[o],l=r[o+1];if(null==i)return t;if(i[0]!==y)return t;if(null!=l&&i[1]+l[1]===l[1]+i[1])return r.splice(o,2,l,i),p(r,o,2);if(null!=l&&0===l[1].indexOf(i[1])){r.splice(o,2,[l[0],i[1]],[0,i[1]]);var a=l[1].slice(i[1].length);return a.length>0&&r.splice(o+2,0,[l[0],a]),p(r,o,3)}return t}function p(t,e,n){for(var r=e+n-1;r>=0&&r>=e-1;r--)if(r+1<t.length){var o=t[r],i=t[r+1];o[0]===i[1]&&t.splice(r,2,[o[0],o[1]+i[1]])}return t}var h=-1,d=1,y=0,v=n;v.INSERT=d,v.DELETE=h,v.EQUAL=y,t.exports=v},function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return!(!t||"object"!=typeof t||"number"!=typeof t.length)&&("function"==typeof t.copy&&"function"==typeof t.slice&&!(t.length>0&&"number"!=typeof t[0]))}function i(t,e,n){var i,c;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(s(t))return!!s(e)&&(t=l.call(t),e=l.call(e),u(t,e,n));if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}try{var f=a(t),p=a(e)}catch(h){return!1}if(f.length!=p.length)return!1;for(f.sort(),p.sort(),i=f.length-1;i>=0;i--)if(f[i]!=p[i])return!1;for(i=f.length-1;i>=0;i--)if(c=f[i],!u(t[c],e[c],n))return!1;return typeof t==typeof e}var l=Array.prototype.slice,a=n(23),s=n(24),u=t.exports=function(t,e,n){return n||(n={}),t===e||(t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():!t||!e||"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:i(t,e,n))}},function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},function(t,e){"use strict";var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===r.call(t)},i=function(t){if(!t||"[object Object]"!==r.call(t))return!1;var e=n.call(t,"constructor"),o=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!o)return!1;var i;for(i in t);return"undefined"==typeof i||n.call(t,i)};t.exports=function l(){var t,e,n,r,a,s,u=arguments[0],c=1,f=arguments.length,p=!1;for("boolean"==typeof u?(p=u,u=arguments[1]||{},c=2):("object"!=typeof u&&"function"!=typeof u||null==u)&&(u={});c<f;++c)if(t=arguments[c],null!=t)for(e in t)n=u[e],r=t[e],u!==r&&(p&&r&&(i(r)||(a=o(r)))?(a?(a=!1,s=n&&o(n)?n:[]):s=n&&i(n)?n:{},u[e]=l(p,s,r)):"undefined"!=typeof r&&(u[e]=r));return u}},function(t,e,n){function r(t){this.ops=t,this.index=0,this.offset=0}var o=n(22),i=n(25),l={attributes:{compose:function(t,e,n){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var r=i(!0,{},e);n||(r=Object.keys(r).reduce(function(t,e){return null!=r[e]&&(t[e]=r[e]),t},{}));for(var o in t)void 0!==t[o]&&void 0===e[o]&&(r[o]=t[o]);return Object.keys(r).length>0?r:void 0},diff:function(t,e){"object"!=typeof t&&(t={}),"object"!=typeof e&&(e={});var n=Object.keys(t).concat(Object.keys(e)).reduce(function(n,r){return o(t[r],e[r])||(n[r]=void 0===e[r]?null:e[r]),n},{});return Object.keys(n).length>0?n:void 0},transform:function(t,e,n){if("object"!=typeof t)return e;if("object"==typeof e){if(!n)return e;var r=Object.keys(e).reduce(function(n,r){return void 0===t[r]&&(n[r]=e[r]),n},{});return Object.keys(r).length>0?r:void 0}}},iterator:function(t){return new r(t)},length:function(t){return"number"==typeof t["delete"]?t["delete"]:"number"==typeof t.retain?t.retain:"string"==typeof t.insert?t.insert.length:1}};r.prototype.hasNext=function(){return this.peekLength()<1/0},r.prototype.next=function(t){t||(t=1/0);var e=this.ops[this.index];if(e){var n=this.offset,r=l.length(e);if(t>=r-n?(t=r-n,this.index+=1,this.offset=0):this.offset+=t,"number"==typeof e["delete"])return{"delete":t};var o={};return e.attributes&&(o.attributes=e.attributes),"number"==typeof e.retain?o.retain=t:"string"==typeof e.insert?o.insert=e.insert.substr(n,t):o.insert=e.insert,o}return{retain:1/0}},r.prototype.peek=function(){return this.ops[this.index]},r.prototype.peekLength=function(){return this.ops[this.index]?l.length(this.ops[this.index])-this.offset:1/0},r.prototype.peekType=function(){return this.ops[this.index]?"number"==typeof this.ops[this.index]["delete"]?"delete":"number"==typeof this.ops[this.index].retain?"retain":"insert":"retain"},t.exports=l},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){return Object.keys(e).reduce(function(n,r){return null==t[r]?n:(e[r]===t[r]?n[r]=e[r]:Array.isArray(e[r])?e[r].indexOf(t[r])<0&&(n[r]=e[r].concat([t[r]])):n[r]=[e[r],t[r]],n)},{})}function a(t){return t.reduce(function(t,e){if(1===e.insert){var n=(0,k["default"])(e.attributes);return delete n.image,t.insert({image:e.attributes.image},n)}if(null==e.attributes||e.attributes.list!==!0&&e.attributes.bullet!==!0||(e=(0,k["default"])(e),e.attributes.list?e.attributes.list="ordered":(e.attributes.list="bullet",delete e.attributes.bullet)),"string"==typeof e.insert){var r=e.insert.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return t.insert(r,e.attributes)}return t.push(e)},new p["default"])}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),f=n(20),p=r(f),h=n(26),d=r(h),y=n(2),v=r(y),b=n(28),g=r(b),m=n(34),_=r(m),O=n(29),w=r(O),x=n(38),k=r(x),E=n(22),j=r(E),A=n(25),N=r(A),q=function(){function t(e){i(this,t),this.scroll=e,this.delta=this.getDelta()}return c(t,[{key:"applyDelta",value:function(t){var e=this,n=!1;this.scroll.update();var r=this.scroll.length();return this.scroll.batch=!0,t=a(t),t.reduce(function(t,o){var i=o.retain||o["delete"]||o.insert.length||1,l=o.attributes||{};if(null!=o.insert){if("string"==typeof o.insert){var a=o.insert;a.endsWith("\n")&&n&&(n=!1,a=a.slice(0,-1)),t>=r&&!a.endsWith("\n")&&(n=!0),e.scroll.insertAt(t,a);var c=e.scroll.line(t),f=u(c,2),p=f[0],h=f[1],y=(0,N["default"])({},(0,O.bubbleFormats)(p));if(p instanceof w["default"]){var b=p.descendant(v["default"].Leaf,h),g=u(b,1),m=g[0];y=(0,N["default"])(y,(0,O.bubbleFormats)(m))}l=d["default"].attributes.diff(y,l)||{}}else if("object"===s(o.insert)){var _=Object.keys(o.insert)[0];if(null==_)return t;e.scroll.insertAt(t,_,o.insert[_])}r+=i}return Object.keys(l).forEach(function(n){e.scroll.formatAt(t,i,n,l[n])}),t+i},0),t.reduce(function(t,n){return"number"==typeof n["delete"]?(e.scroll.deleteAt(t,n["delete"]),t):t+(n.retain||n.insert.length||1)},0),this.scroll.batch=!1,this.scroll.optimize(),this.update(t)}},{key:"deleteText",value:function(t,e){return this.scroll.deleteAt(t,e),this.update((new p["default"]).retain(t)["delete"](e))}},{key:"formatLine",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.scroll.update(),Object.keys(r).forEach(function(o){var i=n.scroll.lines(t,Math.max(e,1)),l=e;i.forEach(function(e){var i=e.length();if(e instanceof g["default"]){var a=t-e.offset(n.scroll),s=e.newlineIndex(a+l)-a+1;e.formatAt(a,s,o,r[o])}else e.format(o,r[o]);l-=i})}),this.scroll.optimize(),this.update((new p["default"]).retain(t).retain(e,(0,k["default"])(r)))}},{key:"formatText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object.keys(r).forEach(function(o){n.scroll.formatAt(t,e,o,r[o])}),this.update((new p["default"]).retain(t).retain(e,(0,k["default"])(r)))}},{key:"getContents",value:function(t,e){return this.delta.slice(t,t+e)}},{key:"getDelta",value:function(){return this.scroll.lines().reduce(function(t,e){return t.concat(e.delta())},new p["default"])}},{key:"getFormat",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[],r=[];0===e?this.scroll.path(t).forEach(function(t){var e=u(t,1),o=e[0];o instanceof w["default"]?n.push(o):o instanceof v["default"].Leaf&&r.push(o)}):(n=this.scroll.lines(t,e),r=this.scroll.descendants(v["default"].Leaf,t,e));var o=[n,r].map(function(t){if(0===t.length)return{};for(var e=(0,O.bubbleFormats)(t.shift());Object.keys(e).length>0;){var n=t.shift();if(null==n)return e;e=l((0,O.bubbleFormats)(n),e)}return e});return N["default"].apply(N["default"],o)}},{key:"getText",value:function(t,e){return this.getContents(t,e).filter(function(t){return"string"==typeof t.insert}).map(function(t){return t.insert}).join("")}},{key:"insertEmbed",value:function(t,e,n){return this.scroll.insertAt(t,e,n),this.update((new p["default"]).retain(t).insert(o({},e,n)))}},{key:"insertText",value:function(t,e){var n=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=e.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),this.scroll.insertAt(t,e),Object.keys(r).forEach(function(o){n.scroll.formatAt(t,e.length,o,r[o])}),this.update((new p["default"]).retain(t).insert(e,(0,k["default"])(r)))}},{key:"isBlank",value:function(){if(0==this.scroll.children.length)return!0;if(this.scroll.children.length>1)return!1;var t=this.scroll.children.head;return t.length()<=1&&0==Object.keys(t.formats()).length}},{key:"removeFormat",value:function(t,e){var n=this.getText(t,e),r=this.scroll.line(t+e),o=u(r,2),i=o[0],l=o[1],a=0,s=new p["default"];null!=i&&(a=i instanceof g["default"]?i.newlineIndex(l)-l+1:i.length()-l,s=i.delta().slice(l,l+a-1).insert("\n"));var c=this.getContents(t,e+a),f=c.diff((new p["default"]).insert(n).concat(s)),h=(new p["default"]).retain(t).concat(f);return this.applyDelta(h)}},{key:"update",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,o=this.delta;return 1===n.length&&"characterData"===n[0].type&&v["default"].find(n[0].target)?!function(){var i=v["default"].find(n[0].target),l=(0,O.bubbleFormats)(i),a=i.offset(e.scroll),s=n[0].oldValue.replace(_["default"].CONTENTS,""),u=(new p["default"]).insert(s),c=(new p["default"]).insert(i.value()),f=(new p["default"]).retain(a).concat(u.diff(c,r));t=f.reduce(function(t,e){return e.insert?t.insert(e.insert,l):t.push(e)},new p["default"]),e.delta=o.compose(t)}():(this.delta=this.getDelta(),t&&(0,j["default"])(o.compose(t),this.delta)||(t=o.diff(this.delta,r))),t}}]),t}();e["default"]=q},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.Code=void 0;var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function w(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:w(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(20),f=r(c),p=n(2),h=r(p),d=n(29),y=r(d),v=n(32),b=r(v),g=n(33),m=r(g),_=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(b["default"]);_.blotName="code",_.tagName="CODE";var O=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"delta",value:function(){var t=this,e=this.domNode.textContent;return e.endsWith("\n")&&(e=e.slice(0,-1)),e.split("\n").reduce(function(e,n){return e.insert(n).insert("\n",t.formats())},new f["default"])}},{key:"format",value:function(t,n){if(t!==this.statics.blotName||!n){var r=this.descendant(m["default"],this.length()-1),o=a(r,1),i=o[0];null!=i&&i.deleteAt(i.length()-1,1),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}},{key:"formatAt",value:function(t,n,r,o){if(0!==n&&null!=h["default"].query(r,h["default"].Scope.BLOCK)&&(r!==this.statics.blotName||o!==this.statics.formats(this.domNode))){var i=this.newlineIndex(t);if(!(i<0||i>=t+n)){var l=this.newlineIndex(t,!0)+1,a=i-l+1,s=this.isolate(l,a),u=s.next;s.format(r,o),u instanceof e&&u.formatAt(0,t-l+n-a,r,o)}}}},{key:"insertAt",value:function(t,e,n){if(null==n){var r=this.descendant(m["default"],t),o=a(r,2),i=o[0],l=o[1];i.insertAt(l,e)}}},{key:"length",value:function n(){var n=this.domNode.textContent.length;return this.domNode.textContent.endsWith("\n")?n:n+1}},{key:"newlineIndex",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e)return this.domNode.textContent.slice(0,t).lastIndexOf("\n");var n=this.domNode.textContent.slice(t).indexOf("\n");return n>-1?t+n:-1}},{key:"optimize",value:function(){this.domNode.textContent.endsWith("\n")||this.appendChild(h["default"].create("text","\n")),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this);var t=this.next;null!=t&&t.prev===this&&t.statics.blotName===this.statics.blotName&&this.statics.formats(this.domNode)===t.statics.formats(t.domNode)&&(t.optimize(),t.moveChildren(this),t.remove())}},{key:"replace",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t),[].slice.call(this.domNode.querySelectorAll("*")).forEach(function(t){var e=h["default"].find(t);null==e?t.parentNode.removeChild(t):e instanceof h["default"].Embed?e.remove():e.unwrap()})}}],[{key:"create",value:function(t){var n=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("spellcheck",!1),n}},{key:"formats",value:function(){return!0}}]),e}(y["default"]);O.blotName="code-block",O.tagName="PRE",O.TAB="  ",e.Code=_,e["default"]=O},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return null==t?e:("function"==typeof t.formats&&(e=(0,f["default"])(e,t.formats())),null==t.parent||"scroll"==t.parent.blotName||t.parent.statics.scope!==t.statics.scope?e:a(t.parent,e))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.BlockEmbed=e.bubbleFormats=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function A(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:A(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(25),f=r(c),p=n(20),h=r(p),d=n(2),y=r(d),v=n(30),b=r(v),g=n(31),m=r(g),_=n(32),O=r(_),w=n(33),x=r(w),k=1,E=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"attach",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attach",this).call(this),this.attributes=new y["default"].Attributor.Store(this.domNode)}},{key:"delta",value:function(){return(new h["default"]).insert(this.value(),(0,f["default"])(this.formats(),this.attributes.values()))}},{key:"format",value:function(t,e){var n=y["default"].query(t,y["default"].Scope.BLOCK_ATTRIBUTE);null!=n&&this.attributes.attribute(n,e)}},{key:"formatAt",value:function(t,e,n,r){this.format(n,r)}},{key:"insertAt",value:function(t,n,r){if("string"==typeof n&&n.endsWith("\n")){var o=y["default"].create(j.blotName);this.parent.insertBefore(o,0===t?this:this.next),o.insertAt(0,n.slice(0,-1))}else u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r)}}]),e}(m["default"]);E.scope=y["default"].Scope.BLOCK_BLOT;var j=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.cache={},n}return l(e,t),s(e,[{key:"delta",value:function(){return null==this.cache.delta&&(this.cache.delta=this.descendants(y["default"].Leaf).reduce(function(t,e){return 0===e.length()?t:t.insert(e.value(),a(e))},new h["default"]).insert("\n",a(this))),this.cache.delta}},{key:"deleteAt",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),this.cache={}}},{key:"formatAt",value:function(t,n,r,o){n<=0||(y["default"].query(r,y["default"].Scope.BLOCK)?t+n===this.length()&&this.format(r,o):u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,Math.min(n,this.length()-t-1),r,o),this.cache={})}},{key:"insertAt",value:function(t,n,r){if(null!=r)return u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);if(0!==n.length){var o=n.split("\n"),i=o.shift();i.length>0&&(t<this.length()-1||null==this.children.tail?u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,Math.min(t,this.length()-1),i):this.children.tail.insertAt(this.children.tail.length(),i),this.cache={});var l=this;o.reduce(function(t,e){return l=l.split(t,!0),l.insertAt(0,e),e.length},t+i.length)}}},{key:"insertBefore",value:function(t,n){var r=this.children.head;u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n),r instanceof b["default"]&&r.remove(),this.cache={}}},{key:"length",value:function(){return null==this.cache.length&&(this.cache.length=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"length",this).call(this)+k),this.cache.length}},{key:"moveChildren",value:function(t,n){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"moveChildren",this).call(this,t,n),this.cache={}}},{key:"optimize",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this),this.cache={}}},{key:"path",value:function(t){return u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t,!0)}},{key:"removeChild",value:function(t){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeChild",this).call(this,t),this.cache={}}},{key:"split",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n&&(0===t||t>=this.length()-k)){var r=this.clone();return 0===t?(this.parent.insertBefore(r,this),this):(this.parent.insertBefore(r,this.next),r)}var o=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"split",this).call(this,t,n);return this.cache={},o}}]),e}(y["default"].Block);j.blotName="block",j.tagName="P",j.defaultChild="break",j.allowedChildren=[O["default"],m["default"],x["default"]],e.bubbleFormats=a,e.BlockEmbed=E,e["default"]=j},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function p(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:p(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(31),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"insertInto",value:function(t,n){0===t.children.length?s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertInto",this).call(this,t,n):this.remove()}},{key:"length",value:function(){return 0}},{key:"value",value:function(){return""}}],[{key:"value",value:function(){}}]),e}(c["default"]);f.blotName="break",f.tagName="BR",e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=r(a),u=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s["default"].Embed);e["default"]=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function v(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:v(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(31),c=r(u),f=n(33),p=r(f),h=n(2),d=r(h),y=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"formatAt",value:function(t,n,r,o){if(e.compare(this.statics.blotName,r)<0&&d["default"].query(r,d["default"].Scope.BLOT)){var i=this.isolate(t,n);o&&i.wrap(r,o)}else s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o)}},{key:"optimize",value:function(){if(s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this),this.parent instanceof e&&e.compare(this.statics.blotName,this.parent.statics.blotName)>0){var t=this.parent.isolate(this.offset(),this.length());this.moveChildren(t),t.wrap(this)}}}],[{key:"compare",value:function(t,n){var r=e.order.indexOf(t),o=e.order.indexOf(n);return r>=0||o>=0?r-o:t===n?0:t<n?-1:1}}]),e}(d["default"].Inline);y.allowedChildren=[y,c["default"],p["default"]],y.order=["cursor","inline","code","underline","strike","italic","bold","script","link"],e["default"]=y},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=r(a),u=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s["default"].Text);e["default"]=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function m(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:m(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(2),f=r(c),p=n(31),h=r(p),d=n(33),y=r(d),v=n(35),b=r(v),g=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.selection=n,r.textNode=document.createTextNode(e.CONTENTS),r.domNode.appendChild(r.textNode),r._length=0,r}return l(e,t),u(e,null,[{key:"value",value:function(){}}]),u(e,[{key:"detach",value:function(){null!=this.parent&&this.parent.removeChild(this)}},{key:"format",value:function(t,n){if(0!==this._length)return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n);for(var r=this,o=0;null!=r&&r.statics.scope!==f["default"].Scope.BLOCK_BLOT;)o+=r.offset(r.parent),r=r.parent;null!=r&&(this._length=e.CONTENTS.length,r.optimize(),r.formatAt(o,e.CONTENTS.length,t,n),this._length=0)}},{key:"index",value:function(t,n){return t===this.textNode?0:s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"index",this).call(this,t,n)}},{key:"length",value:function(){return this._length}},{key:"position",value:function(){return[this.textNode,this.textNode.data.length]}},{key:"remove",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this),this.parent=null}},{key:"restore",value:function(){var t=this;if(!this.selection.composing&&null!=this.parent){var n=this.textNode,r=this.selection.getNativeRange(),o=void 0,i=void 0,l=void 0;if(null!=r&&r.start.node===n&&r.end.node===n){var s=[n,r.start.offset,r.end.offset];o=s[0],i=s[1],l=s[2]}for(;null!=this.domNode.lastChild&&this.domNode.lastChild!==this.textNode;)this.domNode.parentNode.insertBefore(this.domNode.lastChild,this.domNode);if(this.textNode.data!==e.CONTENTS){var u=this.textNode.data.split(e.CONTENTS).join("");this.next instanceof y["default"]?(o=this.next.domNode,this.next.insertAt(0,u),this.textNode.data=e.CONTENTS):(this.textNode.data=u,this.parent.insertBefore(f["default"].create(this.textNode),this),this.textNode=document.createTextNode(e.CONTENTS),this.domNode.appendChild(this.textNode))}this.remove(),null!=i&&this.selection.emitter.once(b["default"].events.SCROLL_OPTIMIZE,function(){var e=[i,l].map(function(t){return Math.max(0,Math.min(o.data.length,t-1))}),n=a(e,2);i=n[0],l=n[1],t.selection.setNativeRange(o,i,o,l)})}}},{key:"update",value:function(t){var e=this;t.forEach(function(t){"characterData"===t.type&&t.target===e.textNode&&e.restore()})}},{key:"value",value:function(){return""}}]),e}(h["default"]);g.blotName="cursor",g.className="ql-cursor",g.tagName="span",g.CONTENTS="\ufeff",e["default"]=g},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function y(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:y(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(36),c=r(u),f=n(37),p=r(f),h=(0,p["default"])("quill:events"),d=function(t){function e(){o(this,e);var t=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.on("error",h.error),t}return l(e,t),a(e,[{key:"emit",value:function(){h.log.apply(h,arguments),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"emit",this).apply(this,arguments)}}]),e}(c["default"]);d.events={EDITOR_CHANGE:"editor-change",SCROLL_BEFORE_UPDATE:"scroll-before-update",SCROLL_OPTIMIZE:"scroll-optimize",SCROLL_UPDATE:"scroll-update",SELECTION_CHANGE:"selection-change",TEXT_CHANGE:"text-change"},d.sources={API:"api",SILENT:"silent",USER:"user"},e["default"]=d},function(t,e){"use strict";function n(){}function r(t,e,n){this.fn=t,this.context=e,this.once=n||!1}function o(){this._events=new n,this._eventsCount=0}var i=Object.prototype.hasOwnProperty,l="~";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(l=!1)),o.prototype.eventNames=function(){var t,e,n=[];if(0===this._eventsCount)return n;for(e in t=this._events)i.call(t,e)&&n.push(l?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},o.prototype.listeners=function(t,e){var n=l?l+t:t,r=this._events[n];if(e)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},o.prototype.emit=function(t,e,n,r,o,i){var a=l?l+t:t;if(!this._events[a])return!1;var s,u,c=this._events[a],f=arguments.length;if(c.fn){switch(c.once&&this.removeListener(t,c.fn,void 0,!0),f){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,e),!0;case 3:return c.fn.call(c.context,e,n),!0;case 4:return c.fn.call(c.context,e,n,r),!0;case 5:return c.fn.call(c.context,e,n,r,o),!0;case 6:return c.fn.call(c.context,e,n,r,o,i),!0}for(u=1,s=new Array(f-1);u<f;u++)s[u-1]=arguments[u];c.fn.apply(c.context,s)}else{var p,h=c.length;for(u=0;u<h;u++)switch(c[u].once&&this.removeListener(t,c[u].fn,void 0,!0),f){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,e);break;case 3:c[u].fn.call(c[u].context,e,n);break;case 4:c[u].fn.call(c[u].context,e,n,r);break;default:if(!s)for(p=1,s=new Array(f-1);p<f;p++)s[p-1]=arguments[p];c[u].fn.apply(c[u].context,s)}}return!0},o.prototype.on=function(t,e,n){var o=new r(e,n||this),i=l?l+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],o]:this._events[i].push(o):(this._events[i]=o,this._eventsCount++),this},o.prototype.once=function(t,e,n){var o=new r(e,n||this,(!0)),i=l?l+t:t;return this._events[i]?this._events[i].fn?this._events[i]=[this._events[i],o]:this._events[i].push(o):(this._events[i]=o,this._eventsCount++),this},o.prototype.removeListener=function(t,e,r,o){var i=l?l+t:t;if(!this._events[i])return this;if(!e)return 0===--this._eventsCount?this._events=new n:delete this._events[i],this;var a=this._events[i];if(a.fn)a.fn!==e||o&&!a.once||r&&a.context!==r||(0===--this._eventsCount?this._events=new n:delete this._events[i]);else{for(var s=0,u=[],c=a.length;s<c;s++)(a[s].fn!==e||o&&!a[s].once||r&&a[s].context!==r)&&u.push(a[s]);u.length?this._events[i]=1===u.length?u[0]:u:0===--this._eventsCount?this._events=new n:delete this._events[i]}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=l?l+t:t,this._events[e]&&(0===--this._eventsCount?this._events=new n:delete this._events[e])):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=l,o.EventEmitter=o,"undefined"!=typeof t&&(t.exports=o)},function(t,e){"use strict";function n(t){if(o.indexOf(t)<=o.indexOf(i)){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}}function r(t){return o.reduce(function(e,r){return e[r]=n.bind(console,r,t),e},{})}Object.defineProperty(e,"__esModule",{value:!0});var o=["error","warn","log","info"],i="warn";n.level=r.level=function(t){i=t},e["default"]=r},function(t,e){var n=function(){"use strict";function t(e,n,r,o){function a(e,r){if(null===e)return null;if(0===r)return e;var c,d;if("object"!=typeof e)return e;if(e instanceof l)c=new l;else if(e instanceof s)c=new s;else if(e instanceof u)c=new u(function(t,n){e.then(function(e){t(a(e,r-1))},function(t){n(a(t,r-1))})});else if(t.__isArray(e))c=[];else if(t.__isRegExp(e))c=new RegExp(e.source,i(e)),e.lastIndex&&(c.lastIndex=e.lastIndex);else if(t.__isDate(e))c=new Date(e.getTime());else{if(h&&Buffer.isBuffer(e))return c=new Buffer(e.length),e.copy(c),c;"undefined"==typeof o?(d=Object.getPrototypeOf(e),c=Object.create(d)):(c=Object.create(o),d=o)}if(n){var y=f.indexOf(e);if(y!=-1)return p[y];f.push(e),p.push(c)}if(e instanceof l)for(var v=e.keys();;){var b=v.next();if(b.done)break;var g=a(b.value,r-1),m=a(e.get(b.value),r-1);c.set(g,m)}if(e instanceof s)for(var _=e.keys();;){var b=_.next();if(b.done)break;var O=a(b.value,r-1);c.add(O)}for(var w in e){var x;d&&(x=Object.getOwnPropertyDescriptor(d,w)),x&&null==x.set||(c[w]=a(e[w],r-1))}if(Object.getOwnPropertySymbols)for(var k=Object.getOwnPropertySymbols(e),w=0;w<k.length;w++){var E=k[w];c[E]=a(e[E],r-1)}return c}var c;"object"==typeof n&&(r=n.depth,o=n.prototype,c=n.filter,n=n.circular);var f=[],p=[],h="undefined"!=typeof Buffer;return"undefined"==typeof n&&(n=!0),"undefined"==typeof r&&(r=1/0),a(e,r)}function e(t){return Object.prototype.toString.call(t)}function n(t){return"object"==typeof t&&"[object Date]"===e(t)}function r(t){return"object"==typeof t&&"[object Array]"===e(t)}function o(t){return"object"==typeof t&&"[object RegExp]"===e(t)}function i(t){var e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),e}var l;try{l=Map}catch(a){l=function(){}}var s;try{s=Set}catch(a){s=function(){}}var u;try{u=Promise}catch(a){u=function(){}}return t.clonePrototype=function(t){if(null===t)return null;var e=function(){};return e.prototype=t,new e},t.__objToStr=e,t.__isDate=n,t.__isArray=r,t.__isRegExp=o,t.__getRegExpFlags=i,t}();"object"==typeof t&&t.exports&&(t.exports=n)},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};n(this,o),this.quill=t,this.options=e};r.DEFAULTS={},e["default"]=r},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){try{e.parentNode}catch(n){return!1}return e instanceof Text&&(e=e.parentNode),t.contains(e)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.Range=void 0;var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(2),c=r(u),f=n(38),p=r(f),h=n(22),d=r(h),y=n(35),v=r(y),b=n(37),g=r(b),m=(0,g["default"])("quill:selection"),_=function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i(this,w),this.index=t,this.length=e},O=function(){function t(e,n){var r=this;i(this,t),this.emitter=n,this.scroll=e,this.composing=!1,this.root=this.scroll.domNode,this.root.addEventListener("compositionstart",function(){r.composing=!0}),this.root.addEventListener("compositionend",function(){r.composing=!1}),this.cursor=c["default"].create("cursor",this),this.lastRange=this.savedRange=new _(0,0),["keyup","mouseup","mouseleave","touchend","touchleave","focus","blur"].forEach(function(t){r.root.addEventListener(t,function(){setTimeout(r.update.bind(r,v["default"].sources.USER),100)})}),this.emitter.on(v["default"].events.EDITOR_CHANGE,function(t,e){t===v["default"].events.TEXT_CHANGE&&e.length()>0&&r.update(v["default"].sources.SILENT)}),this.emitter.on(v["default"].events.SCROLL_BEFORE_UPDATE,function(){var t=r.getNativeRange();null!=t&&t.start.node!==r.cursor.textNode&&r.emitter.once(v["default"].events.SCROLL_UPDATE,function(){try{r.setNativeRange(t.start.node,t.start.offset,t.end.node,t.end.offset)}catch(e){}})}),this.update(v["default"].sources.SILENT)}return s(t,[{key:"focus",value:function(){if(!this.hasFocus()){var t=document.body.scrollTop;this.root.focus(),document.body.scrollTop=t,this.setRange(this.savedRange)}}},{key:"format",value:function(t,e){this.scroll.update();var n=this.getNativeRange();if(null!=n&&n["native"].collapsed&&!c["default"].query(t,c["default"].Scope.BLOCK)){if(n.start.node!==this.cursor.textNode){var r=c["default"].find(n.start.node,!1);if(null==r)return;if(r instanceof c["default"].Leaf){var o=r.split(n.start.offset);r.parent.insertBefore(this.cursor,o)}else r.insertBefore(this.cursor,n.start.node);this.cursor.attach()}this.cursor.format(t,e),this.scroll.optimize(),this.setNativeRange(this.cursor.textNode,this.cursor.textNode.data.length),this.update()}}},{key:"getBounds",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.scroll.length();t=Math.min(t,n-1),e=Math.min(t+e,n-1)-t;var r=void 0,o=void 0,i=this.scroll.leaf(t),l=a(i,2),s=l[0],u=l[1];if(null==s)return null;var c=s.position(u,!0),f=a(c,2);o=f[0],u=f[1];var p=document.createRange();if(e>0){p.setStart(o,u);var h=this.scroll.leaf(t+e),d=a(h,2);if(s=d[0],u=d[1],null==s)return null;var y=s.position(u,!0),v=a(y,2);o=v[0],u=v[1],p.setEnd(o,u),r=p.getBoundingClientRect()}else{var b="left",g=void 0;o instanceof Text?(u<o.data.length?(p.setStart(o,u),p.setEnd(o,u+1)):(p.setStart(o,u-1),p.setEnd(o,u),b="right"),g=p.getBoundingClientRect()):(g=s.domNode.getBoundingClientRect(),u>0&&(b="right")),r={height:g.height,left:g[b],width:0,top:g.top}}var m=this.root.parentNode.getBoundingClientRect();return{left:r.left-m.left,right:r.left+r.width-m.left,top:r.top-m.top,bottom:r.top+r.height-m.top,height:r.height,width:r.width}}},{key:"getNativeRange",value:function(){var t=document.getSelection();if(null==t||t.rangeCount<=0)return null;var e=t.getRangeAt(0);if(null==e)return null;if(!l(this.root,e.startContainer)||!e.collapsed&&!l(this.root,e.endContainer))return null;var n={start:{node:e.startContainer,offset:e.startOffset},end:{node:e.endContainer,offset:e.endOffset},"native":e};return[n.start,n.end].forEach(function(t){for(var e=t.node,n=t.offset;!(e instanceof Text)&&e.childNodes.length>0;)if(e.childNodes.length>n)e=e.childNodes[n],n=0;else{if(e.childNodes.length!==n)break;e=e.lastChild,n=e instanceof Text?e.data.length:e.childNodes.length+1}t.node=e,t.offset=n}),m.info("getNativeRange",n),n}},{key:"getRange",value:function(){var t=this,e=this.getNativeRange();if(null==e)return[null,null];var n=[[e.start.node,e.start.offset]];e["native"].collapsed||n.push([e.end.node,e.end.offset]);var r=n.map(function(e){var n=a(e,2),r=n[0],o=n[1],i=c["default"].find(r,!0),l=i.offset(t.scroll);return 0===o?l:i instanceof c["default"].Container?l+i.length():l+i.index(r,o)}),i=Math.min.apply(Math,o(r)),l=Math.max.apply(Math,o(r));return[new _(i,l-i),e]}},{key:"hasFocus",value:function(){return document.activeElement===this.root}},{key:"scrollIntoView",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.lastRange;if(null!=t){var e=this.getBounds(t.index,t.length);if(null!=e){var n=function(t){for(var e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},r=n(this.root),o=e.top+r-document.body.scrollTop,i=e.bottom+r-document.body.scrollTop;if(window.offsetHeight<i){var l=this.scroll.line(Math.min(t.index+t.length,this.scroll.length()-1)),s=a(l,1),u=s[0];document.body.scrollTop=u.domNode.offsetTop+u.domNode.offsetHeight+r-window.offsetHeight}else if(o<0){var c=this.scroll.line(Math.min(t.index,this.scroll.length()-1)),f=a(c,1),p=f[0];document.body.scrollTop=p.domNode.offsetTop+r}}}}},{key:"setNativeRange",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m.info("setNativeRange",t,e,n,r),null==t||null!=this.root.parentNode&&null!=t.parentNode&&null!=n.parentNode){var i=document.getSelection();if(null!=i)if(null!=t){if(!this.hasFocus()){var l=document.body.scrollTop;this.root.focus(),document.body.scrollTop=l}var a=this.getNativeRange();if(null==a||o||t!==a.start.node||e!==a.start.offset||n!==a.end.node||r!==a.end.offset){var s=document.createRange();s.setStart(t,e),s.setEnd(n,r),i.removeAllRanges(),i.addRange(s)}}else i.removeAllRanges(),this.root.blur(),document.body.focus()}}},{key:"setRange",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:v["default"].sources.API;"string"==typeof n&&(r=n,n=!1),m.info("setRange",t),null!=t?!function(){var r=t.collapsed?[t.index]:[t.index,t.index+t.length],i=[],l=e.scroll.length();r.forEach(function(t,n){t=Math.min(l-1,t);var r=void 0,o=e.scroll.leaf(t),s=a(o,2),u=s[0],c=s[1],f=u.position(c,0!==n),p=a(f,2);r=p[0],c=p[1],i.push(r,c)}),i.length<2&&(i=i.concat(i)),e.setNativeRange.apply(e,o(i).concat([n]))}():this.setNativeRange(null),this.update(r)}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v["default"].sources.USER,e=void 0,n=this.lastRange,r=this.getRange(),o=a(r,2);if(this.lastRange=o[0],e=o[1],null!=this.lastRange&&(this.savedRange=this.lastRange),!(0,d["default"])(n,this.lastRange)){var i;!this.composing&&null!=e&&e["native"].collapsed&&e.start.node!==this.cursor.textNode&&this.cursor.restore();var l=[v["default"].events.SELECTION_CHANGE,(0,p["default"])(this.lastRange),(0,p["default"])(n),t];if((i=this.emitter).emit.apply(i,[v["default"].events.EDITOR_CHANGE].concat(l)),t!==v["default"].sources.SILENT){var s;(s=this.emitter).emit.apply(s,l)}}}}]),t}();e.Range=_,e["default"]=O},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,r){n(this,t),this.quill=e,this.options=r,this.modules={}}return r(t,[{key:"init",value:function(){var t=this;Object.keys(this.options.modules).forEach(function(e){null==t.modules[e]&&t.addModule(e)})}},{key:"addModule",value:function(t){var e=this.quill.constructor["import"]("modules/"+t);return this.modules[t]=new e(this.quill,this.options.modules[t]||{}),this.modules[t]}}]),t}();o.DEFAULTS={modules:{}},o.themes={"default":o},e["default"]=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(2),s=r(a),u=n(29),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s["default"].Container);f.allowedChildren=[c["default"],u.BlockEmbed,f],e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){return t instanceof v["default"]||t instanceof y.BlockEmbed}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function k(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:k(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},f=n(2),p=r(f),h=n(35),d=r(h),y=n(29),v=r(y),b=n(30),g=r(b),m=n(42),_=r(m),O=n(28),w=r(O),x=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.emitter=n.emitter,Array.isArray(n.whitelist)&&(r.whitelist=n.whitelist.reduce(function(t,e){return t[e]=!0,t},{})),r.optimize(),r.enable(),r}return l(e,t),u(e,[{key:"deleteAt",value:function(t,n){var r=this.line(t),o=s(r,2),i=o[0],l=o[1],a=this.line(t+n),u=s(a,1),f=u[0];if(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deleteAt",this).call(this,t,n),null!=f&&i!==f&&l>0&&!(i instanceof y.BlockEmbed)&&!(f instanceof y.BlockEmbed)){f instanceof w["default"]&&f.deleteAt(f.length()-1,1);var p=f.children.head instanceof g["default"]?null:f.children.head;i.moveChildren(f,p),i.remove()}this.optimize()}},{key:"enable",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.domNode.setAttribute("contenteditable",t)}},{key:"formatAt",value:function(t,n,r,o){(null==this.whitelist||this.whitelist[r])&&(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"formatAt",this).call(this,t,n,r,o),this.optimize())}},{key:"insertAt",value:function(t,n,r){if(null==r||null==this.whitelist||this.whitelist[n]){if(t>=this.length())if(null==r||null==p["default"].query(n,p["default"].Scope.BLOCK)){var o=p["default"].create(this.statics.defaultChild);this.appendChild(o),null==r&&n.endsWith("\n")&&(n=n.slice(0,-1)),o.insertAt(0,n,r)}else{var i=p["default"].create(n,r);this.appendChild(i)}else c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertAt",this).call(this,t,n,r);this.optimize()}}},{key:"insertBefore",value:function(t,n){if(t.statics.scope===p["default"].Scope.INLINE_BLOT){var r=p["default"].create(this.statics.defaultChild);r.appendChild(t),t=r}c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n)}},{key:"leaf",value:function(t){return this.path(t).pop()||[null,-1]}},{key:"line",value:function(t){return t===this.length()?this.line(t-1):this.descendant(a,t)}},{key:"lines",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Number.MAX_VALUE,n=function r(t,e,n){var o=[],i=n;return t.children.forEachAt(e,n,function(t,e,n){a(t)?o.push(t):t instanceof p["default"].Container&&(o=o.concat(r(t,e,i))),i-=n}),o};return n(this,t,e)}},{key:"optimize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.batch!==!0&&(c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this,t),t.length>0&&this.emitter.emit(d["default"].events.SCROLL_OPTIMIZE,t))}},{key:"path",value:function(t){return c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"path",this).call(this,t).slice(1)}},{key:"update",value:function(t){if(this.batch!==!0){var n=d["default"].sources.USER;"string"==typeof t&&(n=t),Array.isArray(t)||(t=this.observer.takeRecords()),t.length>0&&this.emitter.emit(d["default"].events.SCROLL_BEFORE_UPDATE,n,t),c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"update",this).call(this,t.concat([])),t.length>0&&this.emitter.emit(d["default"].events.SCROLL_UPDATE,n,t)}}}]),e}(p["default"].Scroll);x.blotName="scroll",x.className="ql-editor",x.tagName="DIV",x.defaultChild="block",x.allowedChildren=[v["default"],y.BlockEmbed,_["default"]],e["default"]=x},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t){if(t.nodeType!==Node.ELEMENT_NODE)return{};var e="__ql-computed-style";return t[e]||(t[e]=window.getComputedStyle(t))}function c(t,e){for(var n="",r=t.ops.length-1;r>=0&&n.length<e.length;--r){var o=t.ops[r];if("string"!=typeof o.insert)break;n=o.insert+n}return n.slice(-1*e.length)===e}function f(t){if(0===t.childNodes.length)return!1;var e=u(t);return["block","list-item"].indexOf(e.display)>-1}function p(t,e,n){return n.compose((new k["default"]).retain(n.length(),o({},t,!0)))}function h(t,e){var n=j["default"].Attributor.Attribute.keys(t),r=j["default"].Attributor.Class.keys(t),o=j["default"].Attributor.Style.keys(t),i={};return n.concat(r).concat(o).forEach(function(e){var n=j["default"].query(e,j["default"].Scope.ATTRIBUTE);null!=n&&(i[n.attrName]=n.value(t),i[n.attrName])||(null!=F[e]&&(n=F[e],i[n.attrName]=n.value(t)),null!=H[e]&&(n=H[e],i[n.attrName]=n.value(t)))}),Object.keys(i).length>0&&(e=e.compose((new k["default"]).retain(e.length(),i))),e}function d(t,e){var n=j["default"].query(t);if(null==n)return e;if(n.prototype instanceof j["default"].Embed){var r={},i=n.value(t);null!=i&&(r[n.blotName]=i,e=(new k["default"]).insert(r,n.formats(t)))}else if("function"==typeof n.formats){var l=o({},n.blotName,n.formats(t));e=e.compose((new k["default"]).retain(e.length(),l))}return e}function y(t,e){return c(e,"\n")||e.insert("\n"),e}function v(){return new k["default"]}function b(t,e){return f(t)&&!c(e,"\n")&&e.insert("\n"),e}function g(t,e){if(f(t)&&null!=t.nextElementSibling&&!c(e,"\n\n")){var n=t.offsetHeight+parseFloat(u(t).marginTop)+parseFloat(u(t).marginBottom);t.nextElementSibling.offsetTop>t.offsetTop+1.5*n&&e.insert("\n")}return e}function m(t,e){var n={},r=t.style||{};return r.fontWeight&&"bold"===u(t).fontWeight&&(n.bold=!0),Object.keys(n).length>0&&(e=e.compose((new k["default"]).retain(e.length(),n))),parseFloat(r.textIndent||0)>0&&(e=(new k["default"]).insert("\t").concat(e)),e}function _(t,e){var n=t.data;if("O:P"===t.parentNode.tagName)return e.insert(n.trim());if(!u(t.parentNode).whiteSpace.startsWith("pre")){var r=function(t,e){return e=e.replace(/[^\u00a0]/g,""),e.length<1&&t?" ":e};n=n.replace(/\r\n/g," ").replace(/\n/g," "),n=n.replace(/\s\s+/g,r.bind(r,!0)),(null==t.previousSibling&&f(t.parentNode)||null!=t.previousSibling&&f(t.previousSibling))&&(n=n.replace(/^\s+/,r.bind(r,!1))),(null==t.nextSibling&&f(t.parentNode)||null!=t.nextSibling&&f(t.nextSibling))&&(n=n.replace(/\s+$/,r.bind(r,!1)))}return e.insert(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.matchText=e.matchSpacing=e.matchNewline=e.matchBlot=e.matchAttributor=e["default"]=void 0;var O=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),w=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),x=n(20),k=r(x),E=n(2),j=r(E),A=n(18),N=r(A),q=n(37),T=r(q),P=n(39),S=r(P),L=n(45),C=n(46),M=n(47),R=n(48),I=n(49),B=n(50),D=(0,T["default"])("quill:clipboard"),U=[[Node.TEXT_NODE,_],["br",y],[Node.ELEMENT_NODE,b],[Node.ELEMENT_NODE,d],[Node.ELEMENT_NODE,g],[Node.ELEMENT_NODE,h],[Node.ELEMENT_NODE,m],["b",p.bind(p,"bold")],["i",p.bind(p,"italic")],["style",v]],F=[L.AlignAttribute,R.DirectionAttribute].reduce(function(t,e){return t[e.keyName]=e,t},{}),H=[L.AlignStyle,C.BackgroundStyle,M.ColorStyle,R.DirectionStyle,I.FontStyle,B.SizeStyle].reduce(function(t,e){return t[e.keyName]=e,t},{}),z=function(t){function e(t,n){l(this,e);var r=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.root.addEventListener("paste",r.onPaste.bind(r)),r.container=r.quill.addContainer("ql-clipboard"),r.container.setAttribute("contenteditable",!0),r.container.setAttribute("tabindex",-1),r.matchers=[],U.concat(r.options.matchers).forEach(function(t){r.addMatcher.apply(r,i(t))}),r}return s(e,t),w(e,[{key:"addMatcher",value:function(t,e){this.matchers.push([t,e])}},{key:"convert",value:function(t){var e=this,n="__ql-matcher";"string"==typeof t&&(this.container.innerHTML=t);var r=[],o=[];this.matchers.forEach(function(t){var i=O(t,2),l=i[0],a=i[1];switch(l){case Node.TEXT_NODE:r.push(a);break;case Node.ELEMENT_NODE:o.push(a);break;default:[].forEach.call(e.container.querySelectorAll(l),function(t){t[n]=t[n]||[],t[n].push(a)})}});var i=function a(t){return t.nodeType===t.TEXT_NODE?r.reduce(function(e,n){return n(t,e)},new k["default"]):t.nodeType===t.ELEMENT_NODE?[].reduce.call(t.childNodes||[],function(e,r){var i=a(r);return r.nodeType===t.ELEMENT_NODE&&(i=o.reduce(function(t,e){return e(r,t)},i),i=(r[n]||[]).reduce(function(t,e){return e(r,t)},i)),e.concat(i)},new k["default"]):new k["default"]},l=i(this.container);return c(l,"\n")&&null==l.ops[l.ops.length-1].attributes&&(l=l.compose((new k["default"]).retain(l.length()-1)["delete"](1))),D.log("convert",this.container.innerHTML,l),this.container.innerHTML="",l}},{key:"dangerouslyPasteHTML",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:N["default"].sources.API;if("string"==typeof t)return this.quill.setContents(this.convert(t),e);var r=this.convert(e);return this.quill.updateContents((new k["default"]).retain(t).concat(r),n)}},{key:"onPaste",value:function(t){var e=this;if(!t.defaultPrevented&&this.quill.isEnabled()){var n,r=this.quill.getSelection(),o=this.quill.getBounds(r),i=(new k["default"]).retain(r.index)["delete"](r.length),l=!1,a=document.body.scrollTop,s=function(t){e.quill.selection.update(N["default"].sources.SILENT),i=i.concat(t),e.quill.updateContents(i,N["default"].sources.USER),e.quill.setSelection(i.length()-r.length,N["default"].sources.SILENT),document.body.scrollTop=a,e.quill.selection.scrollIntoView()};if("undefined"!=typeof t.clipboardData&&(n=t.clipboardData.items))for(var u=0;u<n.length;u++)if("file"==n[u].kind&&0==n[u].type.indexOf("image/")){var c=n[u].getAsFile();e.quill.updatePhoto(c,function(t){if(e.quill.fileSizeLimit&&t.size>e.quill.fileSizeLimit)return void(e.quill.fileSizeLimitCallback&&e.quill.fileSizeLimitCallback());var n=new FileReader;n.onload=function(t){var n=document.createElement("img");n.src=t.target.result,s(e.convert(n.outerHTML))},n.readAsDataURL(t)}),t.preventDefault(),l=!0;break}l||(this.container.style.top=o.top+"px",this.container.focus(),setTimeout(function(){s(e.convert())},1))}}}]),e}(S["default"]);z.DEFAULTS={matchers:[]},e["default"]=z,e.matchAttributor=h,e.matchBlot=d,e.matchNewline=b,e.matchSpacing=g,e.matchText=_},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.AlignStyle=e.AlignClass=e.AlignAttribute=void 0;var o=n(2),i=r(o),l={scope:i["default"].Scope.BLOCK,whitelist:["right","center","justify"]},a=new i["default"].Attributor.Attribute("align","align",l),s=new i["default"].Attributor.Class("align","ql-align",l),u=new i["default"].Attributor.Style("align","text-align",l);e.AlignAttribute=a,e.AlignClass=s,e.AlignStyle=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.BackgroundStyle=e.BackgroundClass=void 0;var o=n(2),i=r(o),l=n(47),a=new i["default"].Attributor.Class("background","ql-bg",{scope:i["default"].Scope.INLINE}),s=new l.ColorAttributor("background","background-color",{scope:i["default"].Scope.INLINE});e.BackgroundClass=a,e.BackgroundStyle=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.ColorStyle=e.ColorClass=e.ColorAttributor=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function d(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:d(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(2),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"value",value:function n(t){var n=s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t);return n.startsWith("rgb(")?(n=n.replace(/^[^\d]+/,"").replace(/[^\d]+$/,""),"#"+n.split(",").map(function(t){return("00"+parseInt(t).toString(16)).slice(-2)}).join("")):n}}]),e}(c["default"].Attributor.Style),p=new c["default"].Attributor.Class("color","ql-color",{scope:c["default"].Scope.INLINE}),h=new f("color","color",{scope:c["default"].Scope.INLINE});e.ColorAttributor=f,e.ColorClass=p,e.ColorStyle=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.DirectionStyle=e.DirectionClass=e.DirectionAttribute=void 0;var o=n(2),i=r(o),l={scope:i["default"].Scope.BLOCK,whitelist:["rtl"]},a=new i["default"].Attributor.Attribute("direction","dir",l),s=new i["default"].Attributor.Class("direction","ql-direction",l),u=new i["default"].Attributor.Style("direction","direction",l);e.DirectionAttribute=a,e.DirectionClass=s,e.DirectionStyle=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.FontClass=e.FontStyle=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function y(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:y(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(2),c=r(u),f={scope:c["default"].Scope.INLINE,whitelist:["serif","monospace"]},p=new c["default"].Attributor.Class("font","ql-font",f),h=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"value",value:function(t){return s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t).replace(/["']/g,"")}}]),e}(c["default"].Attributor.Style),d=new h("font","font-family",f);e.FontStyle=d,e.FontClass=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SizeStyle=e.SizeClass=void 0;var o=n(2),i=r(o),l=new i["default"].Attributor.Class("size","ql-size",{scope:i["default"].Scope.INLINE,whitelist:["small","large","huge"]}),a=new i["default"].Attributor.Style("size","font-size",{scope:i["default"].Scope.INLINE,whitelist:["10px","18px","32px"]});e.SizeClass=l,e.SizeStyle=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){var e=t.ops[t.ops.length-1];return null!=e&&(null!=e.insert?"string"==typeof e.insert&&e.insert.endsWith("\n"):null!=e.attributes&&Object.keys(e.attributes).some(function(t){return null!=f["default"].query(t,f["default"].Scope.BLOCK)}))}function s(t){var e=t.reduce(function(t,e){return t+=e["delete"]||0},0),n=t.length()-e;return a(t)&&(n-=1),n}Object.defineProperty(e,"__esModule",{value:!0}),e.getLastChangeIndex=e["default"]=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(2),f=r(c),p=n(18),h=r(p),d=n(39),y=r(d),v=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.lastRecorded=0,r.ignoreChange=!1,r.clear(),r.quill.on(h["default"].events.EDITOR_CHANGE,function(t,e,n,o){t!==h["default"].events.TEXT_CHANGE||r.ignoreChange||(r.options.userOnly&&o!==h["default"].sources.USER?r.transform(e):r.record(e,n))}),r.quill.keyboard.addBinding({key:"Z",shortKey:!0},r.undo.bind(r)),r.quill.keyboard.addBinding({key:"Z",shortKey:!0,shiftKey:!0},r.redo.bind(r)),/Win/i.test(navigator.platform)&&r.quill.keyboard.addBinding({key:"Y",shortKey:!0},r.redo.bind(r)),r}return l(e,t),u(e,[{key:"change",value:function(t,e){if(0!==this.stack[t].length){var n=this.stack[t].pop();this.lastRecorded=0,this.ignoreChange=!0,this.quill.updateContents(n[t],h["default"].sources.USER),this.ignoreChange=!1;var r=s(n[t]);this.quill.setSelection(r),this.quill.selection.scrollIntoView(),this.stack[e].push(n)}}},{key:"clear",value:function(){this.stack={undo:[],redo:[]}}},{key:"record",value:function(t,e){if(0!==t.ops.length){this.stack.redo=[];var n=this.quill.getContents().diff(e),r=Date.now();if(this.lastRecorded+this.options.delay>r&&this.stack.undo.length>0){var o=this.stack.undo.pop();n=n.compose(o.undo),t=o.redo.compose(t)}else this.lastRecorded=r;this.stack.undo.push({redo:t,undo:n}),this.stack.undo.length>this.options.maxStack&&this.stack.undo.shift()}}},{key:"redo",value:function(){this.change("redo","undo")}},{key:"transform",value:function(t){this.stack.undo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)}),this.stack.redo.forEach(function(e){e.undo=t.transform(e.undo,!0),e.redo=t.transform(e.redo,!0)})}},{key:"undo",value:function(){this.change("undo","redo")}}]),e}(y["default"]);v.DEFAULTS={delay:1e3,maxStack:100,userOnly:!1},e["default"]=v,e.getLastChangeIndex=s},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){if(0!==t.index){var n=this.quill.scroll.line(t.index),r=y(n,1),o=r[0],i={};if(0===e.offset){var l=o.formats(),a=this.quill.getFormat(t.index-1,1);i=k["default"].attributes.diff(l,a)||{}}this.quill.deleteText(t.index-1,1,N["default"].sources.USER),Object.keys(i).length>0&&this.quill.formatLine(t.index-1,1,i,N["default"].sources.USER),this.quill.selection.scrollIntoView()}}function s(t){t.index>=this.quill.getLength()-1||this.quill.deleteText(t.index,1,N["default"].sources.USER)}function u(t){this.quill.deleteText(t,N["default"].sources.USER),this.quill.setSelection(t.index,N["default"].sources.SILENT),this.quill.selection.scrollIntoView()}function c(t,e){var n=this;t.length>0&&this.quill.scroll.deleteAt(t.index,t.length);var r=Object.keys(e.format).reduce(function(t,n){return j["default"].query(n,j["default"].Scope.BLOCK)&&!Array.isArray(e.format[n])&&(t[n]=e.format[n]),t},{});this.quill.insertText(t.index,"\n",r,N["default"].sources.USER),this.quill.selection.scrollIntoView(),Object.keys(e.format).forEach(function(t){null==r[t]&&(Array.isArray(e.format[t])||"link"!==t&&n.quill.format(t,e.format[t],N["default"].sources.USER))})}function f(t){return{key:M.keys.TAB,shiftKey:!t,format:{"code-block":!0},handler:function(e){var n=j["default"].query("code-block"),r=e.index,o=e.length,i=this.quill.scroll.descendant(n,r),l=y(i,2),a=l[0],s=l[1];if(null!=a){var u=this.quill.scroll.offset(a),c=a.newlineIndex(s,!0)+1,f=a.newlineIndex(u+s+o),p=a.domNode.textContent.slice(c,f).split("\n");s=0,p.forEach(function(e,i){t?(a.insertAt(c+s,n.TAB),s+=n.TAB.length,0===i?r+=n.TAB.length:o+=n.TAB.length):e.startsWith(n.TAB)&&(a.deleteAt(c+s,n.TAB.length),s-=n.TAB.length,0===i?r-=n.TAB.length:o-=n.TAB.length),s+=e.length+1}),this.quill.update(N["default"].sources.USER),this.quill.setSelection(r,o,N["default"].sources.SILENT)}}}}function p(t){return{key:t[0].toUpperCase(),shortKey:!0,handler:function(e,n){this.quill.format(t,!n.format[t],N["default"].sources.USER)}}}function h(t){if("string"==typeof t||"number"==typeof t)return h({key:t});if("object"===("undefined"==typeof t?"undefined":d(t))&&(t=(0,g["default"])(t,!1)),"string"==typeof t.key)if(null!=M.keys[t.key.toUpperCase()])t.key=M.keys[t.key.toUpperCase()];else{if(1!==t.key.length)return null;t.key=t.key.toUpperCase().charCodeAt(0)}return t}Object.defineProperty(e,"__esModule",{value:!0});var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),b=n(38),g=r(b),m=n(22),_=r(m),O=n(25),w=r(O),x=n(26),k=r(x),E=n(2),j=r(E),A=n(18),N=r(A),q=n(37),T=r(q),P=n(39),S=r(P),L=(0,T["default"])("quill:keyboard"),C=/Mac/i.test(navigator.platform)?"metaKey":"ctrlKey",M=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.bindings={},Object.keys(r.options.bindings).forEach(function(t){r.options.bindings[t]&&r.addBinding(r.options.bindings[t])}),r.addBinding({key:e.keys.ENTER,shiftKey:null},c),r.addBinding({key:e.keys.ENTER,metaKey:null,ctrlKey:null,altKey:null},function(){}),r.addBinding({key:e.keys.BACKSPACE},{collapsed:!0,prefix:/^.?$/},a),r.addBinding({key:e.keys.DELETE},{collapsed:!0,suffix:/^$/},s),r.addBinding({key:e.keys.BACKSPACE},{collapsed:!1},u),r.addBinding({key:e.keys.DELETE},{collapsed:!1},u),/Trident/i.test(navigator.userAgent)&&(r.addBinding({key:e.keys.BACKSPACE,shortKey:!0},a),r.addBinding({key:e.keys.DELETE,shortKey:!0},s)),r.listen(),r}return l(e,t),v(e,null,[{key:"match",value:function(t,e){return e=h(e),(!!e.shortKey===t[C]||null===e.shortKey)&&(!["altKey","ctrlKey","metaKey","shiftKey"].some(function(n){return n!=C&&!!e[n]!==t[n]&&null!==e[n]})&&e.key===(t.which||t.keyCode))}}]),v(e,[{key:"addBinding",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=h(t);return null==r||null==r.key?L.warn("Attempted to add invalid keyboard binding",r):("function"==typeof e&&(e={handler:e}),"function"==typeof n&&(n={handler:n}),r=(0,w["default"])(r,e,n),this.bindings[r.key]=this.bindings[r.key]||[],void this.bindings[r.key].push(r))}},{key:"listen",value:function(){var t=this;this.quill.root.addEventListener("keydown",function(n){if(!n.defaultPrevented){var r=n.which||n.keyCode,o=(t.bindings[r]||[]).filter(function(t){return e.match(n,t)});if(0!==o.length){var i=t.quill.getSelection();if(null!=i&&t.quill.hasFocus()){var l=t.quill.scroll.line(i.index),a=y(l,2),s=a[0],u=a[1],c=t.quill.scroll.leaf(i.index),f=y(c,2),p=f[0],h=f[1],v=0===i.length?[p,h]:t.quill.scroll.leaf(i.index+i.length),b=y(v,2),g=b[0],m=b[1],O=p instanceof j["default"].Text?p.value().slice(0,h):"",w=g instanceof j["default"].Text?g.value().slice(m):"",x={collapsed:0===i.length,empty:0===i.length&&s.length()<=1,format:t.quill.getFormat(i),offset:u,prefix:O,suffix:w},k=o.some(function(e){if(null!=e.collapsed&&e.collapsed!==x.collapsed)return!1;if(null!=e.empty&&e.empty!==x.empty)return!1;if(null!=e.offset&&e.offset!==x.offset)return!1;if(Array.isArray(e.format)){if(e.format.every(function(t){return null==x.format[t]}))return!1}else if("object"===d(e.format)&&!Object.keys(e.format).every(function(t){return e.format[t]===!0?null!=x.format[t]:e.format[t]===!1?null==x.format[t]:(0,_["default"])(e.format[t],x.format[t])}))return!1;return!(null!=e.prefix&&!e.prefix.test(x.prefix))&&(!(null!=e.suffix&&!e.suffix.test(x.suffix))&&e.handler.call(t,i,x)!==!0)});k&&n.preventDefault()}}}})}}]),e}(S["default"]);M.keys={BACKSPACE:8,TAB:9,ENTER:13,ESCAPE:27,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46},M.DEFAULTS={bindings:{bold:p("bold"),italic:p("italic"),underline:p("underline"),indent:{key:M.keys.TAB,format:["blockquote","indent","list"],handler:function(t,e){return!(!e.collapsed||0===e.offset)||void this.quill.format("indent","+1",N["default"].sources.USER)}},outdent:{key:M.keys.TAB,shiftKey:!0,format:["blockquote","indent","list"],handler:function(t,e){return!(!e.collapsed||0===e.offset)||void this.quill.format("indent","-1",N["default"].sources.USER)}},"outdent backspace":{key:M.keys.BACKSPACE,collapsed:!0,format:["blockquote","indent","list"],offset:0,handler:function(t,e){null!=e.format.indent?this.quill.format("indent","-1",N["default"].sources.USER):null!=e.format.blockquote?this.quill.format("blockquote",!1,N["default"].sources.USER):null!=e.format.list&&this.quill.format("list",!1,N["default"].sources.USER)}},"indent code-block":f(!0),"outdent code-block":f(!1),"remove tab":{key:M.keys.TAB,shiftKey:!0,collapsed:!0,prefix:/\t$/,handler:function(t){this.quill.deleteText(t.index-1,1,N["default"].sources.USER)}},tab:{key:M.keys.TAB,handler:function(t,e){e.collapsed||this.quill.scroll.deleteAt(t.index,t.length),this.quill.insertText(t.index,"\t",N["default"].sources.USER),this.quill.setSelection(t.index+1,N["default"].sources.SILENT)}},"list empty enter":{key:M.keys.ENTER,collapsed:!0,format:["list"],empty:!0,handler:function(t,e){this.quill.format("list",!1,N["default"].sources.USER),e.format.indent&&this.quill.format("indent",!1,N["default"].sources.USER)}},"header enter":{key:M.keys.ENTER,collapsed:!0,format:["header"],suffix:/^$/,handler:function(t){this.quill.scroll.insertAt(t.index,"\n"),this.quill.formatText(t.index+1,1,"header",!1,N["default"].sources.USER),this.quill.setSelection(t.index+1,N["default"].sources.SILENT),this.quill.selection.scrollIntoView()}},"list autofill":{key:" ",collapsed:!0,format:{list:!1},prefix:/^(1\.|-)$/,handler:function(t,e){var n=e.prefix.length;this.quill.scroll.deleteAt(t.index-n,n),this.quill.formatLine(t.index-n,1,"list",1===n?"bullet":"ordered",N["default"].sources.USER),this.quill.setSelection(t.index-n,N["default"].sources.SILENT)}}}},e["default"]=M},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(1),i=r(o),l=n(45),a=n(48),s=n(54),u=n(55),c=r(u),f=n(56),p=r(f),h=n(57),d=r(h),y=n(46),v=n(47),b=n(49),g=n(50),m=n(58),_=r(m),O=n(59),w=r(O),x=n(60),k=r(x),E=n(61),j=r(E),A=n(62),N=r(A),q=n(63),T=r(q),P=n(64),S=r(P),L=n(65),C=r(L),M=n(28),R=r(M),I=n(66),B=r(I),D=n(67),U=r(D),F=n(68),H=r(F),z=n(69),K=r(z),Z=n(101),W=r(Z),V=n(103),Y=r(V),G=n(104),X=r(G),Q=n(105),$=r(Q),J=n(106),tt=r(J),et=n(108),nt=r(et);i["default"].register({"attributors/attribute/direction":a.DirectionAttribute,"attributors/class/align":l.AlignClass,
"attributors/class/background":y.BackgroundClass,"attributors/class/color":v.ColorClass,"attributors/class/direction":a.DirectionClass,"attributors/class/font":b.FontClass,"attributors/class/size":g.SizeClass,"attributors/style/align":l.AlignStyle,"attributors/style/background":y.BackgroundStyle,"attributors/style/color":v.ColorStyle,"attributors/style/direction":a.DirectionStyle,"attributors/style/font":b.FontStyle,"attributors/style/size":g.SizeStyle},!0),i["default"].register({"formats/align":l.AlignClass,"formats/direction":a.DirectionClass,"formats/indent":s.IndentClass,"formats/background":y.BackgroundStyle,"formats/color":v.ColorStyle,"formats/font":b.FontClass,"formats/size":g.SizeClass,"formats/blockquote":c["default"],"formats/code-block":R["default"],"formats/header":p["default"],"formats/list":d["default"],"formats/bold":_["default"],"formats/code":M.Code,"formats/italic":w["default"],"formats/link":k["default"],"formats/script":j["default"],"formats/strike":N["default"],"formats/underline":T["default"],"formats/image":S["default"],"formats/video":C["default"],"formats/list/item":h.ListItem,"modules/formula":B["default"],"modules/syntax":U["default"],"modules/toolbar":H["default"],"themes/bubble":tt["default"],"themes/snow":nt["default"],"ui/icons":K["default"],"ui/picker":W["default"],"ui/icon-picker":X["default"],"ui/color-picker":Y["default"],"ui/tooltip":$["default"]},!0),t.exports=i["default"]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.IndentClass=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function h(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:h(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(2),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"add",value:function(t,n){if("+1"===n||"-1"===n){var r=this.value(t)||0;n="+1"===n?r+1:r-1}return 0===n?(this.remove(t),!0):s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"add",this).call(this,t,n)}},{key:"value",value:function(t){return parseInt(s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"value",this).call(this,t))||void 0}}]),e}(c["default"].Attributor.Class),p=new f("indent","ql-indent",{scope:c["default"].Scope.BLOCK,whitelist:[1,2,3,4,5,6,7,8]});e.IndentClass=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(29),s=r(a),u=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s["default"]);u.blotName="blockquote",u.tagName="blockquote",e["default"]=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(29),u=r(s),c=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,null,[{key:"formats",value:function(t){return this.tagName.indexOf(t.tagName)+1}}]),e}(u["default"]);c.blotName="header",c.tagName=["H1","H2","H3","H4","H5","H6"],e["default"]=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.ListItem=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function g(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:g(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(2),f=r(c),p=n(29),h=r(p),d=n(42),y=r(d),v=function(t){function e(){return i(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"format",value:function(t,n){t!==b.blotName||n?u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n):this.replaceWith(f["default"].create(this.statics.scope))}},{key:"remove",value:function(){null==this.prev&&null==this.next?this.parent.remove():u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"remove",this).call(this)}},{key:"replaceWith",value:function(t,n){return this.parent.isolate(this.offset(this.parent),this.length()),t===this.parent.statics.blotName?(this.parent.replaceWith(t,n),this):(this.parent.unwrap(),u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t,n))}}],[{key:"formats",value:function(t){return t.tagName===this.tagName?void 0:u(e.__proto__||Object.getPrototypeOf(e),"formats",this).call(this,t)}}]),e}(h["default"]);v.blotName="list-item",v.tagName="LI";var b=function(t){function e(){return i(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),s(e,[{key:"format",value:function(t,e){this.children.length>0&&this.children.tail.format(t,e)}},{key:"formats",value:function(){return o({},this.statics.blotName,this.statics.formats(this.domNode))}},{key:"insertBefore",value:function(t,n){if(t instanceof v)u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"insertBefore",this).call(this,t,n);else{var r=null==n?this.length():n.offset(this),o=this.split(r);o.parent.insertBefore(t,o)}}},{key:"optimize",value:function(){u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this);var t=this.next;null!=t&&t.prev===this&&t.statics.blotName===this.statics.blotName&&t.domNode.tagName===this.domNode.tagName&&(t.moveChildren(this),t.remove())}},{key:"replace",value:function(t){if(t.statics.blotName!==this.statics.blotName){var n=f["default"].create(this.statics.defaultChild);t.moveChildren(n),this.appendChild(n)}u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replace",this).call(this,t)}}],[{key:"create",value:function(t){return"ordered"===t?t="OL":"bullet"===t&&(t="UL"),u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t)}},{key:"formats",value:function(t){return"OL"===t.tagName?"ordered":"UL"===t.tagName?"bullet":void 0}}]),e}(y["default"]);b.blotName="list",b.scope=f["default"].Scope.BLOCK_BLOT,b.tagName=["OL","UL"],b.defaultChild="list-item",b.allowedChildren=[v],e.ListItem=v,e["default"]=b},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function p(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:p(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(32),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"optimize",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"optimize",this).call(this),this.domNode.tagName!==this.statics.tagName[0]&&this.replaceWith(this.statics.blotName)}}],[{key:"create",value:function(){return s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this)}},{key:"formats",value:function(){return!0}}]),e}(c["default"]);f.blotName="bold",f.tagName=["STRONG","B"],e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(58),s=r(a),u=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s["default"]);u.blotName="italic",u.tagName=["EM","I"],e["default"]=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n=document.createElement("a");n.href=t;var r=n.href.slice(0,n.href.indexOf(":"));return e.indexOf(r)>-1}Object.defineProperty(e,"__esModule",{value:!0}),e.sanitize=e["default"]=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function h(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:h(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(32),f=r(c),p=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"format",value:function(t,n){return t===this.statics.blotName&&n?(n=this.constructor.sanitize(n),void this.domNode.setAttribute("href",n)):u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return t=this.sanitize(t),n.setAttribute("href",t),n.setAttribute("target","_blank"),n}},{key:"formats",value:function(t){return t.getAttribute("href")}},{key:"sanitize",value:function(t){return a(t,["http","https","mailto"])?t:this.SANITIZED_URL}}]),e}(f["default"]);p.blotName="link",p.tagName="A",p.SANITIZED_URL="about:blank",e["default"]=p,e.sanitize=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function p(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:p(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(32),c=r(u),f=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,null,[{key:"create",value:function(t){return"super"===t?document.createElement("sup"):"sub"===t?document.createElement("sub"):s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t)}},{key:"formats",value:function(t){return"SUB"===t.tagName?"sub":"SUP"===t.tagName?"super":void 0}}]),e}(c["default"]);f.blotName="script",f.tagName=["SUB","SUP"],e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(32),s=r(a),u=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s["default"]);u.blotName="strike",u.tagName="S",e["default"]=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(32),s=r(a),u=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),e}(s["default"]);u.blotName="underline",u.tagName="U",e["default"]=u},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function d(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:d(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(31),c=r(u),f=n(60),p=["alt","height","width"],h=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"format",value:function(t,n){p.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return p.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}},{key:"match",value:function(t){return/\.(jpe?g|gif|png)$/.test(t)||/^data:image\/.+;base64/.test(t)}},{key:"sanitize",value:function(t){return(0,f.sanitize)(t,["http","https","data"])?t:"//:0"}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(c["default"]);h.blotName="image",h.tagName="IMG",e["default"]=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function d(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:d(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(29),c=n(60),f=r(c),p=["height","width"],h=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"format",value:function(t,n){p.indexOf(t)>-1?n?this.domNode.setAttribute(t,n):this.domNode.removeAttribute(t):s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"format",this).call(this,t,n)}}],[{key:"create",value:function(t){var n=s(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return n.setAttribute("frameborder","0"),n.setAttribute("allowfullscreen",!0),n.setAttribute("src",this.sanitize(t)),n}},{key:"formats",value:function(t){return p.reduce(function(e,n){return t.hasAttribute(n)&&(e[n]=t.getAttribute(n)),e},{})}},{key:"sanitize",value:function(t){return f["default"].sanitize(t)}},{key:"value",value:function(t){return t.getAttribute("src")}}]),e}(u.BlockEmbed);h.blotName="video",h.className="ql-video",h.tagName="IFRAME",e["default"]=h},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(){if(null==window.katex)throw new Error("Formula module requires KaTeX.");h["default"].register(d,!0)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.FormulaBlot=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function y(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:y(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(31),f=r(c),p=n(18),h=r(p),d=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),s(e,[{key:"index",value:function(){return 1}}],[{key:"create",value:function(t){var n=u(e.__proto__||Object.getPrototypeOf(e),"create",this).call(this,t);return"string"==typeof t&&(window.katex.render(t,n),n.setAttribute("data-value",t)),n.setAttribute("contenteditable",!1),n}},{key:"value",value:function(t){return t.getAttribute("data-value")}}]),e}(f["default"]);d.blotName="formula",d.className="ql-formula",d.tagName="SPAN",e.FormulaBlot=d,e["default"]=a},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.CodeToken=e.CodeBlock=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function _(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:_(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(2),c=r(u),f=n(18),p=r(f),h=n(39),d=r(h),y=n(28),v=r(y),b=function(t){function e(){return o(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return l(e,t),a(e,[{key:"replaceWith",value:function(t){this.domNode.textContent=this.domNode.textContent,this.attach(),s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"replaceWith",this).call(this,t)}},{key:"highlight",value:function(t){if(this.cachedHTML!==this.domNode.innerHTML){var e=this.domNode.textContent;(e.trim().length>0||null==this.cachedHTML)&&(this.domNode.innerHTML=t(e),this.attach()),this.cachedHTML=this.domNode.innerHTML}}}]),e}(v["default"]);b.className="ql-syntax";var g=new c["default"].Attributor.Class("token","hljs",{scope:c["default"].Scope.INLINE}),m=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if("function"!=typeof r.options.highlight)throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");p["default"].register(g,!0),p["default"].register(b,!0);var l=null;return r.quill.on(p["default"].events.SCROLL_OPTIMIZE,function(){null==l&&(l=setTimeout(function(){r.highlight(),l=null},100))}),r.highlight(),r}return l(e,t),a(e,[{key:"highlight",value:function(){var t=this;if(!this.quill.selection.composing){var e=this.quill.getSelection();this.quill.scroll.descendants(b).forEach(function(e){e.highlight(t.options.highlight)}),this.quill.update(p["default"].sources.SILENT),null!=e&&this.quill.setSelection(e,p["default"].sources.SILENT)}}}]),e}(d["default"]);m.DEFAULTS={highlight:function(){return null==window.hljs?null:function(t){var e=window.hljs.highlightAuto(t);return e.value}}()},e.CodeBlock=b,e.CodeToken=g,e["default"]=m},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e,n){var r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("ql-"+e),null!=n&&(r.value=n),t.appendChild(r)}function u(t,e){Array.isArray(e[0])||(e=[e]),e.forEach(function(e){var n=document.createElement("span");n.classList.add("ql-formats"),e.forEach(function(t){if("string"==typeof t)s(n,t);else{var e=Object.keys(t)[0],r=t[e];Array.isArray(r)?c(n,e,r):s(n,e,r)}}),t.appendChild(n)})}function c(t,e,n){var r=document.createElement("select");r.classList.add("ql-"+e),n.forEach(function(t){var e=document.createElement("option");t!==!1?e.setAttribute("value",t):e.setAttribute("selected","selected"),r.appendChild(e)}),t.appendChild(r)}Object.defineProperty(e,"__esModule",{value:!0}),e.addControls=e["default"]=void 0;var f=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),h=n(20),d=r(h),y=n(2),v=r(y),b=n(18),g=r(b),m=n(37),_=r(m),O=n(39),w=r(O),x=(0,_["default"])("quill:toolbar"),k=function(t){function e(t,n){i(this,e);var r=l(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));if(Array.isArray(r.options.container)){var o=document.createElement("div");u(o,r.options.container),t.container.parentNode.insertBefore(o,t.container),r.container=o}else"string"==typeof r.options.container?r.container=document.querySelector(r.options.container):r.container=r.options.container;if(!(r.container instanceof HTMLElement)){var a;return a=x.error("Container required for toolbar",r.options),l(r,a)}return r.container.classList.add("ql-toolbar"),r.controls=[],r.handlers={},Object.keys(r.options.handlers).forEach(function(t){r.addHandler(t,r.options.handlers[t])}),[].forEach.call(r.container.querySelectorAll("button, select"),function(t){r.attach(t)}),r.quill.on(g["default"].events.EDITOR_CHANGE,function(t,e){t===g["default"].events.SELECTION_CHANGE&&r.update(e)}),r.quill.on(g["default"].events.SCROLL_OPTIMIZE,function(){var t=r.quill.selection.getRange(),e=f(t,1),n=e[0];r.update(n)}),r}return a(e,t),p(e,[{key:"addHandler",value:function(t,e){this.handlers[t]=e}},{key:"attach",value:function(t){var e=this,n=[].find.call(t.classList,function(t){return 0===t.indexOf("ql-")});if(n){if(n=n.slice("ql-".length),"BUTTON"===t.tagName&&t.setAttribute("type","button"),null==this.handlers[n]){if(null!=this.quill.scroll.whitelist&&null==this.quill.scroll.whitelist[n])return void x.warn("ignoring attaching to disabled format",n,t);if(null==v["default"].query(n))return void x.warn("ignoring attaching to nonexistent format",n,t)}var r="SELECT"===t.tagName?"change":"click";t.addEventListener(r,function(r){var i=void 0;if("SELECT"===t.tagName){if(t.selectedIndex<0)return;var l=t.options[t.selectedIndex];i=!l.hasAttribute("selected")&&(l.value||!1)}else i=!t.classList.contains("ql-active")&&(t.value||!t.hasAttribute("value")),r.preventDefault();e.quill.focus();var a=e.quill.selection.getRange(),s=f(a,1),u=s[0];if(null!=e.handlers[n])e.handlers[n].call(e,i);else if(v["default"].query(n).prototype instanceof v["default"].Embed){if(i=prompt("Enter "+n),!i)return;e.quill.updateContents((new d["default"]).retain(u.index)["delete"](u.length).insert(o({},n,i)),g["default"].sources.USER)}else e.quill.format(n,i,g["default"].sources.USER);e.update(u)}),this.controls.push([n,t])}}},{key:"update",value:function(t){var e=null==t?{}:this.quill.getFormat(t);
this.controls.forEach(function(n){var r=f(n,2),o=r[0],i=r[1];if("SELECT"===i.tagName){var l=void 0;if(null==t)l=null;else if(null==e[o])l=i.querySelector("option[selected]");else if(!Array.isArray(e[o])){var a=e[o];"string"==typeof a&&(a=a.replace(/\"/g,'\\"')),l=i.querySelector('option[value="'+a+'"]')}null==l?(i.value="",i.selectedIndex=-1):l.selected=!0}else if(null==t)i.classList.remove("ql-active");else if(i.hasAttribute("value")){var s=e[o]===i.getAttribute("value")||null!=e[o]&&e[o].toString()===i.getAttribute("value")||null==e[o]&&!i.getAttribute("value");i.classList.toggle("ql-active",s)}else i.classList.toggle("ql-active",null!=e[o])})}}]),e}(w["default"]);k.DEFAULTS={},k.DEFAULTS={container:null,handlers:{clean:function(){var t=this,e=this.quill.getSelection();if(null!=e)if(0==e.length){var n=this.quill.getFormat();Object.keys(n).forEach(function(e){null!=v["default"].query(e,v["default"].Scope.INLINE)&&t.quill.format(e,!1)})}else this.quill.removeFormat(e,g["default"].sources.USER)},direction:function(t){var e=this.quill.getFormat().align;"rtl"===t&&null==e?this.quill.format("align","right",g["default"].sources.USER):t||"right"!==e||this.quill.format("align",!1,g["default"].sources.USER),this.quill.format("direction",t,g["default"].sources.USER)},link:function(t){t===!0&&(t=prompt("Enter link URL:")),this.quill.format("link",t,g["default"].sources.USER)},indent:function E(t){var e=this.quill.getSelection(),n=this.quill.getFormat(e),E=parseInt(n.indent||0);if("+1"===t||"-1"===t){var r="+1"===t?1:-1;"rtl"===n.direction&&(r*=-1),this.quill.format("indent",E+r,g["default"].sources.USER)}}}},e["default"]=k,e.addControls=u},function(t,e,n){"use strict";t.exports={align:{"":n(70),center:n(71),right:n(72),justify:n(73)},background:n(74),blockquote:n(75),bold:n(76),clean:n(77),code:n(78),"code-block":n(78),color:n(79),direction:{"":n(80),rtl:n(81)},"float":{center:n(82),full:n(83),left:n(84),right:n(85)},formula:n(86),header:{1:n(87),2:n(88)},italic:n(89),image:n(90),indent:{"+1":n(91),"-1":n(92)},link:n(93),list:{ordered:n(94),bullet:n(95)},script:{sub:n(96),"super":n(97)},strike:n(98),underline:n(99),video:n(100)}},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>'},function(t,e){t.exports='<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <line class="ql-stroke ql-thin" x1=13.5 x2=15.5 y1=14.5 y2=14.5></line> <path class=ql-fill d=M14.5,15a0.5,0.5,0,0,1-.5-0.5V12.085l-0.276.138A0.5,0.5,0,0,1,13.053,12c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,15,11.5v3A0.5,0.5,0,0,1,14.5,15Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <path class="ql-stroke ql-thin" d=M15.5,14.5h-2c0-.234,1.85-1.076,1.85-2.234a0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>'},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>'},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=n(102),s=r(a),u=function(){function t(e){var n=this;o(this,t),this.select=e,this.container=document.createElement("span"),this.buildPicker(),this.select.style.display="none",this.select.parentNode.insertBefore(this.container,this.select),this.label.addEventListener("click",function(){n.container.classList.toggle("ql-expanded")}),this.select.addEventListener("change",this.update.bind(this))}return l(t,[{key:"buildItem",value:function(t){var e=this,n=document.createElement("span");return n.classList.add("ql-picker-item"),t.hasAttribute("value")&&n.setAttribute("data-value",t.getAttribute("value")),t.textContent&&n.setAttribute("data-label",t.textContent),n.addEventListener("click",function(){e.selectItem(n,!0)}),n}},{key:"buildLabel",value:function(){var t=document.createElement("span");return t.classList.add("ql-picker-label"),t.innerHTML=s["default"],this.container.appendChild(t),t}},{key:"buildOptions",value:function(){var t=this,e=document.createElement("span");e.classList.add("ql-picker-options"),[].slice.call(this.select.options).forEach(function(n){var r=t.buildItem(n);e.appendChild(r),n.hasAttribute("selected")&&t.selectItem(r)}),this.container.appendChild(e)}},{key:"buildPicker",value:function(){var t=this;[].slice.call(this.select.attributes).forEach(function(e){t.container.setAttribute(e.name,e.value)}),this.container.classList.add("ql-picker"),this.label=this.buildLabel(),this.buildOptions()}},{key:"close",value:function(){this.container.classList.remove("ql-expanded")}},{key:"selectItem",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.container.querySelector(".ql-selected");if(t!==n)if(null!=n&&n.classList.remove("ql-selected"),null!=t){if(t.classList.add("ql-selected"),this.select.selectedIndex=[].indexOf.call(t.parentNode.children,t),t.hasAttribute("data-value")?this.label.setAttribute("data-value",t.getAttribute("data-value")):this.label.removeAttribute("data-value"),t.hasAttribute("data-label")?this.label.setAttribute("data-label",t.getAttribute("data-label")):this.label.removeAttribute("data-label"),e){if("function"==typeof Event)this.select.dispatchEvent(new Event("change"));else if("object"===("undefined"==typeof Event?"undefined":i(Event))){var r=document.createEvent("Event");r.initEvent("change",!0,!0),this.select.dispatchEvent(r)}this.close()}}else this.label.removeAttribute("data-value"),this.label.removeAttribute("data-label")}},{key:"update",value:function(){var t=void 0;if(this.select.selectedIndex>-1){var e=this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex];t=this.select.options[this.select.selectedIndex],this.selectItem(e)}else this.selectItem(null);var n=null!=t&&t!==this.select.querySelector("option[selected]");this.label.classList.toggle("ql-active",n)}}]),t}();e["default"]=u},function(t,e){t.exports='<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>'},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function p(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:p(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(101),c=r(u),f=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.label.innerHTML=n,r.container.classList.add("ql-color-picker"),[].slice.call(r.container.querySelectorAll(".ql-picker-item"),0,7).forEach(function(t){t.classList.add("ql-primary")}),r}return l(e,t),a(e,[{key:"buildItem",value:function(t){var n=s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"buildItem",this).call(this,t);return n.style.backgroundColor=t.getAttribute("value")||"",n}},{key:"selectItem",value:function(t,n){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n);var r=this.label.querySelector(".ql-color-label"),o=t?t.getAttribute("data-value")||"":"";r&&("line"===r.tagName?r.style.stroke=o:r.style.fill=o)}}]),e}(c["default"]);e["default"]=f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function p(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:p(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=n(101),c=r(u),f=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.container.classList.add("ql-icon-picker"),[].forEach.call(r.container.querySelectorAll(".ql-picker-item"),function(t){t.innerHTML=n[t.getAttribute("data-value")||""]}),r.defaultItem=r.container.querySelector(".ql-selected"),r.selectItem(r.defaultItem),r}return l(e,t),a(e,[{key:"selectItem",value:function(t,n){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"selectItem",this).call(this,t,n),t=t||this.defaultItem,this.label.innerHTML=t.innerHTML}}]),e}(c["default"]);e["default"]=f},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=function(){function t(e,r){var o=this;n(this,t),this.quill=e,this.boundsContainer=r||document.body,this.root=e.addContainer("ql-tooltip"),this.root.innerHTML=this.constructor.TEMPLATE;var i=parseInt(window.getComputedStyle(this.root).marginTop);this.quill.root.addEventListener("scroll",function(){o.root.style.marginTop=-1*o.quill.root.scrollTop+i+"px",o.checkBounds()}),this.hide()}return r(t,[{key:"checkBounds",value:function(){this.root.classList.toggle("ql-out-top",this.root.offsetTop<=0),this.root.classList.remove("ql-out-bottom"),this.root.classList.toggle("ql-out-bottom",this.root.offsetTop+this.root.offsetHeight>=this.quill.root.offsetHeight)}},{key:"hide",value:function(){this.root.classList.add("ql-hidden")}},{key:"position",value:function(t){var e=t.left+t.width/2-this.root.offsetWidth/2,n=t.bottom+this.quill.root.scrollTop;this.root.style.left=e+"px",this.root.style.top=n+"px";var r=this.boundsContainer.getBoundingClientRect(),o=this.root.getBoundingClientRect(),i=0;return o.right>r.right&&(i=r.right-o.right,this.root.style.left=e+i+"px"),o.left<r.left&&(i=r.left-o.left,this.root.style.left=e+i+"px"),this.checkBounds(),i}},{key:"show",value:function(){this.root.classList.remove("ql-editing"),this.root.classList.remove("ql-hidden")}}]),t}();e["default"]=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function m(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:m(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(25),c=r(u),f=n(35),p=r(f),h=n(107),d=r(h),y=n(40),v=[["bold","italic","link"],[{header:1},{header:2},"blockquote"]],b=function(t){function e(t,n){o(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=v);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-bubble"),r}return l(e,t),s(e,[{key:"extendToolbar",value:function(t){this.tooltip=new g(this.quill,this.options.bounds),this.tooltip.root.appendChild(t.container),this.buildButtons([].slice.call(t.container.querySelectorAll("button"))),this.buildPickers([].slice.call(t.container.querySelectorAll("select")))}}]),e}(d["default"]);b.DEFAULTS=(0,c["default"])(!0,{},d["default"].DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){t?this.quill.theme.tooltip.edit():this.quill.format("link",!1)}}}}});var g=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.on(p["default"].events.EDITOR_CHANGE,function(t,e){if(t===p["default"].events.SELECTION_CHANGE)if(null!=e&&e.length>0){r.show(),r.root.style.left="0px",r.root.style.width="",r.root.style.width=r.root.offsetWidth+"px";var n=r.quill.scroll.lines(e.index,e.length);if(1===n.length)r.position(r.quill.getBounds(e));else{var o=n[n.length-1],i=o.offset(r.quill.scroll),l=Math.min(o.length()-1,e.index+e.length-i),a=r.quill.getBounds(new y.Range(i,l));r.position(a)}}else document.activeElement!==r.textbox&&r.quill.hasFocus()&&r.hide()}),r}return l(e,t),s(e,[{key:"listen",value:function(){var t=this;a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector(".ql-close").addEventListener("click",function(){t.root.classList.remove("ql-editing")}),this.quill.on(p["default"].events.SCROLL_OPTIMIZE,function(){setTimeout(function(){if(!t.root.classList.contains("ql-hidden")){var e=t.quill.getSelection();null!=e&&t.position(t.quill.getBounds(e))}},1)})}},{key:"cancel",value:function(){this.show()}},{key:"position",value:function(t){var n=a(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"position",this).call(this,t);if(0===n)return n;var r=this.root.querySelector(".ql-tooltip-arrow");r.style.marginLeft="",r.style.marginLeft=-1*n-r.offsetWidth/2+"px"}}]),e}(h.BaseTooltip);g.TEMPLATE=['<span class="ql-tooltip-arrow"></span>','<div class="ql-tooltip-editor">','<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">','<a class="ql-close"></a>',"</div>"].join(""),e["default"]=b},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.forEach(function(e){var r=document.createElement("option");e===n?r.setAttribute("selected","selected"):r.setAttribute("value",e),t.appendChild(r)})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=e.BaseTooltip=void 0;var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function I(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:I(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},c=n(25),f=r(c),p=n(20),h=r(p),d=n(35),y=r(d),v=n(52),b=r(v),g=n(41),m=r(g),_=n(103),O=r(_),w=n(104),x=r(w),k=n(101),E=r(k),j=n(105),A=r(j),N=n(69),q=r(N),T=[!1,"center","right","justify"],P=["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466"],S=[!1,"serif","monospace"],L=["1","2","3",!1],C=["small",!1,"large","huge"],M=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),l=function a(e){return document.body.contains(t.root)?(null==r.tooltip||r.tooltip.root.contains(e.target)||document.activeElement===r.tooltip.textbox||r.quill.hasFocus()||r.tooltip.hide(),
void(null!=r.pickers&&r.pickers.forEach(function(t){t.container.contains(e.target)||t.close()}))):document.body.removeEventListener("click",a)};return document.body.addEventListener("click",l),r}return l(e,t),s(e,[{key:"addModule",value:function(t){var n=u(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addModule",this).call(this,t);return"toolbar"===t&&this.extendToolbar(n),n}},{key:"buildButtons",value:function(t){t.forEach(function(t){var e=t.getAttribute("class")||"";e.split(/\s+/).forEach(function(e){if(e.startsWith("ql-")&&(e=e.slice("ql-".length),null!=q["default"][e]))if("direction"===e)t.innerHTML=q["default"][e][""]+q["default"][e].rtl;else if("string"==typeof q["default"][e])t.innerHTML=q["default"][e];else{var n=t.value||"";null!=n&&q["default"][e][n]&&(t.innerHTML=q["default"][e][n])}})})}},{key:"buildPickers",value:function(t){var e=this;this.pickers=t.map(function(t){if(t.classList.contains("ql-align"))return null==t.querySelector("option")&&a(t,T),new x["default"](t,q["default"].align);if(t.classList.contains("ql-background")||t.classList.contains("ql-color")){var e=t.classList.contains("ql-background")?"background":"color";return null==t.querySelector("option")&&a(t,P,"background"===e?"#ffffff":"#000000"),new O["default"](t,q["default"][e])}return null==t.querySelector("option")&&(t.classList.contains("ql-font")?a(t,S):t.classList.contains("ql-header")?a(t,L):t.classList.contains("ql-size")&&a(t,C)),new E["default"](t)});var n=function(){e.pickers.forEach(function(t){t.update()})};this.quill.on(y["default"].events.SELECTION_CHANGE,n).on(y["default"].events.SCROLL_OPTIMIZE,n)}}]),e}(m["default"]);M.DEFAULTS=(0,f["default"])(!0,{},m["default"].DEFAULTS,{modules:{toolbar:{handlers:{formula:function(){this.quill.theme.tooltip.edit("formula")},image:function(){var t=this,e=this.container.querySelector("input.ql-image[type=file]");null==e&&(e=document.createElement("input"),e.setAttribute("type","file"),e.setAttribute("accept","image/*"),e.classList.add("ql-image"),e.addEventListener("change",function(){if(null!=e.files&&null!=e.files[0]){var n=e.files[0];t.quill.updatePhoto(n,function(n){if(t.quill.fileSizeLimit&&n.size>t.quill.fileSizeLimit)return void(t.quill.fileSizeLimitCallback&&t.quill.fileSizeLimitCallback());var r=new FileReader;r.onload=function(n){var r=t.quill.getSelection(!0);t.quill.updateContents((new h["default"]).retain(r.index)["delete"](r.length).insert({image:n.target.result}),y["default"].sources.USER),e.value=""},r.readAsDataURL(n)})}}),this.container.appendChild(e)),e.click()},video:function(){this.quill.theme.tooltip.edit("video")}}}}});var R=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.textbox=r.root.querySelector('input[type="text"]'),r.listen(),r}return l(e,t),s(e,[{key:"listen",value:function(){var t=this;this.textbox.addEventListener("keydown",function(e){b["default"].match(e,"enter")?(t.save(),e.preventDefault()):b["default"].match(e,"escape")&&(t.cancel(),e.preventDefault())})}},{key:"cancel",value:function(){this.hide()}},{key:"edit",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"link",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.root.classList.remove("ql-hidden"),this.root.classList.add("ql-editing"),null!=e?this.textbox.value=e:t!==this.root.getAttribute("data-mode")&&(this.textbox.value=""),this.position(this.quill.getBounds(this.quill.selection.savedRange)),this.textbox.select(),this.textbox.setAttribute("placeholder",this.textbox.getAttribute("data-"+t)||""),this.root.setAttribute("data-mode",t)}},{key:"restoreFocus",value:function(){var t=this.quill.root.scrollTop;this.quill.focus(),this.quill.root.scrollTop=t}},{key:"save",value:function(){var t=this.textbox.value;switch(this.root.getAttribute("data-mode")){case"link":var e=this.quill.root.scrollTop;this.linkRange?(this.quill.formatText(this.linkRange,"link",t,y["default"].sources.USER),delete this.linkRange):(this.restoreFocus(),this.quill.format("link",t,y["default"].sources.USER)),this.quill.root.scrollTop=e;break;case"video":var n=t.match(/^(https?):\/\/(www\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/)||t.match(/^(https?):\/\/(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);n?t=n[1]+"://www.youtube.com/embed/"+n[3]+"?showinfo=0":(n=t.match(/^(https?):\/\/(www\.)?vimeo\.com\/(\d+)/))&&(t=n[1]+"://player.vimeo.com/video/"+n[3]+"/");case"formula":var r=this.quill.getSelection(!0),o=r.index+r.length;null!=r&&(this.quill.insertEmbed(o,this.root.getAttribute("data-mode"),t,y["default"].sources.USER),"formula"===this.root.getAttribute("data-mode")&&this.quill.insertText(o+1," ",y["default"].sources.USER),this.quill.setSelection(o+2,y["default"].sources.USER))}this.textbox.value="",this.hide()}}]),e}(A["default"]);e.BaseTooltip=R,e["default"]=M},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!e||n.length!==e);r=!0);}catch(s){o=!0,i=s}finally{try{!r&&a["return"]&&a["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function w(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:w(o,e,n)}if("value"in r)return r.value;var i=r.get;if(void 0!==i)return i.call(n)},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(25),f=r(c),p=n(35),h=r(p),d=n(107),y=r(d),v=n(60),b=r(v),g=n(40),m=[[{header:["1","2","3",!1]}],["bold","italic","underline","link"],[{list:"ordered"},{list:"bullet"}],["clean"]],_=function(t){function e(t,n){o(this,e),null!=n.modules.toolbar&&null==n.modules.toolbar.container&&(n.modules.toolbar.container=m);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.quill.container.classList.add("ql-snow"),r}return l(e,t),u(e,[{key:"extendToolbar",value:function(t){t.container.classList.add("ql-snow"),this.buildButtons([].slice.call(t.container.querySelectorAll("button"))),this.buildPickers([].slice.call(t.container.querySelectorAll("select"))),this.tooltip=new O(this.quill,this.options.bounds),t.container.querySelector(".ql-link")&&this.quill.keyboard.addBinding({key:"K",shortKey:!0},function(e,n){t.handlers.link.call(t,!n.format.link)})}}]),e}(y["default"]);_.DEFAULTS=(0,f["default"])(!0,{},y["default"].DEFAULTS,{modules:{toolbar:{handlers:{link:function(t){if(t){var e=this.quill.getSelection();if(null==e||0==e.length)return;var n=this.quill.getText(e);/^\S+@\S+\.\S+$/.test(n)&&0!==n.indexOf("mailto:")&&(n="mailto:"+n);var r=this.quill.theme.tooltip;r.edit("link",n)}else this.quill.format("link",!1)}}}}});var O=function(t){function e(t,n){o(this,e);var r=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.preview=r.root.querySelector("a.ql-preview"),r}return l(e,t),u(e,[{key:"listen",value:function(){var t=this;s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"listen",this).call(this),this.root.querySelector("a.ql-action").addEventListener("click",function(e){t.root.classList.contains("ql-editing")?t.save():t.edit("link",t.preview.textContent),e.preventDefault()}),this.root.querySelector("a.ql-remove").addEventListener("click",function(e){null!=t.linkRange&&(t.restoreFocus(),t.quill.formatText(t.linkRange,"link",!1,h["default"].sources.USER),delete t.linkRange),e.preventDefault(),t.hide()}),this.quill.on(h["default"].events.SELECTION_CHANGE,function(e){if(null!=e){if(0===e.length){var n=t.quill.scroll.descendant(b["default"],e.index),r=a(n,2),o=r[0],i=r[1];if(null!=o){t.linkRange=new g.Range(e.index-i,o.length());var l=b["default"].formats(o.domNode);return t.preview.textContent=l,t.preview.setAttribute("href",l),t.show(),void t.position(t.quill.getBounds(t.linkRange))}}else delete t.linkRange;t.hide()}})}},{key:"show",value:function(){s(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"show",this).call(this),this.root.removeAttribute("data-mode")}}]),e}(d.BaseTooltip);O.TEMPLATE=['<a class="ql-preview" target="_blank" href="about:blank"></a>','<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">','<a class="ql-action"></a>','<a class="ql-remove"></a>'].join(""),e["default"]=_}])});
"use strict";
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function")
}
function _possibleConstructorReturn(t, e) {
    if (!t)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e)
        throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }),
    e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}
function _sanitize(t, e) {
    var o = document.createElement("a");
    o.href = t;
    var l = o.href.slice(0, o.href.indexOf(":"));
    return e.indexOf(l) > -1
}
function relativeUrl(t) {
    var e = location
      , o = document.createElement("a");
    return o.href = t,
    e.origin != o.origin ? o.href : e.pathname != o.pathname || e.search != o.search ? o.pathname + o.search + o.hash : e.href == o.href ? o.hash || o.pathname + o.search + o.hash : o.hash
}
function getFigureValueByUrl(t) {
    var e = void 0;
    if ((e = t.match(/^(https?):\/\/(www\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/i)) || (e = t.match(/^(https?):\/\/(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/i)))
        return {
            embed: "/embed/youtube?url=" + encodeURIComponent(t)
        };
    if (e = t.match(/^(https?):\/\/(www\.)?vimeo\.com\/(\d+)/i))
        return {
            embed: "/embed/vimeo?url=" + encodeURIComponent(t)
        };
    if (e = t.match(/^(https?):\/\/(www\.|mobile\.)?twitter\.com\/(.+)\/status\/(\d+)/i))
        return {
            embed: "/embed/twitter?url=" + encodeURIComponent(t)
        };
    if (e = t.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/))
        return "video/" == e[1].substr(0, 6) ? {
            video: t
        } : {
            image: t
        };
    if (e = t.match(/^(https?):\/\/\S+/i)) {
        var o = document.createElement("a");
        if (o.href = t,
        o.pathname.match(/\.(jpe?g|png|gif|mp4)$/i))
            return "mp4" == e[1] ? {
                video: t
            } : {
                image: t
            }
    }
    return !1
}
function _resizeIframe(t, e, o) {
    $("iframe").map(function() {
        var l = null ;
        try {
            l = this.contentWindow
        } catch (i) {}
        if (l && l == t) {
            var r = o / e;
            this.setAttribute("width", "640"),
            this.setAttribute("height", Math.round(640 * r) + ""),
            this.parentNode && this.parentNode.classList.contains("iframe_helper") && (this.parentNode.style.paddingTop = 100 * r + "%"),
            window.quill && quill.updateSelection(Quill.sources.USER)
        }
    })
}
function initQuill() {
    function t(t, e) {
        return [t, function(t, o) {
            return o.compose((new Delta).retain(o.length(), e))
        }
        ]
    }
    var e = draftGet();
    e && $("#tl_editor").html(e);
    var o = new MyQuill("#tl_editor",{
        readOnly: !isEdit(),
        fileSizeLimit: 5242880,
        fileSizeLimitCallback: function() {
            showError("File too big (up to 5 MB allowed)")
        },
        updatePhoto: updatePhoto,
        formats: ["bold", "italic", "underline", "strike", "code", "link", "blockTitle", "blockAuthor", "blockHeader", "blockSubheader", "blockBlockquote", "blockPullquote", "blockDivider", "blockFigure", "code-block", "list"],
        modules: {
            clipboard: {
                matchers: [t("h2", {
                    blockHeader: !0
                }), t("h5", {
                    blockSubheader: !0
                }), t("h6", {
                    blockSubheader: !0
                }), ["img", function(t, e) {
                    return t.src && _sanitize(t.src, ["http", "https", "data"]) ? (new Delta).insert({
                        blockFigure: {
                            image: t.src,
                            caption: t.alt || ""
                        }
                    }) : new Delta
                }
                ], ["video", function(t, e) {
                    if (t.src && _sanitize(t.src, ["http", "https", "data"]))
                        return (new Delta).insert({
                            blockFigure: {
                                video: t.src
                            }
                        })
                }
                ]]
            },
            keyboard: {
                bindings: {
                    indent: {
                        handler: function() {
                            return !0
                        }
                    },
                    outdent: {
                        handler: function() {
                            return !0
                        }
                    },
                    tab: {
                        key: Keyboard.keys.TAB,
                        handler: function() {
                            return !0
                        }
                    },
                    "required tab prev": {
                        key: Keyboard.keys.TAB,
                        shiftKey: !0,
                        handler: function(t, e) {
                            var l = null ;
                            if (t.length > 0) {
                                var i = o.scroll.descendants(Block, t.index, t.length);
                                if (1 != i.length)
                                    return !0;
                                l = i[0]
                            } else {
                                var r = o.scroll.descendant(Block, t.index)
                                  , a = _slicedToArray(r, 1);
                                l = a[0]
                            }
                            if (null != l && null != l.prev && l.prev instanceof FieldBlot) {
                                var n = l.prev.offset(o.scroll)
                                  , s = l.prev.length();
                                return o.setSelection(n, s > 1 ? s : 0, Quill.sources.USER),
                                !1
                            }
                            return !0
                        }
                    },
                    "required tab next": {
                        key: Keyboard.keys.TAB,
                        shiftKey: !1,
                        handler: function(t, e) {
                            var l = null ;
                            if (t.length > 0) {
                                var i = o.scroll.descendants(Block, t.index, t.length);
                                if (1 != i.length)
                                    return !0;
                                l = i[0]
                            } else {
                                var r = o.scroll.descendant(Block, t.index)
                                  , a = _slicedToArray(r, 1);
                                l = a[0]
                            }
                            if (null != l && l instanceof FieldBlot && null != l.next) {
                                var n = l.next.offset(o.scroll);
                                if (l.next instanceof FieldBlot) {
                                    var s = l.next.length();
                                    o.setSelection(n, s > 1 ? s : 0, Quill.sources.USER)
                                } else
                                    o.setSelection(n, 0, Quill.sources.USER);
                                return !1
                            }
                            return !0
                        }
                    },
                    "no tab": {
                        key: Keyboard.keys.TAB,
                        shiftKey: null ,
                        handler: function(t, e) {
                            return !1
                        }
                    },
                    "headers enter": {
                        key: Keyboard.keys.ENTER,
                        collapsed: !0,
                        format: ["blockHeader", "blockSubheader", "blockBlockquote", "blockPullquote"],
                        suffix: /^$/,
                        handler: function(t, e) {
                            this.quill.scroll.insertAt(t.index, "\n"),
                            this.quill.formatText(t.index + 1, 1, {
                                blockHeader: !1,
                                blockSubheader: !1,
                                blockBlockquote: !1,
                                blockPullquote: !1
                            }, Quill.sources.USER),
                            this.quill.setSelection(t.index + 1, Quill.sources.SILENT),
                            this.quill.selection.scrollIntoView()
                        }
                    },
                    "detect embed": {
                        key: Keyboard.keys.ENTER,
                        collapsed: !0,
                        handler: function(t, e) {
                            var l = o.scroll.line(t.index)
                              , i = _slicedToArray(l, 2)
                              , r = i[0]
                              , a = i[1];
                            if (r) {
                                var n = r.domNode.innerText
                                  , s = n.substr(0, a)
                                  , u = void 0;
                                if (u = s.match(/(^|\s)(https?:\/\/\S+)$/)) {
                                    var c = u[2]
                                      , d = o.scroll.descendants(LinkBlot, t.index - c.length, c.length);
                                    if (d.length || o.formatText(t.index - c.length, c.length, "link", c, Quill.sources.USER),
                                    !s.substr(0, a - c.length).trim().length && "P" == r.domNode.tagName) {
                                        var p = getFigureValueByUrl(c);
                                        if (p) {
                                            var f = r.offset(o.scroll);
                                            return o.updateContents((new Delta).retain(f)["delete"](s.length).insert({
                                                blockFigure: p
                                            }), Quill.sources.USER),
                                            hideBlocksTooltip(),
                                            !1
                                        }
                                    }
                                }
                            }
                            return !0
                        }
                    },
                    "detect link": {
                        key: " ",
                        collapsed: !0,
                        handler: function(t, e) {
                            var l = o.scroll.line(t.index)
                              , i = _slicedToArray(l, 2)
                              , r = i[0]
                              , a = i[1];
                            if (r) {
                                var n = r.domNode.innerText
                                  , s = n.substr(0, a)
                                  , u = void 0;
                                if (u = s.match(/(^|\s)(https?:\/\/\S+)$/)) {
                                    var c = u[2]
                                      , d = o.scroll.descendants(LinkBlot, t.index - c.length, c.length);
                                    d.length || o.formatText(t.index - c.length, c.length, "link", c, Quill.sources.USER)
                                }
                            }
                            return !0
                        }
                    },
                    "cancel placeholder": {
                        key: Keyboard.keys.ESCAPE,
                        handler: function(t, e) {
                            return checkOncePlaceholder(),
                            this.quill.updateSelection(Quill.sources.USER),
                            !0
                        }
                    },
                    "list autofill": {
                        key: " ",
                        collapsed: !0,
                        format: {
                            list: !1
                        },
                        prefix: /^(1\.|-|\*)$/,
                        handler: function(t, e) {
                            var o = e.prefix.length;
                            this.quill.scroll.deleteAt(t.index - o, o),
                            this.quill.formatLine(t.index - o, 1, "list", 1 === o ? "bullet" : "ordered", Quill.sources.USER),
                            this.quill.setSelection(t.index - o, Quill.sources.SILENT)
                        }
                    },
                    "pre wrap": {
                        key: 192,
                        collapsed: !0,
                        format: {
                            "code-block": !1
                        },
                        prefix: /^``$/,
                        handler: function(t, e) {
                            var o = e.prefix.length;
                            this.quill.scroll.deleteAt(t.index - o, o),
                            this.quill.formatLine(t.index - o, 1, "code-block", !0, Quill.sources.USER),
                            this.quill.setSelection(t.index - o, Quill.sources.SILENT)
                        }
                    },
                    code: {
                        key: 192,
                        handler: function(t, e) {
                            return !(!e.collapsed || e.format.code || /\s$/.test(e.prefix)) || void this.quill.format("code", !e.format.code, Quill.sources.USER)
                        }
                    },
                    "divider autofill": {
                        key: Keyboard.keys.ENTER,
                        collapsed: !0,
                        prefix: /^([-*])\1\1$/,
                        handler: function(t, e) {
                            var l = o.scroll.line(t.index)
                              , i = _slicedToArray(l, 2)
                              , r = i[0];
                            i[1];
                            if (r && "P" == r.domNode.tagName) {
                                var a = r.offset(o.scroll);
                                return o.updateContents((new Delta).retain(a)["delete"](r.length()).insert({
                                    blockDivider: !0
                                }), Quill.sources.USER),
                                !1
                            }
                            return !0
                        }
                    },
                    "figure delete": {
                        key: Keyboard.keys.BACKSPACE,
                        collapsed: !0,
                        offset: 0,
                        handler: function(t, e) {
                            var l = o.scroll.line(t.index)
                              , i = _slicedToArray(l, 2)
                              , r = i[0];
                            i[1];
                            return !(r && r.prev && r.prev instanceof FigureBlot) || (e.empty && o.deleteText(t.index, 1, Quill.sources.USER),
                            o.setSelection(r.prev.offset(o.scroll)),
                            !1)
                        }
                    },
                    "field backspace": {
                        key: Keyboard.keys.BACKSPACE,
                        collapsed: !0,
                        offset: 0,
                        handler: function(t, e) {
                            var l = o.scroll.line(t.index)
                              , i = _slicedToArray(l, 2)
                              , r = i[0];
                            i[1];
                            return !(r && r.prev && r.prev instanceof FieldBlot && $(r.domNode).text().length > 0)
                        }
                    }
                }
            }
        }
    });
    return o.addContainer($tl_link_tooltip.get(0)),
    o.addContainer($tl_tooltip.get(0)),
    o.addContainer($tl_blocks.get(0)),
    o.on(Quill.events.EDITOR_CHANGE, function(t, e) {
        if (t === Quill.events.SELECTION_CHANGE && o.isEnabled() && null != e) {
            checkFigureBlots(e);
            var l = o.scroll.descendant(Block, e.index)
              , i = _slicedToArray(l, 2)
              , r = i[0];
            i[1];
            0 === e.length ? (hideFormatTooltip(),
            null == r || r instanceof FieldBlot || r instanceof BlockquoteBlot || r instanceof PullquoteBlot || r instanceof CodeBlock || r instanceof ListItem || $(r.domNode).text().length ? hideBlocksTooltip() : showBlocksTooltip(e)) : (null == r || r instanceof FieldBlot ? hideFormatTooltip() : (showFormatTooltip(e),
            toolbarUpdate(e)),
            hideBlocksTooltip());
            var a = o.getFormat(e);
            $tl_article.toggleClass("title_focused", !(!a.blockTitle && !a.blockAuthor)),
            checkOncePlaceholder()
        }
    }),
    o.on(Quill.events.TEXT_CHANGE, function() {
        o.getSelection();
        checkRequiredBlots(o),
        checkBlotPlaceholder(o),
        checkOncePlaceholder(),
        draftSave()
    }),
    $(document).on("click touchstart", function(t) {
        for (var e = t.target; e; ) {
            if (e === o.container)
                return;
            e = e.parentNode
        }
        hideFormatTooltip(),
        hideBlocksTooltip()
    }),
    checkRequiredBlots(o),
    checkBlotPlaceholder(o),
    o
}
function checkOncePlaceholder() {
    $(".placeholder_once").removeAttr("data-placeholder").removeClass("placeholder_once empty")
}
function checkBlotPlaceholder(t) {
    var e = t.scroll.descendants(Block, 0, t.scroll.length());
    e.forEach(function(t) {
        if (t.domNode.hasAttribute("data-placeholder")) {
            var e = $(t.domNode).text();
            $(t.domNode).toggleClass("empty", !e)
        }
    })
}
function checkRequiredBlots(t) {
    var e = t.scroll.lines()
      , o = _slicedToArray(e, 2)
      , l = o[0]
      , i = o[1];
    if (l instanceof BlockEmbed)
        t.updateContents((new Delta).insert("\n", {
            blockTitle: !0
        }).insert("\n", {
            blockAuthor: !0
        }), Quill.sources.SILENT);
    else if (l instanceof TitleBlot || t.formatLine(0, 1, {
        blockTitle: !0
    }, Quill.sources.SILENT),
    i) {
        if (i instanceof BlockEmbed) {
            var r = i.offset(t.scroll);
            t.updateContents((new Delta).retain(r).insert("\n", {
                blockAuthor: !0
            }), Quill.sources.SILENT)
        } else if (!(i instanceof AuthorBlot)) {
            var a = i.offset(t.scroll);
            t.formatLine(a, 1, {
                blockAuthor: !0
            }, Quill.sources.SILENT)
        }
    } else {
        var n = t.scroll.length();
        t.updateContents((new Delta).retain(n).insert("\n", {
            blockAuthor: !0
        }), Quill.sources.SILENT)
    }
    var s = t.scroll.lines()
      , u = _slicedToArray(s, 3)
      , c = u[2];
    if (c) {
        var d = c.offset(t.scroll)
          , p = t.scroll.length() - d
          , f = t.scroll.descendants(FieldBlot, d, p);
        f.forEach(function(e) {
            var o = e.offset(t.scroll)
              , l = e.length()
              , i = e.constructor.blotName;
            t.formatText(o, l, i, !1, Quill.sources.SILENT)
        })
    } else {
        var h = t.scroll.length();
        t.insertText(h, "\n", Quill.sources.SILENT)
    }
    var m = t.scroll.lines();
    m.forEach(function(t, e) {
        "P" == t.domNode.tagName && (3 == m.length && 2 == e ? t.domNode.setAttribute("data-placeholder", "Your story...") : t.domNode.removeAttribute("data-placeholder"))
    })
}
function checkFigureBlots(t) {
    var e = quill.scroll.descendant(FigureBlot, t.index)
      , o = _slicedToArray(e, 1)
      , l = o[0]
      , i = quill.scroll.descendants(FigureBlot, 0, quill.scroll.length());
    i.forEach(function(t) {
        l !== t && t.blur()
    }),
    l && (l.focus(),
    hideFormatTooltip(),
    hideBlocksTooltip())
}
function updatePhoto(t, e) {
    return "image/jpg" == t.type || "image/jpeg" == t.type ? loadImage(t, function(o) {
        if ("error" === o.type)
            e(t);
        else if (o.toBlob)
            o.toBlob(function(t) {
                e(t)
            }, t.type);
        else {
            var l = o.toDataURL(t.type)
              , i = {
                type: t.type,
                base64_data: l.split(",")[1]
            };
            e(uploadDataToBlob(i))
        }
    }, {
        canvas: !0,
        orientation: !0
    }) : void e(t)
}
function uploadDataToBlob(t) {
    for (var e = atob(t.base64_data), o = [], l = 0; l < e.length; l++)
        o.push(e.charCodeAt(l));
    return new Blob([new Uint8Array(o)],{
        type: t.type
    })
}
function _uploadFile(t, e, o, l) {
    var i = new FormData;
    i.append("file", uploadDataToBlob(t)),
    $.ajax({
        url: "/upload",
        type: "POST",
        data: i,
        cache: !1,
        dataType: "json",
        processData: !1,
        contentType: !1,
        xhr: function r() {
            var r = new XMLHttpRequest;
            return r.upload.addEventListener("progress", function(t) {
                t.lengthComputable && e && e(t.loaded, t.total)
            }),
            r
        },
        beforeSend: function(t) {
            e && e(0, 1)
        },
        success: function(t) {
            return t.error ? l && l(t.error) : void $.each(t, function(t, e) {
                o && o(e)
            })
        },
        error: function(t) {
            return l && l("Network error")
        }
    })
}
function getPageContent(t) {
    var e = $(quill.scroll.domNode);
    $("textarea,input", e).map(function() {
        this.setAttribute("data-value", this.value)
    });
    var o = e.clone();
    return $("textarea,input", e).map(function() {
        this.removeAttribute("data-value")
    }),
    $("textarea,input", o).map(function() {
        this.value = this.getAttribute("data-value"),
        this.removeAttribute("data-value")
    }),
    updateEditableText(o, !1),
    $("[contenteditable]", o).removeAttr("contenteditable"),
    $("[data-placeholder]", o).removeAttr("data-placeholder"),
    $("[data-label]", o).removeAttr("data-label"),
    $("[data-title]", o).removeAttr("data-title"),
    $(".editable_text", o).removeClass("editable_text"),
    $(".focus", o).removeClass("focus"),
    $(".empty", o).removeClass("empty"),
    $('[class=""]', o).removeAttr("class"),
    $(".file_progress", o).remove(),
    $(".cursor_wrapper", o).remove(),
    t || $("h1,address", o).remove(),
    o.html()
}
function showError(t) {
    $error_msg.text(t),
    clearTimeout($error_msg.to),
    $error_msg.addClass("shown"),
    $error_msg.to = setTimeout(function() {
        $error_msg.removeClass("shown")
    }, 3e3)
}
function savePage() {
    if ($tl_article.hasClass("tl_article_saving"))
        return !1;
    var t = $("h1", $tl_content).text()
      , e = $("address", $tl_content).text();
    if (t.length < 2) {
        clearTimeout($tl_article.to),
        $tl_article.addClass("title_required"),
        $tl_article.to = setTimeout(function() {
            $tl_article.removeClass("title_required")
        }, 3e3),
        quill.focus();
        var o = quill.scroll.descendants(TitleBlot, 0, quill.scroll.length())
          , l = _slicedToArray(o, 1)
          , i = l[0];
        return quill.setSelection(i.offset(), i.length() - 1),
        quill.selection.scrollIntoView(),
        showError("Title is too small")
    }
    var r = $('img[src^="data:"],video[src^="data:"]');
    if (r.length)
        return showError("Upload in progress.\nPlease wait...");
    var a = getPageContent();
    if (a.length > 65536)
        return showError("Content is too big");
    $tl_article.addClass("tl_article_saving"),
    updateEditable(!1);
    var n = "---------------------------TelegraPhBoundary21"
      , s = "--" + n + '\r\nContent-Disposition: form-data; name="Html";filename="content.html"\r\nContent-type: plain/text\r\n\r\n' + a + "\r\n--" + n + '\r\nContent-Disposition: form-data; name="title"\r\n\r\n' + t + "\r\n--" + n + '\r\nContent-Disposition: form-data; name="author"\r\n\r\n' + e + "\r\n--" + n + '\r\nContent-Disposition: form-data; name="page_id"\r\n\r\n' + T.pageId + "\r\n--" + n + "--";
    $.ajax(T.apiUrl + "/save", {
        contentType: "multipart/form-data; boundary=" + n,
        data: s,
        type: "POST",
        dataType: "json",
        xhrFields: {
            withCredentials: !0
        },
        success: function(t) {
            return t.error ? onError && onError(t.error) : (draftClear(),
            $tl_article.removeClass("tl_article_saving"),
            void (!T.pageId && t.path && (location.href = "/" + t.path)))
        },
        error: function(t) {
            return $tl_article.removeClass("tl_article_saving"),
            onError && onError("Network error")
        }
    })
}
function toolbarUpdate(t) {
    var e = null == t ? {} : quill.getFormat(t)
      , o = e.blockHeader || e.blockSubheader;
    if ($bold_button.toggleClass("active", !!e.bold),
    $bold_button.toggleClass("disabled", !!o),
    $italic_button.toggleClass("active", !!e.italic),
    $italic_button.toggleClass("disabled", !!o),
    $header_button.toggleClass("active", !!e.blockHeader),
    $subheader_button.toggleClass("active", !!e.blockSubheader),
    $quote_button.toggleClass("active", !(!e.blockBlockquote && !e.blockPullquote)),
    $quote_button.toggleClass("pullquote", !!e.blockPullquote),
    null != t) {
        var l = quill.scroll.descendants(LinkBlot, t.index, t.length);
        $link_button.toggleClass("active", !!l.length)
    } else
        $link_button.toggleClass("active", !1)
}
function storageSet(t, e) {
    try {
        return localStorage.setItem(t, e),
        !!localStorage.getItem(t)
    } catch (o) {
        return !1
    }
}
function storageGet(t) {
    try {
        return localStorage.getItem(t)
    } catch (e) {
        return !1
    }
}
function storageDelete(t) {
    try {
        return localStorage.removeItem(t),
        !0
    } catch (e) {
        return !1
    }
}
function draftClear() {
    storageDelete("draft")
}
function draftSave() {
    return !T.pageId && storageSet("draft", getPageContent(!0))
}
function draftGet() {
    return !T.pageId && storageGet("draft")
}
function isEdit() {
    return $tl_article.hasClass("tl_article_edit")
}
function updateEditableText(t, e) {
    "undefined" == typeof e && (e = isEdit()),
    e ? $(".editable_text:not(:has(.editable_input))", t).map(function() {
        var t = this.innerText
          , e = document.createElement("textarea");
        return e.classList.add("editable_input"),
        e.setAttribute("tabindex", "-1"),
        e.setAttribute("rows", "1"),
        e.value = t,
        t || this.classList.add("empty"),
        $(this).empty().append(e),
        autosize(e),
        e
    }) : $(".editable_text > .editable_input", t).map(function() {
        var t = this.value
          , e = this.parentNode;
        return $(e).empty().append(t),
        e
    })
}
function updateEditable(t) {
    $tl_article.toggleClass("tl_article_edit", t),
    updateEditableText(),
    window.quill && (quill.enable(t),
    t && quill.focus()),
    t || ($("h1", $tl_header).text($("h1", $tl_content).text()),
    $("address a", $tl_header).text($("address", $tl_content).text()),
    hideLinkTooltip(),
    hideFormatTooltip(),
    hideBlocksTooltip())
}
function showLinkTooltip(t, e) {
    if (isEdit()) {
        var o = {
            index: t.offset(quill.scroll),
            length: t.length()
        };
        $tl_link_tooltip.text(e),
        tooltipUpdatePosition($tl_link_tooltip, o, linkTTOptions),
        $tl_link_tooltip.hasClass("move_anim") || setTimeout(function() {
            $tl_link_tooltip.addClass("move_anim")
        }, 1),
        $tl_link_tooltip.hasClass("shown") || setTimeout(function() {
            $tl_link_tooltip.addClass("shown")
        }, 10)
    }
}
function hideLinkTooltip() {
    $tl_link_tooltip.removeClass("move_anim shown")
}
function showFormatTooltip(t) {
    isEdit() && ($tl_tooltip.removeClass("tooltip_prompt"),
    tooltipUpdatePosition($tl_tooltip, t, formatTTOptions),
    $tl_tooltip.hasClass("move_anim") || setTimeout(function() {
        $tl_tooltip.addClass("move_anim")
    }, 10),
    $tl_tooltip.hasClass("shown") ? tooltipUpdatePosition($tl_link_tooltip, null , linkTTOptions) : setTimeout(function() {
        $tl_tooltip.addClass("shown"),
        tooltipUpdatePosition($tl_link_tooltip, null , linkTTOptions)
    }, 10))
}
function hideFormatTooltip() {
    $tl_tooltip.removeClass("move_anim shown"),
    tooltipUpdatePosition($tl_link_tooltip, null , linkTTOptions)
}
function showBlocksTooltip(t) {
    isEdit() && ($tl_blocks.addClass("shown"),
    blocksUpdatePosition(t))
}
function hideBlocksTooltip() {
    $tl_blocks.removeClass("shown")
}
function isOverElement(t, e, o) {
    if (!e || !e.hasClass("shown"))
        return !1;
    t.bottom = t.top + t.height,
    t.right = t.left + t.width;
    var l = e
      , i = {
        top: l._top,
        bottom: l._top + e.outerHeight(),
        left: l._left,
        right: l._left + e.outerWidth()
    };
    return !(t.left - i.right >= o || i.left - t.right >= o || t.top - i.bottom >= o || i.top - t.bottom >= o) && i
}
function tooltipUpdatePosition(t, e, o) {
    if (o = o || {
        padding: 10,
        position: "top"
    },
    e = e || t._range || null ,
    null != e) {
        var l = quill.getBounds(e)
          , i = $(quill.container).offset()
          , r = {
            width: t.outerWidth(),
            height: t.outerHeight()
        }
          , a = {
            width: $(window).outerWidth(),
            height: $(window).outerHeight(),
            scrolltop: document.body.scrollTop
        }
          , n = {
            left: 9,
            top: a.scrolltop + 9
        }
          , s = {
            left: a.width - r.width - 9,
            top: a.scrolltop + a.height - r.height - 9
        };
        r.left = l.left + l.width / 2 - r.width / 2;
        var u = i.left + r.left;
        u < n.left ? r.left = n.left - i.left : u > s.left && (r.left = s.left - i.left);
        var c = void 0;
        if ("top" == o.position) {
            r.top = l.top - r.height - o.padding;
            var d = i.top + r.top;
            c = !1,
            d < n.top && (r.top = l.bottom + o.padding,
            c = !0)
        } else if ("bottom" == o.position) {
            var p = !1;
            r.top = l.bottom + o.padding,
            (p = isOverElement(r, o.depend, o.dependPadding)) && (r.top = p.bottom + o.dependPadding);
            var f = i.top + r.top;
            c = !0,
            f > s.top && (r.top = l.top - r.height - o.padding,
            (p = isOverElement(r, o.depend, o.dependPadding)) && (r.top = p.top - r.height - o.dependPadding),
            c = !1)
        }
        r.left = Math.round(r.left),
        r.top = Math.round(r.top),
        t._range = e,
        o.minDelta && Math.abs(r.left - t._left) < o.minDelta && Math.abs(r.top - t._top) < o.minDelta || (t._left = r.left,
        t._top = r.top,
        t.css({
            left: r.left,
            top: r.top
        }).toggleClass("bottom", c))
    }
}
function blocksUpdatePosition(t) {
    if ("undefined" == typeof t && (t = quill.getSelection()),
    null != t && window.quill) {
        var e = quill.getBounds(t);
        $tl_blocks.css({
            top: e.top + e.height / 2
        })
    }
}
function toolbarPrompt(t, e, o) {
    var l = $(".prompt_input", t)
      , i = $(".close", t);
    l.val("").attr("placeholder", e),
    l.on("keydown", function(e) {
        var i = e.which || e.keyCode;
        if (27 == i)
            toolbarPromptHide(t);
        else if (13 == i) {
            var r = l.val();
            r && (o && o(r),
            e.preventDefault()),
            toolbarPromptHide(t)
        }
    }),
    l.on("blur", function() {
        toolbarPromptHide(t)
    }),
    i.on("click", function() {
        toolbarPromptHide(t)
    }),
    t.show().addClass("tooltip_prompt"),
    l.focus()
}
function toolbarPromptHide(t) {
    var e = $(".prompt_input", t)
      , o = $(".close", t);
    e.off("keydown"),
    e.off("blur"),
    o.off("click"),
    t.show().removeClass("tooltip_prompt"),
    quill.focus()
}
var _slicedToArray = function() {
    function t(t, e) {
        var o = []
          , l = !0
          , i = !1
          , r = void 0;
        try {
            for (var a, n = t[Symbol.iterator](); !(l = (a = n.next()).done) && (o.push(a.value),
            !e || o.length !== e); l = !0)
                ;
        } catch (s) {
            i = !0,
            r = s
        } finally {
            try {
                !l && n["return"] && n["return"]()
            } finally {
                if (i)
                    throw r
            }
        }
        return o
    }
    return function(e, o) {
        if (Array.isArray(e))
            return e;
        if (Symbol.iterator in Object(e))
            return t(e, o);
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}()
  , _createClass = function() {
    function t(t, e) {
        for (var o = 0; o < e.length; o++) {
            var l = e[o];
            l.enumerable = l.enumerable || !1,
            l.configurable = !0,
            "value"in l && (l.writable = !0),
            Object.defineProperty(t, l.key, l)
        }
    }
    return function(e, o, l) {
        return o && t(e.prototype, o),
        l && t(e, l),
        e
    }
}()
  , _get = function t(e, o, l) {
    null === e && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, o);
    if (void 0 === i) {
        var r = Object.getPrototypeOf(e);
        return null === r ? void 0 : t(r, o, l)
    }
    if ("value"in i)
        return i.value;
    var a = i.get;
    if (void 0 !== a)
        return a.call(l)
}
  , ua = navigator.userAgent.toLowerCase()
  , browser = {
    opera: /opera/i.test(ua) || /opr/i.test(ua),
    msie: /msie/i.test(ua) && !/opera/i.test(ua) || /trident\//i.test(ua) || /edge/i.test(ua),
    msie_edge: /edge/i.test(ua) && !/opera/i.test(ua),
    mozilla: /firefox/i.test(ua),
    chrome: /chrome/i.test(ua) && !/edge/i.test(ua),
    safari: !/chrome/i.test(ua) && /webkit|safari|khtml/i.test(ua),
    iphone: /iphone/i.test(ua),
    ipod: /ipod/i.test(ua),
    ipad: /ipad/i.test(ua),
    android: /android/i.test(ua),
    mobile: /iphone|ipod|ipad|opera mini|opera mobi|iemobile|android/i.test(ua),
    safari_mobile: /iphone|ipod|ipad/i.test(ua),
    opera_mobile: /opera mini|opera mobi/i.test(ua),
    opera_mini: /opera mini/i.test(ua),
    mac: /mac/i.test(ua)
}
  , Inline = Quill["import"]("blots/inline")
  , Block = Quill["import"]("blots/block")
  , BlockEmbed = Quill["import"]("blots/block/embed")
  , Embed = Quill["import"]("blots/embed")
  , TextBlot = Quill["import"]("blots/text")
  , CodeBlock = Quill["import"]("formats/code-block")
  , ListItem = Quill["import"]("formats/list/item")
  , Parchment = Quill["import"]("parchment")
  , Delta = Quill["import"]("delta")
  , Keyboard = Quill["import"]("modules/keyboard")
  , LinkBlot = function(t) {
    function e(t, o) {
        _classCallCheck(this, e);
        var l = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        return $(t).on("mouseover", function() {
            showLinkTooltip(l, o)
        }),
        $(t).on("mouseout", function() {
            hideLinkTooltip()
        }),
        l
    }
    return _inherits(e, t),
    _createClass(e, null , [{
        key: "create",
        value: function(t) {
            var o = _get(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
            return t = this.sanitize(t),
            o.setAttribute("href", t),
            o.setAttribute("target", "_blank"),
            o
        }
    }, {
        key: "formats",
        value: function(t) {
            return t.getAttribute("href")
        }
    }, {
        key: "sanitize",
        value: function(t) {
            return _sanitize(t, ["http", "https", "mailto"]) ? relativeUrl(t) : "about:blank"
        }
    }]),
    _createClass(e, [{
        key: "detach",
        value: function() {
            $(this.domNode).off("mouseover mouseout"),
            _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "detach", this).call(this),
            hideLinkTooltip()
        }
    }, {
        key: "format",
        value: function(t, o) {
            return t === this.statics.blotName && o ? (o = this.constructor.sanitize(o),
            this.domNode.setAttribute("href", o),
            void this.domNode.setAttribute("data-title", o)) : _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "format", this).call(this, t, o)
        }
    }]),
    e
}(Inline);
LinkBlot.blotName = "link",
LinkBlot.tagName = "a",
Quill.register(LinkBlot);
var FieldBlot = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    _createClass(e, [{
        key: "formatAt",
        value: function(t, o, l, i) {
            l === this.constructor.blotName && _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, o, l, i)
        }
    }]),
    e
}(Block)
  , TitleBlot = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    _createClass(e, null , [{
        key: "create",
        value: function(t) {
            var o = _get(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
            return o.setAttribute("data-placeholder", "Title"),
            o.setAttribute("data-label", "Title"),
            o
        }
    }]),
    e
}(FieldBlot);
TitleBlot.blotName = "blockTitle",
TitleBlot.tagName = "h1",
Quill.register(TitleBlot);
var AuthorBlot = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    _createClass(e, null , [{
        key: "create",
        value: function(t) {
            var o = _get(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
            return o.setAttribute("data-placeholder", "Your name"),
            o.setAttribute("data-label", "Author"),
            o
        }
    }]),
    e
}(FieldBlot);
AuthorBlot.blotName = "blockAuthor",
AuthorBlot.tagName = "address",
Quill.register(AuthorBlot);
var HeaderBlot = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    _createClass(e, [{
        key: "formatAt",
        value: function(t, o, l, i) {
            ("bold" !== l && "italic" !== l && "code" !== l || !i) && _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatAt", this).call(this, t, o, l, i)
        }
    }]),
    e
}(Block);
HeaderBlot.blotName = "blockHeader",
HeaderBlot.tagName = "h3",
Quill.register(HeaderBlot);
var SubheaderBlot = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    e
}(HeaderBlot);
SubheaderBlot.blotName = "blockSubheader",
SubheaderBlot.tagName = "h4",
Quill.register(SubheaderBlot);
var BlockquoteBlot = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    e
}(Block);
BlockquoteBlot.blotName = "blockBlockquote",
BlockquoteBlot.tagName = "blockquote",
Quill.register(BlockquoteBlot);
var PullquoteBlot = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    e
}(Block);
PullquoteBlot.blotName = "blockPullquote",
PullquoteBlot.tagName = "aside",
Quill.register(PullquoteBlot);
var DividerBlot = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    e
}(BlockEmbed);
DividerBlot.blotName = "blockDivider",
DividerBlot.tagName = "hr",
Quill.register(DividerBlot);
var FigureBlot = function(t) {
    function e(t, o) {
        _classCallCheck(this, e);
        var l = _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));
        l.domWrapper = document.createElement("div"),
        l.domCursor = document.createElement("span"),
        l.domCaption = document.createElement("figcaption"),
        l.domWrapper.classList.add("figure_wrapper"),
        l.domCursor.classList.add("cursor_wrapper"),
        l.domCursor.setAttribute("contenteditable", "true"),
        l.domCaption.classList.add("editable_text"),
        l.domCaption.setAttribute("data-placeholder", "Caption (optional)"),
        o.caption && (l.domCaption.innerText = o.caption),
        l.domNode.appendChild(l.domWrapper),
        l.domNode.appendChild(l.domCursor),
        l.domNode.appendChild(l.domCaption),
        setTimeout(function() {
            updateEditableText(l.domNode)
        }, 1);
        var i = !1;
        return o.image ? (l.appendImgNode(o.image),
        i = l.uploadData(o.image)) : o.video ? (l.appendVideoNode(o.video),
        i = l.uploadData(o.video)) : o.embed && l.appendIframeNode(o.embed),
        i && (l.domProgress = document.createElement("div"),
        l.domProgressBar = document.createElement("div"),
        l.domProgress.classList.add("file_progress"),
        l.domProgressBar.classList.add("file_progress_bar"),
        l.domWrapper.classList.add("loading"),
        l.domProgress.appendChild(l.domProgressBar),
        l.domWrapper.appendChild(l.domProgress),
        l.uploadFile(i)),
        $(l.domWrapper).click(function() {
            if (!l.domNode.classList.contains("focus")) {
                var t = l.offset(quill.scroll);
                quill.focus(),
                quill.setSelection(t, 0, Quill.sources.USER)
            }
        }),
        $(l.domCursor).keydown(function(t) {
            var e = t.which || t.keyCode;
            if (e == Keyboard.keys.BACKSPACE) {
                var o = l.offset(quill.scroll);
                quill.deleteText(o, l.length(), Quill.sources.USER),
                quill.setSelection(o - 1, 0, Quill.sources.USER),
                t.preventDefault()
            } else if (e == Keyboard.keys.ENTER) {
                var i = l.offset(quill.scroll) + l.length();
                quill.focus(),
                quill.insertText(i, "\n", Quill.sources.USER),
                quill.setSelection(i, 0, Quill.sources.USER),
                t.preventDefault()
            }
        }),
        $(l.domCursor).on("paste", function(t) {
            t.stopPropagation(),
            t.preventDefault()
        }),
        $(l.domCaption).keydown(function(t) {
            var e = t.which || t.keyCode
              , o = $(t.target);
            if (e == Keyboard.keys.ENTER) {
                var i = o.selection("getPos")
                  , r = o.val();
                if (i.start != i.end)
                    r = r.substr(0, i.start) + r.substr(i.end),
                    o.val(r).selection("setPos", {
                        start: r.length,
                        end: r.length
                    });
                else if (i.end == r.length) {
                    var a = l.offset(quill.scroll) + l.length();
                    quill.focus(),
                    quill.insertText(a, "\n", Quill.sources.USER),
                    quill.setSelection(a, 0, Quill.sources.USER)
                }
                t.preventDefault()
            } else if (e == Keyboard.keys.DOWN || e == Keyboard.keys.TAB || e == Keyboard.keys.RIGHT) {
                var n = o.selection("getPos")
                  , s = o.val();
                if (n.start == n.end && n.end == s.length) {
                    var u = l.offset(quill.scroll) + l.length();
                    quill.focus(),
                    quill.setSelection(u, 0, Quill.sources.USER),
                    t.preventDefault()
                }
            } else if (e == Keyboard.keys.LEFT || e == Keyboard.keys.UP) {
                var c = o.selection("getPos");
                if (c.start == c.end && 0 === c.start) {
                    var d = l.offset(quill.scroll) - 1;
                    quill.focus(),
                    quill.setSelection(d, 0, Quill.sources.USER),
                    t.preventDefault()
                }
            }
        }),
        $(l.domCaption).on("paste", function(t) {
            t.stopPropagation()
        }),
        $(l.domCaption).on("keyup drop change input textInput paste cut", function(t) {
            $(l.domCaption).toggleClass("empty", !t.target.value),
            autosize.update(t.target),
            draftSave()
        }),
        $(l.domCaption).click(function(t) {
            t.target.focus()
        }),
        l
    }
    return _inherits(e, t),
    _createClass(e, null , [{
        key: "create",
        value: function(t) {
            var o = _get(e.__proto__ || Object.getPrototypeOf(e), "create", this).call(this, t);
            return o.setAttribute("contenteditable", "false"),
            o
        }
    }]),
    _createClass(e, [{
        key: "appendImgNode",
        value: function(t) {
            var e = document.createElement("img");
            return e.setAttribute("src", this.sanitize(t)),
            this.domWrapper.appendChild(e),
            e
        }
    }, {
        key: "appendVideoNode",
        value: function(t) {
            var e = document.createElement("video");
            return e.setAttribute("src", this.sanitize(t)),
            e.setAttribute("preload", "auto"),
            e.setAttribute("autoplay", "autoplay"),
            e.setAttribute("loop", "loop"),
            e.setAttribute("muted", "muted"),
            this.domWrapper.appendChild(e),
            e
        }
    }, {
        key: "appendIframeNode",
        value: function(t) {
            var e = document.createElement("div")
              , o = document.createElement("div")
              , l = document.createElement("iframe");
            return e.classList.add("iframe_wrap"),
            e.appendChild(o),
            o.classList.add("iframe_helper"),
            o.style.paddingTop = "56.25%",
            o.appendChild(l),
            l.setAttribute("src", this.sanitize(t)),
            l.setAttribute("width", "640"),
            l.setAttribute("height", "360"),
            l.setAttribute("frameborder", "0"),
            l.setAttribute("allowtransparency", "true"),
            l.setAttribute("allowfullscreen", "true"),
            l.setAttribute("scrolling", "no"),
            this.domWrapper.appendChild(e),
            e
        }
    }, {
        key: "uploadFile",
        value: function(t) {
            var e = this;
            _uploadFile(t, function(t, o) {
                var l = 0;
                o && t && (l = 100 * t / o,
                l = Math.min(100, l)),
                e.domProgressBar.style.width = l + "%"
            }, function(o) {
                if (o) {
                    var l = e.sanitize(o.src);
                    if ("video/" == t.type.substr(0, 6)) {
                        var i = e.domWrapper.querySelector("video");
                        i.setAttribute("src", l)
                    } else {
                        var r = e.domWrapper.querySelector("img");
                        r.setAttribute("src", l)
                    }
                    e.domWrapper.classList.remove("loading"),
                    draftSave()
                }
            }, function(t) {
                return quill.deleteText(e.offset(quill.scroll), e.length(), Quill.sources.SILENT),
                showError(t)
            })
        }
    }, {
        key: "uploadData",
        value: function(t) {
            var e = null ;
            return !!(e = t.match(/^data:(image\/gif|image\/jpe?g|image\/png|video\/mp4);base64,(.*)$/)) && {
                type: e[1],
                base64_data: e[2]
            }
        }
    }, {
        key: "sanitize",
        value: function(t) {
            return _sanitize(t, ["http", "https", "data"]) ? t : "//:0"
        }
    }, {
        key: "focus",
        value: function() {
            this.domNode.classList.add("focus")
        }
    }, {
        key: "blur",
        value: function() {
            this.domNode.classList.remove("focus")
        }
    }, {
        key: "_index",
        value: function(t, e) {
            if (t === this.domCaption)
                return 0;
            var o = 0;
            return t.nodeType == t.TEXT_NODE && (o += e >= 0 ? e : t.data.length),
            t.previousSibling ? o + this._index(t.previousSibling, -1) : t.parentNode ? o + this._index(t.parentNode, -1) : 0
        }
    }, {
        key: "_position",
        value: function(t, e) {
            if (t.nodeType == t.TEXT_NODE)
                return e <= t.data.length ? [t, e] : (e -= t.data.length,
                [null , e]);
            for (var o = t.firstChild; o; ) {
                var l = null
                  , i = this._position(o, e)
                  , r = _slicedToArray(i, 2);
                if (l = r[0],
                e = r[1],
                l)
                    return [l, e];
                o = o.nextSibling
            }
            return [t, e]
        }
    }, {
        key: "update",
        value: function(t) {
            this.domCursor.innerHTML = ""
        }
    }, {
        key: "index",
        value: function(t, e) {
            return 0
        }
    }, {
        key: "position",
        value: function(t, e) {
            return [this.domCursor, 0]
        }
    }], [{
        key: "value",
        value: function o(t) {
            var o = {
                caption: ""
            }
              , e = t.querySelector("img");
            e && (o.image = e.src);
            var l = t.querySelector("video");
            l && (o.video = l.src);
            var i = t.querySelector("iframe");
            i && (o.embed = i.src);
            var r = t.querySelector("figcaption");
            if (r) {
                var a = r.querySelector(".editable_input");
                a ? o.caption = a.value : o.caption = r.innerText
            }
            return o
        }
    }]),
    e
}(BlockEmbed);
FigureBlot.blotName = "blockFigure",
FigureBlot.tagName = "figure",
Quill.register(FigureBlot);
var MyQuill = function(t) {
    function e() {
        return _classCallCheck(this, e),
        _possibleConstructorReturn(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
    }
    return _inherits(e, t),
    _createClass(e, [{
        key: "formatLine",
        value: function() {
            for (var t, o = arguments.length, l = Array(o), i = 0; i < o; i++)
                l[i] = arguments[i];
            (t = _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatLine", this)).call.apply(t, [this].concat(l)),
            this.updateSelection()
        }
    }, {
        key: "formatText",
        value: function() {
            for (var t, o = arguments.length, l = Array(o), i = 0; i < o; i++)
                l[i] = arguments[i];
            (t = _get(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "formatText", this)).call.apply(t, [this].concat(l)),
            this.updateSelection()
        }
    }, {
        key: "updateSelection",
        value: function(t) {
            if (this.hasFocus()) {
                t = t || this.constructor.sources.SILENT;
                var e = this.getSelection(!0);
                this.setSelection(++e.index, e.length, t),
                this.setSelection(--e.index, e.length, t)
            }
        }
    }]),
    e
}(Quill)
  , $tl_page = $(".tl_page")
  , $tl_article = $(".tl_article")
  , $tl_header = $(".tl_article_header")
  , $tl_content = $(".tl_article_content")
  , $tl_tooltip = $("#tl_tooltip")
  , $tl_blocks = $("#tl_blocks")
  , $tl_link_tooltip = $("#tl_link_tooltip")
  , $bold_button = $("#bold_button")
  , $italic_button = $("#italic_button")
  , $link_button = $("#link_button")
  , $header_button = $("#header_button")
  , $subheader_button = $("#subheader_button")
  , $quote_button = $("#quote_button")
  , $image_button = $("#image_button")
  , $embed_button = $("#embed_button")
  , $edit_button = $("#edit_button")
  , $publish_button = $("#publish_button")
  , $error_msg = $("#error_msg")
  , formatTTOptions = {
    padding: 10,
    position: browser.mobile ? "bottom" : "top",
    minDelta: 5
}
  , linkTTOptions = {
    padding: 7,
    position: "bottom",
    depend: $tl_tooltip,
    dependPadding: 10
};
$tl_tooltip.mouseover(function(t) {
    var e = t.target;
    "BUTTON" != t.target.tagName || t.target.classList.contains("disabled") || ($tl_tooltip.attr("data-hover", e.id).addClass("hover"),
    setTimeout(function() {
        $tl_tooltip.addClass("hover_anim")
    }, 1),
    clearTimeout($tl_tooltip.to))
}),
$tl_tooltip.mouseout(function(t) {
    var e = t.target;
    "BUTTON" == e.tagName && ($tl_tooltip.removeClass("hover"),
    $tl_tooltip.to = setTimeout(function() {
        $tl_tooltip.removeClass("hover_anim")
    }, 70))
}),
$bold_button.click(function(t) {
    var e = t.target
      , o = e.classList.contains("active");
    t.preventDefault();
    quill.getSelection(!0);
    quill.format("bold", !o),
    quill.updateSelection(Quill.sources.API)
}),
$italic_button.click(function(t) {
    var e = t.target
      , o = e.classList.contains("active");
    t.preventDefault();
    quill.getSelection(!0);
    quill.format("italic", !o),
    quill.updateSelection(Quill.sources.API)
}),
$link_button.click(function(t) {
    var e = t.target
      , o = e.classList.contains("active");
    t.preventDefault();
    var l = quill.getSelection(!0);
    if (o) {
        var i = quill.scroll.descendants(LinkBlot, l.index, l.length);
        i.forEach(function(t) {
            var e = t.offset(quill.scroll)
              , o = t.length();
            quill.formatText(e, o, "link", !1)
        }),
        toolbarUpdate(l)
    } else
        toolbarPrompt($tl_tooltip, "Paste or type a link...", function(t) {
            t = t.trim(),
            "#" != t.substr(0, 1) && "/" != t.substr(0, 1) && "http://" != t.substr(0, 7) && "https://" != t.substr(0, 8) && (t = "http://" + t),
            quill.focus(),
            quill.format("link", t),
            toolbarUpdate(l)
        })
}),
$header_button.click(function(t) {
    var e = t.target
      , o = e.classList.contains("active");
    t.preventDefault();
    var l = quill.getSelection(!0);
    quill.format("blockHeader", !o);
    var i = quill.scroll.descendants(HeaderBlot, l.index, l.length);
    i.forEach(function(t) {
        var e = t.offset(quill.scroll)
          , o = t.length();
        quill.formatText(e, o, {
            bold: !1,
            italic: !1,
            code: !1
        }, Quill.sources.SILENT)
    }),
    quill.updateSelection(Quill.sources.API)
}),
$subheader_button.click(function(t) {
    var e = t.target
      , o = e.classList.contains("active");
    t.preventDefault();
    var l = quill.getSelection(!0);
    quill.format("blockSubheader", !o);
    var i = quill.scroll.descendants(SubheaderBlot, l.index, l.length);
    i.forEach(function(t) {
        var e = t.offset(quill.scroll)
          , o = t.length();
        quill.formatText(e, o, {
            bold: !1,
            italic: !1,
            code: !1
        }, Quill.sources.SILENT)
    }),
    quill.updateSelection(Quill.sources.API)
}),
$quote_button.click(function(t) {
    var e = t.target
      , o = e.classList.contains("active")
      , l = e.classList.contains("pullquote");
    t.preventDefault();
    quill.getSelection(!0);
    o ? quill.format("blockPullquote", !l) : quill.format("blockBlockquote", !0),
    quill.updateSelection(Quill.sources.API)
}),
$image_button.click(function() {
    var t = quill.container.querySelector("input.ql-image[type=file][data-status=ready]");
    null == t && (t = document.createElement("input"),
    t.setAttribute("type", "file"),
    t.setAttribute("accept", browser.safari_mobile ? "image/gif, image/jpeg, image/jpg, image/png" : "image/gif, image/jpeg, image/jpg, image/png, video/mp4"),
    t.classList.add("ql-image"),
    t.addEventListener("change", function() {
        if (null != t.files && null != t.files[0]) {
            var e = t.files[0];
            updatePhoto(e, function(e) {
                if (quill.fileSizeLimit && e.size > quill.fileSizeLimit)
                    return quill.fileSizeLimitCallback && quill.fileSizeLimitCallback();
                var o = new FileReader;
                o.onload = function(e) {
                    var o = getFigureValueByUrl(e.target.result);
                    if (o) {
                        var l = quill.getSelection(!0);
                        quill.updateContents((new Delta).retain(l.index)["delete"](l.length).insert({
                            blockFigure: o
                        }), Quill.sources.USER)
                    } else
                        showError("Invalid file format");
                    t.value = "",
                    t.setAttribute("data-status", "ready")
                }
                ,
                o.readAsDataURL(e)
            })
        }
    }),
    quill.container.appendChild(t)),
    t.setAttribute("data-status", "busy"),
    t.click()
}),
$embed_button.click(function(t) {
    var e = quill.getSelection(!0)
      , o = quill.scroll.line(e.index)
      , l = _slicedToArray(o, 1)
      , i = l[0];
    if (i) {
        var r = $(i.domNode).text();
        r || (i.domNode.setAttribute("data-placeholder", "Paste a YouTube, Vimeo or Twitter link, and press Enter"),
        $(i.domNode).addClass("placeholder_once empty"),
        hideBlocksTooltip())
    }
}),
$publish_button.click(function() {
    savePage()
}),
$edit_button.click(function() {
    updateEditable(!0)
}),
$(window).on("scroll resize", function() {
    tooltipUpdatePosition($tl_tooltip, null , formatTTOptions),
    tooltipUpdatePosition($tl_link_tooltip, null , linkTTOptions)
}),
(new Image).src = window.devicePixelRatio >= 2 ? "/images/icons_2x.png?1" : "/images/icons.png?1";
var quill = initQuill();
updateEditable(isEdit()),
browser.mobile && $(document.body).addClass("mobile"),
T.pageId && $.ajax(T.apiUrl + "/check", {
    data: {
        page_id: T.pageId
    },
    type: "POST",
    dataType: "json",
    xhrFields: {
        withCredentials: !0
    },
    success: function(t) {
        t.can_edit && $tl_article.addClass("tl_article_editable")
    }
});
