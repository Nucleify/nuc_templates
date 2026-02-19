import type { App } from 'vue'

import {
  NucAuthors,
  NucCube,
  NucGridBackground,
  NucHomeLink,
  NucShinyBadge,
  NucSubmitButton,
  NucTiles,
  NucTrustBadges,
} from '.'

export function registerNucTemplates(app: App<Element>): void {
  app
    .component('nuc-authors', NucAuthors)
    .component('nuc-cube', NucCube)
    .component('nuc-grid-background', NucGridBackground)
    .component('nuc-home-link', NucHomeLink)
    .component('nuc-shiny-badge', NucShinyBadge)
    .component('nuc-submit-button', NucSubmitButton)
    .component('nuc-tiles', NucTiles)
    .component('nuc-trust-badges', NucTrustBadges)
}
