(() => {
var exports = {};
exports.id = 438;
exports.ids = [438,89];
exports.modules = {

/***/ 7655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./de/common": [
		1545,
		545
	],
	"./de/common.json": [
		1545,
		545
	],
	"./en/common": [
		464,
		464
	],
	"./en/common.json": [
		464,
		464
	],
	"./it/common": [
		9486,
		486
	],
	"./it/common.json": [
		9486,
		486
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7655;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ Player)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(849);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(7038);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "use-sound"
const external_use_sound_namespaceObject = require("use-sound");
var external_use_sound_default = /*#__PURE__*/__webpack_require__.n(external_use_sound_namespaceObject);
;// CONCATENATED MODULE: external "react-icons/ai"
const ai_namespaceObject = require("react-icons/ai");
;// CONCATENATED MODULE: external "react-icons/bi"
const bi_namespaceObject = require("react-icons/bi");
;// CONCATENATED MODULE: external "react-icons"
const external_react_icons_namespaceObject = require("react-icons");
// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
;// CONCATENATED MODULE: ./src/components/Player.js




 // for handling the sound
 // icons for play and pause
 // icons for next and previous track
 // for customazing the icons

function Player({ src  }) {
    const [isPlaying, setIsPlaying] = (0,external_react_.useState)(false);
    const [wasPlaying, setWasPlaying] = (0,external_react_.useState)(false);
    const [play, { pause , duration , sound  }] = external_use_sound_default()(src, {
        onend: ()=>setIsPlaying(false)
    });
    /* function to handling button */ const playingButton = ()=>{
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };
    const moveSlider = (how)=>{
        if (sound) {
            const newTime = sound.seek() + how; // compute the new time
            sound.seek(newTime); // move to the new time
            const min = Math.floor(newTime / 60);
            const sec = Math.floor(newTime % 60);
            setCurrTime({
                min,
                sec
            });
        }
    };
    const [time, setTime] = (0,external_react_.useState)({
        min: 0,
        sec: 0
    });
    const [currTime, setCurrTime] = (0,external_react_.useState)({
        min: 0,
        sec: 0
    });
    const [seconds, setSeconds] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        const time = {
            min: min,
            sec: secRemain
        };
    }, [
        isPlaying
    ]);
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            if (sound) {
                setSeconds(sound.seek([])); // setting the seconds state with the current state
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min,
                    sec
                });
                const secD = duration / 1000;
                const minD = Math.floor(secD / 60 - min);
                var secRemain = Math.floor(secD % 60 - sec);
                if (secRemain < 0) secRemain = 59 - sec;
                const currtime = {
                    min: minD,
                    sec: secRemain
                };
                console.log(currtime);
                setTime(currtime);
            }
        }, 100);
        return ()=>clearInterval(interval);
    }, [
        sound
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "playerComponent",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "time",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                children: [
                                    currTime.min.toString().padStart(2, "0"),
                                    ":",
                                    currTime.sec.toString().padStart(2, "0")
                                ]
                            }),
                            "\xa0/\xa0",
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                children: [
                                    time.min.toString().padStart(2, "0"),
                                    ":",
                                    time.sec.toString().padStart(2, "0")
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("input", {
                        type: "range",
                        min: "0",
                        max: duration / 1000,
                        default: "0",
                        value: seconds,
                        className: "timeline py-5",
                        onChange: (e)=>{
                            sound.seek([
                                e.target.value
                            ]);
                        },
                        onMouseDown: ()=>{
                            if (isPlaying) {
                                setWasPlaying(true);
                                playingButton();
                            } else setWasPlaying(false);
                        },
                        onMouseUp: ()=>{
                            if (wasPlaying) {
                                playingButton();
                            }
                        }
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "playerControllers",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "prevTenSecondsButton",
                        onClick: ()=>moveSlider(-20),
                        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_icons_namespaceObject.IconContext.Provider, {
                            value: {
                                size: "3em",
                                color: "var(--main-color)"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(bi_namespaceObject.BiSkipPrevious, {})
                        })
                    }),
                    !isPlaying ? /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "playButton",
                        onClick: playingButton,
                        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_icons_namespaceObject.IconContext.Provider, {
                            value: {
                                size: "3em",
                                color: "var(--main-color)"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(ai_namespaceObject.AiFillPlayCircle, {})
                        })
                    }) : /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "playButton",
                        onClick: playingButton,
                        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_icons_namespaceObject.IconContext.Provider, {
                            value: {
                                size: "3em",
                                color: "var(--main-color)"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(ai_namespaceObject.AiFillPauseCircle, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "nextTenSecondsButton",
                        onClick: ()=>moveSlider(20),
                        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_icons_namespaceObject.IconContext.Provider, {
                            value: {
                                size: "3em",
                                color: "var(--main-color)"
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx(bi_namespaceObject.BiSkipNext, {})
                        })
                    })
                ]
            })
        ]
    });
} /*
export  function Player({src}){
    const { t, lang } = useTranslation('common')
    const [isPlaying, setIsPlaying] = useState(false);
    const fileType  = src.split(".").at(-1);
 
    function handleAudio() {
        const audio = document.getElementById("mainAudio");
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        } else {
          audio.play();
          setIsPlaying(true);
        }
      }

    return (
        <div>
            <div className="player" id="player">
            <div className="content closed"></div>
            <div className="row align-center">
        <div className="players-buttons buttons flex w-full bg-main  rounded-md items-center justify-center p-3 my-3" onClick={handleAudio}>
            <div id="previous-button" className='hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"></path>
                </svg>
            </div>
        <strong data-label='listen' style={{ color : "white" }}>{isPlaying ? t("pause") : t("play")}
</strong><br/>
        <div id="play-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={20} width={20}>
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" fill="white"></path>
            </svg> 
        </div>
        <div id="pause-button" className="hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"></path>
            </svg>
        </div>
        <div id="next-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
               <path d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"></path>
            </svg>
        </div>
        </div>
            <audio controls preload="metadata" className="w-full mb-5 rounded-0" id='mainAudio' style={{ position: "relative" }}>
                <source src={src} type={"audio/" + fileType} />
                </audio> 
         </div>
            </div>
            
    </div>
    );
} 

*/ 


/***/ }),

/***/ 6277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ __Next_Translate__getStaticProps__18aa353e55f__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(849);
/* harmony import */ var next_font_google_target_css_path_src_pages_points_id_js_import_Jost_arguments_subsets_latin_variableName_jost___WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6122);
/* harmony import */ var next_font_google_target_css_path_src_pages_points_id_js_import_Jost_arguments_subsets_latin_variableName_jost___WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_points_id_js_import_Jost_arguments_subsets_latin_variableName_jost___WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3877);
/* harmony import */ var audioguida_components_Player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9269);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4409);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8722);
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2996);
/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var intl_pluralrules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8859);
/* harmony import */ var intl_pluralrules__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(intl_pluralrules__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_translate_setLanguage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5508);
/* harmony import */ var next_translate_setLanguage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_translate_setLanguage__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














// This function gets called at build time
async function getStaticPaths() {
    const apiURL = "https://www.villaselvaticoterme.it/wp-json/jet-cct/points/";
    const args = new URLSearchParams({
        _orderby: "posizione",
        _order: "asc"
    });
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(apiURL + "?" + args.toString(), {
        mode: "no-cors",
        cache: "force-cache",
        next: {
            revalidate: 60
        }
    });
    const posts = await res.json();
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post)=>({
            params: {
                id: post._ID.toString()
            },
            locale: post.lingua.toLowerCase()
        }));
    console.log(paths);
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
        paths,
        fallback: "blocking"
    };
}
// This also gets called at build time
async function getStaticProps({ params  }) {
    const apiURL = "https://www.villaselvaticoterme.it/wp-json/jet-cct/points/";
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`${apiURL}${params.id}`);
    const post = await res.json();
    // Pass post data to the page via props
    return {
        props: {
            post
        },
        revalidate: 9600
    };
}
const Post = (p)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t , lang  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_11___default()("common");
    const pr = p.post;
    const gallery = pr.gallery.split(",");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "px-6 py-6 sm:px-12 md:px-24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                spaceBetween: 20,
                slidesPerView: 1,
                centeredSlides: true,
                breakpoints: {
                    // when window width is >= 320px
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // when window width is >= 480px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    // when window width is >= 640px
                    1080: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                },
                navigation: true,
                autoplay: {
                    "delay": 2500,
                    "disableOnInteraction": false
                },
                pagination: {
                    clickable: true
                },
                loop: true,
                scrollbar: {
                    draggable: true
                },
                onSlideChange: ()=>console.log("slide change"),
                onSwiper: (swiper)=>console.log(swiper),
                modules: [
                    swiper__WEBPACK_IMPORTED_MODULE_5__.Pagination
                ],
                className: " mb-10",
                children: gallery.map((image, i)=>{
                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: image,
                                    alt: pr.titolo + "-" + i,
                                    width: 480,
                                    height: 480,
                                    className: "rounded-2xl object-cover aspect-square"
                                })
                            })
                        ]
                    }, "swiper-slide-" + i);
                })
            }, "player-{ pr._ID }"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(audioguida_components_Player__WEBPACK_IMPORTED_MODULE_6__/* .Player */ .J, {
                src: pr.audio
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "single-point point-" + pr._ID,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: `text-4xl pb-6 pt-6 font-bold ${(next_font_google_target_css_path_src_pages_points_id_js_import_Jost_arguments_subsets_latin_variableName_jost___WEBPACK_IMPORTED_MODULE_13___default().variable)} font-sans`,
                        children: pr.titolo
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: pr.descrizione.split(". ").join(".<br /><br />")
                        },
                        className: "pb-12"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
async function __Next_Translate__getStaticProps__18aa353e55f__(ctx) {
    const res = await getStaticProps(ctx);
    return {
        ...res,
        props: {
            ...res.props || {},
            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({
                ...ctx,
                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,
                pathname: "/points/[id]",
                loaderName: "getStaticProps",
                loadLocaleFrom: typeof _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__.loadLocaleFrom === "function" ? _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__.loadLocaleFrom : (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
            })
        }
    };
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

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

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 608:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["it","en","de"],"defaultLocale":"it","pages":{"*":["common"]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [612,849,450,841], () => (__webpack_exec__(6277)));
module.exports = __webpack_exports__;

})();