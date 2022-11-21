import React, { Component } from 'react';
import axios from 'axios';
import './chatPage.css';
import TextBubble from '../../components/TextBubble';
import { ChannelName } from '../../components/ChannelName';
import { Nav } from '../../components/Nav';
import TextInput from '../../components/TextInput';



export class ChatPage extends Component {
  constructor(props){
      super(props);
      this.state = {
          userMessage:"",
          textMessages:[]
      };
      this.handleChange = this.handleChange.bind(this);
      this.pushMessage = this.pushMessage.bind(this);

  }

  handleChange(event){
      this.setState({
          userMessage: event.target.value
      })
  }

  retrieveMessages(){
    axios.get('api/Messages/GetMessages').then(result => {
        const response = result.data;
        this.setState({
            textMessages: response
        })
        console.log(this.state.textMessages);
    })
  }

  pushMessage(){

    if(this.state.userMessage){
        axios.post('api/Messages/addMessage',{
            text: this.state.userMessage,
            username: "author"
        })
        .then(function (response){
            console.log(response);
        })
        .catch(function(error){
            console.log(error)
        })
    }

      this.setState({userMessage:""})
  }
  
  renderMessages(){
      return this.state.textMessages.map((item) => (
          <TextBubble
            key={item.id}
            username={item.username}
            text={item.text}
          />
      ))
  }

  componentDidMount(){
      this.retrieveMessages();
  }
  componentDidUpdate(){
      this.retrieveMessages();
  }

  render () {

    return (
        <div className="container" id="chat-page-container">

            <div className="row" id="nav-row">
                <div className="col-6">
                    <h1>uText</h1>
                </div>
                <div className="col-6" id="logout-column">
                    <button className="btn btn-danger">Logout</button>
                </div>
            </div>

            <div className="row" id="jumbotron-row">
                <div 
                    className="col-md-2 jumbo-cols" id="channels-col"
                >
                    <h2 className="text-center">Channels</h2>
                    <p>hello</p>
                    <p>hello</p>
                    <p>hello</p>
                </div>
                <div className="col-md-8 jumbo-cols" id="texts-col">
                    <h2 className="text-center">
                        CHANNEL NAME
                    </h2>
                    <div id="channel-history">
                        {this.renderMessages()}
                    </div>
                    <TextInput
                        handleChange={this.handleChange}
                        pushMessage={this.pushMessage}
                        userMessage={this.state.userMessage}
                    />                                                 
                </div>
                <div className="col-md-2 jumbo-cols" id="users-col">
                    <h2 className="text-center">Active</h2>
                    <p>hello</p>
                </div>
            </div>
      </div>
    );
  }
}
