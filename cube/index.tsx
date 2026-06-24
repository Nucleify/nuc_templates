import type { JSX } from 'react'

import type { NucCubeInterface } from 'nucleify'
import { AdIcon } from 'nucleify'

export function NucCube({
  icon = 'prime:box',
  shiny,
}: NucCubeInterface): JSX.Element {
  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  return (
    <div className={cx('cube', shiny && 'shiny')}>
      <AdIcon icon={icon} />
    </div>
  )
}
