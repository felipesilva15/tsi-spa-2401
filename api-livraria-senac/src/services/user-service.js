const utils = require('../libs/utils');

const fs = require('fs');

const users = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf-8'));

exports.getUsers = () => {
    return users;
}

exports.saveUser =  (data) => {
    const user = {
        id: utils.generateUUID(),
        name: data.name,
        email: data.email,
        password: data.password
    } 

    users.push(user);
    fs.writeFileSync('./src/data/users.json', JSON.stringify(users), 'utf-8')

    return user;
};

/**
 * Retorna o usuário filtrados pelo id
 * @param {string} id
 * @returns {Array}
 */
exports.getUserById = (id) => {
    return users.find((user) => {
        return user.id.includes(id);
    });
};

exports.validateLogin = (email, password) => {
    const user = users.find(user => user.email == email);

    if (!user || user.password != password) {
        return false;
    }

    return true;
};