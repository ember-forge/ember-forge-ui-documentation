import Ember from 'ember';

export default Ember.Service.extend({

  getScope() {
    return this.get('scope');
  },

  setScope(scope) {
    this.set('scope', scope);
  },

  scope: 'core'

});
