import Easyviolet from 'easyviolet';
import http from 'node:http';

const server = http.createServer();

new Easyviolet({
  server: server
});

server.listen(8080, () => {
  console.log(`Your easyviolet demo is running on port ${server.address().port}`);
});
