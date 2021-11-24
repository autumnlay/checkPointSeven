<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col d-flex justify-content-center">This is the Home Page</div>
    </div>
    <div class="row d-flex justify-content-between m-2">
      <button class="col-2 btn btn-primary" @click="sports">Sports</button>
      <button class="col-2 btn btn-primary" @click="concert">Concert</button>
      <button class="col-2 btn btn-primary" @click="digital">Digital</button>
      <button class="col-2 btn btn-primary" @click="convention">
        Convention
      </button>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-4 p-3" v-for="e in events" :key="e.id">
        <Event :event="e" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed, onMounted } from "@vue/runtime-core";
import { eventsService } from '../services/EventsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'

export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        await eventsService.getAll()
      } catch (error) {
        logger.log(error)
        Pop.toast('something went wrong with getAll events')
      }
    })
    return {
      events: computed(() => AppState.events),
      async sports() {
        const event = await eventsService.getAll()
        return AppState.events.filter(e => e.type.sports)
      },
      async concerts() {
        const event = await eventsService.getAll()
        return AppState.events.filter(e => e.type.concerts)
      },
      async conventions() {
        const event = await eventsService.getAll()
        return AppState.events.filter(e => e.type.conventions)
      },
      async digital() {
        const event = await eventsService.getAll()
        return AppState.events.filter(e => e.type.digital)
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
