import React from "react";
import axios from "axios";
import "./App.css"
class App extends React.Component{
  state = { advice: ""};

  componentDidMount(){
    console.log('Component did mount');
  }

  render(){
    return(
      
      <h1>App</h1>
    )
  }
}

export default App;