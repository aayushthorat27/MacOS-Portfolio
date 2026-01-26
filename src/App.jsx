import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Navbar, Welcome } from '#components'
import { TerminalWindow, SafariWindow, Resume, Finder, TextFile, ImageFile, Contact } from '#windows';

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
      <Analytics />
    </main>
  )
}

export default App
