import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const RequireAuthentication = ({ children }) => {
  const { data: session, status } = useSession()
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/')
    }
  }, [status])

  return <>{children}</>
}

export default RequireAuthentication
