import React, { Component } from "react";

class TransactionForm extends Component {
  state = {
    // bAccountNo: "",
    // iFsc: "",
    // bName: "",
    // amount: "",

    ...this.returnStateObject(),
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list.length !== this.props.list.length
    )
      this.setState({
        ...this.returnStateObject(),
      });
  }

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        bAccountNo: "",
        iFsc: "",
        bName: "",
        amount: "",
      };
    else {
      return this.props.list[this.props.currentIndex];
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddOrEdit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          name="bAccountNo"
          placeholder="A/c no"
          value={this.state.bAccountNo}
          onChange={this.handleInputChange}
        ></input>
        <br />
        <input
          name="iFsc"
          placeholder="iFsc"
          value={this.state.iFsc}
          onChange={this.handleInputChange}
        ></input>
        <br />
        <input
          name="bName"
          placeholder="Bank Name"
          value={this.state.bName}
          onChange={this.handleInputChange}
        ></input>
        <br />
        <input
          name="amount"
          placeholder="Enter Amount"
          value={this.state.amount}
          onChange={this.handleInputChange}
        ></input>
        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default TransactionForm;
