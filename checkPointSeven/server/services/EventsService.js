import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'
import { BadRequest, Forbidden } from '../utils/Errors'

class EventsService {
  constructor() {
    logger.log('Events Service is here')
  }

  async getAll(query = {}) {
    return await dbContext.Events.find(query).populate('create', 'name')
  }

  async getById(id) {
    const event = await dbContext.Events.findById(id).populate('creator', 'name')
    if (!event) {
      throw new BadRequest('Invalid Id')
    }
    return event
  }

  async create(body) {
    const newEvent = await dbContext.Events.create(body)
    return newEvent.populate('creator', 'name')
  }

  async edit(body) {
    const event = await this.getById(body.id)
    if (event.creatorId.toString() !== body.creatorId) {
      throw new Forbidden('You are not aloud to edit this event')
    }
    const updateEvent = dbContext.Events.findOneAndUpdate({ _id: body.id }, body, { new: true })
    return await updateEvent
  }

  async remove(eventId, userId) {
    const event = await this.getById(eventId)
    if (event.creatorId.toString() !== userId) {
      throw new Forbidden('You are not aloud to delete this event')
    }
    await dbContext.Events.findByIdAndDelete(eventId)
  }
}
export const eventsService = new EventsService()
