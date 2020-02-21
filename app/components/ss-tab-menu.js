import Component from '@ember/component';
import { A } from '@ember/array';

export default Component.extend({
  // tagName: '',
  tabs: null,
  tabComponentName: 'ss-tab',

  init() {
    this._super(...arguments);
    this.set('tabs', A([]));
  },

  perform(current) {
    let tabs = this.get('tabs');
    tabs.addObject(current);
  },

  actions: {
    toggle(current) {
      let tabs = this.get('tabs');
      for (let tab of tabs) {
        if (current === tab) {
          tab.toggle(true);
        } else {
          tab.toggle(false);
        }
      }
    }
  }
});
