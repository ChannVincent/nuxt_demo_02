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
                    />
                  
                </div>
                <!-- end of post -->
              </div>
              <!-- end of side bar -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar"
import PostItem from "@/components/PostItem"
export default {
  components: {
    Navbar,
    PostItem
  },
  data() {
    return {
      title: 'Blog Post',
      posts: [
        {
          id: "1",
          title: "Title A",
          subtitle: "Subititle A",
          content: "Content A",
          createdAt: new Date()
        },
        {
          id: "2",
          title: "Title B",
          subtitle: "Subititle B",
          content: "Content B",
          createdAt: new Date()
        }
      ]
    }
  }
}
</script>

<style>
.post-content {
  font-style: italic;
}
.post {
  margin-bottom: 20px;
  padding: 5px;
  border-bottom: 2px solid transparent;
}
.post:hover {
  border-bottom: 2px solid #e8e8e8;
}
</style>
