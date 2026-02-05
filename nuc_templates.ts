import type { App } from 'vue'

import { NucAuthors, NucCube, NucHomeLink, NucTiles, NucTrustBadges } from '.'

export function registerNucTemplates(app: App<Element>): void {
  app
    .component('nuc-authors', NucAuthors)
    .component('nuc-cube', NucCube)
    .component('nuc-home-link', NucHomeLink)
    .component('nuc-tiles', NucTiles)
    .component('nuc-trust-badges', NucTrustBadges)
}
