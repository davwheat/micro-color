import parse from '../parse'
import roundTo4Dp from '../utils/roundTo4Dp'

describe('Parsing color values', () => {
  it('should correctly parse RGB inputs', () => {
    expect(parse('rgb(64, 128, 200)')).toEqual({
      h: 0.5882,
      s: 0.5528,
      l: 0.5176,
      a: 1,
    })
  })
  it('should correctly parse RGBA inputs', () => {
    expect(parse('rgba(64, 128, 200, 0.5)')).toEqual({
      h: 0.5882,
      s: 0.5528,
      l: 0.5176,
      a: 0.5,
    })
  })
  it('should correctly parse HSL inputs', () => {
    expect(parse('hsl(360, 50%, 20%)')).toEqual({
      h: 1,
      s: 0.5,
      l: 0.2,
      a: 1,
    })
  })
  it('should correctly parse HSLA inputs', () => {
    expect(parse('hsla(360, 50%, 20%, 0.75)')).toEqual({
      h: 1,
      s: 0.5,
      l: 0.2,
      a: 0.75,
    })
  })
  it('should correctly parse #RRGGBB inputs', () => {
    expect(parse('#4080c8')).toEqual({
      h: 0.5882,
      s: 0.5528,
      l: 0.5176,
      a: 1,
    })
  })
  it('should correctly parse #RRGGBBAA inputs', () => {
    expect(parse('#4080c880')).toEqual({
      h: 0.5882,
      s: 0.5528,
      l: 0.5176,
      a: roundTo4Dp(128 / 255),
    })
  })
  it('should correctly parse #RGB inputs', () => {
    expect(parse('#abc')).toEqual({
      h: 0.5833,
      s: 0.25,
      l: 0.7333,
      a: 1,
    })
  })
  it('should correctly parse #RGBA inputs', () => {
    expect(parse('#abcd')).toEqual({
      h: 0.5833,
      s: 0.25,
      l: 0.7333,
      a: roundTo4Dp(221 / 255),
    })
  })
  it('should not parse an invalid input', () => {
    expect(parse("this isn't a color")).toEqual(false)
  })
})
