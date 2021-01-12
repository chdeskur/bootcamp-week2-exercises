FB {
  users {
    user1 {
      id: #
      email: string
      username: string
      name: string
      age: date
      password: string
      bio: string
      friends: [#,#,#,...] (list of ids/indexes) (?)
      posts: [#,#,#,...] (post ids/indexes) (?)
    } ...
  }
  posts {
    post1 {
      id: #
      user: # (id/index)
      post: string
      date: date
      numLikes: #
    }
  } 
  friends {
    friendship1 {
      requestor: # (id/index)
      requestee: # (id/index)
      dateOfRequest: date
      status: enum (accepted, declined, pending)
    }
  }
}

