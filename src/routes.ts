import { Router } from "express";
import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";
import { ListAllEmployeesController } from "./controllers/employee/ListAllEmployeesController";
import { UpdateEmployeeController } from "./controllers/employee/UpdateEmployeeController";
import { DeleteEmployeeController } from "./controllers/employee/DeleteEmployeeController";

const router = Router();

router.get("/employees", new ListAllEmployeesController().handle);
router.post("/employees", new CreateEmployeeController().handle);
router.put("/employees/:id", new UpdateEmployeeController().handle)
router.delete("/employees/:id", new DeleteEmployeeController().handle)

export { router };
