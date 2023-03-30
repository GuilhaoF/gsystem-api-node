import prismaClient from "../../prismaConnect"


interface TicketRequest {
  employeeId: string
  ticket_id: string
  status: string
}


class UpdateTicketService {
  async execute({ employeeId, status = 'Pendent', ticket_id }: TicketRequest) {

    const employee = await prismaClient.employee.findFirst({
      where: {
        id: employeeId
      }
    })
    const ticket = await prismaClient.ticket.update({
      where: {
        id: ticket_id
      },
      data: {
        status: status
      }
    })
    return ticket
  }
}