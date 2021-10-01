//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'
import { useRef }           from 'react'
import { useFrame }         from '@react-three/fiber'

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Ghost(props)
{
    const ghost = useRef()

    useFrame(({ clock }) => {
        const ghostAngle  = (clock.getElapsedTime() * props.speed)

        ghost.current.position.x  = (Math.cos(ghostAngle) * 4)
        ghost.current.position.z  = (Math.cos(ghostAngle) * 4)
        ghost.current.position.y  = Math.sin(ghostAngle * 3)
    })

    return (
        <pointLight
            ref={ghost}
            args={[props.color, 1, 7]}
            position={[0,2.2,2.7]}
            castShadow
        />
    )
}
