import React from 'react'
import '../css/IntroSection.css'
import { Container } from 'react-bootstrap'
import '../css/Projects.css'

import ar1 from '../assets/images/ar1.svg'
import ar2 from '../assets/images/ar2.svg'
import ar3 from '../assets/images/ar3.svg'

import mail from '../assets/images/Group 11 (1).svg'
import vm from '../assets/images/Vector (11).svg'

import avatar from '../assets/images/Ellipse 2 (1).png'
import git from '../assets/images/Vector (11b).svg'
import gm from '../assets/images/Vector (12).svg'
import { Link } from 'react-router-dom'

const Projects = () => {


    const projects = [
        {
            id: 1,
            skill_name: "Javacript, React & Node",
            project_name: "FARMA - E-commerce Website",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 2,
            skill_name: "React & Node",
            project_name: "POSTIT - Blog Website",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 3,
            skill_name: "HTML, CSS & Bootstrap",
            project_name: "ADVENTOR - Tours & Travel Website",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 4,
            skill_name: "BootStrap & CSS",
            project_name: "Furns - Landing Page",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 5,
            skill_name: "React & Node",
            project_name: "POST IT - Blog Website",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 6,
            skill_name: "HTML, CSS & Bootstrap",
            project_name: "ADVENTOR - Tours & Travel Website",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 7,
            skill_name: "Javacript, React & Node",
            project_name: "FARMA - E-commerce Website",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 8,
            skill_name: "React & Node",
            project_name: "POSTIT - Blog Website",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 9,
            skill_name: "HTML, CSS & Bootstrap",
            project_name: "ADVENTOR - Tours & Travel Website",
            github_link: "/",
            website_link: "/",
        },
        {
            id: 10,
            skill_name: "BootStrap & CSS",
            project_name: "Furns - Landing Page",
            github_link: "/",
            website_link: "/",
        }, {
            id: 11,
            skill_name: "HTML, CSS & Bootstrap",
            project_name: "ADVENTOR - Tours & Travel Website",
            github_link: "/",
            website_link: "/",
        }, {
            id: 12,
            skill_name: "Javacript, React & Node",
            project_name: "FARMA - E-commerce Website",
            github_link: "/",
            website_link: "/",
        },
    ];


    return (
        <div className='i-c'>

            <Container>
                <div className="pr-container">

                    <div className="prr-i-frame">
                        <Link to="/" className='lh'><h1 className='owner'>David.</h1></Link>
                        <div className="prr-header">
                            <h6 className='prr-h6'>Full Stack Developer</h6>
                        </div>

                        <div className="prr-text">
                            <h1 className='prr-h1'>David Onyekwere</h1>
                            <p className='prr-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pha tortor consequat nibh gravida id sit. Quis eget diam ut proin. At nisl diam urna sit. Tortor nibh ornare vestibulum amet dis eros dolor eget. Orci in enim sit luctus lacus arcu.</p>
                        </div>

                        <div className='c-routes'>
                            <div className='c-fr'>
                                <div className="routes">
                                    <Link to="/projects" className='sp'>01 <img src={ar1} alt="" /> Projects</Link>


                                    <Link className='spp'>02 <img src={ar2} alt="" /> Download Resume</Link>

                                    <Link to="/contact" className='spp'>03 <img src={ar3} alt="" /> Contact</Link>
                                </div>


                            </div>
                        </div>

                        <div className="pr-last-line">
                            <img src={avatar} alt="" className='pr-avt' />
                            <p className="prr-socials">
                                <Link to="" className='pl'> <img src={mail} alt="" className='p-img' /> Email Me <img src={vm} alt="" className='p-img' /></Link>
                                <Link to="" className='pl'> <img src={git} alt="" className='p-img' /> Github <img src={gm} alt="" className='p-img' /></Link>
                            </p>

                        </div>
                    </div>

                    <div className="pr-frame">
                        <div className="pr-content row">

                            {projects.map(project => (
                                <div className={`col-12 col-md-4 mb-4 prp-details prp-details-${project.id}`} key={project.id}>
                                    <div className="pr-text">
                                        <h6 className='pr-h6'>{project.skill_name}</h6>
                                        <h1 className='pr-h1'>{project.project_name}</h1>
                                    </div>
                                    <div className="pr-sm">
                                        <div className="prp-soc">
                                            <p className="pr-socials">
                                                <Link to={project.github_link} className='prp'> <img src={mail} alt="" className='prp-img' /> Github <img src={vm} alt="" className='prp-img' /></Link>
                                                <Link to={project.website_link} className='prp' id='web'> <img src={git} alt="" className='prp-img' /> Website <img src={gm} alt="" className='prp-img' /></Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Projects