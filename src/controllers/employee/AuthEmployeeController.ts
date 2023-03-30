import { Request, Response } from "express";
import { AuthEmployeeService } from "../../services/employee/AuthEmployeeService";


class AuthEmployeeController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authEmployeeService = new AuthEmployeeService()

    const session = await authEmployeeService.execute({
      email,
      password
    })
    return response.status(200).json(session)

  }
}

export { AuthEmployeeController }