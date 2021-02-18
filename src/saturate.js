import assignImmutable from './utils/assignImmutable'
import clamp from './utils/clamp'

export default function saturate(color, value) {
  return assignImmutable(color, { s: clamp(color.s + color.s * value) })
}
