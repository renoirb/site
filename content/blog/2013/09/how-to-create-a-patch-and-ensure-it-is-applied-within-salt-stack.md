---
locale: en-CA
title: How to create a patch and ensure it is applied within Salt Stack
canonical: >-
  https://renoirboulanger.com/blog/2013/09/how-to-create-a-patch-and-ensure-it-is-applied-within-salt-stack/
status: publish
revising: true
createdAt: '2013-09-12'
updatedAt: '2014-02-04'
tags:
  - salt-stack
  - techniques
categories: []
description: >-
  This tutorial shows how to create a patch, sign it, and make sure it is
  applied.
excerpt: >-
  When you need to adjust a file with a specific code modification and you are
  sure the file will not change over time, patch is a viable solution. This
  tutorial shows how to create a patch, sign it, and make sure it is applied.
---

<p>Quick tutorial on how to create a patch and ensure it is applied using <a href="https://saltproject.io/">salt stack</a>.</p>

<h3>Procedure</h3>

<h4>Creating a patch</h4>

<ol>
<li><p>Create a copy of original file</p>

<p>cp file file.orig</p></li>
<li><p>Modify file, and test</p></li>
<li><p>Create a md5 sum of the modified file for later use</p>

<p>cat file | md5sum</p></li>
<li><p>Revert modification, then prepare patch<br />
mv file file.mod<br />
cp file.orig file</p></li>
<li><p>Create diff</p>

<pre><code>diff -Naur file file.mod &gt; file.patch
</code></pre></li>
</ol>

<h4>Create Salt stack manifest block in appropriate state file</h4>

<p>Add a block similar to this as a patch state definition. Make sure it is refered at least in your <code>top.sls</code></p>

<pre><code>    /usr/share/ganglia-webfrontend/auth.php:
      file.patch:
        - source: salt://monitor/auth.php.patch
        - hash: md5=480ef2ae17fdfee85585ab887fa1ae5f
</code></pre>

<h3>References</h3>

<ul>
<li><a href="http://docs.saltstack.com/ref/states/all/salt.states.file.html#salt.states.file.patch">Salt stack states.file.patch</a></li>
<li><a href="http://jungels.net/articles/diff-patch-ten-minutes.html">diff patch in ten minutes</a></li>
</ul>