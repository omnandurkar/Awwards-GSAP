import React from 'react'
import Button from './Button'
import { SiSoundcharts } from 'react-icons/si'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Updates = () => {
    
    useGSAP(() => {
        gsap.to('#title1', {
            scrollTrigger: {
                trigger: '#title1',
                start: 'center center',
                end: 'bottom center',
                pin: true,

                toggleActions: 'play none none none'
            },
            // x: 0,
            // opacity: 1,
            duration: 1.5
        })
    }, [])

    return (
        <section className='min-h-screen flex flex-col md:flex-row gap-5 justify-between p-5 md:p-20 md:px-48'>

            <div id='title1' className='max-w-md space-y-5'>
                <h1 className='plain-heading special-font   text-black text-[5rem] px-4 md:text-[10rem] leading-none  text-start '>Lat<b>e</b>st <b>U</b>PDATES<b></b></h1>
                <p className='md:ps-5 text-lg font-semibold opacity-70 '>Stay updated with the latest news, events, and updates in our ecosystem. Be part of our universe's growth and evolution.</p>
                <Button title='READ ALL NEWS' containerClass='!bg-black text-white flex space-x-3 md:ms-5' rightIcon={<SiSoundcharts />} />
            </div>

            <div className='flex flex-col gap-5 max-lg:mt-64'>
                <div>
                    <img src='https://miro.medium.com/v2/resize:fit:1100/format:webp/0*jK_mhODu9NdF-H3Q' alt='updates-1' className='h-96 rounded-lg w-full' />
                    <div className='flex justify-between max-w-lg space-x-5 py-5'>
                        <p className='text-sm font-general  font-semibold opacity-70'>09.05.2024</p>
                        <h1 className='font-robert-medium text-xl max-w-xs'>Welcome NEXUS: Zentry’s Social Gateway</h1>
                    </div>
                </div>
                <div>

                    <img src='https://a.storyblok.com/f/271652/1053x602/cf66707253/news-cover-4.png/m/' alt='updates-1' className='h-96 rounded-lg w-full' />
                    <div className='flex justify-between space-x-5  max-w-lg py-5'>
                        <p className='text-sm font-general  font-semibold opacity-70'>23.04.2024</p>
                        <h1 className='font-robert-medium text-xl max-w-xs'>Introducing Zentry: The Metagame Layer

                        </h1>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Updates