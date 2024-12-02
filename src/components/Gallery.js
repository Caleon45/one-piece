import React, { useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import ArtPiece from './ArtPiece';
import ArtModal from './Modal'; // Asegúrate de importar el componente ArtModal

const Cube = ({ frontTexture, position }) => {
  const cubeFrontTexture = useLoader(TextureLoader, frontTexture);

  return (
    <mesh position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial attachArray="material" args={[
        new THREE.MeshStandardMaterial({ color: 0x696969 }), // Atrás
        new THREE.MeshStandardMaterial({ color: 0x696969 }), // Izquierda
        new THREE.MeshStandardMaterial({ color: 0x696969 }), // Arriba
        new THREE.MeshStandardMaterial({ color: 0x696969 }), // Abajo
        new THREE.MeshStandardMaterial({ map: cubeFrontTexture }), // Frente
        new THREE.MeshStandardMaterial({ color: 0xD3D3D3 }), // Derecha
      ]} />
    </mesh>
  );
};

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  const artPieces = [
    { id: 1, name: 'Luffy', description: 'El capitán de los Piratas de Sombrero de Paja.', image: '../imagenes/image.png' },
    { id: 2, name: 'Zoro', description: 'El espadachín de los Piratas de Sombrero de Paja.', image: '../imagenes/image.png' },
    { id: 3, name: 'Nami', description: 'La navegante de los Piratas de Sombrero de Paja.', image: '../imagenes/image.png' },
    { id: 4, name: 'Sanji', description: 'El cocinero de los Piratas de Sombrero de Paja.', image: '../imagenes/image.png' },
    { id: 5, name: 'Usopp', description: 'El francotirador de los Piratas de Sombrero de Paja.', image: '../imagenes/image.png' },
    { id: 6, name: 'Chopper', description: 'El médico de los Piratas de Sombrero de Paja.', image: '../imagenes/image.png' },
  ];

  const crewTextures = [
    require('../imagenes/luffy.png'),
    require('../imagenes/image.png'),
    require('../imagenes/image.png'),
    require('../imagenes/image.png'),
    require('../imagenes/image.png'),
    require('../imagenes/image.png'),
  ];

  return (
    <>
      <h2>Galería de Arte</h2>
      <Canvas style={{ height: '80vh', width: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Center>
          {artPieces.map((art, index) => (
            <ArtPiece
              key={art.id}
              art={art}
              onSelect={setSelectedArt}
              position={[index % 3 * 3 - 3, Math.floor(index / 3) * -3 + 1.5, 0]}
            />
          ))}
          {crewTextures.map((texture, index) => (
            <Cube key={index} frontTexture={texture} position={[index % 3 * 3 - 3, Math.floor(index / 3) * -3 + 1.5, 0]} />
          ))}
        </Center>
      </Canvas>
      {selectedArt && (
        <ArtModal art={selectedArt} onClose={() => setSelectedArt(null)} />
      )}
    </>
  );
};

export default Gallery;