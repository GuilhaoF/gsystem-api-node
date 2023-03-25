import prismaClient from "../../prismaConnect";

interface EmployeeRequest {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  position: string;
  salary: number;
}

class CreateEmployeeService {
  async execute({
    firstName,
    lastName,
    email,
    age,
    position,
    salary,
  }: EmployeeRequest) {
    if (!email) {
      return { message: "Email is required or Incorrect" };
    }
    //where usado para selecionar campos especificos nas buscas
    const employeeAlreadyExists = await prismaClient.employee.findFirst({
      where: {
        email: email,
      },
    });

    if (employeeAlreadyExists) {
      return { message: "Employee/email already exists!" };
    }

    const employee = await prismaClient.employee.create({
      data: {
        firstName,
        lastName,
        email,
        age,
        position,
        salary,
      },
      select: {
        email: true,
        firstName: true,
        lastName: true,
        age: true,
        position: true,
        salary: true,
      },
    });
    return employee;
  }
}
export { CreateEmployeeService };
