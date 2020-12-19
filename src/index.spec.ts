import * as assert from 'assert';
import * as foo from './index';

describe('foo', () => {
  it('runs', () => {
    foo.foo();
    assert(true);
  })
});