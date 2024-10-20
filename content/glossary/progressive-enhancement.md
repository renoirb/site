---
title: Progressive Enhancement and/or Graceful Degradation
locale: en-CA
createdAt: 2021-01-27
updatedAt: 2021-01-27
status: publish
revising: false
coverImage:
  src: ~/assets/content/glossary/progressve-enhancement.webp
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

[is-progressive-enhancement-dead-yet]:
  https://briefs.video/videos/is-progressive-enhancement-dead-yet/
  'Is Progressive Enhancement Dead Yet?'

### [Is Progressive Enhancement Dead Yet?][is-progressive-enhancement-dead-yet]

<a style="clear:both;overflow:hidden;display:block;" href="https://briefs.video/videos/is-progressive-enhancement-dead-yet/">

<app-image figcaption="The Basic Layout ... Is NOT a BROKEN Layout" style="width:100%" src="~/assets/content/glossary/briefs-dot-video-slash-videos-slash-is-progressive-enhancement-dead-yet--loop.apng">

This is the main point of _Progressive Enhancement_, is to organize web site and
application code to add enhancements.

The main point is to support what's native to browsers, let CSS do what it's
good at, and let JavaScript do things it's good at.

</app-image>

</a>

_Heydon_ (the author of that video) makes good points about how, in 2020, we
should re-think how we build web applications. How we can now detect and load
code paths only when applicable.

Since I'm publishing this file in the desire to have a long-term storage of my
ideas, I will maybe find a way to quote and attribute properly here.

If it's many years past _2020_ (crazy year that was!), if you saw a funny video
that mentioned [Tony Hawk](https://en.wikipedia.org/wiki/Tony_Hawk) and a _shark
with a fez_ talking about **Progressive Enghancement**, that's the video I
wanted you to see!

You can see more _very insightful_ videos from The videos are hosted on vimeo,
but published from [https://briefs.video/](https://briefs.video/videos/) and I
can't unfortunately do anything more than link to [his video talk "_Is
Progressive Enhancement Dead Yet?_"][is-progressive-enhancement-dead-yet]

<app-twitter-quote tweet="1346167334919155713">
The new 📼 Webbed Briefs 📼 video is now ready for your “““enjoyment”””!
</app-twitter-quote>

The author is [**Heydon Pickering**](https://heydonworks.com/) (Yes, to see his
site, you’ll ave to turn off JavaScript — what a cool idea!).

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
