import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useIntl } from 'react-intl';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Cocktail } from '../models/Cocktail.model';
import { COCKTAIL_API_URL_LOOKUP, COCKTAIL_API_URL_ORDINARY_DRINK, COCKTAIL_API_URL_RANDOM, COCKTAIL_API_URL_SEARCH } from '../utils';
import Detail from '../components/Detail';
import NoResult from '../components/NoResult';

interface IProps {
  drinks: Cocktail[]
}

const Home = ({ drinks }: IProps) => {
  const [cocktail, setCocktail] = useState<Cocktail>(drinks[0]);
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [searchName, setSearchName] = useState('');

  const router = useRouter();

  const intl = useIntl();
  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({ id: "page.home.head.meta.description" });

  const handleNewCocktail = (async () => {
    const { data } = await axios.get(COCKTAIL_API_URL_RANDOM);
    setCocktail(data?.drinks ? data.drinks[0] : null);
  })

  const handleCocktailClick = (async (cocktail: Cocktail) => {
    const { data } = await axios.get(`${COCKTAIL_API_URL_LOOKUP}${cocktail.idDrink}`);
    setCocktail(data.drinks[0]);
  })

  const handleSearch = async (name: string) => {
    setSearchName(name);
    const { data } = await axios.get(`${COCKTAIL_API_URL_SEARCH}${name}`);
    setCocktail(data?.drinks ? data.drinks[0] : null);

    if (!data?.drinks) {
      const { data } = await axios.get(COCKTAIL_API_URL_ORDINARY_DRINK);
      setCocktails(data.drinks);
      console.table(data.drinks);
    }
  }

  const handleChangeLang = (event: any) => {
    const { checked } = event.target
    const { pathname, query, asPath } = router;
    const { locales } = router;

    router.push({ pathname, query }, asPath, { locale: !checked ? locales![0] : locales![1] })
  }

  return (
    <div className='flex flex-col justify-between h-screen'>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header handleSearch={handleSearch} handleChangeLang={handleChangeLang} handleLogoClick={handleNewCocktail} />

      <main className='w-screen'>
        {
          cocktail ? (
            <article className='p-6'>
              <Detail cocktail={cocktail} handleNewCocktail={handleNewCocktail} />
            </article>

          ) : (
            <NoResult searchName={searchName} cocktails={cocktails} handleCocktailClick={handleCocktailClick} />
          )
        }

      </main>

      <Footer />
    </div>
  )
}


export const getServerSideProps = async () => {
  const { data } = await axios.get(COCKTAIL_API_URL_RANDOM);

  return {
    props: {
      drinks: data.drinks
    }
  }
}

export default Home
