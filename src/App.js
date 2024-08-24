import React from "react";
import axios from "axios";
import "./App.css"
class App extends React.Component{
  state = { advice: ""};

  componentDidMount(){
    this.fetchAdvice();
  }

  fetchAdvice = () =>{
    axios.get('https://api.adviceslip.com/advice')
    .then((response) => {
      const { advice } = response.data.slip;
      this.setState({ advice });
    })
    .catch((error) =>{
      console.log(error)
    })
  }
  render(){
    const { advice } = this.state;
    return(
      
      <h1>{ advice}</h1>
      
    )
  }
}

export default App;