'use client'

import type { JSX } from 'react'

import { AdAnchor } from 'nucleify'

import './_index.scss'

export function NucHomeLink(): JSX.Element {
  return (
    <AdAnchor
      href="/home"
      className="nuc-home-link"
      icon="prime:chevron-left"
      title="Back to home"
    />
  )
}
