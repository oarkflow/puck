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

// ../tsup-config/react-import.js
import React from "react";
var init_react_import = __esm({
  "../tsup-config/react-import.js"() {
    "use strict";
  }
});

// ../../node_modules/classnames/index.js
var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports, module) {
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
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
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

// ../../node_modules/ua-parser-js/src/ua-parser.js
var require_ua_parser = __commonJS({
  "../../node_modules/ua-parser-js/src/ua-parser.js"(exports, module) {
    "use strict";
    init_react_import();
    (function(window2, undefined2) {
      "use strict";
      var LIBVERSION = "1.0.37", EMPTY = "", UNKNOWN = "?", FUNC_TYPE = "function", UNDEF_TYPE = "undefined", OBJ_TYPE = "object", STR_TYPE = "string", MAJOR = "major", MODEL = "model", NAME = "name", TYPE = "type", VENDOR = "vendor", VERSION = "version", ARCHITECTURE = "architecture", CONSOLE = "console", MOBILE = "mobile", TABLET = "tablet", SMARTTV = "smarttv", WEARABLE = "wearable", EMBEDDED = "embedded", UA_MAX_LENGTH = 500;
      var AMAZON = "Amazon", APPLE = "Apple", ASUS = "ASUS", BLACKBERRY = "BlackBerry", BROWSER = "Browser", CHROME = "Chrome", EDGE = "Edge", FIREFOX = "Firefox", GOOGLE = "Google", HUAWEI = "Huawei", LG = "LG", MICROSOFT = "Microsoft", MOTOROLA = "Motorola", OPERA = "Opera", SAMSUNG = "Samsung", SHARP = "Sharp", SONY = "Sony", XIAOMI = "Xiaomi", ZEBRA = "Zebra", FACEBOOK = "Facebook", CHROMIUM_OS = "Chromium OS", MAC_OS = "Mac OS";
      var extend = function(regexes2, extensions) {
        var mergedRegexes = {};
        for (var i in regexes2) {
          if (extensions[i] && extensions[i].length % 2 === 0) {
            mergedRegexes[i] = extensions[i].concat(regexes2[i]);
          } else {
            mergedRegexes[i] = regexes2[i];
          }
        }
        return mergedRegexes;
      }, enumerize = function(arr) {
        var enums = {};
        for (var i = 0; i < arr.length; i++) {
          enums[arr[i].toUpperCase()] = arr[i];
        }
        return enums;
      }, has = function(str1, str2) {
        return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
      }, lowerize = function(str) {
        return str.toLowerCase();
      }, majorize = function(version) {
        return typeof version === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split(".")[0] : undefined2;
      }, trim = function(str, len) {
        if (typeof str === STR_TYPE) {
          str = str.replace(/^\s\s*/, EMPTY);
          return typeof len === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
        }
      };
      var rgxMapper = function(ua, arrays) {
        var i = 0, j, k, p, q, matches, match;
        while (i < arrays.length && !matches) {
          var regex = arrays[i], props = arrays[i + 1];
          j = k = 0;
          while (j < regex.length && !matches) {
            if (!regex[j]) {
              break;
            }
            matches = regex[j++].exec(ua);
            if (!!matches) {
              for (p = 0; p < props.length; p++) {
                match = matches[++k];
                q = props[p];
                if (typeof q === OBJ_TYPE && q.length > 0) {
                  if (q.length === 2) {
                    if (typeof q[1] == FUNC_TYPE) {
                      this[q[0]] = q[1].call(this, match);
                    } else {
                      this[q[0]] = q[1];
                    }
                  } else if (q.length === 3) {
                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                      this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined2;
                    } else {
                      this[q[0]] = match ? match.replace(q[1], q[2]) : undefined2;
                    }
                  } else if (q.length === 4) {
                    this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined2;
                  }
                } else {
                  this[q] = match ? match : undefined2;
                }
              }
            }
          }
          i += 2;
        }
      }, strMapper = function(str, map) {
        for (var i in map) {
          if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
            for (var j = 0; j < map[i].length; j++) {
              if (has(map[i][j], str)) {
                return i === UNKNOWN ? undefined2 : i;
              }
            }
          } else if (has(map[i], str)) {
            return i === UNKNOWN ? undefined2 : i;
          }
        }
        return str;
      };
      var oldSafariMap = {
        "1.0": "/8",
        "1.2": "/1",
        "1.3": "/3",
        "2.0": "/412",
        "2.0.2": "/416",
        "2.0.3": "/417",
        "2.0.4": "/419",
        "?": "/"
      }, windowsVersionMap = {
        "ME": "4.90",
        "NT 3.11": "NT3.51",
        "NT 4.0": "NT4.0",
        "2000": "NT 5.0",
        "XP": ["NT 5.1", "NT 5.2"],
        "Vista": "NT 6.0",
        "7": "NT 6.1",
        "8": "NT 6.2",
        "8.1": "NT 6.3",
        "10": ["NT 6.4", "NT 10.0"],
        "RT": "ARM"
      };
      var regexes = {
        browser: [
          [
            /\b(?:crmo|crios)\/([\w\.]+)/i
            // Chrome for Android/iOS
          ],
          [VERSION, [NAME, "Chrome"]],
          [
            /edg(?:e|ios|a)?\/([\w\.]+)/i
            // Microsoft Edge
          ],
          [VERSION, [NAME, "Edge"]],
          [
            // Presto based
            /(opera mini)\/([-\w\.]+)/i,
            // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
            // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
            // Opera
          ],
          [NAME, VERSION],
          [
            /opios[\/ ]+([\w\.]+)/i
            // Opera mini on iphone >= 8.0
          ],
          [VERSION, [NAME, OPERA + " Mini"]],
          [
            /\bopr\/([\w\.]+)/i
            // Opera Webkit
          ],
          [VERSION, [NAME, OPERA]],
          [
            // Mixed
            /\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i
            // Baidu
          ],
          [VERSION, [NAME, "Baidu"]],
          [
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
            // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
            // Avant/IEMobile/SlimBrowser
            /(?:ms|\()(ie) ([\w\.]+)/i,
            // Internet Explorer
            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
            // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(heytap|ovi)browser\/([\d\.]+)/i,
            // Heytap/Ovi
            /(weibo)__([\d\.]+)/i
            // Weibo
          ],
          [NAME, VERSION],
          [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
            // UCBrowser
          ],
          [VERSION, [NAME, "UC" + BROWSER]],
          [
            /microm.+\bqbcore\/([\w\.]+)/i,
            // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i,
            /micromessenger\/([\w\.]+)/i
            // WeChat
          ],
          [VERSION, [NAME, "WeChat"]],
          [
            /konqueror\/([\w\.]+)/i
            // Konqueror
          ],
          [VERSION, [NAME, "Konqueror"]],
          [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
            // IE11
          ],
          [VERSION, [NAME, "IE"]],
          [
            /ya(?:search)?browser\/([\w\.]+)/i
            // Yandex
          ],
          [VERSION, [NAME, "Yandex"]],
          [
            /slbrowser\/([\w\.]+)/i
            // Smart Lenovo Browser
          ],
          [VERSION, [NAME, "Smart Lenovo " + BROWSER]],
          [
            /(avast|avg)\/([\w\.]+)/i
            // Avast/AVG Secure Browser
          ],
          [[NAME, /(.+)/, "$1 Secure " + BROWSER], VERSION],
          [
            /\bfocus\/([\w\.]+)/i
            // Firefox Focus
          ],
          [VERSION, [NAME, FIREFOX + " Focus"]],
          [
            /\bopt\/([\w\.]+)/i
            // Opera Touch
          ],
          [VERSION, [NAME, OPERA + " Touch"]],
          [
            /coc_coc\w+\/([\w\.]+)/i
            // Coc Coc Browser
          ],
          [VERSION, [NAME, "Coc Coc"]],
          [
            /dolfin\/([\w\.]+)/i
            // Dolphin
          ],
          [VERSION, [NAME, "Dolphin"]],
          [
            /coast\/([\w\.]+)/i
            // Opera Coast
          ],
          [VERSION, [NAME, OPERA + " Coast"]],
          [
            /miuibrowser\/([\w\.]+)/i
            // MIUI Browser
          ],
          [VERSION, [NAME, "MIUI " + BROWSER]],
          [
            /fxios\/([-\w\.]+)/i
            // Firefox for iOS
          ],
          [VERSION, [NAME, FIREFOX]],
          [
            /\bqihu|(qi?ho?o?|360)browser/i
            // 360
          ],
          [[NAME, "360 " + BROWSER]],
          [
            /(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i
          ],
          [[NAME, /(.+)/, "$1 " + BROWSER], VERSION],
          [
            // Oculus/Sailfish/HuaweiBrowser/VivoBrowser
            /samsungbrowser\/([\w\.]+)/i
            // Samsung Internet
          ],
          [VERSION, [NAME, SAMSUNG + " Internet"]],
          [
            /(comodo_dragon)\/([\w\.]+)/i
            // Comodo Dragon
          ],
          [[NAME, /_/g, " "], VERSION],
          [
            /metasr[\/ ]?([\d\.]+)/i
            // Sogou Explorer
          ],
          [VERSION, [NAME, "Sogou Explorer"]],
          [
            /(sogou)mo\w+\/([\d\.]+)/i
            // Sogou Mobile
          ],
          [[NAME, "Sogou Mobile"], VERSION],
          [
            /(electron)\/([\w\.]+) safari/i,
            // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
            // Tesla
            /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i
            // QQBrowser/2345 Browser
          ],
          [NAME, VERSION],
          [
            /(lbbrowser)/i,
            // LieBao Browser
            /\[(linkedin)app\]/i
            // LinkedIn App for iOS & Android
          ],
          [NAME],
          [
            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
            // Facebook App for iOS & Android
          ],
          [[NAME, FACEBOOK], VERSION],
          [
            /(Klarna)\/([\w\.]+)/i,
            // Klarna Shopping Browser for iOS & Android
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
            // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
            // Naver InApp
            /safari (line)\/([\w\.]+)/i,
            // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,
            // Line App for Android
            /(alipay)client\/([\w\.]+)/i,
            // Alipay
            /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i
            // Chromium/Instagram/Snapchat
          ],
          [NAME, VERSION],
          [
            /\bgsa\/([\w\.]+) .*safari\//i
            // Google Search Appliance on iOS
          ],
          [VERSION, [NAME, "GSA"]],
          [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i
            // TikTok
          ],
          [VERSION, [NAME, "TikTok"]],
          [
            /headlesschrome(?:\/([\w\.]+)| )/i
            // Chrome Headless
          ],
          [VERSION, [NAME, CHROME + " Headless"]],
          [
            / wv\).+(chrome)\/([\w\.]+)/i
            // Chrome WebView
          ],
          [[NAME, CHROME + " WebView"], VERSION],
          [
            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
            // Android Browser
          ],
          [VERSION, [NAME, "Android " + BROWSER]],
          [
            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
            // Chrome/OmniWeb/Arora/Tizen/Nokia
          ],
          [NAME, VERSION],
          [
            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i
            // Mobile Safari
          ],
          [VERSION, [NAME, "Mobile Safari"]],
          [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i
            // Safari & Safari Mobile
          ],
          [VERSION, NAME],
          [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
            // Safari < 3.0
          ],
          [NAME, [VERSION, strMapper, oldSafariMap]],
          [
            /(webkit|khtml)\/([\w\.]+)/i
          ],
          [NAME, VERSION],
          [
            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i
            // Netscape
          ],
          [[NAME, "Netscape"], VERSION],
          [
            /mobile vr; rv:([\w\.]+)\).+firefox/i
            // Firefox Reality
          ],
          [VERSION, [NAME, FIREFOX + " Reality"]],
          [
            /ekiohf.+(flow)\/([\w\.]+)/i,
            // Flow
            /(swiftfox)/i,
            // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
            // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
            // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,
            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
            // Mozilla
            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
            // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i,
            // Links
            /panasonic;(viera)/i
            // Panasonic Viera
          ],
          [NAME, VERSION],
          [
            /(cobalt)\/([\w\.]+)/i
            // Cobalt
          ],
          [NAME, [VERSION, /master.|lts./, ""]]
        ],
        cpu: [
          [
            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i
            // AMD64 (x64)
          ],
          [[ARCHITECTURE, "amd64"]],
          [
            /(ia32(?=;))/i
            // IA32 (quicktime)
          ],
          [[ARCHITECTURE, lowerize]],
          [
            /((?:i[346]|x)86)[;\)]/i
            // IA32 (x86)
          ],
          [[ARCHITECTURE, "ia32"]],
          [
            /\b(aarch64|arm(v?8e?l?|_?64))\b/i
            // ARM64
          ],
          [[ARCHITECTURE, "arm64"]],
          [
            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
            // ARMHF
          ],
          [[ARCHITECTURE, "armhf"]],
          [
            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
          ],
          [[ARCHITECTURE, "arm"]],
          [
            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
            // PowerPC
          ],
          [[ARCHITECTURE, /ower/, EMPTY, lowerize]],
          [
            /(sun4\w)[;\)]/i
            // SPARC
          ],
          [[ARCHITECTURE, "sparc"]],
          [
            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
            // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
          ],
          [[ARCHITECTURE, lowerize]]
        ],
        device: [
          [
            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////
            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]],
          [
            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
          ],
          [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]],
          [
            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i
            // iPod/iPhone
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]],
          [
            /\((ipad);[-\w\),; ]+apple/i,
            // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, TABLET]],
          [
            /(macintosh);/i
          ],
          [MODEL, [VENDOR, APPLE]],
          [
            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]],
          [
            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]],
          [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
          ],
          [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]],
          [
            // Xiaomi
            /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
            // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,
            // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
            // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
            // Xiaomi Redmi
            /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
            // Xiaomi Redmi 'numeric' models
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
            // Xiaomi Mi
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, MOBILE]],
          [
            /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
            // Redmi Pad
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
            // Mi Pad tablets
          ],
          [[MODEL, /_/g, " "], [VENDOR, XIAOMI], [TYPE, TABLET]],
          [
            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
          ],
          [MODEL, [VENDOR, "OPPO"], [TYPE, MOBILE]],
          [
            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
          ],
          [MODEL, [VENDOR, "Vivo"], [TYPE, MOBILE]],
          [
            // Realme
            /\b(rmx[1-3]\d{3})(?: bui|;|\))/i
          ],
          [MODEL, [VENDOR, "Realme"], [TYPE, MOBILE]],
          [
            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]],
          [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
          ],
          [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]],
          [
            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, TABLET]],
          [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
          ],
          [MODEL, [VENDOR, LG], [TYPE, MOBILE]],
          [
            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
          ],
          [MODEL, [VENDOR, "Lenovo"], [TYPE, TABLET]],
          [
            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
          ],
          [[MODEL, /_/g, " "], [VENDOR, "Nokia"], [TYPE, MOBILE]],
          [
            // Google
            /(pixel c)\b/i
            // Google Pixel C
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]],
          [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
            // Google Pixel
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]],
          [
            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
          ],
          [MODEL, [VENDOR, SONY], [TYPE, MOBILE]],
          [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
          ],
          [[MODEL, "Xperia Tablet"], [VENDOR, SONY], [TYPE, TABLET]],
          [
            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
          ],
          [MODEL, [VENDOR, "OnePlus"], [TYPE, MOBILE]],
          [
            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
            // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i
            // Kindle Fire HD
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]],
          [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
            // Fire Phone
          ],
          [[MODEL, /(.+)/g, "Fire Phone $1"], [VENDOR, AMAZON], [TYPE, MOBILE]],
          [
            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i
            // BlackBerry PlayBook
          ],
          [MODEL, VENDOR, [TYPE, TABLET]],
          [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i
            // BlackBerry 10
          ],
          [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]],
          [
            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, TABLET]],
          [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
          ],
          [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]],
          [
            // HTC
            /(nexus 9)/i
            // HTC Nexus 9
          ],
          [MODEL, [VENDOR, "HTC"], [TYPE, TABLET]],
          [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
            // HTC
            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i
            // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
          ],
          [VENDOR, [MODEL, /_/g, " "], [TYPE, MOBILE]],
          [
            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
          ],
          [MODEL, [VENDOR, "Acer"], [TYPE, TABLET]],
          [
            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
          ],
          [MODEL, [VENDOR, "Meizu"], [TYPE, MOBILE]],
          [
            // Ulefone
            /; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i
          ],
          [MODEL, [VENDOR, "Ulefone"], [TYPE, MOBILE]],
          [
            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
            // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,
            // HP iPAQ
            /(asus)-?(\w+)/i,
            // Asus
            /(microsoft); (lumia[\w ]+)/i,
            // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,
            // Lenovo
            /(jolla)/i,
            // Jolla
            /(oppo) ?([\w ]+) bui/i
            // OPPO
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kobo)\s(ereader|touch)/i,
            // Kobo
            /(archos) (gamepad2?)/i,
            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,
            // HP TouchPad
            /(kindle)\/([\w\.]+)/i,
            // Kindle
            /(nook)[\w ]+build\/(\w+)/i,
            // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,
            // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
            // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,
            // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,
            // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i
            // Vodafone
          ],
          [VENDOR, MODEL, [TYPE, TABLET]],
          [
            /(surface duo)/i
            // Surface Duo
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]],
          [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i
            // Fairphone
          ],
          [MODEL, [VENDOR, "Fairphone"], [TYPE, MOBILE]],
          [
            /(u304aa)/i
            // AT&T
          ],
          [MODEL, [VENDOR, "AT&T"], [TYPE, MOBILE]],
          [
            /\bsie-(\w*)/i
            // Siemens
          ],
          [MODEL, [VENDOR, "Siemens"], [TYPE, MOBILE]],
          [
            /\b(rct\w+) b/i
            // RCA Tablets
          ],
          [MODEL, [VENDOR, "RCA"], [TYPE, TABLET]],
          [
            /\b(venue[\d ]{2,7}) b/i
            // Dell Venue Tablets
          ],
          [MODEL, [VENDOR, "Dell"], [TYPE, TABLET]],
          [
            /\b(q(?:mv|ta)\w+) b/i
            // Verizon Tablet
          ],
          [MODEL, [VENDOR, "Verizon"], [TYPE, TABLET]],
          [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
            // Barnes & Noble Tablet
          ],
          [MODEL, [VENDOR, "Barnes & Noble"], [TYPE, TABLET]],
          [
            /\b(tm\d{3}\w+) b/i
          ],
          [MODEL, [VENDOR, "NuVision"], [TYPE, TABLET]],
          [
            /\b(k88) b/i
            // ZTE K Series Tablet
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, TABLET]],
          [
            /\b(nx\d{3}j) b/i
            // ZTE Nubia
          ],
          [MODEL, [VENDOR, "ZTE"], [TYPE, MOBILE]],
          [
            /\b(gen\d{3}) b.+49h/i
            // Swiss GEN Mobile
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, MOBILE]],
          [
            /\b(zur\d{3}) b/i
            // Swiss ZUR Tablet
          ],
          [MODEL, [VENDOR, "Swiss"], [TYPE, TABLET]],
          [
            /\b((zeki)?tb.*\b) b/i
            // Zeki Tablets
          ],
          [MODEL, [VENDOR, "Zeki"], [TYPE, TABLET]],
          [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i
            // Dragon Touch Tablet
          ],
          [[VENDOR, "Dragon Touch"], MODEL, [TYPE, TABLET]],
          [
            /\b(ns-?\w{0,9}) b/i
            // Insignia Tablets
          ],
          [MODEL, [VENDOR, "Insignia"], [TYPE, TABLET]],
          [
            /\b((nxa|next)-?\w{0,9}) b/i
            // NextBook Tablets
          ],
          [MODEL, [VENDOR, "NextBook"], [TYPE, TABLET]],
          [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
            // Voice Xtreme Phones
          ],
          [[VENDOR, "Voice"], MODEL, [TYPE, MOBILE]],
          [
            /\b(lvtel\-)?(v1[12]) b/i
            // LvTel Phones
          ],
          [[VENDOR, "LvTel"], MODEL, [TYPE, MOBILE]],
          [
            /\b(ph-1) /i
            // Essential PH-1
          ],
          [MODEL, [VENDOR, "Essential"], [TYPE, MOBILE]],
          [
            /\b(v(100md|700na|7011|917g).*\b) b/i
            // Envizen Tablets
          ],
          [MODEL, [VENDOR, "Envizen"], [TYPE, TABLET]],
          [
            /\b(trio[-\w\. ]+) b/i
            // MachSpeed Tablets
          ],
          [MODEL, [VENDOR, "MachSpeed"], [TYPE, TABLET]],
          [
            /\btu_(1491) b/i
            // Rotor Tablets
          ],
          [MODEL, [VENDOR, "Rotor"], [TYPE, TABLET]],
          [
            /(shield[\w ]+) b/i
            // Nvidia Shield Tablets
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, TABLET]],
          [
            /(sprint) (\w+)/i
            // Sprint Phones
          ],
          [VENDOR, MODEL, [TYPE, MOBILE]],
          [
            /(kin\.[onetw]{3})/i
            // Microsoft Kin
          ],
          [[MODEL, /\./g, " "], [VENDOR, MICROSOFT], [TYPE, MOBILE]],
          [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
            // Zebra
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]],
          [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]],
          [
            ///////////////////
            // SMARTTVS
            ///////////////////
            /smart-tv.+(samsung)/i
            // Samsung
          ],
          [VENDOR, [TYPE, SMARTTV]],
          [
            /hbbtv.+maple;(\d+)/i
          ],
          [[MODEL, /^/, "SmartTV"], [VENDOR, SAMSUNG], [TYPE, SMARTTV]],
          [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
            // LG SmartTV
          ],
          [[VENDOR, LG], [TYPE, SMARTTV]],
          [
            /(apple) ?tv/i
            // Apple TV
          ],
          [VENDOR, [MODEL, APPLE + " TV"], [TYPE, SMARTTV]],
          [
            /crkey/i
            // Google Chromecast
          ],
          [[MODEL, CHROME + "cast"], [VENDOR, GOOGLE], [TYPE, SMARTTV]],
          [
            /droid.+aft(\w+)( bui|\))/i
            // Fire TV
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]],
          [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i
            // Sharp
          ],
          [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],
          [
            /(bravia[\w ]+)( bui|\))/i
            // Sony
          ],
          [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]],
          [
            /(mitv-\w{5}) bui/i
            // Xiaomi
          ],
          [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]],
          [
            /Hbbtv.*(technisat) (.*);/i
            // TechniSAT
          ],
          [VENDOR, MODEL, [TYPE, SMARTTV]],
          [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
            // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i
            // HbbTV devices
          ],
          [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]],
          [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
            // SmartTV from Unidentified Vendors
          ],
          [[TYPE, SMARTTV]],
          [
            ///////////////////
            // CONSOLES
            ///////////////////
            /(ouya)/i,
            // Ouya
            /(nintendo) ([wids3utch]+)/i
            // Nintendo
          ],
          [VENDOR, MODEL, [TYPE, CONSOLE]],
          [
            /droid.+; (shield) bui/i
            // Nvidia
          ],
          [MODEL, [VENDOR, "Nvidia"], [TYPE, CONSOLE]],
          [
            /(playstation [345portablevi]+)/i
            // Playstation
          ],
          [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]],
          [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i
            // Microsoft Xbox
          ],
          [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]],
          [
            ///////////////////
            // WEARABLES
            ///////////////////
            /((pebble))app/i
            // Pebble
          ],
          [VENDOR, MODEL, [TYPE, WEARABLE]],
          [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i
            // Apple Watch
          ],
          [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]],
          [
            /droid.+; (glass) \d/i
            // Google Glass
          ],
          [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]],
          [
            /droid.+; (wt63?0{2,3})\)/i
          ],
          [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]],
          [
            /(quest( 2| pro)?)/i
            // Oculus Quest
          ],
          [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]],
          [
            ///////////////////
            // EMBEDDED
            ///////////////////
            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
            // Tesla
          ],
          [VENDOR, [TYPE, EMBEDDED]],
          [
            /(aeobc)\b/i
            // Echo Dot
          ],
          [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]],
          [
            ////////////////////
            // MIXED (GENERIC)
            ///////////////////
            /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i
            // Android Phones from Unidentified Vendors
          ],
          [MODEL, [TYPE, MOBILE]],
          [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
            // Android Tablets from Unidentified Vendors
          ],
          [MODEL, [TYPE, TABLET]],
          [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
            // Unidentifiable Tablet
          ],
          [[TYPE, TABLET]],
          [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i
            // Unidentifiable Mobile
          ],
          [[TYPE, MOBILE]],
          [
            /(android[-\w\. ]{0,9});.+buil/i
            // Generic Android Device
          ],
          [MODEL, [VENDOR, "Generic"]]
        ],
        engine: [
          [
            /windows.+ edge\/([\w\.]+)/i
            // EdgeHTML
          ],
          [VERSION, [NAME, EDGE + "HTML"]],
          [
            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
            // Blink
          ],
          [VERSION, [NAME, "Blink"]],
          [
            /(presto)\/([\w\.]+)/i,
            // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
            // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,
            // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
            // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,
            // iCab
            /\b(libweb)/i
          ],
          [NAME, VERSION],
          [
            /rv\:([\w\.]{1,9})\b.+(gecko)/i
            // Gecko
          ],
          [VERSION, NAME]
        ],
        os: [
          [
            // Windows
            /microsoft (windows) (vista|xp)/i
            // Windows (iTunes)
          ],
          [NAME, VERSION],
          [
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i
            // Windows Phone
          ],
          [NAME, [VERSION, strMapper, windowsVersionMap]],
          [
            /windows nt 6\.2; (arm)/i,
            // Windows RT
            /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
            /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i
          ],
          [[VERSION, strMapper, windowsVersionMap], [NAME, "Windows"]],
          [
            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
            // iOS
            /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
          ],
          [[VERSION, /_/g, "."], [NAME, "iOS"]],
          [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i
            // Mac OS
          ],
          [[NAME, MAC_OS], [VERSION, /_/g, "."]],
          [
            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i
            // Android-x86/HarmonyOS
          ],
          [VERSION, NAME],
          [
            // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,
            // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,
            // Tizen/KaiOS
            /\((series40);/i
            // Series 40
          ],
          [NAME, VERSION],
          [
            /\(bb(10);/i
            // BlackBerry 10
          ],
          [VERSION, [NAME, BLACKBERRY]],
          [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
            // Symbian
          ],
          [VERSION, [NAME, "Symbian"]],
          [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
            // Firefox OS
          ],
          [VERSION, [NAME, FIREFOX + " OS"]],
          [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
            // WebOS
          ],
          [VERSION, [NAME, "webOS"]],
          [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i
            // watchOS
          ],
          [VERSION, [NAME, "watchOS"]],
          [
            // Google Chromecast
            /crkey\/([\d\.]+)/i
            // Google Chromecast
          ],
          [VERSION, [NAME, CHROME + "cast"]],
          [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i
            // Chromium OS
          ],
          [[NAME, CHROMIUM_OS], VERSION],
          [
            // Smart TVs
            /panasonic;(viera)/i,
            // Panasonic Viera
            /(netrange)mmh/i,
            // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,
            // NetTV
            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,
            // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,
            // Microsoft Xbox (360, One, X, S, Series X, Series S)
            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,
            // Mint
            /(mageia|vectorlinux)[; ]/i,
            // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
            // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,
            // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,
            // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
            // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i
            // Haiku
          ],
          [NAME, VERSION],
          [
            /(sunos) ?([\w\.\d]*)/i
            // Solaris
          ],
          [[NAME, "Solaris"], VERSION],
          [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
            // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
            // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
            // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i
            // UNIX
          ],
          [NAME, VERSION]
        ]
      };
      var UAParser2 = function(ua, extensions) {
        if (typeof ua === OBJ_TYPE) {
          extensions = ua;
          ua = undefined2;
        }
        if (!(this instanceof UAParser2)) {
          return new UAParser2(ua, extensions).getResult();
        }
        var _navigator = typeof window2 !== UNDEF_TYPE && window2.navigator ? window2.navigator : undefined2;
        var _ua = ua || (_navigator && _navigator.userAgent ? _navigator.userAgent : EMPTY);
        var _uach = _navigator && _navigator.userAgentData ? _navigator.userAgentData : undefined2;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;
        this.getBrowser = function() {
          var _browser = {};
          _browser[NAME] = undefined2;
          _browser[VERSION] = undefined2;
          rgxMapper.call(_browser, _ua, _rgxmap.browser);
          _browser[MAJOR] = majorize(_browser[VERSION]);
          if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
            _browser[NAME] = "Brave";
          }
          return _browser;
        };
        this.getCPU = function() {
          var _cpu = {};
          _cpu[ARCHITECTURE] = undefined2;
          rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
          return _cpu;
        };
        this.getDevice = function() {
          var _device = {};
          _device[VENDOR] = undefined2;
          _device[MODEL] = undefined2;
          _device[TYPE] = undefined2;
          rgxMapper.call(_device, _ua, _rgxmap.device);
          if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
            _device[TYPE] = MOBILE;
          }
          if (_isSelfNav && _device[MODEL] == "Macintosh" && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
            _device[MODEL] = "iPad";
            _device[TYPE] = TABLET;
          }
          return _device;
        };
        this.getEngine = function() {
          var _engine = {};
          _engine[NAME] = undefined2;
          _engine[VERSION] = undefined2;
          rgxMapper.call(_engine, _ua, _rgxmap.engine);
          return _engine;
        };
        this.getOS = function() {
          var _os = {};
          _os[NAME] = undefined2;
          _os[VERSION] = undefined2;
          rgxMapper.call(_os, _ua, _rgxmap.os);
          if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != "Unknown") {
            _os[NAME] = _uach.platform.replace(/chrome os/i, CHROMIUM_OS).replace(/macos/i, MAC_OS);
          }
          return _os;
        };
        this.getResult = function() {
          return {
            ua: this.getUA(),
            browser: this.getBrowser(),
            engine: this.getEngine(),
            os: this.getOS(),
            device: this.getDevice(),
            cpu: this.getCPU()
          };
        };
        this.getUA = function() {
          return _ua;
        };
        this.setUA = function(ua2) {
          _ua = typeof ua2 === STR_TYPE && ua2.length > UA_MAX_LENGTH ? trim(ua2, UA_MAX_LENGTH) : ua2;
          return this;
        };
        this.setUA(_ua);
        return this;
      };
      UAParser2.VERSION = LIBVERSION;
      UAParser2.BROWSER = enumerize([NAME, VERSION, MAJOR]);
      UAParser2.CPU = enumerize([ARCHITECTURE]);
      UAParser2.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
      UAParser2.ENGINE = UAParser2.OS = enumerize([NAME, VERSION]);
      if (typeof exports !== UNDEF_TYPE) {
        if (typeof module !== UNDEF_TYPE && module.exports) {
          exports = module.exports = UAParser2;
        }
        exports.UAParser = UAParser2;
      } else {
        if (typeof define === FUNC_TYPE && define.amd) {
          define(function() {
            return UAParser2;
          });
        } else if (typeof window2 !== UNDEF_TYPE) {
          window2.UAParser = UAParser2;
        }
      }
      var $ = typeof window2 !== UNDEF_TYPE && (window2.jQuery || window2.Zepto);
      if ($ && !$.ua) {
        var parser = new UAParser2();
        $.ua = parser.getResult();
        $.ua.get = function() {
          return parser.getUA();
        };
        $.ua.set = function(ua) {
          parser.setUA(ua);
          var result = parser.getResult();
          for (var prop in result) {
            $.ua[prop] = result[prop];
          }
        };
      }
    })(typeof window === "object" ? window : exports);
  }
});

// index.ts
init_react_import();

// src/HeadingAnalyzer.tsx
init_react_import();
import { useEffect as useEffect4, useState as useState5 } from "react";

// css-module:/home/sujit/Projects/puck/packages/plugin-heading-analyzer/src/HeadingAnalyzer.module.css#css-module
init_react_import();
var HeadingAnalyzer_module_default = { "HeadingAnalyzer": "_HeadingAnalyzer_116v6_1", "HeadingAnalyzer-cssWarning": "_HeadingAnalyzer-cssWarning_116v6_5", "HeadingAnalyzerItem": "_HeadingAnalyzerItem_116v6_9", "HeadingAnalyzerItem--missing": "_HeadingAnalyzerItem--missing_116v6_13" };

// src/HeadingAnalyzer.tsx
import { usePuck } from "@measured/puck";

// ../core/components/SidebarSection/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/SidebarSection/styles.module.css#css-module
init_react_import();
var styles_module_default = { "SidebarSection": "_SidebarSection_125qe_1", "SidebarSection-title": "_SidebarSection-title_125qe_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_125qe_20", "SidebarSection-content": "_SidebarSection-content_125qe_24", "SidebarSection--noPadding": "_SidebarSection--noPadding_125qe_28", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_125qe_41", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_125qe_70", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_125qe_41", "SidebarSection-heading": "_SidebarSection-heading_125qe_82", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_125qe_86" };

// ../core/lib/get-class-name-factory.ts
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

// ../core/components/Heading/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/Heading/styles.module.css#css-module
init_react_import();
var styles_module_default2 = { "Heading": "_Heading_qxrry_1", "Heading--xxxxl": "_Heading--xxxxl_qxrry_12", "Heading--xxxl": "_Heading--xxxl_qxrry_18", "Heading--xxl": "_Heading--xxl_qxrry_22", "Heading--xl": "_Heading--xl_qxrry_26", "Heading--l": "_Heading--l_qxrry_30", "Heading--m": "_Heading--m_qxrry_34", "Heading--s": "_Heading--s_qxrry_38", "Heading--xs": "_Heading--xs_qxrry_42" };

// ../core/components/Heading/index.tsx
import { jsx } from "react/jsx-runtime";
var getClassName = get_class_name_factory_default("Heading", styles_module_default2);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ jsx(
    Tag,
    {
      className: getClassName({
        [size]: true
      }),
      children
    }
  );
};

// ../../node_modules/lucide-react/dist/esm/lucide-react.js
init_react_import();

// ../../node_modules/lucide-react/dist/esm/createLucideIcon.js
init_react_import();
import { forwardRef, createElement } from "react";

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
  const Component = forwardRef(
    (_a, ref) => {
      var _b = _a, { color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children } = _b, rest = __objRest(_b, ["color", "size", "strokeWidth", "absoluteStrokeWidth", "className", "children"]);
      return createElement(
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
          ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
          ...Array.isArray(children) ? children : [children]
        ]
      );
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};

// ../../node_modules/lucide-react/dist/esm/icons/chevron-right.js
init_react_import();
var ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);

// ../core/lib/use-breadcrumbs.ts
init_react_import();
import { useContext as useContext2, useMemo } from "react";

// ../core/components/DropZone/context.tsx
init_react_import();
import {
  createContext,
  useCallback,
  useState
} from "react";

// ../core/lib/get-item.ts
init_react_import();

// ../core/lib/root-droppable-id.ts
init_react_import();
var rootDroppableId = "default-zone";

// ../core/lib/setup-zone.ts
init_react_import();

// ../core/lib/get-zone-id.ts
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

// ../core/components/DropZone/context.tsx
import { Fragment, jsx as jsx2 } from "react/jsx-runtime";
var dropZoneContext = createContext(null);

// ../core/components/Puck/context.tsx
init_react_import();
import {
  createContext as createContext2,
  useContext,
  useEffect as useEffect3,
  useState as useState4
} from "react";

// ../core/components/ViewportControls/default-viewports.ts
init_react_import();
var defaultViewports = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
  { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Large" }
];

// ../core/components/Puck/context.tsx
var import_ua_parser_js = __toESM(require_ua_parser());

// ../core/lib/use-resolved-permissions.ts
init_react_import();
import { useCallback as useCallback2, useEffect, useState as useState2 } from "react";

// ../core/lib/flatten-data.ts
init_react_import();

// ../core/lib/get-changed.ts
init_react_import();

// ../core/lib/use-resolved-data.ts
init_react_import();
import { useCallback as useCallback3, useEffect as useEffect2, useState as useState3 } from "react";

// ../core/lib/resolve-component-data.ts
init_react_import();

// ../core/lib/apply-dynamic-props.ts
init_react_import();

// ../core/lib/resolve-root-data.ts
init_react_import();

// ../core/components/Puck/context.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
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
var appContext = createContext2(defaultContext);
function useAppContext() {
  const mainContext = useContext(appContext);
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

// ../core/lib/use-breadcrumbs.ts
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
  const dzContext = useContext2(dropZoneContext);
  return useMemo(() => {
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

// ../core/components/Loader/index.tsx
init_react_import();

// ../core/lib/index.ts
init_react_import();

// ../core/lib/filter.ts
init_react_import();

// ../core/lib/reorder.ts
init_react_import();

// ../core/lib/replace.ts
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/Loader/styles.module.css#css-module
init_react_import();
var styles_module_default3 = { "Loader": "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" };

// ../core/components/Loader/index.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var getClassName2 = get_class_name_factory_default("Loader", styles_module_default3);
var Loader = (_a) => {
  var _b = _a, {
    color,
    size = 16
  } = _b, props = __objRest(_b, [
    "color",
    "size"
  ]);
  return /* @__PURE__ */ jsx4(
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

// ../core/components/SidebarSection/index.tsx
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var getClassName3 = get_class_name_factory_default("SidebarSection", styles_module_default);
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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: getClassName3({ noBorderTop, noPadding }),
      style: { background },
      children: [
        /* @__PURE__ */ jsx5("div", { className: getClassName3("title"), children: /* @__PURE__ */ jsxs("div", { className: getClassName3("breadcrumbs"), children: [
          showBreadcrumbs ? breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ jsxs("div", { className: getClassName3("breadcrumb"), children: [
            /* @__PURE__ */ jsx5(
              "button",
              {
                type: "button",
                className: getClassName3("breadcrumbLabel"),
                onClick: () => setUi({ itemSelector: breadcrumb.selector }),
                children: breadcrumb.label
              }
            ),
            /* @__PURE__ */ jsx5(ChevronRight, { size: 16 })
          ] }, i)) : null,
          /* @__PURE__ */ jsx5("div", { className: getClassName3("heading"), children: /* @__PURE__ */ jsx5(Heading, { rank: "2", size: "xs", children: title }) })
        ] }) }),
        /* @__PURE__ */ jsx5("div", { className: getClassName3("content"), children }),
        isLoading && /* @__PURE__ */ jsx5("div", { className: getClassName3("loadingOverlay"), children: /* @__PURE__ */ jsx5(Loader, { size: 32 }) })
      ]
    }
  );
};

// ../core/components/OutlineList/index.tsx
init_react_import();

// css-module:/home/sujit/Projects/puck/packages/core/components/OutlineList/styles.module.css#css-module
init_react_import();
var styles_module_default4 = { "OutlineList": "_OutlineList_18bgy_1", "OutlineListItem": "_OutlineListItem_18bgy_20", "OutlineListItem--clickable": "_OutlineListItem--clickable_18bgy_35" };

// ../core/components/OutlineList/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var getClassName4 = get_class_name_factory_default("OutlineList", styles_module_default4);
var getClassNameItem = get_class_name_factory_default("OutlineListItem", styles_module_default4);
var OutlineList = ({ children }) => {
  return /* @__PURE__ */ jsx6("ul", { className: getClassName4(), children });
};
OutlineList.Clickable = ({ children }) => /* @__PURE__ */ jsx6("div", { className: getClassNameItem({ clickable: true }), children });
OutlineList.Item = ({
  children,
  onClick
}) => {
  return /* @__PURE__ */ jsx6(
    "li",
    {
      className: getClassNameItem({ clickable: !!onClick }),
      onClick,
      children
    }
  );
};

// ../core/lib/scroll-into-view.ts
init_react_import();
var scrollIntoView = (el) => {
  const oldStyle = __spreadValues({}, el.style);
  el.style.scrollMargin = "256px";
  if (el) {
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
    el.style.scrollMargin = oldStyle.scrollMargin || "";
  }
};

// ../core/lib/get-frame.ts
init_react_import();
var getFrame = () => {
  let frame = document.querySelector("#preview-frame");
  if ((frame == null ? void 0 : frame.tagName) === "IFRAME") {
    frame = frame.contentDocument;
  }
  return frame;
};

// src/HeadingAnalyzer.tsx
import ReactFromJSONModule from "react-from-json";
import { Fragment as Fragment2, jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var getClassName5 = get_class_name_factory_default("HeadingAnalyzer", HeadingAnalyzer_module_default);
var getClassNameItem2 = get_class_name_factory_default("HeadingAnalyzerItem", HeadingAnalyzer_module_default);
var ReactFromJSON = ReactFromJSONModule.default || ReactFromJSONModule;
var dataAttr = "data-puck-heading-analyzer-id";
var getOutline = ({
  addDataAttr = false,
  frame
} = {}) => {
  const headings = (frame == null ? void 0 : frame.querySelectorAll("h1,h2,h3,h4,h5,h6")) || [];
  const _outline = [];
  headings.forEach((item, i) => {
    if (addDataAttr) {
      item.setAttribute(dataAttr, i.toString());
    }
    _outline.push({
      rank: parseInt(item.tagName.split("H")[1]),
      text: item.textContent,
      analyzeId: i.toString()
    });
  });
  return _outline;
};
function buildHierarchy(frame) {
  var _a, _b;
  const headings = getOutline({ addDataAttr: true, frame });
  const root = { rank: 0, children: [], text: "" };
  let path = [root];
  for (let heading of headings) {
    const node = {
      rank: heading.rank,
      text: heading.text,
      analyzeId: heading.analyzeId,
      children: []
    };
    if (node.rank === 1) {
      path = [root];
    } else {
      while (path[path.length - 1].rank >= node.rank) {
        path.pop();
      }
      while (path.length < node.rank) {
        const missingNode = {
          rank: path.length,
          missing: true,
          children: [],
          text: ""
        };
        (_a = path[path.length - 1].children) == null ? void 0 : _a.push(missingNode);
        path.push(missingNode);
      }
    }
    (_b = path[path.length - 1].children) == null ? void 0 : _b.push(node);
    path.push(node);
  }
  return root.children;
}
var HeadingAnalyzer = () => {
  const { appState } = usePuck();
  const [hierarchy, setHierarchy] = useState5([]);
  const [firstRender, setFirstRender] = useState5(true);
  useEffect4(() => {
    const frame = getFrame();
    if (!frame) return;
    if (firstRender) {
      setTimeout(() => {
        setHierarchy(buildHierarchy(frame));
        setFirstRender(false);
      }, 100);
    } else {
      setHierarchy(buildHierarchy(frame));
    }
  }, [appState.data]);
  return /* @__PURE__ */ jsxs2("div", { className: getClassName5(), children: [
    /* @__PURE__ */ jsxs2(
      "small",
      {
        className: getClassName5("cssWarning"),
        style: {
          color: "var(--puck-color-red-04)",
          display: "block",
          marginBottom: 16
        },
        children: [
          "Heading analyzer styles not loaded. Please review the",
          " ",
          /* @__PURE__ */ jsx7("a", { href: "https://github.com/measuredco/puck/blob/main/packages/plugin-heading-analyzer/README.md", children: "README" }),
          "."
        ]
      }
    ),
    hierarchy.length === 0 && /* @__PURE__ */ jsx7("div", { children: "No headings." }),
    /* @__PURE__ */ jsx7(OutlineList, { children: /* @__PURE__ */ jsx7(
      ReactFromJSON,
      {
        mapping: {
          Root: (props) => /* @__PURE__ */ jsx7(Fragment2, { children: props.children }),
          OutlineListItem: (props) => /* @__PURE__ */ jsxs2(OutlineList.Item, { children: [
            /* @__PURE__ */ jsx7(OutlineList.Clickable, { children: /* @__PURE__ */ jsx7(
              "small",
              {
                className: getClassNameItem2({ missing: props.missing }),
                onClick: typeof props.analyzeId == "undefined" ? void 0 : (e) => {
                  e.stopPropagation();
                  const frame = getFrame();
                  const el = frame == null ? void 0 : frame.querySelector(
                    `[${dataAttr}="${props.analyzeId}"]`
                  );
                  const oldStyle = __spreadValues({}, el.style);
                  if (el) {
                    scrollIntoView(el);
                    el.style.outline = "4px solid var(--puck-color-rose-06)";
                    el.style.outlineOffset = "4px";
                    setTimeout(() => {
                      el.style.outline = oldStyle.outline || "";
                      el.style.outlineOffset = oldStyle.outlineOffset || "";
                    }, 2e3);
                  }
                },
                children: props.missing ? /* @__PURE__ */ jsxs2(Fragment2, { children: [
                  /* @__PURE__ */ jsxs2("b", { children: [
                    "H",
                    props.rank
                  ] }),
                  ": Missing"
                ] }) : /* @__PURE__ */ jsxs2(Fragment2, { children: [
                  /* @__PURE__ */ jsxs2("b", { children: [
                    "H",
                    props.rank
                  ] }),
                  ": ",
                  props.text
                ] })
              }
            ) }),
            /* @__PURE__ */ jsx7(OutlineList, { children: props.children })
          ] })
        },
        entry: {
          props: { children: hierarchy },
          type: "Root"
        },
        mapProp: (prop) => {
          if (prop && prop.rank) {
            return {
              type: "OutlineListItem",
              props: prop
            };
          }
          return prop;
        }
      }
    ) })
  ] });
};
var headingAnalyzer = {
  overrides: {
    fields: ({ children, itemSelector }) => /* @__PURE__ */ jsxs2(Fragment2, { children: [
      children,
      /* @__PURE__ */ jsx7("div", { style: { display: itemSelector ? "none" : "block" }, children: /* @__PURE__ */ jsx7(SidebarSection, { title: "Heading Outline", children: /* @__PURE__ */ jsx7(HeadingAnalyzer, {}) }) })
    ] })
  }
};
var HeadingAnalyzer_default = headingAnalyzer;
export {
  HeadingAnalyzer_default as default
};
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

lucide-react/dist/esm/icons/chevron-right.js:
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
