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
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,

      },
      process.env.JWT_TOKEN,
      {
        subject: employee.id,
        expiresIn: '30d'
      }
    )
    return {
      id: employee?.id,
      firstName: employee?.firstName,
      email: employee?.email,
      lastName: employee?.lastName,
      token
    }

  }
}

export { AuthEmployeeService }