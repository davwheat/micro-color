import roundTo4Dp from './roundTo4Dp'

export default (r, g, b) => {
  r /= 255
  g /= 255
  b /= 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h = 0,
    s = 0,
    l = (max + min) / 2,
    minMaxDiff = max - min

  // Serves same purpose as `max !== min`. Any difference would result in non-zero value.
  if (minMaxDiff) {
    s = l > 0.5 ? minMaxDiff / (2 - max - min) : minMaxDiff / (max + min)

    switch (max) {
      case r:
        h = (g - b) / minMaxDiff + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / minMaxDiff + 2
        break
      case b:
        h = (r - g) / minMaxDiff + 4
        break
    }

    h /= 6
  }

  return [h, s, l].map(roundTo4Dp)
}
