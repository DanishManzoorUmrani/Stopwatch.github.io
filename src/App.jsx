import React, { useRef, useState } from 'react'

import './App.css'
function App() {



    const [time, settime] = useState(null);
    const [now, setnow] = useState(null);
    const interref = useRef(null);

    const handlestart = () => {
        settime(Date.now());
        setnow(Date.now());
        interref.current = setInterval(() => {
            settime(Date.now());

        }, 10);
    }
    const handlestop = () => {
        clearInterval(interref.current)
    };

    let timepass = (time - now) / 1000;
    return (
        <div className='App'>
            <h1 >Stop watch</h1>
            <h2 className='color'> {timepass.toFixed(3)}</h2>
            <div>
                <button onClick={handlestart}>start</button>
                <button onClick={handlestop}>stop</button>
            </div>
        </div>
    )
}

export default App