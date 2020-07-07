import React, { Component } from "react";
import Todos from "./component/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Meeting with boss",
        completed: false,
      },
      {
        id: 2,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 3,
        title: "Pick up kids from school",
        completed: false,
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
