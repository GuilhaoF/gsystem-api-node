import { Request, Response, response } from "express";
import { ListAllEmployeesService } from "../../services/employee/ListAllEmployeesService";

class ListAllEmployeesController {
  async handle(request: Request, response: Response) {
    const listAllEmployeesService = new ListAllEmployeesService();
    const employees = await listAllEmployeesService.execute();
    response.status(200).json(employees);
  }
}

export { ListAllEmployeesController };
