import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Bookmark } from '@/models/Bookmark'

export async function GET(request: Request) {
  await connectDB()

  const { searchParams } = new URL(request.url)
  const email = (searchParams.get('email') ?? '').trim().toLowerCase()
  if (!email) return NextResponse.json({ results: [] })

  const results = await Bookmark.find({ userEmail: email })
    .populate('articleId')
    .sort({ createdAt: -1 })
    .lean()

  return NextResponse.json({ results })
}

export async function POST(request: Request) {
  await connectDB()

  const body = await request.json().catch(() => null)
  const userEmail = String(body?.userEmail ?? '').trim().toLowerCase()
  const articleId = String(body?.articleId ?? '').trim()

  if (!userEmail || !articleId) {
    return NextResponse.json({ error: 'Missing bookmark data' }, { status: 400 })
  }

  const existing = await Bookmark.findOne({ userEmail, articleId }).lean()
  if (existing) return NextResponse.json({ ok: true, duplicate: true })

  const created = await Bookmark.create({ userEmail, articleId })
  return NextResponse.json(created, { status: 201 })
}
