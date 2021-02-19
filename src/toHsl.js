export default (color) => 'hsla(' + [color.h * 360, color.s * 100 + '%', color.l * 100 + '%', color.a].join(',') + ')'
