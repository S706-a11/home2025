import * as THREE from 'three';
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Image, ScrollControls, useScroll, Text } from '@react-three/drei';
import { easing } from 'maath';
import '@/lib/three-utils';

export const ThreeDCarousel = ({ projects }) => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
        <fog attach="fog" args={['#191920', 8.5, 12]} />
        <ScrollControls pages={4} infinite>
          <Rig rotation={[0, 0, 0.15]}>
            <Carousel projects={projects} />
          </Rig>
        </ScrollControls>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      </Canvas>
    </div>
  );
};

function Rig(props) {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2);
    state.events.update();
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta);
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={ref} {...props} />;
}

function Carousel({ radius = 1.4, projects }) {
  const count = projects.length;
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={projects[i].id}
      url={projects[i].image}
      project={projects[i]}
      position={[
        Math.sin((i / count) * Math.PI * 2) * radius,
        0,
        Math.cos((i / count) * Math.PI * 2) * radius
      ]}
      rotation={[0, (i / count) * Math.PI * 2, 0]}
    />
  ));
}

function Card({ url, project, ...props }) {
  const ref = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [hovered, hover] = useState(false);
  const pointerOver = (e) => (e.stopPropagation(), hover(true));
  const pointerOut = () => hover(false);
  
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta);
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta);
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta);
    easing.damp(ref.current.material, 'opacity', hovered ? 0.25 : 1, 0.25, delta);
    
    if (titleRef.current && titleRef.current.material) {
      easing.damp(titleRef.current.material, 'opacity', hovered ? 1 : 0, 0.3, delta);
    }
    if (descriptionRef.current && descriptionRef.current.material) {
      easing.damp(descriptionRef.current.material, 'opacity', hovered ? 0.85 : 0, 0.3, delta);
    }
  });
  
  return (
    <group {...props}>
      <Image
        ref={ref}
        url={url}
        transparent
        side={THREE.DoubleSide}
        onPointerOver={pointerOver}
        onPointerOut={pointerOut}
        onClick={() => window.open(project.link, '_blank')}
      >
        <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
      </Image>
      
      {/* Text overlay using 3D text so it follows the card */}
      <group position={[0, 0, 0.06]}>
        <Text
          ref={titleRef}
          position={[0, 0.28, 0]}
          fontSize={0.09}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          maxWidth={0.75}
          lineHeight={1.1}
          toneMapped={false}
          material-transparent
          material-opacity={0}
          onPointerOver={pointerOver}
          onPointerOut={pointerOut}
        >
          {project.title}
        </Text>
        <Text
          ref={descriptionRef}
          position={[0, 0.02, 0]}
          fontSize={0.055}
          color="#000000"
          anchorX="center"
          anchorY="top"
          maxWidth={0.82}
          lineHeight={1.25}
          toneMapped={false}
          material-transparent
          material-opacity={0}
          onPointerOver={pointerOver}
          onPointerOut={pointerOut}
        >
          {project.description}
        </Text>
      </group>
    </group>
  );
}
