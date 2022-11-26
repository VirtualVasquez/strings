import React from 'react';

const TextBubble = props => {
    return (
        <div className="textBubble col-md-6">
            <h6>{props.username} Melvin Vasquez</h6>
            <p>{props.text} Happy birthday so-and-so!</p>
        </div>
    );
}

export default TextBubble;