import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei'; // Importa el componente Box
import * as THREE from 'three';

const ArtPiece = ({ art, onSelect, position }) => {
  const [hovered, setHovered] = useState(false); // Estado para controlar si está siendo hover
  let rotation = 0;

  // Cargar la textura de la imagen
  const texture = new THREE.TextureLoader().load(art.image);

  useFrame(() => {
    rotation += 0.005; // Velocidad de rotación más lenta
  });

  return (
    <mesh
      onClick={() => onSelect(art)}
      onPointerOver={() => setHovered(true)} // Cambia el estado a true al pasar el mouse
      onPointerOut={() => setHovered(false)} // Cambia el estado a false al salir el mouse
      rotation={[0, rotation, 0]}
      position={position} // Usa la posición pasada como prop
      scale={hovered ? 1.2 : 1} // Aumenta el tamaño si está siendo hover
    >
      <Box args={[2, 2, 2]} /> {/* Tamaño del cuadro */}
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default ArtPiece;