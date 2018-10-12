export default {
  init() {
    // TODO: Change the query selector
    this.el = document.querySelector('[data-client-history-routing-based]');
    if (this.el !== null) {
      this.launch();
    }
  },

  launch() {
    require.ensure([], require => {
      require('./index')(this.el);
    });
  },
};
