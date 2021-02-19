export default (number) => {
  return Math.round((number + Number.EPSILON) * 10e3) / 10e3
}
