function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header-component></header-component>\n<router-outlet></router-outlet>\n<footer-component></footer-component>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedFooterHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footerContainer bgColorStyle2\">\r\n    <nav class=\"footerMenu centerWidth\">\r\n        <ul>\r\n            <li><a href=\"#\">מפת אתר</a></li>\r\n            <li><a href=\"#\">מספר גרסה של המערכת</a></li>\r\n        </ul>\r\n    </nav>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedHeaderHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"row mainNavigation\">\r\n    <div class=\"centerWidth\">\r\n        <div class=\"loginName col-md-3 col-sm-12 col-xs-12\">\r\n            <p class=\"userName\">שלום, <span>ישראל ישראלי</span></p>\r\n            <button title=\"יציאה מהאזור האישי\" aria-label=\"בעת לחיצה מתנתק מהאזור האישי\" class=\"loginSite linkColor1\">יציאה</button>\r\n        </div>\r\n        <nav class=\"navbar col-md-9 col-sm-12 col-xs-12\">\r\n            <div class=\"container\">\r\n                <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navHeaderCollapse\" title=\"פתח תפריט\">\r\n                    <span class=\"icon-bar\" role=\"presentation\"></span>\r\n                    <span class=\"icon-bar\" role=\"presentation\"></span>\r\n                    <span class=\"icon-bar\" role=\"presentation\"></span>\r\n                </button>\r\n                <div class=\"collapse navbar-collapse navHeaderCollapse\">\r\n                    <ul class=\"nav navbar-nav navbar-right\" role=\"menu\">\r\n                        <li role=\"menuitem\">\r\n                            <a href=\"#\" class=\"linkItem activeLink\" data-toggle=\"dropdown\" aria-expanded=\"false\" tabindex=\"0\">משתמשים <b class=\"caret\"></b></a>\r\n\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">ניהול משתמשים</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">פרטי משתמש</a>\r\n                                </li>\r\n                            </ul>\r\n\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a href=\"#\" class=\"linkItem\" data-toggle=\"dropdown\" aria-expanded=\"false\" tabindex=\"0\">ניהול מערכת <b class=\"caret\"></b></a>\r\n\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">רשימת רמות ארגוניות</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">פרטי רמה ארגונית</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">רשימת שלבים לרמה ארגונית</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">פרטי שלב</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">רשימת שאלונים</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">פרטי שאלון</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">קישור תפריטים לתפקיד</a>\r\n                                </li>\r\n                            </ul>\r\n\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a href=\"#\" class=\"linkItem\" data-toggle=\"dropdown\" aria-expanded=\"false\" tabindex=\"0\">ניהול הגיוס <b class=\"caret\"></b></a>\r\n\r\n                            <ul class=\"dropdown-menu\">\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">הוספת משרה</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">הוספת מועמד</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">חיפוש משרה</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">חיפוש מועמד</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">תמונת מצב</a>\r\n                                </li>\r\n                                <li role=\"menuitem\">\r\n                                    <a href=\"#\" class=\"subMenu-item\" tabindex=\"0\">רשימת מטלות</a>\r\n                                </li>\r\n                            </ul>\r\n\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a href=\"#\" class=\"linkItem\" tabindex=\"0\">דוחות ריכוזיים</a>\r\n                        </li>\r\n                        <li role=\"menuitem\">\r\n                            <a href=\"#\" class=\"linkItem\" tabindex=\"0\">התראות</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/UserUpdate/userUpdate.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/UserUpdate/userUpdate.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersUserUpdateUserUpdateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div  *ngIf=\"currentUser$ | async as user\">\n     <div>\n        <!--[if lt IE 8]>\n            <p class=\"browserupgrade\">You are using an <strong>outdated</strong> browser. Please <a href=\"http://browsehappy.com/\">upgrade your browser</a> to improve your experience.</p>\n        <![endif]-->\n        <section class=\"bradcrumbs row bgColorStyle2\">\n            <ul class=\"centerWidth\">\n                <li>\n                    <a href=\"#\" class=\"pathway\"><span>משתמשים</span></a>\n                    <span class=\"divider\">/</span>\n                </li>\n                <li>\n                    <a href=\"#\" class=\"pathway\"><span>פרטי משתמש</span></a>\n                    <span class=\"divider\">/</span>\n                </li>\n                <li>\n                    <span>הוספת משתמש חדש</span>\n                </li>\n            </ul>\n        </section>\n        <section class=\"managment row bgColorStyle2\">\n            <form class=\"formStyle addNew-detils\">\n                <div class=\"container\">\n                    <div class=\"col-md-12\"><h2 class=\"headdingColor1\">פרטי משתמש</h2></div>\n                    <div class=\"user-formContainer col-md-12\">\n    \n                        <fieldset>\n                            <div class=\"col-md-6 col-sm-12\">\n                                <label for=\"userName\">שם משתמש *</label>\n                                <input id=\"userName\" name=\"userUserName\" type=\"text\"  [(ngModel)]=\"user.UserName\">\n                            </div>\n                            <div class=\"col-md-6 col-sm-12\">\n                                <label for=\"userID-IL\">תעודת זהות *</label>\n                                <input id=\"userID-IL\" name=\"userId\" type=\"text\"  [(ngModel)]=\"user.Id\">\n                            </div>\n                            <div class=\"col-md-6 col-sm-12\">\n                                <label for=\"userPhone\">טלפון *</label>\n                                <input id=\"userPhone\"  name=\"userPhone\" type=\"text\" [(ngModel)]=\"user.Phone\" >\n                            </div>\n                            <div class=\"col-md-6 col-sm-12\">\n                                <label for=\"userEmail\">דוא\"ל *</label>\n                                <input id=\"userEmail\"   name=\"userEmail\" type=\"text\"  [(ngModel)]=\"user.Email\">\n                            </div>\n                            <div class=\"col-md-6 col-sm-12\">\n                                <label for=\"positionName\">תפקיד *</label>\n                                <select id=\"positionName\"  name=\"positionName\" class=\"positionsList\" [(ngModel)]=\"user.RoleId\">\n                                     <option *ngFor=\"let role of roles$| async\" [value]=\"user.RoleId\" >{{role.Description}}</option>     \n                                </select>\n                             </div>\n                            <div class=\"col-md-6 col-sm-12\">\n                                <label for=\"\">פעיל</label>\n                                <input type=\"checkbox\" name=\"userIsActive\" [(ngModel)]=\"user.IsActive\"/>\n                            </div>\n                        </fieldset>\n    \n                    </div>\n                </div>\n                <div class=\"managmentButtons row\">\n                    <div class=\"container\">\n                        <button id=\"btnSave\" class=\"saveButton2 buttonStyle2\">שמירה</button>\n                        <button class=\"clearButton buttonStyle\">אפס סיסמה</button>\n                    </div>\n                </div>\n            </form>\n        </section>\n    \n    </div>\n</div>\n<div *ngIf=\"errorMessage\"\n     class=\"alert alert-danger\">\n  Error: {{ errorMessage }}\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/userList/userList.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/userList/userList.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersUserListUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <section class=\"bradcrumbs row bgColorStyle2\">\r\n      <ul class=\"centerWidth\">\r\n          <li>\r\n              <a href=\"#\" class=\"pathway\"><span>משתמשים</span></a>\r\n              <span class=\"divider\">/</span>\r\n          </li>\r\n          <li>\r\n              <span>ניהול משתמשים</span>\r\n          </li>\r\n      </ul>\r\n  </section>\r\n  <section class=\"managment row bgColorStyle2\">\r\n      <div class=\"container\">\r\n          <div class=\"col-md-12\"><h2 class=\"headdingColor1\">ניהול משתמשים</h2></div>\r\n          <div class=\"formContainer col-md-6 col-sm-10 col-xs-12\">\r\n              <form class=\"formStyle searchForm\">\r\n                  <fieldset>\r\n                      <div class=\"col-md-4\">\r\n                          <label for=\"userName\">שם משתמש</label>\r\n                          <input id=\"userName\" name=\"userName\"type=\"text\"  [(ngModel)]=\"searchCriteria.UserName\"  >\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                          <label for=\"positionName\">תפקיד</label>\r\n                          <select  id=\"positionName\"  name=\"positionName\"  [(ngModel)]=\"searchCriteria.RoleId\"  > \r\n                            <option *ngFor=\"let role of roles\" [value]=\"role.Id\">{{role.Description}}</option> \r\n                        </select>\r\n                        \r\n                      </div>\r\n                      <div class=\"col-md-2\">\r\n                          <button class=\"searcButton buttonStyle\" (click)=\"searchUsersClicked()\">חיפוש</button>\r\n                      </div>\r\n                  </fieldset>\r\n              </form>\r\n          </div>\r\n          <div class=\"newUser-Container col-md-6 col-sm-2 col-xs-12\">\r\n              <div class=\"newUser-inner\">\r\n                  <!-- <button id=\"AddUser\" class=\"add-newUser bgColorStyle3\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> -->\r\n                  <a class=\"editLink add-newUser bgColorStyle3\" routerLink=\"/UserUpdate/0\" title=\"ערוך פרטי משתמש\" aria-label=\"ערוך פרטי משתמש\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></a>\r\n                  <span>הוספת משתמש חדש</span>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </section>\r\n  \r\n  <main id=\"mainSection\" class=\"MainContainer centerWidth\">\r\n        <div class=\"modalTable-inner boederBg\" >\r\n          <table class=\"tableStyle1\" title=\"טבלת משתמשים\" id=\"UserTable\">\r\n\r\n\r\n              <thead>\r\n                  <tr>\r\n                      <th>מספר זהות<button class=\"sortTableBy\" title=\"מיין עמודת מספר זהות\"><i class=\"fa fa-sort-desc\" aria-hidden=\"true\"></i></button></th>\r\n                      <th>שם משתמש</th>\r\n                      <th>תפקיד</th>\r\n                      <th>תאריך יצירה</th>\r\n                      <th class=\"btnContainer\">פעיל</th>\r\n                      <th class=\"btnContainer\">עדכון</th>\r\n                  </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let user of users\">\r\n               \r\n                  <tr>\r\n                      <td >{{user.Id}}</td>\r\n                      <td>{{user.UserName}}</td>\r\n                      <td>{{user.RoleDescription}}</td>\r\n                      <td>{{user.CreateDate}}</td>\r\n                      <td  class=\"btnContainer\">\r\n                         {{user.IsActive ?'כן':'לא'}}\r\n                      </td>\r\n                      <td data-th=\"עדכון\" class=\"btnContainer\">\r\n                          <!-- <button type=\"button\" class=\"editButton\" title=\"ערוך פרטי משתמש\" aria-label=\"ערוך פרטי משתמש\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></button> -->\r\n                          <a class=\"editLink\" routerLink=\"/UserUpdate/{{ user.Id }}\" title=\"ערוך פרטי משתמש\" aria-label=\"ערוך פרטי משתמש\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\r\n                         </td>\r\n                  </tr>\r\n              </tbody>\r\n          </table>\r\n      </div>\r\n     \r\n  </main>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/userListWrapper/userListWrapper.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/userListWrapper/userListWrapper.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsersUserListWrapperUserListWrapperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <app-user-list [errorMessage]=\"errorMessage$ | async\"\r\n                     [users]=\"users$ | async\"\r\n                     [roles]=\"roles$ | async\"\r\n                     (searchUsers)=\"searchUsers($any($event))\"\r\n                    (userWasSelected)=\"userSelected($any($event))\">\r\n    </app-user-list> ";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_shared_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/shared/header.component */
    "./src/app/components/shared/header.component.ts");
    /* harmony import */


    var _components_shared_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/shared/footer.component */
    "./src/app/components/shared/footer.component.ts");
    /* harmony import */


    var _components_shared_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/shared/page-not-found.component */
    "./src/app/components/shared/page-not-found.component.ts");
    /* harmony import */


    var _app_components_users_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../app/components/users/user.module */
    "./src/app/components/users/user.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* Feature Modules */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([]), _app_components_users_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_11__["StoreDevtoolsModule"].instrument({
        name: 'debug',
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([])],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_shared_header_component__WEBPACK_IMPORTED_MODULE_6__["Header"], _components_shared_footer_component__WEBPACK_IMPORTED_MODULE_7__["Footer"], _components_shared_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/shared/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/shared/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: Footer */

  /***/
  function srcAppComponentsSharedFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Footer", function () {
      return Footer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Footer = function Footer() {
      _classCallCheck(this, Footer);
    };

    Footer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'footer-component',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer.html"))["default"]
    })], Footer);
    /***/
  },

  /***/
  "./src/app/components/shared/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/shared/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: Header */

  /***/
  function srcAppComponentsSharedHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Header", function () {
      return Header;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Header = function Header() {
      _classCallCheck(this, Header);
    };

    Header = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'header-component',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./header.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header.html"))["default"]
    })], Header);
    /***/
  },

  /***/
  "./src/app/components/shared/page-not-found.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/shared/page-not-found.component.ts ***!
    \***************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsSharedPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = function PageNotFoundComponent() {
      _classCallCheck(this, PageNotFoundComponent);
    };

    PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <h1>This is not the page you were looking for!</h1>\n    "
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/components/users/UserUpdate/userUpdate.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/users/UserUpdate/userUpdate.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UserUpdateComponent */

  /***/
  function srcAppComponentsUsersUserUpdateUserUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserUpdateComponent", function () {
      return UserUpdateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../state */
    "./src/app/components/users/state/index.ts");
    /* harmony import */


    var _state_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../state/actions */
    "./src/app/components/users/state/actions/index.ts");
    /* NgRx */


    var UserUpdateComponent =
    /*#__PURE__*/
    ///
    ///user class that shows current user by id specified in url
    ///if no id is passed-passesd "0" than shows form for create user with defult values
    ///
    function () {
      function UserUpdateComponent(store, route, router) {
        _classCallCheck(this, UserUpdateComponent);

        this.store = store;
        this.route = route;
        this.router = router;
        this.pageTitle = 'edit';
        this.errorMessage = '';
        this.currentUserId = "";
      }

      _createClass(UserUpdateComponent, [{
        key: "ngOnInit",
        ///if id passed in url is 0 then returns a new user instance from store
        //if id is !="0" than loads the specified user 
        //if no user was loadded shows error message
        value: function ngOnInit() {
          this.currentUserId = this.route.snapshot.paramMap.get('id');

          if (this.currentUserId == "0") {
            this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_5__["UserPageActions"].initializeCurrentUser());
            this.currentUser$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getUser"]);
          } else {
            this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_5__["UserPageActions"].getCurrentUser({
              currentUserId: this.currentUserId
            }));
            this.currentUser$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getUser"]);
          }

          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_5__["UserPageActions"].loadRoles());
          this.roles$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getRoles"]);
          this.errorMessage$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_4__["getError"]);
        }
      }]);

      return UserUpdateComponent;
    }();

    UserUpdateComponent.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UserUpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userUpdate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/UserUpdate/userUpdate.component.html"))["default"]
    }) ///
    ///user class that shows current user by id specified in url
    ///if no id is passed-passesd "0" than shows form for create user with defult values
    ///
    ], UserUpdateComponent);
    /***/
  },

  /***/
  "./src/app/components/users/state/actions/index.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/users/state/actions/index.ts ***!
    \*********************************************************/

  /*! exports provided: UserApiActions, UserPageActions */

  /***/
  function srcAppComponentsUsersStateActionsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _user_page_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-page.actions */
    "./src/app/components/users/state/actions/user-page.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "UserPageActions", function () {
      return _user_page_actions__WEBPACK_IMPORTED_MODULE_0__;
    });
    /* harmony import */


    var _user_api_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-api.actions */
    "./src/app/components/users/state/actions/user-api.actions.ts");
    /* harmony reexport (module object) */


    __webpack_require__.d(__webpack_exports__, "UserApiActions", function () {
      return _user_api_actions__WEBPACK_IMPORTED_MODULE_1__;
    });
    /***/

  },

  /***/
  "./src/app/components/users/state/actions/user-api.actions.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/users/state/actions/user-api.actions.ts ***!
    \********************************************************************/

  /*! exports provided: loadUsersSuccess, loadUsersFailure, GetUserSuccess, GetUserFailure, searchUsersSuccess, searchUsersFailure, loadRolesSuccess, loadRolesFailure, updateUserSuccess, updateUserFailure, createUserSuccess, createUserFailure, deleteUserSuccess, deleteUserFailure */

  /***/
  function srcAppComponentsUsersStateActionsUserApiActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadUsersSuccess", function () {
      return loadUsersSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadUsersFailure", function () {
      return loadUsersFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserSuccess", function () {
      return GetUserSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetUserFailure", function () {
      return GetUserFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "searchUsersSuccess", function () {
      return searchUsersSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "searchUsersFailure", function () {
      return searchUsersFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRolesSuccess", function () {
      return loadRolesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRolesFailure", function () {
      return loadRolesFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateUserSuccess", function () {
      return updateUserSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateUserFailure", function () {
      return updateUserFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createUserSuccess", function () {
      return createUserSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createUserFailure", function () {
      return createUserFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteUserSuccess", function () {
      return deleteUserSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteUserFailure", function () {
      return deleteUserFailure;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var loadUsersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Load Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadUsersFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Load Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var GetUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Get User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var GetUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Get User  Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var searchUsersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API]Search Users Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var searchUsersFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Search Users Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRolesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Load Roles Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRolesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Load Roles Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Update User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Update User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Create User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Create User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Delete User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User API] Delete User Fail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/components/users/state/actions/user-page.actions.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/users/state/actions/user-page.actions.ts ***!
    \*********************************************************************/

  /*! exports provided: toggleUserCode, searchUsers, getCurrentUser, setCurrentUser, clearCurrentUser, initializeCurrentUser, loadUsers, loadRoles, updateUser, createUser, deleteUser */

  /***/
  function srcAppComponentsUsersStateActionsUserPageActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleUserCode", function () {
      return toggleUserCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "searchUsers", function () {
      return searchUsers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getCurrentUser", function () {
      return getCurrentUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setCurrentUser", function () {
      return setCurrentUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearCurrentUser", function () {
      return clearCurrentUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initializeCurrentUser", function () {
      return initializeCurrentUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadUsers", function () {
      return loadUsers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRoles", function () {
      return loadRoles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateUser", function () {
      return updateUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createUser", function () {
      return createUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteUser", function () {
      return deleteUser;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var toggleUserCode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Toggle User Code');
    var searchUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Search users', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Get Current User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var setCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Set Current User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var clearCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Clear Current User');
    var initializeCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Initialize Current User');
    var loadUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Load');
    var loadRoles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Load roles');
    var updateUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Update User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var createUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Create User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User Page] Delete User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/components/users/state/index.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/users/state/index.ts ***!
    \*************************************************/

  /*! exports provided: getShowUserCode, searchUsers, getUsers, getUser, getRoles, getError */

  /***/
  function srcAppComponentsUsersStateIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getShowUserCode", function () {
      return getShowUserCode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "searchUsers", function () {
      return searchUsers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUsers", function () {
      return getUsers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getUser", function () {
      return getUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRoles", function () {
      return getRoles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getError", function () {
      return getError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getUserFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('users');
    var getShowUserCode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserFeatureState, function (state) {
      return state.showUserCode;
    });
    var searchUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserFeatureState, function (state) {
      return state.users;
    });
    var getUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserFeatureState, function (state) {
      return state.users;
    });
    var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserFeatureState, function (state) {
      return state.currentUser;
    });
    var getRoles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserFeatureState, function (state) {
      return state.roles;
    });
    var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUserFeatureState, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/components/users/state/user.effects.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/users/state/user.effects.ts ***!
    \********************************************************/

  /*! exports provided: UserEffects */

  /***/
  function srcAppComponentsUsersStateUserEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEffects", function () {
      return UserEffects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/components/users/user.service.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _actions_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./actions/index */
    "./src/app/components/users/state/actions/index.ts");

    var UserEffects = function UserEffects(actions$, userService) {
      var _this = this;

      _classCallCheck(this, UserEffects);

      this.actions$ = actions$;
      this.userService = userService;
      this.loadUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserPageActions"].loadUsers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
          return _this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) {
            return _actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].loadUsersSuccess({
              users: users
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].loadUsersFailure({
              error: error
            }));
          }));
        }));
      });
      this.getCurrentUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserPageActions"].getCurrentUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return _this.userService.getUser(action.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (currentUser) {
            return _actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].GetUserSuccess({
              currentUser: currentUser
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].GetUserFailure({
              error: error
            }));
          }));
        }));
      });
      this.loadRoles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserPageActions"].loadRoles), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
          return _this.userService.getRoles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (roles) {
            return _actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].loadRolesSuccess({
              roles: roles
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].loadRolesFailure({
              error: error
            }));
          }));
        }));
      });
      this.searchUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserPageActions"].searchUsers), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return _this.userService.searchUsers(action.searchCriteria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (users) {
            return _actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].searchUsersSuccess({
              users: users
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].updateUserFailure({
              error: error
            }));
          }));
        }));
      });
      this.updateUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserPageActions"].updateUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return _this.userService.updateUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            return _actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].updateUserSuccess({
              user: user
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].updateUserFailure({
              error: error
            }));
          }));
        }));
      });
      this.createUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserPageActions"].createUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (action) {
          return _this.userService.createUser(action.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            return _actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].createUserSuccess({
              user: user
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].createUserFailure({
              error: error
            }));
          }));
        }));
      });
      this.deleteUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["createEffect"])(function () {
        return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["ofType"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserPageActions"].deleteUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
          return _this.userService.deleteUser(action.userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].deleteUserSuccess({
              userId: action.userId
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_index__WEBPACK_IMPORTED_MODULE_6__["UserApiActions"].deleteUserFailure({
              error: error
            }));
          }));
        }));
      });
    };

    UserEffects.ctorParameters = function () {
      return [{
        type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["Actions"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    UserEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserEffects);
    /***/
  },

  /***/
  "./src/app/components/users/state/user.reducer.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/users/state/user.reducer.ts ***!
    \********************************************************/

  /*! exports provided: userReducer */

  /***/
  function srcAppComponentsUsersStateUserReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userReducer", function () {
      return userReducer;
    });
    /* harmony import */


    var _actions_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./actions/index */
    "./src/app/components/users/state/actions/index.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var initialState = {
      showUserCode: true,
      currentUser: null,
      users: [],
      roles: [],
      error: ''
    };
    var initialStateNewUser = {
      Id: "",
      UserName: "",
      Phone: "",
      Email: "",
      Role: null,
      RoleDescription: "",
      CreateDate: null,
      IsActive: true
    };
    var userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserPageActions"].clearCurrentUser, function (state) {
      return Object.assign(Object.assign({}, state), {
        currentUser: initialStateNewUser
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserPageActions"].initializeCurrentUser, function (state) {
      return Object.assign(Object.assign({}, state), {
        currentUser: initialStateNewUser
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].loadUsersSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        users: action.users,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].loadUsersFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        users: [],
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].GetUserSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        currentUser: action.currentUser,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].GetUserFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        currentUser: null,
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].searchUsersSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        users: action.users,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].searchUsersFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        users: [],
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].loadRolesSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        roles: action.roles,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].loadRolesFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        roles: [],
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].updateUserSuccess, function (state, action) {
      var updatedUsers = state.users.map(function (item) {
        return action.user.Id === item.Id ? action.user : item;
      });
      return Object.assign(Object.assign({}, state), {
        users: updatedUsers,
        currentUser: action.user,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].updateUserFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].createUserSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        users: [].concat(_toConsumableArray(state.users), [action.user]),
        currentUser: action.user,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].createUserFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }), // After a delete, the currentUser is null.
    Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].deleteUserSuccess, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        users: state.users.filter(function (user) {
          return user.Id !== action.userId;
        }),
        currentUser: null,
        error: ''
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_index__WEBPACK_IMPORTED_MODULE_0__["UserApiActions"].deleteUserFailure, function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }));
    /***/
  },

  /***/
  "./src/app/components/users/user.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/users/user.module.ts ***!
    \*************************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppComponentsUsersUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _userListWrapper_userListWrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userListWrapper/userListWrapper.component */
    "./src/app/components/users/userListWrapper/userListWrapper.component.ts");
    /* harmony import */


    var _userList_userList_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./userList/userList.component */
    "./src/app/components/users/userList/userList.component.ts");
    /* harmony import */


    var _UserUpdate_userUpdate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./UserUpdate/userUpdate.component */
    "./src/app/components/users/UserUpdate/userUpdate.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state_user_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./state/user.reducer */
    "./src/app/components/users/state/user.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _state_user_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./state/user.effects */
    "./src/app/components/users/state/user.effects.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/page-not-found.component */
    "./src/app/components/shared/page-not-found.component.ts");
    /* NgRx */


    var userRoutes = [{
      path: 'UserList',
      component: _userListWrapper_userListWrapper_component__WEBPACK_IMPORTED_MODULE_3__["UserListWrapper"],
      pathMatch: 'full'
    }, {
      path: 'UserUpdate/:id',
      component: _UserUpdate_userUpdate_component__WEBPACK_IMPORTED_MODULE_5__["UserUpdateComponent"],
      pathMatch: 'full'
    }, {
      path: '**',
      component: _shared_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
    }];

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(userRoutes), _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('users', _state_user_reducer__WEBPACK_IMPORTED_MODULE_7__["userReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_state_user_effects__WEBPACK_IMPORTED_MODULE_9__["UserEffects"]])],
      declarations: [_userListWrapper_userListWrapper_component__WEBPACK_IMPORTED_MODULE_3__["UserListWrapper"], _userList_userList_component__WEBPACK_IMPORTED_MODULE_4__["UserListComponent"], _UserUpdate_userUpdate_component__WEBPACK_IMPORTED_MODULE_5__["UserUpdateComponent"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/app/components/users/user.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/users/user.service.ts ***!
    \**************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppComponentsUsersUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.baseUrl = "http://localhost:44304/";
        this.usersUrl = this.baseUrl + 'users';
        this.rolesUrl = this.baseUrl + 'roles';
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.usersUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getUser",
        value: function getUser(currentUserId) {
          return this.http.get(this.usersUrl + "/" + currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "searchUsers",
        value: function searchUsers(searchCriteria) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.http.post(this.usersUrl + "/GetUsersBySeacrhCriterias", searchCriteria, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return data;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getRoles",
        value: function getRoles() {
          return this.http.get(this.rolesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return data;
          } //  console.log(JSON.stringify(data))
          ), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          }); // User Id must be null for the Web API to assign an Id

          var newUser = Object.assign(Object.assign({}, user), {
            Id: null
          });
          return this.http.post(this.usersUrl, newUser, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return console.log('add user: ' + JSON.stringify(data));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          var url = "".concat(this.usersUrl, "/").concat(id);
          return this.http["delete"](url, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return console.log('deleteUser: ' + id);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          var url = "".concat(this.usersUrl, "/").concat(user.Id);
          return this.http.put(url, user, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            return console.log('updateUser: ' + user.Id);
          }), // Returns the user on an update
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return user;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          var errorMessage;

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            errorMessage = "Backend returned code ".concat(err.status, ": ").concat(err.body.error);
          }

          console.error(err);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/components/users/userList/userList.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/users/userList/userList.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppComponentsUsersUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserListComponent =
    /*#__PURE__*/
    ///
    ///renders the users list by data received from its wrapper
    ///
    function () {
      function UserListComponent() {
        _classCallCheck(this, UserListComponent);

        this.searchUsers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchCriteria = {
          UserName: null,
          RoleId: null
        };
      }

      _createClass(UserListComponent, [{
        key: "searchUsersClicked",
        value: function searchUsersClicked() {
          var clonedSearchCriteria = Object.assign({}, this.searchCriteria);

          if (clonedSearchCriteria != null && clonedSearchCriteria.RoleId != null) {
            clonedSearchCriteria = {
              RoleId: Number(clonedSearchCriteria.RoleId),
              UserName: clonedSearchCriteria.UserName
            };
          }

          this.searchUsers.emit(clonedSearchCriteria);
        }
      }]);

      return UserListComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserListComponent.prototype, "errorMessage", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserListComponent.prototype, "users", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserListComponent.prototype, "roles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UserListComponent.prototype, "searchUsers", void 0);
    UserListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userList.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/userList/userList.component.html"))["default"]
    }) ///
    ///renders the users list by data received from its wrapper
    ///
    ], UserListComponent);
    /***/
  },

  /***/
  "./src/app/components/users/userListWrapper/userListWrapper.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/users/userListWrapper/userListWrapper.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UserListWrapper */

  /***/
  function srcAppComponentsUsersUserListWrapperUserListWrapperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListWrapper", function () {
      return UserListWrapper;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state */
    "./src/app/components/users/state/index.ts");
    /* harmony import */


    var _state_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../state/actions */
    "./src/app/components/users/state/actions/index.ts");

    var UserListWrapper =
    /*#__PURE__*/
    ///
    ///shows list of users details
    ///option search users by roleid and username
    ///loads initial help data like users,roles,and etc
    ///
    function () {
      function UserListWrapper(store) {
        _classCallCheck(this, UserListWrapper);

        this.store = store;
      }

      _createClass(UserListWrapper, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__["UserPageActions"].loadUsers());
          this.users$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_3__["getUsers"]);
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__["UserPageActions"].loadRoles());
          this.roles$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_3__["getRoles"]);
          this.errorMessage$ = this.store.select(_state__WEBPACK_IMPORTED_MODULE_3__["getError"]);
        }
      }, {
        key: "searchUsers",
        value: function searchUsers(searchCriteriaInput) {
          this.store.dispatch(_state_actions__WEBPACK_IMPORTED_MODULE_4__["UserPageActions"].searchUsers({
            searchCriteria: searchCriteriaInput
          }));
        }
      }]);

      return UserListWrapper;
    }();

    UserListWrapper.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    UserListWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userListWrapper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/userListWrapper/userListWrapper.component.html"))["default"]
    }) ///
    ///shows list of users details
    ///option search users by roleid and username
    ///loads initial help data like users,roles,and etc
    ///
    ], UserListWrapper);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\angular_interview\NESS\angularNgRxCrud\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map