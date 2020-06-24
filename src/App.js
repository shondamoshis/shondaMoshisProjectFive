import React, {Component} from 'react';
import './App.css';
import firebase from './firebase';
import Form from './Form';

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

      <Form />
      
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
      <footer>

        <p>Designed by <a href="http://www.shondamoshis.com">Shonda Moshis</a></p>

      </footer>
    
    </div>
  );
}
}
export default App;
