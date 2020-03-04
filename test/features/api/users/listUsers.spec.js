const request = require('test/support/request');
const factory = require('test/support/factory');
const { expect } = require('chai');

describe('API :: GET /api/users', () => {
  context('when there are users', () => {
    beforeEach(() => {
      return factory.createMany('user', 2, [
        { name: 'First', age: 11 },
        { name: 'Second', age: 22 }
      ]);
    });

    it('return success with array of users', async () => {
      const { body } = await request()
        .get('/api/users')
        .expect(200);

      expect(body).to.have.lengthOf(2);

      expect(body[0].name).to.equal('First');
      expect(body[0].age).to.equal(11);
      expect(body[0]).to.have.all.keys('id', 'name', 'age');

      expect(body[1].name).to.equal('Second');
      expect(body[1].age).to.equal(22);
      expect(body[1]).to.have.all.keys('id', 'name', 'age');
    });
  });

  context('when there are no users', () => {
    it('return success with empty array', async () => {
      const { body } = await request()
        .get('/api/users')
        .expect(200);

      expect(body).to.have.lengthOf(0);
    });
  });
});
