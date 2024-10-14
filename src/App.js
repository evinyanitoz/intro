//import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Col, Container, Row } from "reactstrap";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import CartSummary from "./CartSummary";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

class App extends Component {
  state = {
    degistirilcek: "aa",
    products: [],
    cart: [],
    deneme: "geldi",
    userName: "",
  };

  onChangeHandler = (event) => {
    this.setState({ userName: event.target.value });
  };

  degis = (product) => {
    this.setState({ degistirilcek: product.categoryName });
    this.getProducts(product.id);
  };

  addToCard = (product) => {
    let newCart = this.state.cart;
    const addedItem = newCart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 2 });
      this.setState({ cart: newCart });
      alertify.success(product.productName + "SEPETE EKLENDİ", 1);
    }
  };

  RemoveFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    //nesne olmadan prop tanımlamak
    let tittleCategori = "kategori başlık";
    let tittleProduct = "Ürün başlık";
    let tittleNav = "Nav başlık";
    //nesne ile prop tanımlamak
    let nesneileyaparsakKategori = {
      baslik: "KATEGORİ BAŞLIĞI",
      aciklama: "KATEGORİ AÇIKLAMASI",
    };

    let nesneileyaparsakProduct = {
      baslik: "ÜRÜN BAŞLIĞI",
      aciklama: "ÜRÜN AÇIKLAMASI",
    };

    return (
      <div>
        <Container>
          <Row>
            <Navi
              tittle={tittleNav}
              addToCard={this.addToCard}
              cart1={this.state.cart}
              RemoveFromCart={this.RemoveFromCart}
              deneme={this.state.deneme}
            ></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                degisecek={this.state.degistirilcek}
                degisfonksiyon={this.degis}
                deger={nesneileyaparsakKategori}
                kategori={this.state.kategori}
                get={this.getCategories}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <ProductList
                      degisecek={this.state.degistirilcek}
                      get={this.getProducts}
                      products={this.state.products}
                      deger={nesneileyaparsakProduct}
                      addToCard={this.addToCard}
                      cart={this.state.cart}
                    ></ProductList>
                  }
                ></Route>
                <Route
                  exact
                  path="/sepet"
                  element={
                    <CartList
                      cart1={this.state.cart}
                      RemoveFromCard={this.RemoveFromCart}
                    ></CartList>
                  }
                ></Route>

                <Route
                  exact
                  path="/form1"
                  element={
                    <FormDemo1
                      FormState={this.state.userName}
                      FormFonk={this.onChangeHandler}
                    ></FormDemo1>
                  }
                ></Route>
                <Route
                  exact
                  path="/form2"
                  element={<FormDemo2></FormDemo2>}
                ></Route>
                <Route component={NotFound}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
