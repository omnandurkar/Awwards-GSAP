import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';


gsap.registerPlugin(ScrollTrigger);



const Universe = () => {


    return (
        <section className="min-h-screen bg-yellow-300 p-5 md:p-10">

            <h1 className='plain-heading special-font md:text-[10rem] text-5xl max-w-5xl  md:leading-[8rem]'>the univers<b>e</b> powered by ZE<b>N</b>T</h1>
            <Button
                id="enter-vault"
                title="ENTER VAULT"
                // leftIcon={<TiLocationArrow />}
                containerClass="!bg-black mt-10 !py-4 font-bold text-white flex-center gap-1"
            />

            <div className='flex flex-col-reverse md:flex-row justify-between w-full '>
                <div className='space-y-4 flex flex-col opacity-70 justify-end' >
                    <h3 className='font-circular-web font-semibold text-3xl'>Shaping Zentry Collectively</h3>
                    <p className='max-w-xs font-semibold'>Participate in governance, influence key decisions in the ever-growing Zentry Universe that is limited only by people's imaginations</p>
                </div>
                <video src='videos/symbol_3.webm' className="md:h-96 h-48 max-lg:mb-48 mt-10" autoPlay loop muted />
            </div>





        </section>
    );
};

export default Universe;






