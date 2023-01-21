import React from 'react';

const TextBubble = props => {
    const { messageID, userID, text, createdDate, username } = props;

    

    return (
            <div 
            className=
            {`textBubble 
            col-md-6 
            // ${localStorage.getItem("strings_user_id") == userID ? 'offset-md-6' : null}
            `}
            > 
                {/* <h6>{username}</h6> */}
                <h6>{userID}</h6>
                <p>{text}</p>
            </div>
    );
}

export default TextBubble;