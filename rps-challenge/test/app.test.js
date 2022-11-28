import chai, { expect } from 'chai';
import { describe } from 'node:test';
import chaiHttp from 'chai-http';
import gameServer from '../app.js';

chai.use(chaiHttp);

describe('Testing suite for home.js', () => {
  it('Should successfully render the index page', async () => {
    const result = await chai.request(gameServer).get(`/`);
    expect(result).to.have.status(200);
  });
});
