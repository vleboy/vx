module.exports = {
  apps : [{
    name      : 'vx',
    script    : 'server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : 'home.rottagame.com',
      port : '6000',
      ref  : 'origin/master',
      repo : 'git@github.com:vleboy/vx',
      path : '/home/vleboy/work/vx/',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
