import roundTo4Dp from '../utils/roundTo4Dp'

describe('Rounding numbers to 4 d.p.', () => {
  it('should correctly round 0.00001', () => {
    expect(roundTo4Dp(0.00001)).toEqual(0)
  })
  it('should correctly round 0.001', () => {
    expect(roundTo4Dp(0.001)).toEqual(0.001)
  })
  it('should correctly round 10.56789', () => {
    expect(roundTo4Dp(10.56789)).toEqual(10.5679)
  })
  it('should correctly round 1.5', () => {
    expect(roundTo4Dp(1.5)).toEqual(1.5)
  })
  it('should correctly round 1.00005', () => {
    expect(roundTo4Dp(1.00005)).toEqual(1.0001)
  })
})
