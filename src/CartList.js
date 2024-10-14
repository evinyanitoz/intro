import React, { Component } from 'react';
import { Button, Table} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'alertifyjs/build/css/alertify.min.css'

class CartList extends Component {

    state={
        toplam:0
      };    
          
 

    render() {
        return (  <div>



<Table>
<thead>
<tr>
 <th>ID</th>
 <th>ÜRÜN ADI</th>
 <th>FİYAT</th>
 <th>ADET</th>

</tr>
</thead>
<tbody>
{this.props.cart1.map(cart=> (
 <tr key={cart.product.id}
>
   <td>{cart.product.categoryId}</td>
   <td>{cart.product.productName}</td>
   <td>{cart.product.unitPrice}</td>
   <td>{cart.quantity}</td>
   <td><Button color="danger" onClick={()=>this.props.RemoveFromCard(cart.product)}>Sil</Button></td>
 
 </tr>
 
))}




</tbody>
</Table>

        </div>
           
        );
    }
}

export default CartList;