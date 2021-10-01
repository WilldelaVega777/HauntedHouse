//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Grave(props) {
    return (
        <mesh
            castShadow
            receiveShadow
            rotation={props.rotation}
            position={props.position}
            scale={props.scale}
        >
            <boxBufferGeometry
                args={[0.6,0.8,0.2]}
            />
            <meshStandardMaterial
                attach="material"
                color="#ffffff"
            />
        </mesh>
    )
}
