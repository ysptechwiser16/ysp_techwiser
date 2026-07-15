export function resolveContentType(category?: string, sourceType?: string) {
  const normalizedCategory = (category ?? '').trim().toLowerCase()
  const normalizedSource = (sourceType ?? '').trim().toLowerCase()

  if (normalizedSource === 'review') return 'review'
  if (normalizedSource === 'guide') return 'guide'
  if (normalizedSource === 'comparison') return 'comparison'
  if (normalizedSource === 'news') return 'news'
  if (normalizedSource === 'video') return 'video'

  if (normalizedCategory === 'comparisons') return 'comparison'
  if (normalizedCategory === 'tutorials') return 'guide'
  if (normalizedCategory === 'news' || normalizedCategory === 'launches') return 'news'
  if (normalizedCategory === 'videos') return 'video'
  if (
    normalizedCategory === 'smartphones' ||
    normalizedCategory === 'laptops' ||
    normalizedCategory === 'ai' ||
    normalizedCategory === 'accessories'
  ) {
    return 'review'
  }

  return 'article'
}
