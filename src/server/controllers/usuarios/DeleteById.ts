import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';



interface IParamProps {
    id?: number;
}

export const deleteById = (req: Request<IParamProps>, res: Response) => {
  
  if (Number(req.params.id) === 999999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });
  
  return res.status(StatusCodes.NO_CONTENT).send();
};