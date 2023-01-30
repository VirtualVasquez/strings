import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './chatPage.scss';
import TextBubble from '../../components/textBubble';
import  Nav  from '../../components/nav';
import TextInput from '../../components/textInput';
import ActiveUsersBar from '../../components/activeUsersBar';



const ChatPage = props => {

  const {stringsUserID, setStringsUserID, socket} = props;

  const [messages, setMessages] = useState([]);
  const [textMessage, setTextMessage] = useState("");    

  async function getMessages(){
    try{
      const response = await axios.get('http://localhost:3001/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function messageToDB() {
    if(textMessage && textMessage !== ""){
      try {
        await axios.post('http://localhost:3001/api/messages', {
          user_id: stringsUserID,
          message_text: textMessage,
        });
        await axios.put('http://localhost:3001/api/users/update-last-active', {
          user_id: stringsUserID
        });
      } catch (error) {
        console.error(error);
      } 
    }
  }

  function scrollToBottom(){
        const channelDiv = document.getElementById('channel-history');
        const channelHeight = channelDiv.scrollHeight;
        channelDiv.scrollTop = channelHeight;
  }


  function messagetoIO(){
    if(textMessage.trim()){
      socket.emit('message', {
        user_id: stringsUserID,
        message_text: textMessage,
        socketID: socket.id
      })
    }
  }

  const pushTextMessage = (e) => {
    e.preventDefault();
    messageToDB();
    messagetoIO();
    setTextMessage('');
    scrollToBottom();
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }

  useEffect(() => {
    getMessages();
  },[])


    return (
        <main className="container" id="chat-page-container">
            <Nav 
            setStringsUserID={setStringsUserID}
            />
            <div className="row" id="jumbotron-row">
                <ActiveUsersBar 
                  socket={socket}
                />
                <div className="col-md-8 jumbo-cols texts-col">
                    <h2 className="text-center">The Only Channel</h2>
                    <div id="channel-history">
                    {Array.isArray(messages) ? messages.map(function(message, index){
                      return(
                        <TextBubble 
                          key={index}
                          messageID={message.message_id}
                          userID={message.user_id}
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
                    />                                             
                </div>
            </div>
      </main>
    );
}

export default ChatPage;