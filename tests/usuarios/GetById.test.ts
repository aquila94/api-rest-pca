import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Usuarios - GetById', () => {



  it('Busca pelo id', async () => {

    const res1 = await testServer
      .post('/usuarios')
      .send({
        nome: 'Aquila',
        email: 'aquila@pca.br'
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    
    const resBuscada = await testServer
      .get(`/usuarios/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('nome');
  });

});