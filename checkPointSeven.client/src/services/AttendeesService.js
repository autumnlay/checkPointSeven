import { logger } from "../utils/Logger"
import { api } from './AxiosService'
import { AppState } from "../AppState"
import { AccountAttendee, EventAttendee } from "../models/Attendees"

class AttendeesService {
async getAttendeesForAccount() {
    const res = await api.get('account/attendees')
    logger.log('accountAttendees', res.data)
    AppState.myAttendees = res.data.map(a => new EventAttendee(a))
  }

  async getattendeeForevent(eventId) {
    const res = await api.get(`api/events/${eventId}/attendee`)
    logger.log('event Attendee', res.data)
    AppState.attendees = res.data.map(a => new AccountAttendee(a))
  }

  async create(attendee) {
    const res = await api.post('api/attendee', attendee)
    AppState.myAttendees = new EventAttendee(res.data)
    AppState.attendees.unshift(new AccountAttendee(res.data))
  }

  async edit(attendee) {
    await api.put('api/attendee/' + attendee.attendeeId, attendee)
    const index = AppState.attendees.findIndex(b => b.attendeeId === attendee.attendeeId)
    AppState.attendees.splice(index, 1, attendee)
  }

  async remove(id) {
    const res = await api.delete('api/attendee/' + id)
    AppState.attendees = AppState.attendees.filter(a => a.attendeeId !== id)
  }
}

export const attendeesService = new AttendeesService()