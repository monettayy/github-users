(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_users_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pages/users/Index.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pages/users/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Index',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    var alert = app.appContext.config.globalProperties.$alert;
    var page = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      title: 'User',
      list_title: 'Users',
      create_url: '/users/create',
      data_list: []
    });

    var getUsers = function getUsers() {
      axios.get('/users-list').then(function (response) {
        if (response.data.success) {
          page.data_list = response.data.data;
        }
      })["catch"](function (error) {
        alert.error(error.response.data.message);
      });
    };

    var deleteItem = function deleteItem(item) {
      alert.confirm("Are you sure you want to delete user " + item.name).then(function () {
        axios["delete"]('/users/' + item.id).then(function (response) {
          if (response.data.success) {
            alert.toast("Successfully deleted user");
            page.data_list = response.data.data;
          }
        })["catch"](function (error) {
          alert.error(error.response.data.message);
        });
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      getUsers();
    });
    var __returned__ = {
      app: app,
      alert: alert,
      page: page,
      getUsers: getUsers,
      deleteItem: deleteItem,
      reactive: vue__WEBPACK_IMPORTED_MODULE_0__.reactive,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_0__.onMounted,
      getCurrentInstance: vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance,
      moment: (moment__WEBPACK_IMPORTED_MODULE_1___default())
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pages/users/Index.vue?vue&type=template&id=22387531":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pages/users/Index.vue?vue&type=template&id=22387531 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "container-fluid"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "h3 mb-2 text-gray-800"
}, "List", -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "mb-4"
};
var _hoisted_4 = ["href"];

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_6 = {
  "class": "card shadow mb-4"
};
var _hoisted_7 = {
  "class": "card-header py-3"
};
var _hoisted_8 = {
  "class": "m-0 font-weight-bold text-primary"
};
var _hoisted_9 = {
  "class": "card-body"
};
var _hoisted_10 = {
  "class": "table-responsive"
};
var _hoisted_11 = {
  "class": "table table-bordered",
  id: "dataTable",
  width: "100%",
  cellspacing: "0"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Username"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Created Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Last Update"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")])], -1
/* HOISTED */
);

var _hoisted_13 = {
  key: 0
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Name"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Username"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Created Date"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Last Update"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Action")], -1
/* HOISTED */
);

var _hoisted_15 = [_hoisted_14];
var _hoisted_16 = {
  key: 1
};
var _hoisted_17 = ["href"];

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "icon text-white-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-pen"
})], -1
/* HOISTED */
);

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text"
}, "Edit", -1
/* HOISTED */
);

var _hoisted_20 = [_hoisted_18, _hoisted_19];
var _hoisted_21 = ["onClick"];

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "icon text-white-50"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-trash"
})], -1
/* HOISTED */
);

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text"
}, "Delete", -1
/* HOISTED */
);

var _hoisted_24 = [_hoisted_22, _hoisted_23];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" This page includes list of all " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.page.list_title) + ". To create a new one go to ", 1
  /* TEXT */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    target: "_blank",
    href: $setup.page.create_url
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.page.title) + " Create Page ", 9
  /* TEXT, PROPS */
  , _hoisted_4), _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.page.list_title) + " Table ", 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_11, [_hoisted_12, $setup.page.data_list && $setup.page.data_list.length > 10 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tfoot", _hoisted_13, _hoisted_15)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.page.data_list && $setup.page.data_list.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tbody", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.page.data_list, function (data, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.name), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(data.username), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.moment(data.created_at).format("MMM DD, YYYY hh:mm a")), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.moment(data.updated_at).format("MMM DD, YYYY hh:mm a")), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      "class": "btn btn-primary btn-icon-split btn-sm ma-1",
      href: '/users/' + data.code
    }, _hoisted_20, 8
    /* PROPS */
    , _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "btn btn-danger btn-icon-split btn-sm ma-1",
      onClick: function onClick($event) {
        return $setup.deleteItem(data);
      }
    }, _hoisted_24, 8
    /* PROPS */
    , _hoisted_21)])]);
  }), 256
  /* UNKEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]);
}

/***/ }),

/***/ "./node_modules/moment/lang/bg.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/bg.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : bulgarian (bg)
// author : Krasen Borisov : https://github.com/kraz
(function () {
    var lang = {
            months : "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
            monthsShort : "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays : "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
            weekdaysShort : "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin : "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat : {
                LT : "h:mm",
                L : "D.MM.YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd, D MMMM YYYY LT"
            },
            calendar : {
                sameDay : '[Днес в] LT',
                nextDay : '[Утре в] LT',
                nextWeek : 'dddd [в] LT',
                lastDay : '[Вчера в] LT',
                lastWeek : function () {
                    switch (this.day()) {
                    case 0:
                    case 3:
                    case 6:
                        return '[В изминалата] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                    case 5:
                        return '[В изминалия] dddd [в] LT';
                    }
                },
                sameElse : 'L'
            },
            relativeTime : {
                future : "след %s",
                past : "преди %s",
                s : "няколко секунди",
                m : "минута",
                mm : "%d минути",
                h : "час",
                hh : "%d часа",
                d : "ден",
                dd : "%d дни",
                M : "месец",
                MM : "%d месеца",
                y : "година",
                yy : "%d години"
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if (true) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('bg', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/ca.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/ca.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : catalan (ca)
// author : Juan G. Hurtado : https://github.com/juanghurtado
(function () {
    var lang = {
            months : "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),
            monthsShort : "Gen._Febr._Mar._Abr._Mai._Jun._Jul._Ag._Set._Oct._Nov._Des.".split("_"),
            weekdays : "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),
            weekdaysShort : "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),
            weekdaysMin : "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
            longDateFormat : {
                LT : "H:mm",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay : function () {
                    return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
                },
                nextDay : function () {
                    return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
                },
                nextWeek : function () {
                    return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
                },
                lastDay : function () {
                    return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
                },
                lastWeek : function () {
                    return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
                },
                sameElse : 'L'
            },
            relativeTime : {
                future : "en %s",
                past : "fa %s",
                s : "uns segons",
                m : "un minut",
                mm : "%d minuts",
                h : "una hora",
                hh : "%d hores",
                d : "un dia",
                dd : "%d dies",
                M : "un mes",
                MM : "%d mesos",
                y : "un any",
                yy : "%d anys"
            },
            ordinal : function (number) {
                return 'º';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('ca', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/cv.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/cv.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : chuvash (cv)
// author : Anatoly Mironov : https://github.com/mirontoli
(function () {
    var lang = {
            months : "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
            monthsShort : "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
            weekdays : "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
            weekdaysShort : "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
            weekdaysMin : "вр_тн_ыт_юн_кç_эр_шм".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD-MM-YYYY",
                LL : "YYYY çулхи MMMM уйăхĕн D-мĕшĕ",
                LLL : "YYYY çулхи MMMM уйăхĕн D-мĕшĕ, LT",
                LLLL : "dddd, YYYY çулхи MMMM уйăхĕн D-мĕшĕ, LT"
            },
            calendar : {
                sameDay: '[Паян] LT [сехетре]',
                nextDay: '[Ыран] LT [сехетре]',
                lastDay: '[Ĕнер] LT [сехетре]',
                nextWeek: '[Çитес] dddd LT [сехетре]',
                lastWeek: '[Иртнĕ] dddd LT [сехетре]',
                sameElse: 'L'
            },
            relativeTime : {
                future : function(output) {
                   var affix = /сехет$/i.exec(output)
                      ? "рен" : /çул$/i.exec(output) ? "тан" : "ран";
                   return output + affix;
                },
                past : "%s каялла",
                s : "пĕр-ик çеккунт",
                m : "пĕр минут",
                mm : "%d минут",
                h : "пĕр сехет",
                hh : "%d сехет",
                d : "пĕр кун",
                dd : "%d кун",
                M : "пĕр уйăх",
                MM : "%d уйăх",
                y : "пĕр çул",
                yy : "%d çул"
            },
            ordinal : function (number) {
                return '-мĕш';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('cv', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/da.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/da.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : danish (da)
// author : Ulrik Nielsen : https://github.com/mrbase
(function () {
    var lang = {
            months : "Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December".split("_"),
            monthsShort : "Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec".split("_"),
            weekdays : "Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag".split("_"),
            weekdaysShort : "Søn_Man_Tir_Ons_Tor_Fre_Lør".split("_"),
            weekdaysMin : "Sø_Ma_Ti_On_To_Fr_Lø".split("_"),
            longDateFormat : {
                LT : "h:mm A",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY h:mm A",
                LLLL : "dddd D. MMMM, YYYY h:mm A"
            },
            calendar : {
                sameDay : '[I dag kl.] LT',
                nextDay : '[I morgen kl.] LT',
                nextWeek : 'dddd [kl.] LT',
                lastDay : '[I går kl.] LT',
                lastWeek : '[sidste] dddd [kl] LT',
                sameElse : 'L'
            },
            relativeTime : {
                future : "om %s",
                past : "%s siden",
                s : "få sekunder",
                m : "minut",
                mm : "%d minutter",
                h : "time",
                hh : "%d timer",
                d : "dag",
                dd : "%d dage",
                M : "månede",
                MM : "%d måneder",
                y : "år",
                yy : "%d år"
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('da', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/de.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/de.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : german (de)
// author : lluchs : https://github.com/lluchs
(function () {
    var lang = {
            months : "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
            monthsShort : "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
            weekdays : "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
            weekdaysShort : "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin : "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            longDateFormat : {
                LT: "H:mm U\\hr",
                L : "DD.MM.YYYY",
                LL : "D. MMMM YYYY",
                LLL : "D. MMMM YYYY LT",
                LLLL : "dddd, D. MMMM YYYY LT"
            },
            calendar : {
                sameDay: "[Heute um] LT",
                sameElse: "L",
                nextDay: '[Morgen um] LT',
                nextWeek: 'dddd [um] LT',
                lastDay: '[Gestern um] LT',
                lastWeek: '[letzten] dddd [um] LT'
            },
            relativeTime : {
                future : "in %s",
                past : "vor %s",
                s : "ein paar Sekunden",
                m : "einer Minute",
                mm : "%d Minuten",
                h : "einer Stunde",
                hh : "%d Stunden",
                d : "einem Tag",
                dd : "%d Tagen",
                M : "einem Monat",
                MM : "%d Monaten",
                y : "einem Jahr",
                yy : "%d Jahren"
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('de', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/en-ca.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/lang/en-ca.js ***!
  \*******************************************/
/***/ ((module) => {

// moment.js language configuration
// language : canadian english (en-ca)
// author : Jonathan Abourbih : https://github.com/jonbca
(function () {
    var lang = {
            months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat : {
                LT : "h:mm A",
                L : "YYYY-MM-DD",
                LL : "D MMMM, YYYY",
                LLL : "D MMMM, YYYY LT",
                LLLL : "dddd, D MMMM, YYYY LT"
            },
            calendar : {
                sameDay : '[Today at] LT',
                nextDay : '[Tomorrow at] LT',
                nextWeek : 'dddd [at] LT', 
                lastDay : '[Yesterday at] LT',
                lastWeek : '[last] dddd [at] LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "in %s",
                past : "%s ago",
                s : "a few seconds",
                m : "a minute",
                mm : "%d minutes",
                h : "an hour",
                hh : "%d hours",
                d : "a day",
                dd : "%d days",
                M : "a month",
                MM : "%d months",
                y : "a year",
                yy : "%d years"
            },
            ordinal : function (number) {
                var b = number % 10;
                return (~~ (number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('en-ca', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/en-gb.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/lang/en-gb.js ***!
  \*******************************************/
/***/ ((module) => {

// moment.js language configuration
// language : great britain english (en-gb)
// author : Chris Gedrim : https://github.com/chrisgedrim
(function () {
    var lang = {
            months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat : {
                LT : "h:mm A",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd, D MMMM YYYY LT"
            },
            calendar : {
                sameDay : '[Today at] LT',
                nextDay : '[Tomorrow at] LT',
                nextWeek : 'dddd [at] LT', 
                lastDay : '[Yesterday at] LT',
                lastWeek : '[last] dddd [at] LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "in %s",
                past : "%s ago",
                s : "a few seconds",
                m : "a minute",
                mm : "%d minutes",
                h : "an hour",
                hh : "%d hours",
                d : "a day",
                dd : "%d days",
                M : "a month",
                MM : "%d months",
                y : "a year",
                yy : "%d years"
            },
            ordinal : function (number) {
                var b = number % 10;
                return (~~ (number % 100 / 10) === 1) ? 'th' :
                    (b === 1) ? 'st' :
                    (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('en-gb', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/es.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/es.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : spanish (es)
// author : Julio Napurí : https://github.com/julionc
(function () {
    var lang = {
            months : "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),
            monthsShort : "Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),
            weekdays : "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
            weekdaysShort : "Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),
            weekdaysMin : "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
            longDateFormat : {
                LT : "H:mm",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay : function () {
                    return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
                },
                nextDay : function () {
                    return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
                },
                nextWeek : function () {
                    return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
                },
                lastDay : function () {
                    return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
                },
                lastWeek : function () {
                    return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
                },
                sameElse : 'L'
            },
            relativeTime : {
                future : "en %s",
                past : "hace %s",
                s : "unos segundos",
                m : "un minuto",
                mm : "%d minutos",
                h : "una hora",
                hh : "%d horas",
                d : "un día",
                dd : "%d días",
                M : "un mes",
                MM : "%d meses",
                y : "un año",
                yy : "%d años"
            },
            ordinal : function (number) {
                return 'º';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('es', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/et.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/et.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : estonian (et)
// author : Henry Kehlmann : https://github.com/madhenry
(function () {

    function translate(number, withoutSuffix, key, isFuture) {
        var num = number;
        
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'paari sekundi' : 'paar sekundit';
            default:
        }
        
        return '';
    }

    var lang = {
            months        : "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
            monthsShort   : "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
            weekdays      : "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
            weekdaysShort : "P_E_T_K_N_R_L".split("_"),
            weekdaysMin   : "P_E_T_K_N_R_L".split("_"),
            longDateFormat : {
                LT   : "H:mm",
                L    : "DD.MM.YYYY",
                LL   : "D. MMMM YYYY",
                LLL  : "D. MMMM YYYY LT",
                LLLL : "dddd, D. MMMM YYYY LT"
            },
            calendar : {
                sameDay  : '[Täna,] LT',
                nextDay  : '[Homme,] LT',
                nextWeek : '[Järgmine] dddd LT',
                lastDay  : '[Eile,] LT',
                lastWeek : '[Eelmine] dddd LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s pärast",
                past   : "%s tagasi",
                s      : translate,
                m      : "minut",
                mm     : "%d minutit",
                h      : "tund",
                hh     : "%d tundi",
                d      : "päev",
                dd     : "%d päeva",
                M      : "kuu",
                MM     : "%d kuud",
                y      : "aasta",
                yy     : "%d aastat"
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('et', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/eu.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/eu.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : euskara (eu)
// author : Eneko Illarramendi : https://github.com/eillarra
(function () {
    var lang = {
            months : "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
            monthsShort : "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
            weekdays : "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
            weekdaysShort : "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin : "ig_al_ar_az_og_ol_lr".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "YYYY-MM-DD",
                LL : "YYYYko MMMMren D[a]",
                LLL : "YYYYko MMMMren D[a] LT",
                LLLL : "dddd, YYYYko MMMMren D[a] LT"
            },
            calendar : {
                sameDay : '[gaur] LT[etan]',
                nextDay : '[bihar] LT[etan]',
                nextWeek : 'dddd LT[etan]',
                lastDay : '[atzo] LT[etan]',
                lastWeek : '[aurreko] dddd LT[etan]',
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s barru",
                past : "duela %s",
                s : "segundo batzuk",
                m : "minutu bat",
                mm : "%d minutu",
                h : "ordu bat",
                hh : "%d ordu",
                d : "egun bat",
                dd : "%d egun",
                M : "hilabete bat",
                MM : "%d hilabete",
                y : "urte bat",
                yy : "%d urte"
            },
            ordinal : function (number) {
                return '.';
            }
        };
    
    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('eu', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/fi.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/fi.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : finnish (fi)
// author : Tarmo Aidantausta : https://github.com/bleadof
(function () {
    var numbers_past = ['nolla', 'yksi', 'kaksi', 'kolme', 'neljä', 'viisi',
                        'kuusi', 'seitsemän', 'kahdeksan', 'yhdeksän'];
    var numbers_future = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden',
                          'kuuden', numbers_past[7], numbers_past[8], numbers_past[9]];

    function translate(number, withoutSuffix, key, isFuture) {
        var result = "";
        switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
        }
        result = verbal_number(number, isFuture) + " " + result;
        return result;
    }

    function verbal_number(number, isFuture) {
        return number < 10 ? (isFuture ? numbers_future[number] : numbers_past[number]) : number;
    }

    var lang = {
            months : "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
            monthsShort : "tam_hel_maa_huh_tou_kes_hei_elo_syy_lok_mar_jou".split("_"),
            weekdays : "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
            weekdaysShort : "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin : "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat : {
                LT : "HH.mm",
                L : "DD.MM.YYYY",
                LL : "Do MMMMt\\a YYYY",
                LLL : "Do MMMMt\\a YYYY, klo LT",
                LLLL : "dddd, Do MMMMt\\a YYYY, klo LT"
            },
            calendar : {
                sameDay : '[tänään] [klo] LT',
                nextDay : '[huomenna] [klo] LT',
                nextWeek : 'dddd [klo] LT',
                lastDay : '[eilen] [klo] LT',
                lastWeek : '[viime] dddd[na] [klo] LT',
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s päästä",
                past : "%s sitten",
                s : translate,
                m : translate,
                mm : translate,
                h : translate,
                hh : translate,
                d : translate,
                dd : translate,
                M : translate,
                MM : translate,
                y : translate,
                yy : translate
            },
            ordinal : function (number) {
                return ".";
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('fi', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/fr-ca.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/lang/fr-ca.js ***!
  \*******************************************/
/***/ ((module) => {

// moment.js language configuration
// language : canadian french (fr-ca)
// author : Jonathan Abourbih : https://github.com/jonbca
(function () {
    var lang = {
            months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "YYYY-MM-DD",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: '[Demain à] LT',
                nextWeek: 'dddd [à] LT',
                lastDay: '[Hier à] LT',
                lastWeek: 'dddd [dernier à] LT',
                sameElse: 'L'
            },
            relativeTime : {
                future : "dans %s",
                past : "il y a %s",
                s : "quelques secondes",
                m : "une minute",
                mm : "%d minutes",
                h : "une heure",
                hh : "%d heures",
                d : "un jour",
                dd : "%d jours",
                M : "un mois",
                MM : "%d mois",
                y : "une année",
                yy : "%d années"
            },
            ordinal : function (number) {
                return number === 1 ? 'er' : 'ème';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('fr-ca', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/fr.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/fr.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : french (fr)
// author : John Fischer : https://github.com/jfroffice
(function () {
    var lang = {
            months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
            monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
            weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay: "[Aujourd'hui à] LT",
                nextDay: '[Demain à] LT',
                nextWeek: 'dddd [à] LT',
                lastDay: '[Hier à] LT',
                lastWeek: 'dddd [dernier à] LT',
                sameElse: 'L'
            },
            relativeTime : {
                future : "dans %s",
                past : "il y a %s",
                s : "quelques secondes",
                m : "une minute",
                mm : "%d minutes",
                h : "une heure",
                hh : "%d heures",
                d : "un jour",
                dd : "%d jours",
                M : "un mois",
                MM : "%d mois",
                y : "une année",
                yy : "%d années"
            },
            ordinal : function (number) {
                return number === 1 ? 'er' : 'ème';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('fr', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/gl.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/gl.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : galician (gl)
// author : Juan G. Hurtado : https://github.com/juanghurtado
(function () {
    var lang = {
            months : "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Octubro_Novembro_Decembro".split("_"),
            monthsShort : "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
            weekdays : "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
            weekdaysShort : "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
            weekdaysMin : "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
            longDateFormat : {
                LT : "H:mm",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay : function () {
                    return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
                },
                nextDay : function () {
                    return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
                },
                nextWeek : function () {
                    return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
                },
                lastDay : function () {
                    return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
                },
                lastWeek : function () {
                    return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
                },
                sameElse : 'L'
            },
            relativeTime : {
                future : "en %s",
                past : "fai %s",
                s : "uns segundo",
                m : "un minuto",
                mm : "%d minutos",
                h : "unha hora",
                hh : "%d horas",
                d : "un día",
                dd : "%d días",
                M : "un mes",
                MM : "%d meses",
                y : "un ano",
                yy : "%d anos"
            },
            ordinal : function (number) {
                return 'º';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('gl', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/hu.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/hu.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : hungarian (hu)
// author : Adam Brunner : https://github.com/adambrunner
(function()
{
    function translate(number, withoutSuffix, key, isFuture) {
        var num = number;
        
        switch (key) {
            case 's':
                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
                
            case 'm':
                num = 'egy';
            case 'mm':
                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
                break;

            case 'h':
                num = 'egy';
            case 'hh':
                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');

            case 'd':
                num = 'egy';
            case 'dd':
                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
                
            case 'M':
                num = 'egy';
            case 'MM':
                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
                
            case 'y':
                num = 'egy';
            case 'yy':
                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
                
            default:
        }
        
        return '';
    }

    function week(isFuture) {
        var ending = '';
        switch (this.day()) {
            case 0: ending = 'vasárnap'; break;
            case 1: ending = 'hétfőn'; break;
            case 2: ending = 'kedden'; break;
            case 3: ending = 'szerdán'; break;
            case 4: ending = 'csütörtökön'; break;
            case 5: ending = 'pénteken'; break;
            case 6: ending = 'szombaton'; break;
        }
        return (isFuture ? '' : 'múlt ')+'['+ending+'] LT[-kor]';
    }
    
    var lang = {
            months : "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
            monthsShort : "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
            weekdays : "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort : "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat : {
                LT : "H:mm",
                L : "YYYY.MM.DD.",
                LL : "YYYY. MMMM D.",
                LLL : "YYYY. MMMM D., LT",
                LLLL : "YYYY. MMMM D., dddd LT"
            },
            calendar : {
                sameDay : '[ma] LT[-kor]',
                nextDay : '[holnap] LT[-kor]',
                nextWeek : function(){return week.call(this, true);}, 
                lastDay : '[tegnap] LT[-kor]',
                lastWeek : function(){return week.call(this, false);}, 
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s múlva",
                past : "%s",
                s : translate,
                m : translate,
                mm : translate,
                h : translate,
                hh : translate,
                d : translate,
                dd : translate,
                M : translate,
                MM : translate,
                y : translate,
                yy : translate
            },
            ordinal : function(number) {
                return '.';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }

    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('hu', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/is.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/is.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : icelandic (is)
// author : Hinrik Örn Sigurðsson : https://github.com/hinrik
(function () {
    var plural = function (n) {
        if (n % 100 == 11) {
            return true;
        } else if (n % 10 == 1) {
            return false;
        } else {
            return true;
        }
    },

    translate = function (number, withoutSuffix, key, isFuture) {
        var result = number + " ";
        switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
        case 'm':
            return withoutSuffix ? 'mínúta' : 'mínútu';
        case 'mm':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
            } else if (withoutSuffix) {
                return result + 'mínúta';
            } else {
                return result + 'mínútu';
            }
        case 'hh':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
            } else {
                return result + 'klukkustund';
            }
        case 'd':
            if (withoutSuffix) {
                return 'dagur'
            } else {
                return isFuture ? 'dag' : 'degi';
            }
        case 'dd':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'dagar'
                } else {
                    return result + (isFuture ? 'daga' : 'dögum');
                }
            } else if (withoutSuffix) {
                return result + 'dagur'
            } else {
                return result + (isFuture ? 'dag' : 'degi');
            }
        case 'M':
            if (withoutSuffix) {
                return 'mánuður'
            } else {
                return isFuture ? 'mánuð' : 'mánuði';
            }
        case 'MM':
            if (plural(number)) {
                if (withoutSuffix) {
                    return result + 'mánuðir'
                } else {
                    return result + (isFuture ? 'mánuði' : 'mánuðum');
                }
            } else if (withoutSuffix) {
                return result + 'mánuður';
            } else {
                return result + (isFuture ? 'mánuð' : 'mánuði');
            }
        case 'y':
            return withoutSuffix || isFuture ? 'ár' : 'ári';
        case 'yy':
            if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
            } else {
                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
            }
        }
    },

    lang = {
            months : "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
            monthsShort : "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays : "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
            weekdaysShort : "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin : "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat : {
                LT : "H:mm",
                L : "DD/MM/YYYY",
                LL : "D. MMMM YYYY",
                LLL : "D. MMMM YYYY kl. LT",
                LLLL : "dddd, D. MMMM YYYY kl. LT"
            },
            calendar : {
                sameDay : '[í dag kl.] LT',
                nextDay : '[á morgun kl.] LT',
                nextWeek : 'dddd [kl.] LT',
                lastDay : '[í gær kl.] LT',
                lastWeek : '[síðasta] dddd [kl.] LT',
                sameElse : 'L'
            },
            relativeTime : {
                future : "eftir %s",
                past : "fyrir %s síðan",
                s : translate,
                m : translate,
                mm : translate,
                h : "klukkustund",
                hh : translate,
                d : translate,
                dd : translate,
                M : translate,
                MM : translate,
                y : translate,
                yy : translate,
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('is', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/it.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/it.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : italian (it)
// author : Lorenzo : https://github.com/aliem
(function () {
    var lang = {
            months : "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
            monthsShort : "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
            weekdays : "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
            weekdaysShort : "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
            weekdaysMin : "D_L_Ma_Me_G_V_S".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd, D MMMM YYYY LT"
            },
            calendar : {
                sameDay: '[Oggi alle] LT',
                nextDay: '[Domani alle] LT',
                nextWeek: 'dddd [alle] LT',
                lastDay: '[Ieri alle] LT',
                lastWeek: '[lo scorso] dddd [alle] LT',
                sameElse: 'L'
            },
            relativeTime : {
                future : "in %s",
                past : "%s fa",
                s : "secondi",
                m : "un minuto",
                mm : "%d minuti",
                h : "un'ora",
                hh : "%d ore",
                d : "un giorno",
                dd : "%d giorni",
                M : "un mese",
                MM : "%d mesi",
                y : "un anno",
                yy : "%d anni"
            },
            ordinal: function () {
                return 'º';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('it', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/ja.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/ja.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : japanese (ja)
// author : LI Long : https://github.com/baryon
(function () {
    var lang = {
            months : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays : "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort : "日_月_火_水_木_金_土".split("_"),
            weekdaysMin : "日_月_火_水_木_金_土".split("_"),
            longDateFormat : {
                LT : "Ah時m分",
                L : "YYYY/MM/DD",
                LL : "YYYY年M月D日",
                LLL : "YYYY年M月D日LT",
                LLLL : "YYYY年M月D日LT dddd"
            },
            meridiem : function (hour, minute, isLower) {
                if (hour < 12) {
                    return "午前";
                } else {
                    return "午後";
                }
            },
            calendar : {
                sameDay : '[今日] LT',
                nextDay : '[明日] LT',
                nextWeek : '[来週]dddd LT', 
                lastDay : '[昨日] LT',
                lastWeek : '[前週]dddd LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s後",
                past : "%s前",
                s : "数秒",
                m : "1分",
                mm : "%d分",
                h : "1時間",
                hh : "%d時間",
                d : "1日",
                dd : "%d日",
                M : "1ヶ月",
                MM : "%dヶ月",
                y : "1年",
                yy : "%d年"
            },
            ordinal : function (number) {
                return '';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('ja', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/jp.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/jp.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : japanese (jp)
// author : LI Long : https://github.com/baryon

// This language config was incorrectly named 'jp' instead of 'ja'.
// In version 2.0.0, this will be deprecated and you should use 'ja' instead.
(function () {
    var lang = {
            months : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays : "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
            weekdaysShort : "日_月_火_水_木_金_土".split("_"),
            weekdaysMin : "日_月_火_水_木_金_土".split("_"),
            longDateFormat : {
                LT : "Ah時m分",
                L : "YYYY/MM/DD",
                LL : "YYYY年M月D日",
                LLL : "YYYY年M月D日LT",
                LLLL : "YYYY年M月D日LT dddd"
            },
            meridiem : function (hour, minute, isLower) {
                if (hour < 12) {
                    return "午前";
                } else {
                    return "午後";
                }
            },
            calendar : {
                sameDay : '[今日] LT',
                nextDay : '[明日] LT',
                nextWeek : '[来週]dddd LT', 
                lastDay : '[昨日] LT',
                lastWeek : '[前週]dddd LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s後",
                past : "%s前",
                s : "数秒",
                m : "1分",
                mm : "%d分",
                h : "1時間",
                hh : "%d時間",
                d : "1日",
                dd : "%d日",
                M : "1ヶ月",
                MM : "%dヶ月",
                y : "1年",
                yy : "%d年"
            },
            ordinal : function (number) {
                return '';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('jp', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/ko.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/ko.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : korean (ko)
// author : Kyungwook, Park : https://github.com/kyungw00k
(function () {
    var lang = {
            months : "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort : "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays : "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort : "일_월_화_수_목_금_토".split("_"),
            weekdaysMin : "일_월_화_수_목_금_토".split("_"),
            longDateFormat : {
                LT : "A h시 mm분",
                L : "YYYY.MM.DD",
                LL : "YYYY년 MMMM D일",
                LLL : "YYYY년 MMMM D일 LT",
                LLLL : "YYYY년 MMMM D일 dddd LT"
            },
            meridiem : function (hour, minute, isUpper) {
                return hour < 12 ? '오전' : '오후';
            },
            calendar : {
                sameDay : '오늘 LT',
                nextDay : '내일 LT',
                nextWeek : 'dddd LT',
                lastDay : '어제 LT',
                lastWeek : '지난주 dddd LT',
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s 후",
                past : "%s 전",
                s : "몇초",
                ss : "%d초",
                m : "일분",
                mm : "%d분",
                h : "한시간",
                hh : "%d시간",
                d : "하루",
                dd : "%d일",
                M : "한달",
                MM : "%d달",
                y : "일년",
                yy : "%d년"
            },
            ordinal : function (number) {
                return '일';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('ko', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/kr.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/kr.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : korean (kr)
// author : Kyungwook, Park : https://github.com/kyungw00k

// This language config was incorrectly named 'kr' instead of 'ko'.
// In version 2.0.0, this will be deprecated and you should use 'ko' instead.
(function () {
    var lang = {
            months : "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            monthsShort : "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays : "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
            weekdaysShort : "일_월_화_수_목_금_토".split("_"),
            weekdaysMin : "일_월_화_수_목_금_토".split("_"),
            longDateFormat : {
                LT : "A h시 mm분",
                L : "YYYY.MM.DD",
                LL : "YYYY년 MMMM D일",
                LLL : "YYYY년 MMMM D일 LT",
                LLLL : "YYYY년 MMMM D일 dddd LT"
            },
            meridiem : function (hour, minute, isUpper) {
                return hour < 12 ? '오전' : '오후';
            },
            calendar : {
                sameDay : '오늘 LT',
                nextDay : '내일 LT',
                nextWeek : 'dddd LT',
                lastDay : '어제 LT',
                lastWeek : '지난주 dddd LT',
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s 후",
                past : "%s 전",
                s : "몇초",
                ss : "%d초",
                m : "일분",
                mm : "%d분",
                h : "한시간",
                hh : "%d시간",
                d : "하루",
                dd : "%d일",
                M : "한달",
                MM : "%d달",
                y : "일년",
                yy : "%d년"
            },
            ordinal : function (number) {
                return '일';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('kr', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/nb.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/nb.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : norwegian bokmål (nb)
// author : Espen Hovlandsdal : https://github.com/rexxars
(function () {
    var lang = {
            months : "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
            monthsShort : "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays : "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort : "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin : "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "YYYY-MM-DD",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay: '[I dag klokken] LT',
                nextDay: '[I morgen klokken] LT',
                nextWeek: 'dddd [klokken] LT',
                lastDay: '[I går klokken] LT',
                lastWeek: '[Forrige] dddd [klokken] LT',
                sameElse: 'L'
            },
            relativeTime : {
                future : "om %s",
                past : "for %s siden",
                s : "noen sekunder",
                m : "ett minutt",
                mm : "%d minutter",
                h : "en time",
                hh : "%d timer",
                d : "en dag",
                dd : "%d dager",
                M : "en måned",
                MM : "%d måneder",
                y : "ett år",
                yy : "%d år"
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('nb', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/nl.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/nl.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : dutch (nl)
// author : Joris Röling : https://github.com/jjupiter
(function () {
    var monthsShortWithDots = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_");
    var monthsShortWithoutDots = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
    var lang = {
            months : "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
            monthsShort : function (m, format) {
                if (/-MMM-/.test(format)) {
                    return monthsShortWithoutDots[m.month()];
                } else {
                    return monthsShortWithDots[m.month()];
                }
            },
            weekdays : "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
            weekdaysShort : "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin : "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD-MM-YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay: '[Vandaag om] LT',
                nextDay: '[Morgen om] LT',
                nextWeek: 'dddd [om] LT',
                lastDay: '[Gisteren om] LT',
                lastWeek: '[afgelopen] dddd [om] LT',
                sameElse: 'L'
            },
            relativeTime : {
                future : "over %s",
                past : "%s geleden",
                s : "een paar seconden",
                m : "één minuut",
                mm : "%d minuten",
                h : "één uur",
                hh : "%d uur",
                d : "één dag",
                dd : "%d dagen",
                M : "één maand",
                MM : "%d maanden",
                y : "één jaar",
                yy : "%d jaar"
            },
            ordinal : function (number) {
                return (number === 1 || number === 8 || number >= 20) ? 'ste' : 'de';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('nl', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/pl.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/pl.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : polish (pl)
// author : Rafal Hirsz : https://github.com/evoL
(function () {
    var plural = function (n) { 
        return (n % 10 < 5) && (n % 10 > 1) && (~~(n / 10) !== 1);
    },
    
    translate = function (number, withoutSuffix, key) {
        var result = number + " ";
        switch (key) {
        case 'm': 
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm': 
            return result + (plural(number) ? 'minuty' : 'minut');
        case 'h': 
            return withoutSuffix  ? 'godzina'  : 'godzinę';
        case 'hh': 
            return result + (plural(number) ? 'godziny' : 'godzin');
        case 'MM': 
            return result + (plural(number) ? 'miesiące' : 'miesięcy');
        case 'yy': 
            return result + (plural(number) ? 'lata' : 'lat');
        }
    },
  
    lang = {
        months : "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
        monthsShort : "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays : "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort : "nie_pon_wt_śr_czw_pt_sb".split("_"),
        weekdaysMin : "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat : {
            LT : "HH:mm",
            L : "DD-MM-YYYY",
            LL : "D MMMM YYYY",
            LLL : "D MMMM YYYY LT",
            LLLL : "dddd, D MMMM YYYY LT"
        },
        calendar : {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: '[W] dddd [o] LT',
            lastDay: '[Wczoraj o] LT',
            lastWeek: '[W zeszły/łą] dddd [o] LT',
            sameElse: 'L'
        },
        relativeTime : {
            future : "za %s",
            past : "%s temu",
            s : "kilka sekund",
            m : translate,
            mm : translate,
            h : translate,
            hh : translate,
            d : "1 dzień",
            dd : '%d dni',
            M : "miesiąc",
            MM : translate,
            y : "rok",
            yy : translate
        },
        ordinal : function (number) {
            return '.';
        }
    };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('pl', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/pt-br.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/lang/pt-br.js ***!
  \*******************************************/
/***/ ((module) => {

// moment.js language configuration
// language : brazilian portuguese (pt-br)
// author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
(function () {
    var lang = {
            months : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort : "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin : "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD/MM/YYYY",
                LL : "D \\de MMMM \\de YYYY",
                LLL : "D \\de MMMM \\de YYYY LT",
                LLLL : "dddd, D \\de MMMM \\de YYYY LT"
            },
            calendar : {
                sameDay: '[Hoje às] LT',
                nextDay: '[Amanhã às] LT',
                nextWeek: 'dddd [às] LT',
                lastDay: '[Ontem às] LT',
                lastWeek: function () {
                    return (this.day() === 0 || this.day() === 6) ? 
                        '[Último] dddd [às] LT' : // Saturday + Sunday
                        '[Última] dddd [às] LT'; // Monday - Friday
                },
                sameElse: 'L'
            },
            relativeTime : {
                future : "em %s",
                past : "%s atrás",
                s : "segundos",
                m : "um minuto",
                mm : "%d minutos",
                h : "uma hora",
                hh : "%d horas",
                d : "um dia",
                dd : "%d dias",
                M : "um mês",
                MM : "%d meses",
                y : "um ano",
                yy : "%d anos"
            },
            ordinal : function (number) {
                return 'º';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('pt-br', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/pt.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/pt.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : portuguese (pt)
// author : Jefferson : https://github.com/jalex79
(function () {
    var lang = {
            months : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
            monthsShort : "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays : "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
            weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin : "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD/MM/YYYY",
                LL : "D \\de MMMM \\de YYYY",
                LLL : "D \\de MMMM \\de YYYY LT",
                LLLL : "dddd, D \\de MMMM \\de YYYY LT"
            },
            calendar : {
                sameDay: '[Hoje às] LT',
                nextDay: '[Amanhã às] LT',
                nextWeek: 'dddd [às] LT',
                lastDay: '[Ontem às] LT',
                lastWeek: function () {
                    return (this.day() === 0 || this.day() === 6) ? 
                        '[Último] dddd [às] LT' : // Saturday + Sunday
                        '[Última] dddd [às] LT'; // Monday - Friday
                },
                sameElse: 'L'
            },
            relativeTime : {
                future : "em %s",
                past : "%s atrás",
                s : "segundos",
                m : "um minuto",
                mm : "%d minutos",
                h : "uma hora",
                hh : "%d horas",
                d : "um dia",
                dd : "%d dias",
                M : "um mês",
                MM : "%d meses",
                y : "um ano",
                yy : "%d anos"
            },
            ordinal : function (number) {
                return 'º';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('pt', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/ro.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/ro.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : romanian (ro)
// author : Vlad Gurdiga : https://github.com/gurdiga
// author : Valentin Agachi : https://github.com/avaly
(function () {
    var lang = {
            months : "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),
            monthsShort : "Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sep_Oct_Noi_Dec".split("_"),
            weekdays : "Duminică_Luni_Marţi_Miercuri_Joi_Vineri_Sâmbătă".split("_"),
            weekdaysShort : "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin : "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat : {
                LT : "H:mm",
                L : "DD/MM/YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY H:mm",
                LLLL : "dddd, D MMMM YYYY H:mm"
            },
            calendar : {
                sameDay: "[azi la] LT",
                nextDay: '[mâine la] LT',
                nextWeek: 'dddd [la] LT',
                lastDay: '[ieri la] LT',
                lastWeek: '[fosta] dddd [la] LT',
                sameElse: 'L'
            },
            relativeTime : {
                future : "peste %s",
                past : "%s în urmă",
                s : "câteva secunde",
                m : "un minut",
                mm : "%d minute",
                h : "o oră",
                hh : "%d ore",
                d : "o zi",
                dd : "%d zile",
                M : "o lună",
                MM : "%d luni",
                y : "un an",
                yy : "%d ani"
            },
            ordinal : function (number) {
                return '';
            }
        };

    // Node
    if (true) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('ro', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/ru.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/ru.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : russian (ru)
// author : Viktorminator : https://github.com/Viktorminator
(function () {

    var pluralRules = [
        function (n) { return ((n % 10 === 1) && (n % 100 !== 11)); },
        function (n) { return ((n % 10) >= 2 && (n % 10) <= 4 && ((n % 10) % 1) === 0) && ((n % 100) < 12 || (n % 100) > 14); },
        function (n) { return ((n % 10) === 0 || ((n % 10) >= 5 && (n % 10) <= 9 && ((n % 10) % 1) === 0) || ((n % 100) >= 11 && (n % 100) <= 14 && ((n % 100) % 1) === 0)); },
        function (n) { return true; }
    ],

    plural = function (word, num) {
        var forms = word.split('_'),
        minCount = Math.min(pluralRules.length, forms.length),
        i = -1;

        while (++i < minCount) {
            if (pluralRules[i](num)) {
                return forms[i];
            }
        }
        return forms[minCount - 1];
    },

    relativeTimeWithPlural = function (number, withoutSuffix, key) {
        var format = {
            'mm': 'минута_минуты_минут_минуты',
            'hh': 'час_часа_часов_часа',
            'dd': 'день_дня_дней_дня',
            'MM': 'месяц_месяца_месяцев_месяца',
            'yy': 'год_года_лет_года'
        };
        if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
        }
        else {
            return number + ' ' + plural(format[key], +number);
        }
    },

    monthsCaseReplace = function (m, format) {
        var months = {
            'nominative': 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
            'accusative': 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
        },

        nounCase = (/D[oD]? *MMMM?/).test(format) ?
            'accusative' :
            'nominative';

        return months[nounCase][m.month()];
    },

    weekdaysCaseReplace = function (m, format) {
        var weekdays = {
            'nominative': 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            'accusative': 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
        },

        nounCase = (/\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/).test(format) ?
            'accusative' :
            'nominative';

        return weekdays[nounCase][m.day()];
    },

    lang = {
            months : monthsCaseReplace,
            monthsShort : "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays : weekdaysCaseReplace,
            weekdaysShort : "вск_пнд_втр_срд_чтв_птн_сбт".split("_"),
            weekdaysMin : "вс_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD.MM.YYYY",
                LL : "D MMMM YYYY г.",
                LLL : "D MMMM YYYY г., LT",
                LLLL : "dddd, D MMMM YYYY г., LT"
            },
            calendar : {
                sameDay: '[Сегодня в] LT',
                nextDay: '[Завтра в] LT',
                lastDay: '[Вчера в] LT',
                nextWeek: function () {
                    return this.day() === 2 ? '[Во] dddd [в] LT' : '[В] dddd [в] LT';
                },
                lastWeek: function () {
                    switch (this.day()) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                    }
                },
                sameElse: 'L'
            },
            // It needs checking (adding) russian plurals and cases.
            relativeTime : {
                future : "через %s",
                past : "%s назад",
                s : "несколько секунд",
                m : relativeTimeWithPlural,
                mm : relativeTimeWithPlural,
                h : "час",
                hh : relativeTimeWithPlural,
                d : "день",
                dd : relativeTimeWithPlural,
                M : "месяц",
                MM : relativeTimeWithPlural,
                y : "год",
                yy : relativeTimeWithPlural
            },
            ordinal : function (number) {
                return '.';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('ru', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/sv.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/sv.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : swedish (sv)
// author : Jens Alm : https://github.com/ulmus
(function () {
    var lang = {
            months : "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
            monthsShort : "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays : "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
            weekdaysShort : "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin : "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "YYYY-MM-DD",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd D MMMM YYYY LT"
            },
            calendar : {
                sameDay: '[Idag klockan] LT',
                nextDay: '[Imorgon klockan] LT',
                lastDay: '[Igår klockan] LT',
                nextWeek: 'dddd [klockan] LT',
                lastWeek: '[Förra] dddd[en klockan] LT',
                sameElse: 'L'
            },
            relativeTime : {
                future : "om %s",
                past : "för %s sen",
                s : "några sekunder",
                m : "en minut",
                mm : "%d minuter",
                h : "en timme",
                hh : "%d timmar",
                d : "en dag",
                dd : "%d dagar",
                M : "en månad",
                MM : "%d månader",
                y : "ett år",
                yy : "%d år"
            },
            ordinal : function (number) {
                var b = number % 10;
                return (~~ (number % 100 / 10) === 1) ? 'e' :
                    (b === 1) ? 'a' :
                    (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('sv', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/tr.js":
/*!****************************************!*\
  !*** ./node_modules/moment/lang/tr.js ***!
  \****************************************/
/***/ ((module) => {

// moment.js language configuration
// language : turkish (tr)
// authors : Erhan Gundogan : https://github.com/erhangundogan,
//           Burak Yiğit Kaya: https://github.com/BYK
(function () {
    var suffixes = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",

        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",

        3: "'üncü",
        4: "'üncü",
        100: "'üncü",

        6: "'ncı",

        9: "'uncu",
        10: "'uncu",
        30: "'uncu",

        60: "'ıncı",
        90: "'ıncı"
    };
    var lang = {
            months : "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
            monthsShort : "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays : "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
            weekdaysShort : "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
            weekdaysMin : "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            longDateFormat : {
                LT : "HH:mm",
                L : "DD.MM.YYYY",
                LL : "D MMMM YYYY",
                LLL : "D MMMM YYYY LT",
                LLLL : "dddd, D MMMM YYYY LT"
            },
            calendar : {
                sameDay : '[bugün saat] LT',
                nextDay : '[yarın saat] LT',
                nextWeek : '[haftaya] dddd [saat] LT', 
                lastDay : '[dün] LT',
                lastWeek : '[geçen hafta] dddd [saat] LT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s sonra",
                past : "%s önce",
                s : "birkaç saniye",
                m : "bir dakika",
                mm : "%d dakika",
                h : "bir saat",
                hh : "%d saat",
                d : "bir gün",
                dd : "%d gün",
                M : "bir ay",
                MM : "%d ay",
                y : "bir yıl",
                yy : "%d yıl"
            },
            ordinal : function (number) {
                if (number === 0) {  // special case for zero
                    return "'ıncı";
                }

                var a = number % 10;
                var b = number % 100 - a;
                var c = number >= 100 ? 100 : null;

                return suffixes[a] || suffixes[b] || suffixes[c];
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('tr', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/zh-cn.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/lang/zh-cn.js ***!
  \*******************************************/
/***/ ((module) => {

// moment.js language configuration
// language : chinese
// author : suupic : https://github.com/suupic
(function () {
    var lang = {
            months : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort : "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin : "日_一_二_三_四_五_六".split("_"),
            longDateFormat : {
                LT : "Ah点mm",
                L : "YYYY年MMMD日",
                LL : "YYYY年MMMD日",
                LLL : "YYYY年MMMD日LT",
                LLLL : "YYYY年MMMD日ddddLT"
            },
            meridiem : function (hour, minute, isLower) {
                if (hour < 9) {
                    return "早上";
                } else if (hour < 11 && minute < 30) {
                    return "上午";
                } else if (hour < 13 && minute < 30) {
                    return "中午";
                } else if (hour < 18) {
                    return "下午";
                } else {
                    return "晚上";
                }
            },
            calendar : {
                sameDay : '[今天]LT',
                nextDay : '[明天]LT',
                nextWeek : '[下]ddddLT', 
                lastDay : '[昨天]LT',
                lastWeek : '[上]ddddLT', 
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s内",
                past : "%s前",
                s : "几秒",
                m : "1分钟",
                mm : "%d分钟",
                h : "1小时",
                hh : "%d小时",
                d : "1天",
                dd : "%d天",
                M : "1个月",
                MM : "%d个月",
                y : "1年",
                yy : "%d年"
            },
            ordinal : function (number) {
                return '';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('zh-cn', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang/zh-tw.js":
/*!*******************************************!*\
  !*** ./node_modules/moment/lang/zh-tw.js ***!
  \*******************************************/
/***/ ((module) => {

// moment.js language configuration
// language : traditional chinese (zh-tw)
// author : Ben : https://github.com/ben-lin
(function () {
    var lang = {
            months : "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
            monthsShort : "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays : "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
            weekdaysShort : "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin : "日_一_二_三_四_五_六".split("_"),
            longDateFormat : {
                LT : "Ah點mm",
                L : "YYYY年MMMD日",
                LL : "YYYY年MMMD日",
                LLL : "YYYY年MMMD日LT",
                LLLL : "YYYY年MMMD日ddddLT"
            },
            meridiem : function (hour, minute, isLower) {
                if (hour < 9) {
                    return "早上";
                } else if (hour < 11 && minute < 30) {
                    return "上午";
                } else if (hour < 13 && minute < 30) {
                    return "中午";
                } else if (hour < 18) {
                    return "下午";
                } else {
                    return "晚上";
                }
            },
            calendar : {
                sameDay : '[今天]LT',
                nextDay : '[明天]LT',
                nextWeek : '[下]ddddLT',
                lastDay : '[昨天]LT',
                lastWeek : '[上]ddddLT',
                sameElse : 'L'
            },
            relativeTime : {
                future : "%s內",
                past : "%s前",
                s : "幾秒",
                m : "一分鐘",
                mm : "%d分鐘",
                h : "一小時",
                hh : "%d小時",
                d : "一天",
                dd : "%d天",
                M : "一個月",
                MM : "%d個月",
                y : "一年",
                yy : "%d年"
            },
            ordinal : function (number) {
                return '';
            }
        };

    // Node
    if ( true && module.exports) {
        module.exports = lang;
    }
    // Browser
    if (typeof window !== 'undefined' && this.moment && this.moment.lang) {
        this.moment.lang('zh-tw', lang);
    }
}());


/***/ }),

/***/ "./node_modules/moment/lang sync recursive ^\\.\\/.*$":
/*!*************************************************!*\
  !*** ./node_modules/moment/lang/ sync ^\.\/.*$ ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./bg": "./node_modules/moment/lang/bg.js",
	"./bg.js": "./node_modules/moment/lang/bg.js",
	"./ca": "./node_modules/moment/lang/ca.js",
	"./ca.js": "./node_modules/moment/lang/ca.js",
	"./cv": "./node_modules/moment/lang/cv.js",
	"./cv.js": "./node_modules/moment/lang/cv.js",
	"./da": "./node_modules/moment/lang/da.js",
	"./da.js": "./node_modules/moment/lang/da.js",
	"./de": "./node_modules/moment/lang/de.js",
	"./de.js": "./node_modules/moment/lang/de.js",
	"./en-ca": "./node_modules/moment/lang/en-ca.js",
	"./en-ca.js": "./node_modules/moment/lang/en-ca.js",
	"./en-gb": "./node_modules/moment/lang/en-gb.js",
	"./en-gb.js": "./node_modules/moment/lang/en-gb.js",
	"./es": "./node_modules/moment/lang/es.js",
	"./es.js": "./node_modules/moment/lang/es.js",
	"./et": "./node_modules/moment/lang/et.js",
	"./et.js": "./node_modules/moment/lang/et.js",
	"./eu": "./node_modules/moment/lang/eu.js",
	"./eu.js": "./node_modules/moment/lang/eu.js",
	"./fi": "./node_modules/moment/lang/fi.js",
	"./fi.js": "./node_modules/moment/lang/fi.js",
	"./fr": "./node_modules/moment/lang/fr.js",
	"./fr-ca": "./node_modules/moment/lang/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/lang/fr-ca.js",
	"./fr.js": "./node_modules/moment/lang/fr.js",
	"./gl": "./node_modules/moment/lang/gl.js",
	"./gl.js": "./node_modules/moment/lang/gl.js",
	"./hu": "./node_modules/moment/lang/hu.js",
	"./hu.js": "./node_modules/moment/lang/hu.js",
	"./is": "./node_modules/moment/lang/is.js",
	"./is.js": "./node_modules/moment/lang/is.js",
	"./it": "./node_modules/moment/lang/it.js",
	"./it.js": "./node_modules/moment/lang/it.js",
	"./ja": "./node_modules/moment/lang/ja.js",
	"./ja.js": "./node_modules/moment/lang/ja.js",
	"./jp": "./node_modules/moment/lang/jp.js",
	"./jp.js": "./node_modules/moment/lang/jp.js",
	"./ko": "./node_modules/moment/lang/ko.js",
	"./ko.js": "./node_modules/moment/lang/ko.js",
	"./kr": "./node_modules/moment/lang/kr.js",
	"./kr.js": "./node_modules/moment/lang/kr.js",
	"./nb": "./node_modules/moment/lang/nb.js",
	"./nb.js": "./node_modules/moment/lang/nb.js",
	"./nl": "./node_modules/moment/lang/nl.js",
	"./nl.js": "./node_modules/moment/lang/nl.js",
	"./pl": "./node_modules/moment/lang/pl.js",
	"./pl.js": "./node_modules/moment/lang/pl.js",
	"./pt": "./node_modules/moment/lang/pt.js",
	"./pt-br": "./node_modules/moment/lang/pt-br.js",
	"./pt-br.js": "./node_modules/moment/lang/pt-br.js",
	"./pt.js": "./node_modules/moment/lang/pt.js",
	"./ro": "./node_modules/moment/lang/ro.js",
	"./ro.js": "./node_modules/moment/lang/ro.js",
	"./ru": "./node_modules/moment/lang/ru.js",
	"./ru.js": "./node_modules/moment/lang/ru.js",
	"./sv": "./node_modules/moment/lang/sv.js",
	"./sv.js": "./node_modules/moment/lang/sv.js",
	"./tr": "./node_modules/moment/lang/tr.js",
	"./tr.js": "./node_modules/moment/lang/tr.js",
	"./zh-cn": "./node_modules/moment/lang/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/lang/zh-cn.js",
	"./zh-tw": "./node_modules/moment/lang/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/lang/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/lang sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "1.7.2",
        round = Math.round, i,
        // internal storage for language config files
        languages = {},
        currentLanguage = 'en',

        // check for nodeJS
        hasModule = ( true && module.exports),

        // Parameters to check for on the lang config.  This list of properties
        // will be inherited from English if not provided in a language
        // definition.  monthsParse is also a lang config property, but it
        // cannot be inherited and as such cannot be enumerated here.
        langConfigProperties = 'months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem'.split('|'),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,

        // parsing tokens
        parseMultipleFormatChunker = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenWord = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i, // any word characters or numbers
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO seperator)

        // preliminary iso regex
        // 0000-00-00 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000
        isoRegex = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.S', /T\d\d:\d\d:\d\d\.\d{1,3}/],
            ['HH:mm:ss', /T\d\d:\d\d:\d\d/],
            ['HH:mm', /T\d\d:\d\d/],
            ['HH', /T\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Month|Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        // format function strings
        formatFunctions = {},

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w M D d'.split(' '),
        paddedTokens = 'M D H h m s w'.split(' '),

        /*
         * moment.fn.format uses new Function() to create an inlined formatting function.
         * Results are a 3x speed boost
         * http://jsperf.com/momentjs-cached-format-functions
         *
         * These strings are appended into a function using replaceFormatTokens and makeFormatFunction
         */
        formatTokenFunctions = {
            // a = placeholder
            // b = placeholder
            // t = the current moment being formatted
            // v = getValueAtKey function
            // o = language.ordinal function
            // p = leftZeroFill function
            // m = language.meridiem value or function
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return getValueFromArray("monthsShort", this.month(), this, format);
            },
            MMMM : function (format) {
                return getValueFromArray("months", this.month(), this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                var a = new Date(this.year(), this.month(), this.date()),
                    b = new Date(this.year(), 0, 1);
                return ~~(((a - b) / 864e5) + 1.5);
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return getValueFromArray("weekdaysMin", this.day(), this, format);
            },
            ddd  : function (format) {
                return getValueFromArray("weekdaysShort", this.day(), this, format);
            },
            dddd : function (format) {
                return getValueFromArray("weekdays", this.day(), this, format);
            },
            w    : function () {
                var a = new Date(this.year(), this.month(), this.date() - this.day() + 5),
                    b = new Date(a.getFullYear(), 0, 4);
                return ~~((a - b) / 864e5 / 7 + 1.5);
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return ~~(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(~~(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(~~(a / 60), 2) + ":" + leftZeroFill(~~a % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(~~(10 * a / 6), 4);
            }
        };

    function getValueFromArray(key, index, m, format) {
        var lang = m.lang();
        return lang[key].call ? lang[key](m, format) : lang[key][index];
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func) {
        return function (a) {
            var b = func.call(this, a);
            return b + this.lang().ordinal(b);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i]);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/


    // Moment prototype object
    function Moment(date, isUTC, lang) {
        this._d = date;
        this._isUTC = !!isUTC;
        this._a = date._a || null;
        this._lang = lang || false;
    }

    // Duration Constructor
    function Duration(duration) {
        var data = this._data = {},
            years = duration.years || duration.y || 0,
            months = duration.months || duration.M || 0,
            weeks = duration.weeks || duration.w || 0,
            days = duration.days || duration.d || 0,
            hours = duration.hours || duration.h || 0,
            minutes = duration.minutes || duration.m || 0,
            seconds = duration.seconds || duration.s || 0,
            milliseconds = duration.milliseconds || duration.ms || 0;

        // representation for dateAddRemove
        this._milliseconds = milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = months +
            years * 12;

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds += absRound(milliseconds / 1000);

        data.seconds = seconds % 60;
        minutes += absRound(seconds / 60);

        data.minutes = minutes % 60;
        hours += absRound(minutes / 60);

        data.hours = hours % 24;
        days += absRound(hours / 24);

        days += weeks * 7;
        data.days = days % 30;

        months += absRound(days / 30);

        data.months = months % 12;
        years += absRound(months / 12);

        data.years = years;

        this._lang = false;
    }


    /************************************
        Helpers
    ************************************/


    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding) {
        var ms = duration._milliseconds,
            d = duration._days,
            M = duration._months,
            currentDate;

        if (ms) {
            mom._d.setTime(+mom + ms * isAdding);
        }
        if (d) {
            mom.date(mom.date() + d * isAdding);
        }
        if (M) {
            currentDate = mom.date();
            mom.date(1)
                .month(mom.month() + M * isAdding)
                .date(Math.min(currentDate, mom.daysInMonth()));
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (~~array1[i] !== ~~array2[i]) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromArray(input, asUTC, hoursOffset, minutesOffset) {
        var i, date, forValid = [];
        for (i = 0; i < 7; i++) {
            forValid[i] = input[i] = (input[i] == null) ? (i === 2 ? 1 : 0) : input[i];
        }
        // we store whether we used utc or not in the input array
        input[7] = forValid[7] = asUTC;
        // if the parser flagged the input as invalid, we pass the value along
        if (input[8] != null) {
            forValid[8] = input[8];
        }
        // add the offsets to the time to be parsed so that we can have a clean array
        // for checking isValid
        input[3] += hoursOffset || 0;
        input[4] += minutesOffset || 0;
        date = new Date(0);
        if (asUTC) {
            date.setUTCFullYear(input[0], input[1], input[2]);
            date.setUTCHours(input[3], input[4], input[5], input[6]);
        } else {
            date.setFullYear(input[0], input[1], input[2]);
            date.setHours(input[3], input[4], input[5], input[6]);
        }
        date._a = forValid;
        return date;
    }

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        var i, m,
            parse = [];

        if (!values && hasModule) {
            values = __webpack_require__("./node_modules/moment/lang sync recursive ^\\.\\/.*$")("./" + key);
        }

        for (i = 0; i < langConfigProperties.length; i++) {
            // If a language definition does not provide a value, inherit
            // from English
            values[langConfigProperties[i]] = values[langConfigProperties[i]] ||
              languages.en[langConfigProperties[i]];
        }

        for (i = 0; i < 12; i++) {
            m = moment([2000, i]);
            parse[i] = new RegExp('^' + (values.months[i] || values.months(m, '')) +
                '|^' + (values.monthsShort[i] || values.monthsShort(m, '')).replace('.', ''), 'i');
        }
        values.monthsParse = values.monthsParse || parse;

        languages[key] = values;

        return values;
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.  If you pass in a moment or duration instance, it
    // will decide the language based on that, or default to the global
    // language.
    function getLangDefinition(m) {
        var langKey = (typeof m === 'string') && m ||
                      m && m._lang ||
                      null;

        return langKey ? (languages[langKey] || loadLang(langKey)) : moment;
    }


    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[.*\]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += typeof array[i].call === 'function' ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return m.lang().longDateFormat[input] || input;
        }

        while (i-- && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        }

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token) {
        switch (token) {
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
            return parseTokenFourDigits;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
        case 'a':
        case 'A':
            return parseTokenWord;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
            return parseTokenOneOrTwoDigits;
        default :
            return new RegExp(token.replace('\\', ''));
        }
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, datePartArray, config) {
        var a, b;

        switch (token) {
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            datePartArray[1] = (input == null) ? 0 : ~~input - 1;
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            for (a = 0; a < 12; a++) {
                if (getLangDefinition().monthsParse[a].test(input)) {
                    datePartArray[1] = a;
                    b = true;
                    break;
                }
            }
            // if we didn't find a month name, mark the date as invalid.
            if (!b) {
                datePartArray[8] = false;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DDDD
        case 'DD' : // fall through to DDDD
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                datePartArray[2] = ~~input;
            }
            break;
        // YEAR
        case 'YY' :
            datePartArray[0] = ~~input + (~~input > 70 ? 1900 : 2000);
            break;
        case 'YYYY' :
            datePartArray[0] = ~~Math.abs(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config.isPm = ((input + '').toLowerCase() === 'pm');
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[3] = ~~input;
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[4] = ~~input;
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[5] = ~~input;
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
            datePartArray[6] = ~~ (('0.' + input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config.isUTC = true;
            a = (input + '').match(parseTimezoneChunker);
            if (a && a[1]) {
                config.tzh = ~~a[1];
            }
            if (a && a[2]) {
                config.tzm = ~~a[2];
            }
            // reverse offsets
            if (a && a[0] === '+') {
                config.tzh = -config.tzh;
                config.tzm = -config.tzm;
            }
            break;
        }

        // if the input is null, the date is not valid
        if (input == null) {
            datePartArray[8] = false;
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(string, format) {
        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        // We store some additional data on the array for validation
        // datePartArray[7] is true if the Date was created with `Date.UTC` and false if created with `new Date`
        // datePartArray[8] is false if the Date is invalid, and undefined if the validity is unknown.
        var datePartArray = [0, 0, 1, 0, 0, 0, 0],
            config = {
                tzh : 0, // timezone hour offset
                tzm : 0  // timezone minute offset
            },
            tokens = format.match(formattingTokens),
            i, parsedInput;

        for (i = 0; i < tokens.length; i++) {
            parsedInput = (getParseRegexForToken(tokens[i]).exec(string) || [])[0];
            if (parsedInput) {
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            }
            // don't parse if its not a known token
            if (formatTokenFunctions[tokens[i]]) {
                addTimeToArrayFromToken(tokens[i], parsedInput, datePartArray, config);
            }
        }
        // handle am pm
        if (config.isPm && datePartArray[3] < 12) {
            datePartArray[3] += 12;
        }
        // if is 12 am, change hours to 0
        if (config.isPm === false && datePartArray[3] === 12) {
            datePartArray[3] = 0;
        }
        // return
        return dateFromArray(datePartArray, config.isUTC, config.tzh, config.tzm);
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(string, formats) {
        var output,
            inputParts = string.match(parseMultipleFormatChunker) || [],
            formattedInputParts,
            scoreToBeat = 99,
            i,
            currentDate,
            currentScore;
        for (i = 0; i < formats.length; i++) {
            currentDate = makeDateFromStringAndFormat(string, formats[i]);
            formattedInputParts = formatMoment(new Moment(currentDate), formats[i]).match(parseMultipleFormatChunker) || [];
            currentScore = compareArrays(inputParts, formattedInputParts);
            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                output = currentDate;
            }
        }
        return output;
    }

    // date from iso format
    function makeDateFromString(string) {
        var format = 'YYYY-MM-DDT',
            i;
        if (isoRegex.exec(string)) {
            for (i = 0; i < 4; i++) {
                if (isoTimes[i][1].exec(string)) {
                    format += isoTimes[i][0];
                    break;
                }
            }
            return parseTokenTimezone.exec(string) ?
                makeDateFromStringAndFormat(string, format + ' Z') :
                makeDateFromStringAndFormat(string, format);
        }
        return new Date(string);
    }


    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        var rt = lang.relativeTime[string];
        return (typeof rt === 'function') ?
            rt(number || 1, !!withoutSuffix, string, isFuture) :
            rt.replace(/%d/i, number || 1);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Top Level Functions
    ************************************/


    moment = function (input, format) {
        if (input === null || input === '') {
            return null;
        }
        var date,
            matched;
        // parse Moment object
        if (moment.isMoment(input)) {
            return new Moment(new Date(+input._d), input._isUTC, input._lang);
        // parse string and format
        } else if (format) {
            if (isArray(format)) {
                date = makeDateFromStringAndArray(input, format);
            } else {
                date = makeDateFromStringAndFormat(input, format);
            }
        // evaluate it as a JSON-encoded date
        } else {
            matched = aspNetJsonRegex.exec(input);
            date = input === undefined ? new Date() :
                matched ? new Date(+matched[1]) :
                input instanceof Date ? input :
                isArray(input) ? dateFromArray(input) :
                typeof input === 'string' ? makeDateFromString(input) :
                new Date(input);
        }

        return new Moment(date);
    };

    // creating with utc
    moment.utc = function (input, format) {
        if (isArray(input)) {
            return new Moment(dateFromArray(input, true), true);
        }
        // if we don't have a timezone, we need to add one to trigger parsing into utc
        if (typeof input === 'string' && !parseTokenTimezone.exec(input)) {
            input += ' +0000';
            if (format) {
                format += ' Z';
            }
        }
        return moment(input, format).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var isDuration = moment.isDuration(input),
            isNumber = (typeof input === 'number'),
            duration = (isDuration ? input._data : (isNumber ? {} : input)),
            ret;

        if (isNumber) {
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        }

        ret = new Duration(duration);

        if (isDuration) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // humanizeDuration
    // This method is deprecated in favor of the new Duration object.  Please
    // see the moment.duration method.
    moment.humanizeDuration = function (num, type, withSuffix) {
        return moment.duration(num, type === true ? null : type).humanize(type === true ? true : withSuffix);
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        var i;

        if (!key) {
            return currentLanguage;
        }
        if (values || !languages[key]) {
            loadLang(key, values);
        }
        if (languages[key]) {
            // deprecated, to get the language definition variables, use the
            // moment.fn.lang method or the getLangDefinition function.
            for (i = 0; i < langConfigProperties.length; i++) {
                moment[langConfigProperties[i]] = languages[key][langConfigProperties[i]];
            }
            moment.monthsParse = languages[key].monthsParse;
            currentLanguage = key;
        }
    };

    // returns language data
    moment.langData = getLangDefinition;

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment;
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },
        calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[last] dddd [at] LT',
            sameElse : 'L'
        },
        relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        ordinal : function (number) {
            var b = number % 10;
            return (~~ (number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        }
    });


    /************************************
        Moment Prototype
    ************************************/


    moment.fn = Moment.prototype = {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d;
        },

        unix : function () {
            return Math.floor(+this._d / 1000);
        },

        toString : function () {
            return this._d.toString();
        },

        toDate : function () {
            return this._d;
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds(),
                !!this._isUTC
            ];
        },

        isValid : function () {
            if (this._a) {
                // if the parser finds that the input is invalid, it sets
                // the eighth item in the input array to false.
                if (this._a[8] != null) {
                    return !!this._a[8];
                }
                return !compareArrays(this._a, (this._a[7] ? moment.utc(this._a) : moment(this._a)).toArray());
            }
            return !isNaN(this._d.getTime());
        },

        utc : function () {
            this._isUTC = true;
            return this;
        },

        local : function () {
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            return formatMoment(this, inputString ? inputString : moment.defaultFormat);
        },

        add : function (input, val) {
            var dur = val ? moment.duration(+val, input) : moment.duration(input);
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur = val ? moment.duration(+val, input) : moment.duration(input);
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, val, asFloat) {
            var inputMoment = this._isUTC ? moment(input).utc() : moment(input).local(),
                zoneDiff = (this.zone() - inputMoment.zone()) * 6e4,
                diff = this._d - inputMoment._d - zoneDiff,
                year = this.year() - inputMoment.year(),
                month = this.month() - inputMoment.month(),
                date = this.date() - inputMoment.date(),
                output;
            if (val === 'months') {
                output = year * 12 + month + date / 30;
            } else if (val === 'years') {
                output = year + (month + date / 30) / 12;
            } else {
                output = val === 'seconds' ? diff / 1e3 : // 1000
                    val === 'minutes' ? diff / 6e4 : // 1000 * 60
                    val === 'hours' ? diff / 36e5 : // 1000 * 60 * 60
                    val === 'days' ? diff / 864e5 : // 1000 * 60 * 60 * 24
                    val === 'weeks' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
                    diff;
            }
            return asFloat ? output : round(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this._lang).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            var diff = this.diff(moment().sod(), 'days', true),
                calendar = this.lang().calendar,
                allElse = calendar.sameElse,
                format = diff < -6 ? allElse :
                diff < -1 ? calendar.lastWeek :
                diff < 0 ? calendar.lastDay :
                diff < 1 ? calendar.sameDay :
                diff < 2 ? calendar.nextDay :
                diff < 7 ? calendar.nextWeek : allElse;
            return this.format(typeof format === 'function' ? format.apply(this) : format);
        },

        isLeapYear : function () {
            var year = this.year();
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        },

        isDST : function () {
            return (this.zone() < moment([this.year()]).zone() ||
                this.zone() < moment([this.year(), 5]).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return input == null ? day :
                this.add({ d : input - day });
        },

        startOf: function (val) {
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (val.replace(/s$/, '')) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'month':
                this.date(1);
                /* falls through */
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }
            return this;
        },

        endOf: function (val) {
            return this.startOf(val).add(val.replace(/s?$/, 's'), 1).subtract('ms', 1);
        },

        sod: function () {
            return this.clone().startOf('day');
        },

        eod: function () {
            // end of day = start of day plus 1 day, minus 1 millisecond
            return this.clone().endOf('day');
        },

        zone : function () {
            return this._isUTC ? 0 : this._d.getTimezoneOffset();
        },

        daysInMonth : function () {
            return moment.utc([this.year(), this.month() + 1, 0]).date();
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (lang) {
            if (lang === undefined) {
                return getLangDefinition(this);
            } else {
                this._lang = lang;
                return this;
            }
        }
    };

    // helper for adding shortcuts
    function makeGetterAndSetter(name, key) {
        moment.fn[name] = function (input) {
            var utc = this._isUTC ? 'UTC' : '';
            if (input != null) {
                this._d['set' + utc + key](input);
                return this;
            } else {
                return this._d['get' + utc + key]();
            }
        };
    }

    // loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
    for (i = 0; i < proxyGettersAndSetters.length; i ++) {
        makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase(), proxyGettersAndSetters[i]);
    }

    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
    makeGetterAndSetter('year', 'FullYear');


    /************************************
        Duration Prototype
    ************************************/


    moment.duration.fn = Duration.prototype = {
        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              this._months * 2592e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                rel = this.lang().relativeTime,
                output = relativeTime(difference, !withSuffix, this.lang()),
                fromNow = difference <= 0 ? rel.past : rel.future;

            if (withSuffix) {
                if (typeof fromNow === 'function') {
                    output = fromNow(output);
                } else {
                    output = fromNow.replace(/%s/i, output);
                }
            }

            return output;
        },

        lang : moment.fn.lang
    };

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);


    /************************************
        Exposing Moment
    ************************************/


    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    }
    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `moment` as a global object via a string identifier,
        // for Closure Compiler "advanced" mode
        this['moment'] = moment;
    }
    /*global define:false */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return moment;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}).call(this);


/***/ }),

/***/ "./resources/js/views/pages/users/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/pages/users/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_22387531__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=22387531 */ "./resources/js/views/pages/users/Index.vue?vue&type=template&id=22387531");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/views/pages/users/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var C_laragon_www_github_api_usernames_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_laragon_www_github_api_usernames_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_22387531__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/views/pages/users/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/views/pages/users/Index.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/users/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pages/users/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/views/pages/users/Index.vue?vue&type=template&id=22387531":
/*!********************************************************************************!*\
  !*** ./resources/js/views/pages/users/Index.vue?vue&type=template&id=22387531 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_22387531__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_22387531__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=22387531 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/views/pages/users/Index.vue?vue&type=template&id=22387531");


/***/ })

}]);