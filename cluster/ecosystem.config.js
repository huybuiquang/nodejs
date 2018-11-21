module.exports = {
  apps : [{
    name: 'API',
    script: './dist/app.js',
    //script: 'test.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // exec_interpreter : "babel-node",
    // interpreter : "babel-node",
    exec_mode : "cluster",
    //"node_args":"-r esm",
    //args: '-r esm',
    instances: 2,
    autorestart: false,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
