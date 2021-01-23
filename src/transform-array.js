module.exports = (arr) => {
    if (Object.prototype.toString.call(arr) === '[object Array]') {
        const copyArr = [...arr]
        return copyArr.reduce((newArr,item,i,arr) => {
                switch (item) {
                    case '--discard-next' :
                        arr[i+1] = null
                        return newArr
                    case '--discard-prev' :
                        newArr.pop()
                        return newArr
                    case '--double-next' :
                        if (arr[i+1] !== undefined) newArr.push(arr[i+1])
                        return newArr
                    case '--double-prev' :
                        if (arr[i-1] !== undefined) newArr.push(arr[i-1])
                        return newArr
                    default :
                        newArr.push(item)
                        return newArr
                }
            },[]).filter(item => item !== null)
    } else {throw new Error()}
};
