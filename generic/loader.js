export default {
  init() {
    this.el = document.querySelector('[data-client-newApp]');
    if (this.el !== null) {
      const data = JSON.parse(this.el.getAttribute('data-client-newApp-data'));
      this.launch(data);
    }
  },

  launch(data) {
    require.ensure([], require => {
      require('./index')(this.el, data);
    });
  },
};
