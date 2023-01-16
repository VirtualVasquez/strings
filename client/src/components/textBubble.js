import React, {useEffect, useState} from 'react';

import axios from 'axios';


const TextBubble = props => {
    const [username, setUsername] = useState(null);
    const [formattedDate, setFormattedDate] = useState(null);
    const { messageID, userID, text, createdDate} = props;

    function formatDate(){
        let date = new Date(createdDate);
        setFormattedDate(date.toLocaleDateString());
    }


    async function getUsername(id) {
        try { 
          const response = await axios.get(`http://localhost:3001/api/user/${id}`);
          setUsername(response.data[0].user_name);
        } catch (error) {
          console.error(error);
        }
    }

      useEffect(() => {
        getUsername(userID);
        formatDate();
      },[])


    return (
            <div 
            className=
            {`textBubble 
            col-md-6 
            ${localStorage.getItem("strings_user_id") == userID ? 'offset-md-6' : null}
            `}
            > 
                <h6>{username} | {formattedDate}</h6>
                <p>{text}</p>
            </div>
    );
}

export default TextBubble;