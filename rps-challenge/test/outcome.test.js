import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import gameServer from '../app.js';

chai.use(chaiHttp);

describe('outcome.js router test', () => {
  it('should make successful post request to /outcome', async () => {
    const res = await chai.request(gameServer).post(`/outcome`).send();
    expect(res).to.have.status(200);
    expect(res.text).to.include('RESULT');
  });
});
