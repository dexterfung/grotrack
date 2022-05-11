import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js'
import React from 'react';

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;