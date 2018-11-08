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
import { APP_ID, Injectable, NgModule } from '@angular/core';
import { DOCUMENT } from '../dom/dom_tokens';
/**
 * @param {?} text
 * @return {?}
 */
export function escapeHtml(text) {
    /** @type {?} */
    var escapedText = {
        '&': '&a;',
        '"': '&q;',
        '\'': '&s;',
        '<': '&l;',
        '>': '&g;',
    };
    return text.replace(/[&"'<>]/g, function (s) { return escapedText[s]; });
}
/**
 * @param {?} text
 * @return {?}
 */
export function unescapeHtml(text) {
    /** @type {?} */
    var unescapedText = {
        '&a;': '&',
        '&q;': '"',
        '&s;': '\'',
        '&l;': '<',
        '&g;': '>',
    };
    return text.replace(/&[^;]+;/g, function (s) { return unescapedText[s]; });
}
/** @typedef {?} */
var StateKey;
export { StateKey };
/**
 * Create a `StateKey<T>` that can be used to store value of type T with `TransferState`.
 *
 * Example:
 *
 * ```
 * const COUNTER_KEY = makeStateKey<number>('counter');
 * let value = 10;
 *
 * transferState.set(COUNTER_KEY, value);
 * ```
 *
 * \@publicApi
 * @template T
 * @param {?} key
 * @return {?}
 */
export function makeStateKey(key) {
    return /** @type {?} */ (key);
}
/**
 * A key value store that is transferred from the application on the server side to the application
 * on the client side.
 *
 * `TransferState` will be available as an injectable token. To use it import
 * `ServerTransferStateModule` on the server and `BrowserTransferStateModule` on the client.
 *
 * The values in the store are serialized/deserialized using JSON.stringify/JSON.parse. So only
 * boolean, number, string, null and non-class objects will be serialized and deserialzied in a
 * non-lossy manner.
 *
 * \@publicApi
 */
var TransferState = /** @class */ (function () {
    function TransferState() {
        this.store = {};
        this.onSerializeCallbacks = {};
    }
    /** @internal */
    /**
     * \@internal
     * @param {?} initState
     * @return {?}
     */
    TransferState.init = /**
     * \@internal
     * @param {?} initState
     * @return {?}
     */
    function (initState) {
        /** @type {?} */
        var transferState = new TransferState();
        transferState.store = initState;
        return transferState;
    };
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     */
    /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     * @template T
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    TransferState.prototype.get = /**
     * Get the value corresponding to a key. Return `defaultValue` if key is not found.
     * @template T
     * @param {?} key
     * @param {?} defaultValue
     * @return {?}
     */
    function (key, defaultValue) {
        return this.store[key] !== undefined ? /** @type {?} */ (this.store[key]) : defaultValue;
    };
    /**
     * Set the value corresponding to a key.
     */
    /**
     * Set the value corresponding to a key.
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    TransferState.prototype.set = /**
     * Set the value corresponding to a key.
     * @template T
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) { this.store[key] = value; };
    /**
     * Remove a key from the store.
     */
    /**
     * Remove a key from the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    TransferState.prototype.remove = /**
     * Remove a key from the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) { delete this.store[key]; };
    /**
     * Test whether a key exists in the store.
     */
    /**
     * Test whether a key exists in the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    TransferState.prototype.hasKey = /**
     * Test whether a key exists in the store.
     * @template T
     * @param {?} key
     * @return {?}
     */
    function (key) { return this.store.hasOwnProperty(key); };
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     */
    /**
     * Register a callback to provide the value for a key when `toJson` is called.
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    TransferState.prototype.onSerialize = /**
     * Register a callback to provide the value for a key when `toJson` is called.
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    function (key, callback) {
        this.onSerializeCallbacks[key] = callback;
    };
    /**
     * Serialize the current state of the store to JSON.
     */
    /**
     * Serialize the current state of the store to JSON.
     * @return {?}
     */
    TransferState.prototype.toJson = /**
     * Serialize the current state of the store to JSON.
     * @return {?}
     */
    function () {
        // Call the onSerialize callbacks and put those values into the store.
        for (var key in this.onSerializeCallbacks) {
            if (this.onSerializeCallbacks.hasOwnProperty(key)) {
                try {
                    this.store[key] = this.onSerializeCallbacks[key]();
                }
                catch (e) {
                    console.warn('Exception in onSerialize callback: ', e);
                }
            }
        }
        return JSON.stringify(this.store);
    };
    TransferState.decorators = [
        { type: Injectable },
    ];
    return TransferState;
}());
export { TransferState };
if (false) {
    /** @type {?} */
    TransferState.prototype.store;
    /** @type {?} */
    TransferState.prototype.onSerializeCallbacks;
}
/**
 * @param {?} doc
 * @param {?} appId
 * @return {?}
 */
export function initTransferState(doc, appId) {
    /** @type {?} */
    var script = doc.getElementById(appId + '-state');
    /** @type {?} */
    var initialState = {};
    if (script && script.textContent) {
        try {
            initialState = JSON.parse(unescapeHtml(script.textContent));
        }
        catch (e) {
            console.warn('Exception while restoring TransferState for app ' + appId, e);
        }
    }
    return TransferState.init(initialState);
}
/**
 * NgModule to install on the client side while using the `TransferState` to transfer state from
 * server to client.
 *
 * \@publicApi
 */
var BrowserTransferStateModule = /** @class */ (function () {
    function BrowserTransferStateModule() {
    }
    BrowserTransferStateModule.decorators = [
        { type: NgModule, args: [{
                    providers: [{ provide: TransferState, useFactory: initTransferState, deps: [DOCUMENT, APP_ID] }],
                },] },
    ];
    return BrowserTransferStateModule;
}());
export { BrowserTransferStateModule };
//# sourceMappingURL=transfer_state.js.map