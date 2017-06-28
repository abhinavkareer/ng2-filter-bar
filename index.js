import { Component, Directive, ElementRef, Injectable, Input, NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap/index';

var NGFilterBarComponent = (function () {
    function NGFilterBarComponent() {
    }
    return NGFilterBarComponent;
}());
NGFilterBarComponent.decorators = [
    { type: Component, args: [{
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
    'filtersConfig': [{ type: Input },],
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
    { type: Directive, args: [{
                selector: '[ngFilterBarDirective]'
            },] },
];
/**
 * @nocollapse
 */
NGFilterBarDirective.ctorParameters = function () { return [
    { type: ElementRef, },
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
    { type: Pipe, args: [{
                name: 'ngFilterBarPipe'
            },] },
    { type: Injectable },
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
    { type: Injectable },
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    NgbModule.forRoot()
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

export { NgFilterBarModule, NGFilterBarComponent, NGFilterBarDirective, NGFilterBarPipe, NGFilterBarService };
