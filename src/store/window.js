import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
import { INITIAL_Z_INDEX, WindowConfig } from "#constants";

const useWindowStore = create(immer((set) => ({
    windows: WindowConfig,
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowkey, data = null) => set((state) => {
        const window = state.windows[windowkey];
        if (!window) return;
        window.isOpen = true;
        window.zIndex = state.nextZIndex;
        window.data = data ?? window.data;
        state.nextZIndex += 1;
    }),
    maximizeWindow: (windowkey) => set((state) => {
        const window = state.windows[windowkey];
        if (!window) return;
        window.isMaximized = !window.isMaximized;  
    }),
    minimizeWindow: (windowkey) => set((state) => { 
        const window = state.windows[windowkey];
        if (!window) return;
        console.log(window);
        window.isMinimized = !window.isMinimized;
        // window.isOpen = window.isMinimized ? false : true;
    }),
    closeWindow: (windowkey) => set((state) => {
        const window = state.windows[windowkey];
        if (!window) return;
        window.isOpen = false;
        window.zIndex = INITIAL_Z_INDEX;
        window.data = null;
    }),
    focusWindow: (windowkey) => set((state) => {
        const window = state.windows[windowkey];
        if (!window || !window.isOpen) return;
        window.zIndex = state.nextZIndex++;
    }),
})));

export default useWindowStore;