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
import { Inject, Injectable, inject } from '@angular/core';
import { getDOM } from '../dom/dom_adapter';
import { DOCUMENT } from '../dom/dom_tokens';
import * as i0 from "@angular/core";
/** @typedef {?} */
var MetaDefinition;
export { MetaDefinition };
/**
 * Factory to create Meta service.
 * @return {?}
 */
export function createMeta() {
    return new Meta(inject(DOCUMENT));
}
/**
 * A service that can be used to get and add meta tags.
 *
 * \@publicApi
 */
var Meta = /** @class */ (function () {
    function Meta(_doc) {
        this._doc = _doc;
        this._dom = getDOM();
    }
    /**
     * @param {?} tag
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype.addTag = /**
     * @param {?} tag
     * @param {?=} forceCreation
     * @return {?}
     */
    function (tag, forceCreation) {
        if (forceCreation === void 0) { forceCreation = false; }
        if (!tag)
            return null;
        return this._getOrCreateElement(tag, forceCreation);
    };
    /**
     * @param {?} tags
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype.addTags = /**
     * @param {?} tags
     * @param {?=} forceCreation
     * @return {?}
     */
    function (tags, forceCreation) {
        var _this = this;
        if (forceCreation === void 0) { forceCreation = false; }
        if (!tags)
            return [];
        return tags.reduce(function (result, tag) {
            if (tag) {
                result.push(_this._getOrCreateElement(tag, forceCreation));
            }
            return result;
        }, []);
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.getTag = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) {
        if (!attrSelector)
            return null;
        return this._dom.querySelector(this._doc, "meta[" + attrSelector + "]") || null;
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.getTags = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) {
        if (!attrSelector)
            return [];
        /** @type {?} */
        var list = this._dom.querySelectorAll(this._doc, "meta[" + attrSelector + "]");
        return list ? [].slice.call(list) : [];
    };
    /**
     * @param {?} tag
     * @param {?=} selector
     * @return {?}
     */
    Meta.prototype.updateTag = /**
     * @param {?} tag
     * @param {?=} selector
     * @return {?}
     */
    function (tag, selector) {
        if (!tag)
            return null;
        selector = selector || this._parseSelector(tag);
        /** @type {?} */
        var meta = /** @type {?} */ ((this.getTag(selector)));
        if (meta) {
            return this._setMetaElementAttributes(tag, meta);
        }
        return this._getOrCreateElement(tag, true);
    };
    /**
     * @param {?} attrSelector
     * @return {?}
     */
    Meta.prototype.removeTag = /**
     * @param {?} attrSelector
     * @return {?}
     */
    function (attrSelector) { this.removeTagElement(/** @type {?} */ ((this.getTag(attrSelector)))); };
    /**
     * @param {?} meta
     * @return {?}
     */
    Meta.prototype.removeTagElement = /**
     * @param {?} meta
     * @return {?}
     */
    function (meta) {
        if (meta) {
            this._dom.remove(meta);
        }
    };
    /**
     * @param {?} meta
     * @param {?=} forceCreation
     * @return {?}
     */
    Meta.prototype._getOrCreateElement = /**
     * @param {?} meta
     * @param {?=} forceCreation
     * @return {?}
     */
    function (meta, forceCreation) {
        if (forceCreation === void 0) { forceCreation = false; }
        if (!forceCreation) {
            /** @type {?} */
            var selector = this._parseSelector(meta);
            /** @type {?} */
            var elem = /** @type {?} */ ((this.getTag(selector)));
            // It's allowed to have multiple elements with the same name so it's not enough to
            // just check that element with the same name already present on the page. We also need to
            // check if element has tag attributes
            if (elem && this._containsAttributes(meta, elem))
                return elem;
        }
        /** @type {?} */
        var element = /** @type {?} */ (this._dom.createElement('meta'));
        this._setMetaElementAttributes(meta, element);
        /** @type {?} */
        var head = this._dom.getElementsByTagName(this._doc, 'head')[0];
        this._dom.appendChild(head, element);
        return element;
    };
    /**
     * @param {?} tag
     * @param {?} el
     * @return {?}
     */
    Meta.prototype._setMetaElementAttributes = /**
     * @param {?} tag
     * @param {?} el
     * @return {?}
     */
    function (tag, el) {
        var _this = this;
        Object.keys(tag).forEach(function (prop) { return _this._dom.setAttribute(el, prop, tag[prop]); });
        return el;
    };
    /**
     * @param {?} tag
     * @return {?}
     */
    Meta.prototype._parseSelector = /**
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var attr = tag.name ? 'name' : 'property';
        return attr + "=\"" + tag[attr] + "\"";
    };
    /**
     * @param {?} tag
     * @param {?} elem
     * @return {?}
     */
    Meta.prototype._containsAttributes = /**
     * @param {?} tag
     * @param {?} elem
     * @return {?}
     */
    function (tag, elem) {
        var _this = this;
        return Object.keys(tag).every(function (key) { return _this._dom.getAttribute(elem, key) === tag[key]; });
    };
    Meta.decorators = [
        { type: Injectable, args: [{ providedIn: 'root', useFactory: createMeta, deps: [] },] },
    ];
    /** @nocollapse */
    Meta.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    /** @nocollapse */ Meta.ngInjectableDef = i0.defineInjectable({ factory: createMeta, token: Meta, providedIn: "root" });
    return Meta;
}());
export { Meta };
if (false) {
    /** @type {?} */
    Meta.prototype._dom;
    /** @type {?} */
    Meta.prototype._doc;
}
//# sourceMappingURL=meta.js.map