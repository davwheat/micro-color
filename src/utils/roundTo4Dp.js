export default function roundTo4Dp(number) {
  return Math.round((number + Number.EPSILON) * 10e3) / 10e3
}
