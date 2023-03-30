import prismaClient from "../../prismaConnect";

interface TicketRequest {
  employeeId: string
}

class ListTicketService {
  async execute({ employeeId }: TicketRequest) {
    const ticket = await prismaClient.ticket.findMany({
      where: {
        employeeId: employeeId
      },
      select: {
        id: true,
        title: true,
        description: true,
        status: true,
        createdAt: true,
        updatedAt: true
      }
    })
    return ticket

  }
}
export { ListTicketService }