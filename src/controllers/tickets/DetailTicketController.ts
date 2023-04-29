import { Request, Response} from 'express'
import { DetailTicketService } from '../../services/tickets/DetailTicketService'


class DetailTicketController{
    async handle(request : Request,response : Response){
        const ticket_id = request.query.ticket_id as string

        const detailTicket = new DetailTicketService()

        const ticket = await detailTicket.execute({
            ticket_id
        })
        return response.json(ticket)
    }
}
export { DetailTicketController }