/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Breed, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
};

// describe('Videogame routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//     );
//   });
// });

// describe('Api test', () => {
//   describe('GET /', () => {
//     it('responds with 200', () => agent.get('/api/dogs').expect(200));
//      })
// })

describe('POST /', () => {
  it('responds with status 200', () => agent.post('/api/dogs/').expect(200));
  it('responds with missing information is require if information missing', () =>
    agent.post('/api/dogs/')
      .send({
        "name": "spiderDog",
        "min_Height": 4,
        "max_Height": 5,
        "min_Weight": 8,
        "max_Weight": 9,
        "life_span_max": 7,
      })
      .then((res) => {
        expect(res.body.message).equal('please missing information is require')
      })
  )
  it('responds with message successful process', () =>
    agent.post('/api/dogs/')
      .send({
        "name": "surf",
        "min_Height": 4,
        "max_Height": 5,
        "min_Weight": 8,
        "max_Weight": 9,
        "life_span_max": 7,
        "life_span_min": 9,
        "temperament": ['hola']
      })
      .then((res) => {
        expect(res.body.message).equal('successful process')
      })
  )


})