import Navbar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import { useState } from "react"
import { plantProducts } from "../data/Product.js"
import { ProductCard } from "../components/ProductCard.jsx"
import { Link } from "react-router-dom"

const Home = () => {

  return (
    <div>
      <Navbar />
 
        <div className="grid md:grid-cols-2 md:px-30 px-4 pt-4 md:pt-0 bg-Dark-Green mt-1 gap-8 md:gap-0 items-center md:rounded-b-5xl rounded-b-4xl">
            
            <div>
                <h1 className="text-5xl font-semibold font-heading text-Off-White mb-2.5">Bring Nature to Your Door</h1>
                <p className="text-Gray-White text-md mb-8">Get beautiful indoor and exotic plants delivered right to you. Save up to 4% on your new green friends!</p>
                <button 
                className="bg-Green text-Dark-Green font-bold py-2 px-6 rounded-md cursor-pointer shadow-Custom hover:scale-110
                            hover:shadow-Custom-hover transition-all">
                    <Link to="/products">Shop Plants</Link></button>
            </div>

            <div className="mx-auto">
                <img src="/public/hero-image.png" alt="Hero-Image" />
            </div>

        </div>

        <div className="md:px-30 px-4 my-8">

            <h1 className="text-xl font-semibold text-Dark-Green mb-4">Featured Plants</h1>

            <div className="grid md:grid-cols-4 xl:grid-cols-5">

                {plantProducts.slice(0, 10).map((plant) => (
                    <ProductCard key={plant.id} item={plant}/>
                    ))
                }
            </div>

        </div>
        
        <div className="flex justify-center">
            <button className="bg-Green text-Dark-Green font-bold py-2 px-6 rounded-md cursor-pointer shadow-Custom hover:scale-110
                            hover:shadow-Custom-hover transition-all"><Link to="/products">View All</Link></button>
        </div>

        <Footer />
    </div>
  )
}

export default Home
