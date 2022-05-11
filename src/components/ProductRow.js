import React from 'react';

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.name;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;