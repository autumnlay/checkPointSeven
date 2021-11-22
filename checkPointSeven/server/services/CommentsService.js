import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'
import { BadRequest, Forbidden } from '../utils/Errors'

class CommentsService {
  constructor() {
    logger.log('comment service is here')
  }

  async getAll(eventId) {
    return await dbContext.Comments.find({ eventId: eventId }).populate('creator', 'name')
    // return await dbContext.Comments.find(eventId).populate('creator', 'name')
  }

  async getById(id) {
    const comment = await dbContext.Comments.findById(id).populate('creator', 'name picture')
    if (!comment) {
      throw new BadRequest('Invalid Id')
    }
    return comment
  }

  async create(body) {
    const newComment = await dbContext.Comments.create(body)
    // await newComment.populate('creator')
    return await this.getById(newComment.id)
  }

  async remove(commentId, userId) {
    const comment = await this.getById(commentId)
    if (comment.creatorId.toString() !== userId) {
      throw new Forbidden('You are not aloud to delete this comment')
    }
    await dbContext.Comments.findByIdAndDelete(commentId)
  }
}

export const commentsService = new CommentsService()
