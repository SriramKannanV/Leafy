import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from 'react-router'
import { plantProducts } from '../data/Product'
import { ProductCard } from '../components/ProductCard'

const Products = () => {
  return (
    <div>
      <Navbar />

      <div className='md:px-30 px-4 mt-2'>
        <p className='text-sm'><Link to="/" className='text-Green underline cursor-pointer'>Home</Link> / Store</p>
        <h1 className='text-Dark-Green text-3xl font-medium mt-4 font-heading'>Store</h1>

        <div className='grid md:grid-cols-4 xl:grid-cols-5 mt-6'>
          {plantProducts.map((plant) => {
            return <ProductCard key={plant.id} item={plant} />
          })}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Products
