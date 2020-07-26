import result from "dotenv";

const config = result.config();

if (config.error) {
  throw result.error;
}

const SERVER = {
  port: process.env.SERVER_PORT || 8080,
};

const environmentVariables = {
  ...process.env,
  SERVER,
};

const getConfigValues = () => {
  return environmentVariables;
};

export default {
  get: getConfigValues,
};
