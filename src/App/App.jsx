//-----------------------------------------------------------------------------
// Imports Section
//-----------------------------------------------------------------------------
import './App.css'
import React                from 'react'
import { Suspense }         from 'react'
import { Canvas }           from '@react-three/fiber'
import { OrbitControls }    from '@react-three/drei'
import { Stars }            from '@react-three/drei'
import { Floor }            from './components/floor'
import { Lights }           from './components/lights'
import { Fog }              from './components/fog'
import { Graveyard }        from './components/graveyard'
import { House }            from './components/house'
import { Ghosts }           from './components/ghosts'
import { Moon }             from './components/moon'
import { Snow }             from './components/snow'


//-----------------------------------------------------------------------------
// Component Section
//-----------------------------------------------------------------------------
function App()
{
    return (
        <div className="App">
            <Canvas
                shadow
                dpr={[1,2]}
                camera={{
                    fov: 75,
                    position: [3, 3, 9],
                    rotation: [0, (Math.PI/2.5), 0]
                }}
            >
                    <Suspense fallback={null}>

                        <OrbitControls autoRotate={true}/>

                        <Stars/>
                        <Moon/>
                        <Fog/>
                        <House position={[0,0]}/>
                        <Floor/>
                        <Graveyard position={[-10,((2.5/2)+0.005),-10]}/>
                        <Ghosts/>
                        <Lights/>
                        {/*
                        <Snow/>
                        */}

                    </Suspense>
            </Canvas>
        </div>
    );
}

//-----------------------------------------------------------------------------
// Exports Section
//-----------------------------------------------------------------------------
export default App;
