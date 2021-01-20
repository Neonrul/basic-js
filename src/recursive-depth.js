module.exports = class DepthCalculator {
  calculateDepth(arr) {
    const levels = []
    if (arr.length) {
      levels.push(1)
      arr.forEach( item => {
        if (Array.isArray(item)) {
          levels.push(1 + this.calculateDepth(item))
        }
      })
    } else levels.push(1)
    return Math.max(...levels)
  }
};