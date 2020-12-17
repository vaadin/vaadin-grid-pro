import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js';
import '../../src/vaadin-grid-pro-edit-text-field.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="lumo-grid-pro-editor">
  <template>
    <style>
      :host([theme~="grid-pro-editor"]) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 0;
        will-change: transform;
        font-size: inherit;
        --lumo-text-field-size: 27px;
        /* outline similar to what grid uses */
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Needs extra specificity to take priority in ShadyDOM */
      :host([theme~="grid-pro-editor"]) [part][part="input-field"] {
        padding: 0;
        border-radius: 0;
        flex-grow: 1;
        font-weight: 400;
      }

      /* reset outline inherited from text-field */
      :host([theme~="grid-pro-editor"][focus-ring]) [part="input-field"] {
        box-shadow: none;
      }

      :host([theme~="grid-pro-editor"]) [part="value"] {
        padding: 0 var(--lumo-space-m);
        font-size: inherit;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-grid-pro-edit-text-field" theme-for="vaadin-grid-pro-edit-text-field">
  <template>
    <style include="lumo-text-field lumo-grid-pro-editor">/* https://github.com/Polymer/tools/issues/408 */</style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
