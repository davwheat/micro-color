import parse from '../parse'
import lighten from '../lighten'

describe('Lighten color', () => {
  let color = parse('hsl(360, 25%, 50%)')

  it('should correctly lighten by 50%', () => {
    expect(lighten(color, 0.5)).toEqual({
      h: 1,
      s: 0.25,
      l: 0.5 * 1.5,
      a: 1,
    })
  })

  it('should correctly lighten by 100%', () => {
    expect(lighten(color, 1)).toEqual({
      h: 1,
      s: 0.25,
      l: 0.5 * 2,
      a: 1,
    })
  })

  it('should correctly lighten by 0%', () => {
    expect(lighten(color, 0)).toEqual({
      h: 1,
      s: 0.25,
      l: 0.5,
      a: 1,
    })
  })

  it('should not allow lightness value exceed 1', () => {
    expect(lighten(color, 10)).toEqual({
      h: 1,
      s: 0.25,
      l: 1,
      a: 1,
    })
  })

  it('should not allow lightness value subceed 0', () => {
    expect(lighten(color, -10)).toEqual({
      h: 1,
      s: 0.25,
      l: 0,
      a: 1,
    })
  })
})
