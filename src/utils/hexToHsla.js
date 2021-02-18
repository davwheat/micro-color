import rgbToHsl from './rgbToHsl'
import roundTo4Dp from './roundTo4Dp'

export default function hexToHsla(hex) {
  let isShortHex = hex.length < 6

  let vals = isShortHex
    ? hex.substr(1).match(/.{1}/g)
    : hex.substr(1).match(/.{2}/g)

  // #fab -> #ffaabb
  isShortHex && (vals = vals.map((x) => x + x))

  const numVals = vals.map((x) => parseInt(x, 16))

  const result = rgbToHsl(numVals[0], numVals[1], numVals[2])

  return {
    h: result[0],
    s: result[1],
    l: result[2],
    a: numVals[3] ? roundTo4Dp(numVals[3] / 255) : 1,
  }
}
