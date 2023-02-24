import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';



interface IParamsProps {
    id?: number;
}

export const getById = (req: Request<IParamsProps>, res: Response) => {
 
  if (Number(req.params.id) === 999999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
      default: 'Registro não encontrado'
    }
  });

  
  return res.status(StatusCodes.OK).json({
    is: req.params.id,
    nome: 'Aquila',
    email: 'aquila@pca.br',
  });
};