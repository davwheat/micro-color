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
})
