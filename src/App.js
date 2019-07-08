import React, { useRef } from 'react'
// import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './App.css'
import './devices.css'
import avatar from './avatar.png'
import stars from './stars.svg'
const url = (name, wrap = false) =>
    `${
        wrap ? 'url(' : ''
    }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
        wrap ? ')' : ''
    }`

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
        glow: [0, 0, 0.5, 1, 0.25, 0],
        config: { mass: 1, tension: 450, friction: 32 }
    }))
    const parallax = useRef(null)
    console.log('props', props)
    return (
        <>
            <Parallax ref={parallax} pages={4}>
                {/*<ParallaxLayer
                    offset={0}
                    speed={-0.5}
                    style={{
                        margin: 40,
                        zIndex: 10,
                        width: 'auto',
                        height: 'auto'
                    }}>
                    <svg
                        height="211.99986px"
                        viewBox="0 0 511.99986 511.99986"
                        width="211.99986px"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m477.449219 256c0-21.75 39.410156-48.386719 34.050781-68.449219-5.550781-20.757812-53.15625-24.101562-63.671875-42.277343-10.667969-18.433594 10.125-61.304688-4.835937-76.265626-14.960938-14.960937-57.832032 5.828126-76.269532-4.835937-18.171875-10.515625-21.515625-58.121094-42.273437-63.671875-20.0625-5.359375-46.699219 34.050781-68.449219 34.050781s-48.386719-39.410156-68.449219-34.050781c-20.757812 5.550781-24.101562 53.15625-42.277343 63.671875-18.433594 10.667969-61.304688-10.125-76.265626 4.835937-14.960937 14.960938 5.828126 57.832032-4.835937 76.269532-10.515625 18.171875-58.121094 21.515625-63.671875 42.273437-5.359375 20.0625 34.050781 46.699219 34.050781 68.449219s-39.410156 48.386719-34.050781 68.449219c5.550781 20.757812 53.15625 24.101562 63.671875 42.277343 10.667969 18.433594-10.125 61.304688 4.835937 76.265626 14.960938 14.960937 57.832032-5.828126 76.269532 4.835937 18.171875 10.515625 21.515625 58.121094 42.273437 63.671875 20.0625 5.359375 46.699219-34.050781 68.449219-34.050781s48.386719 39.410156 68.449219 34.050781c20.757812-5.550781 24.101562-53.15625 42.277343-63.671875 18.433594-10.667969 61.304688 10.125 76.265626-4.835937 14.960937-14.960938-5.828126-57.832032 4.835937-76.269532 10.515625-18.171875 58.121094-21.515625 63.671875-42.273437 5.359375-20.0625-34.050781-46.699219-34.050781-68.449219zm0 0"
                            fill="#ffee8c"
                        />
                        <path
                            d="m426.957031 256c0 86.347656-64.019531 157.746094-147.191406 169.3125-7.765625 1.089844-15.695313 1.640625-23.761719 1.640625-94.417968 0-170.96875-76.539063-170.96875-170.953125 0-94.417969 76.550782-170.957031 170.96875-170.957031 8.066406 0 15.996094.554687 23.761719 1.640625 83.171875 11.566406 147.191406 82.964844 147.191406 169.316406zm0 0"
                            fill="#f28f44"
                        />
                        <path
                            d="m426.957031 256c0 86.347656-64.019531 157.746094-147.191406 169.3125-83.175781-11.566406-147.195313-82.964844-147.195313-169.3125 0-86.351562 64.019532-157.75 147.195313-169.316406 83.171875 11.566406 147.191406 82.964844 147.191406 169.316406zm0 0"
                            fill="#ffd073"
                        />
                        <g fill="#cc9236">
                            <path d="m155.875 229.488281c-2.003906 0-4.011719-.765625-5.539062-2.296875-3.0625-3.0625-3.0625-8.023437 0-11.082031 17.53125-17.53125 46.054687-17.53125 63.582031 0 3.0625 3.058594 3.0625 8.019531 0 11.082031-3.058594 3.058594-8.019531 3.058594-11.082031 0-11.417969-11.421875-29.996094-11.421875-41.417969 0-1.53125 1.53125-3.535157 2.296875-5.542969 2.296875zm0 0" />
                            <path d="m356.125 229.488281c-2.007812 0-4.011719-.765625-5.542969-2.296875-11.417969-11.421875-30-11.417968-41.417969 0-3.0625 3.058594-8.023437 3.058594-11.082031 0-3.0625-3.0625-3.0625-8.023437 0-11.082031 17.527344-17.53125 46.054688-17.53125 63.585938 0 3.058593 3.058594 3.058593 8.023437 0 11.082031-1.53125 1.53125-3.539063 2.296875-5.542969 2.296875zm0 0" />
                            <path d="m256 310.582031c-17.015625 0-33.015625-6.628906-45.046875-18.660156-3.058594-3.0625-3.058594-8.023437 0-11.082031 3.0625-3.0625 8.023437-3.0625 11.082031 0 9.074219 9.070312 21.132813 14.066406 33.964844 14.066406s24.890625-4.996094 33.964844-14.066406c3.058594-3.0625 8.023437-3.0625 11.082031 0 3.058594 3.058594 3.058594 8.019531 0 11.082031-12.03125 12.03125-28.03125 18.660156-45.046875 18.660156zm0 0" />
                        </g>
                    </svg>
                </ParallaxLayer>*/}
                <ParallaxLayer
                    offset={1}
                    speed={1}
                    style={{ backgroundColor: '#805E73', height: '150vh' }}
                />
                <ParallaxLayer
                    offset={2}
                    speed={1}
                    style={{ backgroundColor: '#87BCDE' }}
                />

                <ParallaxLayer
                    offset={3}
                    speed={1}
                    style={{ backgroundColor: '#A7CA0E' }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    style={{
                        backgroundImage: url('stars', true),
                        backgroundSize: 'cover'
                    }}
                />

                {/*<ParallaxLayer
                    offset={1.3}
                    speed={-0.3}
                    style={{ pointerEvents: 'none' }}>
                    <img
                        src={url('satellite4')}
                        style={{ width: '15%', marginLeft: '70%' }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '55%'
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '15%'
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.75}
                    speed={0.5}
                    style={{ opacity: 0.1 }}>
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '70%'
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '40%'
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '10%'
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '75%'
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1.6}
                    speed={-0.1}
                    style={{ opacity: 0.4 }}>
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '60%'
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '25%',
                            marginLeft: '30%'
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '10%',
                            marginLeft: '80%'
                        }}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2.6}
                    speed={0.4}
                    style={{ opacity: 0.6 }}>
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '20%',
                            marginLeft: '5%'
                        }}
                    />
                    <img
                        src={url('cloud')}
                        style={{
                            display: 'block',
                            width: '15%',
                            marginLeft: '75%'
                        }}
                    />
                    </ParallaxLayer>*/}

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none'
                    }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true)
                    }}>
                    {/*<div class="device device-iphone-x">
  <div class="device-frame">
    <img class="device-content" src="...">
  </div>
  <div class="device-stripe"></div>
  <div class="device-header"></div>
  <div class="device-sensors"></div>
  <div class="device-btns"></div>
  <div class="device-power"></div>
                </div>*/}
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(1)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        zIndex: 2
                    }}>
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
                    <animated.div className="message" style={{}}>
                        Touch me
                    </animated.div>
                </ParallaxLayer>

                <ParallaxLayer
                    offset={0}
                    speed={0.15}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                />
                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(2)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                    <div className="device device-macbook-pro">
                        <div className="device-frame">
                            <img />
                            <iframe
                                id="inlineFrameExample"
                                // title="Inline Frame Example"
                                className="device-content"
                                // width="300"
                                // height="200"
                                src="https://taskim.github.io/labwhat/"
                            />
                        </div>
                        <div className="device-stipe" />
                        <div className="device-header" />
                        <div className="device-sensors" />
                        <div className="device-btns" />
                        <div className="device-power" />
                    </div>
                    <div className="message">{'Try me'}</div>
                </ParallaxLayer>

                {/*<ParallaxLayer
                    offset={2}
                    speed={0.1}
                    onClick={() => parallax.current.scrollTo(3)}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column'
                    }}>
                    <div className="device device-iphone-8">
                        <div className="device-frame">
                            <img
                                className="device-content"
                                src="https://picturepan2.github.io/devices.css/src/img/bg-01.jpg"
                            />
                        </div>
                        <div className="device-stipe" />
                        <div className="device-header" />
                        <div className="device-sensors" />
                        <div className="device-btns" />
                        <div className="device-power" />
                    </div>
                    <div className="message">{'Try me'}</div>
                </ParallaxLayer>*/}

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

export default Card
