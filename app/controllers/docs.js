import Ember from 'ember';

export default Ember.Controller.extend({

  scope: Ember.inject.service(),

  actions: {
    setCore() {
        this.get('scope').setScope('core');
        return false;
    },

    setBootstrap() {
        this.get('scope').setScope('bootstrap');
        return false;
    }
  }
});
