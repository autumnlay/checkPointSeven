import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'
import BaseController from '../utils/BaseController'

export class CommentsController extends BaseController {
  constructor() {
    super('api/comments')
    this.router
      .get('', this.getAll)
      // .get('/:id', this.getById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      // .delete('/:id', this.remove)
  }

  async getAll(req, res, next) {
    try {
      const query = req.query
      query.creatorId = req.userInfo.id
      const comments = await commentsService.getAll(query)
      return res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  // async getById(req, res, next) {
  //   try {
  //     const comment = await commentsService.getById(req.params.id)
  //     return res.send(comment)
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const comment = await commentsService.create(req.body)
      return res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  // async remove(req, res, next) {
  //   try {
  //     await commentsService.remove(req.params.id, req.userInfo.id)
  //     res.send('Comment Has Successfully been Deleted')
  //   } catch (error) {
  //     next(error)
  //   }
  // }
}
