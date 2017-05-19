import React from 'react';
import './App.css';

class Box extends React.Component{
  constructor(props){
    super(props); 
    if(window.localStorage[this.props.side] === undefined){
      window.localStorage[this.props.side] = '[]';
    }
    var list = JSON.parse(window.localStorage[this.props.side])   
    this.state = {list: list, newest:"",};
  }
  newThought(event){
    this.setState({newest:event.target.value});
  }
  
  handlePress(event){
  if (event.key === 'Enter'){
  var newList = this.state.list;
   newList.push(this.state.newest)
   this.setState({list:newList, newest: ""});
    event.target.value = "";
  var test = JSON.stringify(this.state.list);
  var likely = JSON.parse(test)
  window.localStorage[this.props.side] = test;

  }
  }
  delete(event, name){
    var list = this.state.list;
    for(let i=0; i<list.length; i++){
      if(list[i] === name){
          list.splice(i,1);
          this.setState({list: list});
          var test = JSON.stringify(this.state.list);
          window.localStorage[this.props.side] = test;
          return;
      }
    }
  }
render(){
  return <div className="card-panel box">
  <h1>{this.props.side}</h1>
  <Enter pressKey={(event) => this.handlePress(event)} side={this.props.side} inputFunction={(event) => this.newThought(event)}/>
  <ul className="collection">
  {this.state.list.map((item, index) => <li className="collection-item lines" key={index} name={item}>{item}<Delete delEvent={(event, name) => this.delete(event, item)} key={index}/>
</li>)}

  </ul>
  </div>
}
}
class Delete extends React.Component{
  render(){
    return <i name={this.props.name} onClick={this.props.delEvent} className="material-icons mini">delete</i>
  }
}
class Enter extends React.Component{
render(){
    return <div>
      <div className="row">

    <div className="input-field col">
      <input id={this.props.side} onChange={this.props.inputFunction} onKeyDown={this.props.pressKey} className="validate text-blue lighten-5"/>

      <label className="active blue-text text-darken-5" htmlFor={this.props.side}>Add {this.props.side}</label>
    </div>
  </div>
  </div>
  }
}

class App extends React.Component{
  render(){
    return <div id="app">
    <br/>
    <Box side="pros" /> <Box side="cons"/>
    </div>
   

  }
}






export default App;
