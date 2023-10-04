import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <>
        <section  className='banner '  id='home'>
        <div className='container'>
            <div className='row d-flex'>
                <div  className='col-sm-12 text-center ' style={{ overflowX: 'hidden',overflowY: 'hidden', boxSizing:"border-box" }}>
                        <h6 style={{ animation: "shiver 0.8s infinite" }}>Welcome to My world</h6>
                        <h1 style={{animation: "slideInFromLeft ease-in-out 3s"}}>I'm Ritesh Singh </h1>
                        <h1 > <span  className='subtitle'>Software <span className='bounce-letter'> D</span>eveloper,</span> <br/>based in India.</h1>
                        <div className='mt-4 mb-3'>
                            <a className='main-btn mb-3' href=''>Download CV</a>
                        </div>
                       
                </div>
                
            </div>
        </div>
        </section>
    
    </>
  )
}

export default Banner