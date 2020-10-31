import './App.css';
import React from 'react'

class App extends React.Component {

  state = {
    title: "loading..."
  }

  async componentDidMount() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let resJson = await res.json()
    this.setState({title: resJson.title})
  }
  render(){
    return (
      <div className="App">
        <h1>This is a second sample app to test github pages</h1>
        <h2>Some loaded stuff: {this.state.title}</h2>
      </div>
    );
  }
}
export default App;