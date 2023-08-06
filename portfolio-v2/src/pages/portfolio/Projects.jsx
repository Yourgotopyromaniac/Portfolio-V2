import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const projRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const box = self.selector('.box');

            gsap.to(box, {
                x: "-800vw",
                scrollTrigger: {
                    trigger: box,
                    start: 'top 10%',
                    scrub: true,
                    pin: true,
                    refreshPriority: 'lowest', // Prioritize updates during the next animation frame
                },
            });
        }, projRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={projRef} className='w-screen h-screen flex items-center'>
            <div className='box left-96 h-screen w-[800vw] flex items-center gap-80' style={{ willChange: 'transform' }}>
                <div className='w-[100vw] box-child h-[60%] bg-[#ff3e3e]'></div>
                <div className='w-[100vw] box-child h-[60%] bg-[#ff3e3e]'></div>
                <div className='w-[100vw] box-child h-[60%] bg-[#ff3e3e]'></div>
                <div className='w-[100vw] box-child h-[60%] bg-[#ff3e3e]'></div>
                <div className='w-[100vw] box-child h-[60%] bg-[#ff3e3e]'></div>
            </div>
        </div>
    );
};

export default Projects;
