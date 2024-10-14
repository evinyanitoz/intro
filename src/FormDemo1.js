import React, { Component } from "react";


class FormDemo1 extends Component {
  state = {
    userName: "",
    city: "",
  };

  onChangeHandler = (event) => {
    //this.setState({ userName: event.target.value });

    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h3 color="succes"> USER NAME : </h3>
          <input
            name="userName"
            onChange={this.onChangeHandler}
            type="text"
          ></input>
          <h3> User name is {this.state.userName} </h3>

          <h3> City : </h3>
          <input
            name="city"
            onChange={this.onChangeHandler}
            type="text"
          ></input>
          <h3> User name is {this.state.city} </h3>
          <input color="success" type="submit" value="Save"></input>
        </form>
      </div>
    );
  }
}

export default FormDemo1;
