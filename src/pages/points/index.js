import BlogCard from  "src/components/BlogCard";
import Image from 'next/image'
import { Jost } from 'next/font/google'
import Link from 'next/link'
import 'intl-pluralrules';

import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import{useState} from 'react'
import { useRouter } from "next/router";

const inter = Jost({ subsets: ['latin'] })



export async function getStaticProps({ locale }) {
    const apiURL =  "https://www.villaselvaticoterme.it/wp-json/jet-cct/points/"

    const args = new URLSearchParams({
        _orderby : "posizione",
        lingua : locale.toUpperCase(),
        type:'point',
        _order : "asc",
    
    });
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(apiURL + "?" + args.toString(), {mode : 'no-cors', cache: "force-cache",  next: { revalidate: 3600 } })
    const points = await res.json()
   // console.log(apiURL + "?" + args.toString());
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        points, 
        },
      revalidate:  7200 // In seconds
    }
  }




export default function Points({points}) {
    const { t, lang } = useTranslation('common')
    const title = t('title');
    const sottotitolo = t('sottotitolo');

  return ( 
    <main className={`flex min-h-screen  w-screen h-full py-12 flex-col items-center justify-between ${inter.className}`} >
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4  sm:px-6 lg:max-w-7xl lg:px-8 py-10">
    <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">{title}</h2>
    <p className="text-center">{sottotitolo}</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    {points.map((blogPost, i) => {
            return <BlogCard key={i} locale={lang.toUpperCase()} blogPost={blogPost} />;
        })}
    </div>
    </div>
    </div>
</main>
    )
}
 