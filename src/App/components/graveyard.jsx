//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'
import { Grave }            from './grave'

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Graveyard() {

    // Positions
    const gravePositions = []
    let howManyGraves = 0
    while (howManyGraves < 50)
    {
        const angle  = (Math.random() * (Math.PI * 2))
        const radius = (3 + Math.random() * 6)

        const x = (Math.sin(angle) * radius)
        const y = 0.3
        const z = (Math.cos(angle) * radius)

        gravePositions[howManyGraves] = [x, y, z]

        howManyGraves++
    }

    return (
        <group>
            {
                gravePositions.map((grave, index) => {
                    return (<Grave
                        key={index}
                        position={grave}
                        rotation={[0, ((Math.random() - 0.5) * 0.4), ((Math.random() - 0.5) * 0.4)]}
                    />)
                })
            }
        </group>
    )

}
