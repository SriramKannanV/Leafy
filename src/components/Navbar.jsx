import { Search, ShoppingCart } from 'lucide-react'
import { Link, Navigate } from 'react-router'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { plantProducts } from "../data/Product"

const Navbar = () => {

  const cartLength = useSelector((state) => state.cart.cartItem);
  const [search, setSearch] = useState("");
  const searchRef = useRef();

  let filterItems = plantProducts.filter((item) => {
    if(item.title.toLowerCase().includes(search.toLowerCase())){
      return item;
    }
  })

  return (
    <div className='md:h-20 h-15 w-full md:px-30 px-4 bg-Dark-Green sticky top-0'>
      
      <div className='flex justify-between h-full items-center'>
        <h1 className='text-Off-White md:text-4xl text-xl font-semibold font-heading cursor-pointer hover:text-Green transition-all'><Link to="/">Leafy</Link></h1>

        <div className='flex gap-2 h-10 md:w-120 w-50 bg-Off-White rounded-xl px-4 items-center relative focus:border'>
            <input ref={searchRef} onChange={(e) => setSearch(e.target.value)} value={search} className='flex-1 outline-none border-none' type="text" placeholder='Search for...' />
            <Search onClick={() => searchRef.current.focus()} size={18} className='cursor-pointer text-Dark-Green hover:text-Green transition-all' />

            {search != 0 ? (
              <div className='absolute bg-Gray-White w-110 top-10 rounded-b-2xl overflow-hidden'>
                {filterItems.map((item) => {
                  return <p className='w-full cursor-pointer hover:bg-slate-300 px-4 py-1'><Link onClick={() => setSearch("")} to={`/product/${item.id}`}>{item.title}</Link></p>
                })}
              </div>
            ) : ""}
        </div>

        <div className='flex h-12 w-12 rounded-full md:bg-Off-White items-center relative'>
          <Link className='mx-auto' to="/cart"><ShoppingCart size={22} className='md:text-Dark-Green text-Off-White cursor-pointer hover:text-Green transition-all' /></Link>
          {cartLength.length > 0 ? (<div className='bg-Green h-3 w-3 rounded-full absolute top-1 right-1'></div>) : ""}
        </div>
      </div>

    </div>
  )
}

export default Navbar
