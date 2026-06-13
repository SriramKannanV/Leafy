import React from 'react'
import { SingleProductCard } from '../components/SingleProductCard'
import { ProductCard } from '../components/ProductCard'
import Navbar from '../components/Navbar'
import { plantProducts } from "../data/Product"
import { useParams, Link } from 'react-router'
import Footer from '../components/Footer'

const SingleProducts = () => {

  const {id} = useParams();
  const product = plantProducts.find((item) => item.id === parseInt(id));

  return (
    <div>
        <Navbar />

        <SingleProductCard key={id} item={product} />

        <div className='md:px-30 px-4 mt-16'>
          <h1 className='text-Dark-Green text-3xl font-medium mb-6 font-heading'>More Plants</h1>

          <div className='grid md:grid-cols-4 xl:grid-cols-5'>
            {plantProducts.slice(0, 5).map((plant) => {
              return <ProductCard key={plant.id} item={plant} />
            })}
          </div>

          <div className="flex justify-center">
            <button className="bg-Green text-Dark-Green font-bold py-2 px-6 rounded-md cursor-pointer shadow-Custom hover:scale-110
                            hover:shadow-Custom-hover transition-all"><Link to="/products">View All</Link></button>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default SingleProducts
