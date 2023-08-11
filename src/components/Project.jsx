import React from 'react';
// import { Link } from 'react-router-dom';
import INFO from '../data/Info'
import meshop from '../data/meshop.png'
import youtube from '../data/youtube.png'
import travel from '../data/travel.png'
import Signup from '../data/Signup.png'

const Project = () => {
    console.log(INFO.projects)

const imgData = [travel,meshop,youtube,Signup];
function getImage(index) {
    return imgData[index];
}
    return (
        <section id='project' className="project">
            <div className="project-details">
                <h1 style={{ textAlign: 'center' }} className="project-heading">Projects</h1>
                <div className="projectAllData">
                    {
                        INFO.projects.map((project, index) => {
                            return (<div key={index} className="projectCard">
                                <img src={getImage(index)} alt="img" className="projectImg" />
                                <div className="card-details">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-decription">{project.description}</p>
                                    <div className="btn">
                                        <a href={project.link} target='_blank' rel='noopener noreferrer' >View</a>
                                    </div>
                                </div>
                            </div>)
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default Project