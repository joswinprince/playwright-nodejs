const environments = {
    development: {
      baseUrl: 'https://dev.example.com',
    },
    staging: {
      baseUrl: 'https://staging.example.com',
    },
    production: {
      baseUrl: 'https://example.com',
    },
  };
  
  const ENV = process.env.ENV || 'development';
  const config = environments[ENV];
  
  module.exports = {
    use: {
      baseURL: config.baseUrl,
    },
  };
  