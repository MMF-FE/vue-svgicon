"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("vue"),t=require("@yzfe/svgicon"),n=e.defineComponent({props:t.getPropKeys(),render:function(){var n=t.svgIcon(this.$props);return e.h("svg",{viewBox:n.box,style:n.style,class:n.className,innerHTML:n.path})}}),r={install:function(e,t){e.component(t.tagName,n)}};Object.defineProperty(exports,"setOptions",{enumerable:!0,get:function(){return t.setOptions}}),exports.VueSvgIcon=n,exports.VueSvgIconPlugin=r;
//# sourceMappingURL=index.js.map
