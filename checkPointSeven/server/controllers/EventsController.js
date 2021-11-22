import { Auth0Provider } from '@bcwdev/auth0provider'
import { eventsService } from '../services/EventsService'
import BaseController from '../utils/BaseController'

export class EventsController extends BaseController {
  constructor() {
    super('api/events')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      // .put('/:id', this.edit)
      .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      // const query = req.query
      // query.creatorId = req.userInfo
      const events = await eventsService.getAll(req.query)
      return res.send(events)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      // req.params.id = req.userInfo.id
      const event = await eventsService.getById(req.params.id)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const event = await eventsService.create(req.body)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const event = await eventsService.edit(req.body)
      return res.send(event)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await eventsService.remove(req.params, req.userInfo)
      res.send('Event Has Successfully been Deleted')
    } catch (error) {
      next(error)
    }
  }
}
