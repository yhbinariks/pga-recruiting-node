const assert = require('assert')
const calculateTeamPoints = require('../calculateTeamPoints')
const players = require('./__data__/players')

describe('calculateTeamPoints', () => {
  it('empty input, should return []', () => {
    const players = []
    const expected = []
    const actual = calculateTeamPoints(players)
    assert.equal(actual.length, expected.length)
  })

  it('innactive players, should return []', () => {
    const players = [
      {team: 1, name: 'player1', isActive: false, points: 12},
      {team: 1, name: 'player2', isActive: false, points: 40}
    ]
    const expected = []
    const actual = calculateTeamPoints(players)
    assert.equal(actual.length, expected.length)
  })

  it('two teams, should return array of two items', () => {
    const players = [
      {team: 1, name: 'player1', isActive: true, points: 12},
      {team: 1, name: 'player2', isActive: true, points: 12},
      {team: 2, name: 'player3', isActive: true, points: 40},
      {team: 2, name: 'player4', isActive: true, points: 40}
    ]
    const expected = [{team: 1, points: 24}, {team: 2, points: 80}]
    const actual = calculateTeamPoints(players)
    assert.equal(actual.length, expected.length)
  })

  it('two teams with different points number, should return array of two items in desc', () => {
    const players = [
      {team: 1, name: 'player1', isActive: true, points: 12},
      {team: 2, name: 'player2', isActive: true, points: 40}
    ]
    const expected = [{team: 2, points: 40}, {team: 1, points: 12}]
    const actual = calculateTeamPoints(players)
    assert.deepEqual(actual, expected)
  })

  it('many teams and players, should return array of items in desc', () => {
    const expected = [
      {team: 'green', points: 40},
      {team: 'red', points: 20},
      {team: 'blue', points: 10}
    ]
    const actual = calculateTeamPoints(players)
    assert.deepEqual(actual, expected)
  })
})
