export default function clamp(val, min = 0, max = 1) {
  return Math.max(min, Math.min(val, max))
}
