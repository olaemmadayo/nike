import React from 'react'


const ShoeCard = ({ imgURL, bigShoe, changeBigShoeImage, bigShoeImg }) => {

  const handleClick = () => {
    if(bigShoeImg !== bigShoe){
        changeBigShoeImage(bigShoe);
    }
  };

  return (
    <div className={`border-2 rounded-xl
                      ${bigShoeImg === bigShoe
                        ?'border-coral-red'
                        : 'border-transparent'
                      } cursor-pointer max-sm:flex-1
                      
                  `}
                  onClick={handleClick}
                  >
          <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img 
            src={imgURL}
             alt="shoe collection"
             width={127}
             height={103.34} 
             className='object-contain'/>
          </div>
      
    </div>
  )
}

export default ShoeCard