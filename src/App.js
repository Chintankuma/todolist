import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from "uuid"; //for create unic id everytime
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

//showing vs code github setup
class App extends Component {
  state = {
    items: [
      // { id: 1, title: "wake up" },
      // { id: 2, title: "morning break fast" },
    ],
    id: uuidv4(),
    item: "", //ifs for input item first leer
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handle change");
    const item = e.target.value;
    // console.log(item);
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItem = [...this.state.item, newItem];
    // console.log(updatedItem);
    this.setState(
      {
        items: updatedItem,
        id: uuidv4(),
        item: "",
        editItem: false,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  clearList = () => {
    console.log("clear list");
  };
  handleDelete = (id) => {
    console.log(` handle delete ${id} `);
  };
  handleEdit = (id) => {
    console.log(`handle Edit ${id}`);
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
