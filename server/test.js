const mocha = require('mocha');
const chai = require('chai');
const { expect } = require('chai');
const { createMessage } = require('./message_model');
const { login } = require('./user_model');


describe('CreateMessage', () => {
    it('should push a message to the database', async() => {
        const message = {
            user_id: 1,
            message_text: "Mocha Text Message"
        };
        const expectedMessage = {
            user_id: 1,
            message_text: "Mocha Text Message"
        }
        const createdMessage = await createMessage(message);
        // console.log(expectedMessage);
        console.log(createdMessage);
        expect(expectedMessage.user_id).to.equal(createdMessage.user_id);
    });
});

// describe('User login', () => {
//     it('should login a user with correct credentials', async() => {
//         const user = {
//             user_name: "firstUser",
//             user_pass: "firstUser",
//         };
//         const expectedUser = {
//             user_id: 1,
//             user_name: "firstUser",
//             user_pass: "firstUser",
//             created_date: new Date(Date.parse("2022-12-10T05:00:00.000Z"))
//         };
//         const loggedInUser = await login(user);
//         expect(loggedInUser.user_id).to.equal(expectedUser.user_id);
//         expect(loggedInUser.user_name).to.equal(expectedUser.user_name);
//         expect(loggedInUser.user_pass).to.equal(expectedUser.user_pass);
//     });
// });