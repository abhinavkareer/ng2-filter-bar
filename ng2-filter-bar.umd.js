(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap/index')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/forms', '@ng-bootstrap/ng-bootstrap/index'], factory) :
	(factory((global['ng2-filter-bar'] = global['ng2-filter-bar'] || {}),global._angular_core,global._angular_common,global._angular_forms,global._ngBootstrap_ngBootstrap_index));
}(this, (function (exports,_angular_core,_angular_common,_angular_forms,_ngBootstrap_ngBootstrap_index) { 'use strict';

var NGFilterBarComponent = (function () {
    function NGFilterBarComponent() {
    }
    return NGFilterBarComponent;
}());
NGFilterBarComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'ng-filter-bar',
                template: "<div class=\"row\">\n  <div class=\"col-sm-1\">\n    <div ngbDropdown class=\"d-inline-block\">\n      <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Toggle dropdown</button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownBasic1\">\n        <button class=\"dropdown-item\">Action - 1</button>\n        <button class=\"dropdown-item\">Another Action</button>\n        <button class=\"dropdown-item\">Something else is here</button>\n      </div>\n    </div>\n  </div>\n<div class=\"col-sm-11\"><input type=\"text\" style=\"width:100%;height:100%\"></div></div>",
                styles: ['.row{border:1px solid black;width:90%}', "../node_modules/bootstrap/dist/css/bootstrap.min.css",]
            },] },
];
/**
 * @nocollapse
 */
NGFilterBarComponent.ctorParameters = function () { return []; };
NGFilterBarComponent.propDecorators = {
    'filtersConfig': [{ type: _angular_core.Input },],
};

var NGFilterBarDirective = (function () {
    /**
     * @param {?} el
     */
    function NGFilterBarDirective(el) {
        this.el = el;
    }
    return NGFilterBarDirective;
}());
NGFilterBarDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[ngFilterBarDirective]'
            },] },
];
/**
 * @nocollapse
 */
NGFilterBarDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };

/**
 * Transforms any input value
 */
var NGFilterBarPipe = (function () {
    function NGFilterBarPipe() {
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    NGFilterBarPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return value;
    };
    return NGFilterBarPipe;
}());
NGFilterBarPipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'ngFilterBarPipe'
            },] },
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
NGFilterBarPipe.ctorParameters = function () { return []; };

var NGFilterBarService = (function () {
    function NGFilterBarService() {
    }
    return NGFilterBarService;
}());
NGFilterBarService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
NGFilterBarService.ctorParameters = function () { return []; };

var NgFilterBarModule = (function () {
    function NgFilterBarModule() {
    }
    /**
     * @return {?}
     */
    NgFilterBarModule.forRoot = function () {
        return {
            ngModule: NgFilterBarModule,
            providers: [NGFilterBarService]
        };
    };
    return NgFilterBarModule;
}());
NgFilterBarModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                imports: [
                    _angular_common.CommonModule,
                    _angular_forms.FormsModule,
                    _ngBootstrap_ngBootstrap_index.NgbModule.forRoot()
                ],
                declarations: [
                    NGFilterBarComponent,
                    NGFilterBarDirective,
                    NGFilterBarPipe
                ],
                exports: [
                    NGFilterBarComponent,
                    NGFilterBarDirective,
                    NGFilterBarPipe
                ]
            },] },
];
/**
 * @nocollapse
 */
NgFilterBarModule.ctorParameters = function () { return []; };

exports.NgFilterBarModule = NgFilterBarModule;
exports.NGFilterBarComponent = NGFilterBarComponent;
exports.NGFilterBarDirective = NGFilterBarDirective;
exports.NGFilterBarPipe = NGFilterBarPipe;
exports.NGFilterBarService = NGFilterBarService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
