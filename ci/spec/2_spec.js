var frisby = require('frisby');

frisby.create('origin')
  .get('http://127.0.0.1:8000/test/origin')
  .expectStatus(200)
  .expectJSON({
        status: 4001,
  })
.toss();

frisby.create('device')
  .get('http://127.0.0.1:8000/test/device')
  .expectStatus(200)
  .expectJSON({
        status: 200,
  })
.toss();

frisby.create('user')
  .get('http://127.0.0.1:8000/test/user')
  .expectStatus(200)
  .expectJSON({
        status: 200,
  })
.toss();
