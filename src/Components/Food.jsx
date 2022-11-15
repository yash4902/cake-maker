import React, { useState } from 'react'
import {category, data}  from '../data/data';

function Food() {

    const[cakes,setCakes] =useState(data);

    //Filter type cakes/pastry

    const filterType = (category) =>{
        setCakes (
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };

    //Filter By Price

    const filterPrice = (price) =>{
        setCakes(
            data.filter((item)=>{
                return item.price === price;
            })
        );
    };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Bakery Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            
            {/* Filter Type */}
            <div>
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=> setCakes(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=> filterType('Cakes')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Cakes</button>
                    <button onClick={()=> filterType('Pastry')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pastry</button>

                </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={()=>filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={()=>filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={()=>filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                </div>
            </div>
        </div>

        {/* Display Cakes */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 pt-4'>
            {cakes.map((item,index)=>(
                <div key={index} className="border rounded-lg shadow-lg hover:scale-105 duration-300 ">
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg' 
                    />
                    <div className='flex justify-between px-2 py-4 '>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <button className='hover:scale-90 duration-300 border-none bg-orange-500 text-white p-1 rounded-2xl'>{item.price}</button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food