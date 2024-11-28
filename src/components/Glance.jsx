import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Glance = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cardRefs = useRef([]);


    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };


    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const rect = currentTarget.getBoundingClientRect();

        const xOffset = clientX - (rect.left + rect.width / 2);
        const yOffset = clientY - (rect.top + rect.height / 2);

        if (isHovering) {

            gsap.to(currentTarget, {
                x: xOffset * 0.1,
                y: yOffset * 0.1,
                rotationY: xOffset / 15,
                rotationX: -yOffset / 15,
                transformPerspective: 600,
                duration: 0.6,
                ease: "power1.out",
            });


            // const content = currentTarget.querySelector('video, img'); 
            // if (content) {
            //     gsap.to(content, {
            //         x: -xOffset * 0.1, 
            //         y: -yOffset * 0.1, 
            //         duration: 0.6, 
            //         ease: "power1.out",
            //     });
            // }
        }
    };


    useEffect(() => {
        if (!isHovering) {
            cardRefs.current.forEach(card => {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    rotationY: 0,
                    rotationX: 0,
                    duration: 0.6,
                    ease: "power1.out",
                });

                const content = card.querySelector('video, img');
                if (content) {
                    gsap.to(content, {
                        x: 0,
                        y: 0,
                        duration: 0.6,
                        ease: "power1.out",
                    });
                }
            });
        }
    }, [isHovering]);

    return (
        <section className='min-h-screen bg-black text-violet-100 p-5 md:p-10 space-y-10'>
            <h3 className='uppercase font-general text-xs pt-10'>Our universe in a nutshell</h3>
            <h1 className='plain-heading special-font md:text-[10rem] text-5xl max-w-5xl md:leading-[8rem]'>Ze<b>n</b>try at a glan<b>c</b>e</h1>

            <div className='flex flex-col md:flex-row gap-10'>
                {/* Left */}
                <div className='flex flex-col w-full gap-10 items-end mt-28'>
                    <div
                        ref={addToRefs}
                        className='flex border border-neutral-700 w-auto rounded-lg max-w-xl'
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className='p-5'>
                            <h3>Products</h3>
                            <h1 className='plain-heading special-font text-3xl md:text-9xl'>4<b>+</b></h1>
                        </div>
                        <div>
                            <video src='videos/card-1.webm' loop muted autoPlay className='h-auto' />
                        </div>
                    </div>

                    <div
                        ref={addToRefs}
                        className='flex border flex-col justify-between md:h-[25rem] border-neutral-700 p-5 bg-yellow-300 rounded-lg max-w-xl'
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <h1 className='plain-heading special-font text-black text-[9rem] md:text-[16rem] leading-none'>2<b>0</b>+</h1>
                        <div className='p-5'>
                            <h3 className='text-black text-end font-semibold opacity-70'>Partners</h3>
                        </div>
                    </div>

                    <div
                        ref={addToRefs}
                        className='flex flex-col border border-neutral-700 bg-violet-300 rounded-lg'
                        // onMouseMove={handleMouseMove}
                        // onMouseEnter={() => setIsHovering(true)}
                        // onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className='p-2 px-5'>
                            <div className='p-2'>
                                <h3 className='text-black text-start font-semibold opacity-70'>Treasury</h3>
                            </div>
                            <h1 className='plain-heading special-font text-black text-[5rem] md:text-[8rem] leading-none text-start '>100<b>M</b><b>+</b></h1>
                        </div>
                        <video src='videos/card-5.webm' loop muted autoPlay className='h-auto mx-14' />
                        <div className='p-10 flex justify-between '>
                            <div className='flex space-x-3'>
                                <div className='text-black h-5 w-5 bg-black rounded-full'> </div>
                                <h1 className='text-white font-general text-xs max-lg:text-[0.45rem] '>LIQUID TOKEN <br /> 70%</h1>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='text-black h-5 w-5 bg-yellow-300 rounded-full'> </div>
                                <h1 className='text-white font-general text-xs max-lg:text-[0.45rem] '>INVESTMENTS <br /> 20%</h1>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='text-black  md:h-5  md:w-5 bg-violet-50 rounded-full'> </div>
                                <h1 className='text-white font-general text-xs max-lg:text-[0.45rem] '>NFT ASSETS <br /> 10%</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className='flex flex-col w-full gap-10 items-start'>
                    <div
                        ref={addToRefs}
                        className='flex flex-col border border-neutral-700 bg-violet-300 rounded-lg'
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className='p-2'>
                            <div className='p-2'>
                                <h3 className='text-black text-start font-semibold opacity-70'>Residents</h3>
                            </div>
                            <h1 id='text-3d' className='plain-heading special-font text-black text-[9rem] md:text-[16rem] leading-none text-center '>500<b>K</b>+</h1>
                        </div>
                        <img src='img/hero-boy.png' alt='card-2' className='object-cover object-center h-auto -mt-40 md:-mt-72' />
                    </div>

                    <div
                        ref={addToRefs}
                        className='p-5 border flex flex-col rounded-lg border-neutral-700'
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <h1 className='plain-heading special-font text-white text-[5rem] md:text-[4.5rem] max-w-sm leading-none text-start '>W<b>o</b>rld-Class B<b>a</b>ckers</h1>
                        <p className='text-end font-general uppercase text-xs pt-20'>
                            coinbase ventures <br />
                            binance labs<br />
                            defiance capital<br />
                            hashed<br />
                            pantera capital<br />
                            animoca brands<br />
                            play ventures<br />
                            skyvision capital<br />
                            vessel capital<br />
                            arche fund
                        </p>
                    </div>

                    <div
                        ref={addToRefs}
                        className='bg-violet-50 rounded-lg'
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className='p-2'>
                            <div className='p-2'>
                                <h3 className='text-black text-start font-semibold opacity-70'>Revenue generated <br />2024</h3>
                            </div>
                            <h1 className='plain-heading special-font text-black text-[9rem] px-4 md:text-[26rem] leading-none md:leading-[20rem] text-start '>10<b>M</b></h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Glance;
