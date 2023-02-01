import React, { Component } from "react";
import TodoItems from "./todoItems/todoItems";
import AddItem from "./AddItem/AddItem";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "Hamza", age: 22 },
      { id: 2, name: "Mohamed", age: 23 },
      { id: 3, name: "Abdo", age: 24 },
    ],
  };

  deleteItem = (id) => {
    var items = this.state.items;
    var i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items });
  };

  addItem = (item) => {
    item.id = Math.random();
    var items = this.state.items;
    items.push(item);
    this.setState({ items: items }); // or this.setState({items})
  };

  render() {
    return (
      <div className="App container">
        <h1 className="text-center">To Do List </h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
