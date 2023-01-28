import React, { useState, useEffect } from 'react';
import ChannelMember from './ChannelMember';
import axios from 'axios';


const ActiveUsersBar = ({ socket }) => {
  // const [users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState([]);

  async function getActiveUsers(){
    try{
      const response = await axios.get('http://localhost:3001/api/users/active');
      setActiveUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getActiveUsers();
    console.log("Active users:")
    console.log(activeUsers)

// let obj = {id: 1, name: "John"};
// let arr = [{id: 1, name: "Jane"}, {id: 2, name: "Bob"}];

// let match = arr.some(element => element.id === obj.id && element.name === obj.name);
// console.log(match); // Output: false


    socket.on('update_user_activity', (updateActiveUser) => {
      console.log(updateActiveUser); //WORKING!
      // check if activer users contains the new active user
      console.log(user)
        // if it doesn't then add it to active users
        // if it does then do nothing
    });
    console.log(activeUsers);
  }, []);

  return (
    <div className="col-md-2 offset-1 jumbo-cols" id="users-col">
      <h2 className="text-center">Active</h2>
        {activeUsers.map(function(user, index){
            return(
                <ChannelMember
                  key={index}
                  username={user.user_name}
                />
            )
        })}
    </div>
  );
};

export default ActiveUsersBar;