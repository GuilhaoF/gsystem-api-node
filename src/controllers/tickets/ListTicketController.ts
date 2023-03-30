import { Request, Response } from "express";
import { ListTicketService } from "../../services/tickets/ListTicketService";


class ListTicketController {
  async handle(request: Request, response: Response) {
    const employeeId = request.employeeId

    const listTickets = new ListTicketService()

    const tickets = await listTickets.execute({
      employeeId
    })
    return response.status(200).json(tickets)
  }
}
export { ListTicketController }