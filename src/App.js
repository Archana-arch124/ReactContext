import React, { Component } from 'react';
import './App.css';
// first we will make a new context
const MyContext = React.createContext();

// Then create a provider Component
class MyProvider extends Component {
  state = {
    name: 'Archana Raj Gowda',
    age: 20,
    education: 'BE,CSE',
    techSkills: 'Java,JS,HTML,CSS,ReactJS',
    location: 'Bangalore'
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = () => (
  <div className="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <React.Fragment>
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <p>Education: {context.state.education}</p>
              <p>TechSkills: {context.state.techSkills}</p>
              <p>Location: {context.state.location}</p>
              <button onClick={context.growAYearOlder} style={{ backgroundColor: 'pink' }}>BIRTHDAY</button>
            </React.Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="main">
          <div className="data">
            <b>*DETAILS OF ARCHANA*</b>
            <Family />
          </div>
        </div>
      </MyProvider>
    );
  }
}


export default App;