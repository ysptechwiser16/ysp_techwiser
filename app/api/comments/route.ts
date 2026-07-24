import { NextResponse } from 'next/server'
import mongoose from 'mongoose'
import { connectDB } from '@/lib/mongodb'
import { Comment } from '@/models/Comment'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const articleId = (searchParams.get('articleId') ?? '').trim()

  if (!articleId || !mongoose.Types.ObjectId.isValid(articleId)) {
    return NextResponse.json({ results: [] })
  }

  await connectDB()

  const results = await Comment.find({
    articleId,
    status: 'approved',
  })
    .sort({ createdAt: -1 })
    .lean()

  return NextResponse.json({ results })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  const articleId = String(body?.articleId ?? '').trim()

  if (!mongoose.Types.ObjectId.isValid(articleId)) {
    return NextResponse.json(
      { error: 'Invalid articleId' },
      { status: 400 }
    )
  }
  const userName = String(body?.userName ?? '').trim()
  const userEmail = String(body?.userEmail ?? '').trim().toLowerCase()
  const message = String(body?.message ?? '').trim()

  if (!articleId || !userName || !userEmail || !message) {
    return NextResponse.json({ error: 'Missing comment fields' }, { status: 400 })
  }

  await connectDB()

  const created = await Comment.create({
    articleId,
    userName,
    userEmail,
    body: message,
    status: 'pending_review',
  })

  return NextResponse.json(created, { status: 201 })
}
