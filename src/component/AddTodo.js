import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);

    this.setState({ title: "" });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          style={{
            padding: "12px",
            border: "1.2px solid #a3a5aa",
            width: "100%",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
          type="text"
          name="title"
          placeholder="Add todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />

        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{
            border: "none",
            background: "#aef9ae",
            padding: "12px",
            width: "100%",
            marginBottom: "1.5rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
      </form>
    );
  }
}

export default AddTodo;
