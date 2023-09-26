// Native
import { useContext } from 'react'
// Contexts
import { AuthContext } from '@contexts/Auth'

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
