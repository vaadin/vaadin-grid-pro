/**
 * @license
 * Copyright (c) 2019 - 2020 Vaadin Ltd
 * This program is available under Commercial Vaadin Developer License 4.0 (CVDLv4).
 * See <a href="https://vaadin.com/license/cvdl-4.0">the website</a> for the complete license.
 */
import { GridElement } from '@vaadin/vaadin-grid/src/vaadin-grid.js';
import { InlineEditingMixin } from './vaadin-grid-pro-inline-editing-mixin.js';
import '@vaadin/vaadin-license-checker/vaadin-license-checker.js';

/**
 *
 * `<vaadin-grid-pro>` is a high quality data grid / data table Web Component with extended functionality.
 * It extends `<vaadin-grid>` and adds extra features on top of the basic ones.
 *
 * See [`<vaadin-grid>` documentation](https://github.com/vaadin/vaadin-grid/blob/master/src/vaadin-grid.html)
 * for details.
 *
 * ```
 * <vaadin-grid-pro></vaadin-grid-pro>
 * ```
 *
 * @extends GridElement
 * @mixes InlineEditingMixin
 */
class GridProElement extends InlineEditingMixin(GridElement) {
  static get is() {
    return 'vaadin-grid-pro';
  }

  static get version() {
    return '2.3.0-alpha1';
  }

  /**
   * @protected
   */
  static _finalizeClass() {
    super._finalizeClass();

    const devModeCallback = window.Vaadin.developmentModeCallback;
    const licenseChecker = devModeCallback && devModeCallback['vaadin-license-checker'];
    if (typeof licenseChecker === 'function') {
      licenseChecker(GridProElement);
    }
  }
}

customElements.define(GridProElement.is, GridProElement);

export { GridProElement };
