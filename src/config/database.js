const knexConfig = {
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "046888",
    database: process.env.DB_NAME || "db",
  },
};

export default knexConfig;
