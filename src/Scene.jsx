import { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Scene({ active }) {
    const modulo1 = useLoader(GLTFLoader, "./model/modulo1.glb");
    const modulo2 = useLoader(GLTFLoader, "./model/modulo2.glb");
    const groupRef = useRef();
    const [bounds, setBounds] = useState(null);

    // Orbita alrededor del centro real de los modelos (no del origen del mundo),
    // así girar se siente como dar la vuelta al objeto y no como girar en el vacío.
    useEffect(() => {
        const box = new THREE.Box3().setFromObject(groupRef.current);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const radius = Math.max(size.x, size.y, size.z, 1) / 2;
        setBounds({ center, radius });
    }, [modulo1, modulo2]);

    return (
        <>
            <ambientLight intensity={2}/>
            {active && bounds && (
                <OrbitControls
                    target={bounds.center}
                    enableDamping
                    dampingFactor={0.1}
                    enablePan
                    screenSpacePanning
                    panSpeed={0.8}
                    minDistance={bounds.radius * 1.2}
                    maxDistance={bounds.radius * 6}
                    minPolarAngle={Math.PI * 0.1}
                    maxPolarAngle={Math.PI * 0.9}
                />
            )}
            <group ref={groupRef}>
                <primitive object={modulo1.scene} position={[2.5, 0, 5.3]} rotation={[0, 5.2, 0]}/>
                <primitive object={modulo2.scene} position={[2.5, 0, 7]} rotation={[0, 1, 0]} />
            </group>
        </>
    )
}

export default Scene
