import rgbToHsl from '../utils/rgbToHsl'

describe('Convert RGB to HSL', () => {
  it('should correctly parse achromatic inputs', () => {
    expect(rgbToHsl(255, 255, 255)).toEqual([0, 0, 1])
  })
  it('should correctly parse red-heavy, green-heavy inputs', () => {
    expect(rgbToHsl(255, 128, 96)).toEqual([0.0335, 1, 0.6882])
  })
  it('should correctly parse red-heavy, blue-heavy inputs', () => {
    expect(rgbToHsl(255, 96, 128)).toEqual([0.9665, 1, 0.6882])
  })
  it('should correctly parse green-heavy inputs', () => {
    expect(rgbToHsl(128, 255, 96)).toEqual([0.2998, 1, 0.6882])
  })
  it('should correctly create saturation for lighter colors', () => {
    expect(rgbToHsl(255, 200, 200)).toEqual([0, 1, 0.8922])
  })
  it('should correctly create saturation for darker colors', () => {
    expect(rgbToHsl(120, 96, 96)).toEqual([0, 0.1111, 0.4235])
  })
})
