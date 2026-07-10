import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import './Viewer3D.css';

const Viewer3D = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="viewer3d">
      <Canvas
        className="viewer3d-canvas"
        frameloop={active ? 'always' : 'demand'}
        gl={{
          antialias: false,
          alpha: true,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [1.8, 1.5, 11],
        }}
      >
        <Suspense fallback={null}>
          <Scene active={active} />
        </Suspense>
      </Canvas>

      {!active ? (
        <button className="viewer3d-overlay" onClick={() => setActive(true)}>
          <span className="viewer3d-overlay-icon" aria-hidden="true">✋</span>
          Toca para interactuar con el modelo 3D
        </button>
      ) : (
        <button className="viewer3d-exit" onClick={() => setActive(false)}>
          ✕ Salir del modo 3D
        </button>
      )}
    </div>
  );
};

export default Viewer3D;
