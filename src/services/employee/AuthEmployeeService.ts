import prismaClient from "../../prismaConnect";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface EmployeeAuthProps {
  email: string;
  password: string;
}

class AuthEmployeeService {
  async execute({ email, password }: EmployeeAuthProps) {

    const employee = await prismaClient.employee.findFirst({
      where: { email: email },
    })
    if (!employee) {
      return { message: "Email or Password Incorrect!" };
    }
    const passwordMatch = await compare(password, employee?.password)

    if (!passwordMatch) {
      return { message: "Password Incorrect!" };
    }
    const token = sign(
      {
        name: employee.firstName,
        email: employee.email,

      },
      'Secret',
      {
        subject: String(employee.id),
        expiresIn: '30d'
      }
    )
    return {
      id: employee?.id,
      name: employee?.firstName,
      email: employee?.email,
      secondName: employee?.lastName,
      token: token
    }

  }
}

export { AuthEmployeeService }