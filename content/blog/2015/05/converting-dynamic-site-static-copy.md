---
locale: en-CA
title: Converting a dynamic site into static HTML documents
canonical: https://renoirboulanger.com/blog/2015/05/converting-dynamic-site-static-copy/
date: &createdAt '2015-05-20T13:44:11-04:00'
createdAt: *createdAt
preamble:
  disable: true
  text: ' '
coverImage:
  src: ~/assets/content/blog/2015/05/webat25-org-screen-capture.png
  alt: Web 25th anniversary web site screenshot
  text: |
    In March 2014, the W3C and the Web Foundation celebrated the World Wide Web 24th anniversary.
    As a W3C Team Member, I was asked to help the systems team and host the event’s web site.
    After the event, I was asked to make the web site to become static HTML documents so the systems team wouldn’t have to maintain the CMS it was using.
categories:
  - Projects
tags:
  - Linux
  - operations
  - procedure
  - favourites
  - webplatform
keywords:
  - curl
  - wget
  - static site
  - convert from cms
---
I've been asked twice now to convert websites running on a CMS into static file-based websites. This practice is useful for preserving site content without maintaining the CMS database and backend services. The goal is to create an exact copy of the CMS-generated site but as simple HTML files.

## Benefits of Static Sites
Converting to static sites helps with migration, as sites that won't receive new content become folders of HTML files. The challenge is to maintain the original structure, allowing the web server to find and serve these files.

## Process
Here are the steps I took to achieve this. Keep in mind that your experience may vary, but these steps worked for me with WordPress and ExpressionEngine.

### 1. Gathering Page URLs
- Use the browser's network inspector to capture all document requests.
- Export the list using "Save as HAR."
- Extract URLs from the HAR file using `underscore-cli`.
- Clean the list to have one URL per line in `list.txt`.

### 2. Scraping
Perform two scrapes: one for assets and one for content.

Commands for `wget`:
```bash
export UA='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.94 Safari/537.36'
export ACCEPTL='Accept-Language: fr-FR,fr;q=0.8,fr-CA;q=0.6,en-US;q=0.4,en;q=0.2'
export ACCEPTT='Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'

# First pass
wget -i list.txt \
    -nc \
    --random-wait \
    --mirror \
    -e robots=off \
    --no-cache \
    -k \
    -E \
    --page-requisites \
    --user-agent="$UA" \
    --header="$ACCEPTT" \
    http://www.example.org/

# Second pass
wget -i list.txt \
    --mirror \
    -e robots=off \
    -k \
    -K \
    -E \
    --no-cache \
    --no-parent \
    --user-agent="$UA" \
    --header="$ACCEPTL" \
    --header="$ACCEPTT" \
    http://www.example.org/
```

### 3. Cleanup
Commands to clean up the fetched files:

```bash
# Remove empty lines
find . \
    -type f \
    -regextype posix-egrep \
    -regex '.*\.orig$' \
    -exec sed \
    -i 's/\r//' {} \;

# Rename .orig files to html
find . \
    -name '*orig' \
  | sed \
    -e "p;s/orig/html/" \
  | xargs \
    -n2 mv

# Remove duplicated .html in filename
find . \
    -type f \
    -name '*\.html\.html' \
  | sed \
    -e "p;s/\.html//" \
  | xargs \
    -n2 mv

# Simplify folders with only index.html
find . \
    -type f \
    -name 'index.html' \
  | sed \
    -e "p;s/\/index\.html/.html/" \
  | xargs \
    -n2 mv

# Remove files with .1 or similar
find . \
    -type f \
    -name '*\.1\.*' \
    -exec rm -rf {} \;
```

Please note that the `wget` commands and cleanup steps are based on my experience and may require adjustments for your specific case.
