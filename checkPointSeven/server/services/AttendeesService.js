import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'
import { BadRequest, Forbidden } from '../utils/Errors'
import { eventsService } from './EventsService'

class AttendeesService {
  constructor() {
    logger.log('attendee service is here')
  }

  async getById(id) {
    const attend = await dbContext.Attendees.findById(id)
    if (!attend) {
      throw new BadRequest('Invalid attendee Id')
    }
    return attend
  }

  async getAttendsByEventId(eventId) {
    return await dbContext.Attendees.find({ eventId }).populate('attendee')
  }

  async getAttendsByAttendeeId(attendeeId) {
    return await dbContext.Attendees.find({ attendeeId }).populate('event')
  }

  async create(body) {
    await eventsService.getById(body.eventId)
    const found = await dbContext.Attendees.findOneAndDelete({ eventId: body.eventId, attendeeId: body.attendeeId })
    if (found) {
      throw new BadRequest('You are already attending')
    }
    const attend = await dbContext.Attendees.create(body)
    await attend.populate('attendence for event')
    return attend
  }

  async remove(attendeeId, userId) {
    const attendee = await this.getById(attendeeId)
    if (attendee.id.toString() !== userId) {
      throw new BadRequest('This is not your attendee')
    }
    await dbContext.Attendees.findByIdAndDelete(attendeeId)
  }
}

export const attendeesService = new AttendeesService()
