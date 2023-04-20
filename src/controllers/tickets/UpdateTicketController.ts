import { Request, Response } from 'express';
import { UpdateTicketService } from "../../services/tickets/UpdateTicketService"


class UpdateTicketController {
  async handle(request: Request, response: Response) {
    const employeeId = request.employeeId

    const { title, description, status, ticket_id } = request.body


    const updateTicket = new UpdateTicketService()

    const ticket = await updateTicket.execute({
      employeeId,
      title,
      description,
      status,
      ticket_id
    })
    return response.json(ticket)
  }
}
export { UpdateTicketController }