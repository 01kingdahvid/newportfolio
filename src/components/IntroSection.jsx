import React from 'react'
import '../css/IntroSection.css'
import { Container } from 'react-bootstrap'

import v1 from '../assets/images/Vector (8).svg'
import v2 from '../assets/images/Group 7.svg'
import v3 from '../assets/images/Group 6.svg'
import v4 from '../assets/images/logos_javascript.svg'
import v5 from '../assets/images/Vector (9).svg'
import v6 from '../assets/images/Group 5.svg'

import avt from '../assets/images/Saly-13.png'
import avatar from '../assets/images/Ellipse 2 (1).png'
import mail from '../assets/images/Group 11 (1).svg'
import vm from '../assets/images/Vector (11).svg'

import git from '../assets/images/Vector (11b).svg'
import gm from '../assets/images/Vector (12).svg'
import { Link } from 'react-router-dom'

const IntroSection = () => {
  return (
    <div className='i-c'>

        <Container>
<div className="i-container">

<div className="i-frame">
<div className="i-header">
    <h6 className='i-h6'>Full Stack Developer</h6>
</div>

<div className="i-text">
    <h1 className='i-h1'>David Onyekwere</h1>
    <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
</div>

<div className="i-frameworks">
    <div className="i-fr">
    <img src={v1} alt="" />
<img src={v2} alt="" className='fr-img'/>
<img src={v3} alt="" className='fr-img'/>
<img src={v4} alt="" className='fr-img'/>
<img src={v5} alt="" className='fr-img'/>
<img src={v6} alt="" className='fr-img'/>
    </div>

</div>

<div className="last-line">
    <img src={avatar} alt="" className='i-avt'/>
    <p className="i-socials">
    <Link to="" className='ll'> <img src={mail} alt="" className='s-img'/> Email Me <img src={vm} alt="" className='s-img'/></Link>
    <Link to="" className='ll'> <img src={git} alt="" className='s-img'/> Github <img src={gm} alt="" className='s-img'/></Link>
    </p>
    
</div>
</div>

<div className="i-image-frame">
    <div className="img-img image-fluid">
    <img src={avt} alt="" className='i-img' />
    </div>
</div>

</div>
</Container>
    </div>
  )
}

export default IntroSection