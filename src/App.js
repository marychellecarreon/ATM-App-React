import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Bank extends Component {
  constructor(props) {
    super(props);
    this.state = {current_money: 0};
    this.deposit = this.deposit.bind(this);
    this.withdraw = this.withdraw.bind(this);
  }

  deposit(e) {
   e.preventDefault();
   var money = parseInt(this.refs.money.value);
   this.setState({current_money: this.state.current_money + money})
 }

  withdraw(e) {
    e.preventDefault();
    var money = parseInt(this.refs.money.value);
    this.setState({current_money: this.state.current_money - money})
  }

  render() {
    return (
      <div className="container">
      <form>
       <input className="form-control" type="text" placeholder="Enter Amount" ref="money"/>
       <br />
       <br />
       <button className="btn btn-primary-lg" onClick={this.deposit}>DEPOSIT</button> <hr />
       <button className="btn btn-primary-lg" onClick={this.withdraw}>WITHDRAW</button>
     </form>
      <p> Your current balance is ${this.state.current_money}</p>
      </div>
    );
    }
  }



export default Bank;
