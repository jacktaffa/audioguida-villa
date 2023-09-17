(() => {
var exports = {};
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 1018:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Jost_12a14b', '__Jost_Fallback_12a14b'","fontStyle":"normal"},
	"className": "__className_12a14b",
	"variable": "__variable_12a14b"
};


/***/ }),

/***/ 202:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Jost_12a14b', '__Jost_Fallback_12a14b'","fontStyle":"normal"},
	"className": "__className_12a14b"
};


/***/ }),

/***/ 6550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Points),
  "getStaticProps": () => (/* binding */ __Next_Translate__getStaticProps__18aa357f17e__)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/pages/points/index.js","import":"Jost","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var index_js_import_Jost_arguments_subsets_latin_variableName_inter_ = __webpack_require__(202);
var index_js_import_Jost_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(index_js_import_Jost_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(608);
// EXTERNAL MODULE: external "next-translate/loadNamespaces"
var loadNamespaces_ = __webpack_require__(7462);
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/components/BlogCard.js","import":"Jost","arguments":[{"subsets":["latin"],"variable":"--font-jost"}],"variableName":"jost"}
var BlogCard_js_import_Jost_arguments_subsets_latin_variable_font_jost_variableName_jost_ = __webpack_require__(1018);
var BlogCard_js_import_Jost_arguments_subsets_latin_variable_font_jost_variableName_jost_default = /*#__PURE__*/__webpack_require__.n(BlogCard_js_import_Jost_arguments_subsets_latin_variable_font_jost_variableName_jost_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4409);
;// CONCATENATED MODULE: ./src/components/BlogCard.js



function BlogCard(props) {
    const firstImage = Array.isArray(props.blogPost.gallery.split(",")) ? props.blogPost.gallery.split(",")[0] : props.blogPost.gallery;
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "group relative",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                        href: "/" + props.locale.toLowerCase() + "/points/" + props.blogPost._ID,
                        children: [
                            " ",
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: firstImage,
                                alt: props.blogPost.titolo,
                                className: "h-full w-full object-cover object-center lg:h-full lg:w-full aspect-square",
                                fill: "true",
                                objectPosition: "center"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "mt-4 flex justify-between",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                className: "text-4xl",
                                children: props.blogPost.posizione
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                className: `text-md ${(BlogCard_js_import_Jost_arguments_subsets_latin_variable_font_jost_variableName_jost_default()).variable} font-sans`,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "/" + props.locale.toLowerCase() + "/points/" + props.blogPost._ID,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            "aria-hidden": "true",
                                            className: "absolute inset-0"
                                        }),
                                        props.blogPost.titolo
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        }, props.blogPost._ID)
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(8965);
// EXTERNAL MODULE: external "intl-pluralrules"
var external_intl_pluralrules_ = __webpack_require__(8859);
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: external "next-translate/setLanguage"
var setLanguage_ = __webpack_require__(5508);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/pages/points/index.js












async function getStaticProps({ locale  }) {
    const apiURL = "https://www.villaselvaticoterme.it/wp-json/jet-cct/points/";
    const args = new URLSearchParams({
        _orderby: "posizione",
        lingua: locale.toUpperCase(),
        type: "point",
        _order: "asc"
    });
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(apiURL + "?" + args.toString(), {
        mode: "no-cors",
        cache: "force-cache",
        next: {
            revalidate: 3600
        }
    });
    const points = await res.json();
    // console.log(apiURL + "?" + args.toString());
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            points
        },
        revalidate: 7200 // In seconds
    };
}
function Points({ points  }) {
    const { t , lang  } = useTranslation_default()("common");
    const title = t("title");
    const sottotitolo = t("sottotitolo");
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        className: `flex min-h-screen  w-screen h-full py-12 flex-col items-center justify-between ${(index_js_import_Jost_arguments_subsets_latin_variableName_inter_default()).className}`,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "bg-white",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 py-10",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-2xl font-bold tracking-tight text-center text-gray-900",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-center",
                        children: sottotitolo
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8",
                        children: points.map((blogPost, i)=>{
                            return /*#__PURE__*/ jsx_runtime.jsx(BlogCard, {
                                locale: lang.toUpperCase(),
                                blogPost: blogPost
                            }, i);
                        })
                    })
                ]
            })
        })
    });
}
async function __Next_Translate__getStaticProps__18aa357f17e__(ctx) {
    const res = await getStaticProps(ctx);
    return {
        ...res,
        props: {
            ...res.props || {},
            ...await loadNamespaces_default()({
                ...ctx,
                ...i18n,
                pathname: "/points/index",
                loaderName: "getStaticProps",
                loadLocaleFrom: typeof i18n.loadLocaleFrom === "function" ? i18n.loadLocaleFrom : (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
            })
        }
    };
}



/***/ }),

/***/ 8859:
/***/ ((module) => {

"use strict";
module.exports = require("intl-pluralrules");

/***/ }),

/***/ 7462:
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

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
var __webpack_exports__ = __webpack_require__.X(0, [612,849,450,965,89], () => (__webpack_exec__(6550)));
module.exports = __webpack_exports__;

})();