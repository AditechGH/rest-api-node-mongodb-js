const devConfig = {
  MONGO_URL: "mongodb://localhost/goosendr-dev",
  JWT_SECRET: process.env.SECRET || "Aditek",
  url: 'http://localhost:3000',
};
const testConfig = {
  MONGO_URL: "mongodb://localhost/goosendr-test",
  JWT_SECRET: process.env.SECRET || "Aditek"
};
const prodConfig = {
  MONGO_URL: "mongodb://localhost/goosendr-prod",
  JWT_SECRET: process.env.SECRET || "Aditek",
  url: 'http://52.14.168.100:3000'
};
const defaultConfig = {
  PORT: process.env.PORT || 3000,
  twilio: {
    number: '',
    accountSid: '',
    authToken: '',
    authyKey: '',
  },
  no_reply: 'no_reply@halalclothingonline.com',
  amazon: {
    AccessKeyID: '',
    SecretAccessKey: '',
    region: ''
  }
};

function envConfig(env) {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
}

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
};
