import assignImmutable from './utils/assignImmutable'
import clamp from './utils/clamp'

export default function darken(color, value) {
  return assignImmutable(color, { l: clamp(color.l * (1 - value)) })
}
