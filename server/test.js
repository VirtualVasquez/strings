const mocha = require('mocha');
const chai = require('chai');
const { expect } = require('chai');
const { createMessage, deleteMessage } = require('./message_model');
const { login, createUser, deleteUser} = require('./user_model');


let userData = {
    user_name: Math.random(),
    user_pass: "TEST",
    pass_check: "TEST"
}

describe('CreateMessage', () => {
    it('should push a message to the database', async() => {
        let testUser = await createUser(userData);

        const message = {
            userid: testUser.user_id,
            text: "Mocha Text Message"
        };
        const expectedMessage = {
            user_id: testUser.user_id,
            message_text: "Mocha Text Message"
        }
        const createdMessage = await createMessage(message);

        expect(expectedMessage.user_id).to.equal(createdMessage.user_id);
        expect(expectedMessage.message_id).to.not.be.null;
        expect(expectedMessage.created_date).to.not.be.null;

        await deleteMessage(createdMessage);
        await deleteUser(testUser);
    });
});

describe('User login', () => {
    it('should login a user with correct credentials', async() => {
        let testUser = await createUser(userData);

        const user = {
            user_name: testUser.user_name,
            user_pass: testUser.user_pass,
        };
        const expectedUser = {
            user_id: testUser.user_id,
            user_name: testUser.user_name,
            user_pass: testUser.user_pass,
            created_date: testUser.created_date
        };
        const loggedInUser = await login(user);


        expect(loggedInUser.user_id).to.equal(expectedUser.user_id);
        expect(loggedInUser.user_name).to.equal(expectedUser.user_name);
        expect(loggedInUser.user_pass).to.equal(expectedUser.user_pass);
        expect(loggedInUser.created_date.toISOString()).to.equal(expectedUser.created_date.toISOString());

        await deleteUser(testUser);
    });
});