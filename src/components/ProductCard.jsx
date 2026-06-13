import { useState } from "react";
import { Minus, Plus } from "lucide-react"
import { Link } from "react-router";

export function ProductCard({item}) {
    return (
        <div className="bg-Gray-White p-2 text-center rounded-xl rounded-b-4xl mx-2 mb-8">
            <div className="w-full h-60 md:h-40 bg-Off-White rounded-md overflow-hidden">
                <img className="h-full w-full" src={item.imageUrl} alt={item.title} />
            </div>
            <h1 className="mt-2 text-xl font-semibold text-Dark-Green">{item.title}</h1>
            <p className="text-Muted-Green">{item.subtitle}</p>
            <h1 className="text-2xl font-bold mt-2">₹{item.price}</h1>
            <div className="bg-Off-White h-10 p-2 rounded-md rounded-b-3xl flex justify-center px-8 mt-4">
               <Link to={`/product/${item.id}`} className="font-medium h-full w-full hover:scale-110 transition-all">View Plant</Link>
            </div>
        </div>
    )
}
