/**
@license
Copyright (c) 2019 - 2020 Vaadin Ltd
This program is available under Commercial Vaadin Developer License 4.0 (CVDLv4).
See <a href="https://vaadin.com/license/cvdl-4.0">the website</a> for the complete license.
*/
import { SelectElement } from '@vaadin/vaadin-select/src/vaadin-select.js';
import '@vaadin/vaadin-list-box/src/vaadin-list-box.js';
import '@vaadin/vaadin-item/src/vaadin-item.js';

/**
 * The cell editor select element.
 *
 * ### Styling
 *
 * See [`<vaadin-select>` documentation](https://github.com/vaadin/vaadin-select/blob/master/src/vaadin-select.html)
 * for `<vaadin-grid-pro-edit-select>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends PolymerElement
 */
class GridProEditSelectElement extends SelectElement {
  static get is() {
    return 'vaadin-grid-pro-edit-select';
  }

  static get properties() {
    return {
      options: {
        type: Array,
        value: () => []
      },

      _grid: {
        type: Object
      },

      _initialized: {
        type: Boolean
      }
    };
  }

  static get observers() {
    return [
      '_optionsChanged(options)'
    ];
  }

  ready() {
    super.ready();

    this.setAttribute('theme', 'grid-pro-editor');

    this.__boundOnKeyDown = this.__onOverlayKeyDown.bind(this);
    this._overlayElement.addEventListener('keydown', this.__boundOnKeyDown);
  }

  _onKeyDown(e) {
    super._onKeyDown(e);

    if (this.options.length === 0 && /^(ArrowDown|Down|ArrowUp|Up|Enter|SpaceBar| )$/.test(e.key)) {
      console.warn('Missing "editorOptions" for <vaadin-grid-pro-edit-column> select editor!');
    }
    // Event handled in select, stop here
    if (e.defaultPrevented) {
      e.stopPropagation();
    }
  }

  __onOverlayKeyDown(e) {
    if (e.keyCode === 9) {
      !this._grid.singleCellEdit && this._grid._switchEditCell(e);
    }
  }

  _valueChanged(value, oldValue) {
    super._valueChanged(value, oldValue);

    // select is first created without a value
    if (value === '' && oldValue === undefined) {
      return;
    }
    if (this._initialized) {
      const enter = this._enterKeydown;
      if (enter && this._grid.enterNextRow) {
        this._grid._switchEditCell(enter);
      } else if (this._grid.singleCellEdit) {
        this._grid._stopEdit(false, true);
      } else {
        this.focus();
      }
    }
  }

  _optionsChanged(options) {
    if (options && options.length) {
      this.renderer = root => {
        if (root.firstChild) {
          return;
        }
        const listBox = document.createElement('vaadin-list-box');
        listBox.selected = options.indexOf(this.value);
        options.forEach(option => {
          const item = document.createElement('vaadin-item');
          item.textContent = option;
          listBox.appendChild(item);
        });

        // save the "keydown" event for Enter
        listBox.addEventListener('keydown', e => {
          if (e.keyCode === 13) {
            this._enterKeydown = e;
          }
        });

        root.appendChild(listBox);
      };

      this._overlayElement.addEventListener('vaadin-overlay-outside-click', e => {
        this._grid._stopEdit();
      });

      // FIXME(web-padawan): _updateValueSlot() in `vaadin-select` resets opened to false
      // see https://github.com/vaadin/vaadin-list-mixin/issues/49
      setTimeout(() => {
        this.opened = true;
        // any value change after first open will stop edit
        this._initialized = true;
      });
    }
  }
}

customElements.define(GridProEditSelectElement.is, GridProEditSelectElement);
