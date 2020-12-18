import { GridElement, GridElementEventMap } from '@vaadin/vaadin-grid/src/vaadin-grid';

import { GridItem } from '@vaadin/vaadin-grid';

import { InlineEditingMixin } from './vaadin-grid-pro-inline-editing-mixin.js';

/**
 * Fired when the user starts editing a grid cell.
 */
export type GridProCellEditStarted = CustomEvent<{
  value: {
    index: number;
    item: GridItem;
    path: string;
  };
}>;

/**
 * Fired before exiting the cell edit mode, if the value has been changed.
 */
export type GridProItemPropertyChanged = CustomEvent<{
  value: {
    index: number;
    item: GridItem;
    path: string;
    value: string | boolean;
  };
}>;

export interface GridProElementEventMap {
  'cell-edit-started': GridProCellEditStarted;

  'item-property-changed': GridProItemPropertyChanged;
}

export interface GridProEventMap extends HTMLElementEventMap, GridProElementEventMap, GridElementEventMap {}

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
declare class GridProElement extends InlineEditingMixin(GridElement) {
  static _finalizeClass(): void;

  addEventListener<K extends keyof GridProEventMap>(
    type: K,
    listener: (this: GridProElement, ev: GridProEventMap[K]) => void,
    options?: boolean | AddEventListenerOptions
  ): void;

  removeEventListener<K extends keyof GridProEventMap>(
    type: K,
    listener: (this: GridProElement, ev: GridProEventMap[K]) => void,
    options?: boolean | EventListenerOptions
  ): void;
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin-grid-pro': GridProElement;
  }
}

export { GridProElement };
