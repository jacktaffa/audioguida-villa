import { useRouter } from 'next/router'
import { Jost } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from "swiper";
import { Player } from 'audioguida/components/Player';
import Image from 'next/image'
import 'swiper/css'
import "swiper/css/pagination";
import 'intl-pluralrules';

import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage'


//import Gallery from 'audioguida/components/Gallery';
//import Player from 'audioguida/components/Player';

const jost = Jost({ subsets: ['latin'] })

// This function gets called at build time
export async function getStaticPaths() {
  const apiURL =  "https://www.villaselvaticoterme.it/wp-json/jet-cct/points/"

    const args = new URLSearchParams({
        _orderby : "posizione",
        _order : "asc",
    
    });
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(apiURL + "?" + args.toString(), {mode : 'no-cors', cache: "force-cache", next: { revalidate: 60 }})
    const posts = await res.json();
    
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: {   id: post._ID.toString()  }, 
      locale: post.lingua.toLowerCase() 
    }))
  

    
  console.log(paths);  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: 'blocking' }
  }


// This also gets called at build time
export async function getServerSideProps({ params }) {
  const apiURL =  "https://www.villaselvaticoterme.it/wp-json/jet-cct/points/"

    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`${apiURL}${params.id}`)
    const post = await res.json()
  
    // Pass post data to the page via props
    return { props: { post },     revalidate: 9600
  }
  }




const Post = (p) => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')

   const pr = p.post
 const gallery = pr.gallery.split(",")
 


  return (<main className="px-6 py-6 sm:px-12 md:px-24">
     <Swiper  key="player-{ pr._ID }" 
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      breakpoints={{
        // when window width is >= 320px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1080: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }}
      navigation
      autoplay={{
        "delay": 2500,
        "disableOnInteraction": false
      }}
      pagination={{ clickable: true }}
      loop
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      
       modules={[Pagination]}
       className=' mb-10'
    > 
      
     {
       gallery.map( (image, i ) => {
          return <SwiperSlide key={"swiper-slide-" + i}> <div className="" >
          <Image src={image}   alt={pr.titolo + "-" +i}  width={480} height={480}  className='rounded-2xl object-cover aspect-square'  />
        </div></SwiperSlide>
      } ) 
    }

    </Swiper>
   <Player src={pr.audio}></Player>  
    <div className={"single-point point-" + pr._ID } >
      <h1 className={`text-4xl pb-6 pt-6 font-bold ${jost.variable} font-sans`}>{pr.titolo}</h1>
      <div dangerouslySetInnerHTML={{ __html: pr.descrizione.split(". ").join(".<br /><br />") }} className="pb-12"></div>
    </div> 
  </main>

  )
}

export default Post