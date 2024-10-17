---
locale: en-CA
title: Encapsulate a LDAP DN string using Arrays in PHP
canonical: >-
  https://renoirboulanger.com/blog/2013/04/encapsulate-a-ldap-dn-string-using-an-array-in-php/
status: publish
revising: true
created: '2013-04-01'
updated: '2013-04-02'
categories:
  - snippet
tags:
  - techniques
  - php
  - web
excerpt: >-
  While I was writing an authentication and privileges assignation mechanism
  using information provided by an ActiveDirectory's LDAP DN string into my
  project's web application, I realized that there was no documented way to
  extract information from it. This snippet is about reading a complex DN
  string, and "explode" it into a manageable PHP Array.
---

During a project I had to fork privileges assignation logic with information coming from an LDAP server. Since the DN string representing users can be very different for each user: their affiliations and roles. I had to find ways to interpret sub-parts of that string to figure out what privileges to attach to them.

My snippet's purpose is to get the capability to get a subset of that LDAP DN string, assuming that the first index is more precise than the last, but concatenated would give the full context.

While I was trying to find already made function that explodes that string into manageable arrays in PHP, I realized that there was none. I then decided to contribute it as <a title="Parse, and format a DN string to Array " href="http://www.php.net/manual/en/function.ldap-explode-dn.php#109482" target="_blank">a comment on the PHP.net website</a>.

<!--more-->

<p>&nbsp;</p>­
<h3>The basics</h3>
As a reminder, an LDAP DN string looks like the following:

<pre lang="bash">
  CN=username,OU=UNITNAME,OU=Region,OU=Country,DC=subdomain,DC=domain,DC=com
</pre>

In such a string, we get basically everything a user may inherit from:

<ul>
	<li>Group assignation</li>
	<li>Organization domain (either DNS or Microsoft's idea of a "domain" (aka. "Active Directory"))</li>
	<li>etc.</li>
</ul>

The main idea is to deal with different logic based on changes or assignment. The DN has all we need.

Reading the data from it can be done using successive <code>explode</code> on the <code>=</code> and the <code>,</code>. But How about to use the implicit hierarchy the string conveys. 

My objective was to read the previously shown DN string, and parse a manageable array that would look like this:`

<pre lang="php">
    array(
        'CN' => array("username"),
        'OU' => array("UNITNAME","Region","Country"),
        'DC' => array ("subdomain","domain","com")
    );
</pre>

<p>&nbsp;</p>­
<h3>How to use</h3>
Assuming we want to work with changes in the OU field. We could do as:

<pre lang="php">
<?php 

// Fictive User object, coming from an ORM entity manager ($em) 
$user = $em->find($userId); // $user instanceof User

// This is coming from the LDAP
$dn= 'CN=username,OU=UNITNAME,OU=Region,OU=Country,DC=subdomain,DC=domain,DC=com';

$wrapper = parseLdapDn($dn);
// We are working with "UNITNAME" but there can be other ones
switch($wrapper['OU'][0]){
    case 'UNITNAME':
        // Specific logic or authorization setters
        $user->addRole('ROLE_UNITNAME');
    break;

    default:
      // Default behavior, in case we did not grasp
    break;
}

// And so on...
</pre>

In this example I added a role using Symfony2's method on a Doctrine2 provided object. But you may see other use cases.

<p>&nbsp;</p>­
<h3>Snippet</h3>
<script src="https://gist.github.com/renoirb/3152719.js"></script>
I also published it as <a title="Parse, and format a DN string to Array " href="http://www.php.net/manual/en/function.ldap-explode-dn.php#109482" target="_blank">a comment on the PHP.net website</a>.

<p>&nbsp;</p>­
<h3>That is all folks</h3>
If you have other questions or suggestions, let me know.