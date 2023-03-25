import { Request, Response, request, response } from 'express'
import { DeleteEmployeeService } from '../../services/employee/DeleteEmployeeService';

class DeleteEmployeeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteEmployee = new DeleteEmployeeService()

    const employeeDeleted = await deleteEmployee.execute({
      id: Number(id)
    })
    return response.json(employeeDeleted)

  }
}
export { DeleteEmployeeController }