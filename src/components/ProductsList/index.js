import './index.css'

const ProductsList = props => {
  const {productDetails} = props
  const {productName, Quantity, price} = productDetails

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{productName}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{Quantity}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{price}</p>
      </div>
    </li>
  )
}

export default ProductsList
