import React from 'react'
import BacktoHome from './BacktoHome'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

const Cart = () => {

  const data = useSelector(state => state.app)
  console.log(data.cartLists);
  return (
    <div className="container">
      {
        data.cartLists.length ? (
          <>
            <BacktoHome />
            <div className='row pt-3 pb-3'>
              <div className="col-lg-8 col-md-12 overflow-y-auto" style={{ height: "100vh" }}>
                <ul className="list-group list-group-numbered cart-list">
                  {
                    data.cartLists.map((product, key) => <CartItem product={product} key={key} />)
                  }
                </ul>
              </div>
              <div className="col-lg-4 col-md-12">
                <CartSummary />
              </div>

            </div>
          </>
        ) : (
          <>
            <BacktoHome />
            <div className='d-flex justify-content-center'>
              <h2 className='pt-5'>No Item in Cart</h2>
            </div>
          </>
        )
      }

    </div>
  )
}

export default Cart