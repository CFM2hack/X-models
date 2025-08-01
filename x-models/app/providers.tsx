// In: app/providers.tsx

'use client' // This is a client component

import { SessionProvider } from 'next-auth/react'
import React from 'react'

// Define the props for our provider component
// It will accept a 'children' prop, which will be our page content
interface ProvidersProps {
  children: React.ReactNode;
}

// This is our new Provider component
export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
