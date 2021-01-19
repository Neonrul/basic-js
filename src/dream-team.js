module.exports = (members) => {
  if (members !== null && typeof members === 'object' && Array.isArray(members)) {
   return  members.reduce((team, member) => {
      if (typeof member === 'string') {
        team.push(member.match(/[a-zA-Z]/)[0].toUpperCase())
        return team
      } else {
        return team
      }
    }, []).sort().join('')
  } else return false
}
