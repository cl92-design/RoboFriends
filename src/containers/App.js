import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      typeinput: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  handleChange = (event) => {
    this.setState({ typeinput: event.target.value });
  };

  render() {
    const { robots, typeinput } = this.state;
    const matchRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(typeinput.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.handleChange} />
        <Scroll>
          <CardList robots={matchRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
