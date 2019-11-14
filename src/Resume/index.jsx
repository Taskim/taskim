import React from 'react'

import './Resume.css'
import sg from './sg.png'
import etna from './etna.png'
import hairfie from './hairfie.svg'
import evaneos from './evaneos.svg'

const Resume = () => (
    <div className="r-container">
        <div className="r-timeline">
            <div className="r-line" />
            <div className="r-points">
                <div className="arrow-up" />
                <div className="r-point-container">
                    <div className="r-point">
                        <img className="r-logo" src={evaneos} />
                    </div>
                </div>
                <div className="r-point-container">
                    <div className="r-point">
                        <img style={{ height: 27, width: 27 }} src={hairfie} />
                    </div>
                </div>
                <div className="r-point-container">
                    <div className="r-point">
                        <img style={{ height: 8, width: 27 }} src={etna} />
                    </div>
                </div>
                <div className="r-point-container">
                    <div className="r-point">
                        <img className="r-logo" src={sg} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Resume
