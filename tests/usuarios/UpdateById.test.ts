import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';


describe('Usuarios - Update', () => {



  it('Atualiza registro', async () => {

    const res1 = await testServer
      .post('/usuarios')
      .send({
        nome: 'Aquila',
        email: 'aquila@pca.br'
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    
    const resAtualizada = await testServer
      .put(`/usuarios/${res1.body}`)
      .send({
        nome: 'Aquila A',
        email: 'aquila@pca.br'
      });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

});