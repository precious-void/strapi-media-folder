module.exports = ({ env }) => {
  const dataBaseURI = env(
    "DATABASE_URI",
    `mongodb://127.0.0.1:27017/test-database?readPreference=primary&appname=MongoDB%20Compass&ssl=false`
  );

  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "mongoose",
        settings: {
          uri: dataBaseURI,
        },
      },
    },
  };
};
