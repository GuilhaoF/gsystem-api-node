import prismaClient from "../../prismaConnect";
import { hash } from "bcryptjs";

interface EmployeeRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
}
class CreateEmployeeService {
  async execute({
    firstName,
    lastName,
    email,
    password,
    age,
  }: EmployeeRequest) {
    if (!email) {
      return { message: "Email incorrect" };
    }
    const employeeAlreadyExists = await prismaClient.employee.findFirst({
      where: {
        email: email,
      },
    });
    if (employeeAlreadyExists) {
      return { message: "Email/Employee already exists" };
    }
    const passwordMatch = await hash(password, 8);

    const employee = await prismaClient.employee.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: passwordMatch,
        age: age,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        age: true,
      },
    });
    return employee;
  }
}
export { CreateEmployeeService };
