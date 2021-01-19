module.exports = (backyard) => backyard.reduce((allCats,rows) => allCats + rows.reduce((cats, item) =>  item === '^^' ? cats +=1 : cats,0),0)
