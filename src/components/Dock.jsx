import React, { useRef } from 'react'
import { dockApps } from '#constants'
import { Tooltip } from 'react-tooltip';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useWindowStore from '#store/window';

const Dock = () => {
    const { openWindow, closeWindow, windows } = useWindowStore();
    const dockRef = useRef(null);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;
        const icons = dock.querySelectorAll('.dock-icon');

        const animateIcons = (mouseX) => {
            icons.forEach((icon) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.5)/20000); // Gaussian function for smooth falloff
            
                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: 'power1.out'
                })
            });
        };

        const handleMouseMove = (event) => {
            const { left } = dock.getBoundingClientRect(); // Getting the left position of the dock
            const mouseX = event.clientX; // Mouse X relative to the dock
            animateIcons(mouseX);
        };

        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.25,
                    ease: 'power1.out'
                });
            });
        };

        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);

        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', resetIcons);
        };
    }, []);

    const toogleApp = (app) => {
        // Implementing open window logic
        if (!app.canOpen) return;

        const window = windows[app.id];
        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }
        // console.log(windows);
    }

    return (
        <section id='dock' className='z-9999'>
            <div ref={dockRef} className='dock-container'>
                {dockApps.map(({id, name, src, canOpen}) => (
                    <div key={id} className='relative flex justify-center'>
                        <button 
                            type='button' 
                            className='dock-icon'
                            // title={name} 
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={100}
                            disabled={!canOpen} 
                            onClick={() => toogleApp({id, canOpen})}
                        >
                            <img 
                                src={src} 
                                alt={name} 
                                loading='lazy'
                                className={canOpen ? '' : 'opacity-50'}
                            />
                        </button>
                    </div>
                ))}
                <Tooltip id="dock-tooltip" place="top" className='tooltip' />
            </div>
        </section>
    )
}

export default Dock