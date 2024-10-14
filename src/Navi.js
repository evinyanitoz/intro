import React, { Component } from 'react';
import CartSummary from './CartSummary';

class Navi extends Component {
  render() {
    return (
      <div>   
<CartSummary cart={this.props.cart1} RemoveFromCart={this.props.RemoveFromCart} ></CartSummary>

      </div>
    );
  }
}

export default Navi;