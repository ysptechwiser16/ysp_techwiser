export type ContentRouteType = 'article' | 'review' | 'guide' | 'comparison' | 'video' | 'news'

export function getRouteForContentType(type?: ContentRouteType, slug = '') {
  const safeSlug = slug.trim()

  switch (type) {
    case 'review':
      return `/reviews/${safeSlug}`
    case 'guide':
      return `/guides/${safeSlug}`
    case 'comparison':
      return `/compare/${safeSlug}`
    case 'video':
      return `/videos/${safeSlug}`
    case 'news':
      return `/news/${safeSlug}`
    case 'article':
    default:
      return `/blog/${safeSlug}`
  }
}
