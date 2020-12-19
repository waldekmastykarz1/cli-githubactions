import * as assert from 'assert';
import * as foo from './index';

describe('foo', () => {
  it('foo false', () => {
    foo.foo(false);
    assert(true);
  });

  it('foo true', () => {
    foo.foo(true);
    assert(true);
  });
});