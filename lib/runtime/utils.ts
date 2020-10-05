export const isObject = (val: any): boolean => {
  return val != null && typeof val === 'object' && Array.isArray(val) === false
}
