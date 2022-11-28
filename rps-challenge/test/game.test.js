import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'node:test';
import gameServer from '../app.js';

chai.use(chaiHttp);

describe('onePlayer.js router test', () => {
  beforeEach(async () => {
    const res = await chai.request(gameServer).post('/onePlayer').send();
  });

  it('should make successful get request to /onePlayer', async () => {
    const res = await chai.request(gameServer).get(`/onePlayer`).send();
    expect(res).to.have.status(200);
  });

  it('should return player', async () => {
    const res = await chai.request(gameServer).get(`/onePlayer`).send();
    expect(res.body).to.be.an('object');
    expect(res.text).to.include('Choose your weapon');
  });
});
