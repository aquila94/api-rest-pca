import { Router} from 'express';

import {UsuariosController} from './../controllers';

const router = Router();

router.get('/', (req, res) =>{
  return res.send('Olá Áquila');
});

router.post('/usuarios', UsuariosController.create);
router.get('/usuarios', UsuariosController.getAll);
router.get('/usuarios/:id', UsuariosController.getById);
router.put('/usuarios/:id', UsuariosController.updateById);
router.delete('/usuarios/:id', UsuariosController.deleteById);

export { router };