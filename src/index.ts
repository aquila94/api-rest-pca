import { server } from './server/Server';

server.listen(process.env.PORT || 3333, () => 
  console.log(`App rodando em ${process.env.PORT || 3333}`)
);