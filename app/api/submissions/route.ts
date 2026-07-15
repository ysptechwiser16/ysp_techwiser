import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import { Submission } from '@/models/Submission'

export async function GET() {
  await connectDB()

  const results = await Submission.find().sort({ createdAt: -1 }).limit(50).lean()
  return NextResponse.json({ results })
}

export async function POST(request: Request) {
  await connectDB()

  const body = await request.json().catch(() => null)

  const fullName = String(body?.fullName ?? '').trim()
  const email = String(body?.email ?? '').trim().toLowerCase()
  const title = String(body?.title ?? '').trim()
  const submissionType = String(body?.submissionType ?? '').trim()
  const details = String(body?.details ?? '').trim()

  if (!fullName || !email || !title || !submissionType || !details) {
    return NextResponse.json({ error: 'Missing submission fields' }, { status: 400 })
  }

  const created = await Submission.create({
    fullName,
    email,
    title,
    submissionType,
    details,
    status: 'pending_review',
  })

  return NextResponse.json(created, { status: 201 })
}
