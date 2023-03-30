import prismaClient from "../../prismaConnect"


class DetailEmployeeService {
  async execute(employeeId: string) {

    const employee = await prismaClient.employee.findFirst({
      where: {
        id: employeeId
      },
      select: {
        firstName: true,
        lastName: true,
        email: true,
        age: true,
        createdAt: true,
        updatedAt: true

      }
    })
    return employee
  }
}
export { DetailEmployeeService }