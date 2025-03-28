import React from 'react'
import { offer } from '../assets/images'
import Button from '../component/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img 
        src={offer} 
        alt=""
        width={7073} 
        height={687}
        className='object-contain w-full'/>
      </div>

      <div className='flex 
          flex-col justify-start
          gap-5'>
        <h2 className='
          text-4xl  font-palanquin 
          font-bold'>  <span     className='text-coral-red'>
            Special
          </span>  Offer
        </h2>
        <p className='lg:max-w-lg
          mt-2 font-montserrat text-slate-gray'>Embark on a shopping journey that redefiness your experience with unbeatable deals. From premier selections to incredible savings, we offerunparallel value that sets us apart.
        </p>
        <p className='lg:max-w-lg
          mt-2 font-montserrat text-slate-gray'>Navigate a realm of possibilities designed to fulfil your unique desire, surpassing the loftiest expectations. Your journey with us is nothing short of expectation. 
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button
            label="Shop now" 
            iconURL={arrowRight}/>
          <Button
            label="Learn more"
            backgroundColor="bg-white" 
            borderColor="border-slate-grey"
            textColor="text-slate-grey"/>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffer