import React, {Component, createRef} from 'react';
import firebase from './firebase';

class Form extends Component{
    scrollDiv = createRef();
    constructor(){
        super();
        this.state = {
            inputOne: '',
            inputTwo: '',
            inputThree: ''
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    handleSubmit = (e) => {
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
    
    scrollSmoothHandler = () => {
        this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    };
        
   

    render() {
        return (
            <form ref={this.scrollDiv} onSubmit={this.handleSubmit} className="inputForm">
                <input required type="text" value={this.state.inputOne} name="inputOne" onChange={this.handleChange} />
                <input required type="text" value={this.state.inputTwo} name="inputTwo" onChange={this.handleChange} />
                <input required type="text" value={this.state.inputThree} name="inputThree" onChange={this.handleChange} />
                <button type="submit" onSubmit={this.handleSubmit} onClick={this.scrollSmoothHandler}>Add</button>
            </form>
        )
    }
}

export default Form;