import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import it from "../lang/it.json";
import { useRouter } from 'next/router';
import { formatLocale } from '../utils';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const messages = { it, en };
  const { locale } : { locale?:string } = useRouter();

  const formattedLocale = formatLocale(locale!) as keyof typeof messages;
  
  return (
    <IntlProvider locale={locale!} messages={messages[formattedLocale] }>
      <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
