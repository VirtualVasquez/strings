import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatPage.scss';
import TextBubble from '../../components/textBubble';
// import { ChannelName } from '../../components/channelName';
import  ChannelMember  from '../../components/ChannelMember';
import  Nav  from '../../components/nav';
import TextInput from '../../components/textInput';



const ChatPage = props => {

  const {stringsUserID, setStringsUserID, socket} = props;

    const [users, setUsers] = useState(null);
    const [messages, setMessages] = useState([]);
    // const [messages, setMessages] = useState(null);
    const [textMessage, setTextMessage] = useState("");


    async function getUsers() {
        try {
          const response = await axios.get('http://localhost:3001/api/users');
          setUsers(response.data);
        } catch (error) {
          console.error(error);
        }
    }

    async function getMessages(){
      try{
        const response = await axios.get('http://localhost:3001/api/messages');
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    function matchNameToMessage(userID){
      if(users){
        let userBody = users.find(user => user.user_id === userID);
        console.log(userBody);

        if(userBody){
          return userBody.user_name
        }
      }
  }

  // async function pushTextMessage(text) {
  //   try {
  //     await axios.post('http://localhost:3001/api/messages', {
  //       userid: stringsUserID,
  //       text: text,
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   } finally{
  //     console.log(getMessages());
  //   }
  // }

   const pushTextMessage = (e) => {
    e.preventDefault();
    if(textMessage.trim()){
      socket.emit('message', {
        user_id: stringsUserID,
        message_text: textMessage,
        socketID: socket.id
      })
    }
    setTextMessage('');
    console.log(messages)
  }

      useEffect(() => {
        // getUsers();
        // getMessages();
        socket.on('messageResponse', (data) => setMessages([...messages, data]));
      },[socket, messages])




    return (
        <main className="container" id="chat-page-container">
            <Nav 
            setStringsUserID={setStringsUserID}
            />
            <div className="row" id="jumbotron-row">
                {/* <div className="col-md-2 jumbo-cols" id="channels-col">
                    <h2 className="text-center">Channels</h2>
                    <ChannelName />
                </div> */}
                <div className="col-md-2 offset-1 jumbo-cols" id="users-col">
                    <h2 className="text-center">Active</h2>
                    {Array.isArray(users) ? users.map(function(user, index){
                      return(
                        <ChannelMember
                          key={index}
                          username={user.user_name}
                        />
                      )
                    }): null
                    }
                </div>
                <div className="col-md-8 jumbo-cols texts-col">
                    <h2 className="text-center">ChannelName</h2>
                    <div id="channel-history">
                    {Array.isArray(messages) ? messages.map(function(message, index){
                      return(
                        <TextBubble 
                          key={index}
                          messageID={message.message_id}
                          userID={message.user_id}
                          // username={matchNameToMessage(message.user_id)}
                          matchNameToMessage={matchNameToMessage}
                          text={message.message_text}
                          createdDate={message.created_date} 
                        />
                      )
                    }): null
                    }
                    </div>
                    <TextInput 
                      textMessage={textMessage}
                      setTextMessage={setTextMessage}
                      pushTextMessage={pushTextMessage}
                      // getMessages={getMessages}
                    />                                             
                </div>
                {/* <div className="col-md-2 jumbo-cols" id="users-col">
                    <h2 className="text-center">Active</h2>
                    <ActiveUser />
                </div> */}
            </div>
      </main>
    );
}

export default ChatPage;