'use client'

import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: '/admin/signin' })}
      className="premium-button-ghost"
    >
      <LogOut className="h-4 w-4" />
      Sign out
    </button>
  )
}
