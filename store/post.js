import { INITIAL_DATA } from './index'

// simulate api call
function fetchPostsAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(INITIAL_DATA.posts)
    }, 1000)
  })
}

// initial state
export const state = () => {
  return {
    items: [
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
    state.items = posts
  }
}