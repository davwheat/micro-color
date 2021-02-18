import parse from '../parse'
import grayscale from '../grayscale'

describe('Grayscale color', () => {
  let color = parse('hsl(360, 50%, 60%)')

  it('should remove all saturation', () => {
    expect(grayscale(color)).toEqual({
      h: 1,
      s: 0,
      l: 0.6,
      a: 1,
    })
  })
})
