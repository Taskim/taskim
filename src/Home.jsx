import React from 'react'
import Particles from 'react-particles-js'

import './Home.css'

const Home = () => (
    <div className="container">
        <Particles
            params={{
                particles: {
                    number: {
                        value: 260,
                        density: {
                            enable: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        random: true,
                        speed: 1,
                        direction: 'top',
                        out_mode: 'out'
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'bubble'
                        },
                        onclick: {
                            enable: true,
                            mode: 'repulse'
                        }
                    },
                    modes: {
                        bubble: {
                            distance: 250,
                            duration: 2,
                            size: 0,
                            opacity: 0
                        },
                        repulse: {
                            distance: 400,
                            duration: 4
                        }
                    }
                    // retina_detect: true
                }
            }}
            canvasClassName="particles"
        />
        <div className="name">{'<Taskim />'}</div>
        <div className="rname">Tony Miksa</div>
        <div className="subtitle">
            Développeur passionné et perfectionniste, qui aime les choses bien
            faites
        </div>
    </div>
)

export default Home
