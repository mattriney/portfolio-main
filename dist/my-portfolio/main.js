(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\murph\Documents\Software Dev\portfolio-main\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class AboutComponent {
    constructor() {
    }
    ngOnInit() {
        this.mapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarker"];
        this.building = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCity"];
        this.email = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMailBulk"];
        this.mobile = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobile"];
        this.birthday = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBirthdayCake"];
        this.badge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
        this.home = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopHouse"];
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 35, vars: 2, consts: [["id", "about"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-right", 1, "col-lg-4", "col-md-12"], ["src", "assets/images/profile.jpg", "alt", "profile photo", 1, "img-fluid"], [1, "d-flex", "justify-content-center"], ["href", "https://www.linkedin.com/in/matthew-riney/", "rel", "tooltip", "target", "_blank", "title", "Linkedin", 1, "btn-social-media"], [1, "fa", "fa-linkedin", "fa-lg"], ["href", "https://github.com/mattriney", "rel", "tooltip", "target", "_blank", "title", "GitHub", 1, "btn-social-media", "btn-default", "btn-round", "btn-lg", "btn-icon"], [1, "fa", "fa-github", "fa-lg"], ["data-aos", "fade-left", 1, "col-lg-8", "col-md-12", "pt-4", "pt-lg-0"], [1, "font-italic"], [1, "col-lg-6", "col-md-6"], [3, "icon"], ["href", "mailto:matt.riney@protonmail.com"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "picture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Software Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Aspiring software developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Passionate about all things tech. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Missouri, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " matt.riney@protonmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.home);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.email);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  }\nfa-icon[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: #149ddd;\n\n    width: 30px;\n    height: 30px;\n    background: #dff3fc;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    transition: all 0.3s ease-in-out;\n    margin-right: 10px;\n  }\nh3[_ngcontent-%COMP%]{\n  font-weight: 700;\n    font-size: 26px;\n    color: #173b6c;\n}\n.btn-social-media[_ngcontent-%COMP%]{\n  border-radius: 50px;\n  width: 40px;\n    height: 40px;\n    color: #ffffff;\n  align-items: center;\n\n  display: inline-flex;\n    justify-content: center;\n    background: #149ddd;\n  margin-right:10px;\n  margin-left:10px;\n  margin-top:10px;\n\n\n}\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckI7QUFDRjtJQUNJLGVBQWU7SUFDZixjQUFjOztJQUVkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0VBQ3BCO0FBQ0Y7RUFDRSxnQkFBZ0I7SUFDZCxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7SUFDVCxZQUFZO0lBQ1osY0FBYztFQUNoQixtQkFBbUI7O0VBRW5CLG9CQUFvQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTs7O0FBR2pCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICB9XG5mYS1pY29ue1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzE0OWRkZDtcblxuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZGZmM2ZjO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbmgze1xuICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBjb2xvcjogIzE3M2I2Yztcbn1cbi5idG4tc29jaWFsLW1lZGlhe1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzE0OWRkZDtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIG1hcmdpbi1sZWZ0OjEwcHg7XG4gIG1hcmdpbi10b3A6MTBweDtcblxuXG59XG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typed.js */ "ELNm");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return { backgroundImage: "url(assets/images/home-background.jpg)" }; };
class HomeComponent {
    constructor() { }
    ngOnInit() {
        var options = {
            strings: ['Front-End', 'Back-End', 'Full-Stack'],
            typeSpeed: 60,
            backSpeed: 60,
            loop: true,
        };
        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_1___default.a('.typed', options);
        typed.reset(true);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 2, consts: [["id", "home", 1, "d-flex", "flex-column", "justify-content-center", "align-items-center", 3, "ngStyle"], ["data-aos", "fade-in", 1, "hero-container", "aos-init", "aos-animate"], [1, "mt-3"], [1, "typed"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Matthew Riney");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Developer: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["#home[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100vh;\n    background: top center;\n    background-size: cover;\n}\n\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color: #fff;\n    margin-bottom: 50px;\n    font-size: 26px;\n    font-family: \"Poppins\", sans-serif;\n    display: block;\n}\n\nh1[_ngcontent-%COMP%]{\n    color: #fff; \n}\n\n#home[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: #fff;\n    padding-bottom: 4px;\n    letter-spacing: 1px;\n    border-bottom: 3px solid #149ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQ6IHRvcCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuI2hvbWUgcHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5oMXtcbiAgICBjb2xvcjogI2ZmZjsgXG59XG4jaG9tZSBwIHNwYW4ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE0OWRkZDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "B2Zs":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function EducationComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Front-end Web Development: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Developing single page applications with the Angular framework.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Technologies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Angular, Bootstrap, Javascript, CSS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducationComponent_p_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Provide high-level technical support to an automated pharmacy on a ongoing basis.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Install, troubleshoot and repair automated processes to include: database, networking, PLC programming, electronic, and electrical controls. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EducationComponent {
    constructor() {
        this.stageIsShown = false;
        this.freelanceIsShown = false;
        this.alternanceIsShown = false;
        this.freelanceScotfyIsShown = false;
    }
    detailOnClick(id) {
        if (id == "alternance_detail") {
            this.alternanceIsShown = !this.alternanceIsShown;
        }
        else if (id == "freelance_detail") {
            this.freelanceIsShown = !this.freelanceIsShown;
        }
        else if (id == "stage_detail") {
            this.stageIsShown = !this.stageIsShown;
        }
        else if (id == "freelanceScotfy_detail") {
            this.freelanceScotfyIsShown = !this.freelanceScotfyIsShown;
        }
    }
    ngOnInit() {
        this.planeIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlane"];
        this.gameIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGamepad"];
        this.volleyBallIcon = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolleyballBall"];
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["app-education"]], decls: 67, vars: 2, consts: [["id", "cv"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "fade-up", "data-aos-delay", "300", 1, "col-lg-4", "col-md-6"], [1, "timeline"], [1, "font-italic"], [1, "year", "p-2", "d-flex", "justify-content-center"], [1, "d-flex", "flex-row"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [4, "ngIf"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Education and Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bachelor of Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Software Development ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Western Governors University");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2020-2022 (est. grad)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CompTIA Project+ Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CompTIA A+ Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "ITILV4 Foundation Certification");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Associate of Applied Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "em", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Robotics and Automation Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Jefferson College");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2007-2009");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Student Web Developer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "CodeFi - Code Labs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sep 2021 - Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_53_listener() { return ctx.detailOnClick("freelanceScotfy_detail"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "+ Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, EducationComponent_p_55_Template, 8, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Automation Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Express Scripts - Saint Louis, MO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Dec 2017 - current");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_Template_button_click_64_listener() { return ctx.detailOnClick("freelance_detail"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "+ Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, EducationComponent_p_66_Template, 5, 0, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.freelanceScotfyIsShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.freelanceIsShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["ul.timeline[_ngcontent-%COMP%] {\n    list-style-type: none;\n    position: relative;\n}\nul.timeline[_ngcontent-%COMP%]:before {\n    content: ' ';\n    background: #105572;\n    display: inline-block;\n    position: absolute;\n    left: 29px;\n    width: 2px;\n    height: 100%;\n    z-index: 400;\n}\n.skills[_ngcontent-%COMP%]   .resume-title[_ngcontent-%COMP%] {\n    font-size: 26px;\n    font-weight: 700;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    color: #050d18;\n}\nh3[_ngcontent-%COMP%] {\n    font-family: \"Raleway\", sans-serif;\n}\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin: 20px 0;\n    padding-left: 20px;\n}\nul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n    content: ' ';\n    background: white;\n    display: inline-block;\n    position: absolute;\n    border-radius: 50%;\n    border: 3px solid #105572;\n    left: 20px;\n    width: 20px;\n    height: 20px;\n    z-index: 400;\n}\n.year[_ngcontent-%COMP%]{\n    background-color: #e4edf9; \n    width: 190px; \n    padding-left: 5px;\n    margin-right: 5px;\n    height: 40px;\n}\nbutton[_ngcontent-%COMP%]{\n    height: 40px;\n}\n.langue[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n}\nfa-icon[_ngcontent-%COMP%]{\n    font-size: 15px;\n    color: #149ddd;\n   \n    width: 30px;\n    height: 30px;\n    background: #dff3fc;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50px;\n    transition: all 0.3s ease-in-out;\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjOztJQUVkLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQ0FBZ0M7O0VBRWxDIiwiZmlsZSI6ImVkdWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwudGltZWxpbmUge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG51bC50aW1lbGluZTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcgJztcbiAgICBiYWNrZ3JvdW5kOiAjMTA1NTcyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMjlweDtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiA0MDA7XG59XG4uc2tpbGxzIC5yZXN1bWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogIzA1MGQxODtcbn1cbmgzIHtcbiAgICBmb250LWZhbWlseTogXCJSYWxld2F5XCIsIHNhbnMtc2VyaWY7XG59XG51bC50aW1lbGluZSA+IGxpIHtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG51bC50aW1lbGluZSA+IGxpOmJlZm9yZSB7XG4gICAgY29udGVudDogJyAnO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICMxMDU1NzI7XG4gICAgbGVmdDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgei1pbmRleDogNDAwO1xufVxuLnllYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZWRmOTsgXG4gICAgd2lkdGg6IDE5MHB4OyBcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG59XG5idXR0b257XG4gICAgaGVpZ2h0OiA0MHB4O1xufVxuLmxhbmd1ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbmZhLWljb257XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMTQ5ZGRkO1xuICAgXG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNkZmYzZmM7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _competences_competences_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./competences/competences.component */ "W+1b");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "B2Zs");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");








class AppComponent {
    constructor() {
        this.title = 'my-portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, consts: [[1, "page-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-competences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _competences_competences_component__WEBPACK_IMPORTED_MODULE_4__["CompetencesComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W+1b":
/*!******************************************************!*\
  !*** ./src/app/competences/competences.component.ts ***!
  \******************************************************/
/*! exports provided: CompetencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetencesComponent", function() { return CompetencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CompetencesComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CompetencesComponent.ɵfac = function CompetencesComponent_Factory(t) { return new (t || CompetencesComponent)(); };
CompetencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompetencesComponent, selectors: [["app-competences"]], decls: 37, vars: 0, consts: [["id", "competences"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row", "mt-2"], ["data-aos", "fade-up ", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], [1, "h5"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", "width", "60", "height", "60", 2, "vertical-align", "middle", "margin", "10px 5px"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "width", "60", "height", "60", 2, "vertical-align", "middle", "margin", "10px 5px"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg", "width", "60", "height", "60", 2, "vertical-align", "middle", "margin", "10px 5px"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg", "width", "60", "height", "60", 2, "vertical-align", "middle", "margin", "10px 5px"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg", "width", "60", "height", "60", 2, "vertical-align", "middle", "margin", "10px 5px"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg", "width", "75", "height", "75", 2, "vertical-align", "middle", "margin", "10px 5px"], ["data-aos", "fade-down", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg", "width", "60", "height", "60", 2, "vertical-align", "middle", "margin", "10px 5px"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg", "width", "60", "height", "60", 2, "vertical-align", "middle", "margin", "10px 5px"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg", "width", "60", "height", "60", 2, "vertical-align", "middle", "margin", "10px 5px"], ["src", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg", "width", "75", "height", "75", 2, "vertical-align", "middle", "margin", "10px 5px"], ["data-aos", "fade-up", "data-aos-anchor-placement", "center-bottom", "data-aos-delay", "300", 1, "col-lg-4"], ["id", "skillgraph", 1, "panel", "panel-default"], [1, "skillLabel"]], template: function CompetencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tech Stack and Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Methods");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Agile, Responsive Design, TDD, UML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg-lightgray[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\n    background-color: #ddd;\n}\n.skillData-Wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n}\n#skillgraph[_ngcontent-%COMP%] {\n  padding: 1em; }\n.skill-percent[_ngcontent-%COMP%]{\n  margin-top: 10px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n}\n.skillLabel[_ngcontent-%COMP%]{\n  width: 100%;\n  margin-top: 10px;\n\n  font-weight: 600;\n  font-family: \"Poppins\", sans-serif;\n  color: #050d18d7;\n\n}\n.competence-Wrapper[_ngcontent-%COMP%]{\n  line-height: 0.1 0.7em;\n  height: 12px;\n  width: .1em;\n  float: left;\n  color: white;\n  text-align: center;\n}\n.skillData-Wrapper[_ngcontent-%COMP%], .label[_ngcontent-%COMP%] {\n  width: 100%; }\n.skillData[_ngcontent-%COMP%], .skillData-Wrapper[_ngcontent-%COMP%] {\n  line-height: 0.1 0.7em;\n  height: 12px;\n  \n  float: left;\n  color: white;\n  text-align: center; }\n.excellent[_ngcontent-%COMP%]{\n  width: 90%;\n}\n.very-good[_ngcontent-%COMP%]{\n  width: 80%;\n}\n.good[_ngcontent-%COMP%]{\n  width: 70%;\n}\n.average[_ngcontent-%COMP%]{\n  width: 50%;\n}\n.bg-rust[_ngcontent-%COMP%] {\n    background-color: #149ddd;\n}\na[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBldGVuY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQU1BO0VBQ0UsWUFBWSxFQUFFO0FBSWhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7O0VBRWhCLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsZ0JBQWdCOztBQUVsQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVcsRUFBRTtBQUNmO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7O0VBRVosV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBRTtBQUV0QjtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNDO0lBQ0cseUJBQXlCO0FBQzdCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoiY29tcGV0ZW5jZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1saWdodGdyYXksIC5za2lsbERhdGEtV3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbi5za2lsbERhdGEtV3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuXG5cblxuI3NraWxsZ3JhcGgge1xuICBwYWRkaW5nOiAxZW07IH1cblxuXG5cbi5za2lsbC1wZXJjZW50e1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5za2lsbExhYmVse1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcblxuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDUwZDE4ZDc7XG5cbn1cbi5jb21wZXRlbmNlLVdyYXBwZXJ7XG4gIGxpbmUtaGVpZ2h0OiAwLjEgMC43ZW07XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IC4xZW07XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5za2lsbERhdGEtV3JhcHBlciwgLmxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7IH1cbi5za2lsbERhdGEsIC5za2lsbERhdGEtV3JhcHBlciB7XG4gIGxpbmUtaGVpZ2h0OiAwLjEgMC43ZW07XG4gIGhlaWdodDogMTJweDtcbiAgXG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uZXhjZWxsZW50e1xuICB3aWR0aDogOTAlO1xufVxuLnZlcnktZ29vZHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5nb29ke1xuICB3aWR0aDogNzAlO1xufVxuLmF2ZXJhZ2V7XG4gIHdpZHRoOiA1MCU7XG59XG4gLmJnLXJ1c3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNDlkZGQ7XG59XG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompetencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-competences',
                templateUrl: './competences.component.html',
                styleUrls: ['./competences.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "B2Zs");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");
/* harmony import */ var _competences_competences_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./competences/competences.component */ "W+1b");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _references_references_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./references/references.component */ "en7e");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "9vUh");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
        _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"],
        _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
        _competences_competences_component__WEBPACK_IMPORTED_MODULE_7__["CompetencesComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _references_references_component__WEBPACK_IMPORTED_MODULE_10__["ReferencesComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                    _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"],
                    _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"],
                    _competences_competences_component__WEBPACK_IMPORTED_MODULE_7__["CompetencesComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _references_references_component__WEBPACK_IMPORTED_MODULE_10__["ReferencesComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 38, vars: 0, consts: [["id", "contact"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-up", "data-aos-anchor-placement", "top-center", 1, "row"], [1, "col-md-3", "col-lg-3"], [1, "contact-info"], ["src", "assets/images/contact-image.png", "alt", "image"], [1, "col-md-9"], [1, "contact-form"], [1, "form-group"], ["for", "identite", 1, "control-label", "col-sm-2"], [1, "col-sm-10"], ["type", "text", "id", "identite", "placeholder", "Please Enter Name", "name", "fname", 1, "form-control"], ["for", "email", 1, "control-label", "col-sm-2"], ["type", "email", "id", "email", "placeholder", "Please Enter Email Address", "name", "email", 1, "form-control"], ["for", "object", 1, "control-label", "col-sm-2"], ["type", "text", "id", "object", "placeholder", "Please Enter Subject", "name", "object", 1, "form-control"], ["for", "comment", 1, "control-label", "col-sm-2"], ["rows", "5", "id", "comment", 1, "form-control"], [1, "col-sm-offset-2", "col-sm-10"], ["type", "submit", 1, "btn", "btn-default"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Do not hesitate to contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "E-mail:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Subject:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Message:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%]{\n    background-color: #25274d;\n}\n.contact[_ngcontent-%COMP%]{\n    padding: 4%;\n    height: 400px;\n}\n.col-md-3[_ngcontent-%COMP%]{\n    background: #1478a7;\n    padding: 4%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n.contact-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\n    margin-bottom: 10%;\n}\n.col-md-9[_ngcontent-%COMP%]{\n    background: #fff;\n    padding: 3%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n}\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{\n    font-weight:600;\n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background:#149ddd;\n    color: #fff;\n    font-weight: 600;\n    width: 25%;\n}\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{\n    box-shadow:none;\n}\nsection[_ngcontent-%COMP%]{\n    padding-top: 100px; \n}\nh3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGlDQUFpQztBQUNyQztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLCtCQUErQjtJQUMvQixrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1Mjc0ZDtcbn1cbi5jb250YWN0e1xuICAgIHBhZGRpbmc6IDQlO1xuICAgIGhlaWdodDogNDAwcHg7XG59XG4uY29sLW1kLTN7XG4gICAgYmFja2dyb3VuZDogIzE0NzhhNztcbiAgICBwYWRkaW5nOiA0JTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMC41cmVtO1xufVxuXG5cbi5jb250YWN0LWluZm8gaDJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuLmNvbC1tZC05e1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMyU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG4uY29udGFjdC1mb3JtIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiMxNDlkZGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogMjUlO1xufVxuLmNvbnRhY3QtZm9ybSBidXR0b246Zm9jdXN7XG4gICAgYm94LXNoYWRvdzpub25lO1xufVxuXG5zZWN0aW9ue1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXG59XG5cbmgzLGg0e1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "en7e":
/*!****************************************************!*\
  !*** ./src/app/references/references.component.ts ***!
  \****************************************************/
/*! exports provided: ReferencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferencesComponent", function() { return ReferencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReferencesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReferencesComponent.ɵfac = function ReferencesComponent_Factory(t) { return new (t || ReferencesComponent)(); };
ReferencesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferencesComponent, selectors: [["app-references"]], decls: 91, vars: 0, consts: [["id", "references"], [1, "container", "mb-5"], [1, "bar-title", "mb-5"], ["data-aos", "fade-right", "data-aos-delay", "300", 1, "card", "shadow-lg", "rounded", "pb-3"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "0", 1, "not-active", "active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "1", 1, "not-active"], ["data-target", "#carouselExampleIndicators", "data-slide-to", "2", 1, "not-active"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "d-block", "w-100"], [1, "row"], [1, "col-lg-2", "ml-4", "mr-4", "col-sm-12"], [1, "mt-4"], ["src", "assets/images/unknown.jpg", "alt", "Second slide", 1, "d-block", "w-100", "rounder"], [1, "mt-3"], [1, "mt-2"], [1, "text-uppercase"], [1, "card-body", "ml-4", "mr-3", "mt-4", "col-lg-9", "col-sm-12"], [1, "carousel-item"], ["src", "assets/images/lotfi-benkhider.jpg", "alt", "Second slide", 1, "d-block", "w-100", "rounder"], ["src", "assets/images/mohamed-yahiatene.jpg", "alt", "Second slide", 1, "d-block", "w-100", "rounder"]], template: function ReferencesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Recommandations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Velghe Walter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "IT Plant Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Agc glass europe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Zinedine est tr\u00E9s \u00E9fficace dans le d\u00E9veloppement d'applications et dans leurs maintenance, innovant, et rationnel. Codage comme mode de vie, son travail pr\u00E9sente des produits de grande qualit\u00E9, suivant les normes et les bonnes pratiques. Il a r\u00E9alis\u00E9 trois projets sur notre site et je suis tellement impressionn\u00E9 par ses techniques. Il a toujours une pens\u00E9e critique. Il est toujours pr\u00EAt \u00E0 prendre les d\u00E9fis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Benkhider Lotfi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "CEO & Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Scotfy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Zinedine a \u00E9ffictu\u00E9 son stage dans mon entreprise. Il est autonome et dispose d'une grande capacit\u00E9 d'apprentissage. Il respecte les d\u00E9lais des livrables. Il a l'\u00E9sprit d'\u00E9quipe. Zinedine n'hesite pas \u00E0 proposer de nouvelles id\u00E9es pertinentes. Il respecte les consignes, son code est propore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Yahiatene Mohamed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "DevOps Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "AG2R La Mondiale");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "J'ai travaill\u00E9 deux ans avec Zinedine \u00E0 l'universit\u00E9 de Lille. Zinedine est un tr\u00E8s bon partenaire de travail avec de hautes connaissances en d\u00E9veloppement backend et frontend, il est toujours soucieux d'aller de l'avant sans jamais avoir peur d'utiliser de nouvelles technologies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Il n'hesite pas \u00E0 aider ses collegues chaque fois qu'il le peut. Il arrive \u00E0 r\u00E9soudre les probl\u00E8mes de mani\u00E8re rapide et efficace avec un optimisme typique.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["li.not-active[_ngcontent-%COMP%]{\n    background-color: rgb(95, 146, 161);\n}\nli.active[_ngcontent-%COMP%]{\n    background-color: rgb(6, 46, 58);\n}\nsection[_ngcontent-%COMP%]{\n    padding-top: 100px;\n  }\nh2[_ngcontent-%COMP%]{\n    color: rgb(22, 59, 90);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksZ0NBQWdDO0FBQ3BDO0FBQ0E7SUFDSSxrQkFBa0I7RUFDcEI7QUFDRjtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJyZWZlcmVuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaS5ub3QtYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5NSwgMTQ2LCAxNjEpO1xufVxubGkuYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0NiwgNTgpO1xufVxuc2VjdGlvbntcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIH1cbmgye1xuICAgIGNvbG9yOiByZ2IoMjIsIDU5LCA5MCk7XG59XG5cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferencesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-references',
                templateUrl: './references.component.html',
                styleUrls: ['./references.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);



class HeaderComponent {
    constructor() { }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.js-scroll-trigger').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-collapse').toggle();
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__('.nav').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-collapse').toggle();
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 29, vars: 0, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark"], [1, "home", "p-1", "rounded"], [1, "navbar-nav"], [1, "nav-item", "p-1", "rounded"], ["href", "#", 1, "nav-link", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-home"], [1, "navbar-toggler", "nav", "mb-1"], [1, "navbar-toggler-icon"], [1, "container"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", 2, "width", "100%", "float", "right"], [1, "navbar-nav", 2, "float", "right"], ["href", "#about", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-user"], ["href", "#competences", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-briefcase-alt"], ["href", "#cv", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-file-blank"], ["href", "#portfolio", 1, "nav-link", "js-scroll-trigger", "smooth-scroll", "text-uppercase"], [1, "bx", "bx-book-content"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["li[_ngcontent-%COMP%]:hover, .home[_ngcontent-%COMP%]:hover {\n    background-color: rgb(51, 59, 61);\n  }\n  i[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:hover {\n    background-color: rgb(45, 51, 53);\n  }\n  nav[_ngcontent-%COMP%]{\n      background-color: #212529;\n   \n  }\n  i[_ngcontent-%COMP%]{\n  font-size: 24px;\n  padding-right: 6px;\n  color: #6f7180;\n  \n}\n  .nav-home[_ngcontent-%COMP%]:hover{\n  background-color: rgb(51, 59, 61);\n}\n  a[_ngcontent-%COMP%]{\n  display: flex;\n  align-items: center;\n  \n  padding: 3px 4px;\n  margin-bottom: 2px;\n  transition: 0.3s;\n  font-size: 15px;\n}\n  li[_ngcontent-%COMP%]{\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxpQ0FBaUM7RUFDbkM7RUFDQTtNQUNJLHlCQUF5Qjs7RUFFN0I7RUFFRjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYzs7QUFFaEI7RUFDQTtFQUNFLGlDQUFpQztBQUNuQztFQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtFQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGk6aG92ZXIsLmhvbWU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgNTksIDYxKTtcbiAgfVxuICBpOmhvdmVyLGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NSwgNTEsIDUzKTtcbiAgfVxuICBuYXZ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICAgXG4gIH1cblxuaXtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIGNvbG9yOiAjNmY3MTgwO1xuICBcbn1cbi5uYXYtaG9tZTpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1OSwgNjEpO1xufVxuYXtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gIHBhZGRpbmc6IDNweCA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgZm9udC1zaXplOiAxNXB4O1xufVxubGl7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _competences_competences_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./competences/competences.component */ "W+1b");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "B2Zs");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "zUkc");









const routes = [{ path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] }, { path: 'competences', component: _competences_competences_component__WEBPACK_IMPORTED_MODULE_4__["CompetencesComponent"] }, { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"] }, { path: 'cv', component: _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"] }, { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUkc":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProjectsComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A simple single page todo app. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Deployed to Heroku: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Todo app");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "A Student roster console application written in C++.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The program contains two classes (i.e., Student and Roster). It maintains a current roster of students within a given course. Student data for the program includes student ID, first name, last name, email address, age, an array of the number of days to complete each course, and degree program. It iterates through a list of five students and uses function calls to manipulate data. The entire student list is stored in one array and data is displayed to the console.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectsComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is my portfolio. I built it to showcase skills, projects, and interests, etc. I intend for it to be under a constant state of change as my skills change. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Deployed to Heroku: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Deployed to Firebase: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { backgroundImage: "url(assets/images/Todo_app.jpg)" }; };
const _c1 = function () { return { backgroundImage: "url(assets/images/roster_function.jpg)" }; };
const _c2 = function () { return { backgroundImage: "url(assets/images/portfolio_1.jpg)" }; };
class ProjectsComponent {
    constructor() {
        this.teamTravelerIsShown = false;
        this.mauticMonitoringIsShown = false;
        this.portfolioIsShown = false;
        this.pokedexIsShown = false;
        this.riddleIsShown = false;
    }
    detailOnClick(project) {
        if (project == "teamTraveler") {
            this.teamTravelerIsShown = !this.teamTravelerIsShown;
            this.mauticMonitoringIsShown = false;
            this.portfolioIsShown = false;
            this.pokedexIsShown = false;
            this.riddleIsShown = false;
        }
        else if (project == "mauticMonitoring") {
            this.mauticMonitoringIsShown = !this.mauticMonitoringIsShown;
            this.teamTravelerIsShown = false;
            this.portfolioIsShown = false;
            this.pokedexIsShown = false;
            this.riddleIsShown = false;
        }
        else if (project == "portfolio") {
            this.portfolioIsShown = !this.portfolioIsShown;
            this.teamTravelerIsShown = false;
            this.mauticMonitoringIsShown = false;
            this.pokedexIsShown = false;
            this.riddleIsShown = false;
        }
        else if (project == "pokedex") {
            this.pokedexIsShown = !this.pokedexIsShown;
            this.teamTravelerIsShown = false;
            this.mauticMonitoringIsShown = false;
            this.portfolioIsShown = false;
            this.riddleIsShown = false;
        }
        else if (project == "riddleIsShown") {
            this.riddleIsShown = !this.riddleIsShown;
            this.teamTravelerIsShown = false;
            this.mauticMonitoringIsShown = false;
            this.portfolioIsShown = false;
            this.pokedexIsShown = false;
        }
    }
    onMouse(idLink, idImage) {
        $('#' + idLink).on("mouseenter", function () {
            $('#' + idImage).css("opacity", "0.3");
            $('#' + idLink).css("opacity", "1");
        }).on('mouseleave', function () {
            $('#' + idImage).css("opacity", "1");
            $('#' + idLink).css("opacity", "0");
        });
        $('#' + idImage).on("mouseenter", function () {
            $('#' + idImage).css("opacity", "0.3");
            $('#' + idLink).css("opacity", "1");
        }).on('mouseleave', function () {
            $('#' + idImage).css("opacity", "1");
            $('#' + idLink).css("opacity", "0");
        });
    }
    ngOnInit() {
        this.onMouse("portfolio-link", "portfolio-img");
        this.onMouse("teamTraveler-link", "teamTraveler-img");
        this.onMouse("mautic-link", "mautic-img");
        this.onMouse("pokedex-link", "pokedex-img");
        this.onMouse("riddle-link", "riddle-img");
        this.venobox = $('.venobox');
        this.venobox.venobox();
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 78, vars: 9, consts: [["id", "portfolio"], [1, "container"], [1, "bar-title", "mb-5"], [1, "row"], ["data-aos", "flip-up", 1, "col-lg-4", "col-sm-12"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "card-header", "d-flex", "flex-column", 2, "height", "300px", "width", "100%"], ["id", "teamTraveler-img", 1, "img-wrap", 2, "height", "300px", "width", "100%", 3, "ngStyle"], ["id", "teamTraveler-link", 1, "links", "mt-auto", "d-flex", "justify-content-center"], ["href", "assets/images/Todo_app.jpg", "data-gall", "teamTravelerGallery", "title", "Mes Voyages", 1, "venobox", "vbox-item"], [1, "bx", "bx-zoom-in", "bx-md"], ["href", "assets/images/Todo_app.jpg", "data-gall", "teamTravelerGallery", "title", "D\u00E9tail du voyage", 1, "venobox", "vbox-item"], ["href", "assets/images/Todo_app.jpg", "data-gall", "teamTravelerGallery", "title", "Mes Logements", 1, "venobox", "vbox-item"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "d-flex", "flex-row", "justify-content-center"], ["href", "https://github.com/mattriney/Todo-app", "target", "_blank", "target", "_blank", "type", "button", 1, "btn", "btn-primary", "mr-3"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["class", "mt-3", 4, "ngIf"], ["id", "mautic-img", 1, "img-wrap", 2, "height", "300px", "width", "100%", 3, "ngStyle"], ["id", "mautic-link", 1, "links", "mt-auto", "d-flex", "justify-content-center"], ["href", "assets/images/roster_function.jpg", "data-gall", "MauticGallery", "title", "Compagnes de marketing", 1, "venobox", "vbox-item"], ["href", "assets/images/roster_function.jpg", "data-gall", "MauticGallery", "title", "D\u00E9tail de la compagne", 1, "venobox", "vbox-item"], ["href", "assets/images/roster_function.jpg", "data-gall", "MauticGallery", "title", "Performance d'un \u00E9mail", 1, "venobox", "vbox-item"], ["href", "assets/images/roster_function.jpg", "data-gall", "MauticGallery", "title", "Performance d'un Asset", 1, "venobox", "vbox-item"], [1, "card", "shadow-lg", "p-3", "bg-white", "rounded"], ["id", "pokedex-img", 1, "img-wrap", 2, "height", "300px", "width", "100%", 3, "ngStyle"], ["id", "pokedex-link", 1, "links", "mt-auto", "d-flex", "justify-content-center"], ["href", "assets/images/portfolio_1.jpg", "data-gall", "pokedexGallery", "title", "Pokedex", 1, "venobox", "vbox-item"], ["href", "assets/images/portfolio_2.jpg", "data-gall", "pokedexGallery", "title", "Trainers", 1, "venobox", "vbox-item"], ["href", "assets/images/portfolio_3.jpg", "data-gall", "pokedexGallery", "title", "Profile", 1, "venobox", "vbox-item"], ["href", "", "target", "_blank", "type", "button", 1, "btn", "btn-primary", "mr-3"], [1, "mt-3"], ["href", "https://todo-app-mr.herokuapp.com/"], ["href", "https://matthew-riney.herokuapp.com/"], ["href", "https://matthew-riney.firebaseapp.com/"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Todo Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Angular 12, Html5, CSS,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " TypeScript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Code Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_29_listener() { return ctx.detailOnClick("teamTraveler"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Project Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ProjectsComponent_div_31_Template, 8, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Student Roster");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "C++");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_52_listener() { return ctx.detailOnClick("mauticMonitoring"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Project Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProjectsComponent_div_54_Template, 6, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Technologies:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Angular 11, Html5, CSS, TypeScript, BootStrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Code Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsComponent_Template_button_click_75_listener() { return ctx.detailOnClick("portfolio"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Project Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, ProjectsComponent_div_77_Template, 12, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.teamTravelerIsShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mauticMonitoringIsShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolioIsShown);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["h2[_ngcontent-%COMP%]{\n    color: rgb(22, 59, 90);\n}\nli.not-active[_ngcontent-%COMP%]{\n  background-color: rgb(95, 146, 161);\n}\nli.active[_ngcontent-%COMP%]{\n  background-color: rgb(6, 46, 58);\n}\n.img-wrap[_ngcontent-%COMP%] {\n  vertical-align: top;\n  transition: opacity 3s;\n  -webkit-transition: opacity 0.8s;\n  opacity: 1;\n  background: top center;\n  background-size: cover;\n\n  position: relative;\n\n}\n.links[_ngcontent-%COMP%]{\n  opacity: 0;\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  text-align: center;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0Usc0JBQXNCO0FBQzFCO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQ0FBZ0M7RUFDaEMsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQkFBc0I7O0VBRXRCLGtCQUFrQjs7QUFFcEI7QUFJQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1Isa0JBQWtCOzs7QUFHcEIiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBoMntcbiAgICBjb2xvcjogcmdiKDIyLCA1OSwgOTApO1xufVxubGkubm90LWFjdGl2ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk1LCAxNDYsIDE2MSk7XG59XG5saS5hY3RpdmV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig2LCA0NiwgNTgpO1xufVxuXG4uaW1nLXdyYXAge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDNzO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC44cztcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cblxuXG5cbi5saW5rc3tcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gIFxufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "9a8T");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map