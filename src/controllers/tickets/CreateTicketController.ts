import { Request, Response } from "express";
import { CreateTicketService } from "../../services/tickets/CreateTicketService";

class CreateTicketController {
  async handle(request: Request, response: Response) {
    const { title, description, status } = request.body
    const employeeId = request.employeeId

    const createTicketService = new CreateTicketService()

    const ticket = await createTicketService.execute({
      employeeId,
      title,
      description,
      status,
    })
    return response.status(201).json(ticket)
  }
}
export { CreateTicketController }