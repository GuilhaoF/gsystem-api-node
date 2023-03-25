import prismaClient from "../../prismaConnect";

class ListAllEmployeesService {
  async execute() {
    return await prismaClient.employee.findMany();
  }
}
export { ListAllEmployeesService };
