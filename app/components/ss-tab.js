import Component from '@ember/component';

export default Component.extend({
  classNames: ['ui', 'bottom', 'attached', 'tab', 'segment'],
  classNameBindings: ['isActive:active'],
  attributeBindings: ['data-tab:elementId'],
  title: null,

  didInsertElement() {
    this._super(...arguments);
    this.perform();
  },

  perform() {
    this.get('menu').perform(this);

    if (this.get('isActive')) {
      this.send('activate');
    }
  },

  toggle(state) {
    this.set('isActive', state);

    if (state === true) {
      this.send('activate');
    }
  },

  actions: {
    activate() {
      if (this.get('onActivate')) {
        this.get('onActivate')();
      }
    }
  }
});
