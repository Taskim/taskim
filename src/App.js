import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
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
            CV
        </animated.div>
    ),
    ({ style }) => (
        <animated.div
            className="page"
            style={{ ...style, background: 'lightblue' }}>
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
    return (
        <div className="simple-trans-main">
            <div className="controls">
                <button className="left" onClick={() => changePage(index - 1)}>
                    left
                </button>
                <button className="right" onClick={() => changePage(index + 1)}>
                    right
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
