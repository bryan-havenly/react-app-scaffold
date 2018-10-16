export default {
  init() {
    // TODO: Change the query selector
    this.el = document.querySelector('[data-client-new-app]');
    if (this.el !== null) {
      const data = JSON.parse(this.el.getAttribute('data-client-new-app-data'));
      this.launch(data);
    }
  },

  launch(data) {
    require.ensure([], require => {
      require('./index')(this.el, data);
    });
  },
};
