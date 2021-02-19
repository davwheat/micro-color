export default (val, min, max) => Math.max(min || 0, Math.min(val, max || 1))
