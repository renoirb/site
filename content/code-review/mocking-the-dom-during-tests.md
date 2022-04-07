---
title: Mocking the DOM during tests
date: &createdAt '2021-01-27T20:15:04-04:00'
createdAt: *createdAt
tags:
  - ECMAScript
  - JavaScript
  - Testing
---

In tests, please, `__mocks__` the DOM, please!

Either
[mock things that doesn't exist](https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom).
Which should make more sense, because `_urq` is window spoiled by userReport
script. We [could mock in _manual mock_][mock-the-dom] the UserReport provider.
That thing should be tested already.

But talking about that, what if the script is blocking and or broken, would it
break our stuff too.

How about we provide our own tracking method, that then passes it (because we
can listen to those events) and delegate them internally to that external
tracker.

[mock-the-dom]: https://stackoverflow.com/a/50629802

```typescript
// file __mocks__/dom.ts
import { JSDOM } from 'jsdom'
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
// So that calling document, or window during tests will use that instance of JSDOM
```

See [how to mock the DOM][mock-the-dom] with Jest _manual mocks_.
