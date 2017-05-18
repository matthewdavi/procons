import React, { Component } from 'react';
import './App.css';



class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = {list: [], newest:""};
  }
  newThought(event){
    this.setState({newest:event.target.value});
    console.log(this.state.newest);
  }
  addToList(event){
   var newList = this.state.list;
   newList.push(this.state.newest)
   this.setState({list:newList});
  }
  handlePress(event){
  if (event.key === 'Enter'){
  var newList = this.state.list;
   newList.push(this.state.newest)
   this.setState({list:newList, newest: ""});
    event.target.value = "";
  }
  }
render(){
  return <div className="card-panel box">
  <h1>{this.props.side}</h1>
  <Enter pressKey={(event) => this.handlePress(event)} tempinput={this.state.newest} side={this.props.side} inputFunction={(event) => this.newThought(event)} buttonFunction={(event) => this.addToList(event)}/>
  <ul>
  {this.state.list.map((item) => <li className="item">{item}</li>)}

  </ul>
  </div>
}
}
class Enter extends React.Component{
  constructor(props){
    super(props);
    this.state = {tempinput: this.props.tempinput};
  }
  buttonPress(event){
    this.props.buttonFunction;
}
  typeWords(event){
    this.props.inputFunction;
    this.setState({tempinput:event.target.value});
  } 
  render(){
    return <div>
      <div className="row">

    <div className="input-field col">
            <i className="tiny material-icons prefix">mode_edit</i>

      <input id={this.props.side} onChange={this.props.inputFunction} onKeyDown={this.props.pressKey} className="validate"/>
      <label className="active" for={this.props.side}>Enter {this.props.side}</label>
    </div>
  </div>
  </div>
  }
}

class App extends React.Component{
  render(){
    return <div id="app">

    <Box side="pros" /> <Box side="cons"/>
    
    </div>

  }
}




export default App;
