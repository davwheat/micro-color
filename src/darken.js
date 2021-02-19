import assignImmutable from './utils/assignImmutable'
import clamp from './utils/clamp'

export default (color, value) => assignImmutable(color, { l: clamp(color.l * (1 - value)) })
