import prismaClient from "../../prismaConnect"

interface TicketRequest {
  employeeId: string
  ticket_id: string
  title: string
  description: string
  status: string
}
class UpdateTicketService {
  async execute({ employeeId, title, description, status, ticket_id }: TicketRequest) {

    const employeeAlreadyExists = await prismaClient.employee.findFirst({
      where: {
        id: employeeId
      }
    })
    const ticket = await prismaClient.ticket.update({
      where: {
        id: ticket_id
      },
      data: {
        title: title,
        description: description,
        status: status,
      }
    })
    return ticket
  }
}
export { UpdateTicketService }