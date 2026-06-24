'use client'

import type { JSX } from 'react'

import type { NucShinyBadgeInterface } from 'nucleify'
import { AdIcon, t } from 'nucleify'

import './_index.scss'

export function NucShinyBadge({
  icon,
  label,
}: NucShinyBadgeInterface): JSX.Element {
  return (
    <span className="nuc-shiny-badge">
      <AdIcon icon={icon} className="iconify" />
      <span>{t(String(label ?? ''))}</span>
    </span>
  )
}
