import { Link } from 'react-router'
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCart } from '../slice/cartSlice';

export function SingleProductCard({item}) {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.cart.cartItem);
    const currentItem = count.find(p => p.id === item.id);
    const currentCount = currentItem ? currentItem.quantity : 0;

  return (
    <div className='md:px-30 px-4 mt-2'>
        <p className='text-sm mb-8'><Link to="/" className='text-Green underline cursor-pointer'>Home</Link> / <Link to="/products" className='text-Green underline cursor-pointer'>Store</Link> / {item.title}</p>
      
        <div className='grid grid-cols-1 xl:grid-cols-2 items-center'>

            <div>
                <img className='h-80 md:h-125 w-125 bg-white rounded-4xl border-2 border-slate-300 mx-auto' src={item.imageUrl} alt={item.title} />

                <div className='md:flex justify-around mt-4 hidden'>
                    <img className='h-30 w-30 bg-white rounded-2xl border-2 border-slate-300' src={item.relatedImages[0]} alt={item.title} />
                    <img className='h-30 w-30 bg-white rounded-2xl border-2 border-slate-300' src={item.relatedImages[1]} alt={item.title} />
                    <img className='h-30 w-30 bg-white rounded-2xl border-2 border-slate-300' src={item.relatedImages[2]} alt={item.title} />
                    <img className='h-30 w-30 bg-white rounded-2xl border-2 border-slate-300' src={item.relatedImages[2]} alt={item.title} />
                </div>
            </div>

            <div>
                <h1 className='text-Dark-Green text-4xl font-semibold font-heading mb-2 mt-4 xl:mt-0'>{item.title}</h1>
                <p className='text-Muted-Green mb-4'>{item.description}</p>
                <h1 className='text-Dark-Green text-5xl font-semibold font-heading'>₹{item.price}</h1>

                <div className='flex gap-1 border-b border-slate-300 pb-4'>
                    <p className='font-bold'>{item.rating} Ratings</p>
                    <p className='font-normal text-Muted-Green'>({item.reviewsCount} Reviews)</p>
                </div>

                <div className='mt-4 flex gap-6 justify-center'>
                    <button className='h-15 w-60 flex items-center px-4 bg-Muted-Green rounded-xl text-Off-White font-bold text-lg cursor-pointer shadow-Custom hover:scale-110 hover:shadow-Custom-hover transition-all'>
                        {currentCount > 0 ? <Minus onClick={() => dispatch(removeCart(item))} /> : ""}
                        <p onClick={() => dispatch(addToCart(item))} className="text-xl font-bold mx-auto">{currentCount == 0 ? <span>Add to Cart</span> : currentCount}</p>
                        {currentCount > 0 ? <Plus onClick={() => dispatch(addToCart(item))} /> : ""}
                    </button>
                    <button onClick={() => dispatch(addToCart(item))}
                    className='h-15 w-60 bg-Green rounded-xl text-Off-White font-bold text-lg cursor-pointer shadow-Custom hover:scale-110 
                    hover:shadow-Custom-hover transition-all'><Link to="/cart">Buy Now</Link></button>
                </div>
            </div>

        </div>

    </div>
  )
}
