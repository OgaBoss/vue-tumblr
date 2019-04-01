<template>
  <a class="btn-floating halfway-fab waves-effect waves-light" v-bind:class="colorType"><i class="material-icons">{{postType[1]}}</i></a>
</template>

<script>
export default {
  props: ['post_type'],
  computed: {
    postType() {
      switch (this.post_type) {
        case 'photo':
          return ['red', 'photo_camera'];
          break;
        case 'text':
          return ['pink', 'text_format'];
          break;
        case 'quote':
          return ['purple', 'format_quote'];
          break;
        case 'link':
          return ['blue', 'insert_link'];
          break;
        case 'chat':
          return ['teal', 'chat'];
          break
        case 'audio':
          return ['green', 'audiotrack']
          break;
        case 'video':
          return ['yellow', 'ondemand_video'];
          break;
        default:
          return ['grey', 'done_all']
          break;
      }
    },

    colorType() {
      switch (this.post_type) {
        case 'photo':
          return 'red';
          break;
        case 'text':
          return 'pink';
          break;
        case 'quote':
          return 'purple';
          break;
        case 'link':
          return 'blue';
          break;
        case 'chat':
          return 'teal';
          break
        case 'audio':
          return 'green'
          break;
        case 'video':
          return 'yellow';
          break;
        default:
          return 'grey';
          break;
      }
    }
  }
}
</script>

