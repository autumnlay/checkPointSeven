

class Attendee {
    constructor(data) {
        this.eventId = data.eventId
        this.attendeeId = data.id
        this.accountId = data.accountId
    }
}

export class EventAttendee extends Attendee{
    constructor(data) {
        super(data)
        this.id = data.event.id
        this.name = data.event.name
        this.description = data.event.description
        this.coverImg = data.event.coverImg
        this.location = data.event.location
        this.capacity = data.event.capacity
        this.startDate = data.event.startDate
        this.isCanceled = data.event.isCanceled
        this.type = data.event.type
        this.creatorId = data.event.creatorId
    }
}

export class AccountAttendee extends Attendee {
    constructor(data) {
        super(data)
        this.id = data.account.id
        this.name = data.account.name
        this.picture = data.account.picture
    }
}
