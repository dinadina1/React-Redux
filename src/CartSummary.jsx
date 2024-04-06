import React from 'react'
import { useSelector } from 'react-redux';

const CartSummary = () => {

  const data = useSelector(state => state.app);

  return (
    <>
      <div className="card product-border mt-2" >
        <div className="card-body">
          <h5 className="card-title mb-5 text-body-secondary">Cart Summary</h5>
          <div className="d-flex justify-content-between mb-2">
            <h5 className='card-subtitle mb-2 text-body-secondary'>Total Quantity</h5>
            <h5 className='card-subtitle mb-2 text-body-secondary'>{(data.totalQuantity).toLocaleString()}</h5>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <h5 className='card-subtitle mb-2 text-body-secondary'>Sub-Total</h5>
            <h5 className='card-subtitle mb-2 text-body-secondary'>&#8377; {(data.totalPrice).toLocaleString()}.00</h5>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <h6 className='card-subtitle mb-2 text-body-secondary'>Shipping</h6>
            {
              data.totalPrice < 500 ?
                <h6 className='card-subtitle mb-2 text-body-secondary'>Free</h6> :
                <h6 className='card-subtitle mb-2 text-body-secondary'>&#8377; {data.shippingFee}.00</h6>
            }
          </div>

          <div className="d-flex justify-content-between mb-2">
            <h5 className='card-subtitle mb-2 text-body-secondary'>Total Price</h5>
            <h5 className='card-subtitle mb-2 text-body-secondary'>&#8377; {(data.totalPrice + data.shippingFee).toLocaleString()}.00</h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartSummary