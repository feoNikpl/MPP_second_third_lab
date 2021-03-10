const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const database = require("../database/database");
const User = require("../models/user.js");
const Journey = require("../models/journeys.js");

const tokenKey = '1a2b-3c4d-5e6f-7g8h'

exports.verify = function(request, response, next){
	const token = request.session.token;
	if (!token){
		return response.status(401).send('Access denied');
	} else {
		try {
			const verified = jwt.verify(token, tokenKey);
			next();
		} catch (err) {
			response.status(401).send('Invalid token');
		}
	}
}

exports.loginUser = async function(request, response) {
    if (!request.body) {
		return response.status(401);
	} else {
        database.query(User.getUser(request.body.name), async function(err,result) {
            if (!result) {
                return response.status(401).send('there are no such user');
            } else {
                const validPassword = bcrypt.compare(request.body.password, result[0].password);
                if (!validPassword){
                    return response.status(401).send('Password is wrong');
                } else {
                    const token = jwt.sign({id: result[0].id, name: result[0].name}, tokenKey);
                    request.session.token = token;
                    response.status(200).send("done");
                }
            }
        });
	}
};
exports.registerUser = async function (request, response){
	if (!request.body) {
		return response.status(401);
	} else {
        database.query(User.getUser(request.body.name), async function(err,result) {
            if (result.name) {
                console.log(result);
                return response.status(401).send('User already exists');
            } else {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(request.body.password, salt);
                const user = new User(request.body.name,hashedPassword);
                console.log(user);
                try {
                    database.query(user.addUser(), function (error, result){
                        if(error) {
                            console.log(error.message);
                            return response.status(404);
                        }  
                        response.status(200).send("User created");
                    });
                } catch (err) {
                    response.status(401).send(err);
                }
            }
        });
	}
};
exports.addJourney = async function(request, response) {
    if(!request.body) return response.status(400);
    let user = jwt.decode(request.session.token);
    let filedata = request.file;
    const journey = new Journey(user.name, request.body.destination, request.body.date, (filedata === undefined) ? '' : filedata.filename);
    database.query(journey.addJourney(), function (error, result){
        if(error) {
            console.log(error.message);
            return response.status(404);
        }  
        response.status(200).send("done");
    });
};

exports.getContent = async function(request, response) {
    database.query(Journey.getAllJourneys(),function(error, result) {
        if(error){
            console.log(error.message);
            return response.status(404);
        }        
        response.status(200).send(JSON.stringify(result));
    });
};

exports.getAuthContent = async function(request, response) {
    let user = jwt.decode(request.session.token);
    database.query(Journey.getAuthJourneys(user.name),function(error, result) {
        if(error){
            console.log(error.message);
            return response.status(404);
        }        
        response.status(200).send(JSON.stringify(result));
    });
};

exports.deleteJourney = async function(request, response){         
    const id = request.params.id;
    database.query(Journey.deleteJourney(id), function(error, result) {
      if(error) return response.status(404);
      response.status(200).send("done");
    });
};

exports.updateJourney = async function(request, response){         
    const id = request.params.id;
    var pass = request.params.pass;
    if (pass == 0){
        pass = 1
    }else{
        pass = 0
    }
    database.query(Journey.updateJourney(id, pass), function(error, result) {
        if(error) {
            console.log(error.message);
            return response.status(404);
        }  
        response.status(200).send("done");
    });

};

exports.sendFile = async function(request, response){
    const file = request.params.filename;
    response.status(200).download("./uploads/" + file);
};

exports.getName = async function(request, response){
    let user = jwt.decode(request.session.token);
    response.status(200).send(JSON.stringify(user));
};
