import React from 'react'
import house from '../assets/house.jpg'
import Rental from './Rental'
const Filters = () => {
    const rentals= [
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},
        {title:"Safari", image: house , price:"Rs.17000"},

    ]
    return( < div className='sm:mx-6 md:mx-8 lg:mx-10 px-3 pt-20'>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {rentals.map((rental)=>( <Rental 
    title={rental.title} 
    image={rental.image} 
    price={rental.price}/>))}
</div>
        </div>
    )    
}

export default Filters