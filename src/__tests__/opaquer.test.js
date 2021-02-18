import parse from '../parse'
import opaquer from '../opaquer'

describe('Make color more opaque', () => {
  let color = parse('hsla(360, 0, 0, 0.4)')

  it('should increase opacity by 50%', () => {
    expect(opaquer(color, 0.5)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 0.4 * 1.5,
    })
  })

  it('should increase opacity by 100%', () => {
    expect(opaquer(color, 1)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 0.4 * 2,
    })
  })

  it('should increase opacity by 0%', () => {
    expect(opaquer(color, 0)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 0.4 * 1,
    })
  })

  it('should not allow alpha value exceed 1', () => {
    expect(opaquer(color, 10)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 1,
    })
  })

  it('should not allow alpha value subceed 0', () => {
    expect(opaquer(color, -10)).toEqual({
      h: 1,
      s: 0,
      l: 0,
      a: 0,
    })
  })
})
