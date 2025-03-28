import React from 'react'
import Button from '../component/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section 
      id="about us"
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
      >
      <div className='flex flex-1   flex-col'>
        
                
                <h2 className=' font-palanquin text-4xl capitalize  font-bold lg:max-w-lg'> 
                we provide you
                  <span className='text-coral-red mt-3'> Super
                  </span>
                  <span className='text-coral-red inline-block mt-3'>
                  Quality
                  </span> Shoes
                  
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                  Enssuring premium comfort and style, our meticulous crafted footware is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
                </p>
                <p className='mt-6 lg:max-w-lg info-text'>Our dedication to details and excellence ensure your satisfaction</p>
                <div className='mt-11'>
                  <Button label="view details"
                  />
                 </div>
          </div>

          <div className='flex-1 flex justify-center items-center'>
            <img 
            src={shoe8} 
            alt="shoe"
            width={570}
            height={552}
            className='object-contain' />
          </div>
      
    </section>
  )
}

export default SuperQuality