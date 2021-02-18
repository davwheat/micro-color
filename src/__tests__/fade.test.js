import parse from '../parse'
import fade from '../fade'

describe('Fade color', () => {
  let color = parse('hsl(360, 0, 0)')

  it('should correctly fade by 50%', () => {
    expect(fade(color, 0.5)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 1 * 0.5,
    })
  })

  it('should correctly fade by 100%', () => {
    expect(fade(color, 1)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 1 * 0,
    })
  })

  it('should correctly fade by 0%', () => {
    expect(fade(color, 0)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 1,
    })
  })

  it('should not allow alpha value exceed 1', () => {
    expect(fade(color, -10)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 1,
    })
  })

  it('should not allow alpha value subceed 0', () => {
    expect(fade(color, 10)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 0,
    })
  })
})
