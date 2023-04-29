import prismaClient from "../../prismaConnect";

interface TicketRequest {
  employeeId: string
  title: string
  description: string
  status?: string
}

class CreateTicketService {
  async execute({ employeeId, title, description, status='Aberto' }: TicketRequest) {

    //array de condicoes
    const conditionsArray = [
      !title,
      !description,
    ]
    if (conditionsArray.indexOf(false)) {
      return { message: 'Erro' }
    }
    const employee = await prismaClient.employee.findFirst({
      where: {
        id: employeeId
      }
    })
    const ticket = await prismaClient.ticket.create({
      data: {
        title: title,
        description: description,
        status: status,
        employeeId: employeeId,
      }
    })
    return ticket
  }
}
export { CreateTicketService }