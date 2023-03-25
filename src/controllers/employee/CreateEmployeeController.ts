import { Request, Response } from "express";
import { CreateEmployeeService } from "../../services/employee/CreateEmployeeService";

class CreateEmployeeController {
  async handle(request: Request, response: Response) {
    const { firstName, lastName, email, age, position, salary } = request.body;

    const createEmployeeService = new CreateEmployeeService();

    const employee = await createEmployeeService.execute({
      firstName,
      lastName,
      email,
      age,
      position,
      salary,
    });
    return response.json(employee);
  }
}
export { CreateEmployeeController };
