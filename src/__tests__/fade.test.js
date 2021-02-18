import parse from '../parse'
import fade from '../fade'

describe('Fade color', () => {
  let color = parse('hsl(360, 0, 0)')

  it('should correctly fade by 50%', () => {
    expect(fade(color, 0.5)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 0.5,
    })
  })
})
