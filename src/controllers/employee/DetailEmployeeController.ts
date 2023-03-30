import { Request, Response } from 'express';
import { DetailEmployeeService } from '../../services/employee/DetailEmployeeService';



class DetailEmployeeController {
  async handle(request: Request, response: Response) {
    const employeeId = request.employeeId

    const employeeDetailService = new DetailEmployeeService()

    const detailEmployee = await employeeDetailService.execute(employeeId)
    return response.json(detailEmployee)
  }
}
export { DetailEmployeeController }