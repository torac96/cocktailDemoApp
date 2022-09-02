import React from 'react';
import Image from 'next/image';
import { Cocktail } from '../models/Cocktail.model';
import { FormattedMessage } from 'react-intl';
import { useRouter } from 'next/router';
import { IoRefresh } from 'react-icons/io5';
import { formatLocale } from '../utils';

interface IProps {
  cocktail: Cocktail, 
  handleNewCocktail: () => void
}

const Detail = ({cocktail, handleNewCocktail} : IProps) => {

  const MAX_STR_LIMIT = 15;

  const { locale }: { locale?: string } = useRouter();
  const formattedLocale = formatLocale(locale!);

  return (
    <figure className='flex flex-col justify-evenly md:flex-row'>
      <div className=" md:rounded-full border-4 border-[#83F3FB] h-fit w-fit">
        <Image className='md:rounded-full mt-5 h-full w-full' src={cocktail.strDrinkThumb} alt={`${cocktail.strDrink} image`} priority={true} width={640} height={640} />
      </div>
      <figcaption className='md:w-[50%] md:p-20'>
        <div className='text-3xl pb-3 font-semibold'>{cocktail.strDrink}</div>
        <div>
          <p> <FormattedMessage id="page.home.cocktail.ingredienti" /> </p>
          <ul>
            {[...Array(MAX_STR_LIMIT)].filter((item, index) => cocktail[`strIngredient${index + 1}` as keyof typeof cocktail]).map((item, index) => (
              <li key={index}>
                - {`${cocktail[`strMeasure${index + 1}` as keyof typeof cocktail] ?? ''} ${cocktail[`strIngredient${index + 1}` as keyof typeof cocktail]}`}
              </li>
            ))}
          </ul>
          <br />
        </div>
        <div>
          {formattedLocale === 'it' ? cocktail?.strInstructionsIT : cocktail?.strInstructions}
        </div>

      </figcaption>
      <div className='flex justify-center text-5xl'>
        <button onClick={handleNewCocktail}>
          <IoRefresh />
        </button>
      </div>
    </figure>
  )
}

export default Detail