import { Request, Response } from "express";
import { UpdateEmployeeService } from "../../services/employee/UpdateEmployeeService";



class UpdateEmployeeController {
  async handle(request: Request, response: Response) {

    const { firstName, lastName, email, age } = request.body
    const employeeId = request.employeeId

    const updateEmployee = new UpdateEmployeeService()

    const employees = await updateEmployee.execute({
      employeeId,
      firstName,
      lastName,
      email,
      age,
    })
    response.status(201).json(employees)

  }
}

export { UpdateEmployeeController }