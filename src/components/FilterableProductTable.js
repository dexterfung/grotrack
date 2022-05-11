import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js'
import React from 'react';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable 
          products={this.props.products} 
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableProductTable;