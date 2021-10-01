//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'
import { useRef }           from 'react'
import { useFrame }         from '@react-three/fiber'
import { useLoader }        from '@react-three/fiber'
import { TextureLoader }    from 'three/src/loaders/TextureLoader'

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Moon()
{
    const moon = useRef()
    const moonlight = useRef()

    const [moonColorMap, moonAlphaMap] = useLoader(
        TextureLoader,
        [
            'assets/textures/moon/color.jpg',
            'assets/textures/moon/alpha.jpg',
        ]
    )

    useFrame(({clock}) => {
        const angle = (clock.getElapsedTime() * 0.001)

        moon.current.position.x = (Math.cos(angle * 3) * 10)
        moon.current.position.y = (Math.sin(angle * 3) * 7)

        moonlight.current.position.x = (Math.cos(angle * 3) * 10)
        moonlight.current.position.y = (Math.sin(angle * 3) * 7)
    })

    return (
        <group>
            <mesh
                ref={moon}
                rotation={[0, 0, 0]}
                position={[-3,5,-7]}
            >
                <planeGeometry
                    args={[4,2,32,32]}
                />
                <meshPhysicalMaterial
                    attach="material"
                    map={moonColorMap}
                    alphaMap={moonAlphaMap}
                    transparent={true}
                />
            </mesh>

            {/* Moonlight */}
            <pointLight
                ref={moonlight}
                args={["#cccccc", 0.008, 7]}
                intensity={0.20}
                position={[-3,5,-6.4]}
                lookAt={moon}
            />
        </group>
    )
}
