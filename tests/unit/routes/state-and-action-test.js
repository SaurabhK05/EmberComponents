import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | state-and-action', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:state-and-action');
    assert.ok(route);
  });
});
