import React from 'react'
import ritImg from "../assets/Ritesh.jpg"
import "./About.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
    return (
        <>
            <section id='about' className='abutwrapper'>
                <div className='container'>
                    <div className='row justify-content-between align-item-center' >
                        <div className='col-lg-5 mb-4 mb-lg-0 ' >
                            <img src={ritImg} className='img-fluid rounded-3' />
                        </div>
                        <div className='col-lg-7 ps-lg-5 text-center text-lg-start'>
                            <div className='my-3 my-lg-0'>
                                <span className='subtitle'>My About Details</span>
                                <h2>About Me</h2>
                                <p>My Name is Ritesh Singh, And I am a Software Developper</p>
                            </div>
                            <div className='pt-4'>
                                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className=" mb-3 justify-content-center justify-content-sm-between" >
                                    <Tab eventKey="profile" title="Main Skll" className='nav-item'>
                                        <div className='d-flex justify-content-between'>
                                            <h6>DESIGNING</h6>
                                            <div className='justify-content-end'>{"95%"}</div>
                                        </div>
                                        <ProgressBar animated now={95} label={`${60}%`} visuallyHidden />
                                        <div className='d-flex justify-content-between'>
                                            <h6>DESIGNING</h6>
                                            <div className='justify-content-end'>{"85%"}</div>
                                        </div>
                                        <ProgressBar animated now={85} label={`${60}%`} visuallyHidden />
                                        <div className='d-flex justify-content-between'>
                                            <h6>DESIGNING</h6>
                                            <div className='justify-content-end'>{"80%"}</div>
                                        </div>
                                        <ProgressBar animated now={80} label={`${60}%`} visuallyHidden />

                                    </Tab>
                                    <Tab eventKey="home" title="Exprience" className='nav-item'>
                                        
                                        <ul className='text-start ps-0'>
                                            <li>
                                                <a href='#'>React Developer<span> Harvest Design</span></a> May'2023 - Current
                                            </li>
                                            <li>
                                                <a href='#'>React Developer<span> Nykaa.com</span></a> Oct'2021 - Apr'2023
                                            </li>
                                            <li>
                                                <a href='#'>React Developer<span> Limeroad.com</span></a> Jan'2021 -Oct'2021 
                                            </li>
                                        </ul>
                                        
                                    </Tab>
                                    <Tab eventKey="education" title="Education" className='nav-item'>

                                        <div className='justify-content-end'>{"98%"}</div>
                                        <ProgressBar animated now={98} label={`${98}%`} visuallyHidden />
                                    </Tab>
                                </Tabs>

                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default About