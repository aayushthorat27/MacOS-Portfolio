import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Navbar, Welcome } from '#components'
import { TerminalWindow, SafariWindow, Resume, Finder, TextFile, ImageFile, Contact } from '#windows';

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
    </main>
  )
}

export default App