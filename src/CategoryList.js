import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";


class CategoryList extends Component {


  state={
    kategori:[]
  }
      componentDidMount() { this.getCategories(); }
  
    
      getCategories = () => {
    
    
    
        fetch("http://localhost:3000/categories")
          .then((Response) => Response.json())
          .then((data) => this.setState({kategori: data }));
      };
    
  
  

  render() {




    return (  
      <div>
        <h6>{this.props.deger.baslik}</h6>

        <ListGroup >

          {this.state.kategori.map((category) => (
      

            <ListGroupItem active={category.categoryName===this.props.degisecek?true:false}
              onClick={() => this.props.degisfonksiyon(category)}
              key={category.id}
             
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h3>{this.props.degisecek}</h3> */} 
      </div>
    );
  }
}

export default CategoryList;
