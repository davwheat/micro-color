import assignImmutable from './utils/assignImmutable'
import clamp from './utils/clamp'

export default function fade(color, value) {
  return assignImmutable(color, { a: clamp(color.a - color.a * value) })
}
