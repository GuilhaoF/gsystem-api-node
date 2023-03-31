import prismaClient from "../../prismaConnect";

interface TicketRequest {
  employeeId: string
  ticket_id: string
}

class DeleteTicketService {
  async execute({ employeeId, ticket_id }: TicketRequest) {

    if (ticket_id === '' || employeeId === '') {
      return { message: 'Erro' }
    }
    const employee = await prismaClient.ticket.findFirst({
      where: {
        id: ticket_id,
        employeeId: employeeId
      }
    })
    if (!employee) {
      return { message: 'Not Authorized' }
    }
    await prismaClient.ticket.delete({
      where: {
        id: ticket_id
      }
    })
    return { message: 'Chamado Finalizado' }


  }
}
export { DeleteTicketService }