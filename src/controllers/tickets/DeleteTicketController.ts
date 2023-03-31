import { Request, Response } from "express";
import { DeleteTicketService } from "../../services/tickets/DeleteTicketService";


class DeleteTicketController {
  async handle(request: Request, response: Response) {
    const employeeId = request.employeeId
    const ticket_id = request.query.ticket_id as string

    const deleteTicketService = new DeleteTicketService()

    const ticket = await deleteTicketService.execute({
      employeeId,
      ticket_id
    })
    return response.status(200).json(ticket)

  }
}
export { DeleteTicketController }