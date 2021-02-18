import parse from '../parse'
import darken from '../darken'

describe('Darken color', () => {
  let color = parse('hsl(360, 25%, 50%)')

  it('should correctly darken by 50%', () => {
    expect(darken(color, 0.5)).toEqual({
      h: 1,
      s: 0.25,
      l: 0.5 * 0.5,
      a: 1,
    })
  })

  it('should correctly darken by 100%', () => {
    expect(darken(color, 1)).toEqual({
      h: 1,
      s: 0.25,
      l: 0.5 * 0,
      a: 1,
    })
  })

  it('should correctly darken by 0%', () => {
    expect(darken(color, 0)).toEqual({
      h: 1,
      s: 0.25,
      l: 0.5,
      a: 1,
    })
  })
})
