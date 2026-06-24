'use client'

import type { JSX } from 'react'

import './_index.scss'

export function NucGridBackground({
  className,
}: {
  className?: string
}): JSX.Element {
  const rootClass = ['nuc-grid-background', className].filter(Boolean).join(' ')

  return (
    <div className={rootClass}>
      <div className="nuc-grid-background-grid" />
      <div className="nuc-grid-background-glow" />
    </div>
  )
}
