import { Minus, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import { addToCart, removeCart, deleteFromCart } from '../slice/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartCard = ({item}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItem);
    // const currItem = cartItems.find(singleItem => singleItem.id === item.id);
    // console.log(currItem.price);

  return (
    <div>
      
        <div className='w-full h-fit p-4 flex gap-4'>
            <div className='min-w-40 h-40 bg-white rounded-xl overflow-hidden border border-slate-300 hidden md:block'>
                <img className='h-full w-full' src={item.imageUrl} alt={item.title} />
            </div>

            <div className='w-full flex justify-between'>
                <div className='content-center'>
                    <h1 className='md:text-xl font-semibold'>{item.title}</h1>
                    <h1 className='md:text-3xl text-2xl font-bold'>₹{item.price}</h1>
                </div>

                <div className='flex flex-col justify-between items-end my-0 md-my-6 gap-3 md:gap-0'>
                    <Trash2 onClick={() => dispatch(deleteFromCart(item))} className='text-red-500 cursor-pointer' />

                    <div className='flex gap-4 items-center bg-Off-White py-1 px-2 rounded-lg'>
                        <Minus onClick={() => dispatch(removeCart(item))} className='cursor-pointer' />
                        <p className='font-bold text-lg'>{item.quantity}</p>
                        <Plus onClick={() => dispatch(addToCart(item))} className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default CartCard
