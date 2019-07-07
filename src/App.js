import React from 'react'
// import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './App.css'
import avatar from './avatar.png'

const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 10,
    (x - window.innerWidth / 2) / 10,
    1.1
]
const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Card() {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 1, tension: 500, friction: 12 }
    }))
    console.log('props', props)
    return (
        <>
            <div className="header">
                <animated.div
                    className="card"
                    onMouseMove={({ clientX: x, clientY: y }) =>
                        set({ xys: calc(x, y) })
                    }
                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                    style={{ transform: props.xys.interpolate(trans) }}>
                    <div className="img-container">
                        <img className="avatar" src={avatar} />
                    </div>
                    <div className="card-text">
                        <div>Tony</div>
                        <div>Front-end Developer @evaneos</div>
                    </div>
                </animated.div>
            </div>
            <div className="projects" />
        </>
    )
}

export default Card
