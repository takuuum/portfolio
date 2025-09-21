'use client'

import { Link } from '@/i18n/routing'
import { useState } from 'react'

interface HoverPrefetchLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export function HoverPrefetchLink({
  href,
  children,
  ...rest
}: HoverPrefetchLinkProps) {
  const [shouldPrefetch, setShouldPrefetch] = useState(false)

  return (
    <Link
      href={href}
      prefetch={shouldPrefetch ? undefined : false}
      onMouseEnter={() => setShouldPrefetch(true)}
      {...rest}
    >
      {children}
    </Link>
  )
}
