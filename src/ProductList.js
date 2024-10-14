import React, { Component } from "react";
import { Table} from "reactstrap";


class ProductList extends Component {



  
  render() {
    return (
      <div>
        <h6>
          {this.props.degisecek} - {this.props.deger.aciklama}
        </h6>

        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ÜRÜN ADI</th>
              <th>FİYAT</th>
              <th>STOK ADEDİ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr
             >
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><button onClick={()=>this.props.addToCard(product)}type="button" class="btn btn-success btn-sm ">SEPETE EKLE</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProductList;
