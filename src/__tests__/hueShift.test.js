import parse from '../parse'
import darken from '../darken'
import hueShift from '../hueShift'

describe('Hue shift', () => {
  let color = parse('hsl(180, 25%, 50%)')

  it('should shift by 90 degrees', () => {
    expect(hueShift(color, 90)).toEqual({
      h: 0.75,
      s: 0.25,
      l: 0.5,
      a: 1,
    })
  })

  it('should shift by -90 degrees', () => {
    expect(hueShift(color, -90)).toEqual({
      h: 0.25,
      s: 0.25,
      l: 0.5,
      a: 1,
    })
  })

  it('should shift by -252 degrees, wrapping as expected', () => {
    expect(hueShift(color, -252)).toEqual({
      h: 0.8,
      s: 0.25,
      l: 0.5,
      a: 1,
    })
  })

  it('should shift by +270 degrees, wrapping as expected', () => {
    expect(hueShift(color, 270)).toEqual({
      h: 0.25,
      s: 0.25,
      l: 0.5,
      a: 1,
    })
  })
})
