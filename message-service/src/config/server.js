const port = 3003;
const host = 'localhost';
const server = require('./express');
require('./routes')(server);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
});