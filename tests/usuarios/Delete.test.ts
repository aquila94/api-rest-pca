import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Usuarios - DeleteById', () => {



  it('Apaga registro', async () => {

    const res1 = await testServer
      .post('/usuarios')
      .send({
        nome: 'Aquila',
        email: 'aquila@pca.br'
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    
    const resApagada = await testServer
      .delete(`/usuarios/${res1.body}`)
      .send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

});