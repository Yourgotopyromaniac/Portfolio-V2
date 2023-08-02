"use client"
import { motion } from 'framer-motion';
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const boxes = self.selector('.box');
            boxes.forEach((box) => {
                gsap.to(box, {
                    scale: 4,
                    scrollTrigger: {
                        trigger: box,
                        start: 'top center',
                        end: 'bottom top',
                        scrub: true,
                        markers: true,
                    },
                });
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <div className='h-screen w-screen z-50' ref={main}>

            <div className='relative h-full w-full flex items-center justify-center'>
                <div className=''></div>
            </div>
        </div>
    )
}

export default Projects