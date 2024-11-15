import React from 'react'
import './Landingpage.css'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
    <div className='page w-full h-full'>
    <div className="play container p-5 w-25 shadow border border-dark">
      <Link to={'/home'}>
    <button>
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div className='mt-2'><b className='fs-4 m-3'>PLAY</b></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button></Link></div>
    </div>

    </>
  )
}

export default Landingpage