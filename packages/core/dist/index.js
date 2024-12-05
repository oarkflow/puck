"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../tsup-config/react-import.js
var import_react;
var init_react_import = __esm({
  "../tsup-config/react-import.js"() {
    "use strict";
    import_react = __toESM(require("react"));
  }
});

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports2, module2) {
    "use strict";
    init_react_import();
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module2 !== "undefined" && module2.exports) {
        classNames.default = classNames;
        module2.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// index.ts
var core_exports = {};
__export(core_exports, {
  Action: () => Action,
  ActionBar: () => ActionBar,
  AutoField: () => AutoField,
  Button: () => Button,
  Drawer: () => Drawer,
  DropZone: () => DropZone,
  DropZoneProvider: () => DropZoneProvider,
  FieldLabel: () => FieldLabel,
  Group: () => Group,
  IconButton: () => IconButton,
  Puck: () => Puck,
  Render: () => Render,
  dropZoneContext: () => dropZoneContext,
  migrate: () => migrate,
  overrideKeys: () => overrideKeys,
  resolveAllData: () => resolveAllData,
  transformProps: () => transformProps,
  usePuck: () => usePuck
});
module.exports = __toCommonJS(core_exports);
init_react_import();

// types/API/index.ts
init_react_import();

// types/API/Viewports.ts
init_react_import();

// types/index.ts
init_react_import();

// types/API/Overrides.ts
init_react_import();
var overrideKeys = [
  "header",
  "headerActions",
  "fields",
  "fieldLabel",
  "components",
  "componentItem",
  "outline",
  "puck",
  "preview"
];

// types/AppState.tsx
init_react_import();

// types/Config.tsx
init_react_import();

// types/Data.tsx
init_react_import();

// types/Fields.ts
init_react_import();

// types/Props.tsx
init_react_import();

// types/Utils.tsx
init_react_import();

// components/ActionBar/index.tsx
init_react_import();

// lib/get-class-name-factory.ts
init_react_import();
var import_classnames = __toESM(require_classnames());
var getClassNameFactory = (rootClass, styles, config = { baseClass: "" }) => (options = {}) => {
  if (typeof options === "string") {
    const descendant = options;
    const style = styles[`${rootClass}-${descendant}`];
    if (style) {
      return config.baseClass + styles[`${rootClass}-${descendant}`] || "";
    }
    return "";
  } else if (typeof options === "object") {
    const modifiers = options;
    const prefixedModifiers = {};
    for (let modifier in modifiers) {
      prefixedModifiers[styles[`${rootClass}--${modifier}`]] = modifiers[modifier];
    }
    const c = styles[rootClass];
    return config.baseClass + (0, import_classnames.default)(__spreadValues({
      [c]: !!c
    }, prefixedModifiers));
  } else {
    return config.baseClass + styles[rootClass] || "";
  }
};
var get_class_name_factory_default = getClassNameFactory;

// css-module:/home/sujit/Projects/puck/packages/core/components/ActionBar/styles.module.css#css-module
init_react_import();
var styles_module_default = { "ActionBar": "_ActionBar_151w5_1", "ActionBar-actionsLabel": "_ActionBar-actionsLabel_151w5_16", "ActionBar-group": "_ActionBar-group_151w5_29", "ActionBar-action": "_ActionBar-action_151w5_16" };

// components/ActionBar/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var getClassName = get_class_name_factory_default("ActionBar", styles_module_default);
var ActionBar = ({
  label,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: getClassName(), children: [
  label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("actionsLabel"), children: label }),
  children
] });
var Action = ({
  children,
  label,
  onClick
}) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "button",
  {
    type: "button",
    className: getClassName("action"),
    onClick,
    title: label,
    children
  }
);
var Group = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: getClassName("group"), children });
ActionBar.Action = Action;
ActionBar.Group = Group;

// components/AutoField/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/AutoField/styles.module.css#css-module
init_react_import();
var styles_module_default2 = { "InputWrapper": "_InputWrapper_1l5m8_1", "Input": "_Input_1l5m8_1", "Input-label": "_Input-label_1l5m8_26", "Input-labelIcon": "_Input-labelIcon_1l5m8_35", "Input-disabledIcon": "_Input-disabledIcon_1l5m8_42", "Input-input": "_Input-input_1l5m8_47", "Input--readOnly": "_Input--readOnly_1l5m8_91", "Input-radioGroupItems": "_Input-radioGroupItems_1l5m8_102", "Input-radio": "_Input-radio_1l5m8_102", "Input-radioInner": "_Input-radioInner_1l5m8_119", "Input-radioInput": "_Input-radioInput_1l5m8_164" };

// components/AutoField/index.tsx
var import_react13 = require("react");

// components/AutoField/fields/index.tsx
init_react_import();

// components/AutoField/fields/ArrayField/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/AutoField/fields/ArrayField/styles.module.css#css-module
init_react_import();
var styles_module_default3 = { "ArrayField": "_ArrayField_1go19_5", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_1go19_13", "ArrayField-addButton": "_ArrayField-addButton_1go19_18", "ArrayField--hasItems": "_ArrayField--hasItems_1go19_33", "ArrayFieldItem": "_ArrayFieldItem_1go19_63", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_1go19_71", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_1go19_81", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_1go19_97", "ArrayField--addDisabled": "_ArrayField--addDisabled_1go19_128", "ArrayFieldItem-body": "_ArrayFieldItem-body_1go19_164", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_1go19_173", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_1go19_181", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_1go19_187" };

// ../../node_modules/lucide-react/dist/esm/lucide-react.js
init_react_import();

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
init_react_import();
var import_react2 = require("react");

// ../../node_modules/lucide-react/dist/esm/defaultAttributes.js
init_react_import();
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim();
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react2.forwardRef)(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children } = _b, rest = __objRest(_b, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children"]);
      return (0, import_react2.createElement)(
        "svg",
        __spreadValues(__spreadProps(__spreadValues({
          ref
        }, defaultAttributes), {
          width: size,
          height: size,
          stroke: color,
          strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
          className: ["lucide", `lucide-${toKebabCase(iconName)}`, className].join(" ")
        }), rest),
        [
          ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/check-circle.js
init_react_import();
var CheckCircle = createLucideIcon("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-down.js
init_react_import();
var ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
init_react_import();
var ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/chevron-up.js
init_react_import();
var ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);

// ../../node_modules/lucide-react/dist/esm/icons/copy.js
init_react_import();
var Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/globe.js
init_react_import();
var Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/hash.js
init_react_import();
var Hash = createLucideIcon("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/layers.js
init_react_import();
var Layers = createLucideIcon("Layers", [
  [
    "path",
    {
      d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
      key: "8b97xw"
    }
  ],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/layout-grid.js
init_react_import();
var LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/link.js
init_react_import();
var Link = createLucideIcon("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/list.js
init_react_import();
var List = createLucideIcon("List", [
  ["line", { x1: "8", x2: "21", y1: "6", y2: "6", key: "7ey8pc" }],
  ["line", { x1: "8", x2: "21", y1: "12", y2: "12", key: "rjfblc" }],
  ["line", { x1: "8", x2: "21", y1: "18", y2: "18", key: "c3b1m8" }],
  ["line", { x1: "3", x2: "3.01", y1: "6", y2: "6", key: "1g7gq3" }],
  ["line", { x1: "3", x2: "3.01", y1: "12", y2: "12", key: "1pjlvk" }],
  ["line", { x1: "3", x2: "3.01", y1: "18", y2: "18", key: "28t2mc" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/lock.js
init_react_import();
var Lock = createLucideIcon("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/monitor.js
init_react_import();
var Monitor = createLucideIcon("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/more-vertical.js
init_react_import();
var MoreVertical = createLucideIcon("MoreVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/panel-left.js
init_react_import();
var PanelLeft = createLucideIcon("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "9", x2: "9", y1: "3", y2: "21", key: "13tij5" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/panel-right.js
init_react_import();
var PanelRight = createLucideIcon("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["line", { x1: "15", x2: "15", y1: "3", y2: "21", key: "1hpv9i" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/plus.js
init_react_import();
var Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/redo-2.js
init_react_import();
var Redo2 = createLucideIcon("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13", key: "19mnr4" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/search.js
init_react_import();
var Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js
init_react_import();
var SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/smartphone.js
init_react_import();
var Smartphone = createLucideIcon("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/tablet.js
init_react_import();
var Tablet = createLucideIcon("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/trash.js
init_react_import();
var Trash = createLucideIcon("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/type.js
init_react_import();
var Type = createLucideIcon("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/undo-2.js
init_react_import();
var Undo2 = createLucideIcon("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11", key: "llx8ln" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/unlock.js
init_react_import();
var Unlock = createLucideIcon("Unlock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/zoom-in.js
init_react_import();
var ZoomIn = createLucideIcon("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// ../../node_modules/lucide-react/dist/esm/icons/zoom-out.js
init_react_import();
var ZoomOut = createLucideIcon("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);

// components/IconButton/index.ts
init_react_import();

// components/IconButton/IconButton.tsx
init_react_import();
var import_react3 = require("react");

// css-module:/home/sujit/Projects/puck/packages/core/components/IconButton/IconButton.module.css#css-module
init_react_import();
var IconButton_module_default = { "IconButton": "_IconButton_swpni_1", "IconButton--disabled": "_IconButton--disabled_swpni_20", "IconButton-title": "_IconButton-title_swpni_33" };

// components/Loader/index.tsx
init_react_import();

// lib/index.ts
init_react_import();

// lib/filter.ts
init_react_import();

// lib/reorder.ts
init_react_import();
var reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// lib/replace.ts
init_react_import();
var replace = (list, index, newItem) => {
  const result = Array.from(list);
  result.splice(index, 1);
  result.splice(index, 0, newItem);
  return result;
};

// css-module:/home/sujit/Projects/puck/packages/core/components/Loader/styles.module.css#css-module
init_react_import();
var styles_module_default4 = { "Loader": "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" };

// components/Loader/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var getClassName2 = get_class_name_factory_default("Loader", styles_module_default4);
var Loader = (_a) => {
  var _b = _a, {
    color,
    size = 16
  } = _b, props = __objRest(_b, [
    "color",
    "size"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    __spreadValues({
      className: getClassName2(),
      style: {
        width: size,
        height: size,
        color
      },
      "aria-label": "loading"
    }, props)
  );
};

// components/IconButton/IconButton.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var getClassName3 = get_class_name_factory_default("IconButton", IconButton_module_default);
var IconButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  type,
  disabled,
  tabIndex,
  newTab,
  fullWidth,
  title
}) => {
  const [loading, setLoading] = (0, import_react3.useState)(false);
  const ElementType = href ? "a" : "button";
  const el = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    ElementType,
    {
      className: getClassName3({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href,
      title,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: getClassName3("title"), children: title }),
        children,
        loading && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
          "\xA0\xA0",
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Loader, { size: 14 })
        ] })
      ]
    }
  );
  return el;
};

// components/Droppable/index.tsx
init_react_import();
var import_dnd = require("@measured/dnd");

// components/Puck/context.tsx
init_react_import();
var import_react6 = require("react");

// lib/get-item.ts
init_react_import();

// lib/root-droppable-id.ts
init_react_import();
var rootDroppableId = "default-zone";

// lib/setup-zone.ts
init_react_import();
var setupZone = (data, zoneKey) => {
  if (zoneKey === rootDroppableId) {
    return data;
  }
  const newData = __spreadProps(__spreadValues({}, data), {
    zones: data.zones ? __spreadValues({}, data.zones) : {}
  });
  newData.zones[zoneKey] = newData.zones[zoneKey] || [];
  return newData;
};

// lib/get-item.ts
function getItem(selector, data, dynamicProps = {}) {
  if (!selector.zone || selector.zone === rootDroppableId) {
    const item2 = data.content[selector.index];
    return (item2 == null ? void 0 : item2.props) ? __spreadProps(__spreadValues({}, item2), { props: dynamicProps[item2.props.id] || item2.props }) : void 0;
  }
  const item = setupZone(data, selector.zone).zones[selector.zone][selector.index];
  return (item == null ? void 0 : item.props) ? __spreadProps(__spreadValues({}, item), { props: dynamicProps[item.props.id] || item.props }) : void 0;
}

// components/ViewportControls/default-viewports.ts
init_react_import();
var defaultViewports = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
  { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Large" }
];

// components/Puck/context.tsx
var import_ua_parser_js = require("ua-parser-js");

// lib/use-resolved-permissions.ts
init_react_import();
var import_react4 = require("react");

// lib/flatten-data.ts
init_react_import();
var flattenData = (data) => {
  return Object.keys(data.zones || {}).reduce(
    (acc, zone) => [...acc, ...data.zones[zone]],
    data.content
  );
};

// lib/get-changed.ts
init_react_import();
var getChanged = (newItem, oldItem) => {
  return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
    const newItemProps = (newItem == null ? void 0 : newItem.props) || {};
    const oldItemProps = (oldItem == null ? void 0 : oldItem.props) || {};
    return __spreadProps(__spreadValues({}, acc), {
      [item]: oldItemProps[item] !== newItemProps[item]
    });
  }, {}) : {};
};

// lib/use-resolved-permissions.ts
var useResolvedPermissions = (config, appState, globalPermissions, setComponentLoading, unsetComponentLoading) => {
  const [cache3, setCache] = (0, import_react4.useState)({});
  const [resolvedPermissions, setResolvedPermissions] = (0, import_react4.useState)({});
  const resolveDataForItem = (0, import_react4.useCallback)(
    (item, force = false) => __async(void 0, null, function* () {
      var _a, _b, _c;
      const componentConfig = item.type === "root" ? config.root : config.components[item.type];
      if (!componentConfig) {
        return;
      }
      const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig.permissions);
      if (componentConfig.resolvePermissions) {
        const changed = getChanged(item, (_a = cache3[item.props.id]) == null ? void 0 : _a.lastData);
        if (Object.values(changed).some((el) => el === true) || force) {
          setComponentLoading == null ? void 0 : setComponentLoading(item.props.id);
          const resolvedPermissions2 = yield componentConfig.resolvePermissions(
            item,
            {
              changed,
              lastPermissions: ((_b = cache3[item.props.id]) == null ? void 0 : _b.lastPermissions) || null,
              permissions: initialPermissions,
              appState,
              lastData: ((_c = cache3[item.props.id]) == null ? void 0 : _c.lastData) || null
            }
          );
          setCache((_cache) => __spreadProps(__spreadValues({}, _cache), {
            [item.props.id]: {
              lastData: item,
              lastPermissions: resolvedPermissions2
            }
          }));
          setResolvedPermissions((p) => __spreadProps(__spreadValues({}, p), {
            [item.props.id]: resolvedPermissions2
          }));
          unsetComponentLoading == null ? void 0 : unsetComponentLoading(item.props.id);
        }
      }
    }),
    [config, globalPermissions, appState, cache3]
  );
  const resolveDataForRoot = (force = false) => {
    resolveDataForItem(
      // Shim the root data in by conforming to component data shape
      {
        type: "root",
        props: __spreadProps(__spreadValues({}, appState.data.root.props), { id: "puck-root" })
      },
      force
    );
  };
  const resolvePermissions = (0, import_react4.useCallback)(
    (..._0) => __async(void 0, [..._0], function* ({ item, type, root } = {}, force = false) {
      if (item) {
        yield resolveDataForItem(item, force);
      } else if (type) {
        flattenData(appState.data).filter((item2) => item2.type === type).map((item2) => __async(void 0, null, function* () {
          yield resolveDataForItem(item2, force);
        }));
      } else if (root) {
        resolveDataForRoot(force);
      } else {
        resolveDataForRoot(force);
        flattenData(appState.data).map((item2) => __async(void 0, null, function* () {
          yield resolveDataForItem(item2, force);
        }));
      }
    }),
    [config, appState]
  );
  const refreshPermissions = (0, import_react4.useCallback)(
    (params) => __async(void 0, null, function* () {
      resolvePermissions(params, true);
    }),
    [config, appState]
  );
  (0, import_react4.useEffect)(() => {
    resolvePermissions();
  }, [config, appState.data]);
  const getPermissions = (0, import_react4.useCallback)(
    ({ item, type, root } = {}) => {
      if (item) {
        const componentConfig = config.components[item.type];
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
        const resolvedForItem = resolvedPermissions[item.props.id];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      } else if (type) {
        const componentConfig = config.components[type];
        return __spreadValues(__spreadValues({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
      } else if (root) {
        const rootConfig = config.root;
        const initialPermissions = __spreadValues(__spreadValues({}, globalPermissions), rootConfig == null ? void 0 : rootConfig.permissions);
        const resolvedForItem = resolvedPermissions["puck-root"];
        return resolvedForItem ? __spreadValues(__spreadValues({}, globalPermissions), resolvedForItem) : initialPermissions;
      }
      return globalPermissions;
    },
    [config, resolvedPermissions]
  );
  return {
    getPermissions,
    refreshPermissions
  };
};

// lib/use-resolved-data.ts
init_react_import();
var import_react5 = require("react");

// lib/resolve-component-data.ts
init_react_import();
var cache = { lastChange: {} };
var resolveAllComponentData = (content, config, onResolveStart, onResolveEnd) => __async(void 0, null, function* () {
  return yield Promise.all(
    content.map((item) => __async(void 0, null, function* () {
      return yield resolveComponentData(
        item,
        config,
        onResolveStart,
        onResolveEnd
      );
    }))
  );
});
var resolveComponentData = (item, config, onResolveStart, onResolveEnd) => __async(void 0, null, function* () {
  const configForItem = config.components[item.type];
  if (configForItem.resolveData) {
    const { item: oldItem = null, resolved = {} } = cache.lastChange[item.props.id] || {};
    if (item && item === oldItem) {
      return resolved;
    }
    const changed = getChanged(item, oldItem);
    if (onResolveStart) {
      onResolveStart(item);
    }
    const { props: resolvedProps, readOnly = {} } = yield configForItem.resolveData(item, { changed, lastData: oldItem });
    const { readOnly: existingReadOnly = {} } = item || {};
    const newReadOnly = __spreadValues(__spreadValues({}, existingReadOnly), readOnly);
    const resolvedItem = __spreadProps(__spreadValues({}, item), {
      props: __spreadValues(__spreadValues({}, item.props), resolvedProps)
    });
    if (Object.keys(newReadOnly).length) {
      resolvedItem.readOnly = newReadOnly;
    }
    cache.lastChange[item.props.id] = {
      item,
      resolved: resolvedItem
    };
    if (onResolveEnd) {
      onResolveEnd(resolvedItem);
    }
    return resolvedItem;
  }
  return item;
});

// lib/apply-dynamic-props.ts
init_react_import();
var applyDynamicProps = (data, dynamicProps, rootData) => {
  return __spreadProps(__spreadValues({}, data), {
    root: __spreadValues(__spreadValues({}, data.root), rootData ? rootData : {}),
    content: data.content.map((item) => {
      return dynamicProps[item.props.id] ? __spreadValues(__spreadValues({}, item), dynamicProps[item.props.id]) : item;
    }),
    zones: Object.keys(data.zones || {}).reduce((acc, zoneKey) => {
      return __spreadProps(__spreadValues({}, acc), {
        [zoneKey]: data.zones[zoneKey].map((item) => {
          return dynamicProps[item.props.id] ? __spreadValues(__spreadValues({}, item), dynamicProps[item.props.id]) : item;
        })
      });
    }, {})
  });
};

// lib/resolve-root-data.ts
init_react_import();
var cache2 = {};
function resolveRootData(data, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e;
    if (((_a = config.root) == null ? void 0 : _a.resolveData) && data.root.props) {
      if (((_b = cache2.lastChange) == null ? void 0 : _b.original) === data.root) {
        return cache2.lastChange.resolved;
      }
      const changed = getChanged(data.root, (_c = cache2.lastChange) == null ? void 0 : _c.original);
      const rootWithProps = data.root;
      const resolvedRoot = yield (_e = config.root) == null ? void 0 : _e.resolveData(rootWithProps, {
        changed,
        lastData: ((_d = cache2.lastChange) == null ? void 0 : _d.original) || {}
      });
      cache2.lastChange = {
        original: data.root,
        resolved: resolvedRoot
      };
      return __spreadProps(__spreadValues(__spreadValues({}, data.root), resolvedRoot), {
        props: __spreadValues(__spreadValues({}, data.root.props), resolvedRoot.props)
      });
    }
    return data.root;
  });
}

// lib/use-resolved-data.ts
var useResolvedData = (appState, config, dispatch, setComponentLoading, unsetComponentLoading, refreshPermissions) => {
  const [{ resolverKey, newAppState }, setResolverState] = (0, import_react5.useState)({
    resolverKey: 0,
    newAppState: appState
  });
  const deferredSetStates = {};
  const _setComponentLoading = (0, import_react5.useCallback)(
    (id, loading, defer2 = 0) => {
      if (deferredSetStates[id]) {
        clearTimeout(deferredSetStates[id]);
        delete deferredSetStates[id];
      }
      deferredSetStates[id] = setTimeout(() => {
        if (loading) {
          setComponentLoading(id);
        } else {
          unsetComponentLoading(id);
        }
        delete deferredSetStates[id];
      }, defer2);
    },
    []
  );
  const runResolvers = () => __async(void 0, null, function* () {
    const newData = newAppState.data;
    const flatContent = flattenData(newData).filter(
      (item) => {
        var _a;
        return !!((_a = config.components[item.type]) == null ? void 0 : _a.resolveData);
      }
    );
    const applyIfChange = (dynamicDataMap, dynamicRoot) => {
      const processed = applyDynamicProps(
        appState.data,
        dynamicDataMap,
        dynamicRoot
      );
      const processedAppState = __spreadProps(__spreadValues({}, appState), { data: processed });
      const containsChanges = JSON.stringify(appState) !== JSON.stringify(processedAppState);
      if (containsChanges) {
        dispatch({
          type: "set",
          state: (prev) => __spreadProps(__spreadValues({}, prev), {
            data: applyDynamicProps(prev.data, dynamicDataMap, dynamicRoot),
            ui: resolverKey > 0 ? __spreadValues(__spreadValues({}, prev.ui), newAppState.ui) : prev.ui
          }),
          recordHistory: resolverKey > 0
        });
      }
    };
    const promises = [];
    promises.push(
      (() => __async(void 0, null, function* () {
        _setComponentLoading("puck-root", true, 50);
        const dynamicRoot = yield resolveRootData(newData, config);
        applyIfChange({}, dynamicRoot);
        _setComponentLoading("puck-root", false);
      }))()
    );
    flatContent.forEach((item) => {
      promises.push(
        (() => __async(void 0, null, function* () {
          refreshPermissions({ item });
          const dynamicData = yield resolveComponentData(
            item,
            config,
            (item2) => {
              _setComponentLoading(item2.props.id, true, 50);
            },
            (item2) => {
              deferredSetStates[item2.props.id];
              _setComponentLoading(item2.props.id, false);
            }
          );
          const dynamicDataMap = { [item.props.id]: dynamicData };
          applyIfChange(dynamicDataMap);
        }))()
      );
    });
    yield Promise.all(promises);
  });
  (0, import_react5.useEffect)(() => {
    runResolvers();
  }, [resolverKey]);
  const resolveData = (0, import_react5.useCallback)((newAppState2 = appState) => {
    setResolverState((curr) => ({
      resolverKey: curr.resolverKey + 1,
      newAppState: newAppState2
    }));
  }, []);
  return {
    resolveData
  };
};

// components/Puck/context.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var defaultAppState = {
  data: { content: [], root: {} },
  ui: {
    leftSideBarVisible: true,
    rightSideBarVisible: true,
    arrayState: {},
    itemSelector: null,
    componentList: {},
    isDragging: false,
    viewports: {
      current: {
        width: defaultViewports[0].width,
        height: defaultViewports[0].height || "auto"
      },
      options: [],
      controlsVisible: true
    },
    field: { focus: null }
  }
};
var defaultContext = {
  state: defaultAppState,
  dispatch: () => null,
  config: { components: {} },
  componentState: {},
  setComponentState: () => {
  },
  resolveData: () => {
  },
  plugins: [],
  overrides: {},
  history: {},
  viewports: defaultViewports,
  zoomConfig: {
    autoZoom: 1,
    rootHeight: 0,
    zoom: 1
  },
  setZoomConfig: () => null,
  status: "LOADING",
  setStatus: () => null,
  iframe: {},
  safariFallbackMode: false,
  globalPermissions: {},
  getPermissions: () => ({}),
  refreshPermissions: () => null
};
var appContext = (0, import_react6.createContext)(defaultContext);
var AppProvider = ({
  children,
  value
}) => {
  const [zoomConfig, setZoomConfig] = (0, import_react6.useState)(defaultContext.zoomConfig);
  const [status, setStatus] = (0, import_react6.useState)("LOADING");
  (0, import_react6.useEffect)(() => {
    setStatus("MOUNTED");
  }, []);
  const [safariFallbackMode, setSafariFallbackMode] = (0, import_react6.useState)(false);
  (0, import_react6.useEffect)(() => {
    var _a, _b, _c;
    const ua = new import_ua_parser_js.UAParser(navigator.userAgent);
    const { browser } = ua.getResult();
    if (browser.name === "Safari" && (((_a = browser.version) == null ? void 0 : _a.indexOf("17.2.")) || ((_b = browser.version) == null ? void 0 : _b.indexOf("17.3.")) || ((_c = browser.version) == null ? void 0 : _c.indexOf("17.4.")))) {
      if (process.env.NODE_ENV !== "production" && value.iframe.enabled) {
        console.warn(
          `Detected Safari ${browser.version}, which contains a bug that prevents Puck DropZones from detecting a mouseover event within an iframe. This affects Safari versions 17.2, 17.3 and 17.4.

Running in compatibility mode, which may have some DropZone side-effects. Alternatively, consider disabling iframes: https://puckeditor.com/docs/integrating-puck/viewports#opting-out-of-iframes.

See https://github.com/measuredco/puck/issues/411 for more information. This message will not show in production.`
        );
      }
      setSafariFallbackMode(true);
    }
  }, []);
  const selectedItem = value.state.ui.itemSelector ? getItem(value.state.ui.itemSelector, value.state.data) : void 0;
  const [componentState, setComponentState] = (0, import_react6.useState)({});
  const setComponentLoading = (id) => {
    setComponentState((prev) => {
      var _a;
      return __spreadProps(__spreadValues({}, prev), {
        [id]: __spreadProps(__spreadValues({}, prev[id]), {
          loadingCount: (((_a = prev[id]) == null ? void 0 : _a.loadingCount) || 0) + 1
        })
      });
    });
  };
  const unsetComponentLoading = (id) => {
    setComponentState((prev) => {
      var _a;
      return __spreadProps(__spreadValues({}, prev), {
        [id]: __spreadProps(__spreadValues({}, prev[id]), {
          loadingCount: Math.max((((_a = prev[id]) == null ? void 0 : _a.loadingCount) || 0) - 1, 0)
        })
      });
    });
  };
  const { getPermissions, refreshPermissions } = useResolvedPermissions(
    value.config,
    value.state,
    value.globalPermissions || {},
    setComponentLoading,
    unsetComponentLoading
  );
  const { resolveData } = useResolvedData(
    value.state,
    value.config,
    value.dispatch,
    setComponentLoading,
    unsetComponentLoading,
    refreshPermissions
  );
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    appContext.Provider,
    {
      value: __spreadProps(__spreadValues({}, value), {
        selectedItem,
        zoomConfig,
        setZoomConfig,
        status,
        setStatus,
        safariFallbackMode,
        getPermissions,
        refreshPermissions,
        componentState,
        setComponentState,
        resolveData
      }),
      children
    }
  );
};
function useAppContext() {
  const mainContext = (0, import_react6.useContext)(appContext);
  return __spreadProps(__spreadValues({}, mainContext), {
    // Helpers
    setUi: (ui, recordHistory) => {
      return mainContext.dispatch({
        type: "setUi",
        ui,
        recordHistory
      });
    }
  });
}

// components/Droppable/index.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var defaultProvided = {
  droppableProps: {
    "data-rfd-droppable-context-id": "",
    "data-rfd-droppable-id": ""
  },
  placeholder: null,
  innerRef: () => null
};
var defaultSnapshot = {
  isDraggingOver: false,
  draggingOverWith: null,
  draggingFromThisWith: null,
  isUsingPlaceholder: false
};
var DefaultDroppable = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_jsx_runtime5.Fragment, { children: children(defaultProvided, defaultSnapshot) });
var Droppable = (props) => {
  const { status } = useAppContext();
  const El = status !== "LOADING" ? import_dnd.Droppable : DefaultDroppable;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(El, __spreadValues({}, props));
};

// components/Draggable/index.tsx
init_react_import();
var import_dnd2 = require("@measured/dnd");
var import_jsx_runtime6 = require("react/jsx-runtime");
var defaultProvided2 = {
  draggableProps: {
    "data-rfd-draggable-context-id": "",
    "data-rfd-draggable-id": ""
  },
  dragHandleProps: null,
  innerRef: () => null
};
var defaultSnapshot2 = {
  isDragging: false,
  isDropAnimating: false,
  isClone: false,
  dropAnimation: null,
  draggingOver: null,
  combineWith: null,
  combineTargetFor: null,
  mode: null
};
var defaultRubric = {
  draggableId: "",
  type: "",
  source: { droppableId: "", index: 0 }
};
var DefaultDraggable = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: children(defaultProvided2, defaultSnapshot2, defaultRubric) });
var Draggable = ({
  className,
  children,
  id,
  index,
  showShadow,
  disableAnimations = false,
  isDragDisabled = false
}) => {
  const { status } = useAppContext();
  const El = status !== "LOADING" ? import_dnd2.Draggable : DefaultDraggable;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(El, { draggableId: id, index, isDragDisabled, children: (provided, snapshot) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "div",
        __spreadProps(__spreadValues(__spreadValues({
          className: className && className(provided, snapshot),
          ref: provided.innerRef
        }, provided.draggableProps), provided.dragHandleProps), {
          style: __spreadProps(__spreadValues({}, provided.draggableProps.style), {
            transform: snapshot.isDragging || !disableAnimations ? (_a = provided.draggableProps.style) == null ? void 0 : _a.transform : "translate(0px, 0px)",
            cursor: isDragDisabled ? "no-drop" : "grab"
          }),
          children: children(provided, snapshot)
        })
      ),
      showShadow && snapshot.isDragging && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "div",
        {
          className: className && className(provided, snapshot),
          style: { transform: "none !important" },
          children: children(provided, snapshot)
        }
      )
    ] });
  } });
};

// components/AutoField/fields/ArrayField/index.tsx
var import_react7 = require("react");

// components/DragIcon/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/DragIcon/styles.module.css#css-module
init_react_import();
var styles_module_default5 = { "DragIcon": "_DragIcon_17p8x_1", "DragIcon--disabled": "_DragIcon--disabled_17p8x_8" };

// components/DragIcon/index.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var getClassName4 = get_class_name_factory_default("DragIcon", styles_module_default5);
var DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: getClassName4({ disabled: isDragDisabled }), children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { viewBox: "0 0 20 20", width: "12", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }) }) });

// components/DragDropContext/index.tsx
init_react_import();
var import_dnd3 = require("@measured/dnd");
var import_jsx_runtime8 = require("react/jsx-runtime");
var DefaultDragDropContext = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_jsx_runtime8.Fragment, { children });
var DragDropContext = (props) => {
  const { status } = useAppContext();
  const El = status !== "LOADING" ? import_dnd3.DragDropContext : DefaultDragDropContext;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(El, __spreadValues({}, props));
};

// components/AutoField/fields/ArrayField/index.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var getClassName5 = get_class_name_factory_default("ArrayField", styles_module_default3);
var getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default3);
var ArrayField = ({
  field,
  onChange,
  value: _value,
  name,
  label,
  readOnly,
  id,
  Label = (props) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", __spreadValues({}, props))
}) => {
  const { state, setUi, selectedItem, getPermissions } = useAppContext();
  const readOnlyFields = (selectedItem == null ? void 0 : selectedItem.readOnly) || {};
  const value = _value;
  const arrayState = state.ui.arrayState[id] || {
    items: Array.from(value || []).map((item, idx) => {
      return {
        _originalIndex: idx,
        _arrayId: `${id}-${idx}`
      };
    }),
    openId: ""
  };
  const [localState, setLocalState] = (0, import_react7.useState)({ arrayState, value });
  (0, import_react7.useEffect)(() => {
    setLocalState({ arrayState, value });
  }, [value, state.ui.arrayState[id]]);
  const mapArrayStateToUi = (0, import_react7.useCallback)(
    (partialArrayState) => {
      return {
        arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
          [id]: __spreadValues(__spreadValues({}, arrayState), partialArrayState)
        })
      };
    },
    [arrayState]
  );
  const getHighestIndex = (0, import_react7.useCallback)(() => {
    return arrayState.items.reduce(
      (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
      -1
    );
  }, [arrayState]);
  const regenerateArrayState = (0, import_react7.useCallback)(
    (value2) => {
      let highestIndex = getHighestIndex();
      const newItems = Array.from(value2 || []).map((item, idx) => {
        var _a;
        const arrayStateItem = arrayState.items[idx];
        const newItem = {
          _originalIndex: typeof (arrayStateItem == null ? void 0 : arrayStateItem._originalIndex) !== "undefined" ? arrayStateItem._originalIndex : highestIndex + 1,
          _arrayId: ((_a = arrayState.items[idx]) == null ? void 0 : _a._arrayId) || `${id}-${highestIndex + 1}`
        };
        if (newItem._originalIndex > highestIndex) {
          highestIndex = newItem._originalIndex;
        }
        return newItem;
      });
      return __spreadProps(__spreadValues({}, arrayState), { items: newItems });
    },
    [arrayState]
  );
  (0, import_react7.useEffect)(() => {
    if (arrayState.items.length > 0) {
      setUi(mapArrayStateToUi(arrayState));
    }
  }, []);
  const [hovering, setHovering] = (0, import_react7.useState)(false);
  const forceReadOnly = getPermissions({ item: selectedItem }).edit === false;
  if (field.type !== "array" || !field.arrayFields) {
    return null;
  }
  const addDisabled = field.max !== void 0 && localState.arrayState.items.length >= field.max || readOnly;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    Label,
    {
      label: label || name,
      icon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(List, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        DragDropContext,
        {
          onDragEnd: (event) => {
            var _a, _b;
            if (event.destination) {
              const newValue = reorder(
                value,
                event.source.index,
                (_a = event.destination) == null ? void 0 : _a.index
              );
              const newArrayStateItems = reorder(
                arrayState.items,
                event.source.index,
                (_b = event.destination) == null ? void 0 : _b.index
              );
              const newUi = {
                arrayState: __spreadProps(__spreadValues({}, state.ui.arrayState), {
                  [id]: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
                })
              };
              setUi(newUi, false);
              onChange(newValue, newUi);
              setLocalState({
                value: newValue,
                arrayState: __spreadProps(__spreadValues({}, arrayState), { items: newArrayStateItems })
              });
            }
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Droppable, { droppableId: "array", isDropDisabled: readOnly, children: (provided, snapshot) => {
            return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
              "div",
              __spreadProps(__spreadValues({}, provided.droppableProps), {
                ref: provided.innerRef,
                className: getClassName5({
                  isDraggingFrom: !!snapshot.draggingFromThisWith,
                  hasItems: Array.isArray(value) && value.length > 0,
                  addDisabled
                }),
                onMouseOver: (e) => {
                  e.stopPropagation();
                  setHovering(true);
                },
                onMouseOut: (e) => {
                  e.stopPropagation();
                  setHovering(false);
                },
                onClick: (e) => {
                  e.preventDefault();
                },
                children: [
                  localState.arrayState.items.map((item, i) => {
                    const { _arrayId = `${id}-${i}`, _originalIndex = i } = item;
                    const data = Array.from(localState.value || [])[i] || {};
                    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                      Draggable,
                      {
                        id: _arrayId,
                        index: i,
                        className: (_, snapshot2) => getClassNameItem({
                          isExpanded: arrayState.openId === _arrayId,
                          isDragging: snapshot2 == null ? void 0 : snapshot2.isDragging,
                          readOnly
                        }),
                        isDragDisabled: readOnly || !hovering,
                        children: () => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
                            "div",
                            {
                              onClick: () => {
                                if (arrayState.openId === _arrayId) {
                                  setUi(
                                    mapArrayStateToUi({
                                      openId: ""
                                    })
                                  );
                                } else {
                                  setUi(
                                    mapArrayStateToUi({
                                      openId: _arrayId
                                    })
                                  );
                                }
                              },
                              className: getClassNameItem("summary"),
                              children: [
                                field.getItemSummary ? field.getItemSummary(data, i) : `Item #${_originalIndex}`,
                                /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: getClassNameItem("rhs"), children: [
                                  !readOnly && /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: getClassNameItem("actions"), children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                                      IconButton,
                                      {
                                        type: "button",
                                        disabled: !!addDisabled,
                                        onClick: (e) => {
                                          e.stopPropagation();
                                          const existingValue = [
                                            ...value || []
                                          ];
                                          existingValue.splice(
                                            i,
                                            0,
                                            existingValue[i]
                                          );
                                          onChange(
                                            existingValue,
                                            mapArrayStateToUi(
                                              regenerateArrayState(existingValue)
                                            )
                                          );
                                        },
                                        title: "Duplicate",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Copy, { size: 16 })
                                      }
                                    ) }),
                                    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                                      IconButton,
                                      {
                                        type: "button",
                                        disabled: field.min !== void 0 && field.min >= localState.arrayState.items.length,
                                        onClick: (e) => {
                                          e.stopPropagation();
                                          const existingValue = [
                                            ...value || []
                                          ];
                                          const existingItems = [
                                            ...arrayState.items || []
                                          ];
                                          existingValue.splice(i, 1);
                                          existingItems.splice(i, 1);
                                          onChange(
                                            existingValue,
                                            mapArrayStateToUi({
                                              items: existingItems
                                            })
                                          );
                                        },
                                        title: "Delete",
                                        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Trash, { size: 16 })
                                      }
                                    ) })
                                  ] }),
                                  /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(DragIcon, {}) })
                                ] })
                              ]
                            }
                          ),
                          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: getClassNameItem("body"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("fieldset", { className: getClassNameItem("fieldset"), children: Object.keys(field.arrayFields).map(
                            (fieldName) => {
                              const subField = field.arrayFields[fieldName];
                              const subFieldName = `${name}[${i}].${fieldName}`;
                              const wildcardFieldName = `${name}[*].${fieldName}`;
                              const subReadOnly = forceReadOnly ? forceReadOnly : typeof readOnlyFields[subFieldName] !== "undefined" ? readOnlyFields[subFieldName] : readOnlyFields[wildcardFieldName];
                              return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                                AutoFieldPrivate,
                                {
                                  name: subFieldName,
                                  label: subField.label || fieldName,
                                  id: `${_arrayId}_${fieldName}`,
                                  readOnly: subReadOnly,
                                  field: subField,
                                  value: data[fieldName],
                                  onChange: (val, ui) => {
                                    onChange(
                                      replace(value, i, __spreadProps(__spreadValues({}, data), {
                                        [fieldName]: val
                                      })),
                                      ui
                                    );
                                  }
                                },
                                subFieldName
                              );
                            }
                          ) }) })
                        ] })
                      },
                      _arrayId
                    );
                  }),
                  provided.placeholder,
                  !addDisabled && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                    "button",
                    {
                      type: "button",
                      className: getClassName5("addButton"),
                      onClick: () => {
                        const existingValue = value || [];
                        const newValue = [
                          ...existingValue,
                          field.defaultItemProps || {}
                        ];
                        const newArrayState = regenerateArrayState(newValue);
                        onChange(newValue, mapArrayStateToUi(newArrayState));
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Plus, { size: 21 })
                    }
                  )
                ]
              })
            );
          } })
        }
      )
    }
  );
};

// components/AutoField/fields/DefaultField/index.tsx
init_react_import();
var import_jsx_runtime10 = require("react/jsx-runtime");
var getClassName6 = get_class_name_factory_default("Input", styles_module_default2);
var DefaultField = ({
  field,
  onChange,
  readOnly,
  value,
  name,
  label,
  Label,
  id
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Label,
    {
      label: label || name,
      icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
        field.type === "text" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Type, { size: 16 }),
        field.type === "number" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Hash, { size: 16 })
      ] }),
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "input",
        {
          className: getClassName6("input"),
          autoComplete: "off",
          type: field.type,
          name,
          value: typeof value === "undefined" ? "" : value.toString(),
          onChange: (e) => {
            if (field.type === "number") {
              onChange(Number(e.currentTarget.value));
            } else {
              onChange(e.currentTarget.value);
            }
          },
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          id,
          min: field.type === "number" ? field.min : void 0,
          max: field.type === "number" ? field.max : void 0
        }
      )
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
init_react_import();
var import_react11 = require("react");

// components/ExternalInput/index.tsx
init_react_import();
var import_react10 = require("react");

// css-module:/home/sujit/Projects/puck/packages/core/components/ExternalInput/styles.module.css#css-module
init_react_import();
var styles_module_default6 = { "ExternalInput-actions": "_ExternalInput-actions_8wgzm_1", "ExternalInput-button": "_ExternalInput-button_8wgzm_5", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_8wgzm_24", "ExternalInput--readOnly": "_ExternalInput--readOnly_8wgzm_31", "ExternalInput-detachButton": "_ExternalInput-detachButton_8wgzm_35", "ExternalInput": "_ExternalInput_8wgzm_1", "ExternalInputModal": "_ExternalInputModal_8wgzm_79", "ExternalInputModal-grid": "_ExternalInputModal-grid_8wgzm_89", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_8wgzm_100", "ExternalInputModal-filters": "_ExternalInputModal-filters_8wgzm_105", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_8wgzm_124", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_8wgzm_133", "ExternalInputModal-table": "_ExternalInputModal-table_8wgzm_133", "ExternalInputModal-thead": "_ExternalInputModal-thead_8wgzm_149", "ExternalInputModal-th": "_ExternalInputModal-th_8wgzm_149", "ExternalInputModal-td": "_ExternalInputModal-td_8wgzm_164", "ExternalInputModal-tr": "_ExternalInputModal-tr_8wgzm_169", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_8wgzm_176", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_8wgzm_202", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_8wgzm_206", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_8wgzm_223", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_8wgzm_227", "ExternalInputModal-search": "_ExternalInputModal-search_8wgzm_227", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_8wgzm_264", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_8wgzm_289", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_8wgzm_299", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_8wgzm_313", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_8wgzm_326", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_8wgzm_330", "ExternalInputModal-footer": "_ExternalInputModal-footer_8wgzm_330" };

// components/Modal/index.tsx
init_react_import();
var import_react8 = require("react");

// css-module:/home/sujit/Projects/puck/packages/core/components/Modal/styles.module.css#css-module
init_react_import();
var styles_module_default7 = { "Modal": "_Modal_ikbaj_1", "Modal--isOpen": "_Modal--isOpen_ikbaj_15", "Modal-inner": "_Modal-inner_ikbaj_19" };

// components/Modal/index.tsx
var import_react_dom = require("react-dom");
var import_jsx_runtime11 = require("react/jsx-runtime");
var getClassName7 = get_class_name_factory_default("Modal", styles_module_default7);
var Modal = ({
  children,
  onClose,
  isOpen
}) => {
  const [rootEl, setRootEl] = (0, import_react8.useState)(null);
  (0, import_react8.useEffect)(() => {
    setRootEl(document.getElementById("puck-portal-root"));
  }, []);
  if (!rootEl) {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", {});
  }
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: getClassName7({ isOpen }), onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      "div",
      {
        className: getClassName7("inner"),
        onClick: (e) => e.stopPropagation(),
        children
      }
    ) }),
    rootEl
  );
};

// components/Heading/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/Heading/styles.module.css#css-module
init_react_import();
var styles_module_default8 = { "Heading": "_Heading_qxrry_1", "Heading--xxxxl": "_Heading--xxxxl_qxrry_12", "Heading--xxxl": "_Heading--xxxl_qxrry_18", "Heading--xxl": "_Heading--xxl_qxrry_22", "Heading--xl": "_Heading--xl_qxrry_26", "Heading--l": "_Heading--l_qxrry_30", "Heading--m": "_Heading--m_qxrry_34", "Heading--s": "_Heading--s_qxrry_38", "Heading--xs": "_Heading--xs_qxrry_42" };

// components/Heading/index.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
var getClassName8 = get_class_name_factory_default("Heading", styles_module_default8);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    Tag,
    {
      className: getClassName8({
        [size]: true
      }),
      children
    }
  );
};

// components/Button/index.ts
init_react_import();

// components/Button/Button.tsx
init_react_import();
var import_react9 = require("react");

// css-module:/home/sujit/Projects/puck/packages/core/components/Button/Button.module.css#css-module
init_react_import();
var Button_module_default = { "Button": "_Button_1t64k_1", "Button--medium": "_Button--medium_1t64k_29", "Button--large": "_Button--large_1t64k_37", "Button-icon": "_Button-icon_1t64k_44", "Button--primary": "_Button--primary_1t64k_48", "Button--secondary": "_Button--secondary_1t64k_67", "Button--flush": "_Button--flush_1t64k_84", "Button--disabled": "_Button--disabled_1t64k_88", "Button--fullWidth": "_Button--fullWidth_1t64k_95", "Button-spinner": "_Button-spinner_1t64k_100" };

// components/Button/Button.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var getClassName9 = get_class_name_factory_default("Button", Button_module_default);
var Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  type,
  disabled,
  tabIndex,
  newTab,
  fullWidth,
  icon,
  size = "medium",
  loading: loadingProp = false
}) => {
  const [loading, setLoading] = (0, import_react9.useState)(loadingProp);
  (0, import_react9.useEffect)(() => setLoading(loadingProp), [loadingProp]);
  const ElementType = href ? "a" : type ? "button" : "span";
  const el = /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    ElementType,
    {
      className: getClassName9({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth,
        [size]: true
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href,
      children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: getClassName9("icon"), children: icon }),
        children,
        loading && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: getClassName9("spinner"), children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Loader, { size: 14 }) })
      ]
    }
  );
  return el;
};

// components/ExternalInput/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var getClassName10 = get_class_name_factory_default("ExternalInput", styles_module_default6);
var getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default6);
var dataCache = {};
var ExternalInput = ({
  field,
  onChange,
  value = null,
  name,
  id,
  readOnly
}) => {
  const {
    mapProp = (val) => val,
    mapRow = (val) => val,
    filterFields
  } = field || {};
  const [data, setData] = (0, import_react10.useState)([]);
  const [isOpen, setOpen] = (0, import_react10.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react10.useState)(true);
  const hasFilterFields = !!filterFields;
  const [filters, setFilters] = (0, import_react10.useState)(field.initialFilters || {});
  const [filtersToggled, setFiltersToggled] = (0, import_react10.useState)(hasFilterFields);
  const mappedData = (0, import_react10.useMemo)(() => {
    return data.map(mapRow);
  }, [data]);
  const keys = (0, import_react10.useMemo)(() => {
    const validKeys = /* @__PURE__ */ new Set();
    for (const item of mappedData) {
      for (const key of Object.keys(item)) {
        if (typeof item[key] === "string" || typeof item[key] === "number" || (0, import_react10.isValidElement)(item[key])) {
          validKeys.add(key);
        }
      }
    }
    return Array.from(validKeys);
  }, [mappedData]);
  const [searchQuery, setSearchQuery] = (0, import_react10.useState)(field.initialQuery || "");
  const search = (0, import_react10.useCallback)(
    (query, filters2) => __async(void 0, null, function* () {
      setIsLoading(true);
      const cacheKey = `${id}-${query}-${JSON.stringify(filters2)}`;
      const listData = dataCache[cacheKey] || (yield field.fetchList({ query, filters: filters2 }));
      if (listData) {
        setData(listData);
        setIsLoading(false);
        dataCache[cacheKey] = listData;
      }
    }),
    [id, field]
  );
  const Footer = (0, import_react10.useCallback)(
    (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("span", { className: getClassNameModal("footer"), children: [
      props.items.length,
      " result",
      props.items.length === 1 ? "" : "s"
    ] }),
    [field.renderFooter]
  );
  (0, import_react10.useEffect)(() => {
    search(searchQuery, filters);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "div",
    {
      className: getClassName10({
        dataSelected: !!value,
        modalVisible: isOpen,
        readOnly
      }),
      id,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassName10("actions"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: getClassName10("button"),
              disabled: readOnly,
              children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Link, { size: "16" }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: field.placeholder })
              ] })
            }
          ),
          value && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "button",
            {
              type: "button",
              className: getClassName10("detachButton"),
              onClick: () => {
                onChange(null);
              },
              disabled: readOnly,
              children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Unlock, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          "form",
          {
            className: getClassNameModal({
              isLoading,
              loaded: !isLoading,
              hasData: mappedData.length > 0,
              filtersToggled
            }),
            onSubmit: (e) => {
              e.preventDefault();
              search(searchQuery, filters);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassNameModal("searchForm"), children: [
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("label", { className: getClassNameModal("search"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Search, { size: "18" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    "input",
                    {
                      className: getClassNameModal("searchInput"),
                      name: "q",
                      type: "search",
                      placeholder: field.placeholder,
                      onChange: (e) => {
                        setSearchQuery(e.currentTarget.value);
                      },
                      autoComplete: "off",
                      value: searchQuery
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassNameModal("searchActions"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                  hasFilterFields && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    IconButton,
                    {
                      title: "Toggle filters",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiltersToggled(!filtersToggled);
                      },
                      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SlidersHorizontal, { size: 20 })
                    }
                  ) })
                ] })
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Heading, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassNameModal("grid"), children: [
                hasFilterFields && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                  const filterField = filterFields[fieldName];
                  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                    AutoFieldPrivate,
                    {
                      field: filterField,
                      name: fieldName,
                      id: `external_field_${fieldName}_filter`,
                      label: filterField.label || fieldName,
                      value: filters[fieldName],
                      onChange: (value2) => {
                        const newFilters = __spreadProps(__spreadValues({}, filters), { [fieldName]: value2 });
                        setFilters(newFilters);
                        search(searchQuery, newFilters);
                      }
                    },
                    fieldName
                  );
                }) }),
                /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: getClassNameModal("tableWrapper"), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("table", { className: getClassNameModal("table"), children: [
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                      "th",
                      {
                        className: getClassNameModal("th"),
                        style: { textAlign: "left" },
                        children: key
                      },
                      key
                    )) }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                      return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
                        "tr",
                        {
                          style: { whiteSpace: "nowrap" },
                          className: getClassNameModal("tr"),
                          onClick: () => {
                            onChange(mapProp(data[i]));
                            setOpen(false);
                          },
                          children: keys.map((key) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("td", { className: getClassNameModal("td"), children: item[key] }, key))
                        },
                        i
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Loader, { size: 24 }) })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Footer, { items: mappedData }) })
            ]
          }
        ) })
      ]
    }
  );
};

// components/AutoField/fields/ExternalField/index.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var ExternalField = ({
  field,
  onChange,
  value,
  name,
  label,
  Label,
  id,
  readOnly
}) => {
  var _a, _b, _c;
  const validField = field;
  const deprecatedField = field;
  (0, import_react11.useEffect)(() => {
    if (deprecatedField.adaptor) {
      console.error(
        "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
      );
    }
  }, []);
  if (field.type !== "external") {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Label, { label: label || name, icon: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Link, { size: 16 }), el: "div", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    ExternalInput,
    {
      name,
      field: __spreadProps(__spreadValues({}, validField), {
        // DEPRECATED
        placeholder: ((_a = deprecatedField.adaptor) == null ? void 0 : _a.name) ? `Select from ${deprecatedField.adaptor.name}` : validField.placeholder || "Select data",
        mapProp: ((_b = deprecatedField.adaptor) == null ? void 0 : _b.mapProp) || validField.mapProp,
        mapRow: validField.mapRow,
        fetchList: ((_c = deprecatedField.adaptor) == null ? void 0 : _c.fetchList) ? () => __async(void 0, null, function* () {
          return yield deprecatedField.adaptor.fetchList(
            deprecatedField.adaptorParams
          );
        }) : validField.fetchList
      }),
      onChange,
      value,
      id,
      readOnly
    }
  ) });
};

// components/AutoField/fields/RadioField/index.tsx
init_react_import();
var import_jsx_runtime16 = require("react/jsx-runtime");
var getClassName11 = get_class_name_factory_default("Input", styles_module_default2);
var RadioField = ({
  field,
  onChange,
  readOnly,
  value,
  name,
  id,
  label,
  Label
}) => {
  if (field.type !== "radio" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    Label,
    {
      icon: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CheckCircle, { size: 16 }),
      label: label || name,
      readOnly,
      el: "div",
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: getClassName11("radioGroupItems"), id, children: field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        "label",
        {
          className: getClassName11("radio"),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
              "input",
              {
                type: "radio",
                className: getClassName11("radioInput"),
                value: option.value,
                name,
                onChange: (e) => {
                  if (e.currentTarget.value === "true" || e.currentTarget.value === "false") {
                    onChange(JSON.parse(e.currentTarget.value));
                    return;
                  }
                  onChange(e.currentTarget.value);
                },
                disabled: readOnly,
                checked: value === option.value
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: getClassName11("radioInner"), children: option.label || option.value })
          ]
        },
        option.label + option.value
      )) })
    }
  );
};

// components/AutoField/fields/SelectField/index.tsx
init_react_import();
var import_jsx_runtime17 = require("react/jsx-runtime");
var getClassName12 = get_class_name_factory_default("Input", styles_module_default2);
var SelectField = ({
  field,
  onChange,
  label,
  Label,
  value,
  name,
  readOnly,
  id
}) => {
  if (field.type !== "select" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    Label,
    {
      label: label || name,
      icon: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(ChevronDown, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
        "select",
        {
          id,
          className: getClassName12("input"),
          disabled: readOnly,
          onChange: (e) => {
            if (e.currentTarget.value === "true" || e.currentTarget.value === "false") {
              onChange(JSON.parse(e.currentTarget.value));
              return;
            }
            onChange(e.currentTarget.value);
          },
          value,
          children: field.options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "option",
            {
              label: option.label,
              value: option.value
            },
            option.label + option.value
          ))
        }
      )
    }
  );
};

// components/AutoField/fields/TextareaField/index.tsx
init_react_import();
var import_jsx_runtime18 = require("react/jsx-runtime");
var getClassName13 = get_class_name_factory_default("Input", styles_module_default2);
var TextareaField = ({
  onChange,
  readOnly,
  value,
  name,
  label,
  Label,
  id
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Label, { label: label || name, icon: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Type, { size: 16 }), readOnly, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "textarea",
    {
      id,
      className: getClassName13("input"),
      autoComplete: "off",
      name,
      value: typeof value === "undefined" ? "" : value,
      onChange: (e) => onChange(e.currentTarget.value),
      readOnly,
      tabIndex: readOnly ? -1 : void 0,
      rows: 5
    }
  ) });
};

// components/AutoField/index.tsx
var import_use_debounce = require("use-debounce");

// components/AutoField/fields/ObjectField/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/AutoField/fields/ObjectField/styles.module.css#css-module
init_react_import();
var styles_module_default9 = { "ObjectField": "_ObjectField_1ua3y_5", "ObjectField-fieldset": "_ObjectField-fieldset_1ua3y_13" };

// components/AutoField/fields/ObjectField/index.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var getClassName14 = get_class_name_factory_default("ObjectField", styles_module_default9);
var ObjectField = ({
  field,
  onChange,
  value,
  name,
  label,
  Label,
  readOnly,
  id
}) => {
  const { selectedItem } = useAppContext();
  if (field.type !== "object" || !field.objectFields) {
    return null;
  }
  const readOnlyFields = (selectedItem == null ? void 0 : selectedItem.readOnly) || {};
  const data = value || {};
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    Label,
    {
      label: label || name,
      icon: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(MoreVertical, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: getClassName14(), children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("fieldset", { className: getClassName14("fieldset"), children: Object.keys(field.objectFields).map((fieldName) => {
        const subField = field.objectFields[fieldName];
        const subFieldName = `${name}.${fieldName}`;
        const wildcardFieldName = `${name}.${fieldName}`;
        const subReadOnly = readOnly ? readOnly : typeof readOnlyFields[subFieldName] !== "undefined" ? readOnlyFields[subFieldName] : readOnlyFields[wildcardFieldName];
        return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          AutoFieldPrivate,
          {
            name: subFieldName,
            label: subField.label || fieldName,
            id: `${id}_${fieldName}`,
            readOnly: subReadOnly,
            field: subField,
            value: data[fieldName],
            onChange: (val, ui) => {
              onChange(
                __spreadProps(__spreadValues({}, data), {
                  [fieldName]: val
                }),
                ui
              );
            }
          },
          subFieldName
        );
      }) }) })
    }
  );
};

// lib/use-safe-id.ts
init_react_import();
var import_react12 = __toESM(require("react"));

// lib/generate-id.ts
init_react_import();
var import_uuid = require("uuid");
var generateId = (type) => type ? `${type}-${(0, import_uuid.v4)()}` : (0, import_uuid.v4)();

// lib/use-safe-id.ts
var useSafeId = () => {
  if (typeof import_react12.default.useId !== "undefined") {
    return import_react12.default.useId();
  }
  const [id] = (0, import_react12.useState)(generateId());
  return id;
};

// components/AutoField/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var getClassName15 = get_class_name_factory_default("Input", styles_module_default2);
var getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default2);
var FieldLabel = ({
  children,
  icon,
  label,
  el = "label",
  readOnly,
  className
}) => {
  const El = el;
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(El, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: getClassName15("label"), children: [
      icon ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: getClassName15("labelIcon"), children: icon }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, {}),
      label,
      readOnly && /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: getClassName15("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Lock, { size: "12" }) })
    ] }),
    children
  ] });
};
var FieldLabelInternal2 = ({
  children,
  icon,
  label,
  el = "label",
  readOnly
}) => {
  const { overrides } = useAppContext();
  const Wrapper = (0, import_react13.useMemo)(
    () => overrides.fieldLabel || FieldLabel,
    [overrides]
  );
  if (!label) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, { children });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    Wrapper,
    {
      label,
      icon,
      className: getClassName15({ readOnly }),
      readOnly,
      el,
      children
    }
  );
};
function AutoFieldInternal(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { dispatch, overrides } = useAppContext();
  const { id, Label = FieldLabelInternal2 } = props;
  const field = props.field;
  const label = field.label;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const defaultFields = {
    array: ArrayField,
    external: ExternalField,
    object: ObjectField,
    select: SelectField,
    textarea: TextareaField,
    radio: RadioField,
    text: DefaultField,
    number: DefaultField
  };
  const render = __spreadProps(__spreadValues({}, overrides.fieldTypes), {
    array: ((_a = overrides.fieldTypes) == null ? void 0 : _a.array) || defaultFields.array,
    external: ((_b = overrides.fieldTypes) == null ? void 0 : _b.external) || defaultFields.external,
    object: ((_c = overrides.fieldTypes) == null ? void 0 : _c.object) || defaultFields.object,
    select: ((_d = overrides.fieldTypes) == null ? void 0 : _d.select) || defaultFields.select,
    textarea: ((_e = overrides.fieldTypes) == null ? void 0 : _e.textarea) || defaultFields.textarea,
    radio: ((_f = overrides.fieldTypes) == null ? void 0 : _f.radio) || defaultFields.radio,
    text: ((_g = overrides.fieldTypes) == null ? void 0 : _g.text) || defaultFields.text,
    number: ((_h = overrides.fieldTypes) == null ? void 0 : _h.number) || defaultFields.number
  });
  const mergedProps = __spreadProps(__spreadValues({}, props), {
    field,
    label,
    Label,
    id: resolvedId
  });
  const onFocus = (0, import_react13.useCallback)(
    (e) => {
      if (mergedProps.name && e.target.nodeName === "INPUT") {
        e.stopPropagation();
        dispatch({
          type: "setUi",
          ui: {
            field: { focus: mergedProps.name }
          }
        });
      }
    },
    [mergedProps.name]
  );
  const onBlur = (0, import_react13.useCallback)((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, []);
  if (field.type === "custom") {
    if (!field.render) {
      return null;
    }
    const CustomField = field.render;
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: getClassNameWrapper(), onFocus, onBlur, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: getClassName15(), children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(CustomField, __spreadValues({}, mergedProps)) }) });
  }
  const children = defaultFields[field.type](mergedProps);
  const Render2 = render[field.type];
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: getClassNameWrapper(), onFocus, onBlur, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Render2, __spreadProps(__spreadValues({}, mergedProps), { children })) });
}
function AutoFieldPrivate(props) {
  const { state } = useAppContext();
  const { value, onChange } = props;
  const [localValue, setLocalValue] = (0, import_react13.useState)(value);
  const onChangeDb = (0, import_use_debounce.useDebouncedCallback)(
    (val, ui) => {
      onChange(val, ui);
    },
    50,
    { leading: true }
  );
  const onChangeLocal = (0, import_react13.useCallback)((val, ui) => {
    setLocalValue(val);
    onChangeDb(val, ui);
  }, []);
  (0, import_react13.useEffect)(() => {
    if (state.ui.field.focus !== props.name) {
      setLocalValue(value);
    }
  }, [value]);
  const localProps = {
    value: localValue,
    onChange: onChangeLocal
  };
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AutoFieldInternal, __spreadValues(__spreadValues({}, props), localProps));
}
function AutoField(props) {
  const DefaultLabel = (0, import_react13.useMemo)(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      "div",
      __spreadProps(__spreadValues({}, labelProps), {
        className: getClassName15({ readOnly: props.readOnly })
      })
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(AutoFieldInternal, __spreadProps(__spreadValues({}, props), { Label: DefaultLabel }));
}

// components/Drawer/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/Drawer/styles.module.css#css-module
init_react_import();
var styles_module_default10 = { "Drawer": "_Drawer_1oa7v_1", "DrawerItem--disabled": "_DrawerItem--disabled_1oa7v_5", "DrawerItem-draggable": "_DrawerItem-draggable_1oa7v_5", "DrawerItem-default": "_DrawerItem-default_1oa7v_11", "DrawerItem-draggableWrapper": "_DrawerItem-draggableWrapper_1oa7v_11", "DrawerItem": "_DrawerItem_1oa7v_5", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_1oa7v_36", "DrawerItem-name": "_DrawerItem-name_1oa7v_54" };

// components/Drawer/index.tsx
var import_react14 = require("react");
var import_jsx_runtime21 = require("react/jsx-runtime");
var getClassName16 = get_class_name_factory_default("Drawer", styles_module_default10);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default10);
var drawerContext = (0, import_react14.createContext)({
  droppableId: ""
});
var DrawerDraggable = ({
  children,
  id,
  index,
  isDragDisabled
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    Draggable,
    {
      id,
      index,
      isDragDisabled,
      showShadow: true,
      disableAnimations: true,
      className: () => getClassNameItem2({ disabled: isDragDisabled }),
      children: () => children
    },
    id
  );
};
var DrawerItem = ({
  name,
  children,
  id,
  label,
  index,
  isDragDisabled
}) => {
  const ctx = (0, import_react14.useContext)(drawerContext);
  const resolvedId = `${ctx.droppableId}::${id || name}`;
  const CustomInner = (0, import_react14.useMemo)(
    () => children || (({ children: children2, name: name2 }) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    DrawerDraggable,
    {
      id: resolvedId,
      index,
      isDragDisabled,
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(CustomInner, { name, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: getClassNameItem2("name"), children: label != null ? label : name }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DragIcon, { isDragDisabled }) })
      ] }) }) })
    }
  );
};
var Drawer = ({
  children,
  droppableId: _droppableId = "default",
  direction = "vertical"
}) => {
  const droppableId = `component-list:${_droppableId}`;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(drawerContext.Provider, { value: { droppableId }, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Droppable, { droppableId, isDropDisabled: true, direction, children: (provided, snapshot) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "div",
    __spreadProps(__spreadValues({}, provided.droppableProps), {
      ref: provided.innerRef,
      className: getClassName16({
        isDraggingFrom: !!snapshot.draggingFromThisWith
      }),
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { style: { display: "none" }, children: provided.placeholder })
      ]
    })
  ) }) });
};
Drawer.Item = DrawerItem;

// components/DropZone/index.tsx
init_react_import();
var import_react18 = require("react");

// components/DraggableComponent/index.tsx
init_react_import();
var import_react16 = require("react");
var import_dnd4 = require("@measured/dnd");

// css-module:/home/sujit/Projects/puck/packages/core/components/DraggableComponent/styles.module.css#css-module
init_react_import();
var styles_module_default11 = { "DraggableComponent": "_DraggableComponent_1bhad_1", "DraggableComponent--isDragging": "_DraggableComponent--isDragging_1bhad_11", "DraggableComponent-contents": "_DraggableComponent-contents_1bhad_16", "DraggableComponent-overlay": "_DraggableComponent-overlay_1bhad_29", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_1bhad_49", "DraggableComponent--isLocked": "_DraggableComponent--isLocked_1bhad_65", "DraggableComponent--forceHover": "_DraggableComponent--forceHover_1bhad_71", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_1bhad_76", "DraggableComponent--indicativeHover": "_DraggableComponent--indicativeHover_1bhad_81", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_1bhad_97", "DraggableComponent-actions": "_DraggableComponent-actions_1bhad_97" };

// lib/use-modifier-held.ts
init_react_import();
var import_react15 = require("react");
var useModifierHeld = (modifier) => {
  const [modifierHeld, setModifierHeld] = (0, import_react15.useState)(false);
  (0, import_react15.useEffect)(() => {
    function downHandler({ key }) {
      if (key === modifier) {
        setModifierHeld(true);
      }
    }
    function upHandler({ key }) {
      if (key === modifier) {
        setModifierHeld(false);
      }
    }
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [modifier]);
  return modifierHeld;
};

// lib/is-ios.ts
init_react_import();
var isIos = () => [
  "iPad Simulator",
  "iPhone Simulator",
  "iPod Simulator",
  "iPad",
  "iPhone",
  "iPod"
].includes(navigator.platform) || // iPad on iOS 13 detection
navigator.userAgent.includes("Mac") && "ontouchend" in document;

// components/DraggableComponent/index.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var getClassName17 = get_class_name_factory_default("DraggableComponent", styles_module_default11);
var space = 8;
var actionsOverlayTop = space * 6.5;
var actionsTop = -(actionsOverlayTop - 8);
var actionsRight = space;
var DefaultActionBar = ({
  label,
  children
}) => /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ActionBar, { label, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ActionBar.Group, { children }) });
var DraggableComponent = ({
  children,
  id,
  index,
  isLoading = false,
  isSelected = false,
  onClick = () => null,
  onMount = () => null,
  onMouseDown = () => null,
  onMouseUp = () => null,
  onMouseOver = () => null,
  onMouseOut = () => null,
  onDelete = () => null,
  onDuplicate = () => null,
  debug,
  label,
  isLocked = false,
  isDragDisabled,
  forceHover = false,
  indicativeHover = false,
  style
}) => {
  const { zoomConfig, status, overrides, selectedItem, getPermissions } = useAppContext();
  const isModifierHeld = useModifierHeld("Alt");
  const El = status !== "LOADING" ? import_dnd4.Draggable : DefaultDraggable;
  (0, import_react16.useEffect)(onMount, []);
  const [disableSecondaryAnimation, setDisableSecondaryAnimation] = (0, import_react16.useState)(false);
  (0, import_react16.useEffect)(() => {
    if (isIos()) {
      setDisableSecondaryAnimation(true);
    }
  }, []);
  const CustomActionBar = (0, import_react16.useMemo)(
    () => overrides.actionBar || DefaultActionBar,
    [overrides.actionBar]
  );
  const permissions = getPermissions({
    item: selectedItem
  });
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    El,
    {
      draggableId: id,
      index,
      isDragDisabled,
      disableSecondaryAnimation,
      children: (provided, snapshot) => /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        "div",
        __spreadProps(__spreadValues(__spreadValues({
          ref: provided.innerRef
        }, provided.draggableProps), provided.dragHandleProps), {
          className: getClassName17({
            isSelected,
            isModifierHeld,
            isDragging: snapshot.isDragging,
            isLocked,
            forceHover,
            indicativeHover
          }),
          style: __spreadProps(__spreadValues(__spreadValues({}, style), provided.draggableProps.style), {
            cursor: isModifierHeld || isDragDisabled ? "pointer" : "grab"
          }),
          onMouseOver,
          onMouseOut,
          onMouseDown,
          onMouseUp,
          onClick,
          children: [
            debug,
            isLoading && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: getClassName17("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Loader, {}) }),
            isSelected && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "div",
              {
                className: getClassName17("actionsOverlay"),
                style: {
                  top: actionsOverlayTop / zoomConfig.zoom
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                  "div",
                  {
                    className: getClassName17("actions"),
                    style: {
                      transform: `scale(${1 / zoomConfig.zoom}`,
                      top: actionsTop / zoomConfig.zoom,
                      right: actionsRight / zoomConfig.zoom
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(CustomActionBar, { label, children: [
                      permissions.duplicate && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ActionBar.Action, { onClick: onDuplicate, label: "Duplicate", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Copy, { size: 16 }) }),
                      permissions.delete && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ActionBar.Action, { onClick: onDelete, label: "Delete", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(Trash, { size: 16 }) })
                    ] })
                  }
                )
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: getClassName17("overlay") }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: getClassName17("contents"), children })
          ]
        })
      )
    },
    id
  );
};

// css-module:/home/sujit/Projects/puck/packages/core/components/DropZone/styles.module.css#css-module
init_react_import();
var styles_module_default12 = { "DropZone": "_DropZone_djoti_1", "DropZone-content": "_DropZone-content_djoti_10", "DropZone--userIsDragging": "_DropZone--userIsDragging_djoti_15", "DropZone--draggingOverArea": "_DropZone--draggingOverArea_djoti_19", "DropZone--draggingNewComponent": "_DropZone--draggingNewComponent_djoti_20", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_djoti_26", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_djoti_27", "DropZone--isDisabled": "_DropZone--isDisabled_djoti_28", "DropZone--isRootZone": "_DropZone--isRootZone_djoti_29", "DropZone--hasChildren": "_DropZone--hasChildren_djoti_30", "DropZone--isDestination": "_DropZone--isDestination_djoti_40", "DropZone-item": "_DropZone-item_djoti_52", "DropZone-hitbox": "_DropZone-hitbox_djoti_56" };

// components/DropZone/context.tsx
init_react_import();
var import_react17 = require("react");
var import_use_debounce2 = require("use-debounce");

// lib/get-zone-id.ts
init_react_import();
var getZoneId = (zoneCompound) => {
  if (!zoneCompound) {
    return [];
  }
  if (zoneCompound && zoneCompound.indexOf(":") > -1) {
    return zoneCompound.split(":");
  }
  return [rootDroppableId, zoneCompound];
};

// components/DropZone/context.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var dropZoneContext = (0, import_react17.createContext)(null);
var DropZoneProvider = ({
  children,
  value
}) => {
  const [hoveringArea, setHoveringArea] = (0, import_react17.useState)(null);
  const [hoveringZone, setHoveringZone] = (0, import_react17.useState)(
    rootDroppableId
  );
  const [hoveringComponent, setHoveringComponent] = (0, import_react17.useState)();
  const [hoveringAreaDb] = (0, import_use_debounce2.useDebounce)(hoveringArea, 75, { leading: false });
  const [areasWithZones, setAreasWithZones] = (0, import_react17.useState)(
    {}
  );
  const [activeZones, setActiveZones] = (0, import_react17.useState)({});
  const { dispatch = null } = value ? value : {};
  const registerZoneArea = (0, import_react17.useCallback)(
    (area) => {
      setAreasWithZones((latest) => __spreadProps(__spreadValues({}, latest), { [area]: true }));
    },
    [setAreasWithZones]
  );
  const registerZone = (0, import_react17.useCallback)(
    (zoneCompound) => {
      if (!dispatch) {
        return;
      }
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
      setActiveZones((latest) => __spreadProps(__spreadValues({}, latest), { [zoneCompound]: true }));
    },
    [setActiveZones, dispatch]
  );
  const unregisterZone = (0, import_react17.useCallback)(
    (zoneCompound) => {
      if (!dispatch) {
        return;
      }
      dispatch({
        type: "unregisterZone",
        zone: zoneCompound
      });
      setActiveZones((latest) => __spreadProps(__spreadValues({}, latest), {
        [zoneCompound]: false
      }));
    },
    [setActiveZones, dispatch]
  );
  const [pathData, setPathData] = (0, import_react17.useState)();
  const registerPath = (0, import_react17.useCallback)(
    (selector) => {
      if (!(value == null ? void 0 : value.data)) {
        return;
      }
      const item = getItem(selector, value.data);
      if (!item) {
        return;
      }
      const [area] = getZoneId(selector.zone);
      setPathData((latestPathData = {}) => {
        const parentPathData = latestPathData[area] || { path: [] };
        return __spreadProps(__spreadValues({}, latestPathData), {
          [item.props.id]: {
            path: [
              ...parentPathData.path,
              ...selector.zone ? [selector.zone] : []
            ],
            label: item.type
          }
        });
      });
    },
    [value, setPathData]
  );
  const [zoneWillDrag, setZoneWillDrag] = (0, import_react17.useState)("");
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, { children: value && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    dropZoneContext.Provider,
    {
      value: __spreadValues({
        hoveringArea: value.draggedItem ? hoveringAreaDb : hoveringArea,
        setHoveringArea,
        hoveringZone,
        setHoveringZone,
        hoveringComponent,
        setHoveringComponent,
        registerZoneArea,
        areasWithZones,
        registerZone,
        unregisterZone,
        activeZones,
        registerPath,
        pathData,
        zoneWillDrag,
        setZoneWillDrag
      }, value),
      children
    }
  ) });
};

// components/DropZone/index.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var getClassName18 = get_class_name_factory_default("DropZone", styles_module_default12);
function DropZoneEdit({ zone, allow, disallow, style }) {
  var _a;
  const appContext2 = useAppContext();
  const ctx = (0, import_react18.useContext)(dropZoneContext);
  const {
    // These all need setting via context
    data,
    dispatch = () => null,
    config,
    itemSelector,
    setItemSelector = () => null,
    areaId,
    draggedItem,
    placeholderStyle,
    registerZoneArea,
    areasWithZones,
    hoveringComponent,
    zoneWillDrag,
    setZoneWillDrag = () => null
  } = ctx || {};
  let content = data.content || [];
  let zoneCompound = rootDroppableId;
  (0, import_react18.useEffect)(() => {
    if (areaId && registerZoneArea) {
      registerZoneArea(areaId);
    }
  }, [areaId]);
  (0, import_react18.useEffect)(() => {
    if (ctx == null ? void 0 : ctx.registerZone) {
      ctx == null ? void 0 : ctx.registerZone(zoneCompound);
    }
    return () => {
      if (ctx == null ? void 0 : ctx.unregisterZone) {
        ctx == null ? void 0 : ctx.unregisterZone(zoneCompound);
      }
    };
  }, []);
  if (areaId) {
    if (zone !== rootDroppableId) {
      zoneCompound = `${areaId}:${zone}`;
      content = setupZone(data, zoneCompound).zones[zoneCompound];
    }
  }
  const isRootZone = zoneCompound === rootDroppableId || zone === rootDroppableId || areaId === "root";
  const draggedSourceId = draggedItem && draggedItem.source.droppableId;
  const draggedDestinationId = draggedItem && ((_a = draggedItem.destination) == null ? void 0 : _a.droppableId);
  const [zoneArea] = getZoneId(zoneCompound);
  const [draggedSourceArea] = getZoneId(draggedSourceId);
  const userWillDrag = zoneWillDrag === zone;
  const userIsDragging = !!draggedItem;
  const draggingOverArea = userIsDragging && zoneArea === draggedSourceArea;
  const draggingNewComponent = draggedSourceId == null ? void 0 : draggedSourceId.startsWith("component-list");
  if (!(ctx == null ? void 0 : ctx.config) || !ctx.setHoveringArea || !ctx.setHoveringZone || !ctx.setHoveringComponent || !ctx.setItemSelector || !ctx.registerPath || !ctx.dispatch) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { children: "DropZone requires context to work." });
  }
  const {
    hoveringArea = "root",
    setHoveringArea,
    hoveringZone,
    setHoveringZone,
    setHoveringComponent
  } = ctx;
  const hoveringOverArea = hoveringArea ? hoveringArea === zoneArea : isRootZone;
  const hoveringOverZone = hoveringZone === zoneCompound;
  let isEnabled = userWillDrag;
  if (userIsDragging) {
    if (draggingNewComponent) {
      if (appContext2.safariFallbackMode) {
        isEnabled = true;
      } else {
        isEnabled = hoveringOverArea;
      }
    } else {
      isEnabled = draggingOverArea && hoveringOverZone;
    }
  }
  if (isEnabled && userIsDragging && (allow || disallow)) {
    const [_, componentType] = draggedItem.draggableId.split("::");
    if (disallow) {
      const defaultedAllow = allow || [];
      const filteredDisallow = (disallow || []).filter(
        (item) => defaultedAllow.indexOf(item) === -1
      );
      if (filteredDisallow.indexOf(componentType) !== -1) {
        isEnabled = false;
      }
    } else if (allow) {
      if (allow.indexOf(componentType) === -1) {
        isEnabled = false;
      }
    }
  }
  const selectedItem = itemSelector ? getItem(itemSelector, data) : null;
  const isAreaSelected = selectedItem && zoneArea === selectedItem.props.id;
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    "div",
    {
      className: getClassName18({
        isRootZone,
        userIsDragging,
        draggingOverArea,
        hoveringOverArea,
        draggingNewComponent,
        isDestination: draggedDestinationId === zoneCompound,
        isDisabled: !isEnabled,
        isAreaSelected,
        hasChildren: content.length > 0
      }),
      onMouseUp: () => {
        setZoneWillDrag("");
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        Droppable,
        {
          droppableId: zoneCompound,
          direction: "vertical",
          isDropDisabled: !isEnabled,
          children: (provided, snapshot) => {
            return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
              "div",
              __spreadProps(__spreadValues({}, (provided || { droppableProps: {} }).droppableProps), {
                className: getClassName18("content"),
                ref: provided == null ? void 0 : provided.innerRef,
                style,
                id: zoneCompound,
                onMouseOver: (e) => {
                  e.stopPropagation();
                  setHoveringArea(zoneArea);
                  setHoveringZone(zoneCompound);
                },
                children: [
                  content.map((item, i) => {
                    var _a2, _b, _c;
                    const componentId = item.props.id;
                    const puckProps = {
                      renderDropZone: DropZone,
                      isEditing: true
                    };
                    const defaultedProps = __spreadProps(__spreadValues(__spreadValues({}, (_a2 = config.components[item.type]) == null ? void 0 : _a2.defaultProps), item.props), {
                      puck: puckProps,
                      editMode: true
                      // DEPRECATED
                    });
                    const isSelected = (selectedItem == null ? void 0 : selectedItem.props.id) === componentId || false;
                    const isDragging = ((draggedItem == null ? void 0 : draggedItem.draggableId) || "draggable-").split(
                      "draggable-"
                    )[1] === componentId;
                    const containsZone = areasWithZones ? areasWithZones[componentId] : false;
                    const Render2 = config.components[item.type] ? config.components[item.type].render : () => /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { style: { padding: 48, textAlign: "center" }, children: [
                      "No configuration for ",
                      item.type
                    ] });
                    const componentConfig = config.components[item.type];
                    const label = (_b = componentConfig == null ? void 0 : componentConfig["label"]) != null ? _b : item.type.toString();
                    const canDrag = appContext2.getPermissions({
                      item: getItem(
                        { index: i, zone: zoneCompound },
                        appContext2.state.data
                      )
                    }).drag;
                    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
                      "div",
                      {
                        className: getClassName18("item"),
                        style: { zIndex: isDragging ? 1 : void 0 },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                            DropZoneProvider,
                            {
                              value: __spreadProps(__spreadValues({}, ctx), {
                                areaId: componentId
                              }),
                              children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                                DraggableComponent,
                                {
                                  label,
                                  id: `draggable-${componentId}`,
                                  index: i,
                                  isSelected,
                                  isLocked: userIsDragging,
                                  forceHover: hoveringComponent === componentId && !userIsDragging,
                                  isDragDisabled: !canDrag,
                                  indicativeHover: userIsDragging && containsZone && hoveringArea === componentId,
                                  isLoading: ((_c = appContext2.componentState[componentId]) == null ? void 0 : _c.loadingCount) > 0,
                                  onMount: () => {
                                    ctx.registerPath({
                                      index: i,
                                      zone: zoneCompound
                                    });
                                  },
                                  onClick: (e) => {
                                    setItemSelector({
                                      index: i,
                                      zone: zoneCompound
                                    });
                                    e.stopPropagation();
                                  },
                                  onMouseDown: (e) => {
                                    e.stopPropagation();
                                    setZoneWillDrag(zone);
                                  },
                                  onMouseOver: (e) => {
                                    e.stopPropagation();
                                    if (containsZone) {
                                      setHoveringArea(componentId);
                                    } else {
                                      setHoveringArea(zoneArea);
                                    }
                                    setHoveringComponent(componentId);
                                    setHoveringZone(zoneCompound);
                                  },
                                  onMouseOut: () => {
                                    setHoveringArea(null);
                                    setHoveringZone(null);
                                    setHoveringComponent(null);
                                  },
                                  onDelete: (e) => {
                                    dispatch({
                                      type: "remove",
                                      index: i,
                                      zone: zoneCompound
                                    });
                                    setItemSelector(null);
                                    e.stopPropagation();
                                  },
                                  onDuplicate: (e) => {
                                    dispatch({
                                      type: "duplicate",
                                      sourceIndex: i,
                                      sourceZone: zoneCompound
                                    });
                                    setItemSelector({
                                      zone: zoneCompound,
                                      index: i + 1
                                    });
                                    e.stopPropagation();
                                  },
                                  style: {
                                    pointerEvents: userIsDragging && draggingNewComponent ? "all" : void 0
                                  },
                                  children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: getClassName18("renderWrapper"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Render2, __spreadValues({}, defaultedProps)) })
                                }
                              )
                            }
                          ),
                          userIsDragging && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                            "div",
                            {
                              className: getClassName18("hitbox"),
                              onMouseOver: (e) => {
                                e.stopPropagation();
                                setHoveringArea(zoneArea);
                                setHoveringZone(zoneCompound);
                              }
                            }
                          )
                        ]
                      },
                      item.props.id
                    );
                  }),
                  provided == null ? void 0 : provided.placeholder,
                  (snapshot == null ? void 0 : snapshot.isDraggingOver) && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
                    "div",
                    {
                      "data-puck-placeholder": true,
                      style: __spreadProps(__spreadValues({}, placeholderStyle), {
                        background: "var(--puck-color-azure-06)",
                        opacity: 0.3,
                        zIndex: 0
                      })
                    }
                  )
                ]
              })
            );
          }
        }
      )
    }
  );
}
function DropZoneRender({ zone }) {
  const ctx = (0, import_react18.useContext)(dropZoneContext);
  const { data, areaId = "root", config } = ctx || {};
  let zoneCompound = rootDroppableId;
  let content = (data == null ? void 0 : data.content) || [];
  if (!data || !config) {
    return null;
  }
  if (areaId && zone && zone !== rootDroppableId) {
    zoneCompound = `${areaId}:${zone}`;
    content = setupZone(data, zoneCompound).zones[zoneCompound];
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: content.map((item) => {
    const Component = config.components[item.type];
    if (Component) {
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        DropZoneProvider,
        {
          value: { data, config, areaId: item.props.id },
          children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            Component.render,
            __spreadProps(__spreadValues({}, item.props), {
              puck: { renderDropZone: DropZone }
            })
          )
        },
        item.props.id
      );
    }
    return null;
  }) });
}
function DropZone(props) {
  const ctx = (0, import_react18.useContext)(dropZoneContext);
  if ((ctx == null ? void 0 : ctx.mode) === "edit") {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropZoneEdit, __spreadValues({}, props));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DropZoneRender, __spreadValues({}, props));
}

// components/Puck/index.tsx
init_react_import();
var import_react33 = require("react");

// lib/use-placeholder-style.ts
init_react_import();
var import_react19 = require("react");

// lib/get-frame.ts
init_react_import();
var getFrame = () => {
  let frame = document.querySelector("#preview-frame");
  if ((frame == null ? void 0 : frame.tagName) === "IFRAME") {
    frame = frame.contentDocument;
  }
  return frame;
};

// lib/use-placeholder-style.ts
var usePlaceholderStyle = () => {
  const queryAttr = "data-rfd-drag-handle-draggable-id";
  const [placeholderStyle, setPlaceholderStyle] = (0, import_react19.useState)();
  const onDragStartOrUpdate = (draggedItem) => {
    var _a;
    const draggableId = draggedItem.draggableId;
    const destinationIndex = (draggedItem.destination || draggedItem.source).index;
    const droppableId = (draggedItem.destination || draggedItem.source).droppableId;
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const frame = getFrame();
    const draggedDOM = document.querySelector(domQuery) || (frame == null ? void 0 : frame.querySelector(domQuery));
    if (!draggedDOM) {
      return;
    }
    const targetListElement = frame == null ? void 0 : frame.querySelector(
      `[data-rfd-droppable-id='${droppableId}']`
    );
    const { clientHeight } = draggedDOM;
    if (!targetListElement) {
      return;
    }
    let clientY = 0;
    const isSameDroppable = draggedItem.source.droppableId === ((_a = draggedItem.destination) == null ? void 0 : _a.droppableId);
    if (destinationIndex > 0) {
      const end = destinationIndex > draggedItem.source.index && isSameDroppable ? destinationIndex + 1 : destinationIndex;
      const children = Array.from(targetListElement.children).filter(
        (item) => item !== draggedDOM && item.getAttributeNames().indexOf("data-puck-placeholder") === -1 && item.getAttributeNames().indexOf("data-rfd-placeholder-context-id") === -1
      ).slice(0, end);
      clientY = children.reduce(
        (total, item) => total + item.clientHeight + parseInt(window.getComputedStyle(item).marginTop.replace("px", "")) + parseInt(
          window.getComputedStyle(item).marginBottom.replace("px", "")
        ),
        0
      );
    }
    setPlaceholderStyle({
      position: "absolute",
      top: clientY,
      left: 0,
      height: clientHeight,
      width: "100%"
    });
  };
  return { onDragStartOrUpdate, placeholderStyle };
};

// components/SidebarSection/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/SidebarSection/styles.module.css#css-module
init_react_import();
var styles_module_default13 = { "SidebarSection": "_SidebarSection_125qe_1", "SidebarSection-title": "_SidebarSection-title_125qe_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_125qe_20", "SidebarSection-content": "_SidebarSection-content_125qe_24", "SidebarSection--noPadding": "_SidebarSection--noPadding_125qe_28", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_125qe_41", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_125qe_70", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_125qe_41", "SidebarSection-heading": "_SidebarSection-heading_125qe_82", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_125qe_86" };

// lib/use-breadcrumbs.ts
init_react_import();
var import_react20 = require("react");
var convertPathDataToBreadcrumbs = (selectedItem, pathData, data) => {
  const id = selectedItem ? selectedItem == null ? void 0 : selectedItem.props.id : "";
  const currentPathData = pathData && id && pathData[id] ? __spreadValues({}, pathData[id]) : { label: "Page", path: [] };
  if (!id) {
    return [];
  }
  return currentPathData == null ? void 0 : currentPathData.path.reduce((acc, zoneCompound) => {
    const [area] = getZoneId(zoneCompound);
    if (area === rootDroppableId) {
      return [
        {
          label: "Page",
          selector: null
        }
      ];
    }
    const parentZoneCompound = acc.length > 0 ? acc[acc.length - 1].zoneCompound : rootDroppableId;
    let parentZone = data.content;
    if (parentZoneCompound && parentZoneCompound !== rootDroppableId) {
      parentZone = data.zones[parentZoneCompound];
    }
    if (!parentZone) {
      return acc;
    }
    const itemIndex = parentZone.findIndex(
      (queryItem) => queryItem.props.id === area
    );
    const item = parentZone[itemIndex];
    if (!item) {
      return acc;
    }
    return [
      ...acc,
      {
        label: item.type.toString(),
        selector: {
          index: itemIndex,
          zone: parentZoneCompound
        },
        zoneCompound
      }
    ];
  }, []);
};
var useBreadcrumbs = (renderCount) => {
  const {
    state: { data },
    selectedItem
  } = useAppContext();
  const dzContext = (0, import_react20.useContext)(dropZoneContext);
  return (0, import_react20.useMemo)(() => {
    const breadcrumbs = convertPathDataToBreadcrumbs(
      selectedItem,
      dzContext == null ? void 0 : dzContext.pathData,
      data
    );
    if (renderCount) {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
    return breadcrumbs;
  }, [selectedItem, dzContext == null ? void 0 : dzContext.pathData, renderCount]);
};

// components/SidebarSection/index.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var getClassName19 = get_class_name_factory_default("SidebarSection", styles_module_default13);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  noPadding,
  isLoading
}) => {
  const { setUi } = useAppContext();
  const breadcrumbs = useBreadcrumbs(1);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      className: getClassName19({ noBorderTop, noPadding }),
      style: { background },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: getClassName19("title"), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: getClassName19("breadcrumbs"), children: [
          showBreadcrumbs ? breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: getClassName19("breadcrumb"), children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
              "button",
              {
                type: "button",
                className: getClassName19("breadcrumbLabel"),
                onClick: () => setUi({ itemSelector: breadcrumb.selector }),
                children: breadcrumb.label
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(ChevronRight, { size: 16 })
          ] }, i)) : null,
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: getClassName19("heading"), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Heading, { rank: "2", size: "xs", children: title }) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: getClassName19("content"), children }),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: getClassName19("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Loader, { size: 32 }) })
      ]
    }
  );
};

// reducer/index.ts
init_react_import();

// reducer/data.ts
init_react_import();

// lib/insert.ts
init_react_import();
var insert = (list, index, item) => {
  const result = Array.from(list);
  result.splice(index, 0, item);
  return result;
};

// lib/remove.ts
init_react_import();
var remove = (list, index) => {
  const result = Array.from(list);
  result.splice(index, 1);
  return result;
};

// lib/reduce-related-zones.ts
init_react_import();
function reduceRelatedZones(item, data, fn) {
  return __spreadProps(__spreadValues({}, data), {
    zones: Object.keys(data.zones || {}).reduce(
      (acc, key) => {
        const [parentId] = getZoneId(key);
        if (parentId === item.props.id) {
          const zones = data.zones;
          return fn(acc, key, zones[key]);
        }
        return __spreadProps(__spreadValues({}, acc), { [key]: data.zones[key] });
      },
      {}
    )
  });
}
var findRelatedByZoneId = (zoneId, data) => {
  const [zoneParentId] = getZoneId(zoneId);
  return (data.zones[zoneId] || []).reduce(
    (acc, zoneItem) => {
      const related = findRelatedByItem(zoneItem, data);
      if (zoneItem.props.id === zoneParentId) {
        return __spreadProps(__spreadValues(__spreadValues({}, acc), related), { [zoneId]: zoneItem });
      }
      return __spreadValues(__spreadValues({}, acc), related);
    },
    {}
  );
};
var findRelatedByItem = (item, data) => {
  return Object.keys(data.zones || {}).reduce(
    (acc, zoneId) => {
      const [zoneParentId] = getZoneId(zoneId);
      if (item.props.id === zoneParentId) {
        const related = findRelatedByZoneId(zoneId, data);
        return __spreadProps(__spreadValues(__spreadValues({}, acc), related), {
          [zoneId]: data.zones[zoneId]
        });
      }
      return acc;
    },
    {}
  );
};
var removeRelatedZones = (item, data) => {
  const newData = __spreadValues({}, data);
  const related = findRelatedByItem(item, data);
  Object.keys(related).forEach((key) => {
    delete newData.zones[key];
  });
  return newData;
};
function duplicateRelatedZones(item, data, newId) {
  return reduceRelatedZones(item, data, (acc, key, zone) => {
    const dupedZone = zone.map((zoneItem) => __spreadProps(__spreadValues({}, zoneItem), {
      props: __spreadProps(__spreadValues({}, zoneItem.props), { id: generateId(zoneItem.type) })
    }));
    const dupeOfDupes = dupedZone.reduce(
      (dupeOfDupes2, item2, index) => __spreadValues(__spreadValues({}, dupeOfDupes2), duplicateRelatedZones(zone[index], data, item2.props.id).zones),
      acc
    );
    const [_, zoneId] = getZoneId(key);
    return __spreadProps(__spreadValues({}, dupeOfDupes), {
      [key]: zone,
      [`${newId}:${zoneId}`]: dupedZone
    });
  });
}

// reducer/data.ts
var zoneCache = {};
var addToZoneCache = (key, data) => {
  zoneCache[key] = data;
};
var replaceAction = (data, action) => {
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps(__spreadValues({}, data), {
      content: replace(data.content, action.destinationIndex, action.data)
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps(__spreadValues({}, newData), {
    zones: __spreadProps(__spreadValues({}, newData.zones), {
      [action.destinationZone]: replace(
        newData.zones[action.destinationZone],
        action.destinationIndex,
        action.data
      )
    })
  });
};
function insertAction(data, action, config) {
  const emptyComponentData = {
    type: action.componentType,
    props: __spreadProps(__spreadValues({}, config.components[action.componentType].defaultProps || {}), {
      id: action.id || generateId(action.componentType)
    })
  };
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps(__spreadValues({}, data), {
      content: insert(
        data.content,
        action.destinationIndex,
        emptyComponentData
      )
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps(__spreadValues({}, data), {
    zones: __spreadProps(__spreadValues({}, newData.zones), {
      [action.destinationZone]: insert(
        newData.zones[action.destinationZone],
        action.destinationIndex,
        emptyComponentData
      )
    })
  });
}
function reduceData(data, action, config) {
  if (action.type === "insert") {
    return insertAction(data, action, config);
  }
  if (action.type === "duplicate") {
    const item = getItem(
      { index: action.sourceIndex, zone: action.sourceZone },
      data
    );
    const newItem = __spreadProps(__spreadValues({}, item), {
      props: __spreadProps(__spreadValues({}, item.props), {
        id: generateId(item.type)
      })
    });
    const dataWithRelatedDuplicated = duplicateRelatedZones(
      item,
      data,
      newItem.props.id
    );
    if (action.sourceZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, dataWithRelatedDuplicated), {
        content: insert(data.content, action.sourceIndex + 1, newItem)
      });
    }
    return __spreadProps(__spreadValues({}, dataWithRelatedDuplicated), {
      zones: __spreadProps(__spreadValues({}, dataWithRelatedDuplicated.zones), {
        [action.sourceZone]: insert(
          dataWithRelatedDuplicated.zones[action.sourceZone],
          action.sourceIndex + 1,
          newItem
        )
      })
    });
  }
  if (action.type === "reorder") {
    if (action.destinationZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, data), {
        content: reorder(
          data.content,
          action.sourceIndex,
          action.destinationIndex
        )
      });
    }
    const newData = setupZone(data, action.destinationZone);
    return __spreadProps(__spreadValues({}, data), {
      zones: __spreadProps(__spreadValues({}, newData.zones), {
        [action.destinationZone]: reorder(
          newData.zones[action.destinationZone],
          action.sourceIndex,
          action.destinationIndex
        )
      })
    });
  }
  if (action.type === "move") {
    const newData = setupZone(
      setupZone(data, action.sourceZone),
      action.destinationZone
    );
    const item = getItem(
      { zone: action.sourceZone, index: action.sourceIndex },
      newData
    );
    if (action.sourceZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, newData), {
        content: remove(newData.content, action.sourceIndex),
        zones: __spreadProps(__spreadValues({}, newData.zones), {
          [action.destinationZone]: insert(
            newData.zones[action.destinationZone],
            action.destinationIndex,
            item
          )
        })
      });
    }
    if (action.destinationZone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, newData), {
        content: insert(newData.content, action.destinationIndex, item),
        zones: __spreadProps(__spreadValues({}, newData.zones), {
          [action.sourceZone]: remove(
            newData.zones[action.sourceZone],
            action.sourceIndex
          )
        })
      });
    }
    return __spreadProps(__spreadValues({}, newData), {
      zones: __spreadProps(__spreadValues({}, newData.zones), {
        [action.sourceZone]: remove(
          newData.zones[action.sourceZone],
          action.sourceIndex
        ),
        [action.destinationZone]: insert(
          newData.zones[action.destinationZone],
          action.destinationIndex,
          item
        )
      })
    });
  }
  if (action.type === "replace") {
    return replaceAction(data, action);
  }
  if (action.type === "remove") {
    const item = getItem({ index: action.index, zone: action.zone }, data);
    const dataWithRelatedRemoved = setupZone(
      removeRelatedZones(item, data),
      action.zone
    );
    if (action.zone === rootDroppableId) {
      return __spreadProps(__spreadValues({}, dataWithRelatedRemoved), {
        content: remove(data.content, action.index)
      });
    }
    return __spreadProps(__spreadValues({}, dataWithRelatedRemoved), {
      zones: __spreadProps(__spreadValues({}, dataWithRelatedRemoved.zones), {
        [action.zone]: remove(
          dataWithRelatedRemoved.zones[action.zone],
          action.index
        )
      })
    });
  }
  if (action.type === "registerZone") {
    if (zoneCache[action.zone]) {
      return __spreadProps(__spreadValues({}, data), {
        zones: __spreadProps(__spreadValues({}, data.zones), {
          [action.zone]: zoneCache[action.zone]
        })
      });
    }
    return setupZone(data, action.zone);
  }
  if (action.type === "unregisterZone") {
    const _zones = __spreadValues({}, data.zones || {});
    if (_zones[action.zone]) {
      zoneCache[action.zone] = _zones[action.zone];
      delete _zones[action.zone];
    }
    return __spreadProps(__spreadValues({}, data), { zones: _zones });
  }
  if (action.type === "setData") {
    if (typeof action.data === "object") {
      return __spreadValues(__spreadValues({}, data), action.data);
    }
    return __spreadValues(__spreadValues({}, data), action.data(data));
  }
  return data;
}

// reducer/state.ts
init_react_import();
var reduceUi = (ui, action) => {
  if (action.type === "setUi") {
    if (typeof action.ui === "object") {
      return __spreadValues(__spreadValues({}, ui), action.ui);
    }
    return __spreadValues(__spreadValues({}, ui), action.ui(ui));
  }
  return ui;
};

// reducer/actions.tsx
init_react_import();

// reducer/index.ts
function storeInterceptor(reducer, record, onAction) {
  return (state, action) => {
    const newAppState = reducer(state, action);
    const isValidType = ![
      "registerZone",
      "unregisterZone",
      "setData",
      "setUi",
      "set"
    ].includes(action.type);
    if (typeof action.recordHistory !== "undefined" ? action.recordHistory : isValidType) {
      if (record) record(newAppState);
    }
    onAction == null ? void 0 : onAction(action, newAppState, state);
    return newAppState;
  };
}
var setAction = (state, action) => {
  if (typeof action.state === "object") {
    return __spreadValues(__spreadValues({}, state), action.state);
  }
  return __spreadValues(__spreadValues({}, state), action.state(state));
};
function createReducer({
  config,
  record,
  onAction
}) {
  return storeInterceptor(
    (state, action) => {
      const data = reduceData(state.data, action, config);
      const ui = reduceUi(state.ui, action);
      if (action.type === "set") {
        return setAction(state, action);
      }
      return { data, ui };
    },
    record,
    onAction
  );
}

// lib/flush-zones.ts
init_react_import();
var flushZones = (appState) => {
  const containsZones = typeof appState.data.zones !== "undefined";
  if (containsZones) {
    Object.keys(appState.data.zones || {}).forEach((zone) => {
      addToZoneCache(zone, appState.data.zones[zone]);
    });
    return __spreadProps(__spreadValues({}, appState), {
      data: __spreadProps(__spreadValues({}, appState.data), {
        zones: {}
      })
    });
  }
  return appState;
};

// components/MenuBar/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/MenuBar/styles.module.css#css-module
init_react_import();
var styles_module_default14 = { "MenuBar": "_MenuBar_8pf8c_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_8pf8c_14", "MenuBar-inner": "_MenuBar-inner_8pf8c_29", "MenuBar-history": "_MenuBar-history_8pf8c_45" };

// components/MenuBar/index.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
var getClassName20 = get_class_name_factory_default("MenuBar", styles_module_default14);
function MenuBar({
  appState,
  dispatch,
  menuOpen = false,
  onPublish,
  renderHeaderActions,
  setMenuOpen
}) {
  const {
    history: { back, forward, historyStore }
  } = useAppContext();
  const { hasFuture = false, hasPast = false } = historyStore || {};
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "div",
    {
      className: getClassName20({ menuOpen }),
      onClick: (event) => {
        var _a;
        const element = event.target;
        if (window.matchMedia("(min-width: 638px)").matches) {
          return;
        }
        if (element.tagName === "A" && ((_a = element.getAttribute("href")) == null ? void 0 : _a.startsWith("#"))) {
          setMenuOpen(false);
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: getClassName20("inner"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)("div", { className: getClassName20("history"), children: [
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(IconButton, { title: "undo", disabled: !hasPast, onClick: back, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Undo2, { size: 21 }) }),
          /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(IconButton, { title: "redo", disabled: !hasFuture, onClick: forward, children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Redo2, { size: 21 }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_jsx_runtime26.Fragment, { children: renderHeaderActions && renderHeaderActions({
          state: appState,
          dispatch
        }) })
      ] })
    }
  );
}

// css-module:/home/sujit/Projects/puck/packages/core/components/Puck/styles.module.css#css-module
init_react_import();
var styles_module_default15 = { "Puck": "_Puck_1g88c_19", "Puck-portal": "_Puck-portal_1g88c_24", "PuckLayout": "_PuckLayout_1g88c_31", "PuckLayout-inner": "_PuckLayout-inner_1g88c_39", "PuckLayout--mounted": "_PuckLayout--mounted_1g88c_51", "PuckLayout--leftSideBarVisible": "_PuckLayout--leftSideBarVisible_1g88c_55", "PuckLayout--rightSideBarVisible": "_PuckLayout--rightSideBarVisible_1g88c_61", "PuckLayout-mounted": "_PuckLayout-mounted_1g88c_75", "PuckLayout-header": "_PuckLayout-header_1g88c_116", "PuckLayout-headerInner": "_PuckLayout-headerInner_1g88c_125", "PuckLayout-headerToggle": "_PuckLayout-headerToggle_1g88c_135", "PuckLayout-rightSideBarToggle": "_PuckLayout-rightSideBarToggle_1g88c_142", "PuckLayout-leftSideBarToggle": "_PuckLayout-leftSideBarToggle_1g88c_143", "PuckLayout-headerTitle": "_PuckLayout-headerTitle_1g88c_147", "PuckLayout-headerPath": "_PuckLayout-headerPath_1g88c_151", "PuckLayout-headerTools": "_PuckLayout-headerTools_1g88c_158", "PuckLayout-menuButton": "_PuckLayout-menuButton_1g88c_164", "PuckLayout--menuOpen": "_PuckLayout--menuOpen_1g88c_169", "PuckLayout-leftSideBar": "_PuckLayout-leftSideBar_1g88c_143", "PuckLayout-rightSideBar": "_PuckLayout-rightSideBar_1g88c_142" };

// components/Puck/components/Fields/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/Puck/components/Fields/styles.module.css#css-module
init_react_import();
var styles_module_default16 = { "PuckFields": "_PuckFields_jp3lw_1", "PuckFields--isLoading": "_PuckFields--isLoading_jp3lw_6", "PuckFields-loadingOverlay": "_PuckFields-loadingOverlay_jp3lw_10", "PuckFields-loadingOverlayInner": "_PuckFields-loadingOverlayInner_jp3lw_25" };

// components/Puck/components/Fields/index.tsx
var import_react22 = require("react");

// lib/use-parent.ts
init_react_import();
var import_react21 = require("react");
var useParent = (itemSelector) => {
  var _a;
  const { selectedItem, state } = useAppContext();
  const { pathData } = (0, import_react21.useContext)(dropZoneContext) || {};
  const item = itemSelector ? getItem(itemSelector, state.data) : selectedItem;
  const breadcrumbs = convertPathDataToBreadcrumbs(item, pathData, state.data);
  const lastItem = breadcrumbs[breadcrumbs.length - 1];
  const parent = (lastItem == null ? void 0 : lastItem.selector) ? (_a = getItem(lastItem.selector, state.data)) != null ? _a : null : null;
  return parent || null;
};

// components/Puck/components/Fields/index.tsx
var import_jsx_runtime27 = require("react/jsx-runtime");
var getClassName21 = get_class_name_factory_default("PuckFields", styles_module_default16);
var defaultPageFields = {
  title: { type: "text" }
};
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_jsx_runtime27.Fragment, { children });
};
var useResolvedFields = () => {
  var _a, _b;
  const { selectedItem, state, config } = useAppContext();
  const parent = useParent();
  const { data } = state;
  const rootFields = ((_a = config.root) == null ? void 0 : _a.fields) || defaultPageFields;
  const componentConfig = selectedItem ? config.components[selectedItem.type] : null;
  const defaultFields = (0, import_react22.useMemo)(
    () => (selectedItem ? componentConfig == null ? void 0 : componentConfig.fields : rootFields) || {},
    [selectedItem, rootFields, componentConfig == null ? void 0 : componentConfig.fields]
  );
  const rootProps = data.root.props || data.root;
  const [lastSelectedData, setLastSelectedData] = (0, import_react22.useState)({});
  const [resolvedFields, setResolvedFields] = (0, import_react22.useState)(defaultFields);
  const [fieldsLoading, setFieldsLoading] = (0, import_react22.useState)(false);
  const defaultResolveFields = (_componentData, _params) => defaultFields;
  const componentData = selectedItem ? selectedItem : { props: rootProps, readOnly: data.root.readOnly };
  const hasComponentResolver = selectedItem && (componentConfig == null ? void 0 : componentConfig.resolveFields);
  const hasRootResolver = !selectedItem && ((_b = config.root) == null ? void 0 : _b.resolveFields);
  const hasResolver = hasComponentResolver || hasRootResolver;
  const resolveFields = (0, import_react22.useCallback)(
    (..._0) => __async(void 0, [..._0], function* (fields = {}) {
      var _a2;
      const lastData = ((_a2 = lastSelectedData.props) == null ? void 0 : _a2.id) === componentData.props.id ? lastSelectedData : null;
      const changed = getChanged(componentData, lastData);
      setLastSelectedData(componentData);
      if (hasComponentResolver) {
        return yield componentConfig.resolveFields(
          componentData,
          {
            changed,
            fields,
            lastFields: resolvedFields,
            lastData,
            appState: state,
            parent
          }
        );
      }
      if (hasRootResolver) {
        return yield config.root.resolveFields(componentData, {
          changed,
          fields,
          lastFields: resolvedFields,
          lastData,
          appState: state,
          parent
        });
      }
      return defaultResolveFields(componentData, {
        changed,
        fields,
        lastFields: resolvedFields,
        lastData
      });
    }),
    [data, config, componentData, selectedItem, resolvedFields, state]
  );
  (0, import_react22.useEffect)(() => {
    if (hasResolver) {
      setFieldsLoading(true);
      resolveFields(defaultFields).then((fields) => {
        setResolvedFields(fields || {});
        setFieldsLoading(false);
      });
    } else {
      setResolvedFields(defaultFields);
    }
  }, [data, defaultFields, selectedItem, hasResolver]);
  return [resolvedFields, fieldsLoading];
};
var Fields = () => {
  var _a, _b;
  const {
    selectedItem,
    state,
    dispatch,
    config,
    resolveData,
    componentState,
    overrides
  } = useAppContext();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const [fields, fieldsResolving] = useResolvedFields();
  const { getPermissions } = useAppContext();
  const componentResolving = selectedItem ? ((_a = componentState[selectedItem == null ? void 0 : selectedItem.props.id]) == null ? void 0 : _a.loadingCount) > 0 : ((_b = componentState["puck-root"]) == null ? void 0 : _b.loadingCount) > 0;
  const isLoading = fieldsResolving || componentResolving;
  const rootProps = data.root.props || data.root;
  const Wrapper = (0, import_react22.useMemo)(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
    "form",
    {
      className: getClassName21(),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Wrapper, { isLoading, itemSelector, children: Object.keys(fields).map((fieldName) => {
          const field = fields[fieldName];
          if (!(field == null ? void 0 : field.type)) return null;
          const onChange = (value, updatedUi) => {
            var _a2, _b2;
            let currentProps;
            if (selectedItem) {
              currentProps = selectedItem.props;
            } else {
              currentProps = rootProps;
            }
            const newProps = __spreadProps(__spreadValues({}, currentProps), {
              [fieldName]: value
            });
            if (itemSelector) {
              const replaceActionData = {
                type: "replace",
                destinationIndex: itemSelector.index,
                destinationZone: itemSelector.zone || rootDroppableId,
                data: __spreadProps(__spreadValues({}, selectedItem), { props: newProps })
              };
              const replacedData = replaceAction(data, replaceActionData);
              const setActionData = {
                type: "set",
                state: {
                  data: __spreadValues(__spreadValues({}, data), replacedData),
                  ui: __spreadValues(__spreadValues({}, ui), updatedUi)
                }
              };
              if ((_a2 = config.components[selectedItem.type]) == null ? void 0 : _a2.resolveData) {
                resolveData(setAction(state, setActionData));
              } else {
                dispatch(__spreadProps(__spreadValues({}, setActionData), {
                  recordHistory: true
                }));
              }
            } else {
              if (data.root.props) {
                if ((_b2 = config.root) == null ? void 0 : _b2.resolveData) {
                  resolveData({
                    ui: __spreadValues(__spreadValues({}, ui), updatedUi),
                    data: __spreadProps(__spreadValues({}, data), {
                      root: { props: newProps }
                    })
                  });
                } else {
                  dispatch({
                    type: "set",
                    state: {
                      ui: __spreadValues(__spreadValues({}, ui), updatedUi),
                      data: __spreadProps(__spreadValues({}, data), {
                        root: { props: newProps }
                      })
                    },
                    recordHistory: true
                  });
                }
              } else {
                dispatch({
                  type: "setData",
                  data: { root: newProps }
                });
              }
            }
          };
          if (selectedItem && itemSelector) {
            const { readOnly = {} } = selectedItem;
            const { edit } = getPermissions({
              item: selectedItem
            });
            return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              AutoFieldPrivate,
              {
                field,
                name: fieldName,
                id: `${selectedItem.props.id}_${fieldName}`,
                readOnly: !edit || readOnly[fieldName],
                value: selectedItem.props[fieldName],
                onChange
              },
              `${selectedItem.props.id}_${fieldName}`
            );
          } else {
            const readOnly = data.root.readOnly || {};
            const { edit } = getPermissions({
              root: true
            });
            return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
              AutoFieldPrivate,
              {
                field,
                name: fieldName,
                id: `root_${fieldName}`,
                readOnly: !edit || readOnly[fieldName],
                value: rootProps[fieldName],
                onChange
              },
              `page_${fieldName}`
            );
          }
        }) }),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: getClassName21("loadingOverlay"), children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: getClassName21("loadingOverlayInner"), children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Loader, { size: 16 }) }) })
      ]
    }
  );
};

// components/Puck/components/Components/index.tsx
init_react_import();

// lib/use-component-list.tsx
init_react_import();
var import_react23 = require("react");

// components/ComponentList/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/ComponentList/styles.module.css#css-module
init_react_import();
var styles_module_default17 = { "ComponentList": "_ComponentList_odh9d_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_odh9d_5", "ComponentList-content": "_ComponentList-content_odh9d_9", "ComponentList-title": "_ComponentList-title_odh9d_17", "ComponentList-titleIcon": "_ComponentList-titleIcon_odh9d_53" };

// components/ComponentList/index.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var getClassName22 = get_class_name_factory_default("ComponentList", styles_module_default17);
var ComponentListItem = ({
  name,
  label,
  index
}) => {
  const { overrides, getPermissions } = useAppContext();
  const canInsert = getPermissions({
    type: name
  }).insert;
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    Drawer.Item,
    {
      label,
      name,
      index,
      isDragDisabled: !canInsert,
      children: overrides.componentItem
    }
  );
};
var ComponentList = ({
  children,
  title,
  id
}) => {
  const { config, state, setUi } = useAppContext();
  const { expanded = true } = state.ui.componentList[id] || {};
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: getClassName22({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      "button",
      {
        type: "button",
        className: getClassName22("title"),
        onClick: () => setUi({
          componentList: __spreadProps(__spreadValues({}, state.ui.componentList), {
            [id]: __spreadProps(__spreadValues({}, state.ui.componentList[id]), {
              expanded: !expanded
            })
          })
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: getClassName22("titleIcon"), children: expanded ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ChevronUp, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("div", { className: getClassName22("content"), children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Drawer, { droppableId: title, children: children || Object.keys(config.components).map((componentKey, i) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        ComponentListItem,
        {
          label: (_a = config.components[componentKey]["label"]) != null ? _a : componentKey,
          name: componentKey,
          index: i
        },
        componentKey
      );
    }) }) })
  ] });
};
ComponentList.Item = ComponentListItem;

// lib/use-component-list.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var useComponentList = (config, ui) => {
  const [componentList, setComponentList] = (0, import_react23.useState)();
  (0, import_react23.useEffect)(() => {
    var _a, _b, _c;
    if (Object.keys(ui.componentList).length > 0) {
      const matchedComponents = [];
      let _componentList;
      _componentList = Object.entries(ui.componentList).map(
        ([categoryKey, category]) => {
          if (category.visible === false || !category.components) {
            return null;
          }
          return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: category.components.map((componentName, i) => {
                var _a2;
                matchedComponents.push(componentName);
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  ComponentList.Item,
                  {
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    name: componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            categoryKey
          );
        }
      );
      const remainingComponents = Object.keys(config.components).filter(
        (component) => matchedComponents.indexOf(component) === -1
      );
      if (remainingComponents.length > 0 && !((_a = ui.componentList.other) == null ? void 0 : _a.components) && ((_b = ui.componentList.other) == null ? void 0 : _b.visible) !== false) {
        _componentList.push(
          /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
            ComponentList,
            {
              id: "other",
              title: ((_c = ui.componentList.other) == null ? void 0 : _c.title) || "Other",
              children: remainingComponents.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
                  ComponentList.Item,
                  {
                    name: componentName,
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            "other"
          )
        );
      }
      setComponentList(_componentList);
    }
  }, [config.categories, config.components, ui.componentList]);
  return componentList;
};

// components/Puck/components/Components/index.tsx
var import_react24 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Components = () => {
  const { config, state, overrides } = useAppContext();
  const componentList = useComponentList(config, state.ui);
  const Wrapper = (0, import_react24.useMemo)(() => overrides.components || "div", [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ComponentList, { id: "all" }) });
};

// components/Puck/components/Preview/index.tsx
init_react_import();
var import_react26 = require("react");

// components/AutoFrame/index.tsx
init_react_import();
var import_react25 = require("react");
var import_object_hash = __toESM(require("object-hash"));
var import_react_dom2 = require("react-dom");
var import_jsx_runtime31 = require("react/jsx-runtime");
var styleSelector = 'style, link[rel="stylesheet"]';
var collectStyles = (doc) => {
  const collected = [];
  doc.querySelectorAll(styleSelector).forEach((style) => {
    collected.push(style);
  });
  return collected;
};
var getStyleSheet = (el) => {
  return Array.from(document.styleSheets).find((ss) => {
    const ownerNode = ss.ownerNode;
    return ownerNode.href === el.href;
  });
};
var getStyles = (styleSheet) => {
  if (styleSheet) {
    try {
      return [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
    } catch (e) {
      console.warn(
        "Access to stylesheet %s is denied. Ignoring\u2026",
        styleSheet.href
      );
    }
  }
  return "";
};
var syncAttributes = (sourceElement, targetElement) => {
  const attributes = sourceElement.attributes;
  if ((attributes == null ? void 0 : attributes.length) > 0) {
    Array.from(attributes).forEach((attribute) => {
      targetElement.setAttribute(attribute.name, attribute.value);
    });
  }
};
var defer = (fn) => setTimeout(fn, 0);
var CopyHostStyles = ({
  children,
  debug = false,
  onStylesLoaded = () => null
}) => {
  const { document: doc, window: win } = useFrame();
  (0, import_react25.useEffect)(() => {
    if (!win || !doc) {
      return () => {
      };
    }
    let elements = [];
    const hashes = {};
    const lookupEl = (el) => elements.findIndex((elementMap) => elementMap.original === el);
    const mirrorEl = (el, inlineStyles = false) => __async(void 0, null, function* () {
      let mirror;
      if (el.nodeName === "LINK" && inlineStyles) {
        mirror = document.createElement("style");
        mirror.type = "text/css";
        let styleSheet = getStyleSheet(el);
        if (!styleSheet) {
          yield new Promise((resolve) => {
            const fn = () => {
              resolve();
              el.removeEventListener("load", fn);
            };
            el.addEventListener("load", fn);
          });
          styleSheet = getStyleSheet(el);
        }
        const styles = getStyles(styleSheet);
        if (!styles) {
          if (debug) {
            console.warn(
              `Tried to load styles for link element, but couldn't find them. Skipping...`
            );
          }
          return;
        }
        mirror.innerHTML = styles;
        mirror.setAttribute("data-href", el.getAttribute("href"));
      } else {
        mirror = el.cloneNode(true);
      }
      return mirror;
    });
    const addEl = (el) => __async(void 0, null, function* () {
      const index = lookupEl(el);
      if (index > -1) {
        if (debug)
          console.log(
            `Tried to add an element that was already mirrored. Updating instead...`
          );
        elements[index].mirror.innerText = el.innerText;
        return;
      }
      const mirror = yield mirrorEl(el);
      if (!mirror) {
        return;
      }
      const elHash = (0, import_object_hash.default)(mirror.outerHTML);
      if (hashes[elHash]) {
        if (debug)
          console.log(
            `iframe already contains element that is being mirrored. Skipping...`
          );
        return;
      }
      hashes[elHash] = true;
      doc.head.append(mirror);
      elements.push({ original: el, mirror });
      if (debug) console.log(`Added style node ${el.outerHTML}`);
    });
    const removeEl = (el) => {
      var _a, _b;
      const index = lookupEl(el);
      if (index === -1) {
        if (debug)
          console.log(
            `Tried to remove an element that did not exist. Skipping...`
          );
        return;
      }
      const elHash = (0, import_object_hash.default)(el.outerHTML);
      (_b = (_a = elements[index]) == null ? void 0 : _a.mirror) == null ? void 0 : _b.remove();
      delete hashes[elHash];
      if (debug) console.log(`Removed style node ${el.outerHTML}`);
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => addEl(el));
              }
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => removeEl(el));
              }
            }
          });
        }
      });
    });
    const parentDocument = win.parent.document;
    const collectedStyles = collectStyles(parentDocument);
    const hrefs = [];
    let stylesLoaded = 0;
    const parentHtml = parentDocument.getElementsByTagName("html")[0];
    syncAttributes(parentHtml, doc.documentElement);
    const parentBody = parentDocument.getElementsByTagName("body")[0];
    syncAttributes(parentBody, doc.body);
    Promise.all(
      collectedStyles.map((styleNode, i) => __async(void 0, null, function* () {
        if (styleNode.nodeName === "LINK") {
          const linkHref = styleNode.href;
          if (hrefs.indexOf(linkHref) > -1) {
            return;
          }
          hrefs.push(linkHref);
        }
        const mirror = yield mirrorEl(styleNode);
        if (!mirror) return;
        elements.push({ original: styleNode, mirror });
        return mirror;
      }))
    ).then((mirrorStyles) => {
      const filtered = mirrorStyles.filter(
        (el) => typeof el !== "undefined"
      );
      filtered.forEach((mirror) => {
        mirror.onload = () => {
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
        mirror.onerror = () => {
          console.warn(`AutoFrame couldn't load a stylesheet`);
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
      });
      doc.head.innerHTML = "";
      doc.head.append(...filtered);
      observer.observe(parentDocument.head, { childList: true, subtree: true });
      filtered.forEach((el) => {
        const elHash = (0, import_object_hash.default)(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_jsx_runtime31.Fragment, { children });
};
var autoFrameContext = (0, import_react25.createContext)({});
var useFrame = () => (0, import_react25.useContext)(autoFrameContext);
function AutoFrame(_a) {
  var _b = _a, {
    children,
    className,
    debug,
    id,
    onStylesLoaded
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "debug",
    "id",
    "onStylesLoaded"
  ]);
  const [loaded, setLoaded] = (0, import_react25.useState)(false);
  const [ctx, setCtx] = (0, import_react25.useState)({});
  const ref = (0, import_react25.useRef)(null);
  const [mountTarget, setMountTarget] = (0, import_react25.useState)();
  (0, import_react25.useEffect)(() => {
    var _a2;
    if (ref.current) {
      setCtx({
        document: ref.current.contentDocument || void 0,
        window: ref.current.contentWindow || void 0
      });
      setMountTarget((_a2 = ref.current.contentDocument) == null ? void 0 : _a2.getElementById("frame-root"));
    }
  }, [ref, loaded]);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    "iframe",
    __spreadProps(__spreadValues({}, props), {
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root"></div></body></html>',
      ref,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CopyHostStyles, { debug, onStylesLoaded, children: (0, import_react_dom2.createPortal)(children, mountTarget) }) })
    })
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;

// css-module:/home/sujit/Projects/puck/packages/core/components/Puck/components/Preview/styles.module.css#css-module
init_react_import();
var styles_module_default18 = { "PuckPreview": "_PuckPreview_rxwlr_1", "PuckPreview-frame": "_PuckPreview-frame_rxwlr_5" };

// components/Puck/components/Preview/index.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var getClassName23 = get_class_name_factory_default("PuckPreview", styles_module_default18);
var Preview = ({ id = "puck-preview" }) => {
  const { config, dispatch, state, setStatus, iframe, overrides } = useAppContext();
  const Page = (0, import_react26.useCallback)(
    (pageProps) => {
      var _a, _b;
      return ((_a = config.root) == null ? void 0 : _a.render) ? (_b = config.root) == null ? void 0 : _b.render(__spreadValues({
        id: "puck-root"
      }, pageProps)) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_jsx_runtime32.Fragment, { children: pageProps.children });
    },
    [config.root]
  );
  const Frame = (0, import_react26.useMemo)(() => overrides.iframe, [overrides]);
  const rootProps = state.data.root.props || state.data.root;
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    "div",
    {
      className: getClassName23(),
      id,
      onClick: () => {
        dispatch({ type: "setUi", ui: __spreadProps(__spreadValues({}, state.ui), { itemSelector: null }) });
      },
      children: iframe.enabled ? /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName23("frame"),
          "data-rfd-iframe": true,
          onStylesLoaded: () => {
            setStatus("READY");
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            const inner = /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
              Page,
              __spreadProps(__spreadValues({}, rootProps), {
                puck: { renderDropZone: DropZone, isEditing: true },
                editMode: true,
                children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(DropZone, { zone: rootDroppableId })
              })
            );
            if (Frame) {
              return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime32.jsx)("div", { id: "preview-frame", className: getClassName23("frame"), children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        Page,
        __spreadProps(__spreadValues({}, rootProps), {
          puck: { renderDropZone: DropZone, isEditing: true },
          editMode: true,
          children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(DropZone, { zone: rootDroppableId })
        })
      ) })
    }
  );
};

// components/Puck/components/Outline/index.tsx
init_react_import();

// lib/area-contains-zones.ts
init_react_import();

// lib/find-zones-for-area.ts
init_react_import();
var findZonesForArea = (data, area) => {
  const { zones = {} } = data;
  const result = Object.keys(zones).filter(
    (zoneId) => getZoneId(zoneId)[0] === area
  );
  return result.reduce((acc, key) => {
    return __spreadProps(__spreadValues({}, acc), { [key]: zones[key] });
  }, {});
};

// lib/area-contains-zones.ts
var areaContainsZones = (data, area) => {
  const zones = Object.keys(findZonesForArea(data, area));
  return zones.length > 0;
};

// components/LayerTree/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/LayerTree/styles.module.css#css-module
init_react_import();
var styles_module_default19 = { "LayerTree": "_LayerTree_1pgw8_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_1pgw8_11", "LayerTree-helper": "_LayerTree-helper_1pgw8_17", "Layer": "_Layer_1pgw8_1", "Layer-inner": "_Layer-inner_1pgw8_29", "Layer--containsZone": "_Layer--containsZone_1pgw8_35", "Layer-clickable": "_Layer-clickable_1pgw8_39", "Layer--isSelected": "_Layer--isSelected_1pgw8_61", "Layer-chevron": "_Layer-chevron_1pgw8_77", "Layer--childIsSelected": "_Layer--childIsSelected_1pgw8_78", "Layer-zones": "_Layer-zones_1pgw8_82", "Layer-title": "_Layer-title_1pgw8_96", "Layer-name": "_Layer-name_1pgw8_105", "Layer-icon": "_Layer-icon_1pgw8_111", "Layer-zoneIcon": "_Layer-zoneIcon_1pgw8_116" };

// lib/scroll-into-view.ts
init_react_import();
var scrollIntoView = (el) => {
  const oldStyle = __spreadValues({}, el.style);
  el.style.scrollMargin = "256px";
  if (el) {
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
    el.style.scrollMargin = oldStyle.scrollMargin || "";
  }
};

// components/LayerTree/index.tsx
var import_react27 = require("react");

// lib/is-child-of-zone.ts
init_react_import();
var isChildOfZone = (item, maybeChild, ctx) => {
  var _a;
  const { data, pathData = {} } = ctx || {};
  return maybeChild && data ? !!((_a = pathData[maybeChild.props.id]) == null ? void 0 : _a.path.find((zoneCompound) => {
    const [area] = getZoneId(zoneCompound);
    return area === item.props.id;
  })) : false;
};

// components/LayerTree/index.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var getClassName24 = get_class_name_factory_default("LayerTree", styles_module_default19);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default19);
var LayerTree = ({
  data,
  config,
  zoneContent,
  itemSelector,
  setItemSelector,
  zone,
  label
}) => {
  const zones = data.zones || {};
  const ctx = (0, import_react27.useContext)(dropZoneContext);
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_jsx_runtime33.Fragment, { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: getClassName24("zoneTitle"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassName24("zoneIcon"), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Layers, { size: "16" }) }),
      " ",
      label
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("ul", { className: getClassName24(), children: [
      zoneContent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassName24("helper"), children: "No items" }),
      zoneContent.map((item, i) => {
        var _a;
        const isSelected = (itemSelector == null ? void 0 : itemSelector.index) === i && (itemSelector.zone === zone || itemSelector.zone === rootDroppableId && !zone);
        const zonesForItem = findZonesForArea(data, item.props.id);
        const containsZone = Object.keys(zonesForItem).length > 0;
        const {
          setHoveringArea = () => {
          },
          setHoveringComponent = () => {
          },
          hoveringComponent
        } = ctx || {};
        const selectedItem = itemSelector && data ? getItem(itemSelector, data) : null;
        const isHovering = hoveringComponent === item.props.id;
        const childIsSelected = isChildOfZone(item, selectedItem, ctx);
        const componentConfig = config.components[item.type];
        const label2 = (_a = componentConfig == null ? void 0 : componentConfig["label"]) != null ? _a : item.type.toString();
        return /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
          "li",
          {
            className: getClassNameLayer({
              isSelected,
              isHovering,
              containsZone,
              childIsSelected
            }),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
                "button",
                {
                  type: "button",
                  className: getClassNameLayer("clickable"),
                  onClick: () => {
                    if (isSelected) {
                      setItemSelector(null);
                      return;
                    }
                    setItemSelector({
                      index: i,
                      zone
                    });
                    const id = zoneContent[i].props.id;
                    const frame = getFrame();
                    scrollIntoView(
                      frame == null ? void 0 : frame.querySelector(
                        `[data-rfd-drag-handle-draggable-id="draggable-${id}"]`
                      )
                    );
                  },
                  onMouseOver: (e) => {
                    e.stopPropagation();
                    setHoveringArea(item.props.id);
                    setHoveringComponent(item.props.id);
                  },
                  onMouseOut: (e) => {
                    e.stopPropagation();
                    setHoveringArea(null);
                    setHoveringComponent(null);
                  },
                  children: [
                    containsZone && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                      "div",
                      {
                        className: getClassNameLayer("chevron"),
                        title: isSelected ? "Collapse" : "Expand",
                        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(ChevronDown, { size: "12" })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)("div", { className: getClassNameLayer("title"), children: [
                      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassNameLayer("icon"), children: item.type === "Text" || item.type === "Heading" ? /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(Type, { size: "16" }) : /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(LayoutGrid, { size: "16" }) }),
                      /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassNameLayer("name"), children: label2 })
                    ] })
                  ]
                }
              ) }),
              containsZone && Object.keys(zonesForItem).map((zoneKey, idx) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)("div", { className: getClassNameLayer("zones"), children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                LayerTree,
                {
                  config,
                  data,
                  zoneContent: zones[zoneKey],
                  setItemSelector,
                  itemSelector,
                  zone: zoneKey,
                  label: getZoneId(zoneKey)[1]
                }
              ) }, idx))
            ]
          },
          `${item.props.id}_${i}`
        );
      })
    ] })
  ] });
};

// components/Puck/components/Outline/index.tsx
var import_react28 = require("react");
var import_jsx_runtime34 = require("react/jsx-runtime");
var Outline = () => {
  const { dispatch, state, overrides, config } = useAppContext();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const setItemSelector = (0, import_react28.useCallback)(
    (newItemSelector) => {
      dispatch({
        type: "setUi",
        ui: { itemSelector: newItemSelector }
      });
    },
    []
  );
  const Wrapper = (0, import_react28.useMemo)(() => overrides.outline || "div", [overrides]);
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Wrapper, { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(dropZoneContext.Consumer, { children: (ctx) => /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(import_jsx_runtime34.Fragment, { children: [
    (ctx == null ? void 0 : ctx.activeZones) && (ctx == null ? void 0 : ctx.activeZones[rootDroppableId]) && /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      LayerTree,
      {
        config,
        data,
        label: areaContainsZones(data, "root") ? rootDroppableId : "",
        zoneContent: data.content,
        setItemSelector,
        itemSelector
      }
    ),
    Object.entries(findZonesForArea(data, "root")).map(
      ([zoneKey, zone]) => {
        return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
          LayerTree,
          {
            config,
            data,
            label: zoneKey,
            zone: zoneKey,
            zoneContent: zone,
            setItemSelector,
            itemSelector
          },
          zoneKey
        );
      }
    )
  ] }) }) });
};

// lib/use-puck-history.ts
init_react_import();
var import_react_hotkeys_hook = require("react-hotkeys-hook");
function usePuckHistory({
  dispatch,
  initialAppState,
  historyStore
}) {
  const back = () => {
    var _a;
    if (historyStore.hasPast) {
      dispatch({
        type: "set",
        state: ((_a = historyStore.prevHistory) == null ? void 0 : _a.state) || initialAppState
      });
      historyStore.back();
    }
  };
  const forward = () => {
    if (historyStore.nextHistory) {
      dispatch({ type: "set", state: historyStore.nextHistory.state });
      historyStore.forward();
    }
  };
  const setHistories = (histories) => {
    var _a;
    dispatch({
      type: "set",
      state: ((_a = histories[histories.length - 1]) == null ? void 0 : _a.state) || initialAppState
    });
    historyStore.setHistories(histories);
  };
  const setHistoryIndex = (index) => {
    var _a;
    if (historyStore.histories.length > index) {
      dispatch({
        type: "set",
        state: ((_a = historyStore.histories[index]) == null ? void 0 : _a.state) || initialAppState
      });
      historyStore.setHistoryIndex(index);
    }
  };
  (0, import_react_hotkeys_hook.useHotkeys)("meta+z", back, { preventDefault: true });
  (0, import_react_hotkeys_hook.useHotkeys)("meta+shift+z", forward, { preventDefault: true });
  (0, import_react_hotkeys_hook.useHotkeys)("meta+y", forward, { preventDefault: true });
  return {
    back,
    forward,
    historyStore,
    setHistories,
    setHistoryIndex
  };
}

// lib/use-history-store.ts
init_react_import();
var import_react29 = require("react");
var import_use_debounce3 = require("use-debounce");
var EMPTY_HISTORY_INDEX = 0;
function useHistoryStore(initialHistory) {
  var _a, _b;
  const [histories, setHistories] = (0, import_react29.useState)(
    (_a = initialHistory == null ? void 0 : initialHistory.histories) != null ? _a : []
  );
  const updateHistories = (histories2) => {
    setHistories(histories2);
    setIndex(histories2.length - 1);
  };
  const [index, setIndex] = (0, import_react29.useState)(
    (_b = initialHistory == null ? void 0 : initialHistory.index) != null ? _b : EMPTY_HISTORY_INDEX
  );
  const hasPast = index > EMPTY_HISTORY_INDEX;
  const hasFuture = index < histories.length - 1;
  const currentHistory = histories[index];
  const nextHistory = hasFuture ? histories[index + 1] : null;
  const prevHistory = hasPast ? histories[index - 1] : null;
  const record = (0, import_use_debounce3.useDebouncedCallback)((state) => {
    const history = {
      state,
      id: generateId("history")
    };
    updateHistories([...histories.slice(0, index + 1), history]);
  }, 250);
  const back = () => {
    setIndex(index - 1);
  };
  const forward = () => {
    setIndex(index + 1);
  };
  return {
    index,
    currentHistory,
    hasPast,
    hasFuture,
    record,
    back,
    forward,
    nextHistory,
    prevHistory,
    histories,
    setHistories: updateHistories,
    setHistoryIndex: setIndex
  };
}

// components/Puck/components/Canvas/index.tsx
init_react_import();

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
init_react_import();

// ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
init_react_import();
var isProduction = process.env.NODE_ENV === "production";
var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  if (isProduction) {
    throw new Error(prefix);
  }
  var provided = typeof message === "function" ? message() : message;
  var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
  throw new Error(value);
}

// ../../node_modules/css-box-model/dist/css-box-model.esm.js
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? process.env.NODE_ENV !== "production" ? invariant(false, "Could not parse value [raw: " + raw + ", without suffix: " + value + "]") : invariant(false) : void 0;
  return result;
};
var calculateBox = function calculateBox2(borderBox, styles) {
  var margin = {
    top: parse(styles.marginTop),
    right: parse(styles.marginRight),
    bottom: parse(styles.marginBottom),
    left: parse(styles.marginLeft)
  };
  var padding = {
    top: parse(styles.paddingTop),
    right: parse(styles.paddingRight),
    bottom: parse(styles.paddingBottom),
    left: parse(styles.paddingLeft)
  };
  var border = {
    top: parse(styles.borderTopWidth),
    right: parse(styles.borderRightWidth),
    bottom: parse(styles.borderBottomWidth),
    left: parse(styles.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles = window.getComputedStyle(el);
  return calculateBox(borderBox, styles);
};

// components/Puck/components/Canvas/index.tsx
var import_react31 = require("react");

// components/ViewportControls/index.tsx
init_react_import();
var import_react30 = require("react");

// css-module:/home/sujit/Projects/puck/packages/core/components/ViewportControls/styles.module.css#css-module
init_react_import();
var styles_module_default20 = { "ViewportControls": "_ViewportControls_g1wgg_1", "ViewportControls-divider": "_ViewportControls-divider_g1wgg_15", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_g1wgg_21", "ViewportButton--isActive": "_ViewportButton--isActive_g1wgg_34", "ViewportButton-inner": "_ViewportButton-inner_g1wgg_34" };

// components/ViewportControls/index.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
var icons = {
  Smartphone: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(Monitor, { size: 16 })
};
var getClassName25 = get_class_name_factory_default("ViewportControls", styles_module_default20);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default20);
var ViewportButton = ({
  children,
  height = "auto",
  title,
  width,
  onClick
}) => {
  const { state } = useAppContext();
  const [isActive, setIsActive] = (0, import_react30.useState)(false);
  (0, import_react30.useEffect)(() => {
    setIsActive(width === state.ui.viewports.current.width);
  }, [width, state.ui.viewports.current.width]);
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: getClassNameButton({ isActive }), children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    IconButton,
    {
      title,
      disabled: isActive,
      onClick: (e) => {
        e.stopPropagation();
        onClick({ width, height });
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: getClassNameButton("inner"), children })
    }
  ) });
};
var defaultZoomOptions = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
  { label: "125%", value: 1.25 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2 }
];
var ViewportControls = ({
  autoZoom,
  zoom,
  onViewportChange,
  onZoom
}) => {
  var _a, _b;
  const { viewports } = useAppContext();
  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );
  const zoomOptions = (0, import_react30.useMemo)(
    () => [
      ...defaultZoomOptions,
      ...defaultsContainAutoZoom ? [] : [
        {
          value: autoZoom,
          label: `${(autoZoom * 100).toFixed(0)}% (Auto)`
        }
      ]
    ].filter((a) => a.value <= autoZoom).sort((a, b) => a.value > b.value ? 1 : -1),
    [autoZoom]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { className: getClassName25(), children: [
    viewports.map((viewport, i) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      ViewportButton,
      {
        height: viewport.height,
        width: viewport.width,
        title: viewport.label ? `Switch to ${viewport.label} viewport` : "Switch viewport",
        onClick: onViewportChange,
        children: typeof viewport.icon === "string" ? icons[viewport.icon] || viewport.icon : viewport.icon || icons.Smartphone
      },
      i
    )),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: getClassName25("divider") }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      IconButton,
      {
        title: "Zoom viewport out",
        disabled: zoom <= ((_a = zoomOptions[0]) == null ? void 0 : _a.value),
        onClick: (e) => {
          e.stopPropagation();
          onZoom(
            zoomOptions[Math.max(
              zoomOptions.findIndex((option) => option.value === zoom) - 1,
              0
            )].value
          );
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ZoomOut, { size: 16 })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      IconButton,
      {
        title: "Zoom viewport in",
        disabled: zoom >= ((_b = zoomOptions[zoomOptions.length - 1]) == null ? void 0 : _b.value),
        onClick: (e) => {
          e.stopPropagation();
          onZoom(
            zoomOptions[Math.min(
              zoomOptions.findIndex((option) => option.value === zoom) + 1,
              zoomOptions.length - 1
            )].value
          );
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ZoomIn, { size: 16 })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("div", { className: getClassName25("divider") }),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      "select",
      {
        className: getClassName25("zoomSelect"),
        value: zoom.toString(),
        onChange: (e) => {
          onZoom(parseFloat(e.currentTarget.value));
        },
        children: zoomOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
          "option",
          {
            value: option.value,
            label: option.label
          },
          option.label
        ))
      }
    )
  ] });
};

// css-module:/home/sujit/Projects/puck/packages/core/components/Puck/components/Canvas/styles.module.css#css-module
init_react_import();
var styles_module_default21 = { "PuckCanvas": "_PuckCanvas_avf1c_1", "PuckCanvas-controls": "_PuckCanvas-controls_avf1c_16", "PuckCanvas-inner": "_PuckCanvas-inner_avf1c_21", "PuckCanvas-root": "_PuckCanvas-root_avf1c_32", "PuckCanvas--ready": "_PuckCanvas--ready_avf1c_57", "PuckCanvas-loader": "_PuckCanvas-loader_avf1c_62", "PuckCanvas--showLoader": "_PuckCanvas--showLoader_avf1c_72" };

// lib/get-zoom-config.ts
init_react_import();
var RESET_ZOOM_SMALLER_THAN_FRAME = true;
var getZoomConfig = (uiViewport, frame, zoom) => {
  const box = getBox(frame);
  const { width: frameWidth, height: frameHeight } = box.contentBox;
  const viewportHeight = uiViewport.height === "auto" ? frameHeight : uiViewport.height;
  let rootHeight = 0;
  let autoZoom = 1;
  if (uiViewport.width > frameWidth || viewportHeight > frameHeight) {
    const widthZoom = Math.min(frameWidth / uiViewport.width, 1);
    const heightZoom = Math.min(frameHeight / viewportHeight, 1);
    zoom = widthZoom;
    if (widthZoom < heightZoom) {
      rootHeight = viewportHeight / zoom;
    } else {
      rootHeight = viewportHeight;
      zoom = heightZoom;
    }
    autoZoom = zoom;
  } else {
    if (RESET_ZOOM_SMALLER_THAN_FRAME) {
      autoZoom = 1;
      zoom = 1;
      rootHeight = viewportHeight;
    }
  }
  return { autoZoom, rootHeight, zoom };
};

// components/Puck/components/Canvas/index.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
var getClassName26 = get_class_name_factory_default("PuckCanvas", styles_module_default21);
var ZOOM_ON_CHANGE = true;
var Canvas = () => {
  const { status, iframe } = useAppContext();
  const { dispatch, state, overrides, setUi, zoomConfig, setZoomConfig } = useAppContext();
  const { ui } = state;
  const frameRef = (0, import_react31.useRef)(null);
  const [showTransition, setShowTransition] = (0, import_react31.useState)(false);
  const defaultRender = (0, import_react31.useMemo)(() => {
    const PuckDefault = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_jsx_runtime36.Fragment, { children });
    return PuckDefault;
  }, []);
  const CustomPreview = (0, import_react31.useMemo)(
    () => overrides.preview || defaultRender,
    [overrides]
  );
  const getFrameDimensions = (0, import_react31.useCallback)(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  const resetAutoZoom = (0, import_react31.useCallback)(
    (ui2 = state.ui) => {
      if (frameRef.current) {
        setZoomConfig(
          getZoomConfig(ui2.viewports.current, frameRef.current, zoomConfig.zoom)
        );
      }
    },
    [frameRef, zoomConfig, state.ui]
  );
  (0, import_react31.useEffect)(() => {
    setShowTransition(false);
    resetAutoZoom();
  }, [frameRef, ui.leftSideBarVisible, ui.rightSideBarVisible]);
  (0, import_react31.useEffect)(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (ui.viewports.current.height === "auto") {
      setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), {
        rootHeight: frameHeight / zoomConfig.zoom
      }));
    }
  }, [zoomConfig.zoom]);
  (0, import_react31.useEffect)(() => {
    if (ZOOM_ON_CHANGE) {
      setShowTransition(true);
      resetAutoZoom(ui);
    }
  }, [ui.viewports.current.width]);
  (0, import_react31.useEffect)(() => {
    const observer = new ResizeObserver(() => {
      setShowTransition(false);
      resetAutoZoom();
    });
    if (document.body) {
      observer.observe(document.body);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  const [showLoader, setShowLoader] = (0, import_react31.useState)(false);
  (0, import_react31.useEffect)(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    "div",
    {
      className: getClassName26({
        ready: status === "READY" || !iframe.enabled || !iframe.waitForStyles,
        showLoader
      }),
      onClick: () => dispatch({
        type: "setUi",
        ui: { itemSelector: null },
        recordHistory: true
      }),
      children: [
        ui.viewports.controlsVisible && iframe.enabled && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: getClassName26("controls"), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          ViewportControls,
          {
            autoZoom: zoomConfig.autoZoom,
            zoom: zoomConfig.zoom,
            onViewportChange: (viewport) => {
              setShowTransition(true);
              const uiViewport = __spreadProps(__spreadValues({}, viewport), {
                height: viewport.height || "auto",
                zoom: zoomConfig.zoom
              });
              const newUi = __spreadProps(__spreadValues({}, ui), {
                viewports: __spreadProps(__spreadValues({}, ui.viewports), { current: uiViewport })
              });
              setUi(newUi);
              if (ZOOM_ON_CHANGE) {
                resetAutoZoom(newUi);
              }
            },
            onZoom: (zoom) => {
              setShowTransition(true);
              setZoomConfig(__spreadProps(__spreadValues({}, zoomConfig), { zoom }));
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)("div", { className: getClassName26("inner"), ref: frameRef, children: [
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            "div",
            {
              className: getClassName26("root"),
              style: {
                width: iframe.enabled ? ui.viewports.current.width : "100%",
                height: zoomConfig.rootHeight,
                transform: iframe.enabled ? `scale(${zoomConfig.zoom})` : void 0,
                transition: showTransition ? "width 150ms ease-out, height 150ms ease-out, transform 150ms ease-out" : "",
                overflow: iframe.enabled ? void 0 : "auto"
              },
              suppressHydrationWarning: true,
              children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(CustomPreview, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Preview, {}) })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime36.jsx)("div", { className: getClassName26("loader"), children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Loader, { size: 24 }) })
        ] })
      ]
    }
  );
};

// lib/insert-component.ts
init_react_import();
var insertComponent = (componentType, zone, index, {
  config,
  dispatch,
  resolveData,
  state
}) => {
  const id = generateId(componentType);
  const insertActionData = {
    type: "insert",
    componentType,
    destinationIndex: index,
    destinationZone: zone,
    id
  };
  const insertedData = insertAction(state.data, insertActionData, config);
  dispatch(__spreadProps(__spreadValues({}, insertActionData), {
    // Dispatch insert rather set, as user's may rely on this via onAction
    // We must always record history here so the insert is added to user history
    // If the user has defined a resolveData method, they will end up with 2 history
    // entries on insert - one for the initial insert, and one when the data resolves
    recordHistory: true
  }));
  const itemSelector = {
    index,
    zone
  };
  dispatch({ type: "setUi", ui: { itemSelector } });
  resolveData({
    data: insertedData,
    ui: __spreadProps(__spreadValues({}, state.ui), { itemSelector })
  });
};

// lib/use-loaded-overrides.ts
init_react_import();
var import_react32 = require("react");

// lib/load-overrides.ts
init_react_import();
var loadOverrides = ({
  overrides,
  plugins
}) => {
  const collected = __spreadValues({}, overrides);
  plugins == null ? void 0 : plugins.forEach((plugin) => {
    Object.keys(plugin.overrides).forEach((_overridesType) => {
      const overridesType = _overridesType;
      if (overridesType === "fieldTypes") {
        const fieldTypes = plugin.overrides.fieldTypes;
        Object.keys(fieldTypes).forEach((fieldType) => {
          collected.fieldTypes = collected.fieldTypes || {};
          const childNode2 = collected.fieldTypes[fieldType];
          const Comp2 = (props) => fieldTypes[fieldType](__spreadProps(__spreadValues({}, props), {
            children: childNode2 ? childNode2(props) : props.children
          }));
          collected.fieldTypes[fieldType] = Comp2;
        });
        return;
      }
      const childNode = collected[overridesType];
      const Comp = (props) => plugin.overrides[overridesType](__spreadProps(__spreadValues({}, props), {
        children: childNode ? childNode(props) : props.children
      }));
      collected[overridesType] = Comp;
    });
  });
  return collected;
};

// lib/use-loaded-overrides.ts
var useLoadedOverrides = ({
  overrides,
  plugins
}) => {
  return (0, import_react32.useMemo)(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};

// components/DefaultOverride/index.tsx
init_react_import();
var import_jsx_runtime37 = require("react/jsx-runtime");
var DefaultOverride = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children });

// components/Puck/index.tsx
var import_jsx_runtime38 = require("react/jsx-runtime");
var getClassName27 = get_class_name_factory_default("Puck", styles_module_default15);
var getLayoutClassName = get_class_name_factory_default("PuckLayout", styles_module_default15);
function Puck({
  children,
  config,
  data: initialData,
  ui: initialUi,
  onChange,
  onPublish,
  onAction,
  permissions = {},
  plugins,
  overrides,
  renderHeader,
  renderHeaderActions,
  headerTitle,
  headerPath,
  viewports = defaultViewports,
  iframe: _iframe,
  dnd,
  initialHistory: _initialHistory
}) {
  var _a;
  const iframe = __spreadValues({
    enabled: true,
    waitForStyles: true
  }, _iframe);
  const [generatedAppState] = (0, import_react33.useState)(() => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i;
    const initial = __spreadValues(__spreadValues({}, defaultAppState.ui), initialUi);
    let clientUiState = {};
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 638px)").matches) {
        clientUiState = __spreadProps(__spreadValues({}, clientUiState), {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        });
      }
      const viewportWidth = window.innerWidth;
      const viewportDifferences = Object.entries(viewports).map(([key, value]) => ({
        key,
        diff: Math.abs(viewportWidth - value.width)
      })).sort((a, b) => a.diff > b.diff ? 1 : -1);
      const closestViewport = viewportDifferences[0].key;
      if (iframe.enabled) {
        clientUiState = __spreadProps(__spreadValues({}, clientUiState), {
          viewports: __spreadProps(__spreadValues({}, initial.viewports), {
            current: __spreadProps(__spreadValues({}, initial.viewports.current), {
              height: ((_b = (_a2 = initialUi == null ? void 0 : initialUi.viewports) == null ? void 0 : _a2.current) == null ? void 0 : _b.height) || ((_c = viewports[closestViewport]) == null ? void 0 : _c.height) || "auto",
              width: ((_e = (_d = initialUi == null ? void 0 : initialUi.viewports) == null ? void 0 : _d.current) == null ? void 0 : _e.width) || ((_f = viewports[closestViewport]) == null ? void 0 : _f.width)
            })
          })
        });
      }
    }
    if (Object.keys((initialData == null ? void 0 : initialData.root) || {}).length > 0 && !((_g = initialData == null ? void 0 : initialData.root) == null ? void 0 : _g.props)) {
      console.error(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }
    const rootProps2 = ((_h = initialData == null ? void 0 : initialData.root) == null ? void 0 : _h.props) || (initialData == null ? void 0 : initialData.root) || {};
    const defaultedRootProps = __spreadValues(__spreadValues({}, (_i = config.root) == null ? void 0 : _i.defaultProps), rootProps2);
    return __spreadProps(__spreadValues({}, defaultAppState), {
      data: __spreadProps(__spreadValues({}, initialData), {
        root: __spreadProps(__spreadValues({}, initialData == null ? void 0 : initialData.root), { props: defaultedRootProps }),
        content: initialData.content || []
      }),
      ui: __spreadProps(__spreadValues(__spreadValues({}, initial), clientUiState), {
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories ? Object.entries(config.categories).reduce(
          (acc, [categoryName, category]) => {
            return __spreadProps(__spreadValues({}, acc), {
              [categoryName]: {
                title: category.title,
                components: category.components,
                expanded: category.defaultExpanded,
                visible: category.visible
              }
            });
          },
          {}
        ) : {}
      })
    });
  });
  const { appendData = true } = _initialHistory || {};
  const histories = [
    ...(_initialHistory == null ? void 0 : _initialHistory.histories) || [],
    ...appendData ? [{ state: generatedAppState }] : []
  ].map((history2) => __spreadProps(__spreadValues({}, history2), {
    // Inject default data to enable partial history injections
    state: __spreadValues(__spreadValues({}, generatedAppState), history2.state)
  }));
  const initialHistoryIndex = (_initialHistory == null ? void 0 : _initialHistory.index) || histories.length - 1;
  const initialAppState = histories[initialHistoryIndex].state;
  const historyStore = useHistoryStore({
    histories,
    index: initialHistoryIndex
  });
  const [reducer] = (0, import_react33.useState)(
    () => createReducer({
      config,
      record: historyStore.record,
      onAction
    })
  );
  const [appState, dispatch] = (0, import_react33.useReducer)(
    reducer,
    flushZones(initialAppState)
  );
  const { data, ui } = appState;
  const history = usePuckHistory({ dispatch, initialAppState, historyStore });
  const [menuOpen, setMenuOpen] = (0, import_react33.useState)(false);
  const { itemSelector, leftSideBarVisible, rightSideBarVisible } = ui;
  const setItemSelector = (0, import_react33.useCallback)(
    (newItemSelector) => {
      if (newItemSelector === itemSelector) return;
      dispatch({
        type: "setUi",
        ui: { itemSelector: newItemSelector },
        recordHistory: true
      });
    },
    [itemSelector]
  );
  const selectedItem = itemSelector ? getItem(itemSelector, data) : null;
  (0, import_react33.useEffect)(() => {
    if (onChange) onChange(data);
  }, [data]);
  const { onDragStartOrUpdate, placeholderStyle } = usePlaceholderStyle();
  const [draggedItem, setDraggedItem] = (0, import_react33.useState)();
  const rootProps = data.root.props || data.root;
  const toggleSidebars = (0, import_react33.useCallback)(
    (sidebar) => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible = sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar = sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
      dispatch({
        type: "setUi",
        ui: __spreadValues({
          [`${sidebar}SideBarVisible`]: !sideBarVisible
        }, !widerViewport ? { [oppositeSideBar]: false } : {})
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );
  (0, import_react33.useEffect)(() => {
    if (!window.matchMedia("(min-width: 638px)").matches) {
      dispatch({
        type: "setUi",
        ui: {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        }
      });
    }
    const handleResize = () => {
      if (!window.matchMedia("(min-width: 638px)").matches) {
        dispatch({
          type: "setUi",
          ui: (ui2) => __spreadValues(__spreadValues({}, ui2), ui2.rightSideBarVisible ? { leftSideBarVisible: false } : {})
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const defaultHeaderRender = (0, import_react33.useMemo)(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"
      );
      const RenderHeader = (_a2) => {
        var _b = _a2, { actions } = _b, props = __objRest(_b, ["actions"]);
        const Comp = renderHeader;
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState, children: actions }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const defaultHeaderActionsRender = (0, import_react33.useMemo)(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Comp, __spreadProps(__spreadValues({}, props), { dispatch, state: appState }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const loadedOverrides = useLoadedOverrides({
    overrides,
    plugins
  });
  const CustomPuck = (0, import_react33.useMemo)(
    () => loadedOverrides.puck || DefaultOverride,
    [loadedOverrides]
  );
  const CustomHeader = (0, import_react33.useMemo)(
    () => loadedOverrides.header || defaultHeaderRender,
    [loadedOverrides]
  );
  const CustomHeaderActions = (0, import_react33.useMemo)(
    () => loadedOverrides.headerActions || defaultHeaderActionsRender,
    [loadedOverrides]
  );
  const [mounted, setMounted] = (0, import_react33.useState)(false);
  (0, import_react33.useEffect)(() => {
    setMounted(true);
  }, []);
  const selectedComponentConfig = selectedItem && config.components[selectedItem.type];
  const selectedComponentLabel = selectedItem ? (_a = selectedComponentConfig == null ? void 0 : selectedComponentConfig["label"]) != null ? _a : selectedItem.type.toString() : "";
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: `Puck ${getClassName27()}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      AppProvider,
      {
        value: {
          state: appState,
          dispatch,
          config,
          plugins: plugins || [],
          overrides: loadedOverrides,
          history,
          viewports,
          iframe,
          globalPermissions: __spreadValues({
            delete: true,
            drag: true,
            duplicate: true,
            insert: true,
            edit: true
          }, permissions),
          getPermissions: () => ({}),
          refreshPermissions: () => null
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(appContext.Consumer, { children: ({ resolveData }) => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          DragDropContext,
          {
            autoScrollerOptions: { disabled: dnd == null ? void 0 : dnd.disableAutoScroll },
            onDragUpdate: (update) => {
              setDraggedItem(__spreadValues(__spreadValues({}, draggedItem), update));
              onDragStartOrUpdate(update);
            },
            onBeforeDragStart: (start) => {
              onDragStartOrUpdate(start);
              setItemSelector(null);
              dispatch({ type: "setUi", ui: { isDragging: true } });
            },
            onDragEnd: (droppedItem) => {
              setDraggedItem(void 0);
              dispatch({ type: "setUi", ui: { isDragging: false } });
              if (!droppedItem.destination) {
                return;
              }
              if (droppedItem.source.droppableId.startsWith("component-list") && droppedItem.destination) {
                const [_, componentType] = droppedItem.draggableId.split("::");
                insertComponent(
                  componentType || droppedItem.draggableId,
                  droppedItem.destination.droppableId,
                  droppedItem.destination.index,
                  { config, dispatch, resolveData, state: appState }
                );
                return;
              } else {
                const { source, destination } = droppedItem;
                if (source.droppableId === destination.droppableId) {
                  dispatch({
                    type: "reorder",
                    sourceIndex: source.index,
                    destinationIndex: destination.index,
                    destinationZone: destination.droppableId
                  });
                } else {
                  dispatch({
                    type: "move",
                    sourceZone: source.droppableId,
                    sourceIndex: source.index,
                    destinationIndex: destination.index,
                    destinationZone: destination.droppableId
                  });
                }
                setItemSelector({
                  index: destination.index,
                  zone: destination.droppableId
                });
              }
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
              DropZoneProvider,
              {
                value: {
                  data,
                  itemSelector,
                  setItemSelector,
                  config,
                  dispatch,
                  draggedItem,
                  placeholderStyle,
                  mode: "edit",
                  areaId: "root"
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CustomPuck, { children: children || /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                  "div",
                  {
                    className: getLayoutClassName({
                      leftSideBarVisible,
                      menuOpen,
                      mounted,
                      rightSideBarVisible
                    }),
                    children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: getLayoutClassName("inner"), children: [
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                        CustomHeader,
                        {
                          actions: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_jsx_runtime38.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CustomHeaderActions, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                            Button,
                            {
                              onClick: () => {
                                onPublish && onPublish(data);
                              },
                              icon: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Globe, { size: "14px" }),
                              children: "Publish"
                            }
                          ) }) }),
                          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("header", { className: getLayoutClassName("header"), children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: getLayoutClassName("headerInner"), children: [
                            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
                              "div",
                              {
                                className: getLayoutClassName("headerToggle"),
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                    "div",
                                    {
                                      className: getLayoutClassName(
                                        "leftSideBarToggle"
                                      ),
                                      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                        IconButton,
                                        {
                                          onClick: () => {
                                            toggleSidebars("left");
                                          },
                                          title: "Toggle left sidebar",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PanelLeft, { focusable: "false" })
                                        }
                                      )
                                    }
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                    "div",
                                    {
                                      className: getLayoutClassName(
                                        "rightSideBarToggle"
                                      ),
                                      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                        IconButton,
                                        {
                                          onClick: () => {
                                            toggleSidebars("right");
                                          },
                                          title: "Toggle right sidebar",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(PanelRight, { focusable: "false" })
                                        }
                                      )
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                              "div",
                              {
                                className: getLayoutClassName("headerTitle"),
                                children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(Heading, { rank: "2", size: "xs", children: [
                                  headerTitle || rootProps.title || "Page",
                                  headerPath && /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
                                    " ",
                                    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                      "code",
                                      {
                                        className: getLayoutClassName(
                                          "headerPath"
                                        ),
                                        children: headerPath
                                      }
                                    )
                                  ] })
                                ] })
                              }
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
                              "div",
                              {
                                className: getLayoutClassName("headerTools"),
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                    "div",
                                    {
                                      className: getLayoutClassName("menuButton"),
                                      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                        IconButton,
                                        {
                                          onClick: () => {
                                            return setMenuOpen(!menuOpen);
                                          },
                                          title: "Toggle menu bar",
                                          children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(ChevronUp, { focusable: "false" }) : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(ChevronDown, { focusable: "false" })
                                        }
                                      )
                                    }
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                    MenuBar,
                                    {
                                      appState,
                                      dispatch,
                                      onPublish,
                                      menuOpen,
                                      renderHeaderActions: () => /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(CustomHeaderActions, { children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                                        Button,
                                        {
                                          onClick: () => {
                                            onPublish && onPublish(data);
                                          },
                                          icon: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Globe, { size: "14px" }),
                                          children: "Publish"
                                        }
                                      ) }),
                                      setMenuOpen
                                    }
                                  )
                                ]
                              }
                            )
                          ] }) })
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: getLayoutClassName("leftSideBar"), children: [
                        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SidebarSection, { title: "Components", noBorderTop: true, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Components, {}) }),
                        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SidebarSection, { title: "Outline", children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Outline, {}) })
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Canvas, {}),
                      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: getLayoutClassName("rightSideBar"), children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
                        SidebarSection,
                        {
                          noPadding: true,
                          noBorderTop: true,
                          showBreadcrumbs: true,
                          title: selectedItem ? selectedComponentLabel : "Page",
                          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Fields, {})
                        }
                      ) })
                    ] })
                  }
                ) })
              }
            )
          }
        ) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { id: "puck-portal-root", className: getClassName27("portal") })
  ] });
}
Puck.Components = Components;
Puck.Fields = Fields;
Puck.Outline = Outline;
Puck.Preview = Preview;

// components/Render/index.tsx
init_react_import();
var import_jsx_runtime39 = require("react/jsx-runtime");
function Render({
  config,
  data
}) {
  var _a;
  const defaultedData = __spreadProps(__spreadValues({}, data), {
    root: data.root || {},
    content: data.content || []
  });
  const rootProps = defaultedData.root.props || defaultedData.root;
  const title = (rootProps == null ? void 0 : rootProps.title) || "";
  if ((_a = config.root) == null ? void 0 : _a.render) {
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DropZoneProvider, { value: { data: defaultedData, config, mode: "render" }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      config.root.render,
      __spreadProps(__spreadValues({}, rootProps), {
        puck: {
          renderDropZone: DropZone,
          isEditing: false
        },
        title,
        editMode: false,
        id: "puck-root",
        children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DropZone, { zone: rootDroppableId })
      })
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DropZoneProvider, { value: { data: defaultedData, config, mode: "render" }, children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DropZone, { zone: rootDroppableId }) });
}

// lib/migrate.ts
init_react_import();
var migrations = [
  // Migrate root to root.props
  (data) => {
    const rootProps = data.root.props || data.root;
    if (Object.keys(data.root).length > 0 && !data.root.props) {
      console.warn(
        "Migration applied: Root props moved from `root` to `root.props`."
      );
      return __spreadProps(__spreadValues({}, data), {
        root: {
          props: __spreadValues({}, rootProps)
        }
      });
    }
    return data;
  }
];
function migrate(data) {
  return migrations == null ? void 0 : migrations.reduce((acc, migration) => migration(acc), data);
}

// lib/transform-props.ts
init_react_import();

// lib/default-data.ts
init_react_import();
var defaultData = (data) => __spreadProps(__spreadValues({}, data), {
  root: data.root || {},
  content: data.content || []
});

// lib/transform-props.ts
function transformProps(data, propTransforms) {
  const mapItem = (item) => {
    if (propTransforms[item.type]) {
      return __spreadProps(__spreadValues({}, item), {
        props: propTransforms[item.type](item.props)
      });
    }
    return item;
  };
  const defaultedData = defaultData(data);
  const rootProps = defaultedData.root.props || defaultedData.root;
  let newRoot = __spreadValues({}, defaultedData.root);
  if (propTransforms["root"]) {
    if (defaultedData.root.props) {
      newRoot.props = propTransforms["root"](rootProps);
    } else {
      newRoot = propTransforms["root"](rootProps);
    }
  }
  const afterPropTransforms = __spreadProps(__spreadValues({}, defaultedData), {
    root: newRoot,
    content: defaultedData.content.map(mapItem),
    zones: Object.keys(data.zones || {}).reduce(
      (acc, zoneKey) => __spreadProps(__spreadValues({}, acc), {
        [zoneKey]: data.zones[zoneKey].map(mapItem)
      }),
      {}
    )
  });
  return afterPropTransforms;
}

// lib/resolve-all-data.ts
init_react_import();
function resolveAllData(data, config, onResolveStart, onResolveEnd) {
  return __async(this, null, function* () {
    const defaultedData = defaultData(data);
    const dynamicRoot = yield resolveRootData(defaultedData, config);
    const { zones = {} } = data;
    const zoneKeys = Object.keys(zones);
    const resolvedZones = {};
    for (let i = 0; i < zoneKeys.length; i++) {
      const zoneKey = zoneKeys[i];
      resolvedZones[zoneKey] = yield resolveAllComponentData(
        zones[zoneKey],
        config,
        onResolveStart,
        onResolveEnd
      );
    }
    return __spreadProps(__spreadValues({}, defaultedData), {
      root: dynamicRoot,
      content: yield resolveAllComponentData(
        defaultedData.content,
        config,
        onResolveStart,
        onResolveEnd
      ),
      zones: resolvedZones
    });
  });
}

// lib/use-puck.ts
init_react_import();
var usePuck = () => {
  const {
    state: appState,
    config,
    history,
    dispatch,
    selectedItem: currentItem,
    getPermissions,
    refreshPermissions
  } = useAppContext();
  return {
    appState,
    config,
    dispatch,
    getPermissions,
    refreshPermissions,
    history: {
      back: history.back,
      forward: history.forward,
      setHistories: history.setHistories,
      setHistoryIndex: history.setHistoryIndex,
      hasPast: history.historyStore.hasPast,
      hasFuture: history.historyStore.hasFuture,
      histories: history.historyStore.histories,
      index: history.historyStore.index,
      historyStore: history.historyStore
    },
    selectedItem: currentItem || null
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Action,
  ActionBar,
  AutoField,
  Button,
  Drawer,
  DropZone,
  DropZoneProvider,
  FieldLabel,
  Group,
  IconButton,
  Puck,
  Render,
  dropZoneContext,
  migrate,
  overrideKeys,
  resolveAllData,
  transformProps,
  usePuck
});
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check-circle.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/copy.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hash.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layers.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layout-grid.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/link.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/monitor.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/more-vertical.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-left.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-right.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/redo-2.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sliders-horizontal.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/smartphone.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/tablet.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/type.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/undo-2.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/unlock.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-in.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-out.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.298.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
