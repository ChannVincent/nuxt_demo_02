<template>
  <div>
    
    <Navbar />
    
    <div class="blogs-page">
        <div class="main-content">
          <div class="container">
            <div class="columns is-mobile">
              <div class="column is-8 is-offset-2">
                <div class="section">
                  <div class="title">
                    <h1>Newest Posts</h1>
                    <hr>
                  </div>
                  
                  <PostItem
                    v-for="post in posts"
                    :key="post.id"
                    :title="post.title"
                    :subtitle="post.subtitle"
                    :content="post.content"
                    :date="post.createdAt"
                    :isRead="post.isRead"
                    />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <form>
        <input type="text" v-model="form.title">
        <input type="text" v-model="form.subtitle">
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import PostItem from "@/components/PostItem"
import { fetchPostsAPI} from "@/store/post"
export default {
  components: {
    Navbar,
    PostItem
  },
  data() {
    return {
      title: 'Blog Post',
      form: {
        title: "some title",
        subtitle: "some subtitle"
      }
    }
  },
  fetch({store}) {
    if (store.getters['post/hasEmptyItems']) {
      return store.dispatch('post/fetchPosts')
    }
  },
  // async asyncData() {
  //   const posts = await fetchPostsAPI()
  //   return { posts }
  // },
  // mounted() {
  //   this.$store.dispatch('post/fetchPosts')
  // },
  computed: {
    posts() {
      return this.$store.state.post.items
    }
  }
}
</script>

