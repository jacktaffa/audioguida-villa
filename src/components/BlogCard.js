import Image from 'next/image'
import { Jost } from 'next/font/google'
const jost = Jost({ subsets: ['latin'],  variable: '--font-jost', })

  export default function BlogCard(props) {
    const firstImage = Array.isArray(props.blogPost.gallery.split(",") ) ?  props.blogPost.gallery.split(",")[0] : props.blogPost.gallery
    return (
          <>     
              <div key={props.blogPost._ID} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <a href={"/"+props.locale.toLowerCase()  + "/points/"+ props.blogPost._ID}> <img
                    src={firstImage}
                    alt={props.blogPost.titolo}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full aspect-square"
                    fill="true"
                    objectPosition="center"
                  />
                  </a>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h4 className='text-4xl'>{props.blogPost.posizione}</h4>
                    <h3 className={`text-md ${jost.variable} font-sans`}>
                      <a href={"/"+props.locale.toLowerCase()  + "/points/"+ props.blogPost._ID}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {props.blogPost.titolo} 
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
              </>
            )
        } 