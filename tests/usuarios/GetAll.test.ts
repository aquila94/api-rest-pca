import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Usuarios - GetAll', () => {



  it('Buscar todos os registros', async () => {

    const res1 = await testServer
      .post('/usuarios')
      .send({
        nome: 'Aquila',
        email: 'aquila@pca.br'
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    
    const resBuscada = await testServer
      .get('/usuarios')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });

});