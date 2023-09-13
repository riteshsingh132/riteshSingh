import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <>
        <section  className='banner ' id='home'>
        <div className='container'>
            <div className='row d-flex'>
                <div className='col-sm-12 text-center'>
                        <h6>Welcome to My world</h6>
                        <h1>I'm Ritesh Singh <br/>
                        <span>React Developer,</span> <br/>based in India.</h1>
                        <div className='mt-4'>
                            <a className='main-btn' href=''>Download CV</a>
                        </div>
                </div>
                {/* <div className='col-sm-6'>
                    This is image div
                </div> */}
            </div>
        </div>


        </section>
    
    </>
  )
}

export default Banner