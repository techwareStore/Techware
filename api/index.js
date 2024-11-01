const server = require('./src/app.js');
const { conn } = require('./src/database/db.js')

conn.sync({ force: false }).then(() => {
    server.listen(3001, () => {
        console.log('listening at 3001');
    });
});
