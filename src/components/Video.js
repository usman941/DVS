import React from 'react'
import '../App.css'
import bgVideo from '../assets/bgVideos/video1.mkv';
const Video = () => {
  return (
  <>
    <div className='main h-auto'>
        <video  src={bgVideo} autoPlay loop muted/>
    </div>
  </>
  )
}

export default Video