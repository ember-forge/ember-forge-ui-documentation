import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  classNameBindings: [
    'required:list-group-item-warning'
  ],

  classNames: [
    'list-group-item'
  ],

  required: false
});
