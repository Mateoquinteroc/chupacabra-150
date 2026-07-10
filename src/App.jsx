import { useState } from 'react'
import Navbar from './Navbar';
import Title from './Title';
import Viewer3D from './Viewer3D';
import SceneLoader from './SceneLoader';
import Instrucciones from './Instrucciones';
import Footer from './Footer';
import './App.css'

function App() {
  const [showHelp, setShowHelp] = useState(true);

  return (
    <>
      <Navbar onHelpClick={() => setShowHelp(true)} />
      <main>
        <section id="inicio">
          <Title />
        </section>
        <section id="visor" className="visor-section">
          <Viewer3D />
        </section>
      </main>
      <SceneLoader />
      <Instrucciones isOpen={showHelp} onClose={() => setShowHelp(false)} />
      <Footer />
    </>
  )
}

export default App
