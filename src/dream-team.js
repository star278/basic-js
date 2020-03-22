module.exports = function createDreamTeam(members) {
  var dreamTeamName = '';
  if (!Array.isArray(members)) {
      return false;
  }
  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
          members[i] = members[i].split(' ').join('').toUpperCase()[0];
      }
  }
  members.sort();
  for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
          dreamTeamName += members[i].split(' ').join('').toUpperCase()[0];
      }
  }
  return dreamTeamName;
};