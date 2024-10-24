---
locale: fr-CA
title: >-
  Procedure to create a re-usable configuration export script to move a virtual
  machine configuration to a new one
canonical: >-
  https://renoirboulanger.com/blog/2013/08/procedure-to-create-a-re-usable-configuration-export-script-to-move-virtual-machine-configuration-to-a-new-one/
status: publish
revising: true
migrateCode: true
created: '2013-08-07'
updated: '2013-08-07'
tags:
  - linux
  - logiciel-libre
categories: []
excerpt: >-
  This procedure guides you through some steps on a way to commission or
  decomission your web app. At least to move essential configuration files.
---

<p>The following procedure is about deprecating an old Linux server, and 
move crucial configuration to a new fresh install that has the desired 
configuration by cloning it, then applying the <em>Old VM</em>'s configuration.</p>

<p>The steps will go as follows:</p>

<ol>
<li>Grab the original machine's configuration</li>
<li>Clone the <em>New VM</em> that will replace the Old</li>
<li>Disable the <em>Old VM</em> web application</li>
</ol>

<h3>1. Grab the original machine's configuration</h3>

<p>The steps will create a tar file with the configurations.</p>

<ul>
<li>Connect to the production vm (morpheus) through the cloud provider console (e.g. vSphere client, or VCloud director webapp or Open Stack console)

<ul>
<li>Connect through Putty, or your local development VM terminal the follwing lines (the console do not share the clipboard)</li>
</ul></li>
</ul>

<pre><code>ssh username@morpheus.networkname.net
</code></pre>

<ul>
<li>Create this file</li>
</ul>

<pre><code>vi ~/make-migrate.sh
</code></pre>

<ul>
<li>Enter in vim paste mode</li>
</ul>

<pre><code>:set paste
</code></pre>

<ul>
<li>Paste this content</li>
</ul>

<pre><code>#!/bin/bash 
cd ~ 
mkdir -p ~/migrate/etc/network 
sudo cp /etc/network/interfaces ~/migrate/etc/network/ 
sudo cp /etc/hostname ~/migrate/etc/ 
sudo cp /etc/resolv.conf ~/migrate/etc/ 
mkdir -p ~/migrate/etc/ssh 
sudo cp /etc/ssh/ssh_host* ~/migrate/etc/ssh/ 
mkdir -p ~/migrate/home/username/.ssh 
cp ~/.ssh/* ~/migrate/home/username/.ssh/ 
mkdir -p ~/migrate/home/username/_prod/app/config 
cp ~/_prod/app/config/parameters.ini ~/migrate/home/username/_prod/app/config 
mkdir -p ~/migrate/etc/apache2/sites-available 
sudo cp /etc/apache2/sites-available/* ~/migrate/etc/apache2/sites-available/ 
sudo cp /etc/resolv.conf ~/migrate/etc/ 
sudo chown -R username:username ~/migrate 
tar cfz ~/migrate.tar.gz ~/migrate 
mv migrate.tar.gz _prod/web/
</code></pre>

<ul>
<li>Execute it</li>
</ul>

<pre><code>/bin/bash ~/make-migrate.sh
</code></pre>

<ul>
<li>The latter moves into the </li>
<li>Download https://morpheus.networkname.net/migrate.tar.gz</li>
</ul>

<!--#TODO-Import-Code-From-External-->

<h3>2. Clone the <em>New VM</em> that will replace the Old</h3>

<p>This step is about cloning the functionnal VM.</p>

<p>Since it is specific to your cloud management system, I will not describe any way to do so.</p>

<p>Important points to consider while doing so, ensure that you:</p>

<ul>
<li>disable or isolate networking</li>
<li>have access to an alternate console</li>
</ul>

<p>Otherwise you might just create conflicts.</p>

<h3>2. Render the production machine unavailable</h3>

<p>You should have a copy of the original VM (e.g. morpheus-stg) with the config working the way you want.</p>

<p>This step is specific to the way you might commission or decomission your web app.</p>

<p>You may even not need to decomission it if you have multiple database servers not on the same host.</p>

<h3>3. Prepare the <em>New VM</em> to use the <em>Original VM</em></h3>

<ul>
<li>Start the cloned VM</li>
<li>Connect through the vCenter console</li>
<li>Download the file, sorry, no cut in paste in the cloud provider console :(</li>
<li>Assuming you are in <code>/home/username</code></li>
</ul>

<pre><code>pwd
/home/username
wget --no-check-certificate https://morpheus.networkname.net/migrate.tar.gz
</code></pre>

<ul>
<li>Get the migrate folder from the extracted archive (it will be in a 'home' folder after extracting)</li>
</ul>

<pre><code>tar xfz migrate.tar.gz
mv home/username/migrate .
rm -rf home
</code></pre>

<ul>
<li>Disable the network configuration</li>
</ul>

<pre><code>  sudo /etc/init.d/networking stop
</code></pre>

<ul>
<li>Run the following commands:

<ul>
<li>Echo the content of the files inside the <code>migrate/</code> folder, into their original locations</li>
<li>See the file  listing:</li>
</ul></li>
</ul>

<pre><code>find migrate/ -type f
</code></pre>

<ul>
<li>Create the migrate file original contents</li>
</ul>

<pre><code>cd migrate
find . -type f &gt; prepare.sh
</code></pre>

<ul>
<li>Warning, the following commands we will be using vim to prepare our import script, follow the keyboard types in that sequence:</li>
</ul>

<pre><code>vim prepare.sh
</code></pre>

<ul>
<li>(in the top left corner, where it starts), do:</li>
<li>NOTE: <em><em>FOLLOW BLINDLY THOSE VIM COMMANDS</em></em> ... they written in the form of {modifier key}+{letter}, such as: CTRL+v, SHIFT+A, means the key combination like you would on a Graphical user interface, the + in this list is only to mean together.</li>
</ul>

<pre><code>dd
CTRL+v
100j
$
y
SHIFT+A
</code></pre>

<ul>
<li>Add a few spaces, to make the cursor go further than the longest line</li>
</ul>

<pre><code>ESC
p
</code></pre>

<ul>
<li>The following commands, you have to be in ESC mode, and press ENTER when finished:</li>
</ul>

<pre><code>:%s/  \./ /
:%s/\./cp \./
</code></pre>

<ul>
<li>All is done, write and quit</li>
</ul>

<pre><code>:wq
</code></pre>

<ul>
<li>Check the file</li>
</ul>

<pre><code>cat prepare.sh
</code></pre>

<ul>
<li>You will end up with a file similar to</li>
</ul>

<pre><code>cp ./home/username/_prod/app/config/parameters.ini    /home/username/_prod/app/config/parameters.ini  
cp ./home/username/.ssh/id_rsa                        /home/username/.ssh/id_rsa  
cp ./home/username/.ssh/geritt_dsa.pub                /home/username/.ssh/geritt_dsa.pub  
cp ./home/username/.ssh/geritt_dsa                    /home/username/.ssh/geritt_dsa  
cp ./home/username/.ssh/authorized_keys2              /home/username/.ssh/authorized_keys2  
cp ./home/username/.ssh/config                        /home/username/.ssh/config  
cp ./home/username/.ssh/known_hosts                   /home/username/.ssh/known_hosts 
cp ./home/username/.ssh/id_rsa.pub                    /home/username/.ssh/id_rsa.pub 
cp ./etc/ssh/ssh_host_rsa_key.pub                     /etc/ssh/ssh_host_rsa_key.pub  
cp ./etc/ssh/ssh_host_dsa_key                         /etc/ssh/ssh_host_dsa_key 
cp ./etc/ssh/ssh_host_dsa_key.pub                     /etc/ssh/ssh_host_dsa_key.pub  
cp ./etc/ssh/ssh_host_ecdsa_key.pub                   /etc/ssh/ssh_host_ecdsa_key.pub 
cp ./etc/ssh/ssh_host_rsa_key                         /etc/ssh/ssh_host_rsa_key  
cp ./etc/ssh/ssh_host_ecdsa_key                       /etc/ssh/ssh_host_ecdsa_key 
cp ./etc/hostname                                     /etc/hostname  
cp ./etc/resolv.conf                                  /etc/resolv.conf  
cp ./etc/network/interfaces                           /etc/network/interfaces
</code></pre>

<ul>
<li>Execute that newly created script, first check you are in <code>/home/username/migrate</code></li>
</ul>

<pre><code>pwd
/home/username/migrate
</code></pre>

<ul>
<li>We'll run as root</li>
</ul>

<pre><code>sudo -s
</code></pre>

<ul>
<li>Echo a file or two, to test BEFORE->AFTER</li>
</ul>

<pre><code>cat /etc/network/interfaces
...
cat /etc/hostname
morpheus-stg
</code></pre>

<ul>
<li>Now, run the file</li>
</ul>

<pre><code>/bin/bash ./prepare.sh
</code></pre>

<ul>
<li>they should be different :)</li>
</ul>

<pre><code>cat /etc/network/interfaces
...
cat /etc/hostname
morpheus.networkname.net
</code></pre>

<ul>
<li>Make sure the <code>/etc/hosts</code> file reflects, and points at <code>127.0.0.1</code></li>
</ul>

<pre><code>127.0.0.1   localhost morpheus.networkname.net morpheus
</code></pre>

<ul>
<li>You can use vim regex like so:</li>
</ul>

<pre><code>sudo vim /etc/hosts
:%s/morpheus-stg/morpheus/
:wq
</code></pre>

<ul>
<li>Use apache command tools to disable the old site and enable the prod ones:</li>
</ul>

<pre><code>sudo ll /etc/apache/sites-available
...
-rw-r--r-- 1 root root 1052 Feb 20 19:19 /etc/apache2/sites-available/default
-rw-r--r-- 1 root root 7469 Feb  6  2012 /etc/apache2/sites-available/default-ssl
-rw-r--r-- 1 root root 1917 Feb 20 15:48 /etc/apache2/sites-available/ssl
</code></pre>

<ul>
<li>Enable only <code>ssl</code>, and <code>default</code> (NOT '<code>default-ssl</code>')</li>
</ul>

<pre><code>sudo a2dissite
10-project.local.conf
sudo a2ensite
default ssl
</code></pre>

<ul>
<li>Restart the server</li>
</ul>

<pre><code>sudo service apache2 restart
</code></pre>

<h3>3. Decomission the original, use the new VM as the new Production</h3>

<p>This is, again, specific to the way you might commission or decomission your web app</p>