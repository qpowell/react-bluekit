export default function renderProp(key, value) {
  if (typeof value === 'object' || typeof value === 'boolean')
    return `${key}={${JSON.stringify(value)}}`
  else if (typeof value === 'number')
    return `${key}=${value}`
  else
    return `${key}='${value}'`
}
