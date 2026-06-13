import React from 'react'
import Navbar from '../components/Navbar'
import CartCard from '../components/CartCard'
import { Link } from "react-router"
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartItems = useSelector((state) => state.cart.cartItem);
    let runningTotal = 0;
    cartItems.forEach(element => {
        const totalCost = element.price * element.quantity;

        runningTotal = runningTotal + totalCost
    });
    const deliveryFee = 45;

  return (
    <div>
        <Navbar />

        <div className='md:px-30 px-4 mb-10 md:mb-0'>
            <p className='text-sm mb-8 mt-2'><Link to="/" className='text-Green underline cursor-pointer'>Home</Link> / <Link to="/products" className='text-Green underline cursor-pointer'>Store</Link> / Cart</p>

            <h1 className='text-Dark-Green text-3xl font-medium mt-6 font-heading mb-6'>Your Cart</h1>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
                <div className='w-full h-fit bg-Gray-White rounded-2xl col-span-2 border border-slate-300'>
                    {cartItems != 0 ? cartItems.map((item) => {
                        return <CartCard key={item.id} item={item}/>
                    }) : <p className='p-3'>No items</p>}
                </div>

                <div className='w-full h-fit bg-Gray-White rounded-2xl border-2 border-slate-300 p-4'>
                    <h1 className='text-xl font-bold mb-4'>Order Summery</h1>

                    <div className='flex justify-between'>
                        <p className='text-Muted-Green'>Subtotal</p>
                        <p className='font-semibold'>₹{runningTotal}</p>
                    </div>

                    <div className='flex justify-between pb-6 border-b border-slate-300 mb-4'>
                        <p className='text-Muted-Green'>Delivery Fee</p>
                        <p className='font-semibold'>₹{runningTotal === 0 ? "0" : deliveryFee}</p>
                    </div>

                    <div className='flex justify-between'>
                        <p className='font-semibold text-xl'>Total</p>
                        <p className='font-semibold'>₹{runningTotal === 0 ? "0" : runningTotal + deliveryFee}</p>
                    </div>

                    <button className="w-full bg-Dark-Green text-Off-White font-bold py-2 px-6 rounded-md cursor-pointer shadow-Custom 
                    hover:bg-Green mt-8 transition-all">Checkout</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Cart
