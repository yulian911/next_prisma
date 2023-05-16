'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.user.role === 'admin') {
      // Użytkownik nie ma roli admina, przekieruj na inną stronę
      router.push('/admin')
    } else if (session?.user.role === 'user') {
      router.push('/user')
    }
  }, [session, router])

  // Renderowanie chronionego komponentu, jeśli użytkownik ma wymaganą rolę
  return <>{children}</>
}

export default ProtectedRoute
