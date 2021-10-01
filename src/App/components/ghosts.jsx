//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import React                from 'react'
import { useState }         from 'react'
import { useEffect }        from 'react'
import { Ghost }            from './ghost'


//-----------------------------------------------------------------------------
// Utility Functions Section
//-----------------------------------------------------------------------------
const getRandomNumber = (maxNum, toFix=3) => {
    let retVal = parseFloat(Math.random().toFixed(3))
    if (toFix === 0)
    {
        retVal = Math.floor(Math.random() * maxNum)
    }
    return retVal
}
//-----------------------------------------------------------------------------
const getRandomColor = () => {
    const h = getRandomNumber(360,0)
    const s = getRandomNumber(100,0)
    const l = getRandomNumber(100,0)

    return {h, s, l}
}
//-----------------------------------------------------------------------------
const hslToHex = (hsl) => {

    let h = hsl.h
    let s = hsl.s
    let l = hsl.l

    l /= 100
    const a = s * Math.min(l, 1 - l) / 100
    const f = n => {
      const k = (n + h / 30) % 12
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
      return Math.round(255 * color).toString(16).padStart(2, '0')
    };

    return `#${f(0)}${f(8)}${f(4)}`

}

//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
export function Ghosts()
{
    const [ghostData, setGhostData] = useState([])

    useEffect(() => {
        const totalGhosts = 5
        const ghostDataArray = []
        let currentGhost = 0
        while (currentGhost < totalGhosts)
        {
            ghostDataArray.push({
                speed: getRandomNumber(1),
                color: hslToHex(getRandomColor())
            })
            currentGhost++
        }

        setGhostData(ghostDataArray)

    }, [])

    return (
        <group>
            {
                ghostData.map((ghost, index) => {
                    return (
                        <Ghost
                            key={index}
                            speed={ghost.speed}
                            color={ghost.color}
                        />
                    )
                })

            }
        </group>
    )
}
