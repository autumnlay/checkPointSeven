<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <div class="row">
    <h3>My Events</h3>
    <div class="col-md-4" v-for="e in events" :key="e.id">
      <Event :event="e" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import Event from '../components/Event.vue'
import { eventsService } from '../services/EventsService'
import { attendeesService } from '../services/AttendeesService'

import { AuthService } from '../services/AuthService'
export default {
  components: { Event },
  name: 'Account',
  setup() {
    onMounted((id) => {
      eventsService.getAll('?eventId=' + AuthService.userInfo.id)
      attendeesService.getAttendeesForAccount()
    })
    return {
      account: computed(() => AppState.account),
      events: computed(() => AppState.events),
      myAttendees: computed(() => AppState.myAttendees)

    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
