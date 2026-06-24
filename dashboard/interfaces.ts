export interface NucDashboardInterface {
  data?: Record<string, unknown>[]
  getData?: () => void | Promise<void>
  store?: () => void | Promise<void>
  edit?: () => void | Promise<void>
  delete?: () => void | Promise<void>
  loading?: boolean
}
