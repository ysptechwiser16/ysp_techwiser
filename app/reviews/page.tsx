import type { Metadata } from 'next'
import Link from 'next/link'
import { connectDB } from '@/lib/mongodb'
import { Review } from '@/models/Review'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Tech Reviews | YSP Techwiser',
  description:
    'Premium smartphone, laptop, accessories, and gadget reviews from YSP Techwiser.',
}

type ReviewItem = {
  _id: string
  title: string
  slug: string
  excerpt: string
  category: string
  score: string
  createdAt: string
}

async function getReviews(): Promise<ReviewItem[]> {
  await connectDB()

  const reviews = await Review.find({ status: 'published' })
    .sort({ featured: -1, createdAt: -1 })
    .limit(24)
    .lean()

  return (reviews as any[]).map((review) => ({
    _id: String(review._id),
    title: review.title ?? 'Untitled review',
    slug: review.slug ?? '',
    excerpt:
      review.excerpt ??
      'Premium review from YSP Techwiser covering performance, cameras, battery, display, and user experience.',
    category: review.category ?? 'Tech',
    score: review.score ?? '8.5/10',
    createdAt: review.createdAt
      ? new Date(review.createdAt).toISOString()
      : '',
  }))
}

function formatDate(date: string) {
  if (!date) return 'Latest'

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export default async function ReviewsPage() {
  const reviews = await getReviews()
  const featured = reviews[0]

  return (
    <main className="min-h-screen bg-[#050816] px-4 py-10 text-white md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl space-y-8">

        <section className="overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl">
          <div className="grid gap-10 p-6 md:p-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-center">

            <div>
              <div className="premium-kicker">
                Tech Reviews
              </div>

              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                Honest reviews for real users.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                Deep smartphone, laptop, accessory, and gadget reviews with performance analysis, camera testing, battery insights, and buying recommendations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/smartphones" className="premium-button">
                  Smartphone reviews
                </Link>

                <Link href="/laptops" className="premium-button-ghost">
                  Laptop reviews
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">
                    {reviews.length}
                  </div>

                  <div className="mt-2 text-sm text-slate-300">
                    Published reviews
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">
                    Premium
                  </div>

                  <div className="mt-2 text-sm text-slate-300">
                    Editorial quality
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <div className="text-3xl font-semibold text-cyan-200">
                    Mobile
                  </div>

                  <div className="mt-2 text-sm text-slate-300">
                    Responsive experience
                  </div>
                </div>

              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-black/20 p-6">

              <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                Featured Review
              </div>

              {featured ? (
                <div className="mt-4 space-y-4">

                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">

                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      {featured.category}
                    </div>

                    <h2 className="mt-3 text-xl font-semibold text-white">
                      {featured.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {featured.excerpt}
                    </p>

                    <div className="mt-5 flex items-center justify-between gap-3">

                      <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                        {formatDate(featured.createdAt)}
                      </span>

                      <span className="text-sm font-medium text-cyan-200">
                        {featured.score}
                      </span>

                    </div>

                  </div>

                  <div className="rounded-[24px] border border-cyan-400/15 bg-cyan-400/5 p-5">
                    <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                      Review Standard
                    </div>

                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      Every review focuses on real-world usage, performance, display quality, thermals, battery life, cameras, and long-term value.
                    </p>
                  </div>

                </div>
              ) : (
                <div className="mt-4 rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
                  No reviews published yet.
                </div>
              )}

            </div>

          </div>
        </section>

        <section className="flex items-end justify-between gap-4">

          <div>
            <div className="premium-kicker">
              Latest Reviews
            </div>

            <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
              Fresh reviews from YSP Techwiser
            </h2>
          </div>

          <div className="text-sm text-slate-400">
            {reviews.length} items
          </div>

        </section>

        {reviews.length > 0 ? (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

            {reviews.map((review) => (
              <Link
                key={review.slug || review._id}
                href={review.slug ? `/reviews/${review.slug}` : '/reviews'}
                className="rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-cyan-400/20"
              >

                <div className="text-xs uppercase tracking-[0.24em] text-cyan-200/75">
                  {review.category}
                </div>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {review.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {review.excerpt}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">

                  <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    {formatDate(review.createdAt)}
                  </div>

                  <div className="text-sm font-medium text-cyan-200">
                    {review.score}
                  </div>

                </div>

              </Link>
            ))}

          </section>
        ) : (
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-2xl">

            <h3 className="text-2xl font-semibold text-white">
              No reviews available
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Add published reviews from the admin dashboard to populate this page automatically.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">

              <Link href="/smartphones" className="premium-button">
                Explore smartphones
              </Link>

              <Link href="/" className="premium-button-ghost">
                Back to home
              </Link>

            </div>

          </section>
        )}

      </div>
    </main>
  )
}
