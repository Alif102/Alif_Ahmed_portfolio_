import React from 'react'

const Contact = (props) => {
  return (
    
    <div>
      
      <div className='card-contactt'>
        
     
            <div className='card-body-contactt'> 
                <h2 className='card-location'>{props.ico} </h2>
                <h2 className='card-email'>{props.email}</h2>
                <h2 className='card-phone'>{props.phone}</h2>
            </div>

          
                   
                
        </div>
    </div>
  )
}

export default Contact