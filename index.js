const express = require('express');
const app = express();
const path = require("path");
const http = require("http")
const PORT = process.env.PORT || 8001
const cors = require('cors')
const jwt = require('jsonwebtoken');
// const connection = require('./util/connection');
const {Server }= require("socket.io");
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(path.join(__dirname + "/public")))
app.use(cors());


const auth = require('./router/auth');  

// app.use("/api/v1/auth", auth);

// app.get('/', (req, res) => {
//     res.send("hello backend")
// });



function authticateToken(req, res, nex) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if( token == null) return res.sendStatus(401);

    jwt.verify(token, "matik", (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    })

}

const server = http.createServer(app);

// const io = new Server(server, {
//     cors: {
//         origin: ["*", "http://192.168.254.103:3000"],
//         methods: ["GET","POST"]
//     }
// })

// io.on("connection", (socket) => {
//     console.log(socket.id)
//     socket.on("send_message", (data) => {
//         console.log("data:", data);
//         socket.broadcast.emit("recieve_message", data)
//     })
// })  


server.listen(PORT, () => console.log(`Listening on port '${PORT}'`));