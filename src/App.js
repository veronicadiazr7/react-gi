import React, { Component } from "react";
import "./App.css";
import BasicInfo from "./components/BasicInfo";

class App extends React.Component {
  constructor(props) {
    // Calling super class constructor
    super(props);
    // Creating state
    this.state = [
      {
        id: 1,
        name: "John Doe",
        phoneNumber: "777-777-7777",
        birthDate: "6-28-1988",
      },
      {
        id: 2,
        name: "Veronica Doe",
        phoneNumber: "123-456-7890",
        birthDate: "4-19-1999",
      },
      {
        id: 3,
        name: "Melody Doe",
        phoneNumber: "000-000-0000",
        birthDate: "5-12-2134",
      },
    ];
  }

  render() {
    return (
      <div>
        <h1> Client's Personal Information:</h1>
        {/* -----------------  HARD--------------- */}
        {this.state.map((person) => {
          // console.log(person);
          return <BasicInfo info={person} />;
        })}
      </div>
    );
  }
}

export default App;

//https://www.javatpoint.com/react-constructor

//-------------VERY EASY-----------------
/* function App() {
  return (
    <div className="App">
      {
      <div>
        <h1> Client Information: </h1>
        <p> Name: John Doe </p>
        <p> Number: 1234567890</p>
        <p> Birth-Date: 28/06/1988 </p>
      </div> }
    </div>
  );
}
export default App
*/

//--------------- EASY ---------------------
/*
class App extends React.Component {
  constructor(props) {
    // Calling super class constructor
    super(props);
    // Creating state
    this.state = {
      person: {
        id: 1,
        name: "John Doe",
        phoneNumber: "123-456-7890",
        BirthDate: new Date(1988, 6, 28),
        //.map((person) => {person.name}
      },
    };
  }

  render() {
    return <div></div>;
  }
}

export default App;
*/

//-------------------MEDIUM PT1------------------------

/*
class App extends React.Component {
  constructor(props) {
    // Calling super class constructor
    super(props);
    // Creating state
    this.state = {
      person: {
        id: 1,
        name: "John Doe",
        phoneNumber: "123-456-7890",
        birthDate: "6-28-1988",
        //.map((person) => {person.name}
      },
    };
  }

  render() {
    return (
      <div>
        <h1> Client's Personal Information:</h1>
        <p>
          Client 1: <br />
          id: {this.state.person.id}
          <br />
          Name: {this.state.person.name}
          <br />
          Phone Number: {this.state.person.phoneNumber}
          <br />
          Date of Birth: {this.state.person.birthDate}
        </p
      </header>
      </div>
    );
  }
}*/

//-------------------MEDIUM PT2 -------------------------
// render() {
//   return (
//     <div>
//       <BasicInfo info={this.state.person} />
//     </div>
//   );
// }
// }

//https://www.geeksforgeeks.org/react-js-constructor-method/
// https://www.w3schools.com/react/react_state.asp#:~:text=React%20components%20has%20a%20built,%2C%20the%20component%20re%2Drenders.
