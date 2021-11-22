import { Auth0Provider } from '@bcwdev/auth0provider'
import { attendeesService } from '../services/AttendeesService'
import BaseController from '../utils/BaseController'

export class AttendeesController extends BaseController {
  constructor() {
    super('api/attendees')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
    // .get('', this.getAll)
    // .get('/:id', this.getById)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async create(req, res, next) {
    try {
      req.body.attendeeId = req.userInfo.id
      const attendee = await attendeesService.create(req.body)
      return res.send(attendee)
    } catch (error) {
      next(error)
    }
  }

  async remove(req, res, next) {
    try {
      await attendeesService.remove(req.params.id, req.userInfo.id)
      res.send('Attendee Has Successfully been Deleted')
    } catch (error) {
      next(error)
    }
  }
  //   async getAll(req, res, next) {
  //     try {
  //       const query = req.query
  //       query.creatorId = req.userInfo.id
  //       const attendees = await attendeesService.getAll(query)
  //       return res.send(attendees)
  //     } catch (error) {
  //       next(error)
  //     }
  //   }

  //   async getById(req, res, next) {
  //     try {
  //       const attendee = await attendeesService.getById(req.params.id)
  //       return res.send(attendee)
  //     } catch (error) {
  //       next(error)
  //     }
  //   }
}
