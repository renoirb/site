export interface NuxtRouteInterface {
  name: string
  path: string
  component?: string
  children?: NuxtRouteInterface[]
}
