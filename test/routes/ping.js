import assert from 'assert';
import ping from '../../app/routes/ping';

describe('routes/ping', () => {
  it('Replies with pong when called', () => {
    const ctx = {
      body: '',
    };

    ping(ctx);

    assert.equal(ctx.body, 'pong');
  });
});
