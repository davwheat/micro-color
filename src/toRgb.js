import hslToRgb from './utils/hslToRgb'

export default (color) => {
  const rgb = hslToRgb(color.h, color.s, color.l)

  return 'rgba(' + [rgb[0], rgb[1], rgb[2], color.a].join(',') + ')'
}
