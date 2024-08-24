import { useFrame, extend, useThree, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function Scene () {
    const cameraControlsRef = useRef()

    const modulo1 = useLoader(GLTFLoader, "./model/modulo1.glb");
    const modulo2 = useLoader(GLTFLoader, "./model/modulo2.glb");

    const torusRef = useRef();
    const planeRef = useRef();
    const {gl, camera } = useThree();

    useFrame((state, delta) => {
        // torusRef.current.rotation.y += delta;
        // planeRef.current.rotation.y += delta;
    });

    return (
        <>
            <ambientLight intensity={2}/>
            <OrbitControls/>
            <primitive object={modulo1.scene} position={[2.5, 0, 5.3]} rotation={[0, 5.2, 0]}/>
            <primitive object={modulo2.scene} position={[2.5, 0, 7]} rotation={[0, 1, 0]} />
        </>
    )
}

export default Scene