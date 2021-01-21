module.exports = (date) => {
    const arrayOfSeasons = [[0, 1, 11, 'winter'], [2, 3, 4, 'spring'], [5, 6, 7, 'summer'], [8, 9, 10, 'autumn']]
    if (date === undefined) {
        return 'Unable to determine the time of year!'
    } else if (Object.prototype.toString.call(date) === '[object Date]') {
        return arrayOfSeasons.reduce((answer, item) => (
            answer += item.reduce((season, month, i, arr) => (
                month === date.getMonth() ? season = arr[3] : season), '')), '')
    } else {
        throw new Error()
    }
}
