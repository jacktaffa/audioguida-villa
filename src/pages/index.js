import Image from 'next/image'
import { Jost } from 'next/font/google'
import Link from 'next/link'
import 'intl-pluralrules'

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import{useState} from 'react'

const inter = Jost({ subsets: ['latin'] })
const languages = [
  {
    locale: "IT", 
    image: "/images/IT.svg", 
    name: "Italiano"
  },
  {
    locale: "EN", 
    image: "/images/EN.svg",
    name: "English"
  },
  {
    locale: "DE", 
    image: "/images/DE.svg",
    name: "Deutsch"
  }
]



export default function Home(props) {
  const { t, lang } = useTranslation('common')

  const title = t('title')
  var selectedLanguage=null;
  const  handleChangeLanguage = (event)  => {
    if(selectedLanguage!=null){
   //   setLanguage(selectedLanguage)
      const newLang = selectedLanguage
      window.location.href = `/${newLang}/points`
    } 
    return false;
  }
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start p-12 px-4 gap-y-5 ${inter.className}`}
    >
      <h1 className='text-3xl text-center'>{title}</h1>
      <h3 className='text-xl'>{t('choose-language')}</h3>
      <div className='flex gap-y-1 flex-col	'>
    {
      languages.map((language, index) => {
        return <div key={ "container-language-" + language.locale }><input type="radio" name="language" className='hiddenCheckbox'  value={language.locale}  style={{visibility:"hidden"}} key={ "language-" + language.locale } id={ "language-" + language.locale } onChange={() => { selectedLanguage=language.locale }} /><label className='flex gap-x-5 border-2 border-black 	border-solid	rounded-full px-2 py-2 justify-center items-center	languageLabel' htmlFor={ "language-" + language.locale }><Image src={language.image} width="30" height="30" alt={language.locale} className=' rounded-full language-flag'></Image> <span className='language-name'>{language.name}</span><div className='customCheckbox rounded-full border border-black border-solid'><div className='flex justify-center items-center tick'><img src="tick.svg" width={30} height={30}></img></div></div></label></div>
      }) 
    }
    </div>
    <button className="bg-main hover:bg-secondary  text-white  py-2 px-16 rounded-full disabled:opacity-50" disabled={(selectedLanguage != null)}
     onClick={handleChangeLanguage}> 
     {t('continua')} </button>
    </main>
  )
}
