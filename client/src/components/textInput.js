import React from 'react';

    const TextInput = props => {
        const { textMessage, setTextMessage, pushTextMessage} = props;


    return (
        <div id="text-form">
                <input 
                    type="message" 
                    className="col-md-10"
                    placeholder="Write your message here"
                    value={textMessage}
                    onChange={e => setTextMessage(e.target.value)}
                    ></input>
                 <button 
                    type="submit"
                    onClick={pushTextMessage}
                    className="btn btn-primary col-md-2"
                > 
                    Send
                </button>
        </div>
    );
        
}

export default TextInput;