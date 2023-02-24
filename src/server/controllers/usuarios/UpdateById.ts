import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';



interface IParamProps {
    id?: number;
}
interface IBodyProps {
  nome: string;
  email: string;
}

export const updateById = (req: Request<IParamProps, {}, IBodyProps >, res: Response) => {
  
  if (Number(req.params.id) === 999999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });
  
  return res.status(StatusCodes.NO_CONTENT).send();
};