import {useLayoutEffect, useRef} from 'react'
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, isMaximized, isMinimized, zIndex } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const element = ref.current;
            if (!element || !isOpen) return;
            element.style.display = 'block';

            // Get the dock icon position
            const dockIcon = document.querySelector(`[aria-label="${windowKey}"]`);
            let startX = window.innerWidth / 2;
            let startY = window.innerHeight;
            
            if (dockIcon) {
                const iconRect = dockIcon.getBoundingClientRect();
                startX = iconRect.left + iconRect.width / 2;
                startY = iconRect.top + iconRect.height / 2;
            }
            
            const elementRect = element.getBoundingClientRect();
            const targetX = elementRect.left + elementRect.width / 2;
            const targetY = elementRect.top + elementRect.height / 2;

            // gsap.fromTo(element, {
            //     scale: 0.8,
            //     opacity: 0,
            //     y: 40
            // }, {
            //     scale: 1,
            //     opacity: 1,
            //     y: 0,
            //     duration: 0.4,
            //     ease: 'power3.out'
            // })


            // gsap.fromTo(element, {
            //     scale: 0,
            //     opacity: 0,
            //     x: startX - targetX,
            //     y: startY - targetY,
            //     transformOrigin: 'center center'
            // }, {
            //     scale: 1,
            //     opacity: 1,
            //     x: 0,
            //     y: 0,
            //     duration: 3,
            //     ease: 'back.inOut(1.2)'
            // })

            const tl = gsap.timeline();
            
            tl.fromTo(element, {
                scale: 0.1,
                opacity: 0,
                x: startX - targetX,
                y: startY - targetY,
                scaleY: 0.1,
                transformOrigin: 'center bottom'
            }, {
                scale: 1,
                scaleY: 1,
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            });
        }, [isOpen]);

         // Genie minimize effect
        useGSAP(() => {
            const element = ref.current;
            if (!element || !isMinimized) return;

            const dockIcon = document.querySelector(`[aria-label="${windowKey}"]`);
            if (!dockIcon) return;

            const iconRect = dockIcon.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();
            
            const targetX = iconRect.left + iconRect.width / 2 - (elementRect.left + elementRect.width / 2);
            const targetY = iconRect.top + iconRect.height / 2 - (elementRect.top + elementRect.height / 2);

            gsap.to(element, {
                scale: 0.1,
                scaleY: 0.1,
                opacity: 0,
                x: targetX,
                y: targetY,
                transformOrigin: 'center bottom',
                duration: 0.6,
                ease: 'power2.in',
                onComplete: () => {
                    element.style.display = 'none';
                }
            });
        }, [isMinimized]);

        useGSAP(() => {
            const element = ref.current;
            if (!element) return;

            if (isMaximized) {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
                element.classList.add('!fixed', '!top-10', '!left-0', '!w-full', '!h-[calc(100vh-var(--spacing)*10)]');
                // element.classList.remove('w-xl');
            } else {
                element.classList.remove('!fixed', '!top-10', '!left-0', '!w-full', '!h-[calc(100vh-var(--spacing)*10)]');
                element.classList.add('absolute');
                // element.classList.add('absolute', 'w-xl');
            }

            // element.classList = isMaximized ? 'w-full left-0' : 'w-xl absolute';
            // element.style.top = isMaximized ? '!calc(var(--spacing) * 10)' : '';
            // // element.style.left = isMaximized ? '0' : '';
            // element.style.height = isMaximized ? 'calc(100vh - var(--spacing) * 10)' : '';
        }, [isMaximized])

        useGSAP(() => {
            const element = ref.current;
            if (!element) return;

            const [instance] = Draggable.create(element, {
                onPress: () => {
                    focusWindow(windowKey);
                }
            });

            if (isMaximized) instance.disable();

            return () => instance.kill();
        }, [isMaximized])

        useLayoutEffect(() => {
            const element = ref.current;
            if (!element) return;
            element.style.display = isOpen ? 'block' : 'none';
        }, [isOpen]);

        return (
            <section 
                id={windowKey} 
                ref={ref} 
                style={{zIndex}}
                className='absolute'
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayname = `WindowWrapper(${Component.displayname || Component.name || 'Component'})`;

    return Wrapped;

};



export default WindowWrapper

// Higher Order Component to wrap windows with common functionality