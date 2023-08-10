import React from 'react';


const Skills = () => {
  const skill = ['HTML', 'CSS', 'Javascript', 'React.js', 'Bootstrap', 'Java',]

  return (
    <section id='skill' className='skills'>

      <div className="skill-details">
        <h1 className="skill-title">Skills</h1>
        <div className="skillSet">
          {skill.map((item, index) => {
            return (
              <>
                <h3 key={index} className="skill-item">{item} </h3>
              </>
            )
          })}
        </div>
      </div>

    </section>
  )
}

export default Skills