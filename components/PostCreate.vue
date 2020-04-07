<template>
  <Modal @modalSubmitted="createPost">
    <template #actionButton>
      <a class="button is-primary is-block is-bold">
        <!-- Open Modal Here -->
        <span class="compose">Open</span>
      </a>
    </template>
    <form class="post-form">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input 
            v-model="form.title"
            class="input" 
            type="text" 
            placeholder="Awesome Title">
        </div>
      </div>

      <div class="field">
        <label class="label">Subtitle</label>
        <div class="control">
          <input 
            v-model="form.subtitle"
            class="input" 
            type="email" 
            placeholder="Awesome subtitle">
        </div>
      </div>
      <div class="field">
        <label class="label">Content</label>
        <div class="control">
          <textarea 
            v-model="form.content"
            class="textarea" 
            placeholder="Awesome Content">
          </textarea>
        </div>
      </div>
    </form>
  </Modal>
  
</template>
<script>
import Modal from "@/components/shared/Modal"
export default {
  components: {
    Modal
  },
  data() {
    return {
      form: {
        title: "",
        subtitle: "",
        content: ""
      }
    }
  },
  methods: {
    createPost(closeModal) {
      // {...this.form} is a copy of this.form
      // cannot mutate data sent in VueX workflow
      this.$store.dispatch('post/createPost', {...this.form})
      closeModal()
      this.resetForm()
    },
    resetForm() {
      this.form.title = ""
      this.form.subtitle = ""
      this.form.content = ""
    }
  }
}
</script>