---
title: Progressive Enhancement and/or Graceful Degradation
coverImage:
  src: ~/assets/content/assets/content/glossary/progressve-enhancement.webp
  text: |
    *The Chocolatey Layers of Progressive Enhancement*
    Start with your content peanut, marked up in rich, semantic (X)HTML.
    Coat that content with a layer of rich, creamy CSS.
    Finally, add JavaScript as the hard candy shell to make a wonderfully tasty treat (and keep it from melting in your hands).
    [Source][ala-understanding-pe]
    [ala-understanding-pe]: https://alistapart.com/article/understandingprogressiveenhancement/ 'A List Apart: Understanding Progressive Enhancement'
---

[ncz-home]: https://humanwhocodes.com/
[yt-nczonline-progressive-enhancement]:
  https://www.youtube.com/watch?v=hdTxeR90_1E
  'Nicholas Zakas: Progressive Enhancement 2.0'
[ala-understanding-pe]:
  https://alistapart.com/article/understandingprogressiveenhancement/
  'A List Apart: Understanding Progressive Enhancement'

## Progressive Enhancement

It is the idea of organizing feature development so that
["(...) \[web application\] SHOULD look better in different browser"](https://youtu.be/hdTxeR90_1E?t=1285)
(21:25), in an attempt to create "_The best possible experience given the device
capabilities_" by leveraging Native APIs, because otherwise we’re
["trying to make older browsers do things they were never meant to do is the reason \[that web development\] takes too long"](https://youtu.be/hdTxeR90_1E?t=1615)
(26:55)

## Graceful Degradation

In Web Development, this would be the equivalent of Defensive programming, where
we would tell at least an error message if a required dependency is missing.

> Escalators are a good example of graceful degradation — when they break down,
> they become steps.

---

## Related videos

### [Progressive Enhancement 2.0][yt-nczonline-progressive-enhancement]

<iframe width="560" height="315" src="https://www.youtube.com/embed/hdTxeR90_1E" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Quotes**:

- ["Your site SHOULD look better in different browser"](https://youtu.be/hdTxeR90_1E?t=1285)
  (21:25) At least for modern browser, "The best possible experience given the
  device capabilities" which explains bugs are caused by "trying to make older
  browsers do things they were never meant to do"
- ["Less code is always faster"](https://youtu.be/hdTxeR90_1E?t=1750) (29:05)

---

## Reference

- [Progressive Enhancement 2.0][yt-nczonline-progressive-enhancement],
  _[Nicholas C. Zakas][ncz-home]_ talk at _YUI Library_ conference, 2012-03-19
- [Understanding Progressive Enhancement][ala-understanding-pe]
- [In defence of graceful degradation and where progressive enhancement comes in](https://adamsilver.io/articles/in-defence-of-graceful-degradation-and-where-progressive-enhancement-comes-in/),
  by _Adam Silver_, 2019-06-25
