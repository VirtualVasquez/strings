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
  // useEffect(() => {
  //   socket.on('newUserResponse', (data) => setUsers(data));
  //   console.log(users);
  // }, [socket, users]);

  useEffect(() => {
    getActiveUsers();
    console.log("Active users:")
    console.log(activeUsers)
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