import cors from "cors";
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import { router } from "./routes";
import 'express-async-errors'

const app = express();

app.use(express.json()); // recebe as requisicoes com o corpo
app.use(cors());
app.use(router);

app.use(bodyParser.json());

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {

  if (error instanceof Error) {
    return response.status(404).json({ error: error.message })
  }
  return response.status(500).json({
    status: 'Error Internal',
    message: 'Internal Server Error System'
  })
})

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
