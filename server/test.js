const mocha = require('mocha');
const chai = require('chai');
const { expect } = require('chai');
const { createMessage } = require('./message_model');
const { login } = require('./user_model');


describe('CreateMessage', () => {
    it('should push a message to the database', () => {
        const message = {
            user_id: 1,
            message_text: "Mocha Text Message"
        };
        const createdMessage = createdMessage(message);
        expect(createdMessage).to.have.all.keys('user_id', 'message_text', 'message_id', 'created_date').and.not.be.null;
    });
});

describe('User login', () => {
    it('should login a user with correct credentials', () => {
        const user = {
            user_name: "firstUser",
            user_pass: "firstUser",
        };
        const expectedUser = {
            user_id: 1,
            user_name: "firstUser",
            user_pass: "firstUser",
            created_date: null
        };
        const loggedInUser = loginUser(user);
        expect(loggedInUser).to.deep.include(expectedUser)
    });
});