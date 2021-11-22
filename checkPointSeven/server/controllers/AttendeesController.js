import { Auth0Provider } from '@bcwdev/auth0provider'
import { attendeesService } from '../services/AttendeesService'
import BaseController from '../utils/BaseController'

export class AttendeesController extends BaseController {
  constructor() {
    super('api/attendees')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async create(req, res, next) {
    try {
      // FIXME Mark reviewed this with mick test (will currently fail the account tests)
      req.body.accountId = req.userInfo.id
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
}
