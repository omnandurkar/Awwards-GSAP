import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Labels = () => {
    const [currentCategory, setCurrentCategory] = useState('');

    const sectionTitles = {
        backers: " include top-tier VCs, funds, and companies, providing expertise, network, and resources to fuel our project's success.",
        gaming: " partners span projects, communities, protocols, & infrastructure, accelerating expansive growth of the new gaming era.",
        web3: " partners support tech & community, driving cutting-edge innovation and a vibrant ecosystem of users.",
        brands: " partners cover tech, gaming, entertainment, & lifestyle sectors, enhancing our reach and player experience."
    };

    const partnerData = [
        { name: 'Binance Labs', category: 'backers' },
        { name: 'Coinbase Ventures', category: 'backers' },
        { name: 'Pantera Capital', category: 'backers' },
        { name: 'DeFiance Capital', category: 'backers' },
        { name: 'Animoca Brands', category: 'backers' },
        { name: 'SkyVision Capital', category: 'backers' },
        { name: 'Play Venture', category: 'backers' },
        { name: 'Vessel Capital', category: 'backers' },
        { name: 'Arche Fund', category: 'backers' },
        { name: 'Marblex', category: 'gaming' },
        { name: 'Fnatic', category: 'gaming' },
        { name: 'XSET', category: 'gaming' },
        { name: 'Jambo', category: 'web3' },
        { name: 'AWS', category: 'brands' }
    ];

    
    useEffect(() => {
        const updateCategory = (entry) => {
            if (entry.isIntersecting) {
                const category = entry.target.dataset.category;
                setCurrentCategory(category);
            }
        };

        
        partnerData.forEach((partner, index) => {
            gsap.to(`.partner-${index}`, {
                scrollTrigger: {
                    trigger: `.partner-${index}`,
                    start: 'top center',
                    end: 'bottom center',
                    onEnter: () => {
                        setCurrentCategory(partner.category);
                        gsap.to(`.partner-name-${index}`, { color: 'yellow' });
                    },
                    onLeave: () => {
                        setCurrentCategory('');
                        gsap.to(`.partner-name-${index}`, { color: 'white' });
                    },
                }
            });
        });

        
        gsap.to('.section-title', {
            scrollTrigger: {
                trigger: '.section-title',
                start: 'center center',
                end: `+=${window.innerHeight}`, 
                pin: true, 
                // pinSpacing: false, 
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="min-h-screen flex flex-col md:flex-row space-x-10 w-full justify-center md:pb-40 bg-black text-white p-5 md:p-10">
            {/* Left Column */}
            <div className="w-1/2 flex flex-col max-lg:hidden  space-y-5">
                <h2 className="text-neutral-500 text-xl max-w-lg section-title">
                    <span className="text-violet-50">Our {currentCategory} </span>
                    {sectionTitles[currentCategory] || ''}
                </h2>
            </div>

            {/* Right Column */}
            <div className="w-1/2">
                <h1 className="plain-heading special-font text-7xl">OUR PARTNERS</h1>

                {partnerData.map((partner, index) => (
                    <div
                        key={index}
                        className={`flex items-center space-x-5 partner-${index}`}
                        data-category={partner.category}
                    >
                        <h3 className="font-general text-md">{partner.category.toUpperCase()}</h3>
                        <h1 className={`plain-heading special-font text-7xl partner-name-${index}`}>
                            {partner.name}
                        </h1>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Labels;
