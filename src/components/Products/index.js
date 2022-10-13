import {Component} from 'react'

import ProductsList from '../ProductsList'

import './index.css'

const initialProductsList = [
  {
    productName: 'Moto G5',
    Quantity: 2,
    price: 13000,
  },
  {
    productName: 'Dell Inspiron',
    Quantity: 3,
    price: 6000,
  },
  {
    productName: 'Epson',
    Quantity: 1,
    price: 9500,
  },
]

class Products extends Component {
  state = {
    productsList: initialProductsList,
    productName: '',
    Quantity: '',
    price: '',
    error: 'please enter the field',
  }

  onAddProduct = event => {
    event.preventDefault()
    const {productName, Quantity, price, error} = this.state
    alert('Are you sure you want to view the details?')

    const newContact = {
      productName,
      Quantity,
      price,
    }

    return this.setState(prevState => ({
      productsList: [...prevState.productsList, newContact],
      productName: '',
      Quantity: '',
      price: '',
    }))
  }

  onChangeProductName = event => {
    this.setState({productName: event.target.value})
  }

  onChangeQuantity = event => {
    this.setState({Quantity: event.target.value})
  }

  onChangePrice = event => {
    this.setState({price: event.target.value})
  }

  render() {
    const {productName, Quantity, price, productsList} = this.state

    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Add Products</h1>
          <form className="product-form-container" onSubmit={this.onAddProduct}>
            <input
              value={productName}
              onChange={this.onChangeProductName}
              className="input"
              placeholder="Enter Product Name"
            />
            <input
              className="input"
              value={Quantity}
              onChange={this.onChangeQuantity}
              placeholder="Enter Quantity"
            />
            <input
              className="input"
              value={price}
              onChange={this.onChangePrice}
              placeholder="Enter price"
            />
            <div>
              <button type="submit" className="button">
                Submit
              </button>
            </div>
            <h1>ProductsLists</h1>
          </form>
          <ul className="product-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Product Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Quantity</p>
              <hr className="separator2" />
              <p className="table-header-cell">Price</p>
            </li>
            {productsList.map(each => (
              <ProductsList key={each.id} productDetails={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Products
