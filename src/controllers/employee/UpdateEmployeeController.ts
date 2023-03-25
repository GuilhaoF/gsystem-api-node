import { Request, Response } from "express";
import { UpdateEmployeeService } from "../../services/employee/UpdateEmployeeService";



class UpdateEmployeeController {
  async handle(request: Request, response: Response) {

    const { firstName, lastName, email, position, salary } = request.body
    const { id } = request.params;

    const updateEmployee = new UpdateEmployeeService()
    const employees = await updateEmployee.execute({
      id: Number(id),
      firstName,
      lastName,
      email,
      position,
      salary,
    })
    response.status(201).json(employees)

  }
}

export { UpdateEmployeeController }