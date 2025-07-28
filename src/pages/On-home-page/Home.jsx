import { useState, useEffect, useRef } from 'react'

export default function Home() {
    const [State, setState] = useState()
    const elmRef = useRef(null)


    useEffect(() => {
        let observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                for(let idx of entries[0].target.children){
                    for(let idex of idx.children){
                        console.log(idex)
                    }
                }
            }
        })

        observer.observe(elmRef.current)

        return () => { 
            observer.disconnect() 
            console.log('disconnected') }
    }, [])


    return (
        <div ref={elmRef} className='HomePG
                                    grid 
                                    grid-cols-1
                                    gap-16
        '>
            <div>
                <div className='TextElm_1 
                                text-3xl
                                lg:text-6xl 
                                text-indigo-400
                                text-center 
                '>Welcome.
                </div>
            </div>
            <div    className='
                        p-2 
                        bg-[linear-gradient(to_bottom,transparent_5%,#8664fa_90%,#fae964,#00edcd,transparent)]
                        [mask-image:linear-gradient(to_right,transparent_4%,red,transparent_96%)]
        
                        transition
                        transform duration-300
                        min-w-full
                        h-[clamp(3rem,50vh,8rem)]
                        select-none 
                        relative
            '>
                <div className='font-semibold
                                text-2xl
                                lg:text-4xl
                                text-black
                                text-center 
                                pt-4
                                absolute
                                top-0
                                inset-0
                                
                '>To Your <br /> Premium Experience
                </div>
            </div>

            <div className='min-h-[70vh] 
                            bg-[url("pics/bg1.jpg")]
                            bg-cover
                            bg-no-repeat
                            bg-center
                            flex items-center justify-center
                            text-4xl 
                             
                            [mask-image:linear-gradient(transparent,#db2323)] 
                            [mask-repeat:no-repeat] 
                            [mask-size:100%_100%]
            '>
                <div>Hi...</div>
            </div>

        </div>
    )
}
            //  <div className='bg-[url("pics/bg1.jpg")] h-full w-full border-4 border-green-600'></div>
                     // bg-gradient-to-b from-amber-300 from-100%