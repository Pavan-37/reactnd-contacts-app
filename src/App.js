import React, {Component} from "react";
import ReactDOM from "react-dom";
import ListContacts from "./ListContacts";

const contacts = [
    {
      "id": "karen",
      "name": "Karen Isgrigg",
      "handle": "karen_isgrigg",
      "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
      "id": "richard",
      "name": "Richard Kalehoff",
      "handle": "richardkalehoff",
      "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "handle": "tylermcginnis",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }
   ];

class App extends Component{
    render(){
        return(
            <ListContacts contacts={contacts} />
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;