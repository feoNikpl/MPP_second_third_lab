module.exports= class User{
 
    constructor(name, password){
        this.name = name;
        this.password = password;
    }
    addUser() {
        return `INSERT INTO users(name, password) \
                     VALUES('${this.name}','${this.password}')`;
    }

    static getUser(name) {
        return `SELECT * FROM users WHERE name='${name}'`;
    }
    
    
}