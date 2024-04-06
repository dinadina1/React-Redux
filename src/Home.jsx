import React from 'react'
import Banner from './Banner'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

const Home = () => {

  const data = useSelector((state) => state.app)

  return (
    <>
      <Banner />
      {
        <div className="container">
          <div className="row row-gap-3 pt-3 pb-3">
            {
              data.product.map((product) => <ProductCard product={product} key={product.id} />)
            }
          </div>
        </div>
      }
      <Footer />
    </>
  )
}

export default Home