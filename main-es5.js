function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-1\">\n                <h1 class=\"display-4\">Hello, Add User!</h1>\n                <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-1\">\n            <form [formGroup]=\"addUserForm\" (ngSubmit)=\"addUser()\">\n                <div class=\"form-group\">\n                    <label for=\"\">First Name*</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" id=\"\" aria-describedby=\"\">\n                    <div class=\"erros\" *ngIf=\"firstname.errors && firstname.touched\">\n                        <small *ngIf=\"firstname.errors.required\" class=\"form-text text-danger\">Firstname Is Required.</small>\n                        <small *ngIf=\"firstname.errors.minlength\" class=\"form-text text-danger\">Firstname Must be min Length (2).</small>\n                        <small *ngIf=\"firstname.errors.pattern\" class=\"form-text text-danger\">Firstname Must be chracter.</small>\n                    </div>\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Last Name*</label>\n                    <input type=\"email\" class=\"form-control\" formControlName=\"lastname\" id=\"\" aria-describedby=\"\">\n                    <div class=\"erros\" *ngIf=\"lastname.errors && lastname.touched\">\n                        <small *ngIf=\"lastname.errors.required\" class=\"form-text text-danger\">Lastname Is Required.</small>\n                        <small *ngIf=\"lastname.errors.minlength\" class=\"form-text text-danger\">Lastname Must be min Length (2).</small>\n                        <small *ngIf=\"lastname.errors.pattern\" class=\"form-text text-danger\">Lastname Must be chracter.</small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Phone*</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"phone\" id=\"\">\n                    <div class=\"erros\" *ngIf=\"phone.errors && phone.touched\">\n                        <small *ngIf=\"phone.errors.required\" class=\"form-text text-danger\">phone Is Required.</small>\n                        <small *ngIf=\"phone.errors.minlength\" class=\"form-text text-danger\">phone Must be min Length (11).</small>\n                        <small *ngIf=\"phone.errors.maxlength\" class=\"form-text text-danger\">phone Must be max Length (11).</small>\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"addUserForm.invalid || isLoading\">\n                    <img *ngIf=\"isLoading\" width=\"30\" src=\"../../assets/img/loading.gif\">\n                    Add New User\n                </button>\n                <button type=\"submit\" class=\"btn btn-info\" [routerLink]=\"['/people-list']\">Back</button>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

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


    __webpack_exports__["default"] = "<router-outlet>\n</router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"loader\">\n    <div class=\"lds-spinner\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<navbar>\n</navbar>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-1\">\n                <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"200\" Cheight=\"15\"></app-seletion-loader>\n                <h1 *ngIf=\"loaded\" class=\"display-4\">Hello, Login!</h1>\n                <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"900\" Cheight=\"15\"></app-seletion-loader>\n                <p *ngIf=\"loaded\" class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n                <hr>\n                <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"900\" Cheight=\"17\"></app-seletion-loader>\n                <p *ngIf=\"loaded\" class=\"lead\">Please fill your email and password Here ( admin@admin.com / 000000 )</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-1\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginForms()\">\n                <div class=\"form-group\">\n                    <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"100\" Cheight=\"15\"></app-seletion-loader>\n                    <label *ngIf=\"loaded\" for=\"\">Email address*</label>\n                    <input type=\"email\" class=\"form-control\" id=\"\" formControlName=\"email\" aria-describedby=\"\">\n                    <div class=\"erros\" *ngIf=\"email.errors && email.touched\">\n                        <small *ngIf=\"email.errors.required\" class=\"form-text text-danger\">email Is Required.</small>\n                        <small *ngIf=\"email.errors.email\" class=\"form-text text-danger\">email Must be email.</small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"80\" Cheight=\"15\"></app-seletion-loader>\n                    <label *ngIf=\"loaded\" for=\"\">Password*</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"\">\n                    <div class=\"erros\" *ngIf=\"password.errors && password.touched\">\n                        <small *ngIf=\"password.errors.required\" class=\"form-text text-danger\">password Is Required.</small>\n                        <small *ngIf=\"password.errors.minlength\" class=\"form-text text-danger\">password Must be min length (6).</small>\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.invalid || isLoading\">\n                    <img *ngIf=\"isLoading\" width=\"30\" src=\"../../assets/img/loading.gif\">\n                    Login\n                </button>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\">Make#Code4You</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\" *ngIf=\"isLoggedIn\">\n                    <a class=\"nav-link\" [routerLink]=\"['/people-list']\">People List</a>\n                </li>\n            </ul>\n            <form class=\"form-inline my-2 my-lg-0\">\n                <button class=\"btn btn-primary my-2 my-sm-0 mr-2\" *ngIf=\"!isLoggedIn\" type=\"button\" routerLink=\"\">Login</button>\n                <button class=\"btn btn-outline-primary my-2 my-sm-0\" *ngIf=\"!isLoggedIn\" type=\"button\" [routerLink]=\"['register']\">Register</button>\n                <button class=\"btn btn-outline-primary my-2 my-sm-0\" *ngIf=\"isLoggedIn\" type=\"submit\" (click)=\"logOut()\">Log Out</button>\n            </form>\n        </div>\n    </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/no-found/no-found.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/no-found/no-found.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNoFoundNoFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<navbar>\n</navbar>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-1\">\n                <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"200\" Cheight=\"20\"></app-seletion-loader>\n                <h1 *ngIf=\"loaded\" class=\"display-4\">Hello, Oopes!</h1>\n                <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"900\" Cheight=\"20\"></app-seletion-loader>\n                <p *ngIf=\"loaded\" class=\"lead\">This Page Not Found.</p>\n\n\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/people-list/people-list.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people-list/people-list.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPeopleListPeopleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<navbar>\n</navbar>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-1\">\n                <h1 class=\"display-4\">Hello, People List!</h1>\n                <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-1\">\n            <div class=\"row d-flex justify-content-center\">\n                <div class=\"col-md-4\">\n                    <h4 class=\"d-inline\"> People List </h4>\n                </div>\n                <div class=\"col-md-4 text-center\">\n                    <input class=\"form-control\" [(ngModel)]=\"firstname\" (keyup)=\"userFilter()\" type=\"text\" placeholder=\"Search by name...\">\n                </div>\n                <div class=\"col-md-4\">\n                    <button type=\"submit\" class=\"btn btn-primary float-right\" [routerLink]=\"['/add-user']\"> Add New People </button>\n                </div>\n\n            </div>\n\n            <table class=\"table mt-4\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">Name</th>\n                        <th scope=\"col\">Username</th>\n                        <th scope=\"col\">Phone</th>\n                        <th scope=\"col\">Action</th>\n                    </tr>\n                </thead>\n\n                <tr *ngIf=\"spinner\">\n                    <td colspan=\"5\" class=\"text-center\">\n                        <app-loader></app-loader>\n                    </td>\n                </tr>\n\n                <tr *ngIf=\"peopleList?.length == 0\">\n                    <td class=\"mt-4 text-center font-italic\" colspan=\"5\">\n                        <div class=\"alert alert-warning\">No People Found!</div>\n                    </td>\n                </tr>\n\n                <tbody>\n                    <tr *ngFor=\"let person of peopleList; index as index\">\n                        <th scope=\"row\">{{index}}</th>\n                        <td>{{person.firstname}}</td>\n                        <td>{{person.email}}</td>\n                        <td>{{person.phone}}</td>\n                        <td>\n                            <button class=\"btn btn-primary mr-2\" [routerLink]=\"['/show-user', person._id]\"> Details </button>\n                            <button class=\"btn btn-info mr-2\" [routerLink]=\"['/update-user', person._id]\"> Update </button>\n                            <button class=\"btn btn-danger\" (click)=\"delete(person)\"> Delete </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-1\">\n                <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"100\" Cheight=\"15\"></app-seletion-loader>\n                <h1 *ngIf=\"loaded\" class=\"display-4\">Hello, Register!</h1>\n                <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"900\" Cheight=\"15\"></app-seletion-loader>\n                <p *ngIf=\"loaded\" class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<navbar>\n</navbar>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-1\">\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerForms(registerForm)\">\n                <div class=\"form-row\">\n                    <div class=\"form-group col-6\">\n                        <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"100\" Cheight=\"15\"></app-seletion-loader>\n                        <label *ngIf=\"loaded\" for=\"\">First Name*</label>\n                        <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"firstname\">\n                        <div class=\"erros\" *ngIf=\"firstname.errors && firstname.touched\">\n                            <small *ngIf=\"firstname.errors.required\" class=\"form-text text-danger\">Firstname Is Required.</small>\n                            <small *ngIf=\"firstname.errors.minlength\" class=\"form-text text-danger\">Firstname Must be min Length (2).</small>\n                            <small *ngIf=\"firstname.errors.pattern\" class=\"form-text text-danger\">Firstname Must be chracter.</small>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-6\">\n                        <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"100\" Cheight=\"15\"></app-seletion-loader>\n                        <label *ngIf=\"loaded\" for=\"\">Secand Name*</label>\n                        <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"lastname\">\n                        <div class=\"erros\" *ngIf=\"lastname.errors && lastname.touched\">\n                            <small *ngIf=\"lastname.errors.required\" class=\"form-text text-danger\">Lastname Is Required.</small>\n                            <small *ngIf=\"lastname.errors.minlength\" class=\"form-text text-danger\">Lastname Must be min Length (2).</small>\n                            <small *ngIf=\"lastname.errors.pattern\" class=\"form-text text-danger\">Lastname Must be chracter.</small>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"100\" Cheight=\"15\"></app-seletion-loader>\n                    <label *ngIf=\"loaded\" for=\"\">Phone*</label>\n                    <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"phone\">\n                    <div class=\"erros\" *ngIf=\"phone.errors && phone.touched\">\n                        <small *ngIf=\"phone.errors.required\" class=\"form-text text-danger\">phone Is Required.</small>\n                        <small *ngIf=\"phone.errors.minlength\" class=\"form-text text-danger\">phone Must be min Length (13).</small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"100\" Cheight=\"15\"></app-seletion-loader>\n                    <label *ngIf=\"loaded\" for=\"exampleInputEmail1\">Email address*</label>\n                    <input type=\"email\" class=\"form-control\" id=\"\" formControlName=\"email\">\n                    <div class=\"erros\" *ngIf=\"email.errors && email.touched\">\n                        <small *ngIf=\"email.errors.required\" class=\"form-text text-danger\">email Is Required.</small>\n                        <small *ngIf=\"email.errors.email\" class=\"form-text text-danger\">email Must be email.</small>\n                    </div>\n                </div>\n                <div class=\"form-row\">\n                    <div class=\"form-group col-6\">\n                        <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"100\" Cheight=\"15\"></app-seletion-loader>\n                        <label *ngIf=\"loaded\" for=\"\">Password*</label>\n                        <input type=\"password\" class=\"form-control\" id=\"\" formControlName=\"password\">\n                        <div class=\"erros\" *ngIf=\"password.errors && password.touched\">\n                            <small *ngIf=\"password.errors.required\" class=\"form-text text-danger\">password Is Required.</small>\n                            <small *ngIf=\"password.errors.minlength\" class=\"form-text text-danger\">password Must be min length (6).</small>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-6\">\n                        <app-seletion-loader *ngIf=\"!loaded\" Cwidth=\"100\" Cheight=\"15\"></app-seletion-loader>\n                        <label *ngIf=\"loaded\" for=\"\">Confirm Password*</label>\n                        <input type=\"password\" class=\"form-control\" id=\"\" formControlName=\"repassword\">\n                        <div class=\"erros\" *ngIf=\"repassword.errors && repassword.touched\">\n                            <small *ngIf=\"repassword.errors.required\" class=\"form-text text-danger\">repassword Is Required.</small>\n                            <small *ngIf=\"repassword.errors.minlength\" class=\"form-text text-danger\">repassword Must be min length (6).</small>\n                        </div>\n                        <div class=\"form-text text-danger\" *ngIf=\"repassword.valid && password.value != repassword.value\">\n                            Password not matched!\n                        </div>\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"registerForm.invalid || password.value != repassword.value || isLoading\">\n                    <img *ngIf=\"isLoading\" width=\"30\" src=\"../../assets/img/loading.gif\">\n                    Register\n                </button>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/show-people-list/show-people-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-people-list/show-people-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShowPeopleListShowPeopleListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<navbar>\n</navbar>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-1\">\n                <h1 class=\"display-4\">Hello, Show People List!</h1>\n                <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-1\">\n            <div class=\"flex\">\n                <h4 class=\"d-inline\"> Show People List! </h4>\n                <button type=\"submit\" class=\"btn btn-primary float-right\" [routerLink]=\"['/people-list']\"> Back To Lists </button>\n\n            </div>\n\n            <table class=\"table mt-4\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">UserID</th>\n                        <th scope=\"col\">Firstname</th>\n                        <th scope=\"col\">Lastname</th>\n                        <th scope=\"col\">Phone</th>\n                        <th scope=\"col\">email</th>\n                    </tr>\n                </thead>\n\n                <tbody>\n                    <tr>\n                        <th scope=\"row\">{{this.user?._id}}</th>\n                        <th scope=\"row\">{{this.user?.firstname}}</th>\n                        <th scope=\"row\">{{this.user?.lastname}}</th>\n                        <th scope=\"row\">{{this.user?.phone}}</th>\n                        <th scope=\"row\">{{this.user?.email}}</th>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-user/update-user.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-user/update-user.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateUserUpdateUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<navbar>\n</navbar>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-10 offset-1\">\n                <h1 class=\"display-4\">Hello, Update User!</h1>\n                <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-10 offset-1\">\n            <form [formGroup]=\"updateUserForm\" (ngSubmit)=\"updateUser()\">\n                <div class=\"form-group\">\n                    <label for=\"\">First Name*</label>\n                    <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"firstname\" aria-describedby=\"emailHelp\">\n                    <div class=\"erros\" *ngIf=\"firstname.errors && firstname.touched\">\n                        <small *ngIf=\"firstname.errors.required\" class=\"form-text text-danger\">Firstname Is Required.</small>\n                        <small *ngIf=\"firstname.errors.minlength\" class=\"form-text text-danger\">Firstname Must be min Length (2).</small>\n                        <small *ngIf=\"firstname.errors.pattern\" class=\"form-text text-danger\">Firstname Must be chracter.</small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Last Name*</label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" id=\"\" aria-describedby=\"\">\n                    <div class=\"erros\" *ngIf=\"lastname.errors && lastname.touched\">\n                        <small *ngIf=\"lastname.errors.required\" class=\"form-text text-danger\">Lastname Is Required.</small>\n                        <small *ngIf=\"lastname.errors.minlength\" class=\"form-text text-danger\">Lastname Must be min Length (2).</small>\n                        <small *ngIf=\"lastname.errors.pattern\" class=\"form-text text-danger\">Lastname Must be chracter.</small>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"\">Phone*</label>\n                    <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"phone\">\n                    <div class=\"erros\" *ngIf=\"phone.errors && phone.touched\">\n                        <small *ngIf=\"phone.errors.required\" class=\"form-text text-danger\">phone Is Required.</small>\n                        <small *ngIf=\"phone.errors.minlength\" class=\"form-text text-danger\">phone Must be min Length (11).</small>\n                        <small *ngIf=\"phone.errors.maxlength\" class=\"form-text text-danger\">phone Must be Max Length (11).</small>\n                    </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary mr-2\" [disabled]=\"updateUserForm.invalid || isLoading\">\n                    <img *ngIf=\"isLoading\" width=\"30\" src=\"../../assets/img/loading.gif\">\n                    Update User\n                </button>\n                <button type=\"submit\" class=\"btn btn-info\" [routerLink]=\"['/people-list']\">Back</button>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-user/add-user.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/add-user/add-user.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddUserAddUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/add-user/add-user.component.ts":
  /*!************************************************!*\
    !*** ./src/app/add-user/add-user.component.ts ***!
    \************************************************/

  /*! exports provided: AddUserComponent */

  /***/
  function srcAppAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _interfaces_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../interfaces/user.service */
    "./src/app/interfaces/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var AddUserComponent = /*#__PURE__*/function () {
      function AddUserComponent(fb, userServ, router, toastr) {
        _classCallCheck(this, AddUserComponent);

        this.fb = fb;
        this.userServ = userServ;
        this.router = router;
        this.toastr = toastr;
        this.isLoading = false;
        var formControls = {
          firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-z .'_]+")]),
          lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern("[a-z .'_]+")]),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(11)])
        };
        this.addUserForm = this.fb.group(formControls);
      }

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addUser",
        value: function addUser() {
          var _this = this;

          var data = this.addUserForm.value;
          var user = new _interfaces_user_service__WEBPACK_IMPORTED_MODULE_1__["User"](data.firstname, data.lastname, null, data.phone);
          this.isLoading = true;
          this.userServ.addUser(user).subscribe(function (res) {
            console.log(res);

            _this.toastr.success(res.message);

            _this.router.navigate(['/people-list']);
          }, function (error) {
            _this.toastr.error(error.message);

            _this.isLoading = false;
          });
        }
      }, {
        key: "firstname",
        get: function get() {
          return this.addUserForm.get('firstname');
        }
      }, {
        key: "lastname",
        get: function get() {
          return this.addUserForm.get('lastname');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.addUserForm.get('phone');
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-user/add-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.component.scss */
      "./src/app/add-user/add-user.component.scss"))["default"]]
    })], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _people_list_people_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./people-list/people-list.component */
    "./src/app/people-list/people-list.component.ts");
    /* harmony import */


    var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-user/add-user.component */
    "./src/app/add-user/add-user.component.ts");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./src/app/update-user/update-user.component.ts");
    /* harmony import */


    var _show_people_list_show_people_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./show-people-list/show-people-list.component */
    "./src/app/show-people-list/show-people-list.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _no_found_no_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./no-found/no-found.component */
    "./src/app/no-found/no-found.component.ts");

    var routes = [{
      path: "",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "register",
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: "people-list",
      component: _people_list_people_list_component__WEBPACK_IMPORTED_MODULE_5__["PeopleListComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: "add-user",
      component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: "update-user/:id",
      component: _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_7__["UpdateUserComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: "show-user/:id",
      component: _show_people_list_show_people_list_component__WEBPACK_IMPORTED_MODULE_8__["ShowPeopleListComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
    }, {
      path: "**",
      component: _no_found_no_found_component__WEBPACK_IMPORTED_MODULE_10__["NoFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
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
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _people_list_people_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./people-list/people-list.component */
    "./src/app/people-list/people-list.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-user/add-user.component */
    "./src/app/add-user/add-user.component.ts");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./src/app/update-user/update-user.component.ts");
    /* harmony import */


    var _no_found_no_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./no-found/no-found.component */
    "./src/app/no-found/no-found.component.ts");
    /* harmony import */


    var _show_people_list_show_people_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./show-people-list/show-people-list.component */
    "./src/app/show-people-list/show-people-list.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./loader/loader.component */
    "./src/app/loader/loader.component.ts");
    /* harmony import */


    var _seletion_loader_seletion_loader_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./seletion-loader/seletion-loader.module */
    "./src/app/seletion-loader/seletion-loader.module.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _people_list_people_list_component__WEBPACK_IMPORTED_MODULE_10__["PeopleListComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_12__["AddUserComponent"], _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_13__["UpdateUserComponent"], _no_found_no_found_component__WEBPACK_IMPORTED_MODULE_14__["NoFoundComponent"], _show_people_list_show_people_list_component__WEBPACK_IMPORTED_MODULE_15__["ShowPeopleListComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"], _loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(), _seletion_loader_seletion_loader_module__WEBPACK_IMPORTED_MODULE_18__["SeletionLoaderModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(userServ, router) {
        _classCallCheck(this, AuthGuard);

        this.userServ = userServ;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var isLoaggedIn = this.userServ.LoggedIn();

          if (isLoaggedIn) {
            return true;
          } else {
            this.router.navigate(['']);
            return false;
          }

          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/interfaces/user.service.ts":
  /*!********************************************!*\
    !*** ./src/app/interfaces/user.service.ts ***!
    \********************************************/

  /*! exports provided: User */

  /***/
  function srcAppInterfacesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User = function User(firstname, lastname, email, phone, password, _id) {
      _classCallCheck(this, User);

      this.firstname = firstname;
      this.lastname = lastname;
      this.email = email;
      this.phone = phone;
      this.password = password;
      this._id = _id;
    };
    /***/

  },

  /***/
  "./src/app/loader/loader.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/loader/loader.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/loader/loader.component.ts":
  /*!********************************************!*\
    !*** ./src/app/loader/loader.component.ts ***!
    \********************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoaderComponent = /*#__PURE__*/function () {
      function LoaderComponent() {
        _classCallCheck(this, LoaderComponent);
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-loader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loader/loader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/loader/loader.component.scss"))["default"]]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _interfaces_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../interfaces/user.service */
    "./src/app/interfaces/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, userSrve, router, toster) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.userSrve = userSrve;
        this.router = router;
        this.toster = toster;
        this.loaded = false;
        this.isLoading = false;
        var formControls = {
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(6)])
        };
        this.loginForm = this.fb.group(formControls);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          setInterval(function () {
            _this2.loaded = true;
          }, 1000);
          var loggedIn = this.userSrve.LoggedIn();

          if (loggedIn) {
            this.router.navigate(['/people-list']);
          }
        }
      }, {
        key: "loginForms",
        value: function loginForms() {
          var _this3 = this;

          var data = this.loginForm.value;
          var user = new _interfaces_user_service__WEBPACK_IMPORTED_MODULE_1__["User"](null, null, data.email, null, data.password, null);
          this.isLoading = true;
          this.userSrve.loginForm(user).subscribe(function (res) {
            var token = res.token;
            localStorage.setItem("myToken", token);

            _this3.router.navigate(['/people-list']);

            _this3.toster.success("Logged in Successfuly!");
          }, function (error) {
            _this3.toster.error(error.message);

            _this3.isLoading = false;
          });
        }
      }, {
        key: "email",
        get: function get() {
          return this.loginForm.get("email");
        }
      }, {
        key: "password",
        get: function get() {
          return this.loginForm.get("password");
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/navbar/navbar.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(router, userServ, toster) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
        this.userServ = userServ;
        this.toster = toster;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn = this.userServ.LoggedIn();
        }
      }, {
        key: "logOut",
        value: function logOut() {
          localStorage.removeItem("myToken");
          this.router.navigate(['']);
          this.toster.success("Logged out Successfuly!");
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/no-found/no-found.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/no-found/no-found.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNoFoundNoFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vLWZvdW5kL25vLWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/no-found/no-found.component.ts":
  /*!************************************************!*\
    !*** ./src/app/no-found/no-found.component.ts ***!
    \************************************************/

  /*! exports provided: NoFoundComponent */

  /***/
  function srcAppNoFoundNoFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoFoundComponent", function () {
      return NoFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NoFoundComponent = /*#__PURE__*/function () {
      function NoFoundComponent() {
        _classCallCheck(this, NoFoundComponent);

        this.loaded = false;
      }

      _createClass(NoFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          setInterval(function () {
            _this4.loaded = true;
          }, 3000);
        }
      }]);

      return NoFoundComponent;
    }();

    NoFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-no-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./no-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/no-found/no-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./no-found.component.scss */
      "./src/app/no-found/no-found.component.scss"))["default"]]
    })], NoFoundComponent);
    /***/
  },

  /***/
  "./src/app/people-list/people-list.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/people-list/people-list.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPeopleListPeopleListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS1saXN0L3Blb3BsZS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/people-list/people-list.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/people-list/people-list.component.ts ***!
    \******************************************************/

  /*! exports provided: PeopleListComponent */

  /***/
  function srcAppPeopleListPeopleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleListComponent", function () {
      return PeopleListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var PeopleListComponent = /*#__PURE__*/function () {
      function PeopleListComponent(userService, route, toster) {
        _classCallCheck(this, PeopleListComponent);

        this.userService = userService;
        this.route = route;
        this.toster = toster;
        this.peopleList = [];
        this.message = '';
        this.spinner = false;
      }

      _createClass(PeopleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.spinner = true;
          this.userService.getAllUser().subscribe(function (res) {
            _this5.peopleList = res;
            _this5.spinner = false;
          }, function (error) {
            _this5.toster.success(error.message);

            _this5.spinner = false;
          });
        }
      }, {
        key: "delete",
        value: function _delete(person) {
          var _this6 = this;

          var index = this.peopleList.indexOf(person);
          this.peopleList.splice(index, 1);
          this.userService.deleteUser(person._id).subscribe(function (res) {
            _this6.toster.success(res.message);
          }, function (error) {
            _this6.toster.success(error.message);
          });
        }
      }, {
        key: "userFilter",
        value: function userFilter() {
          var _this7 = this;

          if (this.firstname == "") {
            this.ngOnInit();
          } else this.peopleList = this.peopleList.filter(function (res) {
            return res.firstname.toLowerCase().match(_this7.firstname.toLowerCase());
          });
        }
      }]);

      return PeopleListComponent;
    }();

    PeopleListComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    PeopleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-people-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./people-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/people-list/people-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./people-list.component.scss */
      "./src/app/people-list/people-list.component.scss"))["default"]]
    })], PeopleListComponent);
    /***/
  },

  /***/
  "./src/app/register/register.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/register/register.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(fb, userServ, router, toster) {
        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.userServ = userServ;
        this.router = router;
        this.toster = toster;
        this.loaded = false;
        this.isLoading = false;
        var formControls = {
          firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-z .'_]+")]),
          lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[a-z .'_]+")]),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11)]),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]),
          repassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])
        };
        this.registerForm = this.fb.group(formControls);
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          setInterval(function () {
            _this8.loaded = true;
          }, 1000);
          var loggedIn = this.userServ.LoggedIn();

          if (loggedIn) {
            this.router.navigate(['/people-list']);
          }
        }
      }, {
        key: "registerForms",
        value: function registerForms(user) {
          var _this9 = this;

          this.isLoading = true;
          this.userServ.registerAdmin(user.value).subscribe(function (res) {
            _this9.toster.success(res.message);

            _this9.router.navigate(['/login']);
          }, function (error) {
            _this9.toster.error(error.message);

            _this9.isLoading = false;
          });
        }
      }, {
        key: "firstname",
        get: function get() {
          return this.registerForm.get('firstname');
        }
      }, {
        key: "lastname",
        get: function get() {
          return this.registerForm.get('lastname');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.registerForm.get('phone');
        }
      }, {
        key: "email",
        get: function get() {
          return this.registerForm.get("email");
        }
      }, {
        key: "password",
        get: function get() {
          return this.registerForm.get("password");
        }
      }, {
        key: "repassword",
        get: function get() {
          return this.registerForm.get('repassword');
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/seletion-loader/seletion-loader-module.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/seletion-loader/seletion-loader-module.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSeletionLoaderSeletionLoaderModuleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGV0aW9uLWxvYWRlci9zZWxldGlvbi1sb2FkZXItbW9kdWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/seletion-loader/seletion-loader-module.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/seletion-loader/seletion-loader-module.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SeletionLoaderComponent */

  /***/
  function srcAppSeletionLoaderSeletionLoaderModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeletionLoaderComponent", function () {
      return SeletionLoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SeletionLoaderComponent = /*#__PURE__*/function () {
      function SeletionLoaderComponent() {
        _classCallCheck(this, SeletionLoaderComponent);
      }

      _createClass(SeletionLoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getMyStyle",
        value: function getMyStyle() {
          var myStyle = {
            'width.px': this.Cwidth ? this.Cwidth : '',
            'height.px': this.Cheight ? this.Cheight : '',
            'border-radius': this.circle ? '50%' : ''
          };
          return myStyle;
        }
      }]);

      return SeletionLoaderComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SeletionLoaderComponent.prototype, "Cwidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SeletionLoaderComponent.prototype, "Cheight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SeletionLoaderComponent.prototype, "circle", void 0);
    SeletionLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-seletion-loader',
      template: "   \n      <div [ngStyle]=\"getMyStyle()\" class=\"skelt-load loader\"></div>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./seletion-loader-module.component.scss */
      "./src/app/seletion-loader/seletion-loader-module.component.scss"))["default"]]
    })], SeletionLoaderComponent);
    /***/
  },

  /***/
  "./src/app/seletion-loader/seletion-loader.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/seletion-loader/seletion-loader.module.ts ***!
    \***********************************************************/

  /*! exports provided: SeletionLoaderModule */

  /***/
  function srcAppSeletionLoaderSeletionLoaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeletionLoaderModule", function () {
      return SeletionLoaderModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _seletion_loader_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seletion-loader-module.component */
    "./src/app/seletion-loader/seletion-loader-module.component.ts");

    var SeletionLoaderModule = function SeletionLoaderModule() {
      _classCallCheck(this, SeletionLoaderModule);
    };

    SeletionLoaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_seletion_loader_module_component__WEBPACK_IMPORTED_MODULE_3__["SeletionLoaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_seletion_loader_module_component__WEBPACK_IMPORTED_MODULE_3__["SeletionLoaderComponent"]]
    })], SeletionLoaderModule);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.getAllUsersUrl = "https://backend-people-crud-app.herokuapp.com/users";
        this.getOneUserUrl = "https://backend-people-crud-app.herokuapp.com/users/";
        this.deleteUserUrl = "https://backend-people-crud-app.herokuapp.com/users/";
        this.addUserUrl = "https://backend-people-crud-app.herokuapp.com/users/add";
        this.updateUserUrl = "https://backend-people-crud-app.herokuapp.com/users/update";
        this.registerUserUrl = "https://backend-people-crud-app.herokuapp.com/users/register";
        this.loginUserUrl = "https://backend-people-crud-app.herokuapp.com/users/login";
      }

      _createClass(UserService, [{
        key: "getAllUser",
        value: function getAllUser() {
          return this.http.get(this.getAllUsersUrl);
        }
      }, {
        key: "getOneUser",
        value: function getOneUser(id) {
          return this.http.get(this.getOneUserUrl + id);
        }
      }, {
        key: "getOneUserList",
        value: function getOneUserList(id) {
          return this.http.get(this.getOneUserUrl + id);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http["delete"](this.deleteUserUrl + id);
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          return this.http.post(this.addUserUrl, user);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.put(this.updateUserUrl, user);
        }
      }, {
        key: "registerAdmin",
        value: function registerAdmin(user) {
          return this.http.post(this.registerUserUrl, user);
        }
      }, {
        key: "loginForm",
        value: function loginForm(user) {
          return this.http.post(this.loginUserUrl, user);
        }
      }, {
        key: "LoggedIn",
        value: function LoggedIn() {
          var token = localStorage.getItem("myToken");
          console.log(token);

          if (token) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/show-people-list/show-people-list.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/show-people-list/show-people-list.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShowPeopleListShowPeopleListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3ctcGVvcGxlLWxpc3Qvc2hvdy1wZW9wbGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/show-people-list/show-people-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/show-people-list/show-people-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: ShowPeopleListComponent */

  /***/
  function srcAppShowPeopleListShowPeopleListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowPeopleListComponent", function () {
      return ShowPeopleListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ShowPeopleListComponent = /*#__PURE__*/function () {
      function ShowPeopleListComponent(userServ, activateRouter) {
        _classCallCheck(this, ShowPeopleListComponent);

        this.userServ = userServ;
        this.activateRouter = activateRouter;
      }

      _createClass(ShowPeopleListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          var userID = this.activateRouter.snapshot.params.id;
          this.userServ.getOneUserList(userID).subscribe(function (res) {
            _this10.user = res;
            console.log(_this10.user.firstname);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ShowPeopleListComponent;
    }();

    ShowPeopleListComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ShowPeopleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-people-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./show-people-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/show-people-list/show-people-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./show-people-list.component.scss */
      "./src/app/show-people-list/show-people-list.component.scss"))["default"]]
    })], ShowPeopleListComponent);
    /***/
  },

  /***/
  "./src/app/update-user/update-user.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/update-user/update-user.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateUserUpdateUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS11c2VyL3VwZGF0ZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/update-user/update-user.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/update-user/update-user.component.ts ***!
    \******************************************************/

  /*! exports provided: UpdateUserComponent */

  /***/
  function srcAppUpdateUserUpdateUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function () {
      return UpdateUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _interfaces_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../interfaces/user.service */
    "./src/app/interfaces/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var UpdateUserComponent = /*#__PURE__*/function () {
      function UpdateUserComponent(fb, activateRouter, userServ, toastr, router) {
        _classCallCheck(this, UpdateUserComponent);

        this.fb = fb;
        this.activateRouter = activateRouter;
        this.userServ = userServ;
        this.toastr = toastr;
        this.router = router;
        this.isLoading = false;
        var formControls = {
          firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-z .'_]+")]),
          lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[a-z .'_]+")]),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(11)])
        };
        this.updateUserForm = this.fb.group(formControls);
      }

      _createClass(UpdateUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          var userID = this.activateRouter.snapshot.params.id;
          this.userServ.getOneUser(userID).subscribe(function (res) {
            var user = res;

            _this11.updateUserForm.patchValue({
              firstname: user.firstname,
              lastname: user.lastname,
              phone: user.phone
            });
          }, function (error) {
            _this11.toastr.error(error.message);
          });
        }
      }, {
        key: "updateUser",
        value: function updateUser() {
          var _this12 = this;

          var data = this.updateUserForm.value;
          var userID = this.activateRouter.snapshot.params.id;
          this.isLoading = true;
          var user = new _interfaces_user_service__WEBPACK_IMPORTED_MODULE_5__["User"](data.firstname, data.lastname, null, data.phone, null, userID);
          this.userServ.updateUser(user).subscribe(function (res) {
            _this12.toastr.success(res.message);

            _this12.router.navigate(['/people-list']);
          }, function (error) {
            _this12.toastr.error(error.message);

            _this12.isLoading = false;
          });
        }
      }, {
        key: "firstname",
        get: function get() {
          return this.updateUserForm.get('firstname');
        }
      }, {
        key: "lastname",
        get: function get() {
          return this.updateUserForm.get('lastname');
        }
      }, {
        key: "phone",
        get: function get() {
          return this.updateUserForm.get('phone');
        }
      }]);

      return UpdateUserComponent;
    }();

    UpdateUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-update-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-user/update-user.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-user.component.scss */
      "./src/app/update-user/update-user.component.scss"))["default"]]
    })], UpdateUserComponent);
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
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! D:\Project\people-list\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map