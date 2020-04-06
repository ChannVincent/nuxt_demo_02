const INITIAL_DATA = {
  posts: [
    {
      id: "1",
      title: "Title A",
      subtitle: "Subititle A",
      content: "Content A",
      createdAt: new Date(),
      isRead: true,
      author: "Vincent"
    },
    {
      id: "2",
      title: "Title B",
      subtitle: "Subititle B",
      content: "Content B",
      createdAt: new Date(),
      isRead: false,
      author: "Vincent"
    }
  ]
}

// simulate api call
function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 1000)
  })
}

export const state = () => {
  return {
    posts: [
      // empty
    ]
  }
}

// very good spot to send request to a server
// Usually actions resolve into some data
export const actions = {
  fetchPosts({commit}) {
    return fetchPostsAPI()
        .then((posts) => {
          commit('setPosts', posts)
        })
  }
}

// mutations are simple functions that have access to a state.
// mutations are used to assign values to a state
export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  }
}