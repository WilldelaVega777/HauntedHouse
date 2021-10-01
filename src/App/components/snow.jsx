//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'
import { useState }         from 'react'
import { useEffect }        from 'react'
// import { useFrame }          from 'react'
// import * as $ from 'three'

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Snow()
{
    const [positions, setPositions] = useState([])

    useEffect(() => {

        const count = 100000
        const positionsArray = new Float32Array(count * 3)

        let counter = 0
        while (counter < positionsArray.length)
        {
            positionsArray[counter] = ((Math.random() - 0.5) * 10)
            counter++
        }

        setPositions(positionsArray)
        console.log(positionsArray.length)

    }, [])
    return (
        <points>
            <sphereGeometry
                attach="geometry"
            >
                <bufferAttribute
                    attachObject={["attributes", "position"]}
                    count={(positions.length / 3)}
                    array={positions}
                    itemSize={3}
                />
            </sphereGeometry>
            <pointsMaterial
                size={0.05}
                attach="material"
                sizeAttenuation={true}
            />
        </points>

    )

}
