import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Peep from '../src/models/peep.model.js';
import server from '../server.js';
import testPeeps from './testData/testPeeps.js';

const testDataArray = testPeeps;

chai.use(chaiHttp);

describe('Testing requests to the db for peeps', () => {
  beforeEach(async () => {
    await Peep.deleteMany()
      .then(() => console.log(`Peep collection cleared`))
      .catch((error) => {
        console.log(`Error clearing`);
        throw new Error();
      });

    await Peep.insertMany(testDataArray)
      .then(() => console.log(`Database populated with test peeps data`))
      .catch((error) => {
        console.log(`Error inserting`);
        throw new Error();
      });
  });

  describe(`/POST create a peep tests`, () => {
    it(`should create a peep that is properly formed`, async () => {
      const res = await chai
        .request(server)
        .post(`/addPeep`)
        .send(testPeeps.validPeep);

      expect(res).to.have.status(201);
      expect(res.body.peepAdded).to.be.an(`object`);
      expect(res.body.message).to.equal(`Your peep was successfully posted`);
    });

    it(`should not create a peep without a username field`, async () => {
      const res = await chai
        .request(server)
        .post(`/addPeep`)
        .send(testPeeps.noUserName);

      expect(res.body.message).to.equal('Peep post failed');
    });

    it(`should not create a peep without a peep message`, async () => {
      const res = await chai
        .request(server)
        .post(`/addPeep`)
        .send(testPeeps.noPeepContent);
      expect(res.body.message).to.equal('Could not add your peep to Chitter');
    });
  });
});
