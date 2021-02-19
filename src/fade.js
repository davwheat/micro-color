import assignImmutable from './utils/assignImmutable'
import clamp from './utils/clamp'

export default (color, value) => assignImmutable(color, { a: clamp(color.a - color.a * value) })
