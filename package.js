Package.describe({
  name: 'loren:login-links',
  version: '0.1.0',
  summary: 'Send links that automatically login the user with OTPs (one-time passwords)',
  git: 'https://github.com/lorensr/login-links.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use(['ecmascript',
           'underscore',
           'accounts-base',
           'mongo',
           'check']);

  api.addFiles('login-links.js')

  api.addFiles(['client/login-links.js'], 'client')

  api.addFiles(['server/login-links.js',
                'server/accessToken.js',
                'server/clearOldTokens.js',
                'server/loginHandler.js'], 'server')
});

Package.onTest(function(api) {
  api.use(['login-links',
           'ecmascript',
           'tinytest',
           'accounts-password',
           'underscore']);

  api.addFiles('tests/client.js', 'client')
});
