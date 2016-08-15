import Ember from 'ember';

const {
  computed,
  Controller
} = Ember;

export default Controller.extend({

  scope: Ember.inject.service(),

  showBootstrap: computed(
    'scope.scope',
    function() {
      return this.get('scope').get('scope') === 'bootstrap';
    }
  )

});
