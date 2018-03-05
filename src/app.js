export class App {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: 'admin', name: 'admin', moduleId: 'admin', nav: true, title: 'Admin' }
    ]);

    this.router = router;
  }
}
