import mongoose from 'mongoose'

declare global {
  // eslint-disable-next-line no-var
  var mongooseConn:
    | {
        conn: typeof mongoose | null
        promise: Promise<typeof mongoose> | null
      }
    | undefined
}

const cached = globalThis.mongooseConn ?? { conn: null, promise: null }
globalThis.mongooseConn = cached

export async function connectDB() {
  if (cached.conn) return cached.conn

  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI is not defined in environment variables.')
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(uri)
  }

  cached.conn = await cached.promise
  return cached.conn
}
