import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";
class FormDemo2 extends Component {
  state = {
    email: "",
    password: "",
    city: "",
    description: "",
  };
  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + "EMAİL EKLENDİ", 1);
    alertify.success(this.state.password + "ŞİFRE EKLENDİ", 1);
    alertify.success(this.state.city + "ŞEHİR EKLENDİ", 1);
    alertify.success(this.state.description + "AÇIKLAMA EKLENDİ", 1);

  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email"> EMAİL : </Label>
            <Input
              type="email"
              name="email"
              placeholder="Mail adresinizi Giriniz "
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password"> ŞİFRE : </Label>
            <Input
              type="password"
              name="password"
              placeholder="Şifrenizi Giriniz "
              onChange={this.handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description"> AÇIKLAMA : </Label>
            <Input
              type="textarea"
              name="description"
              placeholder="Açıklamayı Giriniz "
              onChange={this.handleChange}
            ></Input>
          </FormGroup>
          
          <FormGroup>
            <Label for="city"> ŞEHİR : </Label>
            <Input
              type="select"
              name="city"    
            >
                <option>ADANA</option>
                <option>MERSİN</option>
                <option>İZMİR</option>
                <option>ANTALYA</option>
            </Input>
          </FormGroup>

          <Button type="submit" color="success">GÖNDER</Button>
        </Form>
      </div>
    );
  }
}

export default FormDemo2;
