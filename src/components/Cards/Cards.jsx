import React from 'react'
import './Cards.css'
import educ from '../../assets/educ.png'
import dashb from '../../assets/dashb.png'

import eco from '../../assets/eco.png'



const Cards = () => {

      const openInNewTab = url => {
            window.open(url, '_blank', 'noopener,noreferrer');
          }
  return (
    <>
    <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 id='projects'>Projects</h2>
                        <p>I show you to all the big and small websites I have done so far<br/></p>
                        </div></div>
<div className="content">

      
      <div className="card">
            <div className='cardImg'>
                  <img src={educ} alt='edu'/>
            </div>
            
         
            <p className="title">Web Development Courses</p>
            <p className="text">
            <div className="icon"><i className="material-icons md-46" onClick={()=> openInNewTab('https://alif102.github.io/WebCourses/')} >LIVE DEMO</i></div>
            </p>
         
      </div>
      
      
      <div className="card" >
      <div className='cardImg'>
                  <img src={dashb} alt='edu'/>
            </div>
      
      
         
           
            <p className="title">React Admin Dashboard</p>
            <p className="text">
            <div className="icon"><i className="material-icons md-46"  onClick={()=> openInNewTab('https://alif102.github.io/Admin_Dashboard/')} >LIVE DEMO</i></div>
            </p>
         
      </div>
      
      
      <div className="card">
      <div className='cardImg'>
                  <img src={eco} alt='edu'/>
            </div>
            
            <p className="title">Ecommerce Website <small>Using React Redux</small></p>
            <p className="text">
            <div className="icon"><i className="material-icons md-46" onClick={()=> openInNewTab('https://alif102.github.io/Amazon_Ecom/')} >LIVE DEMO</i></div>
            </p>
         
      </div>
      
   

   
   </div>
    
    </>
  )
}

export default Cards

