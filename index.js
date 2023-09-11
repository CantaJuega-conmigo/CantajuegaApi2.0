const server = require("./src/server");
const { conn } = require('./src/DB');
const PORT=3001

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
      console.log(`server open on port ${PORT}`); // eslint-disable-line no-console
    });
  });
   