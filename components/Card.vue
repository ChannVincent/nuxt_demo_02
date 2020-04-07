<template>
  <div class="card" @click="emitCardClicked">
    <div class="card-content">
      <div class="msg-header">
        <span class="msg-from"><small>{{ author }}</small></span>
        <span class="msg-timestamp"></span>
        <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
      </div>
      <div class="msg-subject">
        <span class="msg-subject"><strong id="fake-subject-1">{{ title }}</strong></span>
      </div>
      <div class="msg-snippet">
        <p id="fake-snippet-1">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: String,
      required: false,
      default: 'unknown'
    },
    title: {
      type: String,
      required: false,
      default: 'unknown title'
    },
    subtitle: {
      type: String,
      required: false,
      default: 'unknown subtitle'
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
</style>