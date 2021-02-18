import parse from '../parse'
import desaturate from '../desaturate'

describe('Fade color', () => {
  let color = parse('hsl(360, 50%, 60%)')

  it('should correctly desaturate by 50%', () => {
    expect(desaturate(color, 0.5)).toEqual({
      h: 1,
      s: 0.25,
      l: 0.6,
      a: 1,
    })
  })
})
