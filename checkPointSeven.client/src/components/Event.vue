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
      <p><b>Capacity left:</b> {{ event.capacity }}</p>
      <button class="btn btn-primary" @click="join">Join Event</button>
    </div>

    <router-link
      :to="{ name: 'Event', params: { id: event.id } }"
      class="btn text-dark lighten-30 selectable text-uppercase"
    >
      See Details
    </router-link>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { useRouter } from 'vue-router'
import { eventsService } from '../services/EventsService'
export default {
  props: {
    event: {
      type: Object, required: true
    }
  },
  setup() {
    //const router = useRouter()
    // async () => { await eventsService.getAll() }
    return {
      async join() {
        await eventsService.edit()
        AppState.events
        return AppState.attendees
      }
      //events: computed(() => AppState.events),
      // async eventDetails(id) {
      //   try {
      //     if (id) {
      //       router.push({ path: '/events/' + id })
      //       AppState.currentEvent = id
      //     }
      //   } catch (error) {
      //     logger.error(error)
      //     Pop.toast('Event Details error', 'error')
      //   }
      // }


    }
  }
}
</script>


<style lang="scss" scoped>
</style>