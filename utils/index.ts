export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const COCKTAIL_API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
export const COCKTAIL_API_URL_RANDOM = `${COCKTAIL_API_URL}/random.php`;
export const COCKTAIL_API_URL_LOOKUP = `${COCKTAIL_API_URL}/lookup.php?i=`;
export const COCKTAIL_API_URL_SEARCH = `${COCKTAIL_API_URL}/search.php?s=`;
export const COCKTAIL_API_URL_ORDINARY_DRINK = `${COCKTAIL_API_URL}/filter.php?c=Ordinary_Drink`;

export const formatLocale = (locale: string) => {
  const dash_index = locale.indexOf('-')
  if (dash_index >= 0)
  {
      return locale.substring(0, dash_index)
  }
  return locale
}