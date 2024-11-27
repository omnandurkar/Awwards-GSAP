import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import Button from './Button'

const WhoAreWe = () => {
    return (
        <section className='min-h-screen p-10 space-y-10'>

            <h3 className='uppercase font-general max-lg:text-xs text-center pt-10 '>Who we are</h3>

            <AnimatedTitle
                title="We're b<b>u</b>ilding a new realit<b>y</b> that rew<b>a</b>rds play<b>e</b>rs and e<b>n</b>courages co<b>m</b>munities to thri<b>v</b>e "
                containerClass="text-center !text-[3rem]  !text-black md:!max-w-6xl  md:!text-[9rem] mx-auto"
            />

            <h4 className='text-center text-xl max-w-lg mx-auto'>Zentry is on a mission to unite diverse player networks to forge the world's largest shared adventure.</h4>

            <div className='w-full flex justify-center'>
                <Button
                    title="Discover Who We Are"
                    containerClass="mx-auto !bg-black text-white"
                />
            </div>


        </section>
    )
}

export default WhoAreWe