import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Cocktail } from '../models/Cocktail.model';
import Card from './Card';

interface IProps {
  searchName: string, 
  cocktails: Cocktail[], 
  handleCocktailClick: (cocktail: Cocktail) => void
}

const NoResult = ({searchName, cocktails, handleCocktailClick} : IProps) => {
  return (
    <div>
      <div className='flex justify-center'>
        <FormattedMessage id='page.home.cocktail.no-result' />
        <p className='pl-1'>{searchName}</p>
      </div>
      <div className='flex justify-center xl:justify-between align-middle w-full p-10 flex-wrap gap-8'>
        {
          cocktails?.filter((cocktail, index) => index <= 8).map((cocktail) => <Card handleCocktailClick={handleCocktailClick} key={cocktail.idDrink} cocktail={cocktail} />)
        }
      </div>
    </div>
  )
}

export default NoResult