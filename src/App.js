import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "farouk", age: 30, belt: "white",id: 1 },
      { name: "mouez", age: 20, belt: "blue", id: 2 },
      { name: "sefien", age: 25, belt: "red", id: 3 }
    ]
  }

  addNinja = (ninja) => {
    console.log(ninja);
    let ninjas = [...this.state.ninjas, ninja]
    ninja.id = Math.random();
    this.setState({
       ninjas:ninjas
    })  
  }

deleteNinja = (id) => {
console.log(id);
let ninjas = this.state.ninjas.filter(ninja => {
  return ninja.id !== id 
})
this.setState({
  ninjas:ninjas
})
}

componentDidMount(){
  console.log('component mounted');
}

componentDidUpdate(prevProps, prevState){
  console.log('component updated');
  console.log(prevProps, prevState);
  
  
  

}

  render() {
    return (
      <div>
        <h1>Hello {this.state.name} this is my first React app</h1>
        <h2>only Ninjas above 20 Years old will be shown</h2>
        <Ninjas deleteNinja = {this.deleteNinja} ninjas= {this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja} />
      </div>
    );
  }
}


export default App;