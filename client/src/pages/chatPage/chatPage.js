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
      const response = await axios.get('api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function messageToDB() {
    if(textMessage && textMessage !== ""){
      try {
        await axios.post('api/messages', {
          user_id: stringsUserID,
          message_text: textMessage,
        });
        await axios.put('api/users/update-last-active', {
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

  function formatDate(date){
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  
    return [year, month, day, 'T05:00:00.000Z'].join('-');
  }


  function messagetoIO(){
    if(textMessage.trim()){
      socket.emit('message', {
        user_id: stringsUserID,
        message_text: textMessage,
        created_date: formatDate(Date.now()), 
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