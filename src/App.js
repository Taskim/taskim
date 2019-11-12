import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import { useSwipeable } from 'react-swipeable'

import Home from './Home'
import './App.css'

const pages = [
    ({ style }) => (
        <animated.div
            className="page"
            style={{
                ...style,
                background:
                    'linear-gradient(123deg, rgba(255,189,91,1) 0%, rgba(255,137,184,1) 100%)'
            }}>
            <Home />
        </animated.div>
    ),
    ({ style }) => (
        <animated.div
            className="page"
            style={{
                ...style,
                background:
                    'linear-gradient(42deg, rgba(168,255,196,1) 0%, rgba(107,198,255,1) 100%)'
            }}>
            B
        </animated.div>
    ),
    ({ style }) => (
        <animated.div
            className="page"
            style={{ ...style, background: 'lightgreen' }}>
            C
        </animated.div>
    )
]

function App() {
    const [index, setIndex] = useState(0)

    const [lastIndex, setLastIndex] = useState(0)

    const changePage = nextPageIndex => {
        if (nextPageIndex < 0 || nextPageIndex >= pages.length) return
        setLastIndex(() => index)
        setIndex(() => nextPageIndex)
    }

    const transitions = useTransition(index, p => p, {
        from: {
            opacity: 0,
            transform: `translate3d(${
                lastIndex < index ? '100%' : '-100%'
            },0,0)`
        },
        enter: { opacity: 1, transform: `translate3d(0%,0,0)` },
        leave: {
            opacity: 0,
            transform: `translate3d(${lastIndex < index ? '-50%' : '50%'} ,0,0)`
        }
    })

    const handleKeyPress = props => {
        if (props.key === 'ArrowRight') {
            changePage(index + 1)
        } else if (props.key === 'ArrowLeft') {
            changePage(index - 1)
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress)
        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    })

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => changePage(index + 1),
        onSwipedRight: () => changePage(index - 1),
        delta: 5
    })

    return (
        <div className="simple-trans-main" {...swipeHandlers}>
            <div className="controls">
                <button
                    className="button type1"
                    onClick={() => changePage(index - 1)}>
                    ←
                </button>
                <button
                    className="button type1"
                    onClick={() => changePage(index + 1)}>
                    →
                </button>
            </div>
            {transitions.map(({ item, props, key }) => {
                const Page = pages[item]
                return <Page key={key} style={props} />
            })}
        </div>
    )
}

export default App

// Attentif aux détails, j'aime les choses bien faites
// Développeur passionné et perfectionniste, j'aime les choses bien faites
