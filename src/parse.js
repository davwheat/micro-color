import hexToHsla from './utils/hexToHsla'
import rgbToHsl from './utils/rgbToHsl'
import roundTo4Dp from './utils/roundTo4Dp'

const RE = /(rgba?|hsla?)\((.*)\)/i

export default (color) => {
  if (color.startsWith('#')) return hexToHsla(color)

  const match = color.trim().replace(/\s*/gi, '').match(RE)

  if (match === null) {
    return false
  }

  const params = match[2].split(',').map(parseFloat)

  const x = params[0]
  const y = params[1]
  const z = params[2]
  const a = params[3] || 1

  if (match[1].indexOf('rgb') !== -1) {
    const hsl = rgbToHsl(x, y, z)
    return {
      h: hsl[0],
      s: hsl[1],
      l: hsl[2],
      a,
    }
  }

  return {
    h: roundTo4Dp(x / 360),
    s: y / 100,
    l: z / 100,
    a,
  }
}
