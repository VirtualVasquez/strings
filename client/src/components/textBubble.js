import React, {useEffect, useState} from 'react';

import axios from 'axios';


const TextBubble = props => {
    const [username, setUsername] = useState(null);
    const { messageID, userID, text, createdDate} = props;

    async function getUsername(id) {
        try { 
          const response = await axios.get(`api/user/${id}`);
          setUsername(response.data[0].user_name);
        } catch (error) {
          console.error(error);
        }
    }

      useEffect(() => {
        getUsername(userID);
      },[userID])

    return (
            <div
            key={messageID} 
            className=
            {`textBubble 
            col-md-6 
            ${parseInt(localStorage.getItem("strings_user_id")) === userID ? 'offset-md-6' : null}
            `}
            > 
                <h6>{username} | {createdDate.substr(0,10)}</h6>
                <p>{text}</p>
            </div>
    );
}

export default TextBubble;