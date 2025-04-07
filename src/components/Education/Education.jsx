import React from 'react'
import './Education.css'
import Education_Details from '../../assets/education_details'

const Education = () => {
  return (
    <div id='education' className='education'>
        <div className="education-title"><h1>Education & Experience</h1></div>
        <div className="education-container">
            {Education_Details.map((education,index)=>{
                return <div key={index} className="education-format">
                    <h3>{education.e_name}</h3>
                    <h2>{education.e_institute}</h2>
                    <p>{education.e_percentage}<span>{education.e_score}</span></p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Education;