import React, {Component} from 'react';
import './App.css';
import firebase from './firebase';

class App extends Component {
  constructor(){
    super()
    this.state = {
    userInput:[],
    inputOne:'',
    inputTwo:'',
    inputThree:''
  }
}

componentDidMount(){
  const dbRef = firebase.database().ref();

  dbRef.on('value',(response)=>{

  const newState = [];
  const data = response.val();
  
  for(let key in data){
    newState.push({item:data[key], id:key})
  }
  this.setState({
    userInput:newState
  })
  })

}

handleChange = (event)=>{
this.setState({
  [event.target.name]:event.target.value
})
}
handleClick = (e)=>{
  e.preventDefault();

  const dbRef = firebase.database().ref()
  
  dbRef.push(this.state.inputOne)
  dbRef.push(this.state.inputTwo)
  dbRef.push(this.state.inputThree)

  this.setState({
    inputOne:'',
    inputTwo:'',
    inputThree:''
  })
}
 
  

  render(){
  return (
    <div className="App wrapper">
      <h1>Gratitude</h1>
      <h2>What is Gratitude?</h2>
      <p>The quality of being thankful; readiness to show appreciation for and to return kindness.*</p>
      <h2>Why is it important to practice Gratitude?</h2>
      <p> People who regularly practice gratitude by taking time to notice and reflect upon the things they're thankful for experience more positive emotions, feel more alive, sleep better, express more compassion and kindness, and even have stronger immune systems.**</p>
      <h3>Please share three things you are grateful for:</h3>
      <input type="text" value={this.state.inputOne} name="inputOne" onChange={this.handleChange}/>
      <input type="text" value={this.state.inputTwo} name="inputTwo" onChange={this.handleChange}/>
      <input type="text" value={this.state.inputThree} name="inputThree" onChange={this.handleChange}/>
      <button onClick={this.handleClick}>Add</button>
  <ul>{
    this.state.userInput.map((word)=>{
      return(
        <li key={word.id}>
          <p>{word.item}</p>
        </li>
      )
    })
    }</ul>
      <footer><p>Designed by <a href="www.shondamoshis.com">Shonda Moshis</a></p></footer>
    
    </div>
  );
}
}
export default App;
