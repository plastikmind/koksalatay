import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const Product = ({product: {image, name, slug, price, saled}}) => {
  return (
    <div>
        <Link href={`/product/${slug.current}`}>

        {saled ? (
           <div className='flex justify-center'>
            <p className="text-center text-red-500 font-semibold -rotate-2 text-2xl font-Montserrat">
           <img 
               src={urlFor(image && image[0])}
               
               className="product-image h-80 md:h-[480px] 2xl:h-[640px] grayscale"
             />SOLD OUT!
             </p>
            
             
           </div>

        ) : (
          <div className='flex justify-center'>
          <img 
              src={urlFor(image && image[0])}
              
              className="product-image h-80 my-28 md:h-[480px] 2xl:h-[640px]"
            />
            
          </div>
        )}



      
        </Link>
    </div>
  )
}

export default Product