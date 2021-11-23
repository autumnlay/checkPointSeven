import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

import { Event } from "../models/Event"
class EventsService{
    
    async getAll(eventQuery = "") {
        const res = await api.get('api/events' + eventQuery)
        logger.log('all events',res.data)
        // AppState.events = res.data.map(e => new Event(e))
        AppState.events = res.data
    }

    async getById(id) {
        const res = await api.get('api/events/' + id)
        logger.log(res.data)
        AppState.currentEvent = new Event(res.data)
    }

    async create(event) {
        //debugger
        const res = await api.post('api/events', event)
        logger.log(res.data)
       AppState.events.push(new Event(res.data))
        AppState.currentEvent = new Event(res.data)

    }

    async edit(event) {
        const res = await api.put('api/events/' + event.id, event)
        logger.log(res.data)
        const updateEvent = new Event(res.data)
        AppState.currentEvent = updateEvent
        const index = AppState.events.findIndex(e => e.id === updateEvent.id)
        if (index === -1) {
            AppState.events.push(updateEvent)
        return
        }
        AppState.events.splice(index, 1, updateEvent)
    }

    async remove() {
        const res = await api.delete('api/events/' + AppState.currentEvent.id)
        logger.log(res.data)
        AppState.events = AppState.events.filter(e => e.id !== AppState.currentEvent.id)
        AppState.currentEvent = new Event()
    }
}

export const eventsService = new EventsService()