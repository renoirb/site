export const workbox = (
  useWorkbox: boolean = false,
  isDev: boolean = false
) => {
  if (!useWorkbox) {
    return {}
  }

  return {
    dev: isDev,
    cacheNames: {
      prefix: 'renoirb',
    },
    clientsClaim: true,
    config: {
      debug: isDev,
    },
    offlinePage: '/offline.html',
    skipWaiting: true,
  }
}
