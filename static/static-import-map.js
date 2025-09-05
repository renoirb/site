/**
 * See also https://renoirb.com/import-map.js
 *
 * rel=#WIP-Mingle-CustomElements-From-ESM-Modules
 */
(function () {
  const imports = {
    "@renoirb/app-layout-element":
      "http://localhost:8000/packages/app-layout-element/browser.mjs",
    "@renoirb/notice-box-element":
      "https://dist.renoirb.com/esm/own/notice-box-element/v0.2.0/browser.mjs",
    "@renoirb/value-date-element":
      "https://dist.renoirb.com/esm/own/value-date-element/v0.5.0/browser.mjs",
    "@renoirb/inline-note-element":
      "https://dist.renoirb.com/esm/own/inline-note-element/v0.2.0/browser.mjs",
    "@renoirb/context-api":
      "https://dist.renoirb.com/esm/own/context-api/v1.0.0/browser.mjs",
    "@renoirb/jsonresume-utils":
      "https://dist.renoirb.com/esm/own/jsonresume-utils/v0.1.0/core.mjs",
    "@renoirb/http-utils":
      "https://dist.renoirb.com/esm/own/http-utils/v0.1.0/browser.mjs",
    "@renoirb/jsonresume-element":
      "https://dist.renoirb.com/esm/own/jsonresume-element/v0.1.0/browser.mjs",
    "@renoirb/element-utils":
      "https://dist.renoirb.com/esm/own/element-utils/v0.4.0/browser.mjs",
    "@renoirb/markdown-content-element":
      "https://dist.renoirb.com/esm/own/markdown-content-element/v0.2.0/browser.mjs",
  };
  const importMap = document.createElement("script");
  importMap.type = "importmap";
  importMap.textContent = JSON.stringify({ imports });
  importMap.setAttribute("id", "importMap");
  importMap.setAttribute("data-created-via", "static-import-map.js");
  Reflect.set(importMap, "imports", imports);
  if (document?.currentScript) {
    document.currentScript.parentNode.insertBefore(
      importMap,
      document.currentScript,
    );
  } else {
    document.head.appendChild(importMap);
  }
})();
