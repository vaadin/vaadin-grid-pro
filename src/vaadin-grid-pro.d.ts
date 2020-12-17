import {GridElement} from '@vaadin/vaadin-grid/src/vaadin-grid.js';

import {InlineEditingMixin} from './vaadin-grid-pro-inline-editing-mixin.js';

/**
 * `<vaadin-grid-pro>` is a high quality data grid / data table Web Component with extended functionality.
 * It extends `<vaadin-grid>` and adds extra features on top of the basic ones.
 *
 * See [`<vaadin-grid>` documentation](https://github.com/vaadin/vaadin-grid/blob/master/src/vaadin-grid.html)
 * for details.
 *
 * ```
 * <vaadin-grid-pro></vaadin-grid-pro>
 * ```
 */
declare class GridProElement extends
  InlineEditingMixin(
  GridElement) {
  static _finalizeClass(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-grid-pro": GridProElement;
  }
}

export {GridProElement};
