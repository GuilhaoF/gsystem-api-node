import { Router } from "express";
import { CreateEmployeeController } from "./controllers/employee/CreateEmployeeController";



import { isAuthenticated } from "./middleware/isAutenticated";

import { UpdateEmployeeController } from "./controllers/employee/UpdateEmployeeController";
import { AuthEmployeeController } from "./controllers/employee/AuthEmployeeController";
import { DetailEmployeeController } from "./controllers/employee/DetailEmployeeController";
import { CreateTicketController } from "./controllers/tickets/CreateTicketController";
import { ListTicketController } from "./controllers/tickets/ListTicketController";
import { DeleteTicketController } from "./controllers/tickets/DeleteTicketController";
import { UpdateTicketController } from "./controllers/tickets/UpdateTicketController";

const router = Router();

// funcionarios(employees) rotas liberadas
router.post("/employees/session", new AuthEmployeeController().handle);
router.post("/employees", new CreateEmployeeController().handle);

//rotas privadas
router.get("/employee/detail", isAuthenticated, new DetailEmployeeController().handle)
router.put("/employee/update", isAuthenticated, new UpdateEmployeeController().handle)

// chamados (tickets)
router.get("/tickets", isAuthenticated, new ListTicketController().handle)
router.post("/ticket", isAuthenticated, new CreateTicketController().handle)
router.put("/ticket/update", isAuthenticated, new UpdateTicketController().handle)
router.delete("/ticket", isAuthenticated, new DeleteTicketController().handle)

export { router };
