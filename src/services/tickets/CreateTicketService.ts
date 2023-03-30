import prismaClient from "../../prismaConnect";

interface TicketRequest {
  employeeId: string
  title: string
  description: string
  status: string
}

class CreateTicketService {
  async execute({ employeeId, title, description, status }: TicketRequest) {

    //array de condicoes
    const conditionsArray = [
      !title,
      !description,
      !status
    ]
    if (conditionsArray.indexOf(false)) {
      return { message: 'Erro' }
    }
    const myTickets = await prismaClient.ticket.count({
      where: {
        employeeId: employeeId
      }
    })

    const employee = await prismaClient.employee.findFirst({
      where: {
        id: employeeId
      }
    })
    const ticket = await prismaClient.ticket.create({
      data: {
        employeeId: employeeId,
        title: title,
        description: description,
        status: status,
      }
    })
    return ticket
  }
}
export { CreateTicketService }