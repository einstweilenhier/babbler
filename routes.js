const Assets = require('./app/controllers/assets');
const Accounts = require('./app/controllers/accounts');
const Settings = require('./app/controllers/settings');
const Babble = require('./app/controllers/babble');
const Main = require('./app/controllers/main');

module.exports = [
  { method: 'GET', path: '/', config: Main.main },

  { method: 'GET', path: '/signup', config: Accounts.signup },
  { method: 'POST', path: '/signup', config: Accounts.register },

  { method: 'GET', path: '/login', config: Accounts.login },
  { method: 'POST', path: '/login', config: Accounts.authenticate },

  { method: 'GET', path: '/logout', config: Accounts.logout },

  { method: 'GET', path: '/settings', config: Settings.viewSettings },
  { method: 'POST', path: '/settings', config: Settings.updateSettings },

  { method: 'POST', path: '/babble', config: Babble.postBabble },

  { method: 'GET', path: '/users', config: Main.showUsers},

  { method: 'GET', path: '/user/{id}', config: Main.showUserTimeline},

  { method: 'GET', path: '/global', config: Main.showGlobalTimeline},

  {
    method: 'GET', path: '/{param*}',
    config: { auth: false },
    handler: Assets.servePublicDirectory,
  },
];
