import React, { useState, useEffect } from 'react';
import ChannelMember from './ChannelMember';

const ActiveUsersBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
    console.log(users);
  }, [socket, users]);

  return (
    <div className="col-md-2 offset-1 jumbo-cols" id="users-col">
      <h2 className="text-center">Active</h2>
        {users.map(function(user, index){
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