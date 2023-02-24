import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';



interface IQueryProps {
    page?: number;
    limit?: number;
    filter?: string;
}

export const getAll = (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
  res.setHeader('access-control-expose-headers', 'x-total-count');
  res.setHeader('x-total-count', 1);

  return res.status(StatusCodes.OK).json([
    {
      id: 1,
      nome: 'Aquila',
      email: 'aquila@pca.br',
    }
  ]);
};