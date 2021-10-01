//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'

import { DoubleSide }       from 'three'
import { TextureLoader }    from 'three/src/loaders/TextureLoader'
import { useLoader }        from '@react-three/fiber'

import { Bush }             from './bush'

//-----------------------------------------------------------------------------
// Utility Functions
//-----------------------------------------------------------------------------
const name = (object, type) => `assets/textures/${object}/${type}.jpg`

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function House(props)
{
    const [
        doorColorMap,
        doorAlphaMap,
        doorDisplacementMap,
        doorNormalMap,
        doorRoughnessMap,
        doorMetalnessMap,
        doorAmbientOcclusionMap
    ] = useLoader(
        TextureLoader,
        [
            name('door','color'),
            name('door','alpha'),
            name('door','height'),
            name('door','normal'),
            name('door','roughness'),
            name('door','metalness'),
            name('door','ambientOcclusion')
        ]
    )

    const [
        bricksColorMap,
        bricksNormalMap,
        bricksRoughnessMap,
        bricksAmbientOcclusionMap
    ] = useLoader(
        TextureLoader,
        [
            name('bricks','color'),
            name('bricks','normal'),
            name('bricks','roughness'),
            name('bricks','ambientOcclusion')
        ]
    )

    return (
        <group position={[props.position[0], ((2.5/2)+0.005), props.position[1]]}>

            {/* Walls */}
            <mesh
                receiveShadow
                rotation={[0, 0, 0]}
                position={[0,0,0]}
            >
                <boxBufferGeometry
                    attach="geometry"
                    args={[4,2.5,4]}
                />
                <meshStandardMaterial
                    attach="material"
                    map={bricksColorMap}
                    normalMap={bricksNormalMap}
                    roughnessMap={bricksRoughnessMap}
                    aoMap={bricksAmbientOcclusionMap}
                    displacementScale={0.2}
                />
            </mesh>

            {/* Roof */}
            <mesh
                receiveShadow
                rotation={[0, (Math.PI /4), 0]}
                position={[0,1.7,0]}
            >
                <coneBufferGeometry
                    attach="geometry"
                    args={[3.5,1,4]}
                />
                <meshStandardMaterial
                    attach="material"
                    color="#b35f45"
                    side={DoubleSide}
                />
            </mesh>

            {/* Door */}
            <mesh
                receiveShadow
                rotation={[0, 0, 0]}
                position={[0,-0.25,(2 + 0.002)]}
            >
                <planeBufferGeometry
                    attach="geometry"
                    args={[2.2,2.2,100,100]}
                />
                <meshPhysicalMaterial
                    map={doorColorMap}
                    alphaMap={doorAlphaMap}
                    displacementMap={doorDisplacementMap}
                    normalMap={doorNormalMap}
                    roughnessMap={doorRoughnessMap}
                    metalnessMap={doorMetalnessMap}
                    aoMap={doorAmbientOcclusionMap}
                    attach="material"
                    side={DoubleSide}
                    transparent={true}
                    displacementScale={0.12}
                    roughness={.4}
                />
            </mesh>

            {/* Bushes */}
            <Bush
                position={[1.0, -0.9, 2.2]}
                scale={[0.5, 0.5, 0.5]}
                color="#89c854"
            />
            <Bush
                position={[1.6, -1.1, 2.1]}
                scale={[0.25, 0.25, 0.25]}
                color="#89c854"
            />
            <Bush
                position={[-0.8, -1.1, 2.2]}
                scale={[-0.4, 0.4, 0.4]}
                color="#89c854"
            />
            <Bush
                position={[-1, -1.17, 2.6]}
                scale={[-0.15, 0.15, 0.15]}
                color="#89c854"
            />

            {/* Light */}
            <pointLight args={["#cc4a13", 1, 7]}
                castShadow
                position={[0,2.2,2.7]}
            />

        </group>
    )
}
