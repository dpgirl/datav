(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.datav = factory(global.vue));
})(this, (function (vue) { 'use strict';

  var script$4 = {
    name: "CustomSvg",
  };

  const _hoisted_1$3 = /*#__PURE__*/vue.createStaticVNode("<svg width=\"0\" height=\"0\"><defs><symbol id=\"more\" viewBox=\"0 0 100 100\"><circle r=\"5\" cx=\"20\" cy=\"25\" fill=\"currentColor\"></circle><circle r=\"5\" cx=\"20\" cy=\"50\" fill=\"currentColor\"></circle><circle r=\"5\" cx=\"20\" cy=\"75\" fill=\"currentColor\"></circle><line x1=\"40\" y1=\"25\" x2=\"90\" y2=\"25\" stroke-width=\"8\" stroke=\"currentColor\"></line><line x1=\"40\" y1=\"50\" x2=\"90\" y2=\"50\" stroke-width=\"8\" stroke=\"currentColor\"></line><line x1=\"40\" y1=\"75\" x2=\"90\" y2=\"75\" stroke-width=\"8\" stroke=\"currentColor\"></line></symbol><symbol id=\"arrow\" viewBox=\"0 0 100 100\"><polyline points=\"30 20, 70 50, 30 80\" fill=\"transparent\" stroke=\"currentColor\" stroke-width=\"3\"></polyline></symbol></defs></svg>", 1);

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      vue.createCommentVNode(" 缩放比例：200/100 viewBox可视区域 svg里面的标签是相对于viewBox绘图的 "),
      vue.createCommentVNode(" <svg width=\"200px\" height=\"200px\" viewBox=\"0 0 100 100\">\n    <line\n      x1=\"0\"\n      y1=\"50\"\n      x2=\"100\"\n      y2=\"50\"\n      stroke-width=\"8\"\n      stroke=\"currentColor\"\n    ></line>\n    <line\n      x1=\"50\"\n      y1=\"0\"\n      x2=\"50\"\n      y2=\"100\"\n      stroke-width=\"8\"\n      stroke=\"currentColor\"\n    ></line>\n  </svg> "),
      _hoisted_1$3
    ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
  }

  script$4.render = render;
  script$4.__file = "src/components/CustomSvg/Svg.vue";

  function CustomSvg (Vue) {
    Vue.component(script$4.name, script$4);
  }

  const _hoisted_1$2 = { class: "icon-svg" };
  const _hoisted_2$2 = ["href"];


  var script$3 = /*#__PURE__*/Object.assign({ name: "Icon" }, {
    __name: 'Icon',
    props: {
    name: String,
    style: Object,
    prefix: {
      type: String,
      default: "icon",
    },
  },
    setup(__props) {


  const props = __props;
  const iconName = props.prefix
    ? `#${props.prefix}-${props.name}`
    : `#${props.name}`;

  return (_ctx, _cache) => {
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: "icon-wrapper",
      style: vue.normalizeStyle({ ...__props.style })
    }, [
      (vue.openBlock(), vue.createElementBlock("svg", _hoisted_1$2, [
        vue.createElementVNode("use", { href: vue.unref(iconName) }, null, 8 /* PROPS */, _hoisted_2$2)
      ]))
    ], 4 /* STYLE */))
  }
  }

  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$3 = ".icon-wrapper[data-v-38d2d0ef] {\n  display: inline-block;\n}\n\n.icon-svg[data-v-38d2d0ef] {\n  width: 100%;\n  height: 100%;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}";
  styleInject(css_248z$3);

  script$3.__scopeId = "data-v-38d2d0ef";
  script$3.__file = "src/components/Icon/Icon.vue";

  function Icon (Vue) {
    Vue.component(script$3.name, script$3);
  }

  const _hoisted_1$1 = { class: "loading-wrapper" };
  const _hoisted_2$1 = ["width", "height"];
  const _hoisted_3$1 = ["stroke"];
  const _hoisted_4$1 = ["dur"];
  const _hoisted_5$1 = ["values", "dur"];
  const _hoisted_6$1 = ["stroke"];
  const _hoisted_7$1 = ["dur"];
  const _hoisted_8$1 = ["values", "dur"];
  const _hoisted_9$1 = { class: "loading-tip" };

  var script$2 = /*#__PURE__*/Object.assign({ name: "Loading" }, {
    __name: 'Loading',
    props: {
    width: {
      type: String,
      default: "50",
    },
    height: {
      type: String,
      default: "50",
    },
    outSideColor: {
      type: String,
      default: "#3be6cb",
    },
    inSideColor: {
      type: String,
      default: "#02bcfe",
    },
    duration: {
      type: Number,
      default: 2,
    },
  },
    setup(__props) {


  const props = __props;
  const outGradientColor = vue.computed(
    () => `${props.outSideColor};${props.inSideColor};${props.outSideColor}`
  );
  const inGradientColor = vue.computed(
    () => `${props.inSideColor};${props.outSideColor};${props.inSideColor}`
  );

  return (_ctx, _cache) => {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
      (vue.openBlock(), vue.createElementBlock("svg", {
        width: __props.width,
        height: __props.height,
        viewBox: "0 0 50 50",
        preserveAspectRatio: "xMidYMid meet"
      }, [
        vue.createCommentVNode(" stroke-dasharray=2PI*R = 2*3.1415*22/4=34 分成4截，2截画出来，2截是空白的 "),
        vue.createCommentVNode(" stroke-linecap=\"round\" 让圆的边缘是圆形 "),
        vue.createElementVNode("circle", {
          cx: "25",
          cy: "25",
          r: "22",
          fill: "transparent",
          "stroke-width": "3",
          stroke: __props.outSideColor,
          "stroke-dasharray": "34",
          "stroke-linecap": "round"
        }, [
          vue.createCommentVNode(" from、to可以用values代替; 0 25 25是表示绕圆半径(25)旋转, 0是旋转角度"),
          vue.createElementVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            from: "0 25 25",
            to: "360 25 25",
            dur: `${__props.duration}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, _hoisted_4$1),
          vue.createCommentVNode(" 边框颜色渐变 "),
          vue.createElementVNode("animate", {
            attributeName: "stroke",
            values: outGradientColor.value,
            dur: `${__props.duration * 2}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, _hoisted_5$1)
        ], 8 /* PROPS */, _hoisted_3$1),
        vue.createElementVNode("circle", {
          cx: "25",
          cy: "25",
          r: "12",
          fill: "transparent",
          "stroke-width": "3",
          stroke: __props.inSideColor,
          "stroke-dasharray": "18",
          "stroke-linecap": "round"
        }, [
          vue.createElementVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "360 25 25; 0 25 25",
            dur: `${__props.duration}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, _hoisted_7$1),
          vue.createElementVNode("animate", {
            attributeName: "stroke",
            values: inGradientColor.value,
            dur: `${__props.duration * 2}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, _hoisted_8$1)
        ], 8 /* PROPS */, _hoisted_6$1)
      ], 8 /* PROPS */, _hoisted_2$1)),
      vue.createElementVNode("div", _hoisted_9$1, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ]))
  }
  }

  });

  var css_248z$2 = ".loading-wrapper[data-v-416d18c9] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.loading-wrapper[data-v-416d18c9] .loading-tip[data-v-416d18c9] {\n  font-size: 15px;\n}";
  styleInject(css_248z$2);

  script$2.__scopeId = "data-v-416d18c9";
  script$2.__file = "src/components/Loading/Loading.vue";

  function Loading (Vue) {
    Vue.component(script$2.name, script$2);
  }

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  var byteToHex = [];
  for (var i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
  }
  function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    //
    // Note to future-self: No, you can't remove the `toLowerCase()` call.
    // REF: https://github.com/uuidjs/uuid/pull/677#issuecomment-1757351351
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  }

  // Unique ID creation requires a high quality random # generator. In the browser we therefore
  // require the crypto API and do not support built-in fallback to lower quality random number
  // generators (like Math.random()).

  var getRandomValues;
  var rnds8 = new Uint8Array(16);
  function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
      // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
      getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
      if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
      }
    }
    return getRandomValues(rnds8);
  }

  var randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
  var native = {
    randomUUID
  };

  function v4(options, buf, offset) {
    if (native.randomUUID && !buf && !options) {
      return native.randomUUID();
    }
    options = options || {};
    var rnds = options.random || (options.rng || rng)();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80;
    return unsafeStringify(rnds);
  }

  const _withScopeId = n => (vue.pushScopeId("data-v-513cc2e2"),n=n(),vue.popScopeId(),n);
  const _hoisted_1 = ["width", "height"];
  const _hoisted_2 = ["d"];
  const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("stop", {
    offset: "0%",
    "stop-color": "#fff",
    "stop-opacity": "1"
  }, null, -1 /* HOISTED */));
  const _hoisted_4 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("stop", {
    offset: "100%",
    "stop-color": "#fff",
    "stop-opacity": "0"
  }, null, -1 /* HOISTED */));
  const _hoisted_5 = [
    _hoisted_3,
    _hoisted_4
  ];
  const _hoisted_6 = ["r", "fill"];
  const _hoisted_7 = ["dur", "path"];
  const _hoisted_8 = ["href", "stroke"];
  const _hoisted_9 = ["href", "stroke", "mask"];
  const _hoisted_10 = { class: "fly-box-content" };
  const refName$1 = "flyBox";

  var script$1 = /*#__PURE__*/Object.assign({ name: "FlyBox" }, {
    __name: 'FlyBox',
    props: {
    lineColor: {
      type: String,
      default: "#235fa7",
    },
    starColor: {
      type: String,
      default: "#3be6cb",
    },
    starLen: {
      type: [String, Number],
      default: 50,
    },
    duration: {
      type: [String, Number],
      default: 3,
    },
  },
    setup(__props) {




  const uuid = v4();
  console.log("uuid", uuid);
  const pathId = `${refName$1}-path-${uuid}`;
  const radialGradientId = `${refName$1}-gradient-${uuid}`;
  const maskId = `${refName$1}-mask-${uuid}`;
  const width = vue.ref(0);
  const height = vue.ref(0);
  // M5 5 L395 5 L395 395 L5 395 Z
  const path = vue.computed(
    () =>
      `M5 5 L${width.value - 5} 5 L${width.value - 5} ${height.value - 5} L5 ${
      height.value - 5
    } Z`
  );

  const init = () => {
    const instance = vue.getCurrentInstance();
    const dom = instance.ctx.$refs[refName$1];
    width.value = dom.clientWidth;
    height.value = dom.clientHeight;
  };
  vue.onMounted(() => {
    init();
  });

  return (_ctx, _cache) => {
    return (vue.openBlock(), vue.createElementBlock("div", {
      class: "fly-box",
      ref: refName$1
    }, [
      (vue.openBlock(), vue.createElementBlock("svg", {
        width: width.value,
        height: height.value
      }, [
        vue.createElementVNode("defs", null, [
          vue.createCommentVNode(" M5 5 L395 5 L395 395 L5 395 Z 四个点的坐标，M是移动，起始点，L是画线，M和L后面是带x、y坐标，Z是闭合 "),
          vue.createElementVNode("path", {
            id: pathId,
            d: path.value,
            fill: "none"
          }, null, 8 /* PROPS */, _hoisted_2),
          vue.createCommentVNode(" 光点，且光点位置放在头部fx=100%; cx、cy是外圆(终点圆)；fx、fy是内圆(起点圆)； r是终点圆的半径 "),
          vue.createElementVNode("radialGradient", {
            id: radialGradientId,
            cx: "50%",
            cy: "50%",
            fx: "100%",
            fy: "50%",
            r: "50%"
          }, [..._hoisted_5]),
          vue.createCommentVNode(" path跟模板(圆)的交叉部分就显示出来（滑动的轨迹）， r半径越大，轨迹就越长 "),
          vue.createElementVNode("mask", { id: maskId }, [
            vue.createElementVNode("circle", {
              r: __props.starLen,
              cx: "0",
              cy: "0",
              fill: `url(#${radialGradientId})`
            }, [
              vue.createCommentVNode(" SMIL动画，路径动画; rotate: auto -> 0 可以更加流畅; 多个 animateMotion 并行时，后者会覆盖前者 "),
              vue.createElementVNode("animateMotion", {
                dur: `${__props.duration}s`,
                path: path.value,
                rotate: "auto",
                repeatCount: "indefinite"
              }, null, 8 /* PROPS */, _hoisted_7)
            ], 8 /* PROPS */, _hoisted_6)
          ])
        ]),
        vue.createElementVNode("use", {
          href: `#${pathId}`,
          "stroke-width": "1",
          stroke: __props.lineColor
        }, null, 8 /* PROPS */, _hoisted_8),
        vue.createCommentVNode(" 使用模板，制作轨迹动画和光点 "),
        vue.createElementVNode("use", {
          href: `#${pathId}`,
          "stroke-width": "3",
          stroke: __props.starColor,
          mask: `url(#${maskId})`
        }, null, 8 /* PROPS */, _hoisted_9)
      ], 8 /* PROPS */, _hoisted_1)),
      vue.createElementVNode("div", _hoisted_10, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ]))
  }
  }

  });

  var css_248z$1 = ".fly-box[data-v-513cc2e2] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.fly-box[data-v-513cc2e2] svg[data-v-513cc2e2] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.fly-box[data-v-513cc2e2] .fly-box-content[data-v-513cc2e2] {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n}";
  styleInject(css_248z$1);

  script$1.__scopeId = "data-v-513cc2e2";
  script$1.__file = "src/components/FlyBox/FlyBox.vue";

  function FlyBox (Vue) {
    Vue.component(script$1.name, script$1);
  }

  const refName = "datavContainer";

  var script = /*#__PURE__*/Object.assign({ name: "datavContainer" }, {
    __name: 'Container',
    props: {
    options: {
      type: Object,
      default: () => ({}),
    },
  },
    setup(__props) {


  // import * as vm from "vue"; // 打印vue, 查看有哪些方法
  const props = __props;
  const width = vue.ref(0);
  const height = vue.ref(0);
  // 视口宽高
  const originalWidth = vue.ref(0);
  const originalHeight = vue.ref(0);
  const ready = vue.ref(false);

  let context, dom, observer;

  // 初始化
  const initSize = () => {
    return new Promise((resolve) => {
      // 避免初始化时，dom还没渲染加载好；加nextTick会有异步问题，所以用Promise改成同步
      vue.nextTick(() => {
        dom = context.$refs[refName];
        console.log("initSize", dom);
        // 用户传入宽高，则用用户定义的；否则用dom的宽高【获取大屏真实尺寸】
        if (props.options && props.options.width && props.options.height) {
          width.value = props.options.width;
          height.value = props.options.height;
        } else {
          width.value = dom.clientWidth;
          height.value = dom.clientHeight;
        }

        // 视口宽高【获取画布尺寸】
        if (!originalWidth.value || !originalHeight.value) {
          // window.screen.width用户屏幕的总宽度，值是固定的，不会随着浏览器窗口大小变化；反映的是整个屏幕的分辨率
          originalWidth.value = window.screen.width;
          originalHeight.value = window.screen.height;
        }
        resolve();
      });
    });
  };

  // 更新容器的size
  const updateSize = () => {
    if (width.value && height.value) {
      dom.style.width = `${width.value}px`;
      dom.style.height = `${height.value}px`;
    } else {
      dom.style.width = `${originalWidth.value}px`;
      dom.style.height = `${originalHeight.value}px`;
    }
  };

  const updateScale = () => {
    // 获取真实的视口尺寸【html，body和#app必须初始化为全屏，才能随着浏览器窗口变化而变化】
    const currentWidth = document.body.clientWidth;
    const currentHeight = document.body.clientHeight;
    // 获取大屏最终的宽高
    const realWidth = width.value || originalWidth.value;
    const realHeight = height.value || originalHeight.value;
    // 缩放比例
    const widthScale = currentWidth / realWidth;
    const heightScale = currentHeight / realHeight;
    dom.style.transform = `scale(${widthScale}, ${heightScale})`;
  };

  /**
   * 突破chrome 12px字体的显示极限：用到scale让字体可以缩放到小于12px;
   * 浏览器缩放时锁定屏幕宽高比： 缩放时，字体要保持不变，不能随着一起放大缩小；
   */
  const onResize = async (e) => {
    console.log("onResize", e);
    await initSize();
    updateScale();
  };

  /** 监听dom变化: 更新resize */
  const initMutationObserver = () => {
    const MutationObserver = window.MutationObserver;
    observer = new MutationObserver(onResize);
    observer.observe(dom, {
      attributes: true,
      attributeFilter: ["style"],
      attributeOldValue: true,
    });
  };

  const removeMutationObserver = () => {
    if (observer) {
      observer.disconnect();
      observer.taskRecords();
      observer = null;
    }
  };

  vue.onMounted(async () => {
    ready.value = false;
    context = vue.getCurrentInstance().ctx;
    await initSize();
    updateSize();
    updateScale();

    window.addEventListener("resize", onResize);
    initMutationObserver();
    ready.value = true;
  });

  // 组件销毁
  vue.onUnmounted(() => {
    window.removeEventListener("resize", onResize);
    removeMutationObserver();
  });

  return (_ctx, _cache) => {
    return (vue.openBlock(), vue.createElementBlock("div", {
      id: "datav-container",
      ref: refName
    }, [
      (ready.value)
        ? vue.renderSlot(_ctx.$slots, "default", { key: 0 })
        : vue.createCommentVNode("v-if", true)
    ]))
  }
  }

  });

  var css_248z = "@charset \"UTF-8\";\n/** 容器组件：一般只有1个 */\n#datav-container {\n  /** 容器锁定宽高比：让容器原点是在左上方 */\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  z-index: 999;\n  transform-origin: left top;\n}";
  styleInject(css_248z);

  script.__file = "src/components/Container/Container.vue";

  function Container (Vue) {
    Vue.component(script.name, script);
  }

  function index (Vue) {
    Vue.use(CustomSvg);
    Vue.use(Icon);
    Vue.use(Loading);
    Vue.use(FlyBox);
    Vue.use(Container);
  }

  return index;

}));
