const { expect } = require('chai');
const request = require('supertest-as-promised');
const app = require('../index.js');

const testFunctions = {
  return404(done) {
    request(app)
      .get('/api/not-existed')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        done();
      });
  },
  return500(done) {
    request(app)
      .post('/api/image')
      .attach('image', 'test.png')
      .end((err, res) => {
        expect(res.status).to.equal(500);
        done();
      });
  }
};

describe('Error Controller', () => {
  it('should return 404', testFunctions.return404);
  it('should return 500', testFunctions.return500);

  after(() => app.server.close());
});

