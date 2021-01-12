const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ user1Id, user2Id }) => ({
  id: casual.uuid,
  requestor: user1Id,
  requestee: user2Id,
  status: casual.random_element(['ACCEPTED','PENDING','REJECTED']),
  dateOfRequest: casual.date("12-24-2001", "MM-DD-YYYY")
}))

const friends = []

for (let i = 0; i < 10; i++) {
  const user1Id = casual.random_element(userData).id
  const user2Id = casual.random_element(userData).id
  friends.push(casual.friend({user1Id, user2Id}))
}

module.exports = friends