module.exports = (str, {repeatTimes = 1, addition = '', additionRepeatTimes = 1, additionSeparator = '', separator = '+'}) => {
    let additionStr = `${addition}${additionSeparator}`.repeat(additionRepeatTimes)
    additionStr = additionStr.slice(0, additionStr.length - additionSeparator.length)
    let answer = `${str}${additionStr}${separator}`.repeat(repeatTimes)
    return answer.slice(0, answer.length - separator.length)
}
