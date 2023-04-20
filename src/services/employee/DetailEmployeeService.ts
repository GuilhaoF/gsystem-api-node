import prismaClient from "../../prismaConnect"


class DetailEmployeeService {
  async execute(employeeId: string) {

    const employee = await prismaClient.employee.findFirst({
      where: {
        id: employeeId
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        age: true,
      }
    })
    return employee
  }
}
export { DetailEmployeeService }