import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Usuarios - Create', () => {



  it('Cria registro', async () => {

    const res1 = await testServer
      .post('/usuarios')
      .send({
        nome: 'Aquila',
        email: 'aquila@pca.br'
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });

});