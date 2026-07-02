import type { JSX, MouseEvent } from 'react'

import type { ButtonInterface } from 'nucleify'
import { AdButton } from 'nucleify'

import './_index.scss'

export function NucSubmitButton({
  label,
  icon,
  className,
  onClick,
  variant,
  type = 'button',
  disabled = false,
}: ButtonInterface): JSX.Element {
  const rootClass = [
    'nuc-submit-button',
    variant && `nuc-submit-button-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <AdButton
      label={label}
      icon={icon}
      className={rootClass}
      nuiType={variant === 'primary' ? 'main' : undefined}
      type={type}
      disabled={disabled}
      onClick={onClick}
      gap={icon ? '0.5rem' : undefined}
    />
  )
}
