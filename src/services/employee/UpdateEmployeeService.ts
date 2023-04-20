import prismaClient from "../../prismaConnect";

interface EmployeeRequest {
  employeeId: string
  firstName: string
  lastName: string
  email: string
  age: number
}

class UpdateEmployeeService {
  async execute({ employeeId, firstName, lastName, email, age }: EmployeeRequest) {
    try {
      //verificando se employee existe(primeiro que achar)
      const employeeAlreadyExists = await prismaClient.employee.findFirst({
        where: {
          id: employeeId
        }
      })

      if (!employeeAlreadyExists) {
        return { message: 'Erro User Not Exists !' }
      }
      //fazendo o update do employee
      const employeeUpdated = await prismaClient.employee.update({
        where: {
          id: employeeId
        },
        //dados
        data: {
          firstName,
          lastName,
          email,
          age
        },

      })
      return employeeUpdated

    } catch (err) {
      console.error(err)
      return { message: "Erro updating user !" }
    }

  }
}


export { UpdateEmployeeService }