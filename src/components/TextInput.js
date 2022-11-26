import React from 'react';

    const TextInput = props => {

    return (
        <div id="text-form">
                <input 
                    type="message" 
                    className="col-md-10"
                    placeholder="Write your message here"
                    value={props.userMessage}
                    onChange={props.handleChange}
                    ></input>
                <button 
                    type="submit"
                    onClick={props.pushMessage}
                    className="btn btn-primary col-md-2"
                > 
                    Send
                </button>
        </div>
    );
        
}

export default TextInput;