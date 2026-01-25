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
            if (!element || !isOpen || isMinimized) return;
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

        // Minimize animation with dock indicator
        // useGSAP(() => {
        //     const element = ref.current;
        //     if (!element || !isOpen ) return;

        //     const dockIcon = document.querySelector(`[aria-label="${windowKey}"]`);
        //     if (!dockIcon) return;

        //     // Ensure parent has relative positioning for the dot
        //     if (dockIcon.parentElement) {
        //         dockIcon.parentElement.style.position = 'relative';
        //     }
        //     console.log(window);

        //     // Find or create the dot indicator
        //     let dotIndicator = dockIcon.parentElement?.querySelector(`.dock-indicator-${windowKey}`);
            
        //     if (isMinimized) {
        //         // Make sure element is visible before animating
        //         element.style.display = 'block';
                
        //         // Create dot indicator if it doesn't exist
        //         if (!dotIndicator) {
        //             dotIndicator = document.createElement('div');
        //             dotIndicator.className = `dock-indicator-${windowKey}`;
        //             dotIndicator.style.cssText = `
        //                 position: absolute;
        //                 bottom: -6px;
        //                 left: 50%;
        //                 transform: translateX(-50%) scale(0);
        //                 width: 4px;
        //                 height: 4px;
        //                 background-color: rgba(255, 255, 255, 0.85);
        //                 border-radius: 50%;
        //                 pointer-events: none;
        //             `;
        //             dockIcon.parentElement?.appendChild(dotIndicator);
        //         }

        //         const iconRect = dockIcon.getBoundingClientRect();
        //         const elementRect = element.getBoundingClientRect();
                
        //         const targetX = iconRect.left + iconRect.width / 2 - (elementRect.left + elementRect.width / 2);
        //         const targetY = iconRect.top + iconRect.height / 2 - (elementRect.top + elementRect.height / 2);

        //         // Create timeline for smooth genie-like minimize effect
        //         const tl = gsap.timeline();

        //         tl.to(element, {
        //             scaleX: 0.9,
        //             scaleY: 1.05,
        //             duration: 0.1,
        //             ease: 'power1.out'
        //         })
        //         .to(element, {
        //             scaleX: 0.5,
        //             scaleY: 0.5,
        //             y: targetY * 0.3,
        //             duration: 0.15,
        //             ease: 'power1.inOut'
        //         })
        //         .to(element, {
        //             scaleX: 0.08,
        //             scaleY: 0.08,
        //             x: targetX,
        //             y: targetY,
        //             opacity: 0,
        //             borderRadius: '50%',
        //             transformOrigin: 'center center',
        //             duration: 0.35,
        //             ease: 'power3.in',
        //             onComplete: () => {
        //                 element.style.display = 'none';
        //                 // Reset transforms for when window is restored
        //                 gsap.set(element, {
        //                     scaleX: 1,
        //                     scaleY: 1,
        //                     x: 0,
        //                     y: 0,
        //                     opacity: 1,
        //                     borderRadius: ''
        //                 });
        //             }
        //         });

        //         // Animate the dot indicator appearing
        //         gsap.to(dotIndicator, {
        //             scale: 1,
        //             duration: 0.3,
        //             delay: 0.4,
        //             ease: 'back.out(2)'
        //         });

        //     } else {
        //         // Window is being restored
        //         if (dotIndicator) {
        //             gsap.to(dotIndicator, {
        //                 scale: 0,
        //                 duration: 0.2,
        //                 ease: 'power2.in',
        //                 onComplete: () => {
        //                     dotIndicator?.remove();
        //                 }
        //             });
        //         }

        //         // Restore animation - bring window back from dock
        //         element.style.display = 'block';
                
        //         const iconRect = dockIcon.getBoundingClientRect();
        //         const elementRect = element.getBoundingClientRect();
                
        //         const startX = iconRect.left + iconRect.width / 2 - (elementRect.left + elementRect.width / 2);
        //         const startY = iconRect.top + iconRect.height / 2 - (elementRect.top + elementRect.height / 2);

        //         gsap.fromTo(element, {
        //             scaleX: 0.08,
        //             scaleY: 0.08,
        //             x: startX,
        //             y: startY,
        //             opacity: 0
        //         }, {
        //             scaleX: 1,
        //             scaleY: 1,
        //             x: 0,
        //             y: 0,
        //             opacity: 1,
        //             duration: 0.5,
        //             ease: 'power2.out'
        //         });
        //     }

        // }, [isMinimized]);

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
            // element.style.display = isOpen ? 'block' : 'none';
            if (!isMinimized) {
                element.style.display = isOpen ? 'block' : 'none';
            }
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