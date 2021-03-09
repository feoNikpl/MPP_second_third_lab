const express = require("express");
const multer  = require("multer");
const session = require('express-session');
var cors = require('cors');
const appRoutes = require("./route/Routes");
const app = express();

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

app.options('*', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.send('ok');
});

app.use(session({
	secret: 'qwerty',
	cookie: { maxAge: 60000000 },
	resave: true,
	saveUninitialized: true
}));

app.use(express.static(__dirname));
app.use(cors()); 
app.use(multer({storage:storageConfig}).single("file"));
app.use(appRoutes);


app.listen(3001);

