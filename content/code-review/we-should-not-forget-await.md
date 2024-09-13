---
title: We should not forget await
locale: en-CA
created: 2021-01-27
updated: 2021-01-27
status: publish
revising: false
tags:
  - ECMAScript
  - JavaScript
---

Quoting [**We should not forget the `await`** (Exploring ECMASCript 2016-2017;
_5.3.1 Don’t forget
await_][public-book-exploring2016-17-async-do-not-forget-await])

> \[`out` value\] is set to a `Promise`, which is usually not what you want in
> async functions. `await` can even make sense if an async function doesn’t
> return anything.

**Source**: [Exploring ECMASCript 2016-2017][public-book-exploring2016-17],
see-also ([Returned Promises are not
wrapped][public-book-exploring2016-17-async-returning-promises], [Common Promise
chaining mistakes][public-book-exploring2015-common-promise-mistakes], [Tips for
error handling][public-book-exploring2015-promise-error-handling])

### Returning a promise from a promise, the engine will unpack and flatten it

Returning a promise from a promise, the [engine will unpack and flatten it
(**Exploring ES6**; _25. Promises for asynchronous
programming_)][public-book-exploring2015-promise-flattening]

### Read more about async/await

- [**JavaScript for impatient programmers (ES2020 edition)** , _A roadmap for
  asynchronous programming in JavaScript_][public-book-impatientjs-async-js]
- [**Deep JavaScript**, _17 Exploring Promises by implementing
  them_][public-book-deepjs-implementing-promises]

[public-book-exploring2016-17-async-do-not-forget-await]:
  https://exploringjs.com/es2016-es2017/ch_async-functions.html#_dont-forget-await
  'Exploring ECMASCript 2016-2017, chapter: 5.3.1 Don’t forget await'
[public-book-exploring2016-17-async-returning-promises]:
  https://exploringjs.com/es2016-es2017/ch_async-functions.html#_returned-promises-are-not-wrapped
  'Exploring ECMASCript 2016-2017, chapter: 5.2.4 Returned Promises are not wrapped'
[public-book-exploring2016-17]:
  https://exploringjs.com/es2016-es2017/
  'Exploring ECMASCript 2016-2017'
[public-book-exploring2015-common-promise-mistakes]:
  https://exploringjs.com/es6/ch_promises.html#sec_common-promise-chaining-mistakes
  'Exploring ES6, chapter: 25.9 Common Promise chaining mistakes'
[public-book-exploring2015-promise-error-handling]:
  https://exploringjs.com/es6/ch_promises.html#sec_error-handling-promises
  'Exploring ES6, chapter: 25.10 Tips for error handling'
[public-book-exploring2015-promise-flattening]:
  https://exploringjs.com/es6/ch_promises.html#_flattening
  'Exploring ES6, chapter: 25 Promises for asynchronous programming, Returning a promise from a promise, the engine will unpack and flatten it'
[public-book-impatientjs-async-js]:
  https://exploringjs.com/impatient-js/ch_async-js.html#a-roadmap-for-asynchronous-programming-in-javascript
  'JavaScript for impatient programmers, chapter: A roadmap for asynchronous programming in JavaScript'
[public-book-deepjs-implementing-promises]:
  https://exploringjs.com/deep-js/ch_implementing-promises.html
  'Deep JavaScript, chapter 17 Exploring Promises by implementing them'
