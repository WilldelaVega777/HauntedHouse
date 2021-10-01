//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Pretzel(props) {
    return (
        <mesh
            castShadow
            receiveShadow
            rotation={[0, 0, 0]}
            position={props.position}
            scale={[.1,.1,.1]}
        >
            <torusKnotGeometry/>
            <meshPhysicalMaterial
                attach="material"
                color={props.color}
            />
        </mesh>
    )
}
