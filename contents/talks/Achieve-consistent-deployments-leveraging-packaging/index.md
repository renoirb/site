---
title: Achieve consistent deployments by leveraging packaging
keywords: devops, operations, linux, containers, packaging, continuous-build
description: Talk slides about achieving consistent and fast server deployment using packaging
template: slides.html
notes: |
  Make sure no indentation nor spaces are added below, otherwise Markdown processor will add HTML breaks 
  color palette: 070707 (7,7,7)   232323 (35,35,35)   101010 (16,16,16)   171717 (23,23,23)   0C0000 (12,0,0)
  complementary: 5C5353 (92,83,83)   5C5C5C (92,92,92)   101010 (16,16,16)   4A5C4F (74,92,79)
---
<script async src="//platform.twitter.com/widgets.js" charset="utf-8" ></script>
<style>
body,.remark-container { font-family:sans-serif; background:#0C0000; color:#FFFFFF; }
a { color: #0095DD; }
h1,h2,h3,h4,h5 { font-weight:bold; }
.remark-slide-scaler { box-shadow:none; }
.remark-slide-content { font-size: 1.8em; background-color:#070707; background-repeat:no-repeat; }
.footnote { bottom: 12px; position:absolute; left:20px; }
.remark-slide .footnote { background-color:rgba(255, 255, 255, 0.6); padding:10px; font-size:0.7em; }
.remark-slide li+li { margin-top:5%; }
.remark-slide li small { opacity:0.6; }
.remark-slide .twitter-tweet-rendered { position:relative; margin: 0 auto; width:40%; }
.remark-slide .webplatform { color:#5C5353; background-color:#DDD5D6; }
.remark-slide .ping-pong.remark-slide-content { background-position:center middle; }
.remark-slide .first-slide { color:#5C5353; }
.remark-slide .first-slide h1 { text-align:center; }
.remark-slide .first-slide h1 em { color:#0095DD; }
.remark-slide .mozilla-branded { color:#5C5353; background:#EAEFF2 url("images/mdn-header-background.png") repeat; }
.remark-slide .mozilla-branded img { margin:10% 0; width:60%; }
.remark-slide .background-title { background-size:100%; padding:0 !important; }
.remark-slide .background-title h1, .remark-slide .background-title h2, .remark-slide .background-title h3 { background-color:rgba(255, 255, 255, 0.8) !important; padding:10px 0;}
.remark-slide .spike img+img { margin-top:30px; }
.remark-slide .brave-new-world h2 { visibility:hidden; }
.remark-slide .brave-new-world { background-position: middle center; }
.remark-slide .all-the-things { background-position:center bottom !important; background-image:url("images/all-the-things.jpg"); background-color:#FFFFFF; color:#ED006C; }
.remark-slide h2 { margin-top:30%; }
.remark-slide .rules { background-color:#000; background-position:center right !important; }
.remark-slide .invert-text { color:#5C5353; }
.remark-slide .invert-slide-number .remark-slide-number { color:#FFF; }
.remark-slide .mozilla-branded .remark-slide-number { color:#5C5353; }
</style>
