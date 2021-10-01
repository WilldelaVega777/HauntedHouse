//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Bush(props) {
    return (
        <mesh
            castShadow
            receiveShadow
            rotation={[0, 0, 0]}
            position={props.position}
            scale={props.scale}
        >
            <sphereGeometry
                args={[1,16,16]}
            />
            <meshStandardMaterial
                attach="material"
                color={props.color}
            />
        </mesh>
    )
}
