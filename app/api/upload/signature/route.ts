import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

function createCloudinarySignature(params: Record<string, string>, apiSecret: string) {
  const sortedKeys = Object.keys(params).sort()
  const payload = sortedKeys.map((key) => `${key}=${params[key]}`).join('&')
  return crypto.createHash('sha1').update(`${payload}${apiSecret}`).digest('hex')
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET
  const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET

  if (!cloudName || !apiKey || !apiSecret || !uploadPreset) {
    return NextResponse.json(
      { error: 'Upload provider keys are not configured' },
      { status: 503 }
    )
  }

  const body = await request.json().catch(() => ({}))
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const folder = String(body?.folder ?? 'ysp-techwiser').trim() || 'ysp-techwiser'

  const paramsToSign = {
    folder,
    timestamp,
    upload_preset: uploadPreset,
  }

  const signature = createCloudinarySignature(paramsToSign, apiSecret)

  return NextResponse.json({
    cloudName,
    apiKey,
    timestamp,
    folder,
    uploadPreset,
    signature,
  })
}
