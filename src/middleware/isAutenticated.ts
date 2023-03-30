import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"; //verifica o token web


interface Payload {
  sub: string
}


export function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction

) {
  //pegando o token pelos headers
  const authEmployeeToken = request.headers.authorization

  //verificando se ta recebendo token
  if (!authEmployeeToken) {
    return response.status(401).end('Token Invalido ou nao informado') //nao pode prosseguir
  }
  //ignorando primeira posicao do texto(bearer)
  const [, token] = authEmployeeToken.split(" ")

  try {
    //verificando o token e a security
    const { sub } = verify(
      token,
      'Secret'
    ) as Payload

    request.employeeId = sub;

    return next();

  } catch (err) {
    return response.status(401).end()
  }


}