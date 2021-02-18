import parse from '../parse'
import saturate from '../saturate'

describe('Saturate color', () => {
  let color = parse('hsl(360, 50%, 60%)')

  it('should correctly increase saturation by 50%', () => {
    expect(saturate(color, 0.5)).toEqual({
      h: 1,
      s: 0.5 * 1.5,
      l: 0.6,
      a: 1,
    })
  })

  it('should correctly increase saturation by 100%', () => {
    expect(saturate(color, 1)).toEqual({
      h: 1,
      s: 0.5 * 2,
      l: 0.6,
      a: 1,
    })
  })

  it('should correctly increase saturation by 0%', () => {
    expect(saturate(color, 0)).toEqual({
      h: 1,
      s: 0.5,
      l: 0.6,
      a: 1,
    })
  })
})
