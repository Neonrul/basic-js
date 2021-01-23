module.exports = (members) => Object.prototype.toString.call(members) === '[object Array]' ?
        members.reduce((team, member) => typeof member === 'string' ?
        team += (member.match(/[a-zA-Z]/)[0].toUpperCase()) : team, '').split('').sort().join('') : false
