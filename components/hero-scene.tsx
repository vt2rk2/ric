'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, PointMaterial, Points } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'

const RED = '#e5202e'

function Core() {
  const group = useRef<Group>(null)
  const shell = useRef<Mesh>(null)
  const ringA = useRef<Mesh>(null)
  const ringB = useRef<Mesh>(null)

  useFrame((state, delta) => {
    const { pointer } = state
    if (group.current) {
      group.current.rotation.y += (pointer.x * 0.6 - group.current.rotation.y) * 0.05
      group.current.rotation.x += (-pointer.y * 0.4 - group.current.rotation.x) * 0.05
    }
    if (shell.current) {
      shell.current.rotation.y += delta * 0.25
      shell.current.rotation.z += delta * 0.1
    }
    if (ringA.current) ringA.current.rotation.z += delta * 0.4
    if (ringB.current) ringB.current.rotation.z -= delta * 0.3
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh>
          <icosahedronGeometry args={[1.15, 8]} />
          <MeshDistortMaterial color="#0d0d0d" emissive={RED} emissiveIntensity={0.25} roughness={0.2} metalness={0.9} distort={0.35} speed={2} />
        </mesh>
        <mesh ref={shell}>
          <icosahedronGeometry args={[1.75, 1]} />
          <meshBasicMaterial color={RED} wireframe transparent opacity={0.55} />
        </mesh>
        <mesh ref={ringA} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[2.5, 0.008, 16, 200]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.7} />
        </mesh>
        <mesh ref={ringB} rotation={[Math.PI / 1.8, Math.PI / 5, 0]}>
          <torusGeometry args={[2.9, 0.012, 16, 200]} />
          <meshBasicMaterial color={RED} transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>
  )
}

function Particles({ count = 1800 }: { count?: number }) {
  const ref = useRef<Group>(null)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03
  })

  return (
    <group ref={ref}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#ffffff" size={0.025} sizeAttenuation depthWrite={false} opacity={0.7} />
      </Points>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={40} color={RED} />
      <pointLight position={[-5, -3, 2]} intensity={20} color="#ffffff" />
      <Core />
      <Particles />
    </Canvas>
  )
}
