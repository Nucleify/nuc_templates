'use client'

import type { JSX } from 'react'

import { AdIcon, t } from 'nucleify'

import './_index.scss'

import type { NucTrustBadgeItemInterface } from 'nucleify'

export function NucTrustBadges({
  items,
}: {
  items?: NucTrustBadgeItemInterface[]
}): JSX.Element {
  return (
    <div className="nuc-trust-badges">
      {items?.map((item, index) => (
        <div
          key={`${item.icon}-${item.label}-${index}`}
          className="nuc-trust-badge-item"
        >
          <AdIcon icon={item.icon} className="iconify" />
          <span>{t(String(item.label ?? ''))}</span>
        </div>
      ))}
    </div>
  )
}
