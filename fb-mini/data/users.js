const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  username: casual.username,
  password: casual.password,
  name: casual.name,
  bio: casual.string,
  numFollowers: casual.integer(from = 0, to = 1000), 
  numPosts: casual.integer(from = 0, to = 1000), 
  age: casual.date("MM-DD-YYYY")  
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
