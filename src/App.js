import React, { useEffect, useRef } from 'react'

import Home from './Home'
import Resume from './Resume'
import Projects from './Projects'
import './App.css'

function App() {
    const containerRef = useRef()

    const scrollLeft = () => {
        const container = containerRef.current
        container.focus()
        container.scrollTo(container.scrollLeft - 100, 0)
    }

    const scrollRight = () => {
        const container = containerRef.current
        // console.log('R', container.scrollLeft)
        container.focus()
        container.scrollTo(container.scrollLeft + 100, 0)
    }

    const handleKeyPress = props => {
        if (props.key === 'ArrowRight') {
            scrollRight()
        } else if (props.key === 'ArrowLeft') {
            scrollLeft()
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    })

    return (
        <div className="app-container" ref={containerRef}>
            {/*<div className="controls">
                <button className="button type1" onClick={() => scrollLeft()}>
                    ←
                </button>
                <button className="button type1" onClick={scrollRight}>
                    →
                </button>
    </div>*/}
            <div
                className="page"
                style={{
                    background:
                        'linear-gradient(90deg, rgba(255,189,91,1) 0%, rgba(255,137,184,1) 100%)'
                }}>
                <Home />
            </div>

            <div
                className="page"
                style={{
                    background:
                        'linear-gradient(90deg, rgba(255,137,184,1) 0%, rgba(184,166,218,1) 100%)'
                }}>
                <Resume />
            </div>

            <div
                className="page"
                style={{
                    background:
                        'linear-gradient(90deg, rgba(184,166,218,1) 0%, rgba(107,198,255,1) 100%)'
                }}>
                <Projects />
            </div>
            <div className="page" style={{ background: 'lightpink' }}>
                CONTACT
            </div>
        </div>
    )
}

export default App

// Attentif aux détails, j'aime les choses bien faites
// Développeur passionné et perfectionniste, j'aime les choses bien faites
