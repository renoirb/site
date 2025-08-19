/**
 * RenoirBoulanger.com client-side boostraptator. thing.
 *
 * Load custom elements we'll use in this site, should we want to
 * change how they're displayed or function, instead of having to
 * change all the content pages, we can instead simply change
 * the implementation we'll use to replace it.
 *
 * rel=#WIP-Mingle-CustomElements-From-ESM-Modules
 */

import {
  /*                    */
  NoticeBoxElement,
} from "@renoirb/notice-box-element";
import ValueDateElement, {
  ValueDateRangeElement,
} from "@renoirb/value-date-element";
import {
  /*                    */
  InlineNoteElement,
} from "@renoirb/inline-note-element";

const ELEMENTS = [
  {
    name: "rb-notice-box",
    element: NoticeBoxElement,
  },
  {
    name: "value-date-range",
    element: ValueDateRangeElement,
  },
  {
    name: "value-date",
    element: ValueDateElement,
  },
  {
    name: "rb-inline-note",
    element: InlineNoteElement,
  },
];

const main = async () => {
  await import(
    "https://dist.renoirb.com/esm/own/value-date-element/v0.5.0/example-context-api.mjs?setup&delay"
  );
  await Promise.resolve();

  const loaded = [];
  const errored = [];

  for (const { name, element } of ELEMENTS) {
    if (name && element) {
      try {
        customElements.define(name, element);
        loaded.push(name);
      } catch (e) {
        console.error(`Failed to register ${name}`, e); // eslint-disable-line no-console
        errored.push(name);
      }
    }
  }

  return {
    loaded,
    errored,
  };
};

export default main;
