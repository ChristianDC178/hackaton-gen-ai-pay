import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  email: string
  name: string
  provincia: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (loginResponse: { status: string; name: string; provincia: string; email: string }) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (loginResponse) =>
        set({
          user: {
            email: loginResponse.email,
            name: loginResponse.name,
            provincia: loginResponse.provincia,
          },
          isAuthenticated: loginResponse.status === 'ok validado',
        }),
      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: 'auth-storage',
    }
  )
)