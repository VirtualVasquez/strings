import React, { useState, useEffect } from 'react';
import ChannelMember from './ChannelMember';
import axios from 'axios';


const ActiveUsersBar = ({ socket }) => {
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

    socket.on('update_user_activity', (updateActiveUser) => {
      let match = activeUsers.some(singleUser => singleUser.user_id === updateActiveUser.user_id && singleUser.user_name === updateActiveUser.user_name);
      if(!match){
        setActiveUsers(prevState => [...prevState, updateActiveUser]);
      }
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