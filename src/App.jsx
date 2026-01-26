import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Home, Navbar, Welcome } from '#components'
import { TerminalWindow, SafariWindow, Resume, Finder, TextFile, ImageFile, Contact, Photos } from '#windows';

import { Analytics } from '@vercel/analytics/react';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      <SafariWindow />
      <Resume />
      <Finder />
      <TextFile />
      <ImageFile />
      <Contact />
      <Home />
      <Photos />
      <Analytics />
    </main>
  )
}

export default App
