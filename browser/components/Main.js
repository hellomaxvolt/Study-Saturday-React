import React, { Component } from "react";
import axios from "axios";
import StudentList from "./StudentList";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsArray: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await axios.get("/student");

      const students = res.data;

      this.setState({ studentsArray: students });
    } catch (error) {
      console.log("ERROR");
    }
  }

  render() {
    return (
      <div id="container">
        <h2>Here is the list of students:</h2>
        <StudentList students={this.state.studentsArray} />
      </div>
    );
  }
}
