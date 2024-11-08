import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import github_icon from '../../images/github-142-svgrepo-com.svg'
import email_icon from '../../images/email-svgrepo-com.svg'
import ContactFrom from './ContactFrom/ContactFrom'

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
      <h5>Find Me</h5>

      <div className="contact-content">
        <div className="" style={{flex: 1}}>
          <ContactInfoCard
            icon={email_icon}  
            text='fayaz7rg@gmail.com'
          />
          <ContactInfoCard
            icon={github_icon}
            text='https://github.com/Nawaf-Rayhan585'
          />
        </div>
        <div style={{flex: 1}}>
          <ContactFrom/>
        </div>
      </div>
    </section>
  )
}

export default Contact