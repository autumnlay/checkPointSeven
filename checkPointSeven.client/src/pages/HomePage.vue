<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col d-flex justify-content-center">
        This Will be the Home Page
      </div>
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
      events: computed(() => AppState.events)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
