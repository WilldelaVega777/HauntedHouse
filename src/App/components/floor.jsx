//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'
import { DoubleSide }       from 'three'
import { TextureLoader }    from 'three/src/loaders/TextureLoader'
import { useLoader }        from '@react-three/fiber'
import * as $               from 'three'


//-----------------------------------------------------------------------------
// Utility Functions
//-----------------------------------------------------------------------------
const name = (object, type) => `assets/textures/${object}/${type}.jpg`


//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Floor()
{
    const [
        grassColorMap,
        grassNormalMap,
        grassRoughnessMap,
        grassAmbientOcclusionMap
    ] = useLoader(
        TextureLoader,
        [
            name('grass','color'),
            name('grass','normal'),
            name('grass','roughness'),
            name('grass','ambientOcclusion')
        ]
    )

    if (grassColorMap) {
        grassColorMap.repeat.set(16,8);
        grassColorMap.wrapS = $.RepeatWrapping
        grassColorMap.wrapT = $.RepeatWrapping
        grassColorMap.anisotropy = 16
    }
    else
    {
        console.log('No ColorMap')
    }
    if (grassNormalMap) {
        grassNormalMap.repeat.set(8,8);
        grassNormalMap.wrapS = $.RepeatWrapping
        grassColorMap.wrapT = $.RepeatWrapping
    }
    else
    {
        console.log('No Normal Map')
    }
    if (grassRoughnessMap) {
        grassRoughnessMap.repeat.set(8,8);
        grassRoughnessMap.wrapS = $.RepeatWrapping
        grassColorMap.wrapT = $.RepeatWrapping
    }
    else
    {
        console.log('No Roughness Map')
    }
    if (grassAmbientOcclusionMap) {
        grassAmbientOcclusionMap.repeat.set(8,8);
        grassAmbientOcclusionMap.wrapS = $.RepeatWrapping
        grassColorMap.wrapT = $.RepeatWrapping
    }
    else
    {
        console.log('No Occlusion Map')
    }

    return (
        <mesh
            rotation={[((Math.PI / 2) * -1), 0, 0]}
            position={[0,0,0]}
            receiveShadow
        >
            <planeBufferGeometry
                attach="geometry"
                args={[30,30,1000,1000]}
            />
            <meshPhysicalMaterial
                attach="material"
                map={grassColorMap}
                aoMap={grassAmbientOcclusionMap}
                side={DoubleSide}
            />
        </mesh>
    )
}
