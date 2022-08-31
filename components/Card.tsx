import React from 'react';
import { Cocktail } from '../models/Cocktail.model';
import Image from 'next/image';

interface IProps {
  cocktail: Cocktail, 
  handleCocktailClick: (cocktail: Cocktail) => void
}

const Card = ({cocktail, handleCocktailClick}: IProps) => {
  return (
    <figure 
      className="block p-6 max-w-sm rounded-lg border shadow-md bg-gray-800 border-[#83F3FB] hover:bg-gray-700 cursor-pointer"
      onClick={() => handleCocktailClick(cocktail)}
    >
      <Image className='md:rounded-lg' src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink} image`} width={640} height={640} />
      <figcaption>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cocktail.strDrink}</h5>
      </figcaption>
    </figure>
  )
}

export default Card