import React, { Component } from 'react';

const ChannelMember = props => {
    return(
        <button className="btn user-listing">{props.username}</button>
    )
}

export default ChannelMember;