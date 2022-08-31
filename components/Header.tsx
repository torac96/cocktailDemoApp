import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import Link from 'next/link';

interface IProps {
  handleSearch: (params: any) => any,
  handleChangeLang: (params: any) => any,
  handleLogoClick: () => any,
}

const Header = ({ handleSearch, handleChangeLang, handleLogoClick }: IProps) => {
  const [name, setName] = useState('');

  const router = useRouter();
  const { locales, locale } : {locales?: string[], locale?: string} = router;
  const checked = locale === locales![1];

  const intl = useIntl();
  const searchLabel = intl.formatMessage({ id: "page.home.search.title" });

  const handleChange = (event: any) => {
    setName(event?.target?.value);
  }

  return (
    <div className='flex flex-col md:flex-row justify-between p-4 items-center'>

      <div className='order-1'>
        <Image onClick={handleLogoClick} className='cursor-pointer' src="/cocktail-bar.png" alt="Vercel Logo" width={204} height={170} />
      </div>

      <div className='w-full order-3 md:order-2 md:w-64'>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-[#60c1e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm  rounded-lg border bg-black border-[#83F3FB] placeholder-[#83F3FB] text-[#83F3FB] focus:ring-2 focus:ring-[#83F3FB] focus:border-[#83F3FB] focus-visible:border-none focus-visible:outline-none"
            placeholder={`${searchLabel}...`}
            value={name}
            onChange={handleChange}
            
            required
          />

          <button
            type="button"
            onClick={() => handleSearch(name)}
            disabled={!name}
            className="text-white absolute right-2.5 bottom-2.5 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-[#F67DF7] hover:bg-[#b01ac4] "
          >
            {searchLabel}
          </button>
        </div>
      </div>

      <div className='order-2 md:order-3 inline-flex items-center'>
        <span className="mb-4 mr-3 text-sm font-medium text-gray-300">{locales![0]}</span>

        <label htmlFor="default-toggle" className="inline-flex relative items-center mb-4 cursor-pointer">
          <input type="checkbox" value="" id="default-toggle" className="sr-only peer" onClick={handleChangeLang} defaultChecked={checked} ></input>
          <div className="w-11 h-6 rounded-full border peer peer-focus:ring-2 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] peer-checked:bg-gray-700 peer-focus:ring-[#83F3FB] bg-gray-700 border-[#83F3FB] after:absolute after:top-0.5 after:left-[2px] after:bg-gradient-to-r from-green-500 via-white to-red-600 peer-checked:after:bg-cover peer-checked:after:bg-[url('/usLogo.png')] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all "
          ></div>

          <span className="ml-3 text-sm font-medium text-gray-300">{locales![1]}</span>
        </label>
      </div>

    </div>
  )
}

export default Header