import React from 'react'

import './Projects.css'

const Projects = () => (
    <div className="p-container">
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
    </div>
)

export default Projects
