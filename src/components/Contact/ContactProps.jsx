import React from 'react'
import Contact from '../Contact/Contact'

import { ContactUs } from './ContactUs'


const ContactProps = () => {
  return (
    <div>
         
        
        <Contact className="contact" id="contact"/>
        
        
        <br/>
        <ContactUs/>
        <br/>
        <br/>
        <p style={{textAlign:'center',fontFamily:'revert'}}>Created By Alif Ahmed |  2023 All rights reserved.
        </p>
        <p style={{textAlign:'center',fontFamily:'revert'}}>Thank you for attention</p>
    </div>
  )
}

export default ContactProps