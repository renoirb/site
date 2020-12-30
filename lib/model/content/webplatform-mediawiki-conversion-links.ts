/**
 * Instead of writing in Markdown from and to
 * use this JavaScript.
 *
 * If more scripts for one article is needed, make sure
 * to also move this file too.
 * For now, that'll do.
 */
export default (domDocument: Document) => {
  if (!('querySelectorAll' in domDocument)) {
    throw new Error('Missing required Document')
  }
  const items = [
    ...domDocument.querySelectorAll(
      '[data-webplatform-mediawiki-conversion-links]',
    ),
  ]
  if (items.length < 1) {
    return
  }

  for (const item of items) {
    const inputStr = item.textContent
    const from = domDocument.createElement('a')
    from.href = 'https://web.archive.org/web/20160421193144/https://' + inputStr
    from.textContent = inputStr
    const to = domDocument.createElement('a')
    let toTextContent = inputStr
    toTextContent = toTextContent.replace(
      'docs.webplatform.org/wiki',
      'webplatform.github.io/docs',
    )
    toTextContent = toTextContent.replace(':', '/')
    toTextContent = toTextContent.replace(/[()]/g, '')
    to.href = 'https://' + toTextContent
    to.textContent = toTextContent
    const separator = domDocument.createElement('span')
    separator.textContent = ' to '
    item.innerHTML = ''
    from.rel = 'nofollow noopener noreferrer'
    from.target = '_blank'
    item.appendChild(from)
    item.appendChild(separator)
    to.rel = 'nofollow noopener noreferrer'
    to.target = '_blank'
    item.appendChild(to)
  }
}
