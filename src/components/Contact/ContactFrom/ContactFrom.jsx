import React from 'react'
import './ContactFrom.css'

const ContactFrom = () => {
  return (
    <div className="contact-form-content">
        <form action="https://api.web3forms.com/submit" method="POST">

        <input type="hidden" name="access_key" value="287d2dd6-c0a0-432c-aa5e-d52a4f370e19"/>

            <div className="name-container">
                <input type="text" name='firstname' placeholder='First Name' required/>
                <input type="text" name='lastname' placeholder='Last Name' required/>
            </div>
            <input type="email" name='email' placeholder='abc@gmail.com' required/>
            <textarea type="text" name='message' placeholder='Your Message' required rows={3}/>

            <button type='submit'>Send</button>
        </form>
    </div>
  )
}

export default ContactFrom