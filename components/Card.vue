<template>
  <div
    class="card"
    :class="{'is-active': isActive}"
    @click="emitCardClicked">
    <div class="card-content">
      <div class="msg-header">
        <span class="msg-from"><small>{{ post.author }}</small></span>
        <span class="msg-timestamp"></span>
        <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
      </div>
      <div class="msg-subject">
        <span class="msg-subject"><strong id="fake-subject-1">{{ post.title }}</strong></span>
      </div>
      <div class="msg-snippet">
        <p id="fake-snippet-1">{{ post.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isActive', 'postData'],
  data() {
    return {
      post: {...this.postData}
    }
  },
  watch: {
    postData(data, oldValue) {
      this.post = {...data}
    }
  },
  methods: {
    emitCardClicked() {
      this.$emit("click")
    }
  }
}
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
.card:hover {
  cursor: pointer;
  background-color: #eeeeee;
}
.card.is-active {
  background-color:  #eeeeee;
}
</style>
