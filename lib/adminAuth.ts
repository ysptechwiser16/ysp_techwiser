import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function getIsAdminSession() {
  try {
    const session = await getServerSession(authOptions)
    return (session?.user as any)?.role === 'admin'
  } catch (error) {
    console.error('Admin session check failed')
    return false
  }
}
