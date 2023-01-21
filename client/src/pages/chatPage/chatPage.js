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

<<<<<<< HEAD
  async function getMessages(){
    try{
      const response = await axios.get('http://localhost:3001/api/messages');
      setMessages(response.data);
    } catch (error) {
      console.error(error);
=======

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
>>>>>>> parent of 2725c2b (message username now renders, alongside created date of message.)
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

  async function messageToDB() {
    try {
      await axios.post('http://localhost:3001/api/messages', {
        userid: stringsUserID,
        text: textMessage,
      });
    } catch (error) {
      console.error(error);
    } 
    // finally{
    //   console.log(getMessages());
    // }
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
    console.log(messages)
  }

<<<<<<< HEAD
  useEffect(() => {
    getMessages();
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  },[socket, messages])
=======
      useEffect(() => {
        // getUsers();
        getMessages();
        socket.on('messageResponse', (data) => setMessages([...messages, data]));
      },[socket, messages])


>>>>>>> parent of 2725c2b (message username now renders, alongside created date of message.)


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
                    />                                             
                </div>
            </div>
      </main>
    );
}

export default ChatPage;