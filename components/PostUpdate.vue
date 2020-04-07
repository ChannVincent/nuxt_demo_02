<template>
  <form class="post-form">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          v-model="post.title"
          class="input"
          type="text"
          placeholder="Awesome Title">
      </div>
    </div>
    <div class="field">
      <label class="label">Subtitle</label>
      <div class="control">
        <input
          v-model="post.subtitle"
          class="input"
          type="email"
          placeholder="Awesome subtitle">
      </div>
    </div>
    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <textarea
          v-model="post.content"
          class="textarea"
           placeholder="Awesome Content"></textarea>
      </div>
    </div>
    <button @click="updatePost" class="button is-primary">Update</button>
  </form>
</template>
<script>
export default {
  // props : cannot update template when data change > must use watchers
  props: ['postData'],
  data() {
    return {
      post: {...this.postData}
    }
  },
  // watcher : watching for changes and update template
  watch: {
    postData(data, oldValue) {
      this.post = {...data}
    }
  },
  methods: {
    updatePost() {
      console.log("update post")
    }
  }
}
</script>