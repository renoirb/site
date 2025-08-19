/**
 * This should work for file:/// URLs
 * (assuming it's supported, Safari does, not Chromium thus far 2023-02-03)
 */
const SITE_ROOT_BASE_URL = await import.meta.url?.replace("main.mjs", "");

// Equivalent of an application environment variable
const currentEnv = Object.freeze({
  SITE_ROOT_BASE_URL,
});
Object.defineProperty(window, "currentEnv", {
  value: currentEnv,
  writable: false,
});

const main = async () => {
  await Promise.resolve()

  try {
    // Things should display regardless of whether all elements are registered. Just less pretty.
    const { default: registerElements } = await import(
      "./assets/js/register-elements.mjs"
    );
    await registerElements();
  } catch (_e) {
    const message =
      `We could not load our elements from ./assets/js/register-elements.mjs, let's fail gracefully. Error message: ` +
      _e;
    console.warn(message); // eslint-disable-line no-console
  }
};

// ----------------------------------------------------------------------------
main().catch((e) => {
  console.error(`Something went wrong`, e);
});
