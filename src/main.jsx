import { Canvas } from '@react-three/fiber'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Scifi_model from './scifi_model'
import { OrbitControls, Stage } from '@react-three/drei'


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Canvas>
      <OrbitControls/>
      <Stage>
      <Scifi_model/>
      </Stage>
    
    </Canvas>
  </>
)
