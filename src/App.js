import React, { Component, useState } from 'react';
import './App.css';
import Modal from './Components/portal';
import Portal from './Components/portal';
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

function Person() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="person">
      <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p>Age: {context.state.age}</p>
            <p>Name: {context.state.name}</p>
            <p>Education: {context.state.education}</p>
            <p>TechSkills: {context.state.techSkills}</p>
            <p>Location: {context.state.location}</p>
            <button onClick={context.growAYearOlder} style={{ backgroundColor: 'pink' }}>BIRTHDAY</button>
            <button onClick={() => setIsOpen(true)} style={{ marginLeft: "30px", backgroundColor: 'pink' }}>Wishes</button>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <p> Happy Birthday Archana 🎊🎂</p>
            </Modal>
            <Portal />
          </React.Fragment>
        )}
      </MyContext.Consumer>
    </div>
  )
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