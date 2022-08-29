export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const formatLocale = (locale: string) => {
  const dash_index = locale.indexOf('-')
  if (dash_index >= 0)
  {
      return locale.substring(0, dash_index)
  }
  return locale
}