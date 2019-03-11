// Given an array of players
// returns a sorted array of teams with the total team points for active players.
// The output is sorted in descending order by points
// input: [{ team: 'green', name: 'Bob', points: 5, isActive: true }, ...]
// output: [{ team: 'green', points: 40 }, ...]
module.exports = (players) => {
  const teams = {}

  players
    .filter(player => player.isActive)
    .forEach(player => {
      teams[player.team] = (teams[player.team] || 0) + player.points
    })

  return Object.keys(teams).map(team => ({ team, points: teams[team] })).sort((teamA, teamB) => teamB.points - teamA.points)
}
