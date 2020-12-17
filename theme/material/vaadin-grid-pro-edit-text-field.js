import '@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js';
import '../../src/vaadin-grid-pro-edit-text-field.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="material-grid-pro-edit-text-field" theme-for="vaadin-grid-pro-edit-text-field">
  <template>
    <style include="material-text-field">
      :host([theme~="grid-pro-editor"]) {
        width: 100%;
        margin: -6px 0 0;
        padding: 0;
        top: 6px;
        will-change: transform;
        font-size: inherit;
      }

      :host([theme~="grid-pro-editor"]) [part="value"] {
        box-sizing: border-box;
        font-size: inherit;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
