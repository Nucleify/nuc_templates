'use client'

import type { JSX } from 'react'

import type { NucTilesInterface } from 'nucleify'
import { AdTile } from 'nucleify'

import './_index.scss'

export function NucTiles({ entities }: NucTilesInterface): JSX.Element {
  return (
    <div className="nuc-tiles">
      {entities.map((entity, index) => (
        <AdTile key={index} {...entity} />
      ))}
    </div>
  )
}
