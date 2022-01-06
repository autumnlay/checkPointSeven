<template>
  <div class="col card p-3">
    <img :src="event.coverImg" alt="" />
    <h4>{{ event.name }}</h4>
    <p>{{ event.description }}</p>
    <p><b>Starts on</b> {{ new Date(event.startDate) }} -</p>
    <p><b>Meeting place:</b> {{ event.location }}</p>
    <p>{{ event.type }}</p>
    <div class="text-danger" v-if="event.capicity === 0">SOLD OUT</div>
    <div v-else>
      <p><b>Seats left:</b> {{ event.capacity }}</p>
    </div>
  </div>
  <div class="row">
    <div class="col-12" v-for="c in comment" :key="c.id"></div>
    <Comment :comment="c" />
  </div>
</template>


<script>
import { computed, onMounted } from '@vue/runtime-core'
import { eventsService } from '../services/EventsService'
import { commentsService } from '../services/CommentsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async () => {
      try {
        await eventsService.getById(route.params.id)
        await commentsService.getAll(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.toast('Something went wrong with the event', 'error')
        //router.push({ name: 'Home' })
      }
    })
    return {
      event: computed(() => AppState.currentEvent),
      account: computed(() => AppState.account),
      comment: computed(() => AppState.comments)
      // TODO create remove function
    }
  }
}
</script>


<style lang="scss" scoped>
</style>