<template>
  <div class="row">
    <div class="col-12">this should be the comment section</div>
    <div>{{ comments.body }}</div>
    <!-- TODO creator Id and picture -->
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'

export default {
  prop: { comment: { type: Object, required: true } },
  setup() {
    return {
      comments: computed(() => AppState.comments),
      events: computed(() => AppState.events)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>