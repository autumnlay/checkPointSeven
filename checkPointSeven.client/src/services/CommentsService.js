import {AppState} from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class CommentsService{
    async getAll(eventId) {
        const res = await api.get(`api/events/${eventId}/comments` )
        logger.log('all comments',res.data)
        // AppState.events = res.data.map(e => new Event(e))
        AppState.comments = res.data
    }

    async create(commentId) {
        const res = await api.post('api/comments', commentId)
        AppState.comments.unshift(res.data)
    }
}

export const commentsService = new CommentsService()