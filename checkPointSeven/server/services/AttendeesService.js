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

  async getAttendeesByEventId(eventId) {
    return await dbContext.Attendees.find({ eventId }).populate('account')
  }

  async getAttendsByAccountId(accountId) {
    return await dbContext.Attendees.find({ accountId }).populate('event')
  }

  async create(body) {
    const event = await eventsService.getById(body.eventId)
    const found = await dbContext.Attendees.findOne({ eventId: body.eventId, accountId: body.accountId })
    if (found) {
      throw new BadRequest('You are already attending')
    }
    const attend = await dbContext.Attendees.create(body)
    await attend.populate('account')
    await attend.populate('event')
    event.capacity--
    await event.save()
    return attend
  }

  async remove(attendeeId, userId) {
    const attendee = await this.getById(attendeeId)
    if (attendee.accountId.toString() !== userId) {
      throw new BadRequest('This is not your attendee')
    }
    await dbContext.Attendees.findByIdAndDelete(attendeeId)
  }
}

export const attendeesService = new AttendeesService()
