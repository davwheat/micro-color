import assignImmutable from './utils/assignImmutable'

let c = 360

export default (color, value) => assignImmutable(color, { h: ((c + ((color.h * c + value) % c)) % c) / c })
