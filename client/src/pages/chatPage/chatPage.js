import React, { Component } from 'react';
import axios from 'axios';
import './chatPage.scss';
import TextBubble from '../../components/textBubble';
import { ChannelName } from '../../components/channelName';
import { ActiveUser } from '../../components/activeUser';
import  Nav  from '../../components/nav';
import TextInput from '../../components/textInput';



const ChatPage = props => {
    return (
        <main className="container" id="chat-page-container">
            <Nav 
            setStringsUserID={props.setStringsUserID}
            />
            <div className="row" id="jumbotron-row">
                <div className="col-md-2 jumbo-cols" id="channels-col">
                    <h2 className="text-center">Channels</h2>
                    <ChannelName />
                </div>
                <div className="col-md-8 jumbo-cols texts-col">
                    <h2 className="text-center">ChannelName</h2>
                    <div id="channel-history">
                        <TextBubble />
                    </div>
                    <TextInput />                                             
                </div>
                <div className="col-md-2 jumbo-cols" id="users-col">
                    <h2 className="text-center">Active</h2>
                    <ActiveUser />
                </div>
            </div>
      </main>
    );
}

export default ChatPage;