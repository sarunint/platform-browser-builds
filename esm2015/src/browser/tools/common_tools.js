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
import { ApplicationRef } from '@angular/core';
import { getDOM } from '../../dom/dom_adapter';
import { window } from './browser';
export class ChangeDetectionPerfRecord {
    /**
     * @param {?} msPerTick
     * @param {?} numTicks
     */
    constructor(msPerTick, numTicks) {
        this.msPerTick = msPerTick;
        this.numTicks = numTicks;
    }
}
if (false) {
    /** @type {?} */
    ChangeDetectionPerfRecord.prototype.msPerTick;
    /** @type {?} */
    ChangeDetectionPerfRecord.prototype.numTicks;
}
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
export class AngularProfiler {
    /**
     * @param {?} ref
     */
    constructor(ref) { this.appRef = ref.injector.get(ApplicationRef); }
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     * @param {?} config
     * @return {?}
     */
    timeChangeDetection(config) {
        /** @type {?} */
        const record = config && config['record'];
        /** @type {?} */
        const profileName = 'Change Detection';
        /** @type {?} */
        const isProfilerAvailable = window.console.profile != null;
        if (record && isProfilerAvailable) {
            window.console.profile(profileName);
        }
        /** @type {?} */
        const start = getDOM().performanceNow();
        /** @type {?} */
        let numTicks = 0;
        while (numTicks < 5 || (getDOM().performanceNow() - start) < 500) {
            this.appRef.tick();
            numTicks++;
        }
        /** @type {?} */
        const end = getDOM().performanceNow();
        if (record && isProfilerAvailable) {
            window.console.profileEnd(profileName);
        }
        /** @type {?} */
        const msPerTick = (end - start) / numTicks;
        window.console.log(`ran ${numTicks} change detection cycles`);
        window.console.log(`${msPerTick.toFixed(2)} ms per check`);
        return new ChangeDetectionPerfRecord(msPerTick, numTicks);
    }
}
if (false) {
    /** @type {?} */
    AngularProfiler.prototype.appRef;
}
//# sourceMappingURL=common_tools.js.map