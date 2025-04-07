import React from 'react'
import './MyWork.css'
import myworks from '../../assets/myworks'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Projects</h1>
        </div>
        <div className="mywork-container">
          {myworks.map((work,index)=>{
            return <div key={index} className="mywork-format">
              <img src={work.w_img} alt="" srcset="" />
              <h3>{work.w_name}</h3>
            </div>
          })}
        </div>
    </div>
  )
}

export default MyWork