import { Request, Response } from "express";
import prismaClient from "../../prismaConnect";

interface EmployeeRequest {
  id: number,
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  salary: number;
}

class UpdateEmployeeService {
  async execute({ id, firstName, lastName, email, position, salary }: EmployeeRequest) {
    try {
      //verificando se employee existe(primeiro que achar)
      const employeeAlreadyExists = await prismaClient.employee.findFirst({
        where: {
          id: id
        }
      })

      if (!employeeAlreadyExists) {
        return { message: 'Erro User Not Exists !' }
      }
      //fazendo o update do employee
      const employeeUpdated = await prismaClient.employee.update({
        where: {
          id: id
        },
        //dados
        data: {
          firstName,
          lastName,
          email,
          position,
          salary
        },

      })
      return employeeUpdated

    } catch (err) {
      console.error(err)
      return { message: "Erro updating user !" }
    }

  }
}


export { UpdateEmployeeService }