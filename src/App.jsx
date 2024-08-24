import { useState } from 'react'
import { Canvas } from "@react-three/fiber"
import Title from './Title';
import LoadingMiddleware from './LoadingMiddleware';
import './App.css'
import Scene from './Scene';
import Footer from './Footer';
import { color } from 'three/examples/jsm/nodes/shadernode/ShaderNode';
import Instrucciones from './Instrucciones';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoadingMiddleware/>
    <Title/>
    <div className="canvas-container">
      <Canvas className="canvas"
        gl={{
          antialias: false,
          alpha: true,
        }}
        // orthographic
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          // zoom: 120,
          position: [1.8, 1.5, 11],
        }}
        >
        <Scene/>
      </Canvas>
      <Instrucciones/>
    </div>
    <Footer/>
    </>
  )
}

export default App
