import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';



interface IUsuario {
    nome: string;
    email: string;
}

export const create = (req: Request<{}, {}, IUsuario>, res: Response) => {
 
  console.log(req.body);
  
  return res.status(StatusCodes.CREATED).json(1);
};