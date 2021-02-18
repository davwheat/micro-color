import parse from '../parse'
import desaturate from '../desaturate'

describe('Desaturate color', () => {
  let color = parse('hsl(360, 50%, 60%)')

  it('should correctly desaturate by 50%', () => {
    expect(desaturate(color, 0.5)).toEqual({
      h: 1,
      s: 0.5 * 0.5,
      l: 0.6,
      a: 1,
    })
  })

  it('should correctly desaturate by 100%', () => {
    expect(desaturate(color, 1)).toEqual({
      h: 1,
      s: 0.5 * 0,
      l: 0.6,
      a: 1,
    })
  })

  it('should correctly desaturate by 0%', () => {
    expect(desaturate(color, 0)).toEqual({
      h: 1,
      s: 0.5,
      l: 0.6,
      a: 1,
    })
  })
})
