import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  UncontrolledDropdown,
  Button,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";

class CartSummary extends Component {

renderEmptycart(){
  return(
  <NavItem>
    <NavLink>SEPET</NavLink>
  </NavItem>
  )
}
  renderSummary() {
    return (
      <UncontrolledDropdown group>
        <Button color="primary">SEPET-{this.props.cart.length}</Button>
        <DropdownToggle caret color="primary" />
        <DropdownMenu>
          <DropdownItem header>Ürünlerim</DropdownItem>
          {this.props.cart.map((cart) => (
            <DropdownItem>
              <Badge
                color="danger"
                onClick={() => this.props.RemoveFromCart(cart.product)}
              >
                X
              </Badge>
              {cart.product.productName}
              <Badge color="primary">{cart.quantity} ADET</Badge>
            </DropdownItem>
          ))}
          <hr></hr>

          <DropdownItem>
            <Link to="sepet">SEPETE GİT</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="form1">FORM1</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="form2">FORM2</Link>
          </DropdownItem>
          
         
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
   /* EĞER PROPTAN GELEN CARTTAKİ ÜRÜN ADETLERİ 0 DAN BÜYÜKSE (?)İŞARTLE RENDERSUMMARY() ÇALIŞSIN AMA EĞER DEĞİLSE(:) İKİ NOKTA KOY VE NE OLACAĞINI YAZ. BİZ BOŞ DİV KOYDUK*/
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptycart()}
       
      </div>
    );
  }

  
}

export default CartSummary;
