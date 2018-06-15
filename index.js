const app = require('express')();
const PORT = process.env.PORT || 4000;
const server = require('http').Server(app);
const io = require('socket.io')(server);
let uuidv4 = require('uuid/v4');

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('pages/index');
});

server.listen(PORT, () => {
    console.log('listening on *:' + PORT);
});
