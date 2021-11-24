<template>
  <form @submit.prevent="createEvent" class="CreateEvent">
    <div class="justify-content-around d-flex row">
      <div class="col-md-6">
        <label for="name" class="form-label"> Event Name</label>
        <input
          v-model="state.editable.name"
          type="text"
          class="form-control"
          name="name"
          id="name"
          placeholder="Name"
          min="3"
          max="100"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="description" class="form-label"> Describe your event</label>
        <input
          v-model="state.editable.description"
          type="text"
          class="form-control"
          name="description"
          id="description"
          placeholder="description"
          min="3"
          max="500"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="location" class="form-label"> Location</label>
        <input
          v-model="state.editable.location"
          type="text"
          class="form-control"
          name="location"
          id="location"
          placeholder="location"
          min="3"
          max="100"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="capacity" class="form-label"> capacity </label>
        <input
          v-model="state.editable.capacity"
          type="number"
          class="form-control"
          name="capacity"
          id="capacity"
          placeholder="capacity"
          min="1"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="startDate" class="form-label"> date </label>
        <input
          v-model="state.editable.startDate"
          type="date"
          class="form-control"
          name="startDate"
          id="startDate"
          placeholder="startDate"
          min="1"
          required
        />
      </div>
      <!-- type -->
      <!-- start date -->
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary text-light"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button type="submit" class="btn btn-success">Submit</button>
    </div>
  </form>
</template>


<script>
import { Modal } from 'bootstrap'
import { useRoute, useRouter } from 'vue-router'
import { AppState } from '../AppState'
import { eventsService } from '../services/EventsService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { reactive } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      editable: {}
    })
    watchEffect(async () => { })
    return {
      router,
      state,
      async createEvent() {
        try {
          await eventsService.create(state.editable);
          // Modal.getOrCreateInstance(document.getElementById("createEvent")).hide();
          // router.push({ name: 'EventPage', params: { id: AppState.currentEvent } })
        } catch (error) {
          logger.error(error)
          Pop.toast('create Event is not working', 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>