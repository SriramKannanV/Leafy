import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='w-full md:px-30 px-4 bg-Dark-Green py-6 grid md:grid-cols-5 mt-8 gap-6 md:gap-2'>
        
            <div className='md:col-span-2 text-Gray-White'>
                <h1 className='text-Off-White text-4xl font-semibold font-heading cursor-pointer hover:text-Green transition-all w-fit mb-2'>Leafy</h1>
                <p className='text-sm w-2/3'>Get beautiful indoor and exotic plants delivered right to you. Save up to 4% on your new green friends!</p>
            </div>
            
            <div className='text-Gray-White'>
                <h1 className='text-lg font-medium mb-2'>About Us</h1>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>About Leafy</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Careers</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>News & Blog</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Help</p>
            </div>

            <div className='text-Gray-White'>
                <h1 className='text-lg font-medium mb-2'>Services</h1>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Gift Card</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Mobile App</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Shipping & Delivery</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Order Pickup</p>
            </div>

            <div className='text-Gray-White'>
                <h1 className='text-lg font-medium mb-2'>Help</h1>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Leafy Helps</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Returns</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Track Order</p>
                <p className='text-sm hover:text-Green transition-all cursor-pointer w-fit'>Contact Us</p>
            </div>

        </div>

        <div className='py-2'>
            <p className='text-center text-sm'>All rights reserved by Sriram Kannan V</p>
        </div>
    </div>
  )
}

export default Footer
