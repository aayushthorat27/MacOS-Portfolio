import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 }
}

const renderText = (text, className, baseWeight = 400) => {
    return [...text].map((char, index) => (
        <span
            key={index}
            className={className}
            style={{ fontVariationSettings: `'wght' ${baseWeight}` }}
        >
            {char === ' ' ? '\u00A0' : char}{/* Checks for space and replaces it with non-breaking space */}
        </span>
    ));
}
const setupTextHover = (container, type) => {
    if (!container) return () => {}; // Return a no-op cleanup function if container is null

    const letters = container.querySelectorAll('span');
    const { min, max, default: base  } = FONT_WEIGHTS[type];

    const animateLetters = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration: duration,
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`
        });
    };

    const handleMouseMove = (event) => {
        // const { left } = container.getBoundingClientRect(); // Getting the left position of the container
        // const mouseX = event.clientX - left; // Mouse X relative to the container
        const mouseX = event.clientX ; // Mouse X relative to the container

        letters.forEach((letter) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l + w / 2));
            const intensity = Math.exp(-(distance ** 2)/20000); // Gaussian function for smooth falloff

            animateLetters(letter, min + (max - min) * intensity);
        });
    }

    const handleMouseLeave = () => letters.forEach((letter) => {
        animateLetters(letter, base);
    });

    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mousemove", handleMouseMove);

    return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
    }; // Cleanup function to remove event listeners
}

const Welcome = () => {

    const titleRef = useRef(null);
    const  subtitleRef = useRef(null);
    useGSAP(() => {
        const cleanupTitle = setupTextHover(titleRef.current, 'title'); // Const variable to hold cleanup function
        const cleanupSubtitle = setupTextHover(subtitleRef.current, 'subtitle');
        return () => {
            cleanupTitle();
            cleanupSubtitle();
        }; // Cleanup on unmount
    }, []);

  return (
    <section id="welcome">
        <p ref={subtitleRef}>
            {renderText(
                "Hey, I'm Aayush! Welcome to my", 
                "text-3xl font-georama", 
                100
            )}
        </p>
        <h1 ref={titleRef} className='mt-7'>
            {renderText(
                "portfolio", 
                "text-9xl italic font-georama", 
            )}
        </h1>
        <div className='small-screen'>
            <p>This Portfolio is designed for desktop/tablet screen only.</p>
        </div>
    </section>
  )
}

export default Welcome