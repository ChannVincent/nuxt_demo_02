<template>
  <div>
    <navbar />
    <div class="manage-page">
      <div class="columns mail-app">
        <aside class="column is-2 aside hero">
          <div>
            <div class="compose">
              <PostCreate/>
            </div>
            <div class="main">
            </div>
          </div>
        </aside>
        <div class="column is-4 messages hero is-fullheight" id="message-feed">
          <div class="inbox-messages" id="inbox-messages">
            
            <Card
              v-for='post in posts'
              :key='post.id'
              @click="activatePost(post)"
              :isActive="isPostActive(post)"
              :title="post.title"
              :subtitle="post.subtitle"
              :author="post.author"
            />
            
          </div>
        </div>
        <div class="column is-6 message hero is-fullheight" id="message-pane">
          <div class="box message-preview">
            
            <PostUpdate 
              :postData="activePost"
            />
            
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Bulma Templates</strong> by <a href="https://github.com/dansup">Daniel Supernault</a>. The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
            </p>
            <p>
              <a class="icon" href="https://github.com/dansup/bulma-templates">
              <i class="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import PostCreate from '@/components/PostCreate'
import PostUpdate from '@/components/PostUpdate'
import { mapState } from 'vuex'
export default {
  components: {
    Navbar, Card, PostCreate, PostUpdate
  },
  data() {
    return {
      activePost: {}
    }
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.items
    })
  },
  fetch({store}) {
    if (store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts')
    }
  },
  created() {
    if (this.posts && this.posts.length > 0)
    this.activePost = this.posts[0]
  },
  methods: {
    activatePost(post) {
      this.activePost = post
      console.log(this.activePost)
    },
    isPostActive(post) {
      return this.activePost && post.id === this.activePost.id
    }
  }
}
</script>

<style scoped>
  .manage-page {
    padding: 30px;
  }
</style>