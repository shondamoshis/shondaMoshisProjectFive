import React, {Component} from 'react';
import './App.css';
import firebase from './firebase';
import { database } from 'firebase';

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
deleteBtn = (wordId) =>{
  const dbRef = firebase.database().ref()
  dbRef.child(wordId).remove();
}
 
  

  render(){

  return (
    <div className="App">
      <header>
      <h1>Gratitude</h1>
      </header>
      <section className="explanationSection wrapper">
      <div className="explanation">
      <h2>What is Gratitude?</h2>
      <p>The quality of being thankful; readiness to show appreciation for and to return kindness.</p>
      </div>
        <div className="explanation">
      <h2>The Importance of Gratitude</h2>
      <p>Practicing gratitude allows you to focus on the present, appreciate what you have rather than what you do not have, and increases feelings of happiness.</p>
      </div>
      </section>
      <section className="inputSection wrapper">
      <h3>Please share three things you are grateful for:</h3>
      <form action="submit" className="inputForm">
          <input required type="text" value={this.state.inputOne} name="inputOne" onChange={this.handleChange}/>
          <input required type="text" value={this.state.inputTwo} name="inputTwo" onChange={this.handleChange}/>
          <input required type="text" value={this.state.inputThree} name="inputThree" onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleClick}>Add</button>
      </form>
      
  <div className="responseArea">{
    this.state.userInput.map((word)=>{
      return(
        <div className="inputContainer">
          
          <p key={word.id}>{word.item}</p><button onClick={()=>this.deleteBtn(word.id)} className="deleteBtn">X</button>
          
        </div>
      )
    })
    }</div>
      </section>
      <footer><p>Designed by <a href="www.shondamoshis.com">Shonda Moshis</a></p></footer>
    
    </div>
  );
}
}
export default App;
