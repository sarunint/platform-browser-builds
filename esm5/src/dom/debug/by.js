/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getDOM } from '../../dom/dom_adapter';
/**
 * Predicates for use with {\@link DebugElement}'s query functions.
 *
 * \@publicApi
 */
var /**
 * Predicates for use with {\@link DebugElement}'s query functions.
 *
 * \@publicApi
 */
By = /** @class */ (function () {
    function By() {
    }
    /**
     * Match all elements.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     */
    /**
     * Match all elements.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     * @return {?}
     */
    By.all = /**
     * Match all elements.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_all'}
     * @return {?}
     */
    function () { return function (debugElement) { return true; }; };
    /**
     * Match elements by the given CSS selector.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     */
    /**
     * Match elements by the given CSS selector.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     * @param {?} selector
     * @return {?}
     */
    By.css = /**
     * Match elements by the given CSS selector.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_css'}
     * @param {?} selector
     * @return {?}
     */
    function (selector) {
        return function (debugElement) {
            return debugElement.nativeElement != null ?
                getDOM().elementMatches(debugElement.nativeElement, selector) :
                false;
        };
    };
    /**
     * Match elements that have the given directive present.
     *
     * @usageNotes
     * ### Example
     *
     * {@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     */
    /**
     * Match elements that have the given directive present.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     * @param {?} type
     * @return {?}
     */
    By.directive = /**
     * Match elements that have the given directive present.
     *
     * \@usageNotes
     * ### Example
     *
     * {\@example platform-browser/dom/debug/ts/by/by.ts region='by_directive'}
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return function (debugElement) { return ((debugElement.providerTokens)).indexOf(type) !== -1; };
    };
    return By;
}());
/**
 * Predicates for use with {\@link DebugElement}'s query functions.
 *
 * \@publicApi
 */
export { By };
//# sourceMappingURL=by.js.map