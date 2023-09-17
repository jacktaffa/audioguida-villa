(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(608);
;// CONCATENATED MODULE: external "next-translate/appWithI18n"
const appWithI18n_namespaceObject = require("next-translate/appWithI18n");
var appWithI18n_default = /*#__PURE__*/__webpack_require__.n(appWithI18n_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(8965);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4409);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
// EXTERNAL MODULE: ./src/styles/style.css
var style = __webpack_require__(6247);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "next-translate/setLanguage"
var setLanguage_ = __webpack_require__(5508);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/BackButton.js







function BackButton() {
    const { t , lang  } = useTranslation_default()("common");
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                onClick: ()=>router.back(),
                className: "mr-2 p-1 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400",
                children: /*#__PURE__*/ jsx_runtime.jsx(outline_namespaceObject.ChevronLeftIcon, {
                    className: "h-6 w-6 text-gray-500"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                onClick: ()=>router.back(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: "text-gray-500 hover:text-gray-700",
                    children: [
                        t("indietro"),
                        " "
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_BackButton = (BackButton);

;// CONCATENATED MODULE: ./src/pages/_app.js








function App({ Component , pageProps  }) {
    //  return <Component {...pageProps} />
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-white shadow",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-3 lg:px-4",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between items-center py-0 md:justify-start md:space-x-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex justify-start lg:w-0 lg:flex-1",
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "flex items-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        className: "h-14 w-auto sm:h-14",
                                        src: "/images/logo-villa-selvatico-scuro.png",
                                        width: 300,
                                        height: 100,
                                        alt: "Logo"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "-mr-2 -my-2",
                            children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                type: "button",
                                className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                                "aria-expanded": "false",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "sr-only",
                                    children: "Open menu"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("nav", {
                            className: "hidden md:flex space-x-10"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "md:flex items-center justify-end md:flex-1 lg:w-0",
                            children: /*#__PURE__*/ jsx_runtime.jsx(components_BackButton, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (appWithI18n_default()(App, {
    ...i18n,
    isLoader: true,
    skipInitialProps: true,
    loadLocaleFrom: typeof i18n.loadLocaleFrom === "function" ? i18n.loadLocaleFrom : (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
}));


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 6247:
/***/ (() => {



/***/ }),

/***/ 5508:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/setLanguage");

/***/ }),

/***/ 866:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [612,849,450,965,89], () => (__webpack_exec__(5918)));
module.exports = __webpack_exports__;

})();