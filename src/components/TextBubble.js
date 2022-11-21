import React from 'react';

const TextBubble = props => {
    return (
        <div className="textBubble">
            <h6>{props.username}</h6>
            <p>{props.text}</p>
        </div>
    );
}

export default TextBubble;