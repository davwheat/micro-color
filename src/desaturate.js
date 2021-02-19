import assignImmutable from './utils/assignImmutable'
import clamp from './utils/clamp'

export default (color, value) => assignImmutable(color, { s: clamp(color.s - color.s * value) })
