import prismaClient from "../../prismaConnect";

class DeleteEmployeeService {

  async execute({ id }) {
    try {

      const employeeAlreadyExists = await prismaClient.employee.findFirst({
        where: {
          id: Number(id)
        }
      })
      if (!employeeAlreadyExists) {
        return { message: "Employee not found !" };
      }

      await prismaClient.employee.delete({
        where: {
          id: Number(id)
        }
      })
      return { message: 'Employee Deleted !' }

    } catch (err) {
      console.log(err)
      return { message: 'Erro delete employee !' }
    }
  }
}
export { DeleteEmployeeService }