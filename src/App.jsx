import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Dock, Navbar, Welcome } from '#components'
import { TerminalWindow, SafariWindow } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
      <SafariWindow />
    </main>
  )
}

export default App